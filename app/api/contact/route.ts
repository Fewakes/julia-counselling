import { NextResponse } from "next/server";
import { RESEND_API_KEY, CONTACT_FROM_DEFAULT, CONTACT_TO_DEFAULT } from "../../../lib/utils";
import { siteUrl } from "../../../lib/site";

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml({ name, email, message }: { name: string; email: string; message: string }) {
  const safeMsg = escapeHtml(message);
  const brand = "#4f46e5"; // indigo-600
  const textMuted = "#6b7280"; // gray-500
  const bg = "#f8fafc"; // slate-50
  const card = "#ffffff";
  const logo = `${siteUrl}/julia.jpeg`;
  const mailto = `mailto:${email}`;
  const contactUrl = `${siteUrl}#contact`;
  return `
  <!doctype html>
  <html lang="en">
    <body style="margin:0;padding:24px;background:${bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,'Apple Color Emoji','Segoe UI Emoji';color:#111827;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:${card};border-radius:14px;box-shadow:0 1px 2px rgba(0,0,0,0.06);overflow:hidden;border:1px solid #e5e7eb;">
        <tr>
          <td style="padding:0;background:linear-gradient(90deg, ${brand}, #7c3aed);">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td style="padding:20px;display:flex;align-items:center;gap:12px;">
                  <img src="${logo}" width="40" height="40" alt="Julia" style="border-radius:999px;vertical-align:middle;object-fit:cover;border:2px solid rgba(255,255,255,0.7)" />
                  <div style="color:white;font-weight:600;font-size:16px;">New enquiry</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 24px 8px 24px;">
            <div style="font-size:18px;font-weight:600;">From: ${escapeHtml(name)}</div>
            <div style="margin-top:4px;font-size:14px;color:${textMuted};">Email: <a href="${mailto}" style="color:${brand};text-decoration:none;">${escapeHtml(email)}</a></div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 24px 0 24px;">
            <div style="font-size:14px;color:${textMuted};margin-bottom:6px;">Message</div>
            <div style="white-space:pre-wrap;font-size:16px;line-height:1.6;border:1px solid #e5e7eb;background:#f9fafb;border-radius:10px;padding:14px;">${safeMsg}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 24px 24px 24px;">
            <a href="${mailto}" style="display:inline-block;background:${brand};color:white;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:600;">Reply to ${escapeHtml(name)}</a>
            <a href="${contactUrl}" style="display:inline-block;margin-left:10px;color:${brand};text-decoration:none;font-weight:600;">Open contact page</a>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 24px 22px 24px;border-top:1px solid #e5e7eb;color:${textMuted};font-size:12px;">
            You received this enquiry via your website contact form.
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

async function sendEmail(opts: {
  from: string;
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}) {
  const { from, to, subject, text, html, replyTo } = opts;

  // Centralized read (env or dev fallback)
  const apiKey = RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing; email not sent.");
    return { ok: false as const, reason: "email_not_configured" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: Array.isArray(to) ? to : [to], subject, text, html, reply_to: replyTo }),
    // Prevent function from caching
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, body);
    return { ok: false as const, reason: "email_send_failed", status: res.status, body } as const;
  }
  return { ok: true as const };
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data")) {
      // Gracefully handle JSON for API usage
      const data = (await req.json().catch(() => ({}))) as {
        name?: string;
        email?: string;
        message?: string;
      };
      const name = String(data.name || "").slice(0, 200);
      const email = String(data.email || "").slice(0, 200);
      const message = String(data.message || "").slice(0, 5000);
      if (!name || !email || !message) return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
      const to = CONTACT_TO_DEFAULT;
      const from = CONTACT_FROM_DEFAULT;
      const subject = `New enquiry from ${name}`;
      const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const html = buildEmailHtml({ name, email, message });
      const r = await sendEmail({ from, to, subject, text, html, replyTo: email });
      return NextResponse.json(r, { status: r.ok ? 200 : 500 });
    }

    const form = await req.formData();
    // Honeypot
    if (form.get("company")) {
      return NextResponse.redirect(new URL("/thanks", req.url));
    }
    const name = String(form.get("name") || "").trim().slice(0, 200);
    const email = String(form.get("email") || "").trim().slice(0, 200);
    const message = String(form.get("message") || "").trim().slice(0, 5000);

    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/contact/error", req.url));
    }

    // Basic email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.redirect(new URL("/contact/error", req.url));
    }

    const to = CONTACT_TO_DEFAULT;
    const from = CONTACT_FROM_DEFAULT;
    const subject = `New enquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const html = buildEmailHtml({ name, email, message });

    const result = await sendEmail({ from, to, subject, text, html, replyTo: email });
    if (!result.ok) {
      console.warn("[contact] Email not sent:", result);
      return NextResponse.redirect(new URL("/contact/error", req.url));
    }

    return NextResponse.redirect(new URL("/thanks", req.url));
  } catch (e) {
    console.error("[contact] Unexpected error", e);
    return NextResponse.redirect(new URL("/contact/error", req.url));
  }
}
