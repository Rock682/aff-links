import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/calculators", "/comparisons", "/reviews", "/about", "/contact", "/privacy-policy", "/disclaimer", "/affiliate-disclosure", "/terms"];
  return routes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
