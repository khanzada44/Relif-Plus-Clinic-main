# Lumière Aesthetics

A production-ready, luxury aesthetic clinic website built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style primitives, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This project needs network access to Google Fonts at build time (for Fraunces + Manrope) — normal in any standard dev machine or CI/deploy environment.

## What's included

- All 17 requested pages (Home, About, Doctors + profiles, Services + detail, Before & After, Gallery, Testimonials, Pricing, Offers, Blog + posts, FAQ, Contact, Book Appointment, 404, Privacy Policy, Terms) under `app/`.
- Content fully data-driven from `data/*.ts` — no copy hardcoded inside components.
- Reusable UI system in `components/ui` (button, card, input, select, accordion, avatar, etc.), shared layout/section components, and a design-token Tailwind config (`tailwind.config.ts`).
- Booking form with React Hook Form + Zod validation (`components/sections/booking-form.tsx`).
- SEO: per-page metadata, Open Graph/Twitter cards, JSON-LD (MedicalClinic), `robots.ts`, `sitemap.ts`, canonical URLs.
- Framer Motion scroll reveals, hero curtain-reveal, animated stat counters, draggable before/after slider.
- Verified: `npx tsc --noEmit` passes clean, and `next build` produces all 35 static/SSG routes successfully (verified in this environment with a temporary font stub, since this sandbox has no outbound access to fonts.googleapis.com — your machine will fetch the real fonts fine).

## Notes / next steps for production

- Images are Unsplash placeholders per the brief — swap in real clinic photography before launch.
- The booking form currently logs to console; wire `onSubmit` in `booking-form.tsx` to your booking API or CRM.
- Replace `SITE.mapEmbedSrc` in `constants/site.ts` with your real Google Maps embed.
- Add real Instagram API/oEmbed integration if you want the gallery section to be live rather than curated.
