import { NextResponse } from "next/server";
import { RESEND_API_KEY, CONTACT_FROM_DEFAULT, CONTACT_TO_DEFAULT } from "../../../lib/utils";
import { siteUrl } from "../../../lib/site";

const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function overLimit(key: string, now = Date.now()): boolean {
  if (submissions.size > 1000) {
    for (const [address, times] of submissions) {
      if (!times.some((time) => now - time < WINDOW_MS)) submissions.delete(address);
    }
  }
  const recent = (submissions.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS) return true;
  recent.push(now);
  submissions.set(key, recent);
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml({ name, email, message, phone, supportFor, age, preferredContact, market }: { name: string; email: string; message: string; phone: string; supportFor: string; age: string; preferredContact: string; market: string }) {
  const safeMsg = escapeHtml(message);
  const brand = "#315b4d";
  const textMuted = "#6b7280"; // gray-500
  const bg = "#f8fafc"; // slate-50
  const card = "#ffffff";
  const logo = `${siteUrl}/julia2.jpeg`;
  const mailto = `mailto:${encodeURIComponent(email)}`;
  const contactUrl = `${siteUrl}/qatar/contact/`;
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
          <td style="padding:8px 24px 0 24px;font-size:14px;line-height:1.8;color:#374151;">
            <div>Market: ${escapeHtml(market)}</div>
            <div>Phone: ${escapeHtml(phone || "Not provided")}</div>
            <div>Seeking support for: ${escapeHtml(supportFor)}</div>
            <div>Age: ${escapeHtml(age || "Not provided")}</div>
            <div>Preferred reply: ${escapeHtml(preferredContact)}</div>
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
    return { ok: false as const, reason: "email_send_failed", status: res.status } as const;
  }
  return { ok: true as const };
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    if (origin && new URL(origin).origin !== new URL(req.url).origin) {
      return NextResponse.json({ ok: false, error: "invalid_origin" }, { status: 403 });
    }
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 10_000) return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
    const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (overLimit(forwarded)) return NextResponse.json({ ok: false, error: "too_many_requests" }, { status: 429 });
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data")) {
      // Gracefully handle JSON for API usage
      const data = (await req.json().catch(() => ({}))) as {
        name?: string;
        email?: string;
        message?: string;
        phone?: string;
        age?: string;
        preferredContact?: string;
        supportFor?: string;
        market?: string;
        consent?: string;
        company?: string;
      };
      if (data.company) return NextResponse.json({ ok: true });
      const name = String(data.name || "").replace(/[\r\n]/g, " ").trim().slice(0, 100);
      const email = String(data.email || "").trim().slice(0, 200);
      const message = String(data.message || "").trim().slice(0, 1200);
      const phone = String(data.phone || "").trim().slice(0, 40);
      const age = String(data.age || "").trim().slice(0, 2);
      const preferredContact = String(data.preferredContact || "email");
      const supportFor = String(data.supportFor || "unsure");
      const market = String(data.market || "");
      const validSupport = ["child", "teen", "parent", "unsure"].includes(supportFor);
      const validAge = !age || /^(?:[1-9]|1[0-9]|20)$/.test(age);
      const validPreferredContact = ["email", "phone"].includes(preferredContact);
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailOk || !message || data.consent !== "yes" || !validSupport || !validAge || !validPreferredContact || !["QA", "GB", "PL"].includes(market)) {
        return NextResponse.json({ ok: false, error: "invalid_submission" }, { status: 400 });
      }
      const to = CONTACT_TO_DEFAULT;
      const from = CONTACT_FROM_DEFAULT;
      const subject = `New ${market} enquiry from ${name}`;
      const text = `Market: ${market}\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSeeking support for: ${supportFor}\nAge: ${age || "Not provided"}\nPreferred reply: ${preferredContact}\n\n${message}`;
      const html = buildEmailHtml({ name, email, message, phone, supportFor, age, preferredContact, market });
      const r = await sendEmail({ from, to, subject, text, html, replyTo: email });
      return NextResponse.json(r, { status: r.ok ? 200 : 500 });
    }

    const form = await req.formData();
    // Honeypot
    if (form.get("company")) {
      return NextResponse.redirect(new URL("/thanks", req.url));
    }
    const name = String(form.get("name") || "").replace(/[\r\n]/g, " ").trim().slice(0, 100);
    const email = String(form.get("email") || "").trim().slice(0, 200);
    const message = String(form.get("message") || "").trim().slice(0, 1200);
    const phone = String(form.get("phone") || "").trim().slice(0, 40);
    const age = String(form.get("age") || "").trim().slice(0, 2);
    const preferredContact = String(form.get("preferredContact") || "email");
    const supportFor = String(form.get("supportFor") || "unsure");
    const market = String(form.get("market") || "");
    const validSupport = ["child", "teen", "parent", "unsure"].includes(supportFor);
    const validAge = !age || /^(?:[1-9]|1[0-9]|20)$/.test(age);
    const validPreferredContact = ["email", "phone"].includes(preferredContact);
    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/contact/error", req.url));
    }

    // Basic email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk || form.get("consent") !== "yes" || !validSupport || !validAge || !validPreferredContact || !["QA", "GB", "PL"].includes(market)) {
      return NextResponse.redirect(new URL("/contact/error", req.url));
    }

    const to = CONTACT_TO_DEFAULT;
    const from = CONTACT_FROM_DEFAULT;
    const subject = `New ${market} enquiry from ${name}`;
    const text = `Market: ${market}\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSeeking support for: ${supportFor}\nAge: ${age || "Not provided"}\nPreferred reply: ${preferredContact}\n\n${message}`;
    const html = buildEmailHtml({ name, email, message, phone, supportFor, age, preferredContact, market });

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
