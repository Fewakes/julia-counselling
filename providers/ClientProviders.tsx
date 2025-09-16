"use client";

import { LocaleProvider } from "../components/Language";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}

