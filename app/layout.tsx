import "./globals.css";
import type { Metadata } from "next";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Julia Counselling | Julia Slojkowska, MSc",
  description: "Child, adolescent and family wellbeing support informed by over eight years of international experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Julia Counselling | Julia Slojkowska, MSc",
    description: "Child, adolescent and family wellbeing support informed by over eight years of international experience.",
    url: "/",
    siteName: "Julia Counselling",
    type: "website",
    images: [
      { url: "/julia2.jpeg", alt: "Portrait of Julia Slojkowska" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Counselling | Julia Slojkowska, MSc",
    description: "Child, adolescent and family wellbeing support informed by over eight years of international experience.",
    images: ["/julia2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="site-frame">{children}</div>
      </body>
    </html>
  );
}
