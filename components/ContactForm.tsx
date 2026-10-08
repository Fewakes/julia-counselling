"use client";

import { useRef, useState } from "react";
import { trackPublicEvent } from "../lib/analytics";

type MarketCode = "QA" | "GB" | "PL";
type FormCopy = { name: string; email: string; phone: string; age: string; preferred: string; emailMethod: string; phoneMethod: string; seeking: string; child: string; teen: string; parent: string; unsure: string; message: string; placeholder: string; consent: string; privacy: string; send: string; sending: string; success: string; error: string };
const labels: Record<MarketCode, FormCopy> = {
  QA: { name: "Your name", email: "Email address", phone: "Phone (optional)", age: "Child or teenager’s age (optional)", preferred: "Preferred way to reply", emailMethod: "Email", phoneMethod: "Phone", seeking: "I'm seeking support for", child: "A child", teen: "A teenager", parent: "A parent consultation", unsure: "I'm not sure yet", message: "Short message", placeholder: "A brief note about what you would like to discuss is enough.", consent: "I agree to be contacted about this enquiry.", privacy: "Please avoid including diagnoses, detailed personal histories or emergency information.", send: "Send an enquiry", sending: "Sending…", success: "Thank you for getting in touch. Your message has been received. Julia will respond as soon as possible with information about the next step.", error: "We could not send your enquiry just now. Please try again later." },
  GB: { name: "Your name", email: "Email address", phone: "Phone (optional)", age: "Child or teenager’s age (optional)", preferred: "Preferred way to reply", emailMethod: "Email", phoneMethod: "Phone", seeking: "I'm enquiring about", child: "Child counselling", teen: "Teen counselling", parent: "A parent consultation", unsure: "I'm not sure yet", message: "A short message", placeholder: "A brief note about what you would like to ask is enough.", consent: "I agree to be contacted about this enquiry.", privacy: "Please avoid diagnoses, detailed personal histories or emergency information.", send: "Send enquiry", sending: "Sending…", success: "Thank you for getting in touch. Your message has been received. Julia will respond as soon as possible with information about the next step.", error: "We could not send your enquiry just now. Please try again later." },
  PL: { name: "Imię", email: "Adres e-mail", phone: "Telefon (opcjonalnie)", age: "Wiek dziecka lub nastolatka (opcjonalnie)", preferred: "Preferowana forma odpowiedzi", emailMethod: "E-mail", phoneMethod: "Telefon", seeking: "Szukam informacji na temat", child: "Wsparcia dla dziecka", teen: "Wsparcia dla nastolatka lub nastolatki", parent: "Konsultacji dla rodzica", unsure: "Jeszcze nie wiem", message: "Krótka wiadomość", placeholder: "Krótko napisz, o co chcesz zapytać.", consent: "Zgadzam się na kontakt w sprawie mojego zapytania.", privacy: "Nie wpisuj diagnoz, szczegółowej historii zdrowia ani informacji o nagłym zagrożeniu.", send: "Wyślij wiadomość", sending: "Wysyłanie…", success: "Dziękuję za wiadomość. Julia odpowie, gdy tylko będzie mogła, i napisze o możliwym kolejnym kroku.", error: "Nie udało się teraz wysłać wiadomości. Spróbuj ponownie później." },
};

export default function ContactForm({ market }: { market: MarketCode }) {
  const copy = labels[market];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const started = useRef(false);

  function startForm() {
    if (started.current) return;
    started.current = true;
    trackPublicEvent("form_started", { market, pagePath: window.location.pathname });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(data)), headers: { "Content-Type": "application/json" } });
      const result = await response.json().catch(() => ({ ok: false }));
      if (!response.ok || !result.ok) throw new Error("Unable to send");
      form.reset();
      trackPublicEvent("form_completed", { market, pagePath: window.location.pathname });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" action="/api/contact" method="post" onSubmit={submit} onFocusCapture={startForm} lang={market === "PL" ? "pl" : "en"}>
    <input type="hidden" name="market" value={market} />
    <div className="form-row"><label>{copy.name}<input name="name" autoComplete="name" maxLength={100} required /></label><label>{copy.email}<input type="email" name="email" autoComplete="email" maxLength={200} required /></label></div>
    <div className="form-row"><label>{copy.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label><label>{copy.seeking}<select name="supportFor" defaultValue="unsure" required><option value="child">{copy.child}</option><option value="teen">{copy.teen}</option><option value="parent">{copy.parent}</option><option value="unsure">{copy.unsure}</option></select></label></div>
    <div className="form-row"><label>{copy.age}<input name="age" inputMode="numeric" maxLength={2} pattern="[0-9]{1,2}" /></label><label>{copy.preferred}<select name="preferredContact" defaultValue="email"><option value="email">{copy.emailMethod}</option><option value="phone">{copy.phoneMethod}</option></select></label></div>
    <label>{copy.message}<textarea name="message" rows={4} maxLength={1200} placeholder={copy.placeholder} required /></label>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>{copy.consent}</span></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<input name="company" tabIndex={-1} autoComplete="off" /></label>
    <p className="form-privacy">{copy.privacy} {market === "PL" ? "Treść formularza nie jest przekazywana do statystyk strony." : "Your form contents are not sent to website analytics."}</p>
    <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? copy.sending : copy.send}<span aria-hidden="true">→</span></button>
    <p className="form-status" role="status" aria-live="polite">{status === "success" ? copy.success : status === "error" ? copy.error : ""}</p>
  </form>;
}
