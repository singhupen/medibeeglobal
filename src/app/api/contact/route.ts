import { NextRequest, NextResponse } from "next/server";
import { getResendClient, TO_EMAIL, FROM_EMAIL, escapeHtml } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const resend = getResendClient();
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Required fields, matching the form's "required" inputs.
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone and message are required." },
        { status: 400 }
      );
    }

    // Only validate email format when an email was actually provided,
    // since the field is optional on this form.
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      // Replying to this email will reply directly to the visitor,
      // when an email address was provided.
      replyTo: email || undefined,
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <h2>New Contact Page Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
        ${subject ? `<p><strong>Treatment / Specialty:</strong> ${escapeHtml(subject)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error (contact):", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
