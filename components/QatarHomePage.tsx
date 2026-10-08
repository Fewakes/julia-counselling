import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "./TrackedLink";
import { qatarHome } from "../content/qatar-home";
import { media } from "../content/media";
import { personStructuredData } from "../lib/seo";
import OrganicLine from "./OrganicLine";

export default function QatarHomePage() {
  const person = personStructuredData();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replaceAll("<", "\\u003c") }} />
      <div className="qatar-home">
        <section className="qatar-hero qatar-hero-editorial" aria-labelledby="qatar-home-title">
          <div className="qatar-hero-copy">
            <p className="eyebrow">{qatarHome.hero.eyebrow}</p>
            <h1 id="qatar-home-title">Helping young people <em>feel understood,</em> confident and emotionally strong.</h1>
            <p className="lead">{qatarHome.hero.introduction} {qatarHome.hero.detail}</p>
            <div className="button-row">
              <BookingLink className="button" href="/qatar/contact/">{qatarHome.hero.primaryAction}<span aria-hidden="true">↗</span></BookingLink>
              <Link className="button button-outline" href="#qatar-services">{qatarHome.hero.secondaryAction}</Link>
            </div>
            <p className="hero-signature">Julia Slojkowska <span>MSc</span></p>
          </div>
          <div className="qatar-hero-photo">
            <Image src={media.juliaPortrait.src} alt={media.juliaPortrait.alt} fill priority sizes="(max-width: 760px) 92vw, 48vw" className="portrait-image" style={{ objectPosition: media.juliaPortrait.focalPoint }} />
            <div className="portrait-note"><span>Julia Slojkowska, MSc</span><small>Child · adolescent · family wellbeing</small></div>
          </div>
          <div className="hero-trust-panel" role="list" aria-label="Professional experience highlights">
            {qatarHome.trust.map((item) => <div className="hero-trust-item" role="listitem" key={item.figure}><strong>{item.figure}</strong><span>{item.detail}</span></div>)}
          </div>
          <OrganicLine className="hero-organic-line" />
        </section>

        <section className="recognition-section qatar-section" aria-labelledby="recognition-title">
          <div className="section-kicker"><span>01</span><p className="eyebrow">{qatarHome.recognition.eyebrow}</p></div>
          <div className="recognition-content">
            <div className="recognition-heading"><h2 id="recognition-title">{qatarHome.recognition.title}</h2><p>{qatarHome.recognition.introduction}</p></div>
            <ul className="recognition-list">
              {qatarHome.recognition.concerns.map((concern) => <li key={concern}><span aria-hidden="true">↗</span>{concern}</li>)}
            </ul>
            <p className="recognition-closing">{qatarHome.recognition.closing}</p>
            <Link className="text-link" href="#qatar-services">Explore how I can help <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="about-section qatar-about-editorial" aria-labelledby="about-julia-title">
          <div className="about-image">
            <Image src={media.juliaPortrait.src} alt={media.juliaPortrait.alt} fill sizes="(max-width: 760px) 90vw, 42vw" className="cover-image" style={{ objectPosition: "50% 57%" }} />
            <span className="image-index">Julia Slojkowska, MSc</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{qatarHome.about.eyebrow}</p>
            <h2 id="about-julia-title">{qatarHome.about.title}</h2>
            {qatarHome.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" href="/qatar/about/">{qatarHome.about.action}<span aria-hidden="true">→</span></Link>
            <div className="editorial-stats" aria-label="Professional experience">
              <div><strong>8+</strong><span>years of experience</span></div>
              <div><strong>3</strong><span>countries of practice</span></div>
              <div><strong>MSc</strong><span>counselling & psychotherapy</span></div>
            </div>
          </div>
        </section>

        <section className="principles-section qatar-section" aria-labelledby="principles-title">
          <div className="principles-intro">
            <div className="section-kicker"><span>02</span><p className="eyebrow">A WAY OF WORKING</p></div>
            <h2 id="principles-title">Therapy that goes beyond <em>“How does that make you feel?”</em></h2>
            <p>Children are more than one feeling, one behaviour or one difficult moment. Good support takes time to understand what life looks like for them.</p>
          </div>
          <div className="principle-editorial-grid">
            {qatarHome.principles.map((principle, index) => <article className={`principle-editorial principle-editorial-${index + 1}`} key={principle.title}>
              <span className="principle-index">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.detail}</p>
            </article>)}
          </div>
        </section>

        <section id="qatar-services" className="services-section qatar-services-editorial" aria-labelledby="services-title">
          <div className="services-heading">
            <div><div className="section-kicker"><span>03</span><p className="eyebrow">WAYS WE CAN WORK TOGETHER</p></div><h2 id="services-title">Support starts with what matters to your family.</h2></div>
            <p>Explore the kinds of support available and find a useful place to begin. Each page answers common questions and explains what you might want to consider.</p>
          </div>
          <div className="service-editorial-grid">
            {qatarHome.services.map((service) => <Link className="service-editorial-card" href={service.href} key={service.number}>
              <span className="service-number">{service.number}</span><p className="service-category">{service.category}</p><h3>{service.title}</h3><p className="service-detail">{service.detail}</p><span className="service-action">{service.action}<span aria-hidden="true">↗</span></span>
            </Link>)}
          </div>
        </section>

        <section className="international-editorial" aria-labelledby="international-title">
          <div className="international-editorial-heading">
            <div className="section-kicker"><span>04</span><p className="eyebrow">{qatarHome.international.eyebrow}</p></div>
            <h2 id="international-title">Growing up <em>between worlds.</em></h2>
          </div>
          <div className="international-editorial-copy">
            {qatarHome.international.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className="international-contexts">{qatarHome.international.contexts.map((context) => <li key={context}>{context}</li>)}</ul>
            <Link className="text-link text-link-light" href="/qatar/international-families/">{qatarHome.international.action}<span aria-hidden="true">→</span></Link>
          </div>
          <OrganicLine className="international-organic-line" />
        </section>

        <section className="editorial-pause" aria-label="A thought about counselling">
          <OrganicLine className="pause-organic-line" />
          <p className="eyebrow">A THOUGHT TO TAKE WITH YOU</p>
          <blockquote>{qatarHome.pause.quote}</blockquote>
          <p>{qatarHome.pause.detail}</p>
        </section>

        <section className="approach-strip qatar-approach-editorial" aria-labelledby="approach-title">
          <div className="approach-inner">
            <div><div className="section-kicker"><span>05</span><p className="eyebrow">{qatarHome.approach.eyebrow}</p></div><h2 id="approach-title">An approach built around the person — <em>not a formula.</em></h2></div>
            <div><p>{qatarHome.approach.detail}</p><Link className="text-link" href="/qatar/approach/">{qatarHome.approach.action}<span aria-hidden="true">→</span></Link><div className="approach-tags"><span>Integrative counselling</span><span>Person-centred</span><span>Practical when helpful</span></div></div>
          </div>
        </section>

        <section className="parent-section qatar-parent-editorial" aria-labelledby="parents-title">
          <div className="parent-copy">
            <div className="section-kicker"><span>06</span><p className="eyebrow">{qatarHome.parents.eyebrow}</p></div>
            <h2 id="parents-title">You’re not expected <em>to have all the answers.</em></h2>
            <div className="parent-lines">{qatarHome.parents.lines.map((line) => <p key={line}>{line}</p>)}</div>
            <p>{qatarHome.parents.detail}</p>
            <Link className="button button-light" href="/qatar/parent-consultations/">{qatarHome.parents.action}<span aria-hidden="true">↗</span></Link>
          </div>
          <div className="parent-aside"><span>For parents</span><p>It’s okay to begin with your own questions.</p><Link className="text-link text-link-light" href="/qatar/parent-consultations/">How parent consultations work <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="teen-section qatar-teen-editorial" aria-labelledby="teens-title">
          <div className="teen-inner">
            <div><div className="section-kicker"><span>07</span><p className="eyebrow">{qatarHome.teens.eyebrow}</p></div><h2 id="teens-title">If your parent sent you <em>this website…</em></h2>{qatarHome.teens.paragraphs.map((paragraph, index) => <p className={index === 0 ? "teen-hi" : undefined} key={paragraph}>{paragraph}</p>)}</div>
            <div className="teen-emphasis"><span>A space to talk without pressure.</span><strong>{qatarHome.teens.closing}</strong><Link className="text-link" href="/qatar/teen-counselling-doha/">{qatarHome.teens.action}<span aria-hidden="true">→</span></Link></div>
          </div>
        </section>

        <section className="process-section qatar-process-editorial" aria-labelledby="process-title">
          <div className="process-heading"><div className="section-kicker"><span>08</span><p className="eyebrow">GETTING STARTED</p></div><h2 id="process-title">A first step, at a pace that feels right.</h2><p>We begin by understanding what would be useful for your family and agree together on a thoughtful way forward.</p></div>
          <div className="process-editorial-grid"><OrganicLine className="process-organic-line" />{qatarHome.steps.map((step) => <article className="process-editorial-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div>
        </section>

        <section className="credentials-section qatar-credentials-editorial" aria-labelledby="credentials-title">
          <div className="credentials-intro"><p className="eyebrow">EDUCATION & EXPERIENCE</p><h2 id="credentials-title">Professional background</h2><p>Julia’s education and experience inform her work. Professional membership, licensing and market-specific eligibility are not implied by these qualifications.</p></div>
          <div className="credential-timeline">{qatarHome.credentials.map((credential, index) => <article key={credential.title}><span>0{index + 1}</span><div><h3>{credential.title}</h3><p>{credential.detail}</p></div></article>)}</div>
          <Link className="text-link" href="/qatar/about/">More about Julia’s background <span aria-hidden="true">→</span></Link>
        </section>

        <section className="faq-preview qatar-faq-editorial" aria-labelledby="faq-title">
          <div><div className="section-kicker"><span>09</span><p className="eyebrow">COMMON QUESTIONS</p></div><h2 id="faq-title">It’s natural to have questions.</h2><p>Starting a conversation can bring practical and personal questions. Here are a few first answers.</p><Link className="text-link" href="/qatar/faq/">Read all frequently asked questions <span aria-hidden="true">→</span></Link></div>
          <div className="faq-teaser">{qatarHome.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="final-cta-editorial" aria-labelledby="final-cta-title">
          <div className="section-kicker"><span>10</span><p className="eyebrow">A FIRST CONVERSATION</p></div>
          <h2 id="final-cta-title">{qatarHome.finalCta.title}</h2>
          <p>{qatarHome.finalCta.detail}</p>
          <BookingLink className="button button-light" href="/qatar/contact/">{qatarHome.finalCta.action}<span aria-hidden="true">↗</span></BookingLink>
          <p className="final-cta-note">Please avoid including highly sensitive or emergency information in an enquiry.</p>
        </section>
      </div>
    </>
  );
}
