import { Resend } from "resend";

// Lazily creates the Resend client instead of building it at module load time.
// The Resend SDK throws immediately if no API key is found, which would break
// `next build` in environments where RESEND_API_KEY isn't set yet (e.g. CI).
// Call this inside each route handler, where the env variable is guaranteed
// to be available at request time.
export function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Address that should receive all form submissions.
// Can be overridden per-environment via CONTACT_TO_EMAIL.
export const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "care@medibeeglobal.com";

// The "from" address must belong to a domain verified inside Resend.
// See RESEND_SETUP.md for the domain verification steps.
export const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "MedibeeGlobal <no-reply@medibeeglobal.com>";

// Escapes basic HTML special characters to avoid HTML injection
// when user-submitted values are placed inside the email HTML.
export function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
