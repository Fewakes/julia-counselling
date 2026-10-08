import { MarketFaqPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Najczęstsze pytania | Julia Slojkowska", "Odpowiedzi na pytania rodziców o pierwszą rozmowę, poufność, udział dziecka i możliwość współpracy.", "/pl/faq/");

export default function FAQPL() {
  return <MarketFaqPage market="pl" eyebrow="PYTANIA I ODPOWIEDZI" title="Kilka rzeczy, które warto wiedzieć na początek." description="Nie trzeba mieć wszystkich odpowiedzi przed napisaniem. Poniżej znajdziesz informacje, które mogą pomóc przygotować się do pierwszego kontaktu." questions={[
    ["Skąd mam wiedzieć, czy dziecko potrzebuje wsparcia?", "Nie trzeba czekać na kryzys ani mieć diagnozy. Jeśli coś w zachowaniu, nastroju, relacjach lub szkole niepokoi Cię, możesz zapytać o możliwość rozmowy i opisać krótko swoje obserwacje."],
    ["Z jakimi grupami wiekowymi pracuje Julia?", "Jej doświadczenie obejmuje dzieci i młodzież. Napisz, ile lat ma dziecko i krótko opisz, czego dotyczy pytanie — możliwość wsparcia trzeba potwierdzić indywidualnie."],
    ["Czy rodzic może skontaktować się sam?", "Tak. Rodzic może rozpocząć od własnego pytania i sprawdzić, czy rozmowa będzie odpowiednim krokiem."],
    ["Jak wygląda pierwsza rozmowa?", "To okazja, żeby powiedzieć, co skłoniło Cię do kontaktu, zadać pytania i poznać możliwe dalsze kroki. Nie musisz opisywać całej historii ani wysyłać dokumentacji."],
    ["A jeśli nastolatek nie chce rozmawiać?", "Zdanie nastolatka ma znaczenie. Można dać mu przestrzeń na pytania, wyjaśnić, czego może się spodziewać, i nie wymuszać decyzji o spotkaniu."],
    ["Czy rodzic będzie wiedzieć, o czym rozmawia dziecko?", "Zasady poufności i ich granice zależą od wieku, sytuacji oraz obowiązków zawodowych. Powinny zostać omówione przed rozpoczęciem dalszej pracy."],
    ["Czy można skontaktować się ze szkołą?", "Ewentualny kontakt ze szkołą wymaga wcześniejszego omówienia i odpowiedniej zgody. Nie odbywa się automatycznie."],
    ["Ile spotkań będzie potrzebnych?", "Nie ma jednej liczby odpowiedniej dla wszystkich. Jeśli spotkania się rozpoczną, ich sens i dalszy plan warto wspólnie omawiać."],
    ["Czy konsultacje odbywają się online?", "Forma spotkań i możliwość skorzystania z nich zależą od aktualnych ustaleń. Potwierdzimy to w odpowiedzi na zapytanie."],
    ["Jakie są koszty i dostępne terminy?", "Te informacje potwierdzamy indywidualnie. Możesz o nie zapytać w krótkiej wiadomości przed podjęciem decyzji."],
  ]} />;
}
