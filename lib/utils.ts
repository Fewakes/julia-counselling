import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

export const CONTACT_TO_DEFAULT =
  process.env.CONTACT_TO || "julia.chwascinska@gmail.com";

export const CONTACT_FROM_DEFAULT =
  process.env.CONTACT_FROM || "Website <onboarding@resend.dev>";
