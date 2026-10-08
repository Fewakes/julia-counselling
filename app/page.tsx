import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/MarketShell";
import { gatewayMetadata } from "../lib/seo";
import { MarketLink } from "../components/MarketLink";

export const metadata = gatewayMetadata();

export default function HomePage() {
  return <><SiteHeader /><main id="main-content">
    <section className="gateway-hero"><div className="gateway-copy"><p className="eyebrow">A THOUGHTFUL SPACE TO BEGIN</p><h1>Counselling that meets young people where they are.</h1><p className="lead">Child, adolescent and family wellbeing support informed by over eight years of international experience.</p><p className="hero-name">Julia Slojkowska, MSc</p><Link className="text-link" href="#markets">Find support where you are <span aria-hidden="true">↓</span></Link></div><div className="gateway-photo"><Image src="/julia2.jpeg" alt="Julia Slojkowska" fill priority sizes="(max-width: 760px) 90vw, 42vw" className="portrait-image" /><span className="photo-caption">A calm, thoughtful space for young people</span></div><div className="gateway-shape" aria-hidden="true" /></section>
    <section id="markets" className="market-section"><div className="content-width"><p className="eyebrow">FIND SUPPORT WHERE YOU ARE</p><div className="section-heading"><h2>One practice, with care shaped around where you live.</h2><p>Choose your location to see the information currently available for families there.</p></div><div className="market-cards">
      <MarketCard flag="🇶🇦" name="Qatar" body="Child, adolescent and family support in Doha." link="Explore Qatar" href="/qatar/" market="qatar" active />
      <MarketCard flag="🇬🇧" name="United Kingdom" body="Counselling information for UK-based children, teenagers and parents." link="Explore UK" href="/uk/" market="uk" />
      <MarketCard flag="🇵🇱" name="Polska" body="Wsparcie dla dzieci, młodzieży i rodziców." link="Przejdź do Polski" href="/pl/" market="pl" />
    </div></div></section>
    <section className="gateway-about"><div className="content-width about-grid"><div><p className="eyebrow">A LITTLE ABOUT JULIA</p><h2>Experience across countries. Care for the person in front of me.</h2></div><div><p>Julia Slojkowska, MSc, works with children, teenagers and families, drawing on more than eight years of international experience across Qatar, the United Kingdom and Poland.</p><p>Her background includes counselling and psychotherapy, psychology, and work connected with school wellbeing and additional learning needs.</p><MarketLink className="text-link" href="/qatar/about/" market="qatar">Meet Julia <span aria-hidden="true">→</span></MarketLink></div></div></section>
    <section className="gateway-trust"><div className="content-width trust-inner"><p className="eyebrow">A SHARED PROFESSIONAL IDENTITY</p><h2>Julia Slojkowska, MSc</h2><p>Over eight years of international experience. Market-specific service details are published only when confirmed.</p></div></section>
  </main><SiteFooter /></>;
}

function MarketCard({ flag, name, body, link, href, market, active = false }: { flag: string; name: string; body: string; link: string; href: string; market: "qatar" | "uk" | "pl"; active?: boolean }) {
  return <article className={`market-card${active ? " market-card-active" : ""}`}><span className="market-flag" aria-hidden="true">{flag}</span><h3>{name}</h3><p>{body}</p><MarketLink href={href} market={market} className="text-link">{link} <span aria-hidden="true">→</span></MarketLink>{!active && <span className="availability">Enquire about availability</span>}</article>;
}
