"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackPublicEvent } from "../lib/analytics";
import { saveMarketPreference, type MarketKey } from "../lib/market-preference";

const choices = [
  { label: "Qatar", flag: "🇶🇦", href: "/qatar/", key: "qatar" },
  { label: "United Kingdom", flag: "🇬🇧", href: "/uk/", key: "uk" },
  { label: "Polska", flag: "🇵🇱", href: "/pl/", key: "pl" },
];

export default function MarketSelector({ current = "home" }: { current?: string }) {
  const [selected, setSelected] = useState(current);
  useEffect(() => {
    if (current !== "home") { setSelected(current); return; }
    try {
      const saved = window.localStorage.getItem("julia-market");
      if (saved && choices.some((choice) => choice.key === saved)) setSelected(saved);
    } catch { /* The selector still works when storage is unavailable. */ }
  }, [current]);
  const active = choices.find((choice) => choice.key === selected);

  return (
    <details className="market-selector">
      <summary aria-label={`${active ? `Selected market: ${active.label}. ` : ""}Choose a market`}>{active?.flag ?? "◎"}<span>{active?.label ?? "Choose a market"}</span><span aria-hidden="true">⌄</span></summary>
      <div className="market-menu">
        {choices.map((choice) => (
          <Link key={choice.key} href={choice.href} aria-current={choice.key === selected ? "page" : undefined}
            onClick={() => { saveMarketPreference(choice.key as MarketKey); setSelected(choice.key); trackPublicEvent("market_selected", { market: choice.key === "qatar" ? "QA" : choice.key === "uk" ? "GB" : "PL", pagePath: window.location.pathname }); }}>
            <span aria-hidden="true">{choice.flag}</span>{choice.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
