import Link from "next/link";

export const metadata = {
  title: "Contact Error | Julia Slojkowska",
  robots: { index: false, follow: true },
};

export default function ContactErrorPage() {
  return (
    <main className="not-found">
      <div className="not-found-inner">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          We couldn’t send your message. Please try again or email directly.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
          href="/qatar/contact/"
          className="button"
          >
            Try again
          </Link>
          <Link href="/">Return to home</Link>
        </div>
      </div>
    </main>
  );
}
