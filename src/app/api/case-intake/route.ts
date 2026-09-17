import { NextRequest, NextResponse } from "next/server";
import { getResendClient, TO_EMAIL, FROM_EMAIL, escapeHtml } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const resend = getResendClient();
    const body = await request.json();
    const {
      name,
      age,
      phone,
      city,
      specialty,
      details,
      hasDocuments,
      timeline,
      contactPreference,
      captchaInput,
      captchaExpected,
    } = body;

    // Required fields, matching CaseFormModal's step validation.
    if (!name || !age || !phone || !city || !specialty || !details || !timeline || !contactPreference) {
      return NextResponse.json(
        { error: "Please fill in all required case fields." },
        { status: 400 }
      );
    }

    // Server-side CAPTCHA verification
    if (
      !captchaExpected ||
      !captchaInput ||
      captchaInput.trim().toLowerCase() !== String(captchaExpected).trim().toLowerCase()
    ) {
      return NextResponse.json(
        { error: "Security check failed. Please enter the correct CAPTCHA code." },
        { status: 400 }
      );
    }

    // Generate a unique case ID on the server so it can't be spoofed by the client.
    const caseId = "BL-" + Math.floor(100000 + Math.random() * 900000);

    // Formatted submission timestamp in Indochina Time
    const submissionTime =
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Phnom_Penh",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }) + " (ICT)";

    // Clean phone number for direct WhatsApp action
    const cleanPhone = String(phone).replace(/[^0-9]/g, "");

    const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Patient Case Intake [${caseId}]</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 36px 12px;">
    <tr>
      <td align="center">
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(27, 95, 174, 0.08); border: 1px solid #e2e8f0; margin: 0 auto;">
          
          <!-- Top Accent Gradient Line -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #1b5fae 0%, #2fb6a6 50%, #7ac143 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1b5fae 0%, #164e91 60%, #112e52 100%); padding: 32px 28px; text-align: left;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.16); padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; color: #a9e092; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">
                      ✦ Patient Case Intake
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.25; letter-spacing: -0.5px;">
                      New Patient Case Submitted
                    </h1>
                    <p style="margin: 6px 0 0; color: #d6e9fa; font-size: 14px;">
                      Medibee Global &bull; Cross-Border Medical Coordination
                    </p>
                  </td>
                  <td align="right" valign="top" style="text-align: right;">
                    <div style="background-color: #ffffff; border-radius: 12px; padding: 8px 14px; text-align: center; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                      <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Case ID</div>
                      <div style="font-size: 16px; font-weight: 800; color: #1b5fae; letter-spacing: 0.5px;">${caseId}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Priority Alert Ribbon -->
          <tr>
            <td style="background-color: #eff6ff; border-bottom: 1px solid #dbeafe; padding: 13px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 13px; color: #1e40af; font-weight: 600;">
                    🩺 Specialty: <span style="background-color: #dbeafe; color: #1d4ed8; padding: 3px 8px; border-radius: 6px; font-weight: 700;">${escapeHtml(specialty)}</span>
                    &nbsp;&bull;&nbsp; Timeline: <span style="color: #b45309; font-weight: 700;">${escapeHtml(timeline)}</span>
                  </td>
                  <td align="right" style="font-size: 12px; color: #64748b;">
                    ${submissionTime}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 28px;">

              <!-- Section 1: Patient Information -->
              <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 800; color: #1b5fae; text-transform: uppercase; letter-spacing: 0.8px;">
                👤 Patient Information
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td width="50%" style="padding: 14px 16px; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Full Name</div>
                    <div style="font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 2px;">${escapeHtml(name)}</div>
                  </td>
                  <td width="50%" style="padding: 14px 16px; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Age</div>
                    <div style="font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 2px;">${escapeHtml(age)} years old</div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 14px 16px; border-right: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Phone Number</div>
                    <div style="font-size: 15px; font-weight: 700; margin-top: 2px;">
                      <a href="tel:${escapeHtml(phone)}" style="color: #1b5fae; text-decoration: none;">${escapeHtml(phone)}</a>
                    </div>
                  </td>
                  <td width="50%" style="padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">City / Location</div>
                    <div style="font-size: 15px; font-weight: 700; color: #0f172a; margin-top: 2px;">${escapeHtml(city)}, Cambodia</div>
                  </td>
                </tr>
              </table>

              <!-- Section 2: Case Details -->
              <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 800; color: #1b5fae; text-transform: uppercase; letter-spacing: 0.8px;">
                🏥 Case Requirements
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td width="50%" style="padding: 14px 16px; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Specialty</div>
                    <div style="margin-top: 5px;">
                      <span style="display: inline-block; background-color: #edf5fd; color: #1b5fae; border: 1px solid #b0d5f5; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                        🩺 ${escapeHtml(specialty)}
                      </span>
                    </div>
                  </td>
                  <td width="50%" style="padding: 14px 16px; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Timeline</div>
                    <div style="margin-top: 5px;">
                      <span style="display: inline-block; background-color: #fffbeb; color: #b45309; border: 1px solid #fde68a; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                        ⏱️ ${escapeHtml(timeline)}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 14px 16px; border-right: 1px solid #e2e8f0;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Preferred Contact</div>
                    <div style="margin-top: 5px;">
                      <span style="display: inline-block; background-color: #f0fdfa; color: #0d9488; border: 1px solid #99f6e4; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                        💬 ${escapeHtml(contactPreference)}
                      </span>
                    </div>
                  </td>
                  <td width="50%" style="padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase;">Medical Records</div>
                    <div style="margin-top: 5px;">
                      ${
                        hasDocuments
                          ? `<span style="display: inline-block; background-color: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                              ✓ Records Available
                            </span>`
                          : `<span style="display: inline-block; background-color: #f1f5f9; color: #64748b; border: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; padding: 4px 10px; border-radius: 6px;">
                              No Files Attached
                            </span>`
                      }
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Section 3: Medical Concern Description -->
              <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 800; color: #1b5fae; text-transform: uppercase; letter-spacing: 0.8px;">
                📋 Medical Concern &amp; Clinical Notes
              </h2>

              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 5px solid #1b5fae; border-radius: 8px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
                <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #334155;">
                  ${escapeHtml(details).replace(/\n/g, "<br/>")}
                </p>
              </div>

              <!-- Section 4: Quick Action Buttons -->
              <div style="text-align: center; padding: 6px 0 10px;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 6px;">
                      <a href="tel:${escapeHtml(phone)}" style="display: inline-block; background: linear-gradient(135deg, #1b5fae 0%, #164e91 100%); color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 11px 22px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(27, 95, 174, 0.25);">
                        📞 Call Patient
                      </a>
                    </td>
                    ${
                      cleanPhone
                        ? `<td style="padding: 0 6px;">
                            <a href="https://wa.me/${cleanPhone}" target="_blank" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 11px 22px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);">
                              💬 WhatsApp Patient
                            </a>
                          </td>`
                        : ""
                    }
                  </tr>
                </table>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 22px 28px; text-align: center;">
              <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; color: #475569;">
                Medibee Global &bull; Cross-Border Patient Intake
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                🔒 <strong>Confidentiality Notice:</strong> This message contains confidential patient health information intended solely for authorized medical coordinators.
              </p>
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
      subject: `New Case Intake [${caseId}] - ${escapeHtml(name)} (${escapeHtml(specialty)})`,
      html: htmlEmail,
    });

    if (error) {
      console.error("Resend error (case-intake):", error);
      return NextResponse.json(
        { error: "Failed to submit case. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id, caseId },
      { status: 200 }
    );
  } catch (err) {
    console.error("Case intake error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
