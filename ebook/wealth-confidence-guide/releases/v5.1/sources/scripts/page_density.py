#!/usr/bin/env python3
"""Per-page density/whitespace analysis for V3 QA (complements visual review).

Whitespace is measured from meaningful content (text blocks + non-fullbleed
drawings/panels/images), excluding full-bleed background rectangles and the
footer page number.
"""
import sys

import fitz

pdf_path = sys.argv[1] if len(sys.argv) > 1 else "output/the-wealth-confidence-guide-v3.pdf"
doc = fitz.open(pdf_path)
print(f"pages={doc.page_count}")
for i, page in enumerate(doc, start=1):
    rect = page.rect
    H, W = rect.height, rect.width
    page_area = H * W
    text = page.get_text("text")
    chars = len(text.replace("\n", " ").strip())

    ys = []
    # text blocks (ignore footer number: tiny block near very bottom)
    for b in page.get_text("blocks"):
        x0, y0, x1, y1, txt = b[0], b[1], b[2], b[3], b[4]
        if not txt.strip():
            continue
        # skip footer page number (short, centered, in bottom 0.6in)
        if y0 > H - 50 and len(txt.strip()) <= 3:
            continue
        ys.append((y0, y1))
    # meaningful drawings (panels, cards, visual slots) — exclude full-bleed
    for d in page.get_drawings():
        r = d.get("rect")
        if not r:
            continue
        area = (r.x1 - r.x0) * (r.y1 - r.y0)
        if area > 0.9 * page_area:      # full-bleed background
            continue
        # ignore hairline footer rule near bottom
        if r.y0 > H - 40:
            continue
        ys.append((r.y0, r.y1))

    if ys:
        top = min(y0 for y0, y1 in ys)
        bot = max(y1 for y0, y1 in ys)
        top_ws = round(top / 72, 2)
        bot_ws = round((H - bot) / 72, 2)
        used = round((bot - top) / 72, 2)
    else:
        top_ws = bot_ws = round(H / 72 / 2, 2)
        used = 0.0

    first = next((ln.strip()[:44] for ln in text.splitlines() if ln.strip()), "")
    flag = ""
    if bot_ws >= 2.6:
        flag = "  <== SPARSE bottom"
    if chars >= 1300:
        flag += "  <== DENSE"
    print(f"p{i:02d} chars={chars:5d} topWS={top_ws:4}in botWS={bot_ws:4}in used={used:5}in | {first}{flag}")
