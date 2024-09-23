import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      subject: "DevJirga 2K24 - Registration Pending Confirmation",
      text: `Dear ${name},

Thank you for registering for DevJirga 2K24! We have received your registration, and we're currently processing it. You'll soon receive a confirmation email once your registration is finalized.

Event Details:
🗓 Date: 12 October 2024
🕐 Time: 10 AM - 4 PM
📍 Venue: Earth Science Auditorium, Quaid-i-Azam University, Islamabad

In the meantime, feel free to follow us on social media for the latest updates and announcements.

Instagram: https://www.instagram.com/devjirga?igsh=MTZldXEwNTgyZGRmNg==
LinkedIn: https://www.linkedin.com/company/devjirga/

We look forward to welcoming you to an exciting day at DevJirga 2K24!

Warm regards,
DevJirga Team
      `,
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for registering for <strong>DevJirga 2K24</strong>! We have received your registration, and we're currently processing it. You'll soon receive a confirmation email once your registration is finalized.</p>
        <p><strong>Event Details:</strong></p>
        <ul>
          <li>🗓 <strong>Date:</strong> 12 October 2024</li>
          <li>🕐 <strong>Time:</strong> 10 AM - 4 PM</li>
          <li>📍 <strong>Venue:</strong> Earth Science Auditorium, Quaid-i-Azam University, Islamabad</li>
        </ul>
        <p>In the meantime, feel free to follow us on social media for the latest updates and announcements:</p>
        <ul>
          <li><a href="https://www.instagram.com/devjirga?igsh=MTZldXEwNTgyZGRmNg==">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/devjirga/">LinkedIn</a></li>
        </ul>
        <p>We look forward to welcoming you to an exciting day at DevJirga 2K24!</p>
        <p>Warm regards,</p>
        <p><strong>DevJirga Team</strong></p>
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
