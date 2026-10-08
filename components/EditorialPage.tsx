import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCta, PageIntro } from "./MarketShell";
import ContactForm from "./ContactForm";

export type EditorialSection = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  links?: { href: string; label: string }[];
  tone?: "paper" | "sage" | "white";
};

export function EditorialPage({ market, eyebrow, title, description, sections, ending }: {
  market: "qatar" | "uk" | "pl";
  eyebrow: string;
  title: string;
  description: string;
  sections: EditorialSection[];
  ending?: ReactNode;
}) {
  return <><PageIntro eyebrow={eyebrow} title={title} description={description} />
    <div className="editorial-sections">{sections.map((section, index) => <section className={`editorial-section editorial-${section.tone ?? (index % 2 ? "sage" : "paper")}`} key={section.title}><div className="editorial-inner"><div className="editorial-index"><span>{String(index + 1).padStart(2, "0")}</span>{section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}</div><div className="editorial-copy"><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul className="editorial-points">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}{section.links && <div className="editorial-links">{section.links.map((link) => <Link key={link.href} className="text-link" href={link.href}>{link.label}<span aria-hidden="true">→</span></Link>)}</div>}</div></div></section>)}</div>
    {ending}<ContactCta market={market} />
  </>;
}

export function MarketFaqPage({ market, eyebrow, title, description, questions }: {
  market: "qatar" | "uk" | "pl";
  eyebrow: string;
  title: string;
  description: string;
  questions: [string, string][];
}) {
  const polish = market === "pl";
  return <><PageIntro eyebrow={eyebrow} title={title} description={description} /><section className="detail-section"><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="faq-boundary">{polish ? "Wiadomość z formularza nie zastępuje pomocy w sytuacji nagłego zagrożenia. W pilnej sprawie skontaktuj się z lokalnymi służbami ratunkowymi." : "If you need urgent or emergency support, please contact your local emergency services. This website is not an emergency service."}</p></section><ContactCta market={market} /></>;
}

export function MarketContactPage({ market, title, description }: { market: "qatar" | "uk" | "pl"; title: string; description: string }) {
  const polish = market === "pl";
  const code = market === "qatar" ? "QA" : market === "uk" ? "GB" : "PL";
  return <><PageIntro eyebrow={polish ? "KONTAKT" : "GET IN TOUCH"} title={title} description={description} /><section className="contact-section"><div className="contact-panel"><p className="eyebrow">{polish ? "WIADOMOŚĆ NA POCZĄTEK" : "A FIRST ENQUIRY"}</p><h2>{polish ? "O co chcesz zapytać?" : "What would you like to ask?"}</h2><p>{polish ? "Krótka wiadomość wystarczy. Proszę, nie wpisuj diagnoz, szczegółowej historii zdrowia ani informacji o nagłym zagrożeniu." : "A short note is enough. Please avoid diagnoses, detailed personal histories or emergency information."}{market !== "qatar" && (polish ? " Możliwość i warunki współpracy potwierdzimy w odpowiedzi." : " We can confirm current availability and eligibility in a reply.")}</p><ContactForm market={code} /></div></section></>;
}
