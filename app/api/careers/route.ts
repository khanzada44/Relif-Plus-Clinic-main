import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      return NextResponse.json({ error: "CV is required" }, { status: 400 });
    }

    const bytes = await cv.arrayBuffer();
    const buffer = Buffer.from(bytes);

      const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@reliefpluswellness.com",
        pass: "11223344@Azz",
      },
    });

    await transporter.sendMail({
      from: `"Relief Plus Wellness" <info@reliefpluswellness.com>`,
      to: "info@reliefpluswellness.com",
      replyTo: email,
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
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}