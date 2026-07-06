# The Wealth Confidence Guide — ebook project

Evidence-informed money-awareness workbook for **Micro Saving Daily**.
Framework: *Notice. Pause. Repeat.* Publicly age-inclusive; mature-reader-first
accessibility. **No affiliate content** in the core guide.

## Layout
```
research/     research plan, evidence matrix, source notes, selected sources
chapters/     manuscript (front matter, 7 days, back matter) as Quarto includes
assets/       image-manifest.md, branded placeholder images, worksheets, fonts
styles/       Typst template/partials, brand.scss, print.css
scripts/      OpenAlex research + build + QA scripts
qa/           audit + review reports (+ page-renders/ for visual QA)
output/       built PDF, EPUB, and html/
```

## Build (needs quarto on PATH; installs live in ~/.local here)
```bash
bash scripts/build_ebook.sh
# → output/the-wealth-confidence-guide.pdf   (34pp, Typst)
# → output/the-wealth-confidence-guide.epub
# → output/html/index.html
```

## QA
```bash
python3 scripts/verify_citations.py     # citations vs references.bib + matrix
python3 scripts/audit_claims.py         # prohibited/overstated claims, uncited numbers
python3 scripts/check_readability.py    # ASL + Flesch–Kincaid
vale chapters/*.qmd assets/worksheets/*.qmd
lychee references.bib chapters/*.qmd --accept 200,403,429 --user-agent "Mozilla/5.0 ..."
.qa-venv/bin/python scripts/render_pdf_pages.py   # PDF → PNG for visual inspection
```

## Non-negotiables
- Never invent sources/authors/DOIs/IDs/numbers. Every research claim is verified
  in `research/evidence-matrix.csv` before it enters the manuscript.
- Only hedged, evidence-appropriate language. No financial promises, no medical/
  neurological claims, no manifestation language.
- No affiliate product/link in the guide (RULE 8).
- Final images are produced separately; this repo ships branded placeholders +
  a complete `assets/image-manifest.md` (RULE 9).
- Do not commit/push or integrate into the website until explicitly approved.

## Research provenance
Discovery via OpenAlex (`OPENALEX_API_KEY` read from env only, never stored),
metadata verified via Crossref / official government domains. 18 sources: 16
peer-reviewed + 2 US government (CFPB, FTC).
