# Runbook

Day-to-day "how do I..." tasks for running this site. For architecture/tech
overview see [README.md](README.md); for visual rules see [DESIGN.md](DESIGN.md).

## Quick reference

| Task | File(s) |
|---|---|
| Schedule a break/vacation closure | `js/break-notice.js` + `index.html` (JSON-LD) |
| Add/remove a Highlights card photo or gallery photo | drop file in `assets/<category>/`, run `scripts/build-gallery-categories.js` |
| Change a dessert's Curated/House-Made tag | `DESSERT_MADE` in `js/menu-data.js` |
| Edit menu items/prices/descriptions | `MENU` array in `js/menu-data.js` |
| Edit bar items/prices (cocktails, beer, wine, spirits) | `BAR` array in `js/menu-data.js` |
| Edit the two Seasonal Specials cards | `index.html`, `#specials` section (hand-written, not JS-driven) |
| Edit hours / address / phone / social links | search `index.html` for the current value |
| Preview locally | `python -m http.server 4321` from the project root |
| Publish | `vercel --prod` (see Publishing, below) |

---

## Scheduling a break / vacation closure

Two places, both must be edited together:

1. **`js/break-notice.js`** — fill in `CONFIG.start`, `CONFIG.end`, `CONFIG.reopen`
   (`YYYY-MM-DD`). This drives everything visitors see: a dismissible banner,
   the "Order Online" buttons switching to "Reopens [date]", and a note on the
   hero and Visit-section hours. It turns on and off automatically based on
   today's date — no need to remember to blank it out after the break ends.
2. **`index.html`** — add a matching entry to `specialOpeningHoursSpecification`
   in the `Restaurant` JSON-LD block (see the comment directly above that
   `<script>` tag for the exact snippet and field meanings). This one does
   *not* update itself: JSON-LD is static HTML read by search crawlers, so it
   has to be added and removed by hand, using the same dates as step 1.

Also update the hours on the restaurant's Google Business Profile — that's
what most search results and Google Maps actually show, independent of this
site.

## Updating Highlights card photos & their galleries

Each of the four Highlights cards ("Cocktails & Wine", "Beer", "Desserts",
"The Kitchen") and its matching full-page gallery (`gallery-drinks.html`,
`gallery-beer.html`, `gallery-desserts.html`, `gallery-kitchen.html`) pull
from **one folder per category** — nothing else needs editing for a plain
photo swap:

| Card | Folder |
|---|---|
| Cocktails & Wine | `assets/drinks/` |
| Beer | `assets/beer/` |
| Desserts | `assets/Dessert/` |
| The Kitchen | `assets/Entrees/` |

**To add or remove a photo:**

1. Drop the image file into (or delete it from) the matching folder above.
2. Run, from the project root:
   ```
   node scripts/build-gallery-categories.js
   ```
   This rescans all four folders and rewrites `js/gallery-categories.js`.
   The caption shown in the gallery grid is auto-generated from the filename
   (`TokyoGlow.webp` → "Tokyo Glow"), so name files descriptively.
3. Refresh the page. Both the card's cycling preview on the homepage and its
   full gallery page update from the same regenerated file — nothing else to
   touch.

**One exception — the Desserts card's Curated/House-Made tag pill.** That
label isn't derivable from a filename, so it's kept in a small hand-maintained
lookup: `DESSERT_MADE` near the top of `js/menu-data.js`, keyed by filename
(e.g. `'Fryapple.webp': 'House-Made'`). If you add a new dessert photo, add a
line there too — if you skip it, the pill just falls back to the card's
default tag ("Curated") instead of showing something wrong.

**If a change doesn't show up after running the script:** your browser may
have cached the old `js/gallery-categories.js`. Bump its cache-busting version
number (the `?v=N` after the filename) by one wherever it's linked —
`index.html` and all four `gallery-*.html` pages — and reload.

## Editing the menu

- **Menu items / prices / descriptions** (the tabbed Menu section) →
  `MENU` array in `js/menu-data.js`. Each object is one tab (`id`, `label`,
  `group`, `items`). Add `spice: true` to an item to show a chili tag.
- **Bar items / prices** (cocktails, beer, wine, spirits — the tabbed Bar
  section) → `BAR` array in the same file, same shape.
- **Highlights card copy** (title, description, tag pill, which Bar/Menu tab
  its "View Menu" link jumps to) → `FEATURED` array, same file.

> **Dead arrays — don't bother editing these:** `DRINKS`, `SIGNATURES`,
> `DESSERTS`, and `PROMOS` still exist in `js/menu-data.js` but nothing on the
> live page reads them anymore (leftover from an earlier design pass). Editing
> them won't change anything you see on the site. The Seasonal Specials
> section in particular looks like it should read from `PROMOS` — it doesn't;
> see below.

## Updating Seasonal Specials

The two Specials cards (currently "Cocktail Menu" and "Wine by the Bottle")
are **hand-written HTML**, not generated from data — find the `#specials`
section in `index.html` and edit the two `<article class="promo-card...">`
blocks directly (image, badge text, heading, price, description).

## Updating hours / address / phone / social links

No single source of truth — search `index.html` for the current value (e.g.
`(480) 451-8866`) and update every match. It appears in the nav drawer, Visit
section, footer, and the `Restaurant` JSON-LD block near the top of the file.

## Photography (general)

See [README.md § Photography](README.md#photography) for the hero duotone
image and general asset-optimization notes. For gallery/highlight photos
specifically, use the folder + script workflow above instead of editing
`<img>` tags by hand.

## Rebuilding the stylesheet

Only needed if you change Tailwind utility classes in `index.html`/`js/*.js`
or theme tokens in `tailwind.config.js` — the site ships a **precompiled**
stylesheet, not a CDN:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./css/tailwind-input.css -o ./css/tailwind-compiled.css --minify
```

Then bump the `?v=` on `css/styles.css` wherever it's linked, so returning
visitors don't see a stale cached copy.

## Preview locally

```bash
cd canton-dragon
python -m http.server 4321
# open http://localhost:4321
```

Any static file server works — there's no build step required to run the site.

## Publishing

This project is linked to Vercel (`cantondragon`, see `.vercel/project.json`)
but is not connected to a git remote for auto-deploy, so deploys are manual.
From the project root, with the Vercel CLI installed and logged in:

```bash
vercel --prod
```

Review the preview URL it prints before confirming production, especially
after editing JSON-LD, hours, or the break-notice dates.
