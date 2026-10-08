import type { Metadata } from "next";
import { MobileContactBar, SiteFooter, SiteHeader } from "../../components/MarketShell";

export const metadata: Metadata = { title: "Counselling for Young People in the UK" };

export default function UKLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader market="uk" /><main id="main-content" lang="en-GB">{children}</main><SiteFooter market="uk" /><MobileContactBar market="uk" /></>;
}
