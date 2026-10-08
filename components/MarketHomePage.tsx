import Image from "next/image";
import Link from "next/link";
import type { MarketHomeCopy } from "../content/market-homepages";
import { media } from "../content/media";
import { personStructuredData } from "../lib/seo";
import { BookingLink } from "./TrackedLink";
import OrganicLine from "./OrganicLine";
import SupportFinder from "./SupportFinder";

export default function MarketHomePage({ copy }: { copy: MarketHomeCopy }) {
  const person = personStructuredData();
  const polish = copy.market === "pl";

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replaceAll("<", "\\u003c") }} />
    <div className={`qatar-home market-home market-home-${copy.market}`}>
      <section className="qatar-hero qatar-hero-editorial market-home-hero" aria-labelledby={`${copy.market}-home-title`}>
        <div className="qatar-hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id={`${copy.market}-home-title`}>{copy.hero.start} <em>{copy.hero.emphasis}</em> {copy.hero.end}</h1>
          <p className="lead">{copy.hero.introduction} {copy.hero.detail}</p>
          <div className="button-row">
            <BookingLink className="button" href={`/${copy.market}/${polish ? "kontakt" : "contact"}/`} market={copy.code}>{copy.hero.primary}<span aria-hidden="true">↗</span></BookingLink>
            <Link className="button button-outline" href="#market-services">{copy.hero.secondary}</Link>
          </div>
          <p className="hero-signature">Julia Slojkowska <span>MSc</span></p>
          <p className="market-availability">{copy.hero.availability}</p>
        </div>
        <div className="qatar-hero-photo">
          <Image src={media.juliaPortrait.src} alt={media.juliaPortrait.alt} fill priority sizes="(max-width: 760px) 92vw, 48vw" className="portrait-image" style={{ objectPosition: media.juliaPortrait.focalPoint }} />
          <div className="portrait-note"><span>Julia Slojkowska, MSc</span><small>{polish ? "Dzieci · młodzież · rodzice" : "Young people · parents · families"}</small></div>
        </div>
        <div className="hero-trust-panel" role="list" aria-label={polish ? "Doświadczenie i wykształcenie" : "Experience and education"}>
          {copy.trust.map((item) => <div className="hero-trust-item" role="listitem" key={item.figure}><strong>{item.figure}</strong><span>{item.detail}</span></div>)}
        </div>
        <OrganicLine className="hero-organic-line" />
      </section>

      <section className="recognition-section qatar-section" aria-labelledby={`${copy.market}-recognition-title`}>
        <div className="section-kicker"><span>01</span><p className="eyebrow">{copy.recognition.eyebrow}</p></div>
        <div className="recognition-content">
          <div className="recognition-heading"><h2 id={`${copy.market}-recognition-title`}>{copy.recognition.title}</h2><p>{copy.recognition.introduction}</p></div>
          <ul className="recognition-list">{copy.recognition.items.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
          <p className="recognition-closing">{copy.recognition.closing}</p>
          <Link className="text-link" href="#market-services">{polish ? "Zobacz możliwe formy wsparcia" : "Explore the support available"}<span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {copy.market === "uk" ? <LocalFeature copy={copy} /> : null}

      <section className="about-section qatar-about-editorial" aria-labelledby={`${copy.market}-about-title`}>
        <div className="about-image"><Image src={media.juliaPortrait.src} alt={media.juliaPortrait.alt} fill sizes="(max-width: 760px) 90vw, 42vw" className="cover-image" style={{ objectPosition: "50% 57%" }} /><span className="image-index">Julia Slojkowska, MSc</span></div>
        <div className="about-copy"><p className="eyebrow">{copy.about.eyebrow}</p><h2 id={`${copy.market}-about-title`}>{copy.about.title}</h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="text-link" href={`/${copy.market}/${polish ? "o-mnie" : "about"}/`}>{copy.about.action}<span aria-hidden="true">→</span></Link>
          <div className="editorial-stats" aria-label={polish ? "Wykształcenie i doświadczenie" : "Education and experience"}><div><strong>8+</strong><span>{polish ? "lat doświadczenia" : "years of experience"}</span></div><div><strong>3</strong><span>{polish ? "kraje" : "countries"}</span></div><div><strong>MSc</strong><span>{polish ? "counselling i psychoterapia" : "counselling & psychotherapy"}</span></div></div>
        </div>
      </section>

      {copy.market === "pl" ? <LocalFeature copy={copy} /> : null}

      {copy.market === "pl" ? <ParentSection copy={copy} /> : null}

      <section id="market-services" className="services-section qatar-services-editorial" aria-labelledby={`${copy.market}-services-title`}>
        <div className="services-heading"><div><div className="section-kicker"><span>02</span><p className="eyebrow">{polish ? "MOŻLIWE PUNKTY WYJŚCIA" : "WAYS WE CAN WORK TOGETHER"}</p></div><h2 id={copy.market + "-services-title"}>{polish ? "Wybierz temat, od którego najłatwiej zacząć." : "Choose the conversation that feels closest."}</h2></div><p>{polish ? "Każda rodzina jest inna. Informacje na stronach tematycznych pomagają sprawdzić, o co warto zapytać." : "Each family is different. These pages explain the kinds of questions you may want to ask before deciding whether to proceed."}</p></div>
        <div className="service-editorial-grid">{copy.services.map((service) => <Link className="service-editorial-card" href={service.href} key={service.number}><span className="service-number">{service.number}</span><p className="service-category">{service.category}</p><h3>{service.title}</h3><p className="service-detail">{service.detail}</p><span className="service-action">{service.action}<span aria-hidden="true">↗</span></span></Link>)}</div>
      </section>

      {copy.market === "uk" ? <TeenSection copy={copy} /> : null}
      {copy.market === "uk" ? <ParentSection copy={copy} /> : null}
      {copy.market === "pl" ? <TeenSection copy={copy} /> : null}

      <section className="editorial-pause" aria-label={copy.pause.eyebrow}><OrganicLine className="pause-organic-line" /><p className="eyebrow">{copy.pause.eyebrow}</p><blockquote>{copy.pause.quote}</blockquote><p>{copy.pause.detail}</p></section>

      <section className="approach-strip qatar-approach-editorial" aria-labelledby={`${copy.market}-approach-title`}>
        <div className="approach-inner"><div><div className="section-kicker"><span>03</span><p className="eyebrow">{copy.approach.eyebrow}</p></div><h2 id={copy.market + "-approach-title"}>{copy.approach.title}</h2></div><div><p>{copy.approach.detail}</p><Link className="text-link" href={copy.approach.href}>{copy.approach.action}<span aria-hidden="true">→</span></Link><div className="approach-tags">{copy.approach.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
      </section>

      <SupportFinder copy={copy.finder} market={copy.market} />

      <section className="process-section qatar-process-editorial" aria-labelledby={`${copy.market}-process-title`}>
        <div className="process-heading"><div className="section-kicker"><span>04</span><p className="eyebrow">{polish ? "JAK ZACZĄĆ" : "GETTING STARTED"}</p></div><h2 id={copy.market + "-process-title"}>{polish ? "Możemy zacząć od jednego pytania." : "A first step, at a pace that feels right."}</h2><p>{polish ? "Kolejny krok zależy od tego, czego potrzebuje młoda osoba i rodzina." : "We begin by understanding what would be useful and agree together on a thoughtful way forward."}</p></div>
        <div className="process-editorial-grid"><OrganicLine className="process-organic-line" />{copy.steps.map((step) => <article className="process-editorial-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div>
      </section>

      <section className="credentials-section qatar-credentials-editorial" aria-labelledby={`${copy.market}-credentials-title`}>
        <div className="credentials-intro"><p className="eyebrow">{polish ? "WYKSZTAŁCENIE I DOŚWIADCZENIE" : "EDUCATION & EXPERIENCE"}</p><h2 id={copy.market + "-credentials-title"}>{polish ? "Przygotowanie zawodowe" : "Professional background"}</h2><p>{polish ? "Wykształcenie i doświadczenie są ważną częścią pracy, ale nie zastępują rozmowy o potrzebach konkretnej rodziny." : "Julia’s education and experience inform her work. Membership, licensing and market eligibility are not implied by these qualifications."}</p></div>
        <div className="credential-timeline">{copy.credentials.map((credential, index) => <article key={credential.title}><span>0{index + 1}</span><div><h3>{credential.title}</h3><p>{credential.detail}</p></div></article>)}</div>
        <Link className="text-link" href={`/${copy.market}/${polish ? "o-mnie" : "about"}/`}>{polish ? "Więcej o wykształceniu i doświadczeniu" : "More about Julia’s background"}<span aria-hidden="true">→</span></Link>
      </section>

      <section className="faq-preview qatar-faq-editorial" aria-labelledby={`${copy.market}-faq-title`}>
        <div><div className="section-kicker"><span>05</span><p className="eyebrow">{copy.faq.eyebrow}</p></div><h2 id={`${copy.market}-faq-title`}>{copy.faq.title}</h2><p>{copy.faq.introduction}</p><Link className="text-link" href={copy.faq.href}>{copy.faq.action}<span aria-hidden="true">→</span></Link></div>
        <div className="faq-teaser">{copy.faq.questions.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="final-cta-editorial" aria-labelledby={copy.market + "-final-cta-title"}><div className="section-kicker"><span>06</span><p className="eyebrow">{copy.finalCta.eyebrow}</p></div><h2 id={copy.market + "-final-cta-title"}>{copy.finalCta.title}</h2><p>{copy.finalCta.detail}</p><BookingLink className="button button-light" href={`/${copy.market}/${polish ? "kontakt" : "contact"}/`} market={copy.code}>{copy.finalCta.action}<span aria-hidden="true">↗</span></BookingLink><p className="final-cta-note">{polish ? "Prosimy, nie podawaj szczegółowych informacji o zdrowiu ani wiadomości alarmowych." : "Please avoid including highly sensitive or emergency information in an enquiry."}</p></section>
    </div>
  </>;
}

function LocalFeature({ copy }: { copy: MarketHomeCopy }) {
  return <section className="international-editorial market-local-feature" aria-labelledby={`${copy.market}-local-feature-title`}>
    <div className="international-editorial-heading"><div className="section-kicker"><span>02</span><p className="eyebrow">{copy.localFeature.eyebrow}</p></div><h2 id={copy.market + "-local-feature-title"}>{copy.localFeature.title}</h2></div>
    <div className="international-editorial-copy">{copy.localFeature.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul className="international-contexts">{copy.localFeature.points.map((point) => <li key={point}>{point}</li>)}</ul><Link className="text-link text-link-light" href={copy.localFeature.href}>{copy.localFeature.action}<span aria-hidden="true">→</span></Link></div>
    <OrganicLine className="international-organic-line" />
  </section>;
}

function ParentSection({ copy }: { copy: MarketHomeCopy }) {
  const polish = copy.market === "pl";
  return <section className="parent-section qatar-parent-editorial" aria-labelledby={`${copy.market}-parents-title`}><div className="parent-copy"><div className="section-kicker"><span>03</span><p className="eyebrow">{copy.parents.eyebrow}</p></div><h2 id={copy.market + "-parents-title"}>{copy.parents.title}</h2><div className="parent-lines">{copy.parents.lines.map((line) => <p key={line}>{line}</p>)}</div><p>{copy.parents.detail}</p><Link className="button button-light" href={copy.parents.href}>{copy.parents.action}<span aria-hidden="true">↗</span></Link></div><aside className="parent-aside"><span>{polish ? "Dla rodziców" : "For parents"}</span><p>{polish ? "Możesz zacząć od własnych pytań." : "You do not have to know the answer before you get in touch."}</p><Link className="text-link text-link-light" href={copy.parents.href}>{polish ? "Jak wyglądają konsultacje" : "How consultations work"}<span aria-hidden="true">→</span></Link></aside></section>;
}

function TeenSection({ copy }: { copy: MarketHomeCopy }) {
  const polish = copy.market === "pl";
  return <section className="teen-section qatar-teen-editorial" aria-labelledby={copy.market + "-teens-title"}><div className="teen-inner"><div><div className="section-kicker"><span>04</span><p className="eyebrow">{copy.teens.eyebrow}</p></div><h2 id={copy.market + "-teens-title"}>{copy.teens.title}</h2>{copy.teens.paragraphs.map((paragraph, index) => <p className={index === 0 ? "teen-hi" : undefined} key={paragraph}>{paragraph}</p>)}</div><div className="teen-emphasis"><span>{polish ? "Bez presji na gotowe odpowiedzi." : "A place to think without being rushed."}</span><strong>{copy.teens.closing}</strong><Link className="text-link" href={copy.teens.href}>{copy.teens.action}<span aria-hidden="true">→</span></Link></div></div></section>;
}
