import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Email config helpers
// NOTE: For development convenience, we include a fallback to a provided key
// when no env var is set AND only in non-production. Do NOT ship secrets in
// production builds — set RESEND_API_KEY in your hosting env instead.
export const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

export const CONTACT_TO_DEFAULT = process.env.CONTACT_TO || "julia.chwascinska@gmail.com";

export const CONTACT_FROM_DEFAULT = process.env.CONTACT_FROM || "Website <onboarding@resend.dev>";
