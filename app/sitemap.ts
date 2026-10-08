import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";
import { plPages, qatarPages, ukPages } from "../content/markets";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(siteUrl);
  return ["/", ...qatarPages.map(([path]) => path), ...ukPages.map(([path]) => path), ...plPages.map(([path]) => path)].map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
