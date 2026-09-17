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
    } = body;

    // Required fields, matching CaseFormModal's step validation.
    if (!name || !age || !phone || !city || !specialty || !details || !timeline || !contactPreference) {
      return NextResponse.json(
        { error: "Please fill in all required case fields." },
        { status: 400 }
      );
    }

    // Generate a case ID on the server so it can't be spoofed by the client.
    const caseId = "BL-" + Math.floor(100000 + Math.random() * 900000);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Case Submission [${caseId}] - ${escapeHtml(name)}`,
      html: `
        <h2>New Patient Case Submission</h2>
        <p><strong>Case ID:</strong> ${caseId}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Age:</strong> ${escapeHtml(age)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>City:</strong> ${escapeHtml(city)}</p>
        <p><strong>Specialty Needed:</strong> ${escapeHtml(specialty)}</p>
        <p><strong>Preferred Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Preferred Contact Method:</strong> ${escapeHtml(contactPreference)}</p>
        <p><strong>Has Medical Documents:</strong> ${hasDocuments ? "Yes" : "No"}</p>
        <p><strong>Medical Concern:</strong></p>
        <p>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>
      `,
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
