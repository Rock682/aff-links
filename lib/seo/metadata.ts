import type { Metadata } from "next";

export const siteConfig = {
  name: "ArthaOrbit",
  url: "https://www.arthaorbit.in",
  description: "India-focused finance comparison platform for cards, loans, demat and fintech tools.",
  locale: "en_IN"
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Finance Offers India`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name
  },
  robots: { index: true, follow: true }
};

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: ['https://in.pinterest.com/arthaorbit']
};
