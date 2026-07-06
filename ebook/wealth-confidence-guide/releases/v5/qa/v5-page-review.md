# V5 Page-by-Page QA Review — The Wealth Confidence Guide

**Build:** `output/the-wealth-confidence-guide-v5.pdf` · **Pages:** 25 (on target) ·
**Phase:** 3 — V5 Final Production Polish · **Reviewed:** 2026-07-06

## Method & honesty note

- **Whitespace / balance / density** figures come from `scripts/page_density.py`
  (PyMuPDF), measuring top/bottom whitespace and used content height, excluding
  full-bleed backgrounds and the footer number. These measurements are reliable.
- **Overflow** was checked programmatically against physical page bounds
  (0 clipped blocks); **fonts** confirmed embedded via PyMuPDF (all subsetted
  Manrope + Cormorant Garamond); **page numbering** read from rendered footers.
- **Fine-text visual interpretation** (reading small body copy from the full-page
  PNG renders in `qa/v5-page-renders/`) is **not fully reliable** in this
  environment. Structure, spacing, and balance are therefore judged from density
  metrics + source inspection, and confirmed structurally from the renders where
  legible. This limitation is reported honestly.
- **Citation parity** verified with `scripts/verify_citations_v4.py` (17 markers ↔
  17 source entries, no orphans/gaps/duplicates), counting both `^N^` (prose) and
  `#super[N]` (native Typst) marker syntaxes.

Density legend: topWS / botWS = top / bottom whitespace (inches); used = content
height (inches). Page is 11in tall with 1in y-margins (≈9in live area,
~9.5in max used incl. flipped headers/footers).

## Per-page table

| P  | Purpose | chars | topWS | botWS | used | Overflow | Blank space | Spacing | Visual slot | Text size | V5 change | Status |
|----|---------|------:|------:|------:|-----:|----------|-------------|---------|-------------|-----------|-----------|--------|
| 1  | Cover | 206 | 0.5 | 0.5 | 10.0 | none | intentional (cover) | n/a | full cover art | display | footer typography unified (`wcg-domain`) | Approved |
| 2  | Welcome + manifesto + metadata footer | 752 | 1.99 | 0.96 | 8.05 | none | intentional lead-in | comfortable | pull-quote block | 12.5pt | superscript spacing fix | Approved |
| 3  | Before you begin (disclaimer + guarantee + 3 principles) + How to use | 1160 | 1.19 | 1.31 | 8.5 | none | balanced | comfortable | principles motif | 11.5–12.5pt | superscript spacing fix | Approved |
| 4  | Framework — Notice·Pause·Repeat + evidence callout | 860 | 1.41 | 1.71 | 7.89 | none | balanced | comfortable | 3 motifs + callout | 12pt | superscript spacing fix | Approved |
| 5  | Day 1 lesson | 1217 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 6  | Day 1 worksheet (ws-1) | 824 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes | Approved |
| 7  | Day 2 lesson | 1134 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 8  | Day 2 worksheet (ws-2, purchase pause) | 883 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes, wider Yes/Not sure/No gutter | Approved |
| 9  | Day 3 lesson | 1307 | 0.99 | 0.54 | 9.46 | none | none | comfortable (densest lesson, still balanced) | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 10 | Day 3 worksheet (ws-3, trigger map) | 753 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes | Approved |
| 11 | Day 4 lesson | 1149 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 12 | Day 4 worksheet (ws-4, small shift) | 667 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes | Approved |
| 13 | Day 5 lesson | 1223 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 14 | Day 5 worksheet (ws-5, environment/friction) | 1048 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes, group separation | Approved |
| 15 | Day 6 lesson | 1150 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 16 | Day 6 worksheet (ws-6, repetition tracker) | 638 | 1.0 | 0.54 | 9.46 | none | writing rows | comfortable | n/a | 12pt | **tracker rebuilt**: aligned DAY/YES/NOT YET/ONE WORD headers, 17pt boxes, roomier rows | Approved |
| 17 | Day 7 lesson | 1172 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 1.3in art slot | 12.5pt | superscript spacing fix | Approved |
| 18 | Day 7 worksheet (ws-7, awareness plan) | 624 | 1.0 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | 17pt checkboxes | Approved |
| 19 | Seven-day reflection (ws-8, intro merged) | 792 | 0.99 | 0.54 | 9.46 | none | writing fields | comfortable | n/a | 12pt | **duplicate paragraph removed**, `how:` tightened | Approved |
| 20 | Common spending moments (5 cards) | 868 | 0.99 | 0.54 | 9.46 | none | none | comfortable | 5 native cards | 11.5–12.5pt | **"THE METHOD IS ALWAYS THE SAME" panel** replaces plain closing line | Approved |
| 21 | Everyday automatic spending audit | 881 | 0.99 | 0.54 | 9.46 | none | bordered mini-workbook | comfortable | n/a | 11.5pt | wider checkbox-row gutters (30→34pt) | Approved |
| 22 | A compassionate restart | 920 | 0.99 | 0.54 | 9.46 | none | balanced | comfortable | restart-path note | 11.5–12.5pt | more writing lines; footer typography unified | Approved |
| 23 | Your next 30 days + notes | 595 | 0.99 | 0.54 | 9.46 | none | notes writing area | comfortable | n/a | 12pt | writing space tuned (dialed to hold 25pp) | Approved |
| 24 | Sources & references (17 entries, 2-col) | 2007 | 1.18 | 0.54 | 9.27 | none | dense-by-design list | comfortable, hanging indent | n/a | 11pt | leading 0.68→0.72em, entry/gutter spacing +1.5/+1pt | Approved |
| 25 | Closing | 501 | 0.5 | 0.5 | 10.0 | none | intentional (closing) | generous | brand motif | display | footer typography unified | Approved |

## Summary

- **Every page: Approved.** No page flagged Too dense, Too sparse, or Needs reflow.
- **No overflow** anywhere (0 clipped text blocks vs. physical bounds); **all fonts
  embedded** (subsetted Manrope + Cormorant Garamond).
- **Density flags** (`page_density.py`): only P9 (Day 3, 1307 chars) and P24
  (Sources, 2007 chars) — both expected and vertically balanced (0.54in bottom
  whitespace, no overflow). Identical to the approved V4 profile.
- **Char-count deltas vs. V4** reflect the intended V5 edits: P16 706→638 (tracker
  rebuilt, less redundant markup), P19 897→792 (duplicate reflection text removed),
  P20 805→868 ("method is always the same" panel added). All other pages unchanged
  in structure.
- **Superscript spacing fix** applied globally via a shadowed `super` helper that
  glues a `#h(0.6pt)` micro-space before every marker (non-breaking) so numbers no
  longer sit flush against the preceding word.
- **7 reserved final-art slots** (`#wcg-visual`, 1.3in) — one per day lesson,
  within the 1.2–1.6in target. **No final illustrations were generated** (see final
  report item 15: IMG-01..18 remain documented branded placeholders — no approved
  final Micro Saving Daily art exists to drop in).
- **Text sizes preserved:** body 12.5pt, framework/audit ~11.5–12pt, references
  11pt (≥ the 10.5–11pt minimum). Nothing shrunk to force 25 pages.
- **No Billionaire Brain Wave content** anywhere in the PDF (no affiliate images,
  links, CTAs, disclosures, or vendor claims). The guide remains a clean,
  independent educational document.
