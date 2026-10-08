import type { Metadata } from "next";
import { MobileContactBar, SiteFooter, SiteHeader } from "../../components/MarketShell";

export const metadata: Metadata = { title: "Wsparcie dzieci i młodzieży" };

export default function PolishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader market="pl" /><main id="main-content" lang="pl-PL">{children}</main><SiteFooter market="pl" /><MobileContactBar market="pl" /></>;
}
