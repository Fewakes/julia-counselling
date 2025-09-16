"use client";

import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

export default function HeroImage({ src, fallback, alt, className }: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const displaySrc = useFallback ? fallback : src;

  return (
    // Plain img avoids domain config and works with any origin
    <img
      src={displaySrc}
      alt={alt}
      onError={() => setUseFallback(true)}
      className={className ? className : "object-cover w-full h-full"}
      loading="eager"
      decoding="async"
    />
  );
}

