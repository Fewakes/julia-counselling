import Link from "next/link";

export const metadata = {
  title: "Thanks | Julia Slojkowska",
};

export default function ThanksPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-semibold">Thank you</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Your message has been sent. We’ll get back to you shortly.
        </p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">Return to home</Link>
      </div>
    </section>
  );
}
