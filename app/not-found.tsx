import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/MarketShell";
import MarketSelector from "../components/MarketSelector";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found"><div className="not-found-inner"><p className="eyebrow">PAGE NOT FOUND</p><h1>This page may have moved.</h1><p>Choose a market or return to the international home page to find the right information.</p><div className="button-row"><Link className="button" href="/">Go to the home page</Link><MarketSelector /></div><p><Link className="text-link" href="/qatar/contact/">Contact Julia <span aria-hidden="true">→</span></Link></p></div></main><SiteFooter /></>;
}
