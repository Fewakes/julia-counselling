import Link from "next/link";
import MarketSelector from "./MarketSelector";
import { BookingLink } from "./TrackedLink";
import { MarketLink } from "./MarketLink";
import { marketNavigation } from "../content/markets";

type MarketKey = keyof typeof marketNavigation;

export function SiteHeader({ market = false, selectedMarket = "home" }: { market?: MarketKey | false; selectedMarket?: string }) {
  const selectorMarket = selectedMarket === "home" && market ? market : selectedMarket;
  const navigation = market ? marketNavigation[market] : [];
  const navLabel = market === "pl" ? "Nawigacja główna" : market === "uk" ? "Main navigation" : "Qatar navigation";
  const bookingLabel = market === "pl" ? "Zapytaj o dostępność" : market === "uk" ? "Enquire about availability" : "Book a Consultation";
  const contactHref = market ? `/${market}/${market === "pl" ? "kontakt" : "contact"}/` : "/qatar/contact/";
  return (
    <header className="site-header">
      <div className="site-header-inner">
        {market ? <MarketLink market={market} className="wordmark" href="/?gateway=1" aria-label="Julia Counselling international home"><span className="wordmark-mark">J</span><span>Julia Counselling<small>Julia Slojkowska, MSc</small></span></MarketLink> : <Link className="wordmark" href="/" aria-label="Julia Counselling home"><span className="wordmark-mark">J</span><span>Julia Counselling<small>Julia Slojkowska, MSc</small></span></Link>}
        {market ? <nav className="main-nav" aria-label={navLabel}>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav> : <span className="gateway-label">International counselling</span>}
        <div className="header-actions"><MarketSelector current={selectorMarket} />{market && <BookingLink className="button button-small" market={market === "qatar" ? "QA" : market === "uk" ? "GB" : "PL"} href={contactHref}>{bookingLabel}</BookingLink>}</div>
      </div>
      {market && <nav className="mobile-nav" aria-label={navLabel}>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>}
    </header>
  );
}

export function SiteFooter({ market = false }: { market?: MarketKey | false }) {
  const label = market === "pl" ? "Wsparcie dla dzieci, młodzieży i ich bliskich." : "Thoughtful support for children, teenagers and the people who care for them.";
  return (
    <footer className="site-footer"><div className="footer-inner">
      <div>{market ? <MarketLink market={market} className="wordmark footer-wordmark" href="/?gateway=1"><span className="wordmark-mark">J</span><span>Julia Counselling<small>Julia Slojkowska, MSc</small></span></MarketLink> : <Link className="wordmark footer-wordmark" href="/"><span className="wordmark-mark">J</span><span>Julia Counselling<small>Julia Slojkowska, MSc</small></span></Link>}<p>{label}</p></div>
      <div className="footer-links"><MarketLink href="/qatar/" market="qatar">Qatar</MarketLink><MarketLink href="/uk/" market="uk">United Kingdom</MarketLink><MarketLink href="/pl/" market="pl">Polska</MarketLink><Link href={market === "pl" ? "/pl/kontakt/" : market === "uk" ? "/uk/contact/" : "/qatar/contact/"}>{market === "pl" ? "Kontakt" : "Contact"}</Link></div>
      <small className="copyright">© {new Date().getFullYear()} Julia Counselling</small>
    </div></footer>
  );
}

export function MobileContactBar({ market }: { market: MarketKey }) {
  const polish = market === "pl";
  const contactHref = `/${market}/${polish ? "kontakt" : "contact"}/`;
  const faqHref = `/${market}/faq/`;
  const marketCode = market === "qatar" ? "QA" : market === "uk" ? "GB" : "PL";
  return <div className={`mobile-contact-bar mobile-contact-${market}`}>
    <Link href={faqHref}>{polish ? "Najczęstsze pytania" : "FAQs"}</Link>
    <BookingLink href={contactHref} market={marketCode} className="button">{polish ? "Zapytaj o konsultację" : market === "uk" ? "Ask about availability" : "Book a consultation"}<span aria-hidden="true">↗</span></BookingLink>
  </div>;
}

export function ContactCta({ title = "You don't have to know exactly what your child needs before getting in touch.", children, market = "qatar" }: { title?: string; children?: React.ReactNode; market?: MarketKey }) {
  const polish = market === "pl";
  const marketCode = market === "qatar" ? "QA" : market === "uk" ? "GB" : "PL";
  const href = `/${market}/${market === "pl" ? "kontakt" : "contact"}/`;
  return <section className="contact-cta"><div className="content-width"><p className="eyebrow">{polish ? "PIERWSZY KROK" : "A FIRST CONVERSATION"}</p><h2>{title}</h2><p>{children ?? (polish ? "Możemy zacząć od rozmowy i wspólnie zastanowić się, co będzie pomocne." : "We can start with a conversation and work out what feels helpful from there.")}</p><BookingLink className="button button-light" href={href} market={marketCode}>{polish ? "Napisz do Julii" : market === "uk" ? "Ask about availability" : "Book an Initial Consultation"} <span aria-hidden="true">→</span></BookingLink><p className="cta-note">{polish ? "W formularzu nie podawaj szczegółowych informacji o zdrowiu ani wiadomości alarmowych." : "Please avoid including highly sensitive or emergency information in an enquiry."}</p></div></section>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="content-width"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p></div></section>;
}
