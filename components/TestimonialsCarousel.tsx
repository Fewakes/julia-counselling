"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Item = { quote: string; name: string; location: string; avatar: string };

export default function TestimonialsCarousel({
  items,
  interval = 9000,
}: {
  items: Item[];
  interval?: number;
}) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const downX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1 : w < 768 ? 2 : 3);
      setIndex(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, items.length - visible);
  const next = () => setIndex((v) => (v >= maxIndex ? 0 : v + 1));
  const prev = () => setIndex((v) => (v <= 0 ? maxIndex : v - 1));

  useEffect(() => {
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [interval, visible, maxIndex]);

  const onPointerDown = (e: React.PointerEvent) => (downX.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (downX.current == null) return;
    const dx = e.clientX - downX.current;
    downX.current = null;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? next() : prev();
  };

  const slideWidth = 100 / visible;

  return (
    <div
      className="relative overflow-hidden px-6 sm:px-8"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * slideWidth}%)` }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            style={{ width: `${slideWidth}%` }}
            className="shrink-0 px-2"
          >
            <figure className="h-full flex flex-col justify-between rounded-xl border p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur">
              <div
                className="flex gap-1 text-yellow-500"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-3 text-gray-700 dark:text-gray-300 flex-1">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-5 text-sm text-gray-500 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover flex-none"
                />
                <span>
                  — {t.name}, {t.location}
                </span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full border bg-white/80 dark:bg-gray-900/50 p-2 hover:bg-white/90 dark:hover:bg-gray-900/70"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full border bg-white/80 dark:bg-gray-900/50 p-2 hover:bg-white/90 dark:hover:bg-gray-900/70"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, d) => (
          <button
            key={d}
            aria-label={`Go to ${d + 1}`}
            onClick={() => setIndex(d)}
            className={`h-2.5 w-2.5 rounded-full border ${
              d === index
                ? "bg-indigo-500 border-indigo-500 dark:bg-indigo-400 dark:border-indigo-400"
                : "bg-transparent border-indigo-300 dark:border-indigo-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
