import { EditorialPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Konsultacje dla rodziców | Julia Slojkowska", "Rozmowa dla rodziców, którzy chcą lepiej zrozumieć trudności dziecka i zastanowić się nad kolejnymi krokami.", "/pl/konsultacje-dla-rodzicow/");

export default function ParentsPL() {
  return <EditorialPage market="pl" eyebrow="KONSULTACJE DLA RODZICÓW" title="Nie musisz wiedzieć, czego dokładnie potrzebuje dziecko." description="Możesz zacząć od opowiedzenia, co zauważasz i jakie pytania wracają. Pierwsza rozmowa nie zobowiązuje do podjęcia dalszych kroków." sections={[
    { eyebrow: "PO CO ROZMAWIAĆ", title: "Kiedy domowe sposoby nie przynoszą spokoju.", paragraphs: ["Być może rozmawiasz z dzieckiem, dajesz mu przestrzeń, szukasz informacji w szkole lub pytasz bliskich o zdanie. Mimo to nadal coś Cię niepokoi. Konsultacja może pomóc zatrzymać się i spojrzeć na sytuację z szerszej perspektywy.", "Nie jest oceną rodzica ani diagnozą dziecka. To czas, by uporządkować obserwacje i sprawdzić, jakie pytania warto zadać."], points: ["Co zmieniło się w ostatnim czasie?", "W jakich sytuacjach dziecko czuje się swobodniej?", "Jak wyglądają szkoła, relacje i codzienność w domu?", "Czego rodzic już próbował i co z tego wynikło?"] },
    { eyebrow: "SZERSZY KONTEKST", title: "Dziecko żyje w relacjach i w konkretnym otoczeniu.", paragraphs: ["W rozmowie można uwzględnić szkołę, rodzinę, przyjaźnie, przeprowadzkę, zmianę języka lub inne ważne doświadczenia. Nie chodzi o szukanie winnego, lecz o lepsze zrozumienie codzienności młodej osoby."], tone: "white" },
    { eyebrow: "CO DALEJ", title: "Nie musisz wcześniej decydować za dziecko.", paragraphs: ["Czasem pomocne jest wsparcie i refleksja rodzica. Innym razem można rozważyć osobną przestrzeń dla dziecka lub nastolatka. Kolejny krok zależy od potrzeb rodziny i powinien uwzględniać zdanie młodej osoby odpowiednio do jej wieku.", "Jeśli konsultacja dotyczy nastolatka, warto wspólnie ustalić, jak zaprosić go do rozmowy bez nacisku."], links: [{ href: "/pl/wsparcie-dzieci/", label: "Informacje o wsparciu dzieci" }, { href: "/pl/wsparcie-mlodziezy/", label: "Informacje dla młodzieży" }], tone: "sage" },
    { eyebrow: "PIERWSZA WIADOMOŚĆ", title: "Krótki opis sytuacji wystarczy.", paragraphs: ["Nie podawaj w formularzu diagnoz ani szczegółowej historii zdrowia. Możesz napisać, o co chcesz zapytać; możliwość i warunki konsultacji w Polsce potwierdzimy indywidualnie."], tone: "white" },
  ]} />;
}
