# Cogent Base — marketing website

Production marketing site for **Cogent Base** (cogentbase.ai): autonomous due
diligence infrastructure for HKEX and SGX issuers and their investment-bank
sponsors. Built from the approved Claude Design mockup (preserved under
[`design-reference/`](./design-reference)) and hardened into a fast, secure,
accessible, deployable site.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with the mockup's design tokens ported into the theme
  (`src/app/globals.css`) as a single source of truth
- Fonts **self-hosted** via `next/font` (Bodoni Moda display, IBM Plex Mono
  for data/citations); body uses a Söhne-like neo-grotesque system stack
- Cookieless analytics (Plausible/Fathom), Cloudflare Turnstile, Resend email
- Deployed on **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # optional for local dev (see below)
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

With **no env vars set**, the site runs fully: the demo form validates and
returns success while logging the request to the server console; analytics and
Turnstile are disabled. Set the variables below to enable real delivery.

## Project structure

```
src/
  app/
    layout.tsx            Root layout: fonts, metadata, analytics, Turnstile
    page.tsx              Homepage (composes the sections)
    globals.css           Design tokens + component styles (single source)
    api/demo/route.ts     Demo-request handler (validate -> spam -> deliver)
    privacy|terms|security/  Legal + security pages (placeholder copy)
    robots.ts sitemap.ts manifest.ts   SEO / metadata routes
    icon.tsx opengraph-image.tsx       Generated favicon + share image
    not-found.tsx         404
  components/             Section components (Hero, Platform, Security, ...)
  content/site.ts         All page copy (edit text here, not in components)
  lib/                    validation, rate-limit, turnstile helpers
design-reference/         The approved mockup — canonical visual reference
```

Copy lives in `src/content/site.ts` so non-developers can edit text without
touching components.

## Environment variables

See [`.env.example`](./.env.example) for the full list.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | prod | Resend API key for demo-notification email |
| `DEMO_NOTIFY_TO` | prod | Recipient(s) of demo notifications (comma-sep) |
| `DEMO_NOTIFY_FROM` | prod | Verified Resend sender |
| `DEMO_WEBHOOK_URL` | optional | Also POST each request to a CRM/webhook |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | prod | Cloudflare Turnstile (client) |
| `TURNSTILE_SECRET_KEY` | prod | Cloudflare Turnstile (server verify) |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` | prod | Cookieless analytics domain |
| `NEXT_PUBLIC_ANALYTICS_SRC` | optional | Override analytics script URL |

No secrets are committed. Public (`NEXT_PUBLIC_*`) values are exposed to the
browser by design; keep `RESEND_API_KEY` / `TURNSTILE_SECRET_KEY` server-only.

## Demo-request flow

`POST /api/demo` -> rate-limit (per IP) -> honeypot check -> Turnstile verify ->
shared validation (`src/lib/validation.ts`) -> deliver via Resend and optional
webhook. Free-mail addresses are a **soft warning, never a block**. Client and
server share the same validation rules. If no mailer is configured the request
is logged server-side so it is never lost.

> The in-memory rate limiter resets on cold start. For strict multi-instance
> limits, swap `src/lib/rate-limit.ts` for a shared store (e.g. Upstash Redis)
> behind the same interface — the route handler does not change.

## Security & privacy

Strict headers are set in `next.config.ts` for every route: Content-Security-
Policy, HSTS (preload), X-Content-Type-Options, X-Frame-Options + CSP
`frame-ancestors 'none'`, Referrer-Policy, and Permissions-Policy. The site is
cookie-light (cookieless analytics) so no cookie banner is required. A
PDPO/PDPA/GDPR-aware privacy notice is at `/privacy` (placeholder copy for
counsel).

> **CSP note:** `style-src` and `script-src` include `'unsafe-inline'` to
> support `next/font` and the design system's inline style attributes. To
> tighten to a nonce-based CSP later, introduce a middleware nonce and drop
> `'unsafe-inline'`.

## Accessibility

Targets WCAG 2.1 AA: semantic landmarks, ordered headings, visible focus
states, full keyboard operability (including the split-screen verify
interaction and mobile menu), labelled form fields with `aria-live` status and
`role="alert"` errors, and `prefers-reduced-motion` honoured for all motion.

## SEO

Per-page titles/descriptions, canonical URLs, Open Graph + Twitter cards with a
generated share image (`opengraph-image.tsx`), JSON-LD Organization schema,
`sitemap.xml`, `robots.txt`, generated favicon/app icons, and `lang="en-GB"`.

## Deployment (Vercel)

1. Import the repo into Vercel (framework auto-detected as Next.js).
2. Add the environment variables above (Production + Preview).
3. Add the domain `cogentbase.ai` and set `www.cogentbase.ai` to redirect to the
   apex (also enforced in `next.config.ts`).
4. Preview deployments are created per pull request automatically.

## Content integrity

No invented statistics, metrics, client logos, or testimonials. Unverified
figures appear as clearly-marked tokens (e.g. `[SOC 2 / ISO 27001 status — to
be inserted]`) with `TODO(...)` comments for the team to replace with
substantiated content before launch.

## Design fidelity note

`design-reference/mockup/` is the canonical visual reference and is not built or
deployed. The production site reproduces it with semantic markup and the design
tokens above. The mockup's design-tool "Tweaks" panel (gold-hue / serif / motion
switcher) was intentionally **not** ported — it is an authoring artifact, not a
site feature.
