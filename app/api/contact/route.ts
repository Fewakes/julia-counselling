import { NextResponse } from "next/server";
import { RESEND_API_KEY, CONTACT_FROM_DEFAULT, CONTACT_TO_DEFAULT } from "../../../lib/utils";

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
      const html = `<h2>New enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>`;
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
    const html = `<h2>New enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>`;

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
