import "./globals.css";
import type { ReactNode } from "react";
import { baseMetadata, jsonLdOrganization } from "@/lib/seo/metadata";
import { MainNav } from "@/components/layout/main-nav";

export const metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <MainNav />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      </body>
    </html>
  );
}
