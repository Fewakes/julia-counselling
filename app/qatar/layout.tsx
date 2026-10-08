import type { Metadata } from "next";
import { MobileContactBar, SiteFooter, SiteHeader } from "../../components/MarketShell";

export const metadata: Metadata = { title: "Child & Teen Counselling in Doha | Julia Counselling" };

export default function QatarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader market="qatar" /><main id="main-content">{children}</main><SiteFooter market="qatar" /><MobileContactBar market="qatar" /></>;
}
