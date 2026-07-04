# Canton Dragon Asian Grill &amp; Bar — Website

A fast, elegant, fully responsive marketing site for Canton Dragon Asian Grill &amp; Bar
(Scottsdale, AZ), built to replace the current cantondragonscottsdale.com.

Marketing site: hero, story, chef's signatures, full tabbed menu, bar/happy-hour,
a Highlights section whose four cards each link out to their own full-page photo
gallery, and a visit section with map + contact. Tasteful scroll animations
throughout, with full `prefers-reduced-motion` support.

For day-to-day content tasks (scheduling a closure, swapping photos, editing
the menu, deploying) see **[RUNBOOK.md](RUNBOOK.md)** — this file covers
architecture and setup instead.

## Tech

- **Static HTML + Tailwind CSS**, shipped as a precompiled stylesheet
  (`css/tailwind-compiled.css`) — no build step or CDN required to run
- Custom CSS in `css/styles.css` for brand components &amp; animations
- Vanilla JavaScript (no frameworks/dependencies)
- **Self-hosted fonts** (latin-subset variable woff2 in `assets/fonts/`, ~179 KB) —
  Fraunces (display + serif body), Hanken Grotesk (UI/sans); no third-party
  render-blocking request. Regenerate with `python scripts/bundle_fonts.py`.

## File structure

```
canton-dragon/
├── index.html                    # Home page markup, SEO/social meta, JSON-LD
├── gallery-drinks.html           # Full-page gallery for the Cocktails & Wine card
├── gallery-beer.html             # ...Beer card
├── gallery-desserts.html         # ...Desserts card
├── gallery-kitchen.html          # ...The Kitchen card
├── privacy.html
├── css/
│   ├── tailwind-compiled.css     # Precompiled Tailwind utilities (linked in <head>)
│   └── styles.css                # Brand styles, components, animations
├── js/
│   ├── menu-data.js              # Menu/bar/highlights content (edit here) — see RUNBOOK.md
│   ├── gallery-categories.js     # Auto-generated; do not edit by hand (see below)
│   ├── gallery-page.js           # Shared renderer for the gallery-*.html pages
│   ├── break-notice.js           # Vacation/closure banner config
│   └── main.js                   # Nav, reveals, menu tabs, highlights cards, map
├── scripts/
│   └── build-gallery-categories.js # Scans assets/{drinks,beer,Dessert,Entrees}/
│                                    # and regenerates js/gallery-categories.js
├── assets/                       # Real photography, logo, promos, duotone hero image
├── tailwind.config.js            # Theme tokens (colors, fonts) for recompiles
├── RUNBOOK.md                    # Day-to-day content/ops tasks
├── PRODUCT.md / DESIGN.md         # Product brief / visual design system
└── README.md
```

## Run locally

Any static server works. For example:

```bash
cd canton-dragon
python -m http.server 4321
# open http://localhost:4321
```

## Editing content

Covered in detail in **[RUNBOOK.md](RUNBOOK.md)**, including which arrays in
`js/menu-data.js` actually drive the live page (a few — `DRINKS`, `SIGNATURES`,
`DESSERTS`, `PROMOS` — are leftover and unused; don't edit those expecting a
change). Short version:

- **Menu / bar items, prices, descriptions** → `MENU` / `BAR` arrays in `js/menu-data.js`.
- **Highlights card photos + their gallery pages** → drop files in the matching
  `assets/` folder and run `node scripts/build-gallery-categories.js`.
- **Seasonal Specials cards** → hand-written HTML in `index.html`, `#specials`.
- **Hours / address / phone / social links** → search `index.html` for the value
  (e.g. `(480) 451-8866`).
- **Scheduling a break / vacation closure** → see RUNBOOK.md; involves both
  `js/break-notice.js` and a JSON-LD block in `index.html`.

## Photography

Food, interior, drink and promo images live in `assets/` (the restaurant's own
photography, served locally as optimized WebP). For Highlights card / gallery
photos specifically, see RUNBOOK.md — it's a folder-drop + script workflow, not
manual `<img>` edits. For everything else (hero, About section, `og:image`/
`twitter:image` meta, JSON-LD `image`), swap the file in its `assets/`
subfolder and update the `<img src>` / meta tag directly in `index.html`.

The **hero** is a charcoal+gold *duotone* still — `assets/others/hero-duotone.webp`
(`#heroImg`), zoomed and revealed on scroll by `main.js`. There is no hero video.
To regenerate it from a different source photo (charcoal shadows → gold highlights,
~1920px wide):

```bash
python scripts/make-hero-duotone.py "assets/others/your-source.webp"
```

> **Image weights:** every asset is optimized WebP (longest side ≤1600px, card-stack
> imagery ≤1200px), well under 300 KB each — the full `assets/` folder is ~2.7 MB,
> comfortably inside the sub-2s budget on mobile.

## Rebuilding the stylesheet

The site links a **precompiled** Tailwind stylesheet (`css/tailwind-compiled.css`) — no
CDN, no console notice. After changing Tailwind classes in `index.html`/`js/`, or theme
tokens in `tailwind.config.js`, recompile:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./css/tailwind-input.css -o ./css/tailwind-compiled.css --minify
```

## Integrations / live data

- **Online ordering** buttons link to the existing Heartland system:
  `https://cantondragon.hrpos.heartland.us/menu`
- **Map** uses Leaflet with dark CARTO/OpenStreetMap tiles (keyless, no API key needed).
  Leaflet's CSS + JS are **lazy-loaded** by `main.js` only when the Visit section nears
  the viewport, so they stay off the initial render path.
- **JSON-LD `Restaurant`** structured data is included for local SEO / rich results.

## Accessibility &amp; performance notes

- Semantic landmarks, skip link, labeled icon buttons, visible focus states.
- The mobile nav drawer **traps focus**, moves focus in on open, and restores
  it to the trigger on close. The gallery-page lightboxes move focus to the
  close button and restore it on close; `Esc` closes both.
- Lazy-loaded images; hero image is `fetchpriority="high"`.
- All motion respects `prefers-reduced-motion`.
- Verified responsive at 375 / 768 / 1024 / 1440px.

---

Menu content sourced from the restaurant's 2025 Dine-In menu. Prices subject to change —
confirm before launch.
