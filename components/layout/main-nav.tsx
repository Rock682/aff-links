import Link from "next/link";

const links = ["blog", "calculators", "comparisons", "reviews", "about", "contact"];

export function MainNav() {
  return (
    <header className="sticky top-0 z-40 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-brand">ArthaOrbit</Link>
        <div className="flex gap-4 text-sm font-medium">
          {links.map((link) => <Link key={link} href={`/${link}`} className="capitalize hover:text-brand">{link}</Link>)}
        </div>
      </nav>
    </header>
  );
}
