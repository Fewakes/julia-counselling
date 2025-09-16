"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, as = "div", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -15% 0px",
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Comp = as as React.ElementType;
  return (
    <Comp ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
