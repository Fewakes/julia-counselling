import { Link } from "lucide-react";

export const metadata = {
  title: "Contact Error | Julia Slojkowska",
};

export default function ContactErrorPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          We couldn’t send your message. Please try again or email directly.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Try again
          </Link>
          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-700 hover:bg-blue-50 dark:text-blue-400 transition"
          >
            Email directly
          </a>
        </div>
      </div>
    </section>
  );
}
