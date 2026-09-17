import { NextRequest, NextResponse } from "next/server";
import { getResendClient, TO_EMAIL, FROM_EMAIL, escapeHtml } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const resend = getResendClient();
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Required fields, matching the form's "required" inputs.
    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, phone, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const htmlEmail = `
    <!DOCTYPE html>
    <html>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7fa; color: #333333;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 600px; margin: 0 auto;">
              <!-- Header -->
              <tr>
                <td style="background-color: #0d9488; padding: 30px; text-align: center;">
                  <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Inquiry</h2>
                  <p style="margin: 8px 0 0; color: #ccfbf1; font-size: 15px;">You have received a new message from the website</p>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <!-- Contact Details -->
                  <h3 style="margin: 0 0 20px; color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Contact Details</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px; line-height: 1.6;">
                    <tr>
                      <td width="120" style="padding: 8px 0; color: #6b7280; font-weight: 500;">Name</td>
                      <td style="padding: 8px 0; color: #111827; font-weight: 600;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Phone</td>
                      <td style="padding: 8px 0; color: #111827;">${escapeHtml(phone)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Email</td>
                      <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Specialty</td>
                      <td style="padding: 8px 0;"><span style="background-color: #f0fdfa; color: #0f766e; padding: 4px 10px; border-radius: 6px; font-size: 14px; font-weight: 500;">${escapeHtml(subject)}</span></td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <h3 style="margin: 30px 0 15px; color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Message</h3>
                  <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px; color: #374151; font-size: 15px; line-height: 1.6;">
                    ${escapeHtml(message).replace(/\n/g, "<br/>")}
                  </div>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; border-top: 1px solid #f3f4f6; padding: 20px; text-align: center;">
                  <p style="margin: 0; color: #9ca3af; font-size: 13px;">This email was automatically generated from your website contact form.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Contact Inquiry from ${name}`,
      html: htmlEmail,
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
