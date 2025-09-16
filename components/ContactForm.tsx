"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const message = messageRef.current?.value.trim() || "";
    if (!name || !email || !message) {
      setToast({ type: "error", text: "Please complete all fields." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setToast({ type: "success", text: "Message sent. We’ll get back to you shortly." });
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      } else {
        const reason = (data && (data.reason as string)) || "unknown";
        let text = "Could not send right now. Please try again.";
        if (reason === "email_not_configured") text = "Email is not configured yet. Please email us directly at julia.chwascinska@gmail.com.";
        if (reason === "email_send_failed") {
          text = "Email provider rejected the request. Please try again or email us directly at julia.chwascinska@gmail.com.";
        }
        setToast({ type: "error", text });
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      }
    } catch {
      setToast({ type: "error", text: "Network error. Please try again." });
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {toast && (
        <div className={`fixed z-40 top-4 right-4 px-4 py-3 rounded-md shadow border ${toast.type === "success" ? "bg-white/90 border-green-300 text-green-800 dark:bg-gray-900/80 dark:text-green-300" : "bg-white/90 border-red-300 text-red-800 dark:bg-gray-900/80 dark:text-red-300"}`} role="status" aria-live="polite">
          {toast.text}
        </div>
      )}
      <form onSubmit={onSubmit} className="mt-6 max-w-2xl mx-auto rounded-2xl border bg-white/80 dark:bg-gray-900/50 backdrop-blur shadow-sm p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" className="w-full field" placeholder="Jane Doe" ref={nameRef} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="w-full field" placeholder="you@example.com" ref={emailRef} required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Your message</label>
          <textarea id="message" name="message" className="w-full min-h-32 field" placeholder="Briefly describe what you’d like support with." ref={messageRef} required />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button type="submit" disabled={loading} className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600">
            {loading ? "Sending…" : "Send enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
