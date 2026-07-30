# IEEE NKSS SAC Website — Phase 6: Deployment

## 1. Repository
```bash
git init
git add .
git commit -m "Initial commit — IEEE NKSS SAC website"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 2. Vercel project
1. Go to vercel.com → **Add New → Project** → import the GitHub repo
2. Framework preset: Next.js (auto-detected via `vercel.json`)
3. Region: `bom1` (Mumbai) is set in `vercel.json` — closest to North
   Karnataka, lowest latency for your actual users
4. Before the first deploy, add environment variables (Project Settings →
   Environment Variables), same three from `.env.example`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (mark this one "Sensitive" in Vercel — it
     bypasses RLS and must never be exposed client-side)
5. Deploy

## 3. GitHub Actions CI
`.github/workflows/ci.yml` runs lint + test + build on every push/PR to
`main`. Add the same three Supabase keys as **repository secrets**
(Settings → Secrets and variables → Actions) so the build step succeeds —
without them, `next build` will fail wherever a page reaches into Supabase.

This is deliberately separate from Vercel's own build: Vercel deploys,
GitHub Actions gatekeeps merges. A PR with a broken build or failing test
shows a red X before it ever reaches `main`.

## 4. Domain
1. Vercel Project → Settings → Domains → add your domain (e.g.
   `ieeenkss.org` or a subdomain like `sac.ieeenkss.org` if the subsection
   already owns the root domain)
2. Add the CNAME/A record Vercel gives you at your DNS provider
3. Update `metadataBase` in `app/layout.tsx` and the `BASE_URL` constant in
   `app/sitemap.ts` / `app/robots.ts` from the placeholder
   `ieeenkss-sac.example.org` to the real domain once it's live — search
   results and social share cards use these

## 5. Analytics & monitoring
`@vercel/analytics` and `@vercel/speed-insights` are already mounted in
`app/layout.tsx`. Once deployed, both start reporting automatically in the
Vercel dashboard (Analytics tab / Speed Insights tab) — no extra config.
For error tracking beyond Vercel's own logs, `app/error.tsx` and
`app/global-error.tsx` are the two hook points where a service like Sentry
would plug in (swap the `console.error(error)` call for the SDK's capture
call).

## 6. Post-deploy checklist
Run these once the site is live at its real URL — they need a live instance
and can't be verified from a code review:

- [ ] Lighthouse run (Chrome DevTools or PageSpeed Insights) on Home, an
      Event detail page, and the Branches page — target 95+
- [ ] `vercel.app` preview URL passed through
      [webpagetest.org](https://www.webpagetest.org) from a Bengaluru/Mumbai
      test location, since that's closer to your actual audience than a
      US-based Lighthouse run
- [ ] Screen reader pass (VoiceOver on Mac/iOS or NVDA on Windows) through
      the Committee Explorer and Branch Map specifically — those are the
      two components with the most custom interaction
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Confirm the admin login flow works against the real Supabase project
      (not just localhost) and that an account without `is_admin` set
      correctly gets blocked by RLS on writes
- [ ] Test the contact form and newsletter signup end-to-end against
      production Supabase, not just local dev

## 7. Ongoing
- CI runs on every push — a red build blocks merging, not deploying
  (Vercel will still deploy `main` on push regardless of CI status unless
  you wire a required-status-check branch protection rule in GitHub, which
  is worth doing before other volunteers start committing)
- Rotate the Supabase service role key if it's ever accidentally committed
  or exposed — it's the one credential in this project that bypasses every
  RLS policy

---

This closes out the master prompt's six phases. Everything from Phase 1's
research through this deployment guide is in the project zip — the two
things that were always going to need a live environment (Lighthouse
numbers, a real screen-reader pass) are called out above rather than
guessed at.
