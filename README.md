# IEEE NKSS SAC Website

Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion, built to the
Phase 1/2 design system ("Signal / Network" concept).

## Setup

```bash
npm install
npm run dev
```

## Before going live

- **Logos:** drop the official IEEE Master Brand and NKSS/SAC lockup SVGs
  (from https://ieeebangalore.org/ieee-media-kit/) into `public/logos/` and
  swap the text placeholder in `components/layout/Navbar.tsx` and
  `components/layout/Footer.tsx` for the real `<Image>` logo.
- **Content:** everything in `lib/data/*.ts` (events, branches) is realistic
  placeholder content — swap for real data once available, or wire these
  files up to Supabase in Phase 4.
- **Images:** hero/event images currently point at Unsplash placeholders —
  swap for real branch/event photography.

## What's built (Phase 3 complete)

- Design tokens (`tailwind.config.ts`, `app/globals.css`)
- Root layout, fonts, accessibility floor (skip link, focus-visible, reduced-motion), custom 404
- Navbar (glass-on-scroll, mobile drawer) + Footer (4-column)
- **Home** — Hero (ambient canvas), StatBand (count-up), Announcement ticker,
  Featured Events, Network teaser, Achievements strip, CTA band
- **About** — mission, org structure, history timeline
- **Team** — grouped by Advisory / Executive / Esteemed Members
- **Committees** — interactive node-cluster Explorer (desktop) with an
  accessible accordion fallback (mobile / no-JS-friendly pattern)
- **Events** — filterable list, custom month calendar (date-fns), dynamic
  event detail pages with a live countdown for upcoming events
- **Resources** — searchable/filterable download center
- **Gallery** — masonry grid, year filter, keyboard-navigable lightbox
- **Achievements** — full alternating vertical timeline
- **Announcements** — pinned + chronological feed
- **Branches** — interactive SVG branch map + searchable directory + dynamic
  branch detail pages (with that branch's events)
- **Contact** — React Hook Form + Zod validated form (with a honeypot field), map embed

All content in `lib/data/*.ts` is realistic placeholder data — see the "Before
going live" section above for what to swap before shipping.

## Next phases (not started)

Phase 4 (Supabase backend + admin dashboard + real forms), Phase 5
(integration/testing/accessibility/SEO pass), Phase 6 (Vercel deployment).
