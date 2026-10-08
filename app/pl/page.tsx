import type { Metadata } from "next";
import MarketHomePage from "../../components/MarketHomePage";
import { plHome } from "../../content/market-homepages";
import { marketHomeMetadata } from "../../lib/seo";

export const metadata: Metadata = marketHomeMetadata(
  "Wsparcie dzieci i młodzieży | Julia Slojkowska",
  "Informacje o wsparciu dzieci, młodzieży i rodziców w emocjach, szkole, relacjach i zmianach. Możliwość współpracy potwierdzamy indywidualnie.",
  "/pl/",
);

export default function PolandHome() {
  return <MarketHomePage copy={plHome} />;
}
