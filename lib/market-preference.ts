export type MarketKey = "qatar" | "uk" | "pl";

const validMarkets: MarketKey[] = ["qatar", "uk", "pl"];

export function saveMarketPreference(market: MarketKey): void {
  try { window.localStorage.setItem("julia-market", market); } catch { /* Cookie preference may still work when local storage is blocked. */ }
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `julia-market=${market}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
  } catch { /* Navigation should remain usable when browser storage is restricted. */ }
}

export function isMarketKey(value: string): value is MarketKey {
  return validMarkets.includes(value as MarketKey);
}
