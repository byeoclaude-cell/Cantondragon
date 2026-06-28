#!/usr/bin/env python3
"""
Generate the charcoal+gold duotone hero image.

Maps a source photo's luminance through a charcoal -> bronze -> gold ramp so the
shadows sit on the page background (#14100E) and the highlights glow gold. Use a
high-contrast, well-lit source (the family-style food spread works well).

Usage:
    python scripts/make-hero-duotone.py "path/to/source.webp"
    # writes assets/others/hero-duotone.webp  (~1920px wide)

Requires: Pillow  (pip install pillow)
"""
import os
import sys
from PIL import Image, ImageOps, ImageEnhance

DEFAULT_SRC = os.path.join("assets", "others", "table of food.webp")
OUT = os.path.join("assets", "others", "hero-duotone.webp")
TARGET_W = 1920

# Charcoal (matches page bg) -> gold. Shadows stay neutral-charcoal so the image melts
# into the page; gold is reserved for the upper-mids/highlights (so it reads premium,
# not sepia). Tune these stops to re-grade.
STOPS = [
    (0.00, (16, 13, 11)),    # page charcoal (keep darkest edge so it melts into bg)
    (0.26, (54, 46, 37)),    # lifted charcoal grey
    (0.50, (138, 103, 60)),  # brighter transition, reached earlier
    (0.74, (210, 168, 100)), # gold, reached earlier
    (1.00, (248, 230, 178)), # gold highlight
]


def build_luts():
    r, g, b = [], [], []
    for v in range(256):
        t = v / 255
        for i in range(len(STOPS) - 1):
            t0, c0 = STOPS[i]
            t1, c1 = STOPS[i + 1]
            if t0 <= t <= t1:
                f = (t - t0) / (t1 - t0)
                r.append(round(c0[0] + (c1[0] - c0[0]) * f))
                g.append(round(c0[1] + (c1[1] - c0[1]) * f))
                b.append(round(c0[2] + (c1[2] - c0[2]) * f))
                break
        else:
            r.append(STOPS[-1][1][0])
            g.append(STOPS[-1][1][1])
            b.append(STOPS[-1][1][2])
    return r, g, b


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    if not os.path.exists(src):
        sys.exit("source image not found: %s" % src)
    rLUT, gLUT, bLUT = build_luts()
    img = Image.open(src).convert("RGB")
    w, h = img.size
    img = img.resize((TARGET_W, round(h * TARGET_W / w)), Image.LANCZOS)
    L = ImageOps.autocontrast(img.convert("L"), cutoff=2)
    L = ImageEnhance.Contrast(L).enhance(1.18)
    duo = Image.merge("RGB", (L.point(rLUT), L.point(gLUT), L.point(bLUT)))
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    duo.save(OUT, "WEBP", quality=82, method=6)
    print("wrote %s  %dx%d  %.1fKB" % (OUT, duo.size[0], duo.size[1], os.path.getsize(OUT) / 1024))


if __name__ == "__main__":
    main()
