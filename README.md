# Shree Ratna Ghar — Premium IT & Digital Advertising Agency Website

**"Turning Vision Into Digital Excellence."**

A fully static, single-page corporate website built with [Astro](https://astro.build).
No backend, no database, no API calls — pure HTML/CSS/JS output.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
index.astro                  → assembles the page from sections
src/
  layouts/Base.astro         → <head>, SEO meta, fonts, reveal engine
  components/                → one component per page section (+ Icon, BrandMark, CoverArt)
  data/                      → ALL copy/content lives here (services, industries, projects, contact…)
  lib/iconData.ts            → build-time inline SVG from Phosphor / Simple Icons JSON
  styles/global.css          → design tokens, typography, buttons, motion primitives
public/
  fonts/                     → self-hosted Clash Display + Satoshi (Fontshare, variable)
```

## Design system — quick facts

- **Palette:** gold `#D4AF37` · deep navy `#0B1F3A` · royal `#164E9B` · paper `#F7F9FC` · dark `#071426`
- **Shape:** radius 0 everywhere (sharp, editorial)
- **Type:** Clash Display (display) + Satoshi (body), self-hosted variables
- **Icons:** Phosphor (UI) + Simple Icons (social), inlined at build time
- **Motion:** IntersectionObserver reveals, CSS transforms only; `prefers-reduced-motion` respected

## Before launch — replace placeholders

All in `src/data/site.ts`:

1. `CONTACT.email`, `CONTACT.phone*`, `CONTACT.address`
2. `CONTACT.whatsapp` → your real `https://wa.me/<number>` link
3. `SOCIALS` hrefs (currently `#`)
4. `astro.config.mjs` → `site` domain (for canonical URLs when you add them)

Nothing else contains fabricated data: portfolio entries are clearly labeled
demo concepts, there are no fake testimonials or statistics, and the contact
form composes a `mailto:` message locally (it is honestly labeled as doing so).

## Quality checks

`qa.mjs` is a Browser QA harness (21 checks) that runs against the preview server:

```bash
npm run build
npm run preview -- --port 4321   # keep running
npm i --no-save playwright-core  # uses your installed Chrome
node qa.mjs
```

It verifies sticky-header states, reveal animations, the services accordion and
contact prefill, the process draw animation, portfolio filters and dialogs,
honest contact-form validation, the mobile menu, and that no horizontal
overflow appears on mobile/tablet.
