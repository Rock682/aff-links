# ArthaOrbit - India Finance Affiliate Platform

Next.js 15 + TypeScript + Tailwind + Supabase-ready fintech affiliate project optimized for SEO, EEAT, AdSense, and conversions.

## Features
- Premium fintech homepage with offer cards and sticky nav
- Comparison, calculators, blog, and policy pages for AdSense compliance
- Affiliate cloaked link generation with UTM parameters
- API routes for click tracking and affiliate link resolution
- SEO setup: metadata, robots, sitemap, OpenGraph, JSON-LD
- Admin section placeholder with role-ready architecture

## Database schema (Supabase)
Core tables:
- users(id, email, role, created_at)
- authors(id, name, bio, credentials, avatar_url)
- posts(id, slug, title, content, excerpt, author_id, featured_image, seo_title, seo_description, category, tags, faq_json, published_at, updated_at)
- affiliate_offers(id, slug, network, title, category, destination_url, cloaked_url, payout_type, rating, pros, cons, badge, active)
- comparisons(id, category, title, json_data, updated_at)
- calculators(id, slug, name, description, config_json)
- click_events(id, offer_slug, source_page, utm_campaign, user_id, created_at)
- newsletters(id, email, consent, created_at)

## Deployment
1. Set environment vars in Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY.
2. Run `npm install`, `npm run build`.
3. Deploy to Vercel and set custom domain.
4. Connect Google Search Console, GA4, and AdSense after content moderation.

## Security
- Use Supabase Row Level Security for admin/user boundaries.
- Add rate limiting middleware for API endpoints.
- Add CSRF token validation for form mutations.
