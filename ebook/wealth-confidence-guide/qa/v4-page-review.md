# V4 Page-by-Page QA Review — The Wealth Confidence Guide

**Build:** `output/the-wealth-confidence-guide-v4.pdf` · **Pages:** 25 (exactly on target) ·
**Phase:** 2C (concise premium edition) · **Reviewed:** 2026-07-06

## Method & honesty note

- **Whitespace / balance / density** figures come from `scripts/page_density.py`
  (PyMuPDF), which measures top/bottom whitespace and used height from meaningful
  content blocks, excluding full-bleed backgrounds and the footer number. These
  measurements are reliable.
- **Overflow** was checked programmatically against physical page bounds
  (0 clipped blocks) and **page numbering** was read from the rendered footers.
- **Fine-text visual interpretation** (reading small body copy from full-page PNG
  renders in `qa/v4-page-renders/`) is **not reliable** in this environment — the
  renders decode as raw bytes, not a viewable image. Layout structure, spacing,
  and balance are therefore judged from the density metrics + source inspection,
  not from OCR of the renders. This limitation is reported honestly.
- **Citation parity** verified with `scripts/verify_citations_v4.py` (17 markers ↔
  17 source entries, no orphans/gaps/duplicates). Both `^N^` (prose) and
  `#super[N]` (native Typst pages) marker syntaxes were counted.

Density legend: topWS / botWS = top / bottom whitespace (inches); used = content
height (inches); page is 11in tall with 1in y-margins (≈9in live area, ~9.5in max
used incl. flipped headers/footers).

## Per-page table

| P  | Purpose | chars | topWS | botWS | used | Overflow | Blank space | Spacing | Repeated evidence | Author-year in body | Numbered marker | Page-# treatment | Writing space | Visual slot | Text size | Status |
|----|---------|------:|------:|------:|-----:|----------|-------------|---------|-------------------|---------------------|-----------------|------------------|---------------|-------------|-----------|--------|
| 1  | Cover | 206 | 0.5 | 0.5 | 10.0 | none | intentional (cover) | n/a | none | none | n/a | unnumbered | n/a | full cover art | display | Approved |
| 2  | Welcome + manifesto + footer metadata | 754 | 1.99 | 0.96 | 8.05 | none | intentional lead-in | comfortable | none | none | ^1 (super) | unnumbered | n/a | pull-quote block | 12.5pt body | Approved |
| 3  | Before you begin (disclaimer + no-results guarantee + 3 principles) + How to use | 1160 | 1.19 | 1.31 | 8.5 | none | balanced | comfortable | none | none | none | unnumbered | n/a | principles motif | 11.5–12.5pt | Approved |
| 4  | Framework — Notice·Pause·Repeat + 3 motifs + evidence callout | 860 | 1.41 | 1.71 | 7.89 | none | balanced | comfortable | none | none | ^2 ^3 ^4 (super) | unnumbered | n/a | 3 motifs + callout | 12pt | Approved |
| 5  | Day 1 lesson | 1217 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^2 ^3 ^4 | 1 | lesson | 1.3in art slot | 12.5pt | Approved |
| 6  | Day 1 worksheet (ws-1) | 824 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 2 | ample | n/a | 12pt fields | Approved |
| 7  | Day 2 lesson | 1134 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^5 ^6 | 3 | lesson | 1.3in art slot | 12.5pt | Approved |
| 8  | Day 2 worksheet (ws-2, purchase pause) | 883 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 4 | ample checkboxes | n/a | 12pt | Approved |
| 9  | Day 3 lesson | 1307 | 0.99 | 0.54 | 9.46 | none | none | comfortable (densest lesson, still balanced) | none | none | ^3 ^5 ^7 | 5 | lesson | 1.3in art slot | 12.5pt | Approved |
| 10 | Day 3 worksheet (ws-3, trigger map) | 753 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 6 | ample | n/a | 12pt | Approved |
| 11 | Day 4 lesson | 1149 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^8 ^9 | 7 | lesson | 1.3in art slot | 12.5pt | Approved |
| 12 | Day 4 worksheet (ws-4, small shift) | 667 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 8 | ample | n/a | 12pt | Approved |
| 13 | Day 5 lesson | 1223 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^10 ^3 | 9 | lesson | 1.3in art slot | 12.5pt | Approved |
| 14 | Day 5 worksheet (ws-5, environment/friction) | 1048 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 10 | ample checklist | n/a | 12pt | Approved |
| 15 | Day 6 lesson | 1150 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^11 ^12 | 11 | lesson | 1.3in art slot | 12.5pt | Approved |
| 16 | Day 6 worksheet (ws-6, repetition tracker) | 706 | 1.0 | 0.54 | 9.46 | none | writing rows | comfortable | ^11 reused (distinct claim) | none | ^11 | 12 | ample rows | n/a | 12pt | Approved |
| 17 | Day 7 lesson | 1172 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^9 ^13 | 13 | lesson | 1.3in art slot | 12.5pt | Approved |
| 18 | Day 7 worksheet (ws-7, awareness plan) | 624 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | none | 14 | ample | n/a | 12pt | Approved |
| 19 | Seven-day reflection (intro merged into ws-8) | 897 | 0.99 | 0.54 | 9.46 | none | writing fields | comfortable | none | none | ^4 | 15 | ample | n/a | 12pt | Approved |
| 20 | Common spending moments (5 cards) | 805 | 0.99 | 0.54 | 9.46 | none | none | comfortable | none | none | ^5 ^6 ^7 | 16 | n/a | 5 native cards | 11.5–12.5pt | Approved |
| 21 | Everyday automatic spending audit (recurring + online + gift merged) | 881 | 0.99 | 0.54 | 9.46 | none | bordered mini-workbook | comfortable | none | none | ^14 ^15 ^16 ^3 ^2 (super) | 17 | fields + checkboxes | n/a | 11.5pt | Approved |
| 22 | A compassionate restart | 920 | 0.99 | 0.54 | 9.46 | none | balanced | comfortable | ^12 reused (distinct claim) | none | ^11 ^12 ^17 (super) | 18 | reminder card | restart-path note | 11.5–12.5pt | Approved |
| 23 | Your next 30 days + notes (intro merged in) | 595 | 0.99 | 0.54 | 9.46 | none | notes writing area | comfortable | none | none | ^11 ^9 | 19 | notes lines | n/a | 12pt | Approved |
| 24 | Sources & references (17 entries, 2-col) | 2007 | 1.18 | 0.54 | 9.27 | none | dense-by-design list | comfortable, hanging indent | n/a (list) | n/a (list) | ref-entry(1..17) | unnumbered | n/a | n/a | 11pt refs | Approved |
| 25 | Closing | 501 | 0.5 | 0.5 | 10.0 | none | intentional (closing) | generous | none | none | none | unnumbered | n/a | brand motif | display | Approved |

## Summary

- **Every page: Approved.** No page flagged Too dense, Too sparse, or Needs reflow.
- **No overflow** anywhere (0 clipped text blocks vs. physical bounds).
- **No accidental blank space.** The only large whitespace is on the cover (P1),
  closing (P25), and the intentional lead-in on the welcome (P2) and framework
  (P4) — all deliberate composition. Body pages 5–24 hold a consistent ~9.46in
  content rhythm.
- **Density flags** (`page_density.py`): only P9 (Day 3, 1307 chars) and P24
  (Sources, 2007 chars). Both are expected — Day 3 is the densest lesson but is
  vertically balanced (0.54in bottom whitespace, no overflow); the Sources page is
  a deliberately compact 2-column reference list at 11pt.
- **No repeated evidence blocks.** Sources ^11^ and ^12^ each appear on two pages,
  but for distinct claims (habit-formation timing vs. missed-day resilience for
  ^11^; self-kindness motivation vs. lower stress for ^12^) — legitimate reuse of
  one source in two contexts, not duplicated evidence.
- **No author-year strings in body copy.** All in-text citations are numbered
  superscripts (`^N^` in prose, `#super[N]` on native pages); author-year detail
  lives only on the Sources page. Readers never see "et al." in lesson copy.
- **7 reserved final-art slots** (`#wcg-visual`, 1.3in) — one per day lesson,
  within the 1.2–1.6in target. No final images generated.
- **Text sizes preserved:** body 12.5pt, framework/audit ~11.5–12pt, references
  11pt (≥ the 10.5–11pt minimum). Nothing shrunk to fit.
