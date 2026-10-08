import type { Metadata } from "next";
import MarketHomePage from "../../components/MarketHomePage";
import { ukHome } from "../../content/market-homepages";
import { marketHomeMetadata } from "../../lib/seo";

export const metadata: Metadata = marketHomeMetadata(
  "Counselling for Children & Teenagers | Julia Slojkowska",
  "Thoughtful counselling information for young people and parents considering anxiety, school pressure, confidence or change. Ask about current UK availability.",
  "/uk/",
);

export default function UKHome() {
  return <MarketHomePage copy={ukHome} />;
}
