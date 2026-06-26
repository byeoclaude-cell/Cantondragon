# Canton Dragon Asian Grill &amp; Bar — Website

A fast, elegant, fully responsive marketing site for Canton Dragon Asian Grill &amp; Bar
(Scottsdale, AZ), built to replace the current cantondragonscottsdale.com.

Single-page site: hero, story, chef's signatures, full tabbed menu, bar/happy-hour,
gallery with lightbox, and a visit section with map + contact. Tasteful scroll
animations throughout, with full `prefers-reduced-motion` support.

## Tech

- **Static HTML + Tailwind CSS** (no build step required to run)
- Custom CSS in `css/styles.css` for brand components &amp; animations
- Vanilla JavaScript (no frameworks/dependencies)
- Google Fonts: Playfair Display (display), Cormorant Garamond (serif), Inter (UI)

## File structure

```
canton-dragon/
├── index.html          # Page markup, SEO meta, JSON-LD, Tailwind config
├── css/styles.css      # Brand styles, components, animations
├── js/
│   ├── menu-data.js    # ALL menu + gallery + signature content (edit here)
│   └── main.js         # Nav, reveals, parallax, menu tabs, gallery lightbox
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

## Replace the placeholder photos

All food/interior images currently load from Unsplash (verified working URLs) as
**placeholders**. Replace them with the restaurant's own photography for the real launch:

1. Drop optimized images (WebP/JPEG, ~1600px wide) into an `images/` folder.
2. Update the `img` URLs in `js/menu-data.js` and the `<img src>` tags in `index.html`
   (hero, About section, OG/`og:image` meta, and JSON-LD `image`).

## Going to production (recommended)

The site uses the **Tailwind Play CDN** for zero-config editing. That triggers a console
notice and isn't ideal for production performance. To ship a compiled stylesheet:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./src/input.css -o ./css/tailwind.css --minify
```

Then replace the `<script src="https://cdn.tailwindcss.com">` + inline `tailwind.config`
block in `index.html` with `<link rel="stylesheet" href="css/tailwind.css">` and move the
`theme.extend` config into `tailwind.config.js`. (Optional — the CDN version works as-is.)

## Integrations / live data

- **Online ordering** buttons link to the existing Heartland system:
  `https://cantondragon.hrpos.heartland.us/menu`
- **Map** uses a keyless Google Maps embed (no API key needed).
- **JSON-LD `Restaurant`** structured data is included for local SEO / rich results.

## Accessibility &amp; performance notes

- Semantic landmarks, skip link, labeled icon buttons, visible focus states.
- Lazy-loaded images; hero image is `fetchpriority="high"`.
- All motion respects `prefers-reduced-motion`.
- Verified responsive at 375 / 768 / 1024 / 1440px.

---

Menu content sourced from the restaurant's 2025 Dine-In menu. Prices subject to change —
confirm before launch.
