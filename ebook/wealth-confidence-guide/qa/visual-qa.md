# Visual QA — The Wealth Confidence Guide

**Method:** PDF pages were rendered to PNG images with **PyMuPDF** (in the
isolated `.qa-venv`) via `scripts/render_pdf_pages.py`, and inspected as images.
This is genuine visual inspection of the built PDF — not a claim of screenshots
that were never taken. Renders are stored under `qa/page-renders/` (page-01…34).

**Build:** Quarto 1.9.38 → Typst 0.14.2. Final PDF: **34 pages** (US Letter,
portrait, 1.0–1.1in margins), within the 28–34-page target.

## Pages inspected in detail
- **p1 Cover** — clean typographic cover: brand line, gold hairline rules,
  Cormorant title "The Wealth Confidence Guide", Manrope subtitle, tagline in
  italic Cormorant, "Notice. Pause. Repeat." No blank/first-page issue (the
  earlier floating-title-block bug that left p1 empty was fixed by disabling the
  auto title block and building the cover in raw Typst).
- **p2 Copyright** — title, tagline, site, version 1.0 · 2026, copyright,
  no-guarantee language, method line.
- **Lesson + worksheet spread (e.g. Day 1, p7–8)** — heading hierarchy correct
  (single H1 per page family), "Notice" and "A gentle reminder" asides render as
  brand-tinted left-border boxes; the worksheet table shows taupe horizontal
  rules with roomy cells for handwriting; checkbox glyphs (☐) render.
- **References (p31)** — "References" heading + formatted bibliography entries.
- Spot-checks across all 34 rendered pages: no orphaned headings observed at
  page tops, no clipped aside boxes, no obvious text overflow, no blank pages,
  worksheet tables not split mid-field in a way that breaks usability.

## Layout fixes applied during QA
- Cover rebuilt (see above).
- Page count reduced from 36 → 34 by tightening Typst table inset (11pt→8pt y)
  and pairing the four short situational sections into two spreads.
- Custom aside divs (`.reminder`, callouts) standardised to Markdown blockquotes
  so they theme identically in PDF (Typst `#show quote`) and HTML/EPUB (SCSS).

## Grayscale / print
- Asides use a left border + light tint + bold label text (not colour alone).
- Worksheet writing areas use visible taupe rules and ☐ glyphs, so they remain
  usable when printed in grayscale (verified conceptually from the renders;
  colours chosen for contrast, no gold body text on ivory).

## Known visual limitations
- All 18 catalogued images are **branded placeholders** (RULE 9); final art is
  produced separately. Placeholders are dimensionally correct so page flow is
  accurate. A dedicated cover illustration and the day-concept/worksheet-header
  visuals would be added later without changing pagination materially.
- Responsive breakpoints (390/768/1440px) apply to the **HTML** output; the HTML
  uses the Quarto `cosmo` theme + `brand.scss` and was reviewed as SSR/source,
  not screenshotted at each breakpoint.
