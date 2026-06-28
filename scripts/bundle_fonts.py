import re, os, hashlib, urllib.request

SRC = "fonts-src.css"
OUT_DIR = r"H:\ClaudeCode\canton-dragon\assets\fonts"
os.makedirs(OUT_DIR, exist_ok=True)

css = open(SRC, encoding="utf-8").read()

# Split into (comment-label, block) pairs
blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S)

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"}

# Keep only the 'latin' subset to minimize requests (covers English + common accents/punct).
keep = [b for label, b in blocks if label == "latin"]

url_to_local = {}
out_blocks = []
for b in keep:
    m = re.search(r"url\((https://[^)]+\.woff2)\)", b)
    if not m:
        continue
    url = m.group(1)
    if url not in url_to_local:
        fam = "fraunces" if "fraunces" in url else ("hanken" if "hanken" in url or "hankengrotesk" in url else "font")
        h = hashlib.md5(url.encode()).hexdigest()[:8]
        fname = f"{fam}-{h}.woff2"
        fpath = os.path.join(OUT_DIR, fname)
        if not os.path.exists(fpath):
            req = urllib.request.Request(url, headers=UA)
            data = urllib.request.urlopen(req).read()
            open(fpath, "wb").write(data)
        url_to_local[url] = fname
    local = url_to_local[url]
    nb = b.replace(m.group(0), f"url(../fonts/{local}) format('woff2')") if "format(" not in b else re.sub(r"url\(https://[^)]+\.woff2\)", f"url(../fonts/{local})", b)
    # ensure the url() points local (block already has format('woff2'))
    nb = re.sub(r"url\(https://[^)]+\.woff2\)", f"url(../fonts/{local})", b)
    out_blocks.append(nb.strip())

header = "/* Self-hosted Google Fonts (latin subset) — Fraunces + Hanken Grotesk.\n   Variable woff2 files; optical sizing & weight axes preserved.\n   Regenerate via scripts/bundle_fonts.py */\n\n"
open(os.path.join(OUT_DIR, "fonts.css"), "w", encoding="utf-8").write(header + "\n\n".join(out_blocks) + "\n")

# Report
total = sum(os.path.getsize(os.path.join(OUT_DIR, f)) for f in url_to_local.values())
print(f"Unique woff2 files: {len(url_to_local)}")
for u, f in url_to_local.items():
    print(f"  {f}  ({os.path.getsize(os.path.join(OUT_DIR, f))//1024} KB)")
print(f"Total font weight: {total//1024} KB")
print(f"@font-face blocks written: {len(out_blocks)}")
