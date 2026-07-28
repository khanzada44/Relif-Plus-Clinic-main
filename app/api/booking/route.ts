import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "@/constants/site";

// Mirrors the client-side schema — never trust client validation alone.
const bookingSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  message: z.string().optional(),
  // Honeypot: a real visitor never fills this (it's hidden from sighted and
  // screen-reader users alike). Bots that blindly fill every field will.
  // No length constraint here — the check happens after parsing so a filled
  // honeypot can be handled deliberately instead of just failing validation.
  companyWebsite: z.string().optional(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (parsed.data.companyWebsite) {
    // Honeypot tripped — respond as if successful so bots don't learn to
    // adapt, but do not actually send anything.
    return NextResponse.json({ success: true });
  }

  if (!process.env.RESEND_API_KEY) {
    // No email provider is configured yet. Fail honestly instead of telling
    // a real patient their request was received when nothing was sent —
    // see the Forms Audit report for what's needed to complete this.
    console.error("Booking form submission received but RESEND_API_KEY is not configured:", {
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
    });
    return NextResponse.json(
      { error: "Booking requests can't be delivered right now. Please call or book online instead." },
      { status: 503 }
    );
  }

  const { fullName, phone, email, message } = parsed.data;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${SITE.name} Website <onboarding@resend.dev>`,
      to: SITE.email,
      reply_to: email,
      subject: `New appointment request from ${fullName}`,
      text: `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message || "(none)"}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend API error:", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { error: "Booking requests can't be delivered right now. Please call or book online instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
