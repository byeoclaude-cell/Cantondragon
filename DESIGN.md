---
name: Canton Dragon Asian Grill & Bar
description: A charcoal-and-gold duotone marketing site for an upscale Scottsdale Asian grill & bar
colors:
  lacquer: "#7B1113"
  lacquer-bright: "#9B1B1D"
  lacquer-deep: "#5E0C0E"
  gold: "#C8A24B"
  gold-light: "#D9BC73"
  gold-deep: "#A9842F"
  champagne: "#F2D88A"
  ink: "#1A1310"
  charcoal: "#14100E"
  charcoal-soft: "#1C1714"
  ivory: "#FBF7F0"
  ivory-warm: "#F6EFE3"
  spice: "#E0857A"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "-0.012em"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  pill: "9999px"
  card: "1rem"
  card-lg: "1.25rem"
  bezel: "1.75rem"
spacing:
  xs: "0.5rem"
  sm: "0.8rem"
  md: "1.6rem"
  lg: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#2A1D05"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "#2A1D05"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-ghost:
    backgroundColor: "rgba(251,247,240,.08)"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  tag-signature:
    backgroundColor: "transparent"
    textColor: "{colors.gold-light}"
    rounded: "{rounded.pill}"
    padding: "0.05rem 0.4rem"
  tag-popular:
    backgroundColor: "{colors.gold-light}"
    textColor: "#2A1D05"
    rounded: "{rounded.pill}"
    padding: "0.05rem 0.45rem"
  nav-link:
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
---

# Design System: Canton Dragon Asian Grill & Bar

## 1. Overview

**Creative North Star: "The Lacquered Dining Room"**

Canton Dragon reads like the inside of an upscale Asian grill & bar at night: charcoal walls, a single lacquer-red accent wall, warm gold light pooling on lacquered surfaces, and every photograph graded to look commissioned rather than snapped. The system is dark by default — not for drama's own sake, but because that's the actual room the restaurant occupies after dark, when most covers happen. Gold is spoken in a whisper (accents, hairlines, hover states), never shouted across a whole surface; lacquer red appears only where it means something (the active menu tab, the logo mark) so it stays a signal, not wallpaper.

This system explicitly rejects the generic local-restaurant-template look: no stock-photo hero carousels, no bolted-on review widgets, no default Google Maps embeds, no cluttered nav, no menu PDFs. Every surface is custom-built — real commissioned-feeling photography, a considered duotone hero, a hand-tuned map style, and motion that is authored rather than templated.

**Key Characteristics:**
- Charcoal-first, gold-rare: gold is a hairline, a hover state, a single accent word — never a background.
- One signature easing curve (`--ease`) authored once and reused everywhere, so motion feels like a single hand designed it.
- Photography is unified under one warm photographic grade (`--img-grade`), so commissioned and incidental shots read as one continuous world.
- Editorial serif (Fraunces) carries both headlines and long-form prose; UI chrome (nav, buttons, labels) stays in a distinct sans (Hanken Grotesk) — the contrast between the two is the typographic backbone.

## 2. Colors

A dark, warm, low-saturation stage (charcoal, ink) with two rare, deliberate accents — lacquer red and gold — that only ever appear where they carry meaning.

### Primary
- **Gold** (`#C8A24B`): the accent of invitation — CTAs (`.btn-gold`), hover states, price callouts, active dots/indicators, hairline borders on cards. Never a fill color for large surfaces.
- **Gold Light / Champagne** (`#D9BC73` / `#F2D88A`): brighter gold used for hover states and the one accented hero word, where the base gold would sink into the duotone background.

### Secondary
- **Lacquer** (`#7B1113`): the brand's namesake red — used sparingly and specifically: the active menu-tab pill, the logo mark, promo badges. Its rarity is what makes it register as "the brand color" rather than decoration.

### Neutral
- **Charcoal** (`#14100E`): the base stage — body background, hero matte panels, nav (as frosted glass over it).
- **Charcoal Soft** (`#1C1714`): card and panel backgrounds one step up from the base stage.
- **Ink** (`#1A1310`): reserved for any light-background context (rare on this dark-first site).
- **Ivory** (`#FBF7F0` / warm `#F6EFE3`): all body and UI text on dark surfaces; used at full opacity for primary text, and at reduced opacity (`/45` to `/80`) for secondary and tertiary text — never swapped for a duller gray.
- **Spice** (`#E0857A`): reserved exclusively for the spice-level tag on menu items — never used decoratively elsewhere.

### Named Rules
**The Gold Scarcity Rule.** Gold never fills a surface. It is a border, a hover glow, a single word, a dot, a tag — always ≤10% of any given view. The moment it covers more than that, it stops reading as premium and starts reading as gaudy.

**The One Grade Rule.** Every photograph (menu, gallery, about, card-stack) passes through the same `--img-grade` filter (`saturate(1.06) contrast(1.05) brightness(0.96) sepia(0.10)`). Never leave a photo ungraded next to graded ones — the whole point is that every image looks shot for this brand.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Fraunces (with Georgia, serif fallback) — also carries long-form prose, not just headings
**Label/UI Font:** Hanken Grotesk (with system-ui, sans-serif fallback)

**Character:** Fraunces is set with optical sizing tracking the scale, oldstyle figures, and ligatures (`onum`, `liga`, `dlig`, `calt`) — it reads as set-by-hand editorial type, not a default Google Fonts serif. Hanken Grotesk is reserved for UI chrome (nav, buttons, eyebrows, tags), giving a clean functional counterpoint to Fraunces' warmth. The pairing is a deliberate contrast: one family carries voice, the other carries interface.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 7vw, 5.5rem)`, line-height 0.98): hero `<h1>` only. Letter-spacing tightens to `-0.02em` at this size.
- **Headline** (700, `clamp(2.75rem, 5.2vw, 4.5rem)` down to `text-4xl`/`text-5xl` responsive, line-height ~1.0–1.2): section `<h2>`s ("Craft cocktails, full bar", "Cooked to order, every time").
- **Title** (700, `text-3xl` / `1.875rem`, line-height 1.2): card and sub-section headings (signature cards, cocktail/wine menu headers).
- **Body** (400, `text-lg` / `1.125rem`, line-height 1.625): narrative prose paragraphs, set in Fraunces at `ivory/70` opacity, capped at a readable measure (`max-w-xl`/`max-w-lg`).
- **Label** (500, `0.85–0.9rem`, letter-spacing `0.02em`): nav links, button text, menu tabs — Hanken Grotesk.
- **Eyebrow** (600, `0.78rem`, uppercase, letter-spacing `0.32em`, `ivory/60` — never lower, that's the WCAG AA floor on charcoal): section kickers, used sparingly (not on every section — the site rejects the eyebrow-on-everything pattern).

### Named Rules
**The Set-By-Hand Rule.** Fraunces' oldstyle figures and ligature features (`onum`, `liga`, `dlig`) stay on for running prose; count-up stats override back to tabular lining figures (`.stat-num`) so numbers don't jitter while animating. Never let a stat wobble the layout mid-count.

## 4. Elevation

Flat by default; shadows exist purely as feedback for interaction and depth, never as ambient decoration on static surfaces. Cards sit flush against the charcoal stage at rest — depth appears only when a card is hovered, a button is pressed, or a photo panel needs separation from a busy background. The signature "double-bezel" system (`.bezel-outer` / `.bezel-inner`) is the one deliberately layered exception: a hairline outer frame with a soft inset highlight, used for promo cards and the About floating photo, meant to read as a considered picture frame rather than a generic drop shadow.

### Shadow Vocabulary
- **Button glow** (`0 10px 25px -12px rgba(200,162,75,.7)`): under `.btn-gold` at rest, intensifying on hover — the one shadow that's "on" by default, because it's core to the CTA's gold identity.
- **Card lift** (`0 24px 48px -12px rgba(0,0,0,.55)` → `0 36px 68px -12px rgba(0,0,0,.72)` on hover): `.hl2-card` and `.sig-card` — deepens and the card rises 5px on hover.
- **Bezel ambient** (`inset 0 1px 0 rgba(255,255,255,.04), 0 32px 64px -12px rgba(0,0,0,.65), 0 0 0 1px rgba(200,162,75,.05)`): the double-bezel outer shell — a permanent soft frame, not a hover-only effect.
- **Nav scroll shadow** (`0 8px 32px -8px rgba(0,0,0,.75)`): appears only once `#navbar` gains `.scrolled`, separating the glass nav from content beneath it.

### Named Rules
**The Feedback-Only Rule.** A shadow that doesn't respond to state (hover, scroll, focus) is either a permanent framing device (the bezel system) or shouldn't exist. Don't add ambient shadows to static cards "for depth" — depth here comes from the charcoal/charcoal-soft layering and photography, not decorative shadow.

## 5. Components

### Buttons
- **Shape:** fully pill (`border-radius: 9999px`), `0.8rem 1.6rem` padding.
- **Primary (`.btn-gold`):** solid gold (`#C8A24B`) background, near-black text (`#2A1D05`), button-glow shadow at rest, brightens to `#D9BC73` on hover with a diagonal glint sweep (`::after` gradient translate). Presses translate 1px down.
- **Ghost (`.btn-ghost`):** `rgba(ivory, .08)` glass fill, 1px `rgba(ivory, .35)` border, `blur(4px)` backdrop, nested icon circle (`.btn-ghost-icon`) that nudges toward the cursor on hover.
- **Outline (`.btn-outline`):** transparent, 1px ivory-alpha border; inverts to solid ivory background + ink text on hover.
- **Dark (`.btn-dark`):** near-transparent ivory-alpha fill; on hover flips to solid gold, matching the primary button's hover state — used where a gold CTA would compete with a nearby primary button.

### Tags / Chips
- **Signature tag:** outline pill, gold-light text and border at low alpha — marks chef's-signature dishes.
- **Popular tag:** filled gold-light pill, ink text — deliberately higher-contrast than the signature tag so "Most Popular" outranks "Signature" at a glance.
- **Spice tag:** outline pill in the reserved spice color (`#E0857A`) — the only place that color appears.

### Cards
- **Signature card (`.sig-card`):** `1.25rem` radius, `charcoal-soft` background, hairline ivory-alpha border, full-bleed photo that scales 1.04x on hover, with a bottom gradient overlay panel that slides up from `translateY(100%)` to reveal title/description.
- **Highlight card (`.hl2-card`):** `1.5rem` radius, always-visible 4-panel grid (no card-flip/switching), background photo cross-fades and slow-zooms in on scroll entry, gold hairline border materializes on hover, content (number, tag, title, description, CTA) staggers in with per-element delay.
- **Card stack (`.card-stack-item`):** absolute-positioned polaroid-style stack, `1.5rem` outer radius with a 4px warm-dark frame and concentric inner radius, subtle inset gradient sheen, navigated via small pill dots that grow to 22px when active.
- **Double-bezel (`.bezel-outer` / `.bezel-inner`):** the signature "picture frame" component — hairline border + soft top-edge inset highlight on the outer shell, concentric radius on the inner core. Used for promo cards and the About floating photo (in ivory-mat variant, `.bezel-photo`).

### Navigation
- **Style:** always-glass full-width bar (`rgba(20,16,14,.72)`, `blur(20px)`), deepening to `rgba(20,16,14,.94)` with a gold hairline bottom border and drop shadow once scrolled (`.scrolled`).
- **Links:** Hanken Grotesk label type, animated gold underline that scales in from the left on hover (`scaleX(0)` → `1`).
- **Mobile:** right-slide panel (`min(72vw, 320px)`) over a fading backdrop, large staggered Fraunces links (`clamp(1.5rem, 6vw, 2rem)`) that cascade in with per-item delay, hamburger morphs to an X.

### Menu Tabs
- **Style:** pill segmented control; inactive tabs are `ivory/62` text on transparent; a sliding lacquer-red pill indicator (positioned via `left`, not `transform`, for cross-renderer reliability) moves behind the active tab.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold to hairlines, hover states, single accent words, and CTAs — never a background fill (`#C8A24B` covers ≤10% of any view).
- **Do** run every photograph through the shared `--img-grade` filter so commissioned and incidental images read as one world.
- **Do** use the shared `--ease` (`cubic-bezier(0.6, 0.01, 0.05, 0.99)`) and `--ease-out` (`cubic-bezier(0.16, 0.84, 0.44, 1)`) curves for all transitions — no bounce, no default `ease`.
- **Do** provide a full `prefers-reduced-motion: reduce` fallback for every animation (already global via the `.reveal-up`/`.reveal-img`/`.reveal-clip` override block).
- **Do** cap prose measure (`max-w-xl`/`max-w-lg`) and keep body copy at `ivory/70`+ opacity — never drop below the WCAG AA floor already tuned into `.section-eyebrow` (`ivory/60`).

### Don't:
- **Don't** build a generic local-restaurant-template look: no stock-photo hero carousels, no bolted-on review widgets, no default Google Maps embeds (the site uses a custom-styled Leaflet/CARTO dark map), no menu PDFs.
- **Don't** use `border-left`/`border-right` as a decorative colored stripe — the one intentional left-accent (`.menu-item::before`) is a 2px hover-triggered indicator, not a static decoration, and it's the only place this pattern appears.
- **Don't** add an eyebrow kicker above every section — eyebrows (`.section-eyebrow`) are used selectively, not as default scaffolding on every block.
- **Don't** apply gradient text or glassmorphism decoratively; the site's one glass surface (the nav bar, mobile panel) is functional (legibility over scrolling content), not decorative.
- **Don't** let a static card carry an ambient shadow "for depth" — depth comes from charcoal/charcoal-soft layering and photography; shadows only appear as hover/scroll feedback or as the deliberate double-bezel frame.
- **Don't** introduce a second easing curve or a bounce/elastic transition — every motion in this system shares `--ease` or `--ease-out`.
