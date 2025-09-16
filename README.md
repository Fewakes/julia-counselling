This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project structure (custom additions)

- `app/` – App Router pages and routes
  - `app/page.tsx` – Landing page (sections are componentized and responsive)
  - `app/api/contact/route.ts` – Serverless email endpoint for the contact form
  - `app/thanks/page.tsx` – Contact success page
  - `app/contact/error/page.tsx` – Contact error page
- `components/` – Reusable UI
  - `SectionHeader.tsx` – Consistent section titles + underline accent
  - `Reveal.tsx` – IntersectionObserver reveal-on-scroll wrapper
- `data/content.ts` – Central place to manage image paths and copy (hero, gallery, services, testimonials)
- `public/` – Static assets (e.g., `julia.jpeg`, `Image1.jpg`, `adulttherapy.jpeg`)

## Content updates

- Hero photo: replace `public/julia.jpeg` and it will update automatically.
- Gallery: update `public/Image1.jpg`, `public/Image2.jpeg`, `public/Image3.jpg`.
- Service images: `public/adulttherapy.jpeg`, `public/childrentherapy.jpg`, `public/traumatherapy.jpg`.
- Testimonials: update quotes/avatars in `data/content.ts` if you prefer managing content centrally.

## SEO & performance

- Metadata: set in `app/layout.tsx` (title, description, icons, OpenGraph/Twitter).
- Sitemap/robots: `app/sitemap.ts` and `app/robots.txt`.
- Structured data (JSON-LD): embedded in `app/page.tsx`.
- Images: local images use `next/image`; remote Unsplash domains are allowed via `next.config.ts`.
- Smooth scrolling: enabled with header offset in `app/globals.css`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
