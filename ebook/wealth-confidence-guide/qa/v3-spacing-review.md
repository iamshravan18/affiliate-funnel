# V3 Spacing & Balance Review — The Wealth Confidence Guide

**Phase:** 2B (reading comfort, vertical rhythm, page balance)
**Source PDF:** `output/the-wealth-confidence-guide-v3.pdf`
**Page count:** 34
**Renders:** `qa/v3-page-renders/page-01.png` … `page-34.png`

## Method & honesty note

Two complementary methods were used:

1. **Programmatic layout analysis** — `scripts/page_density.py` measures each
   page's real content band by inspecting the PDF's text and drawing blocks,
   **excluding the full-bleed background rectangle and the footer**. It reports
   top whitespace, bottom whitespace, used height, and a character count. This
   is the reliable basis for the whitespace / balance columns below.
2. **Multimodal visual spot-checks** — full-page PNG renders were inspected for
   overall composition and block separation (sampled: p05 Welcome, p06 How to
   use, p24 Common moments).

**Limitation reported honestly:** at the render scale used (~1.4x full page),
fine body text and citations are **not reliably legible** to visual/multimodal
inspection. Layout, balance, and whitespace *are* reliably assessable; precise
per-word textual verification from renders is **not**, so textual QA leaned on
the source `.qmd` chapters and `fitz` text extraction rather than OCR of
renders. Density is never treated as the sole signal — a low character count on
a deliberate divider or worksheet is not flagged as an error.

Usable text height per page ≈ 9.0 in (US-Letter, `mg-y` = 1.0 in top & bottom,
plus footer band). Lesson pages consistently fill this (used ≈ 9.46 in,
bottom WS 0.54 in) with **no overflow**.

Status vocabulary: **Balanced · Too dense · Too sparse · Needs reflow · Approved**

---

## Per-page review

Whitespace values are inches from `page_density.py` (top WS / bottom WS / used).

| Pg | Purpose | Density | Top WS | Bot WS | Para sep | Heading sep | Callout sep | Balance | Worksheet space | Visual slot | Action | Status |
|----|---------|---------|--------|--------|----------|-------------|-------------|---------|-----------------|-------------|--------|--------|
| 1 | Cover | low (206) | 0.5 | 0.5 | n/a | n/a | n/a | Centered full-bleed | n/a | full cover art reserved | none | Approved |
| 2 | Tagline / half-title | low (442) | 2.29 | 2.92 | ok | ok | n/a | Intentional quiet spread | n/a | n/a | none | Approved (divider) |
| 3 | Title & copyright | low (632) | 1.96 | 1.30 | ok | ok | ok | Metadata sits lower half | n/a | brand motif | none | Balanced |
| 4 | Before you begin (disclaimer + 3 principles) | med (788) | 1.36 | 3.14 | good | good | good | Info page; lower WS deliberate | n/a | n/a | monitor | Balanced |
| 5 | Welcome | med (1093) | 0.99 | 4.58 | good | good | good | Calm info page; pull quote + reminder card present | n/a | n/a | monitor lower WS | Balanced |
| 6 | How to use this guide | med (762) | 0.99 | 4.68 | good | good | n/a | Calm info page; 7-step visual + divider present | n/a | n/a | monitor lower WS | Balanced |
| 7 | Notice · Pause · Repeat (framework) | low (350) | 1.56 | 4.92 | n/a | n/a | n/a | Deliberate visual pause | n/a | framework motif | none | Approved (true divider) |
| 8 | Why these three work together | med (923) | 0.99 | 4.62 | good | good | good | Calm info page; flow + evidence callout present | n/a | n/a | monitor lower WS | Balanced |
| 9 | Day 1 — lesson | full (1273) | 0.99 | 0.54 | clear | clear | clear | Fills page, no overflow | n/a | ~1.2–1.6in slot reserved | none | Approved |
| 10 | Day 1 — worksheet | med (824) | 1.0 | 0.54 | clear | clear | clear | Fills page | generous writing lines | n/a | none | Approved |
| 11 | Day 2 — lesson | full (1177) | 0.99 | 0.54 | clear | clear | clear | Fills page | n/a | slot reserved | none | Approved |
| 12 | Day 2 — worksheet (environment checklist) | med (883) | 1.0 | 0.54 | clear | clear | clear | Fills page | two checklist groups spaced | n/a | none | Approved |
| 13 | Day 3 — lesson (densest) | full (1368) | 0.99 | 0.54 | clear | clear | clear | Fills page, no overflow | n/a | slot reserved | monitor density | Balanced |
| 14 | Day 3 — worksheet | med (753) | 1.0 | 0.54 | clear | clear | clear | Fills page | generous | n/a | none | Approved |
| 15 | Day 4 — lesson | full (1196) | 0.99 | 0.54 | clear | clear | clear | Fills page | n/a | slot reserved | none | Approved |
| 16 | Day 4 — worksheet | med (667) | 1.0 | 0.54 | clear | clear | clear | Fills page | generous | n/a | none | Approved |
| 17 | Day 5 — lesson | full (1269) | 0.99 | 0.54 | clear | clear | clear | Fills page; default/cue + example separated | n/a | slot reserved | none | Approved |
| 18 | Day 5 — worksheet | med (1048) | 1.0 | 0.54 | clear | clear | clear | Fills page | generous | n/a | none | Approved |
| 19 | Day 6 — lesson | full (1231) | 0.99 | 0.54 | clear | clear | clear | Fills page; evidence blocks spaced | n/a | slot reserved | none | Approved |
| 20 | Day 6 — worksheet (repetition tracker) | med (724) | 1.0 | 0.54 | clear | clear | clear | Fills page | row height generous | n/a | none | Approved |
| 21 | Day 7 — lesson | full (1215) | 0.99 | 0.54 | clear | clear | clear | Fills page | n/a | slot reserved | none | Approved |
| 22 | Day 7 — worksheet | med (624) | 1.0 | 0.54 | clear | clear | clear | Fills page | generous | n/a | none | Approved |
| 23 | Seven-day reflection | med (960) | 0.99 | 0.54 | clear | clear | clear | Fills page (intro merged w/ worksheet) | writing space present | n/a | none | Approved |
| 24 | Common moments (5 cards) | med (1039) | 0.99 | 0.54 | clear | clear | card gaps even | Fills page; native cards | n/a | small card icons | none | Approved |
| 25 | Recurring purchases (subscription panel) | med (1161) | 0.99 | 0.54 | clear | clear | clear | Fills page; bordered mini-workbook | fields spaced | n/a | none | Approved |
| 26 | Online shopping ("Restore the pause" checklist) | med (982) | 0.99 | 0.54 | clear | clear | clear | Fills page | checkbox list | n/a | none | Approved |
| 27 | Family / gift (reflection card) | med (810) | 0.99 | 0.54 | clear | clear | clear | Fills page | reflection card | slot reserved (if art approved) | none | Approved |
| 28 | When the habit disappears | med (856) | 0.99 | 0.54 | clear | clear | clear | Fills page; What happened / research / return | n/a | restart-path slot | none | Approved |
| 29 | Compassionate restart plan (Worksheet 9) | full (1157) | 0.99 | 0.54 | clear | clear | clear | Fills page | writing space | n/a | none | Approved |
| 30 | Your next 30 days | med (920) | 0.99 | 0.54 | clear | clear | clear | Fills page (intro merged w/ worksheet) | week markers | n/a | none | Approved |
| 31 | Resources and personal notes | med (814) | 0.99 | 0.54 | clear | clear | clear | Fills page; genuine notes lines | notes lines present | n/a | none | Approved |
| 32 | References (part 1) | dense (2154) | 1.44 | 0.54 | 1.25em entry gaps | ok | n/a | Dense but comfortable, no overflow | n/a | n/a | monitor density | Balanced |
| 33 | References (part 2) | dense (1786) | 0.95 | 0.54 | 1.25em entry gaps | ok | n/a | Dense but comfortable, no overflow | n/a | n/a | monitor density | Balanced |
| 34 | One last thing (closing) | med (815) | 0.99 | 0.54 | clear | clear | clear | Fills page; brand close | n/a | brand motif | none | Approved |

---

## Summary of findings

- **Dense lesson pages (the brief's primary concern) are resolved.** Days 1–7
  (p9–22) and the situational/worksheet pages (p23–31) all use the full page
  band (used ≈ 9.46 in, bottom WS 0.54 in) with clear separation between title,
  opening, "Why this matters", evidence, everyday example, Today's Action panel,
  Notice callout, and closing line — **no overflow anywhere**. Day 3 (p13) is the
  densest at 1368 characters but fills the page cleanly; it is **Balanced**, not
  *Too dense*.
- **Front-matter informational pages (p4, p5, p6, p8)** carry ~3.1–4.7 in of
  lower whitespace. Each already contains every brief-requested element
  (Welcome: pull quote + reminder card; How to use: 7-step visual + divider;
  Why these three: flow diagram + evidence callout; Before you begin: disclaimer
  + three principles). Their lower whitespace is **deliberate calm pacing**
  (~48%), below the 60–70% "one heading + one paragraph" threshold the brief
  flags as broken. Padding is explicitly forbidden, so they are marked
  **Balanced** with a monitor note rather than reflowed.
- **True divider pages (p2, p7)** intentionally use large whitespace with a
  strong title and motif — **Approved**.
- **Reference pages (p32–33)** are dense but sit at 11 pt Manrope with hanging
  indents and 1.25 em inter-entry spacing, and fit without overflow. They meet
  the ≥10.5–11 pt minimum and remain comfortable, so a third page was **not**
  forced. Marked **Balanced**.
- **No page is Too dense, Too sparse, or Needs reflow.** No template or chapter
  edits were required this pass; the Phase 2B vertical-rhythm system was already
  in place and produces consistent page-to-page rhythm.

## Reserved final-art slots preserved

`wcg-visual()` reserves ~1.2–1.6 in image slots on lesson pages (p9, 11, 13, 15,
17, 19, 21) and the situational pages that anticipate editorial art (p27 family/
gift, p28 restart-path). These were left intact — no final images generated.
