# Accessibility Review — The Wealth Confidence Guide

Focus: mature-reader-first comfort **without** age-targeting language, plus
general accessibility across PDF / HTML / EPUB.

## Typography & readability
- **Body:** Manrope, 12 pt (PDF), ~18px root (HTML), generous line height
  (Typst `par(leading: 0.78em, spacing: 1.15em)`; HTML `line-height: 1.7`).
- **Headings:** Cormorant Garamond, deep green — clear level hierarchy (H1 day
  titles, H2 section labels, H3 worksheet titles).
- **Worksheet instructions / labels:** Manrope, not reduced below body size;
  checkbox labels are full-size text with ☐ glyphs.
- Average sentence length ~11.5 words; Grade 7–9 target met (see
  readability-report.md). No tiny serif body copy; no dense two-column body.

## Contrast & colour
- Deep green (`#0F3D2E`) / evergreen (`#0B241F`) text on warm ivory
  (`#F7F3E9`): strong contrast.
- **Gold is never used for body text** — accents only (hairlines, small labels).
- Information is **never conveyed by colour alone**: asides carry a bold text
  label ("Notice", "A gentle reminder", "Worked example"); worksheet fields use
  visible rules + ☐ glyphs; grayscale-safe.

## Structure & semantics
- **One `<h1>` per chapter family**; logical heading order throughout (verified
  in the HTML output and PDF outline).
- Real anchor links for site/section references; citations are proper links to
  DOIs / official pages.
- Reduced-motion: the ebook is static (no animation); the accompanying website
  motion utilities are not used here.
- Reading order is linear and matches visual order (single-column body).

## Images
- All images have descriptive `alt` text defined in `assets/image-manifest.md`
  (e.g. cover, framework motifs, worksheet header bands, brand mark). Current
  files are placeholders; alt text is authored and travels with them.
- EPUB cover image is set (`epub-cover-image`).

## Format-specific
- **PDF:** `#set document(title, author)` set for PDF metadata/accessibility;
  US-Letter, printable at home; page numbers present.
- **HTML:** semantic Quarto output, left TOC ("In this guide"), embedded
  resources for offline use; brand SCSS keeps contrast high.
- **EPUB:** reflowable, TOC/nav generated from headings, print CSS applied.

## Outstanding items (for a future pass)
- Final images should preserve/refine the documented alt text.
- Formal WCAG contrast-ratio measurement and a screen-reader pass on the EPUB
  are recommended before public distribution (not performed in this phase).
- HTML responsive breakpoints (390/768/1440px) reviewed at the source/theme
  level, not via captured screenshots.
