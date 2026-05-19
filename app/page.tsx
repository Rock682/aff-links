import Link from "next/link";
import { offers } from "@/data/offers";
import { resolveAffiliateLink } from "@/lib/affiliate/links";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="glass rounded-3xl p-8">
        <p className="text-sm uppercase tracking-widest text-brand">India Finance Intelligence</p>
        <h1 className="mt-3 text-4xl font-bold">Compare Credit Cards, Loans, Demat & AI Finance Tools</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">EEAT-first affiliate platform for Indian students, salaried professionals, freelancers and SMB founders.</p>
        <div className="mt-6 flex gap-3"><Link href="/comparisons" className="rounded-full bg-brand px-5 py-3 text-white">Start Comparing</Link><Link href="/calculators" className="rounded-full border px-5 py-3">Use Calculators</Link></div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Trending Finance Offers</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.name} className="glass rounded-2xl p-5">
              <span className="rounded-full bg-brand/10 px-2 py-1 text-xs text-brand">{offer.badge}</span>
              <h3 className="mt-2 text-xl font-semibold">{offer.name}</h3>
              <p className="text-sm">{offer.category} • ⭐ {offer.rating}</p>
              <a href={resolveAffiliateLink(offer.affiliateSlug)} className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-white">{offer.cta}</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
