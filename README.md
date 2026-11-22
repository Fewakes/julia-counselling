# Julia Counselling

An international counselling website built with Next.js App Router, TypeScript and Tailwind CSS. It shares a visual system while keeping stable, distinct market routes and content.

## Routes

- `/` — international gateway and x-default SEO page
- `/qatar/` — Doha-focused experience and service pages
- `/uk/` — UK-focused information and service pages
- `/pl/` — Polish-language information and service pages

UK and Poland enquiries are accepted, but current service availability and eligibility are confirmed individually. Professional, regulatory and market-specific details that have not been verified remain marked `NEEDS_VERIFICATION` in `content/markets.ts` and are not shown as public claims.

## Project structure

- `app/` — market layouts, pages, contact API, sitemap and robots routes
- `components/` — shared shell, market selector, editorial sections and contact form
- `content/markets.ts` — typed market status, navigation and indexable route lists
- `content/qatar-home.ts` — editable Qatar homepage copy and information hierarchy
- `content/media.ts` — central mapping for approved public photography
- `content/testimonials.ts` — approved-only testimonial data with a production demo-content guard
- `lib/seo.ts` — page metadata, canonical and homepage hreflang helpers
- `lib/market-preference.ts` — first-party market preference storage
- `middleware.ts` — root-only coarse market routing

## Market routing and preference

The international gateway at `/` is always available and does not automatically redirect by IP or browser language. All three market routes are directly accessible. Choosing a country in the selector or a market card saves a first-party preference for the selector UI; it does not trap the visitor or change the content served at a URL.

## Contact and configuration

The enquiry form sends the market, contact details, optional age and preferred reply method, support category, and short message to the server-side email integration. The form warns visitors not to submit detailed health information. Analytics hooks accept only event names, market and page path; no analytics provider or tracking ID is configured.

Configure email delivery through environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO`
- `CONTACT_FROM`
- `NEXT_PUBLIC_SITE_URL` (defaults to `https://juliacounselling.com`)

For Vercel, add all four values in Project Settings → Environment Variables for Production (and Preview if preview forms should work). `CONTACT_FROM` must use a sender domain verified in Resend; the Resend sandbox sender only works within Resend's testing restrictions. Redeploy after changing environment variables. Check the Vercel Function logs for `[contact]` errors and Resend's email logs if a submission is accepted but not delivered.

Vercel builds use Node.js 24.x as pinned in `package.json` and `npm run build` (`next build --turbopack`).

The built-in rate limit is process-local. A shared rate-limit service should be configured before relying on it across multiple server instances.

## Development

```bash
npm install
npm run dev
```

Available checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Canonical URLs, homepage hreflang, sitemap entries and redirect mappings are maintained in `lib/seo.ts`, `content/markets.ts`, `app/sitemap.ts` and `next.config.ts`.
