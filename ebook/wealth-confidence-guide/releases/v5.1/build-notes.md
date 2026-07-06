# The Wealth Confidence Guide — V5.1 build notes

**V5.1 is the final release candidate.** Built from the approved V5 source of
truth. V5 and V5.0 remain archived (`releases/v5/`, `releases/v5.0/`) and must
never be deleted.

## What changed from V5

1. **Superscript citation helper** (`styles/ebook-template.typ`): now
   `#let super(body) = { sym.wj; __wcg-super-orig(body) }`. A word joiner glues
   each numbered marker to the preceding word/punctuation so it can never wrap
   to its own line, while keeping Typst's native (already-smaller) superscript
   size and the normal trailing space. Fixes page 2 crowding and page 16 / 21
   floating markers.
2. **Page 20 native icons**: added `wcg-moment-icon(kind)` (moon / clock / bolt /
   star / loop) drawn from native primitives; the five "common spending moments"
   cards now each carry a consistent icon.
3. **Page 21**: added a final field — "The first area I want to review is…".
4. **Page 25 & page 23**: domain wordmark wrapped in `#link(...)` (clickable);
   page-23 footer tracking normalised.
5. **Page 3**: slightly more space before "How to use this guide" and between
   bullets (disclaimer language unchanged, page not split, no font shrink).
6. **Page 2**: version label updated to "Version 5.1".
7. **Day 4 copy**: replaced the technical "medium-to-large average effect across
   many studies" with plainer wording; citations 8 and 9 preserved.
8. **PDF finalization** (`scripts/finalize_pdf.py`): metadata, `/Lang = en-US`,
   left-to-right reading-direction hint, and a clean two-level bookmark outline.

Note: the seven native lesson illustrations were added in the prior V5→V5.1 work
(Phase 2) and are unchanged here.

## How to reproduce

```
cd ebook/wealth-confidence-guide
export PATH="$HOME/.local/bin:$HOME/.local/quarto/bin:$PATH"
python3 scripts/make_placeholders.py >/dev/null 2>&1
quarto render index.qmd --to typst
quarto render index.qmd --to epub
quarto render index.qmd --to html
source .qa-venv/bin/activate
python3 scripts/finalize_pdf.py \
  output/the-wealth-confidence-guide-v5.pdf \
  output/the-wealth-confidence-guide-v5.1.pdf
```

Toolchain: Quarto 1.9.x, Typst (`$HOME/.local/quarto/bin/tools/aarch64/typst`),
PyMuPDF in `.qa-venv`.

## Invariants held

25 pages · affiliate-free · 17 numbered superscript citations · 17 references ·
seven lessons · seven worksheets · no author-year citations · fonts embedded ·
no encryption · no font shrinking · no reduced writing space.

## Authoritative artifact

`the-wealth-confidence-guide-v5.1.pdf`. EPUB and HTML are provided for
convenience but do **not** reproduce the native Typst worksheet/card/reference
layouts.
