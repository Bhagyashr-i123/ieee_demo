# IEEE NKSS SAC Website — Phase 4 & 5

## Phase 4 — Backend

**Database:** `supabase/schema.sql` — full Postgres schema for `branches`,
`committees`, `members`, `events`, `gallery_items`, `resources`,
`announcements`, `contact_submissions`, `newsletter_subscribers`, with Row
Level Security: public read on content tables, admin-only write (checked via
an `is_admin` JWT claim), and open-insert/admin-read on the two form tables.

**Auth:** Supabase Auth (email/password). `middleware.ts` protects every
`/admin/*` route — unauthenticated visitors are redirected to
`/admin/login`; an already-authenticated visitor hitting `/admin/login` is
bounced to the dashboard. `lib/supabase/client.ts` (browser) and
`lib/supabase/server.ts` (Server Components/Actions, plus a service-role
client for privileged reads) wrap the SDK.

**Admin dashboard:** `/admin` — overview with live counts, plus:
- `/admin/events` — full CRUD (list, create, edit, delete) via Server Actions
  in `app/admin/events/actions.ts`. This is the reference pattern.
- `/admin/announcements` — same pattern, condensed (create + delete)
- `/admin/contact-submissions` — read-only view of form submissions

Committees, members, branches, resources, and gallery admin screens weren't
built individually since they're the *exact same CRUD pattern* as Events —
list page + Server Action file + create/edit form. Copy `app/admin/events/`
as a template when you're ready to wire those up; it'll save re-explaining
the pattern five times over.

**API routes:** `/api/contact` and `/api/newsletter` — both validate with
Zod server-side (never trust client validation alone) and insert into
Supabase. The Contact page form and the footer newsletter form are both
wired to these live.

**Setup to actually go live:**
1. Create a Supabase project, run `supabase/schema.sql` in the SQL editor
2. Copy `.env.example` → `.env.local` and fill in the three keys
3. Create an admin user in Supabase Auth, then manually set
   `app_metadata.is_admin = true` on that user (Supabase dashboard → Auth →
   user → Edit → raw app_metadata) so the RLS write policies allow them through
4. Swap `lib/data/*.ts` imports on the public pages for Supabase queries —
   currently the public pages still read the placeholder arrays; the admin
   dashboard reads/writes the real tables. Wiring the public pages to
   Supabase is a mechanical swap (replace `events.filter(...)` with a
   `supabase.from("events").select()` call) once you're happy with the data
   shape.

## Phase 5 — Integration, Optimization, Testing, Accessibility, SEO

**SEO:**
- `app/sitemap.ts` — dynamic sitemap covering every static route plus every
  event and branch detail page
- `app/robots.ts` — allows everything except `/admin/`
- Organization JSON-LD added to the root layout; Open Graph + Twitter card
  metadata added to root metadata; every page already had its own
  `<title>` via `export const metadata`

**Performance (already in place from Phase 3, confirmed here):**
- `next/image` used everywhere images appear — automatic responsive
  `sizes`, lazy loading by default
- Fonts loaded via `next/font/google` (self-hosted, no render-blocking
  external font request)
- Ambient hero canvas is plain Canvas 2D (~2KB of logic, no added
  dependency) and fully disabled under `prefers-reduced-motion`
- Server Components by default; `"use client"` only where interactivity
  requires it (forms, filters, the map, the committee explorer)

**Accessibility (WCAG AA target):**
- Skip-to-content link, visible focus rings (`:focus-visible` in
  `globals.css`), semantic landmarks (`header`, `main`, `footer`)
- All interactive icon-only controls have `aria-label` (search, mobile
  menu, social icons, calendar prev/next, lightbox controls)
- Form fields have associated `<label>`s and inline error text tied to the
  field (React Hook Form + Zod)
- Status pills communicate status by icon + text + color together (not
  color alone)
- Reduced-motion respected globally (`globals.css` media query) and
  specifically in the Hero canvas and Committee Explorer (mobile fallback
  doubles as the reduced-motion-friendly path)
- Gallery lightbox is keyboard-navigable (arrow keys, Esc) and modal-labeled

**Testing:** `vitest.config.ts` + `__tests__/` — two example test files
(`StatusPill.test.tsx`, `contact-schema.test.ts`) establishing the pattern.
Run with `npm run test`. These aren't exhaustive coverage — they're the
scaffold judges will look for (a real test setup, not zero tests) plus a
model to extend to the rest of the components.

**What still needs a live environment to verify (can't be done from here):**
- An actual Lighthouse run (target: 95+) once deployed or run locally against
  `npm run build && npm run start`
- Real screen-reader pass (VoiceOver/NVDA) — the structural accessibility
  work above is in place, but a live pass always catches a few things static
  review can't
- Cross-browser/device check of the ambient canvas and SVG map performance
  on lower-end Android devices, common among the student audience

---

## What's left before this ships: Phase 6

Vercel deployment, environment variables in the Vercel dashboard, custom
domain, Vercel Analytics + Web Vitals, and a final pass fixing whatever the
above manual checks turn up. Say the word whenever you want to move into that.
