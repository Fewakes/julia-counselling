"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackPublicEvent } from "../lib/analytics";
import { saveMarketPreference } from "../lib/market-preference";

export function BookingLink({ href = "/qatar/contact/", className, market = "QA", children }: { href?: string; className: string; market?: "QA" | "GB" | "PL"; children: ReactNode }) {
  return <Link href={href} className={className} onClick={() => { saveMarketPreference(market === "QA" ? "qatar" : market === "GB" ? "uk" : "pl"); trackPublicEvent("booking_cta_clicked", { market, pagePath: window.location.pathname }); }}>{children}</Link>;
}
