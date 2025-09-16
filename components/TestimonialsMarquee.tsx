"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type Item = { quote: string; name: string; location: string; avatar: string };

export default function TestimonialsMarquee({ items }: { items: Item[] }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex gap-4">
        {list.map((t, i) => (
          <figure key={i} className="min-w-[280px] sm:min-w-[340px] rounded-xl border p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur">
            <div className="flex gap-1 text-yellow-500" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-3 text-gray-700 dark:text-gray-300">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-gray-500 flex items-center gap-3">
              <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
              <span>— {t.name}, {t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

