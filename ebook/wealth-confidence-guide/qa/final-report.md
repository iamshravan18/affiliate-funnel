# Final QA Report — The Wealth Confidence Guide

**Date:** 2026-07-05 · **Status:** Complete (pre-approval). No Git commit/push;
no website integration performed.

## Quality gates
| Gate | Status |
|------|--------|
| Research plan exists | ✅ `research/research-plan.md` |
| Evidence matrix populated | ✅ 16 claim rows (C01–C17), all `Verified=yes` |
| Every selected source verified | ✅ 18/18 (Crossref by DOI / official domain) |
| Every evidence-based claim supported | ✅ (matrix + inline `[@key]`) |
| Every numerical claim cited | ✅ (only stat = Lally 66-day/18–254 range → `lally2010`) |
| No invented citations/IDs | ✅ (OpenAlex IDs fetched by DOI; 4 initial guesses corrected) |
| References render correctly | ✅ (PDF p31, HTML, EPUB) |
| Worksheets usable | ✅ 10 worksheets, roomy fields, grayscale-safe |
| Works without affiliate content | ✅ zero affiliate terms found |
| Body text readable | ✅ ASL 11.5; FK ~5.5 (≤ Grade 7–9 target) |
| PDF builds | ✅ 34 pages |
| EPUB builds | ✅ |
| HTML builds | ✅ |
| Links checked | ✅ Lychee: 19/19 reachable (403s = bot-blocking, not broken) |
| Disclaimers included | ✅ p2 copyright + p3 educational disclaimer + footer |
| Image manifest complete | ✅ 18 assets, full specs + briefs |
| Missing assets documented | ✅ all images are placeholders (RULE 9) |
| QA reports complete | ✅ this folder |
| Visual inspection performed / disclosed | ✅ PyMuPDF renders inspected (see visual-qa.md) |

## Tooling
Installed to `~/.local`: Quarto 1.9.38 (bundles Pandoc 3.8.3, **Typst 0.14.2**,
Dart Sass, Deno, Chrome Headless, TinyTeX), Vale 3.15.1, Lychee 0.24.2. Python
3.14.6 + Node 24.14.0 pre-existing. Brand fonts (Manrope, Cormorant Garamond,
OFL) fetched to `assets/fonts` and embedded via `font-paths`.

## Research
- **OpenAlex searches:** 22 thematic queries (11 themes × 2) + 16 targeted
  title lookups → 129 candidates reviewed. Discovery script:
  `scripts/openalex_research.py` (reads `OPENALEX_API_KEY` from env only; key
  never printed/stored).
- **Selected:** 18 sources — **16 peer-reviewed**, **2 US government**
  (CFPB 2015, FTC auto-renewals guide). Metadata verified via **Crossref**.
- Files: `research/evidence-matrix.csv`, `research/source-notes.md`,
  `references.bib`, `research/selected-sources.json` (sanitized; no key).

## Audits
- **Citations** (`verify_citations.py`): 18 bib / 18 cited / 18 in matrix; no
  missing, unused, or duplicate. Clean.
- **Claims** (`audit_claims.py` + manual): no prohibited financial / medical /
  neurological / manifestation claims; no overstated evidence; hedged language
  throughout; all 32 automated flags reviewed as false positives (verb "return",
  negated "guaranteed" in the disclaimer, cover-styling numbers). See
  `claim-audit.md`.
- **Readability** (`check_readability.py`): ASL 11.5, FK ~5.5. See
  `readability-report.md`.
- **Vale:** 0 errors / 0 warnings across 25 files (brand vocab configured).
- **Lychee:** all 19 unique links reachable (publisher 403s are bot-blocking,
  confirmed by re-run with browser UA → 0 errors; DOIs independently verified).
- **Visual:** 34 pages rendered to PNG and inspected (`qa/page-renders/`).
- **Accessibility:** see `accessibility-review.md`.

## Outputs
- PDF: `output/the-wealth-confidence-guide.pdf` (34pp)
- EPUB: `output/the-wealth-confidence-guide.epub`
- HTML: `output/html/index.html`
Rebuild with `scripts/build_ebook.sh`.

## Known limitations / recommendations before approval
1. **All 18 images are branded placeholders** (RULE 9). Commission final art
   (cover, day-concept motifs, worksheet header bands, brand visual) using the
   briefs in `assets/image-manifest.md`; preserve the documented alt text.
2. **Readability skews easy** (~Grade 5–6 by heuristic) — intentional and within
   the "≤ Grade 7–9" spirit, but confirm this matches editorial preference.
3. **Legal specifics** in the disclaimer/copyright (entity name, jurisdiction,
   contact) should be confirmed against the real operating business.
4. **`mani2013`** is contested (Wicherts & Zand Scholten, 2013); it is used
   cautiously and paired with `shah2012`. Confirm you are comfortable keeping it.
5. **Formal WCAG contrast measurement** and an **EPUB screen-reader pass** are
   recommended before public release (not performed here).
6. **No website integration**: the PDF has not been copied to the site's public
   download directory and no download button was enabled (per instructions).
7. Consider `epubcheck` validation before distribution (not installed here).
