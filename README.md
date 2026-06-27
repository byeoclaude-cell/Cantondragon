# Canton Dragon Asian Grill &amp; Bar — Website

A fast, elegant, fully responsive marketing site for Canton Dragon Asian Grill &amp; Bar
(Scottsdale, AZ), built to replace the current cantondragonscottsdale.com.

Single-page site: hero, story, chef's signatures, full tabbed menu, bar/happy-hour,
gallery with lightbox, and a visit section with map + contact. Tasteful scroll
animations throughout, with full `prefers-reduced-motion` support.

## Tech

- **Static HTML + Tailwind CSS**, shipped as a precompiled stylesheet
  (`css/tailwind-compiled.css`) — no build step or CDN required to run
- Custom CSS in `css/styles.css` for brand components &amp; animations
- Vanilla JavaScript (no frameworks/dependencies)
- Google Fonts: Fraunces (display + serif body), Hanken Grotesk (UI/sans)

## File structure

```
canton-dragon/
├── index.html                # Page markup, SEO/social meta, JSON-LD
├── css/
│   ├── tailwind-compiled.css # Precompiled Tailwind utilities (linked in <head>)
│   └── styles.css            # Brand styles, components, animations
├── js/
│   ├── menu-data.js          # ALL menu + gallery + signature content (edit here)
│   └── main.js               # Nav, reveals, hero/pin scroll, menu tabs, lightbox, map
├── assets/                   # Real photography, logo, promos, hero video
├── tailwind.config.js        # Theme tokens (colors, fonts) for recompiles
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

- **Menu items / prices / descriptions** → `js/menu-data.js` (the `MENU` array).
  Add `spice: true` to flag a dish. Categories map 1:1 to the menu tabs.
- **Signature dishes** → `SIGNATURES` array in the same file.
- **Gallery photos** → `GALLERY` array. Swap in real photography (see below).
- **Hours / address / phone / social links** → search `index.html` for the value
  (e.g. `(480) 451-8866`). Phone appears in the nav drawer, Visit section, footer,
  and the JSON-LD structured data block.

## Photography

Food, interior, drink and promo images live in `assets/` (the restaurant's own
photography, served locally as optimized WebP). To swap an image, drop the new file
into the matching `assets/` subfolder and update its reference in `js/menu-data.js`
(menu/gallery/signatures) or the `<img src>` tags in `index.html` (hero poster/video,
About section, `og:image`/`twitter:image` meta, and JSON-LD `image`).

> **Image weights:** all photos are optimized WebP (longest side ≤1600px, card-stack
> imagery ≤1200px), well under 300 KB each — the full `assets/` folder is ~5 MB.
> The one remaining heavy file is the hero video (`assets/video/`, ~2.9 MB); re-encode
> it with ffmpeg (e.g. 720p H.264 CRF 26 + `-movflags +faststart`, or a WebM `<source>`)
> before launch to fully clear the sub-2s bar on mobile.

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
- **JSON-LD `Restaurant`** structured data is included for local SEO / rich results.

## Accessibility &amp; performance notes

- Semantic landmarks, skip link, labeled icon buttons, visible focus states.
- Lazy-loaded images; hero image is `fetchpriority="high"`.
- All motion respects `prefers-reduced-motion`.
- Verified responsive at 375 / 768 / 1024 / 1440px.

---

Menu content sourced from the restaurant's 2025 Dine-In menu. Prices subject to change —
confirm before launch.
