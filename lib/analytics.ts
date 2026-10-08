export type PublicEvent = "booking_cta_clicked" | "market_selected" | "form_started" | "form_completed";

type EventProperties = {
  market?: "QA" | "GB" | "PL";
  pagePath?: string;
};

const allowedProperties = new Set(["market", "pagePath"]);

/** Safe integration point for a future privacy-conscious analytics provider. Never pass form fields here. */
export function trackPublicEvent(event: PublicEvent, properties: EventProperties = {}): void {
  if (typeof window === "undefined") return;
  const safe: Record<string, string> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (allowedProperties.has(key) && typeof value === "string" && value.length < 160) safe[key] = value;
  }
  window.dispatchEvent(new CustomEvent("julia:analytics", { detail: { event, ...safe } }));
}
