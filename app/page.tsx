"use client";
import { CheckCircle2, ShieldCheck, Globe2, MessageCircle, GraduationCap, Clock3, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "../lib/site";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import ThemeToggle from "../components/ThemeToggle";
import { LanguageSwitcher, useLocale } from "../components/Language";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ContactForm from "../components/ContactForm";

import {
  HERO_IMAGE as HERO_IMAGE_CONST,
  galleryImages as galleryImgs,
  testimonials as testimonialItems,
} from "../data/content";
const HERO_IMAGE_URL = HERO_IMAGE_CONST;

export default function HomePage() {
  const { t } = useLocale();
  return (
    <div className="relative">
      {/* Header (full-bleed) */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/40 border-b">
        <div className="container h-12 sm:h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="hidden sm:inline font-semibold tracking-tight">
              Julia Slojkowska, MSc
            </Link>
            <nav className="flex sm:hidden items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <Link href="#about" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_about")}</Link>
              <Link href="#services" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_services")}</Link>
              <Link href="#contact" className="font-medium text-indigo-700 dark:text-indigo-300">{t("nav_contact")}</Link>
            </nav>
          </div>
          <nav className="hidden sm:flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <Link href="#about" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_about")}</Link>
            <Link href="#approach" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_approach")}</Link>
            <Link href="#services" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_services")}</Link>
            <Link href="#reviews" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_reviews")}</Link>
            <Link href="#faq" className="hover:text-indigo-700 dark:hover:text-indigo-400">{t("nav_faq")}</Link>
            <Link href="#contact" className="font-medium text-indigo-700 dark:text-indigo-300">{t("nav_contact")}</Link>
            <div className="flex items-center gap-2 ml-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </nav>
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* HERO full-bleed */}
      <section className="section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-indigo-950/30 dark:to-transparent"
        />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
        <div className="container grid md:grid-cols-2 gap-10 items-center relative">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-900/40">
              <ShieldCheck className="h-4 w-4 text-indigo-600" />{" "}
              {t("hero_badge")}
            </div>
            {/* Mobile title + avatar side by side */}
            <div className="sm:hidden flex items-center gap-3">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border ring-2 ring-indigo-500/20 shadow-sm shrink-0 bg-white aspect-square">
                <Image src={HERO_IMAGE_URL} alt="Portrait of Julia Slojkowska" fill sizes="80px" priority className="object-cover object-[0%_70%]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{t("hero_title")}</h1>
            </div>
            {/* Desktop title */}
            <h1 className="hidden sm:block text-4xl md:text-5xl font-bold tracking-tight">{t("hero_title")}</h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-prose">
              {t("hero_intro")}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-600 text-center"
              >
                {t("hero_cta_primary")}
              </Link>
              <Link
                href="#about"
                className="w-full sm:w-auto px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-lg border border-indigo-600 text-indigo-700 hover:bg-indigo-50 dark:text-indigo-300 dark:border-indigo-400 transition text-center"
              >
                {t("hero_cta_secondary")}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Video className="h-4 w-4" /> {t("hero_secure")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> {t("hero_international")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" /> {t("hero_terms")}
              </span>
            </div>
          </div>

          <div className="hidden sm:block relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white/60 dark:bg-gray-900/40">
              <Image
                src={HERO_IMAGE_URL}
                alt="Portrait of Julia Slojkowska"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover dark:brightness-[.85]"
                style={{ objectPosition: "10% 90%" }} // ⬅️ adjust vertical %
                priority
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-white/10 dark:to-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t("sec_glimpse")}
            title={t("sec_glimpse_title")}
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImgs.map((src, i) => (
              <div
                key={i}
                className="group relative h-48 sm:h-56 md:h-48 rounded-xl overflow-hidden border bg-white/60 dark:bg-gray-900/40"
              >
                <Image
                  src={src}
                  alt="Therapy visual"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-300 dark:brightness-[.8] group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="pointer-events-none rounded-md bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white p-3 text-sm">
                    {i === 0
                      ? t("gallery_caption1")
                      : i === 1
                      ? t("gallery_caption2")
                      : t("gallery_caption3")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <p className="text-sm uppercase tracking-wide text-indigo-700 dark:text-indigo-400">
            {t("sec_about")}
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-start mt-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">{t("sec_about_title")}</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full" />
              <p className="text-gray-700 dark:text-gray-300">
                {t("about_p1")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("about_p2")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-6 md:mt-8">
              {[
                {
                  icon: GraduationCap,
                  title: t("about_b1_title"),
                  desc: t("about_b1_desc"),
                },
                {
                  icon: ShieldCheck,
                  title: t("about_b2_title"),
                  desc: t("about_b2_desc"),
                },
                {
                  icon: Globe2,
                  title: t("about_b3_title"),
                  desc: t("about_b3_desc"),
                },
                {
                  icon: MessageCircle,
                  title: t("about_b4_title"),
                  desc: t("about_b4_desc"),
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-4 bg-white/60 dark:bg-gray-900/40 hover:shadow-sm transition"
                >
                  <f.icon className="h-5 w-5 text-indigo-600" />
                  <div className="mt-2 font-medium">{f.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH full-bleed band */}
      <section
        id="approach"
        className="section relative overflow-hidden bg-indigo-50/40 dark:bg-indigo-950/20"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

        <div className="container relative">
          <SectionHeader
            eyebrow={t("sec_approach")}
            title={t("sec_approach_title")}
          />
          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-prose">
            {t("approach_intro")}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-gray-700 dark:text-gray-300">
            {[
              t("approach_l1"),
              t("approach_l2"),
              t("approach_l3"),
              t("approach_l4"),
            ].map((t, i) => (
              <Reveal
                as="li"
                key={i}
                className="rounded-md border p-3 flex items-start gap-2 bg-white/60 dark:bg-gray-950/40"
                delay={i * 80}
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-none text-indigo-600" />{" "}
                {t}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES full-bleed tint */}
      <section
        id="services"
        className="section relative overflow-hidden bg-indigo-50/60 dark:bg-indigo-950/20"
      >
        <div className="container relative">
          <SectionHeader
            eyebrow={t("sec_services")}
            title={t("sec_services_title")}
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: t("services_adults_title"),
                img: "/adulttherapy.jpeg",
                points: [
                  t("services_adults_p1"),
                  t("services_adults_p2"),
                  t("services_adults_p3"),
                ],
              },
              {
                title: t("services_children_title"),
                img: "/childrentherapy.jpg",
                points: [
                  t("services_children_p1"),
                  t("services_children_p2"),
                  t("services_children_p3"),
                ],
              },
              {
                title: t("services_trauma_title"),
                img: "/traumatherapy.jpg",
                points: [
                  t("services_trauma_p1"),
                  t("services_trauma_p2"),
                  t("services_trauma_p3"),
                ],
              },
            ].map((card, i) => (
              <Reveal
                key={i}
                className="rounded-xl border p-0 bg-white/80 dark:bg-gray-900/50 backdrop-blur hover:shadow-sm transition overflow-hidden min-h-[180px]"
                delay={i * 80}
              >
                <div className="relative flex h-full">
                  {/* Text Section */}
                  <div className="p-4 pr-[40%] md:pr-[50%] flex flex-col">
                    <div className="text-lg font-medium">{card.title}</div>
                    <ul className=" mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                      {card.points.map((p, j) => (
                        <li
                          key={j}
                          className=" flex items-start gap-2 text-sm "
                        >
                          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-none text-indigo-600" />{" "}
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className="absolute inset-y-0 right-0 w-[40%] md:w-1/2">
                    <Image
                      src={card.img}
                      alt={`${card.title} therapy`}
                      fill
                      sizes="(max-width: 768px) 40vw, 50vw"
                      className="object-cover h-full w-full dark:brightness-[.85]"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 rounded-lg border p-4 text-sm text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/40">
            {t("services_note")}
          </div>
        </div>
      </section>

      {/* REVIEWS band */}
      <section id="reviews" className="section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-transparent dark:to-gray-900"
        />
        <div className="container relative">
          <SectionHeader
            eyebrow={t("sec_testimonials")}
            title={t("sec_testimonials_title")}
          />
          <div className="mt-6">
            <TestimonialsCarousel items={testimonialItems} />
          </div>
        </div>
      </section>

      {/* WORKING TOGETHER */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t("sec_availability")}
            title={t("sec_availability_title")}
          />
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
            <div className="rounded-xl border p-6 bg-white/70 dark:bg-gray-900/40">
              <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/intro.jpg" alt={t("work_step1_title")} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <Video className="h-5 w-5 text-indigo-600" /> {t("work_step1_title")}
              </div>
              <div className="mt-3 h-px bg-gray-200 dark:bg-white/10" />
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step1_l1")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step1_l2")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step1_l3")}</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6 bg-white/70 dark:bg-gray-900/40">
              <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/first.jpg" alt={t("work_step2_title")} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <MessageCircle className="h-5 w-5 text-indigo-600" /> {t("work_step2_title")}
              </div>
              <div className="mt-3 h-px bg-gray-200 dark:bg-white/10" />
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step2_l1")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step2_l2")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step2_l3")}</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6 bg-white/70 dark:bg-gray-900/40">
              <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/ongoing.jpg" alt={t("work_step3_title")} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <ShieldCheck className="h-5 w-5 text-indigo-600" /> {t("work_step3_title")}
              </div>
              <div className="mt-3 h-px bg-gray-200 dark:bg-white/10" />
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step3_l1")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step3_l2")}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" /> {t("work_step3_l3")}</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <Link href="#contact" className="px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-600">
              {t("hero_cta_primary")}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="section relative overflow-hidden bg-indigo-50/40 dark:bg-indigo-950/20"
      >
        <div className="container relative">
          <SectionHeader eyebrow={t("sec_faq")} title={t("sec_faq_title")} />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { q: t("faq_q1"), a: t("faq_a1") },
              { q: t("faq_q2"), a: t("faq_a2") },
              { q: t("faq_q3"), a: t("faq_a3") },
              { q: t("faq_q4"), a: t("faq_a4") },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border p-5 bg-white/70 dark:bg-gray-900/40 animate-fade-in"
                style={{ animationDelay: `${0.04 * i}s` }}
              >
                <div className="font-medium">{item.q}</div>
                <div className="mt-1 text-gray-700 dark:text-gray-300">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND full-bleed */}
      <section className="section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-500/60 dark:to-violet-500/60"
        />
        <div className="container relative text-white">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-semibold">{t("cta_title")}</h2>
              <p className="mt-2 text-white/90">{t("cta_desc")}</p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-medium hover:bg-indigo-50 transition"
              >
                {t("cta_btn")}
              </Link>
              <a
                href="tel:+0000000000"
                className="px-6 py-3 rounded-lg border border-white/70 hover:bg-white/10 transition"
              >
                {t("cta_call")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <SectionHeader
            eyebrow={t("sec_contact")}
            title={t("sec_contact_title")}
          />
          <p className="mt-2 text-gray-700 dark:text-gray-300">{t("contact_intro")}</p>
          <div className="mt-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Julia Slojkowska",
            jobTitle: "Psychotherapist and Counsellor",
            description:
              "UK-trained psychotherapist and counsellor for children and adults. Accredited by BACP and BPS.",
            url: siteUrl,
            knowsLanguage: ["English", "Polish"],
            areaServed: ["United Kingdom", "Poland", "Worldwide"],
            affiliation: [
              { "@type": "Organization", name: "BACP" },
              { "@type": "Organization", name: "BPS" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { questionName: t("faq_q1"), acceptedAnswerText: t("faq_a1") },
              { questionName: t("faq_q2"), acceptedAnswerText: t("faq_a2") },
              { questionName: t("faq_q3"), acceptedAnswerText: t("faq_a3") },
              { questionName: t("faq_q4"), acceptedAnswerText: t("faq_a4") },
            ].map((q) => ({
              "@type": "Question",
              name: q.questionName,
              acceptedAnswer: { "@type": "Answer", text: q.acceptedAnswerText },
            })),
          }),
        }}
      />

      {/* FOOTER */}
      <footer className="border-t py-8 text-sm text-gray-600 dark:text-gray-400">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Julia Slojkowska</div>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="hover:text-indigo-700 dark:hover:text-indigo-400"
            >
              {t("nav_contact")}
            </Link>
            <Link
              href="#services"
              className="hover:text-indigo-700 dark:hover:text-indigo-400"
            >
              {t("nav_services")}
            </Link>
            <Link
              href="#reviews"
              className="hover:text-indigo-700 dark:hover:text-indigo-400"
            >
              {t("nav_reviews")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
