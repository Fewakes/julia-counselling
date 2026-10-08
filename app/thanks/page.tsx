import Link from "next/link";

export const metadata = {
  title: "Thanks | Julia Slojkowska",
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  return <main className="not-found"><div className="not-found-inner"><p className="eyebrow">THANK YOU</p><h1>Your enquiry has been sent.</h1><p>Thank you for getting in touch. Julia will respond using the contact details you provided.</p><Link href="/" className="button">Return to home</Link></div></main>;
}
