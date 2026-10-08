import { MarketContactPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Kontakt | Julia Slojkowska", "Wyślij krótkie zapytanie o możliwość rozmowy i wsparcia dla dziecka, nastolatka lub rodziny.", "/pl/kontakt/");

export default function ContactPL() {
  return <MarketContactPage market="pl" title="Możemy zacząć od krótkiej wiadomości." description="Napisz, o co chcesz zapytać. Możliwość współpracy, jej formę i warunki potwierdzimy indywidualnie." />;
}
