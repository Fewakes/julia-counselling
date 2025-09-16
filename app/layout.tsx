import "./globals.css";
import { Metadata } from "next";
import ClientProviders from "../providers/ClientProviders";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Julia’s Counselling | Psychotherapy & Counselling",
  description:
    "Professional therapy for children and adults. Online sessions available in the UK, Poland, and worldwide.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "psychotherapist",
    "counsellor",
    "therapy",
    "child therapy",
    "adult therapy",
    "CBT",
    "Gestalt",
    "Person-Centred",
    "SFBT",
    "Qatar",
    "UK",
    "Poland",
    "online therapy",
  ],
  openGraph: {
    title: "Julia’s Counselling | Psychotherapy & Counselling",
    description:
      "Professional therapy for children and adults. Online sessions available in the UK, Poland, and worldwide.",
    url: "/",
    siteName: "Julia’s Counselling",
    type: "website",
    images: [
      {
        url: "/julia.jpeg",
        width: 1200,
        height: 900,
        alt: "Portrait of Julia Slojkowska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia’s Counselling | Psychotherapy & Counselling",
    description:
      "Professional therapy for children and adults. Online sessions available in the UK, Poland, and worldwide.",
    images: ["/julia.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ClientProviders>
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
