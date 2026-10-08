import type { Metadata } from "next";
import { siteUrl } from "./site";

const homeLanguages = {
  "en-QA": `${siteUrl}/qatar/`,
  "en-GB": `${siteUrl}/uk/`,
  "pl-PL": `${siteUrl}/pl/`,
  "x-default": `${siteUrl}/`,
};

export function gatewayMetadata(): Metadata {
  return {
    title: "Julia Counselling | Support for Young People & Families",
    description: "Child, adolescent and family wellbeing support informed by over eight years of international experience.",
    alternates: { canonical: "/", languages: homeLanguages },
    twitter: { card: "summary_large_image", title: "Julia Counselling | Support for Young People & Families", description: "Child, adolescent and family wellbeing support informed by over eight years of international experience.", images: ["/julia2.jpeg"] },
  };
}

export function marketHomeMetadata(title: string, description: string, canonical: string): Metadata {
  return {
    title, description,
    alternates: { canonical, languages: homeLanguages },
    openGraph: { title, description, url: canonical, siteName: "Julia Counselling", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: ["/julia2.jpeg"] },
  };
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Julia Counselling", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: ["/julia2.jpeg"] },
  };
}

export function personStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julia Slojkowska",
    honorificSuffix: "MSc",
    url: siteUrl,
    image: `${siteUrl}/julia2.jpeg`,
    knowsLanguage: ["English", "Polish"],
  };
}
