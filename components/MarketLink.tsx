"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { saveMarketPreference, type MarketKey } from "../lib/market-preference";
import { trackPublicEvent } from "../lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; market: MarketKey; children: ReactNode };

export function MarketLink({ href, market, children, onClick, ...props }: Props) {
  return <Link href={href} {...props} onClick={(event) => {
    saveMarketPreference(market);
    if (href.startsWith(`/${market}/`)) trackPublicEvent("market_selected", { market: market === "qatar" ? "QA" : market === "uk" ? "GB" : "PL", pagePath: window.location.pathname });
    onClick?.(event);
  }}>{children}</Link>;
}
