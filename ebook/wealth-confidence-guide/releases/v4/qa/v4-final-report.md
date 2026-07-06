# V4 Final Report — The Wealth Confidence Guide (Phase 2C)

Concise premium edition. Goal: reduce V3 (34pp) to an intentional **25-page** V4,
convert author-year citations to numbered superscript markers, preserve the 7-day
program and the 7 core worksheets. **No commit/push performed.**

Reviewed 2026-07-06. Verification method noted per item; fine-text OCR from
full-page renders is unreliable in this environment (documented honestly), so
layout/spacing/balance is judged from `scripts/page_density.py` + source
inspection, and overflow/page-numbers from PyMuPDF.

---

### 1. Final page count
**25 pages exactly** (verified with PyMuPDF: `pages=25`). On target.

### 2. Pages removed
Net **−9 pages** (V3 34 → V4 25). Removed as standalone pages by merging their
content into an adjacent, better-composed page (see item 3), plus dropping two
now-redundant standalone worksheet pages (ws-9 restart plan, ws-10 30-day plan)
whose content was folded natively into the restart and next-30 pages. No lesson
day and no core worksheet was removed.

### 3. Pages merged
- **Copyright/publication metadata → Welcome page (P2)** as a compact footer block.
- **Disclaimer + "How to use this guide" → "Before you begin" (P3)** with the
  no-results guarantee and three principles.
- **Notice·Pause·Repeat framework + evidence callout → single framework page (P4).**
- **Seven-day reflection intro → merged into the reflection worksheet (P19).**
- **Recurring purchases + online shopping + family/gift spending →
  one "Everyday automatic spending audit" (P21)** as a bordered mini-workbook.
- **"Habit disappears" restart content + restart worksheet →
  "A compassionate restart" (P22).**
- **"Your next 30 days" intro + 30-day plan + resources/notes → P23.**
- **References compressed from 2 pages to 1 (P24)** via a deterministic 2-column
  grid at 11pt with hanging indents.

### 4. Final page map
1 Cover · 2 Welcome + manifesto (+ metadata footer) · 3 Before you begin + How to
use · 4 Framework (Notice·Pause·Repeat + evidence) · 5–18 Days 1–7 (lesson +
worksheet pairs) · 19 Seven-day reflection (ws-8) · 20 Common spending moments
(cards) · 21 Everyday automatic spending audit · 22 A compassionate restart ·
23 Your next 30 days + notes · 24 Sources & references · 25 Closing.

### 5. Citation conversion
`citeproc: false` in `_quarto.yml`; all author-year `[@key]` citations replaced by
hand-numbered superscript markers, numbered by **first appearance**:
`^N^` in Markdown prose and `#super[N]` inside native Typst pages. A custom native
"Sources & references" page (P24) built from `#ref-entry(N, …)` holds the full
author-year detail. Readers never see "et al." in lesson copy. Numbering:
1 cfpb2015, 2 wood2002, 3 neal2006, 4 harkin2016, 5 beatty1998, 6 rick2008,
7 shah2012, 8 gollwitzer1999, 9 gollwitzer2006, 10 johnson2003, 11 lally2010,
12 breines2012, 13 bandura1977, 14 ftc2024, 15 dellavigna2006, 16 verhagen2011,
17 sirois2014.

### 6. References retained
**All 17 sources retained** and all 17 are cited in the body (verified
`verify_citations_v4.py`: 17 markers ↔ 17 entries, no orphans/gaps/duplicates).
`references.bib` kept as the source of record for URLs.

### 7. References removed (and why)
**None removed.** (Per instruction: do not remove sources without instruction and
do not hide/shrink sources to fit. Compression was achieved via a 2-column layout,
not by dropping sources.)

### 8. Lesson reductions
Each Day lesson trimmed to a compact single page: opening line, a 1–2 paragraph
"why", one everyday example, one action card, one Notice prompt, brief close —
with numbered markers replacing author-year strings. Repetitive phrasing removed;
body font kept at 12.5pt (not shrunk). Day 6 "why" trimmed 3→2 paragraphs. The
seven 1.3in `#wcg-visual` art slots were preserved on every lesson page.

### 9. Supplementary reductions
Situations content consolidated into (a) five native cards on "Common spending
moments" (P20) and (b) a single bordered "spending audit" mini-workbook (P21)
covering quiet renewals, online convenience, and spending connected to care.
Restart and next-30 intros folded into their working pages. References set at 11pt
in two columns with hanging indents (down from a 2-page spread).

### 10. Worksheet content preserved
All **7 core worksheets** retained (ws-1 spending pattern, ws-2 purchase pause,
ws-3 trigger map, ws-4 small shift, ws-5 environment/friction, ws-6 repetition
tracker, ws-7 awareness plan) plus **ws-8 seven-day reflection**. Writing fields,
checkboxes, and reminder cards intact; field/checkbox sizes not shrunk. ws-9 and
ws-10 are no longer included (their content was folded natively into P22/P23);
the orphan files remain on disk but are not part of the build.

### 11. PDF output path
`ebook/wealth-confidence-guide/output/the-wealth-confidence-guide-v4.pdf` (25pp).

### 12. EPUB output path
`ebook/wealth-confidence-guide/output/the-wealth-confidence-guide-v4.epub`.
**Parity note:** native Typst worksheets/cards/framework/audit live in `{=typst}`
raw blocks and render only in the PDF; pandoc drops them for EPUB, so the EPUB has
the text content but not the interactive writing-field / card / visual-slot layout.

### 13. HTML output path
`ebook/wealth-confidence-guide/output/the-wealth-confidence-guide-v4.html`
(also copied to `output/html/index.html`). Same Typst-parity limitation as EPUB.

### 14. Citation audit
**OK.** `verify_citations_v4.py`: 17 distinct markers ↔ 17 source entries; no
markers missing an entry, no orphan (uncited) sources, no gaps in 1..17, no
duplicate entry numbers; first-appearance ordering confirmed. (The old
`@key`-based `verify_citations.py` is obsolete for V4 since citeproc is off — a
new superscript-based verifier was added.)

### 15. Claim audit
**Clean (no true issues).** `audit_claims.py` = 87 flags, all false positives:
NUM_NO_CITE hits are Typst styling numbers (font sizes 11/11.5/12.5pt, weights
600/700, tracking 2pt, line lengths like 20%) and publication years / DOI
fragments inside reference entries; the single PROHIBITED hit is compliance
disclaimer wording that *negates* a guarantee ("…or guaranteed. For guidance
specific to your situation…").

### 16. Readability
**Within mature-reader targets.** `check_readability.py`: OVERALL Flesch-Kincaid
grade **6.1**, average sentence length **13.7 words** (target ASL < ~22; FK ~7–9).
Per-chapter FK ranges 3.1–7.7. (Title/references/closing show 0 words because
their content is in Typst raw blocks — expected.)

### 17. Vale
**43 errors, all false positives.** All are `Vale.Spelling`: author surnames
(Sheeran, Goldstein, Lally, Breines, Bandura, Malmendier, Verhagen, Dolen, Sirois,
Kashy, Harkin, Cryder, Loewenstein, Mullainathan, Shafir, Gollwitzer) and italic
journal-title fragments on the references page, plus `dx`/`dy` Typst offset params
on the closing page. No genuine prose spelling errors in lesson content.

### 18. Lychee
**17 links: 4 OK, 13 "403 Forbidden."** The 403s are anti-bot blocks from DOI
resolvers/publishers (Wiley, APA, Sage, Science, OUP, Tandfonline, AEAweb) and
consumerfinance.gov; every one follows a 301/302 redirect to the correct
publisher landing page, so the links resolve for human readers and are **not
broken**. Consistent with the V3 result.

### 19. Overflow
**None.** PyMuPDF check vs. physical page bounds = 0 clipped text blocks across all
25 pages.

### 20. Visual-spacing QA status
**All 25 pages Approved** (see `qa/v4-page-review.md`). No page Too dense / Too
sparse / Needs reflow. Density profile (`page_density.py`) shows a consistent
~9.46in content rhythm on body pages 5–24; the only large whitespace is the
intentional cover (P1), closing (P25), and lead-ins on P2/P4. Only two DENSE flags
— Day 3 (P9, 1307 chars) and Sources (P24, 2007 chars) — both expected and
vertically balanced with no overflow. **Honesty note:** fine-text visual reading
of the PNG renders is unreliable here; balance/whitespace judged from reliable
programmatic metrics + source inspection.

### 21. Remaining final-art slots
**7 reserved slots** — one `#wcg-visual` per day lesson (P5, P7, P9, P11, P13,
P15, P17) at height 1.3in (within the 1.2–1.6in target). No final illustrations
were generated. The cover and closing use existing brand art/motifs.

### 22. Files changed (this phase)
- `_quarto.yml` — `citeproc: false`; outputs renamed to `*-v4.{pdf,epub,html}`.
- `chapters/00-titlepage.qmd` … `14-close.qmd` — rewritten to the 25-page map with
  superscript citations; `13-references.qmd` rebuilt as native 2-column sources.
- `assets/worksheets/ws-6-repetition-tracker.qmd`, `ws-8-seven-day-reflection.qmd`
  — citation markers updated. (ws-9/ws-10 now unused; left on disk, unbuilt.)
- `scripts/page_density.py` — accepts an optional PDF path argument (default v3).
- `scripts/verify_citations_v4.py` — **new** superscript-based citation verifier.
- Outputs: `output/the-wealth-confidence-guide-v4.{pdf,epub,html}`,
  `output/html/index.html`, `qa/v4-page-renders/page-01..25.png`.
- Docs: `qa/v4-page-review.md`, `qa/v4-final-report.md`.
- **Version preservation:** prior V2/V3 EPUB+HTML and unversioned PDF/EPUB/HTML are
  backed up under `output/.versions-backup/`. **Honest caveat:** the earlier
  `output-file` rename caused Quarto's manifest to prune
  `output/the-wealth-confidence-guide-v3.pdf` before it could be backed up, and it
  is **not recoverable** (the V3 chapter sources were overwritten to produce V4).
  V3 EPUB/HTML survive in `output/` and in the backup. V1/V2 artifacts intact.

### 23. Git status
Branch `main`; the entire `ebook/` directory is **untracked** (`?? ebook/`).
Nothing from this phase is staged or committed. (Pre-existing, unrelated:
`CLAUDE.md` modified, `.skills/` untracked.) **Stopped before commit/push as
instructed — no commit, no push.**
