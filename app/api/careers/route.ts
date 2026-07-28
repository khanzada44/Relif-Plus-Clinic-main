import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const message = formData.get("message") as string;

    const cv = formData.get("resume") as File;

    if (!cv) {
      return NextResponse.json(
        { error: "CV is required" },
        { status: 400 }
      );
    }

    const bytes = await cv.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        Authorization: `Bearer re_4aZbJRne_N15Jjf8a1o9jzc4NFTL6cgaL`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Relief Plus Wellness <onboarding@resend.dev>",
        // to: "info@reliefpluswellness.com",
        to: "minhamhussain@gmail.com",
        reply_to: email,
        subject: `New Job Application - ${fullName}`,
        html: `
          <h2>New Job Application</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Experience:</strong> ${experience}</p>

          <h3>Cover Letter</h3>
          <p>${message || "N/A"}</p>
        `,
        attachments: [
          {
            filename: cv.name,
            content: base64,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error(await response.text());

      return NextResponse.json(
        { error: "Email send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}