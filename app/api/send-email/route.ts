import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
//push
export async function POST(req: NextRequest) {
  const { name, email } = (await req.json()) as any;
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Dev Jirga" <info@devjirga.live>`,
      to: email,
      subject: "Thank You for Registering for the Dev Jirga Event!",
      text: `Hello ${name},

Thank you for registering for the Dev Jirga event!

We are excited to have you join us for an insightful and inspiring session.

If you have any questions or need further information, feel free to contact us.

Best Regards,
The Dev Jirga Team
    `,
      html: `
<h3>Hello ${name},</h3>
<p>Thank you for registering for the <b>Dev Jirga event</b>!</p>
<p>We are excited to have you join us for an insightful and inspiring session.</p>
<p>If you have any questions or need further information, feel free to contact us.</p>
<p>Best Regards,</p>
<p><strong>The Dev Jirga Team</strong></p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
