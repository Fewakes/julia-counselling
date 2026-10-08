import { EditorialPage } from "../../../components/EditorialPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("Moje podejście | Julia Slojkowska", "Jak uważna, indywidualna rozmowa może uwzględniać wiek, potrzeby i codzienne otoczenie młodej osoby.", "/pl/moje-podejscie/");

export default function ApproachPL() {
  return <EditorialPage market="pl" eyebrow="MOJE PODEJŚCIE" title="Nie ma jednego sposobu rozmowy dobrego dla każdego." description="Sposób pracy warto dostosowywać do konkretnego dziecka lub nastolatka — jego wieku, temperamentu, doświadczeń i tego, co dziś wydaje się ważne." sections={[
    { eyebrow: "RELACJA", title: "Zaufanie buduje się w swoim tempie.", paragraphs: ["Młoda osoba może potrzebować kilku rozmów, zanim zdecyduje, o czym chce opowiedzieć. Nie trzeba się spieszyć ani szukać natychmiastowego rozwiązania.", "Ważna jest ciekawość bez oceniania i gotowość, by usłyszeć perspektywę dziecka, nawet jeśli różni się od spojrzenia dorosłych."], tone: "white" },
    { eyebrow: "DOPASOWANIE", title: "Rozmowa, aktywność, konkretna sytuacja.", paragraphs: ["Jedno dziecko chętnie opowiada, inne łatwiej zaczyna od rysunku, przykładu z dnia albo pytania o to, co pomaga w trudnej chwili. Nastolatek może potrzebować bezpośredniej rozmowy lub więcej czasu na własne przemyślenia.", "Formę spotkania można dopasowywać. Nie ma obowiązku opowiadania wszystkiego ani realizowania z góry ustalonego planu."], points: ["Uwzględniać mocne strony obok trudności", "Zauważać relacje, szkołę i ważne zmiany", "Uzgadniać, co młoda osoba chce poruszyć", "Wracać do pytania, czy rozmowy są pomocne"] },
    { eyebrow: "RODZICE", title: "Rodzic jest ważny, a młoda osoba potrzebuje własnej przestrzeni.", paragraphs: ["Rodzice dobrze znają wiele elementów codzienności dziecka i mogą wspierać je pomiędzy rozmowami. Udział rodzica oraz zasady poufności powinny być omówione jasno, z uwzględnieniem wieku i okoliczności."], links: [{ href: "/pl/konsultacje-dla-rodzicow/", label: "Konsultacje dla rodziców" }, { href: "/pl/faq/", label: "Najczęstsze pytania" }], tone: "sage" },
    { eyebrow: "JASNE USTALENIA", title: "Ważne zasady omawiamy przed dalszą współpracą.", paragraphs: ["Poufność, jej granice, możliwość spotkań i kwestie organizacyjne zależą od konkretnej sytuacji. Można o nie zapytać już w pierwszej wiadomości.", "Rozmowa wspierająca nie zastępuje pomocy interwencyjnej ani specjalistycznych usług, jeśli są potrzebne."], tone: "white" },
  ]} />;
}
