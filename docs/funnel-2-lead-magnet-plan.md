# Funnel 2 Lead Magnet Plan and Manuscript

**Guide:** The 7-Minute Morning Clarity Reset
**Parent brand:** Micro Saving Daily
**Tagline:** Seven quiet minutes. One clearer morning.
**Status:** Planning + final approved manuscript. Nothing is built. No PDF, no
images, no code, no email configuration, no affiliate link.

This document is the complete, implementation-ready plan and full reader-facing
manuscript for the second Micro Saving Daily lead magnet. A designer or
implementation agent can produce the finished 18-page guide from this document
without inventing missing content. Every visible text element is drafted.

Guardrails governing this work live in `CLAUDE.md`,
`docs/second-funnel-billionaire-brain-wave-plan.md`, and
`docs/funnel-2-homepage-plan.md`. This guide is affiliate-free and never
mentions the Billionaire Brain Wave offer.

---

## 1. Executive summary

The 7-Minute Morning Clarity Reset is a short, structured morning reflection
guide published under the existing Micro Saving Daily brand. It is the free
lead magnet for Funnel 2. Its single job on the funnel is to deliver genuine,
standalone value so a new subscriber thinks, "That was useful — I'll open the
next email."

The guide expands the Funnel 2 homepage's three-movement framework
(**Settle → Notice → Choose**) into a seven-minute, seven-step written routine
(**Arrive, Notice, Name, Separate, Choose, Picture, Continue**). It gives the
reader a calm, repeatable place to slow down mental clutter in the morning,
notice one thought that is taking up attention, and begin the day with one
practical intention.

Key decisions (all locked):

- **18 pages**, US Letter portrait, produced with the same Quarto + Typst
  pipeline, tokens, typography, and worksheet macros as The Wealth Confidence
  Guide, so the two guides are unmistakably the same brand.
- **Educational and reflective only.** No financial, medical, psychological,
  neurological, or outcome claims. Qualified language throughout.
- **Standalone.** The guide is complete and valuable with no purchase and no
  affiliate reference. The affiliate offer stays quarantined on the separate
  independent review page described in the strategy memo — never in this guide.
- **Reuses the Micro Saving Daily identity** (logo, Growth Circle mark, deep-green
  cover, gold hairline, ivory writing pages, Cormorant headings, Manrope body)
  while feeling calmer and more morning-oriented in subject.

The remainder of this document contains the full page-by-page manuscript,
worksheet and tracker specifications, visual/print/mobile/accessibility specs,
compliance guardrails, delivery and file-naming specs, a production sequence, a
QA checklist, open questions, and a final recommendation.

---

## 2. Source documents inspected

All paths below were read to ground this plan. None were modified.

**Project + strategy**
- `CLAUDE.md` — brand rules, compliance boundaries, phase notes, the ebook
  non-negotiables (no affiliate content in the core guide; hedged language).
- `docs/second-funnel-billionaire-brain-wave-plan.md` — verified affiliate
  terms, prohibited/extreme-risk claim list, lead-magnet direction, the rule
  that the lead magnet must have standalone value and no product name.
- `docs/funnel-2-homepage-plan.md` — locked parent-brand decision (Micro Saving
  Daily), the Settle · Notice · Choose homepage framework, and the lead-magnet
  name "The 7-Minute Morning Clarity Reset."

**Design system (web)**
- `src/app/globals.css` — `@theme` color tokens.
- `src/app/layout.tsx` — Cormorant Garamond + Manrope via `next/font`; brand
  metadata; favicons.
- `src/components/legal.tsx` — `BRAND = "Micro Saving Daily"`,
  `CONTACT_EMAIL = "support@microsavingdaily.com"`,
  `EFFECTIVE_DATE = "July 3, 2026"`; footer disclaimer language.

**Existing guide (production system + voice)**
- `ebook/wealth-confidence-guide/_quarto.yml` — US Letter, margins x 1.1in /
  y 1in, `mainfont: Manrope`, `fontsize: 12pt`, Typst output, filename pattern.
- `ebook/wealth-confidence-guide/styles/ebook-template.typ` — the full Typst
  brand engine: color `#let`s, vertical-rhythm system, cover macro, divider,
  worksheet chrome (`wcg-ws-open`, `wcg-lines`, `wcg-field`, `wcg-check`,
  `wcg-panel`, `wcg-checklist`), closing brand, Growth Circle mark, page-number
  footer state.
- `ebook/wealth-confidence-guide/assets/image-manifest.md` — IMG-ID naming,
  300 DPI, cover 2550×3300 (8.5×11), global prohibited-art list, grayscale-safe
  rule, "text ≥ 0.35in from every edge."
- `ebook/wealth-confidence-guide/chapters/01-front.qmd` — disclaimer ("Before
  you begin — Important."), "How to use this guide," Notice·Pause·Repeat page.
- `ebook/wealth-confidence-guide/chapters/02-day1.qmd` — lesson density, voice,
  `wcg-lead`, `wcg-action`, blockquote callouts, worksheet include pattern.
- `ebook/wealth-confidence-guide/chapters/11-restart.qmd` — compassionate,
  non-shaming restart tone; `wcg-field` usage.
- `ebook/wealth-confidence-guide/chapters/14-close.qmd` — back-cover-style
  closing, deep-green full bleed, Growth Circle, wordmark, tagline,
  `microsavingdaily.com`.
- `ebook/wealth-confidence-guide/README.md` — build (`scripts/build_ebook.sh`),
  QA scripts, non-negotiables, "no affiliate product/link in the guide."

**Research (external, authoritative)**
- PlainLanguage.gov — plain-language guidance; the Plain Writing Act of 2010.
- Section508.gov — accessible-PDF authoring guidance (tagged PDFs, prioritize
  HTML, alt text; references WebAIM alt text and the W3C Alt Decision Tree).

---

## 3. Locked decisions

| Item | Decision |
|------|----------|
| Parent brand | Micro Saving Daily (reuse identity + design system verbatim) |
| Guide title | The 7-Minute Morning Clarity Reset |
| Tagline | Seven quiet minutes. One clearer morning. |
| Page count | 18 pages (accepted from the base architecture) |
| Framework | Settle → Notice → Choose |
| Seven minutes | 1 Arrive · 2 Notice · 3 Name · 4 Separate · 5 Choose · 6 Picture · 7 Continue |
| Movement mapping | Settle = Minute 1; Notice = Minutes 2–4; Choose = Minutes 5–7 |
| Content type | Educational reflection only; standalone; affiliate-free |
| Production | Quarto + Typst, US Letter portrait, same tokens/typography/macros |
| PDF filename | `the-7-minute-morning-clarity-reset.pdf` |
| Domain | microsavingdaily.com |
| Support email | support@microsavingdaily.com (verify before printing in-guide — §21) |

Architecture audit: the 18-page base structure was reviewed and **accepted as
is**. Each page has a distinct job and earns its place; the seven minute-pages
are teaching-plus-practice pages (mirroring the existing guide's one-lesson-per-
page density), and the consolidated worksheet on page 13 is the reusable daily
sheet. One optional consolidation was considered (folding the page-5 overview
into the page-4 framework page to reach 17 pages) and **rejected**, because
page 5 doubles as a required homepage mockup asset and works best as its own
clean quick-reference page. No pages were silently removed or merged.

---

## 4. Audience and problem definition

**Primary reader:** US adults roughly 45–65 who are drawn to personal growth,
simple routines, reflection, and steadier financial confidence. They may feel
mentally busy in the morning and may notice repetitive money-related thoughts.
They tend to dislike long or complicated routines, often prefer structured
prompts over a blank journal, and are reasonably skeptical of exaggerated
self-help promises. No prior meditation experience is assumed.

**Reader problem (plainly stated):** The first minutes of the day often arrive
already crowded — a to-do list, a few worries, and money thoughts that seem to
start on their own. Without a small structure, it is easy to react to the noise
instead of choosing where to begin. The reader is not looking for therapy or a
budgeting system; they want a short, dignified way to hear themselves think and
start the day with one clear step.

**What the guide provides:** a seven-minute written routine that gives those
first minutes a calm shape — arrive, notice one thought, name the feeling, sort
what is known from what is assumed, choose one intention, picture the first
step, and carry one word into the day.

**Writing level:** plain American English, understandable on first reading. No
jargon, clinical terms, therapy language, or abstract passages.

---

## 5. Lead-magnet positioning

- **Role in the funnel:** the free opt-in deliverable on the Funnel 2 homepage.
  Its purpose is trust and usefulness, not selling. The strongest conversion
  outcome is a reader who finishes the guide, uses it, and is willing to open
  the next educational email.
- **Relationship to Funnel 1:** a sibling Micro Saving Daily guide. It shares
  the brand, design system, and voice, but its own subject (a morning
  reflection routine) so it does not duplicate The Wealth Confidence Guide's
  content or wording. Where Funnel 1 uses *Notice · Pause · Repeat*, this guide
  uses *Settle · Notice · Choose* — a distinct, guide-specific framework.
- **Standalone value:** the guide is complete and useful with no purchase. It
  contains no affiliate reference and no product name. The affiliate offer is
  handled elsewhere, on the separate independent review page.
- **Tone position:** calmer and more morning-oriented than Funnel 1, but
  unmistakably the same premium, grounded, editorial brand.

---

## 6. Core promise and boundaries

**Approved promise:** a simple seven-minute reflection routine designed to help
the reader slow down mental clutter, notice what is taking up attention, and
begin the day with one clear intention.

**The guide may support** (all framed as offered/invited, not promised):
reflection, awareness, mental organization, intentionality, consistency, a
quieter start, recognition of repetitive thoughts, and identifying one practical
next step.

**The guide must never promise or imply:** reduced anxiety; treatment of stress;
psychological healing; improved memory; brain changes; better financial
outcomes; more income; wealth; manifestation; improved health; guaranteed calm
or clarity; or any specific personal result.

**Required qualified language** (use naturally, do not over-disclaim in the
body): "designed to help," "may help," "gives you a place to," "offers a simple
structure," "invites you to," "can be used as," "some people may find."

**Banned vocabulary** (do not use anywhere in the reader-facing copy): unlock,
activate, rewire, hack, breakthrough, secret, revolutionary, manifest,
frequency, abundance, wealth code, brainwave, effortless, proven, guaranteed,
and "in just seven minutes" used as an outcome promise. The number seven
describes the length of the routine, never a promised result timeframe.

**Do not over-repeat:** calm, clarity, mindful, intentional, reset. Vary with
words like quiet, steady, unhurried, plain, grounded, even, clear-headed, room
to think.

---

## 7. Research and rationale

This section records the authoritative guidance consulted and the specific
design and writing implications drawn from it. It is deliberately concise. The
reader-facing guide is **not** a research paper and carries no citations. No
neuroscience, behavioral-science, medical, or financial claims are drawn from
this research; it informs *plain language and document accessibility only*.

**Evidence consulted**

- **PlainLanguage.gov (U.S. federal plain-language guidance; the Plain Writing
  Act of 2010).** Emphasizes writing for a specific audience, using clear and
  common words, and testing content for understanding.
- **Section508.gov — creating accessible PDFs.** Federal guidance to prioritize
  accessible, mobile-friendly formats; produce properly *tagged* PDFs; provide
  meaningful alternative text; and use recognized references (WebAIM Alternative
  Text; the W3C Alt Decision Tree).
- **WCAG 2.1 (W3C) content-structure and contrast principles.** Success
  criteria relevant here: 1.4.3 Contrast (Minimum) — body text at a 4.5:1
  contrast ratio, large text (≈18pt, or 14pt bold) at 3:1; 1.3.1/1.3.2 Info and
  Relationships / Meaningful Sequence — logical reading order and programmatic
  structure; 1.1.1 Non-text Content — text alternatives; 2.4.6 Headings and
  Labels — descriptive headings and form labels.
- **Tagged-PDF / PDF-UA principles (ISO 14289).** A PDF is accessible only when
  it is tagged with a correct heading tree, a logical reading order, real
  (selectable) text rather than text baked into images, marked-decorative
  artifacts, and document metadata (title + language).

**Implications for this guide (evidence → design choice)**

| Evidence | Editorial / design implication |
|----------|-------------------------------|
| Plain language: write for the audience, common words, test for understanding | Short paragraphs; second person; everyday words; each minute-page teaches one idea; prompts phrased as plain questions. |
| Tagged PDF + heading structure (508, PDF-UA, WCAG 1.3.1) | One H1 per page; H2/H3 used consistently; export a *tagged* PDF with a correct heading tree and bookmarks for major sections. |
| Contrast minimums (WCAG 1.4.3) | Body ink on ivory (`#1E2E28` on `#F7F3E9`) and ivory on deep-green comfortably exceed 4.5:1; gold is an accent only and never used for small body text. |
| Reading order / meaningful sequence (WCAG 1.3.2) | Decorative rules, motifs, and worksheet lines are marked as artifacts so they do not interrupt the screen-reader reading order. |
| Alt text (WCAG 1.1.1; WebAIM; Alt Decision Tree) | Every functional image gets concise alt text; purely decorative motifs are marked decorative. |
| Real selectable text (PDF-UA) | No critical text is delivered only inside an image; worksheet labels and prompts are live text. |
| Accessible forms/labels (WCAG 2.4.6) | Checkboxes carry visible text labels; field meaning never relies on color or position alone. |
| Metadata (PDF-UA) | Set document Title and Language (en-US), matching the existing guide's practice. |

**Separation of evidence from editorial judgment:** the sources above justify
*how the document is written and structured for readability and accessibility*.
They do **not** support any claim about what the routine does for the reader.
All statements about the routine's effect use qualified language and make no
promise.

---

## 8. Final page architecture

18 pages, US Letter portrait. Front matter carries no page number; numbering
begins at the routine and runs through the back matter, matching the existing
guide's footer-number convention.

| # | Page | Type | Number shown | Principal asset |
|---|------|------|--------------|-----------------|
| 1 | Cover | Full-bleed deep-green cover | no | Cover art (mockup source) |
| 2 | Welcome from Micro Saving Daily | Editorial text | no | Small motif/spot |
| 3 | What this guide is — and is not | Two-panel + disclaimer | no | None |
| 4 | Settle · Notice · Choose | Framework page | no | Three-movement motif |
| 5 | Complete seven-minute routine | Quick-reference table | no | Overview (mockup source) |
| 6 | Minute 1 — Arrive | Minute teaching page | yes (1) | Small motif |
| 7 | Minute 2 — Notice | Minute teaching page | yes (2) | Small motif |
| 8 | Minute 3 — Name | Minute teaching page | yes (3) | Small motif |
| 9 | Minute 4 — Separate | Minute teaching page | yes (4) | Small motif |
| 10 | Minute 5 — Choose | Minute teaching page | yes (5) | Small motif |
| 11 | Minute 6 — Picture | Minute teaching page | yes (6) | Small motif |
| 12 | Minute 7 — Continue | Minute teaching page | yes (7) | Small motif |
| 13 | Morning reflection worksheet | Full fillable worksheet | yes (8) | Worksheet (mockup source) |
| 14 | Seven-day tracker | Table with checkboxes | yes (9) | Tracker (mockup source) |
| 15 | Missed-a-day restart | Compassionate reset + 1-min version | yes (10) | One-page routine card (mockup source) |
| 16 | Evening variation | Optional short prompts | yes (11) | Small motif |
| 17 | Reflection after seven days | Reflection prompts + summary | yes (12) | Small motif |
| 18 | Closing page | Back-cover-style close | no | Final brand visual |

Movement rhythm on the minute pages: Minute 1 sits under **Settle**; Minutes
2–4 under **Notice**; Minutes 5–7 under **Choose**. Each minute page names its
movement in the eyebrow so the reader always knows where they are.


---

## 9. Complete page-by-page manuscript

Every page below is drafted in full. Each page separates **A. FINAL
READER-FACING COPY** (exact text for the guide) from **B. INTERNAL PRODUCTION
NOTES** (visual, layout, print, mobile, accessibility, compliance, asset). Text
inside "quotation-style" fields, prompts, and labels is final copy.

### Page 1 — Cover

- **Page number shown:** none
- **Purpose:** Establish the guide as a premium Micro Saving Daily product and
  state exactly what it is, with no claims.
- **Eyebrow:** MICRO SAVING DAILY
- **Title:** The 7-Minute Morning Clarity Reset

**A. FINAL READER-FACING COPY**

- Brand line (tracked, gold): `MICRO SAVING DAILY`
- Small label above title (gold, Cormorant): `THE`
- Title (Cormorant, three lines):
  `The 7-Minute`
  `Morning Clarity`
  `Reset`
- Subtitle (Manrope): `A simple seven-minute morning routine for noticing what is on your mind and choosing where to begin.`
- Tagline (Cormorant italic, ivory): `Seven quiet minutes. One clearer morning.`
- Framework footer band (tracked, gold, dot separators): `SETTLE · NOTICE · CHOOSE`

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Reuse the existing cover system exactly — deep-green
  (`#0F3D2E`) full-bleed ground; inset soft-gold hairline frame; centered
  Growth Circle mark (ivory ring, gold dot); an ivory title panel holding the
  title and subtitle; tagline in ivory below the panel; a gold hairline rule
  between subtitle and tagline; the `SETTLE · NOTICE · CHOOSE` band near the
  foot, mirroring the Wealth Confidence cover's `NOTICE · PAUSE · REPEAT` band.
- **Layout:** Vertical order — brand line → Growth Circle → `THE` → three-line
  title → gold rule → subtitle → tagline → framework band. Keep generous space;
  do not crowd. Title is the dominant element.
- **Print:** 300 DPI; full 8.5×11 with the deep-green bleeding to the trim; keep
  all text ≥ 0.35in from every edge. This is the only page with a dark full
  bleed (it carries no writing).
- **Mobile:** Title must remain legible at phone width; the three-line break
  helps. Subtitle stays on two lines maximum on small screens.
- **Accessibility:** As a rendered cover image it needs alt text (see §13). The
  document Title metadata is set separately (§16). Gold text on deep-green is
  used only at display sizes, not for small body copy.
- **Compliance:** No product name, no wealth/brain/health/manifestation words.
  Subtitle describes the routine, not an outcome.
- **Asset:** Cover art `img-01-cover` (see §13). Portrait 17:22, 2550×3300 px.

---

### Page 2 — Welcome from Micro Saving Daily

- **Page number shown:** none
- **Purpose:** Warmly orient the reader, set expectations, and remove pressure.
- **Eyebrow:** FROM MICRO SAVING DAILY
- **Title:** A quieter place to begin

**A. FINAL READER-FACING COPY**

Most mornings arrive already full. Before your feet are properly on the floor,
the day is talking — a list of things to do, a couple of half-formed worries,
and the money thoughts that seem to start on their own.

This guide offers a small, steady structure for the first few minutes of the
day. Seven minutes, seven short steps. You read a little and write a little, and
you begin the day having actually heard yourself think.

You do not need to do it perfectly. Some mornings you may fill the page; other
mornings a single line is plenty. Both count.

The routine is meant to be adapted. Shorten it when time is tight. Use it at the
kitchen table, on the train, or in a quiet corner. Keep what helps you and leave
the rest.

That is the whole invitation: seven quiet minutes, and a clearer place to start
the day.

> A morning does not have to be fixed to be a good place to begin.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Ivory page. A small Growth Circle mark or a single quiet
  spot motif (a low horizon line / soft morning light) at the top. Restrained.
- **Layout:** Eyebrow (Manrope, tracked, deep-green) → H1 (Cormorant) → short
  paragraphs with generous leading → one gold-rule pull-quote block near the
  foot using the existing blockquote callout style.
- **Print:** Body Manrope 12.5pt; ample paragraph spacing; no dark background.
- **Mobile:** Single column; short paragraphs read well on a phone; pull-quote
  stays on 1–2 lines.
- **Accessibility:** H1 tagged; pull-quote tagged as a blockquote; decorative
  motif marked as an artifact.
- **Compliance:** Names the crowded-morning feeling without diagnosing anxiety,
  stress, or any condition. No promises.
- **Asset:** Optional small motif `img-02-welcome` (decorative; see §13).

---

### Page 3 — What this guide is — and is not

- **Page number shown:** none
- **Purpose:** Set honest expectations and carry the educational disclaimer in a
  warm, non-legalistic way.
- **Eyebrow:** BEFORE YOU START
- **Title:** What this guide is — and is not

**A. FINAL READER-FACING COPY**

A short, honest note before you begin, so you know exactly what you are holding.

**What it is**
- An educational reflection tool you can use each morning.
- A seven-minute written routine with seven short steps.
- A flexible, personal awareness practice you can shorten or adapt.
- A simple structure for choosing one practical next step.

**What it is not**
- Financial or investment advice.
- Medical advice or mental-health treatment.
- A psychological assessment or diagnosis.
- A promise of any particular result.
- A replacement for professional support when you need it.

> **A note on how to use it.** This guide is for educational and informational
> purposes only. It does not provide financial, investment, tax, legal, medical,
> or psychological advice. The steps support personal awareness and reflection.
> Individual circumstances and results vary, and no specific result is promised.
> If you would like guidance for your own situation, consider speaking with an
> appropriately qualified professional.

With that said — let's begin.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Two side-by-side panels ("What it is" on sage-tinted
  card; "What it is not" on ivory/sand card), both with the existing card
  styling. The disclaimer uses the gold-left-rule callout box from the template.
- **Layout:** Intro line → two panels (stack vertically on narrow widths) →
  disclaimer callout → single warm closing line.
- **Print:** Panels must remain readable in grayscale (they differ by border and
  label, not color alone). Body 12.5pt; disclaimer may be 11.5pt.
- **Mobile:** Panels stack to one column; lists keep large tap-free spacing.
- **Accessibility:** Each panel has a real heading ("What it is" / "What it is
  not"); the two lists are tagged lists; disclaimer tagged as blockquote; the
  distinction is conveyed by text labels, not color.
- **Compliance:** This is the primary in-guide disclaimer, adapted from the
  approved Wealth Confidence "Before you begin" language. Preserves the same
  legal meaning. Flag for legal review (§21).
- **Asset:** None.

---

### Page 4 — Settle · Notice · Choose

- **Page number shown:** none
- **Purpose:** Teach the three-movement framework and connect it to the seven
  minutes so the homepage and the guide feel like one idea.
- **Eyebrow:** THE THREE MOVEMENTS
- **Title:** Settle · Notice · Choose

**A. FINAL READER-FACING COPY**

The whole routine rests on three simple movements. You already know how to do
each one — this guide just gives them a place and an order.

**Settle**
Arrive in the morning before you try to fix anything. Let the first moment be
about landing in the day, not solving it.
*In the routine:* Minute 1 — Arrive.

**Notice**
See what is actually on your mind. Give one thought your attention, put a plain
word to the feeling under it, and separate what you know from what you are
assuming.
*In the routine:* Minutes 2, 3, and 4 — Notice, Name, Separate.

**Choose**
Turn all that noticing into one small, doable step. Pick a single intention and
picture the first practical action.
*In the routine:* Minutes 5, 6, and 7 — Choose, Picture, Continue.

> The homepage shows these three movements. This guide opens each one into the
> seven-minute routine on the next page.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Sage-tinted section page (matching the framework page in
  the existing guide). Three stacked or three-column movement blocks, each with
  a simple native motif (Settle = soft horizon/landing dot; Notice = ring with
  center dot; Choose = small rising step marks). Gold hairline accents.
- **Layout:** Intro → three movement blocks with name (Cormorant), one-sentence
  meaning, and the italic "*In the routine*" mapping line → closing note.
- **Print:** Sage tint must be light enough to keep text at full contrast; keep
  it print-friendly (low ink). No writing on this page.
- **Mobile:** Blocks stack to one column with clear headings.
- **Accessibility:** Each movement is an H2 or a labeled block; motifs marked
  decorative; the movement→minute mapping is stated in text, not by color.
- **Compliance:** Purely structural teaching. No claims.
- **Asset:** Optional three-movement motif (decorative; native Typst preferred).

---

### Page 5 — Your complete seven-minute routine

- **Page number shown:** none
- **Purpose:** One-page quick reference for the whole routine; also a homepage
  mockup asset.
- **Eyebrow:** THE ROUTINE AT A GLANCE
- **Title:** Your seven-minute routine

**A. FINAL READER-FACING COPY**

Here is the whole routine on one page. Keep it nearby; once the steps are
familiar, this page is all you need.

| Minute | Step | What you do | A question to hold |
|---|---|---|---|
| 1 | Arrive | Land in the day and notice where you are. | What is this morning actually like right now? |
| 2 | Notice | Pick the one thought taking up the most room. | What is asking for my attention first? |
| 3 | Name | Put a plain word to the feeling underneath. | What feeling seems connected to this thought? |
| 4 | Separate | Sort what you know from what you are assuming. | What do I actually know, and what am I guessing? |
| 5 | Choose | Set one intention you can act on today. | What is one thing within my reach today? |
| 6 | Picture | See the first practical step clearly. | What would the first small action look like? |
| 7 | Continue | Close the page and carry one word forward. | What word do I want to keep with me? |

> Settle is Minute 1. Notice is Minutes 2–4. Choose is Minutes 5–7.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Clean lined table using the existing table style (taupe
  0.6pt horizontal rules, deep-green semibold header row, roomy cell padding).
  Small Growth Circle mark in a corner is optional and decorative.
- **Layout:** Intro line → table → one gold-rule note mapping movements to
  minutes. Table must fit within the live text area on one page.
- **Print:** Four columns fit US Letter portrait comfortably at 12.5pt/11.5pt;
  the "What you do" and "question" columns take the most width.
- **Mobile:** Four columns are the practical maximum; keep column text short so
  the table does not require horizontal scrolling. Prompt column may wrap.
- **Accessibility:** Real table with a tagged header row (`<TH>` scope = column);
  header cells named; reading order left-to-right, top-to-bottom.
- **Compliance:** Neutral, structural. No claims. "Question to hold" phrasing
  avoids implying an outcome.
- **Asset:** Overview page `img-03-overview` mockup source (see §13). Landscape
  crop of this page is used on the homepage "what's inside" area.


---

### Page 6 — Minute 1 — Arrive

- **Page number shown:** 1
- **Purpose:** Teach the first minute: physically arriving in the day before
  doing anything with it.
- **Eyebrow:** SETTLE · MINUTE 1
- **Title:** Minute 1 — Arrive

**A. FINAL READER-FACING COPY**

*Opening line:* Before anything else, let yourself arrive.

You are not behind yet. The day has barely started. This first minute is about
landing in it — feeling the chair or the floor beneath you, noticing the light,
letting your shoulders drop a little. There is nothing to fix and nowhere to be.
You are simply here, at the start.

**Do this**
Sit somewhere reasonably quiet. Look around once, slowly. Notice a few ordinary
things — the light in the room, a sound, the temperature, the surface under your
hands.

**Prompt**
What is this morning actually like, right now?

*If you have a moment more:* What is one small, ordinary thing I can notice
around me?

*Write a line or two:*
`______________________________________________`
`______________________________________________`

> **Keep it simple.** A single sentence is enough. This minute is about
> arriving, not writing well.

*This is **Settle** — the ground the rest of the routine stands on.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small native motif (a low horizon line with a soft sun dot, or the
  Growth Circle) in the corner. Ivory page.
- **Layout:** Eyebrow → H1 → `wcg-lead` opening line (Cormorant italic) → "Why /
  teaching" paragraph → `wcg-action`-style "Do this" panel → primary prompt →
  optional secondary prompt → 2 writing lines → "Keep it simple" gold-rule
  callout → movement connection line.
- **Writing lines:** 2 ruled lines at 0.27in spacing (`wcg-lines(2)`).
- **Print:** No dark background; lines print cleanly in taupe 0.6pt.
- **Mobile:** Writing lines render as visible underscored fields; single column.
- **Accessibility:** H1 tagged "Minute 1 — Arrive"; "Do this" is a labeled
  block; writing lines are decorative artifacts but the field has a text label
  ("Write a line or two"); callout tagged as blockquote.
- **Compliance:** No breathing-performance or calming claim; breathing is not
  instructed as a technique. Observational only.
- **Asset:** Optional decorative motif; no required image.

---

### Page 7 — Minute 2 — Notice

- **Page number shown:** 2
- **Purpose:** Teach selecting one thought from the morning crowd and observing
  it.
- **Eyebrow:** NOTICE · MINUTE 2
- **Title:** Minute 2 — Notice

**A. FINAL READER-FACING COPY**

*Opening line:* Now that you have arrived, notice what is on your mind.

Most mornings offer a crowd of thoughts at once. You are not going to sort all
of them. You are going to pick one — the thought that keeps tapping you on the
shoulder — and simply look at it. For now you are observing it, not fixing it.

**Do this**
Let the thoughts settle for a moment. Then choose the one taking up the most
room and write it down as plainly as you can.

**Prompt**
What thought is taking up the most attention this morning?

*If you have a moment more:* If several are competing, which one would I miss
least if I set it down for now?

*Write a line or two:*
`______________________________________________`
`______________________________________________`

> **Keep it simple.** One thought is the whole job. You can return to the others
> another morning.

*This is the first step of **Notice** — choosing one thing to see clearly.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif suggesting one marked item among several (a row of
  faint dots with one highlighted). Ivory page.
- **Layout:** Same template as Minute 1 (lead → teaching → "Do this" → prompt →
  optional prompt → 2 lines → callout → connection line).
- **Writing lines:** 2 ruled lines (`wcg-lines(2)`).
- **Print / Mobile / Accessibility:** As Minute 1.
- **Compliance:** "Observe, don't fix" framing; no therapy or diagnostic
  language.
- **Asset:** Optional decorative motif.

---

### Page 8 — Minute 3 — Name

- **Page number shown:** 3
- **Purpose:** Teach naming the feeling attached to the thought, in ordinary
  language.
- **Eyebrow:** NOTICE · MINUTE 3
- **Title:** Minute 3 — Name

**A. FINAL READER-FACING COPY**

*Opening line:* Thoughts usually travel with a feeling attached.

Putting a plain word to that feeling can make it a little easier to hold. You do
not need the perfect word, and you do not have to explain or justify it.
"Uneasy," "tired," "hopeful," "impatient," "not sure" — these are all good
answers.

**Do this**
Look at the thought you wrote. Ask what feeling sits underneath it, and give it
a plain, everyday name.

**Prompt**
What feeling seems connected to this thought?

*If you have a moment more:* Is this feeling familiar, or does it feel new this
morning?

*Write a word or a line:*
`______________________________________________`
`______________________________________________`

> **Keep it simple.** "Not sure" is a complete and honest answer. Naming is
> enough — you do not have to solve it.

*Still **Notice** — adding a plain word to what you see.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif; ivory page.
- **Layout:** Standard minute-page template.
- **Writing lines:** 2 ruled lines (`wcg-lines(2)`).
- **Print / Mobile / Accessibility:** As previous minute pages.
- **Compliance:** Explicitly allows "not sure"; no diagnosis, no clinical
  emotion labels, no implication that a feeling is a symptom.
- **Asset:** Optional decorative motif.

---

### Page 9 — Minute 4 — Separate

- **Page number shown:** 4
- **Purpose:** Teach sorting a tangled thought into known, assumed, can-wait, and
  may-need-action — using labeled fields.
- **Eyebrow:** NOTICE · MINUTE 4
- **Title:** Minute 4 — Separate

**A. FINAL READER-FACING COPY**

*Opening line:* A single thought often mixes several things together.

There may be a fact in there, a guess, something that needs doing, and something
that can wait. Gently pulling them apart can make the thought feel less
tangled. Not every worry is mistaken — some point to something real and useful.
The goal is not to argue with the thought, only to see its parts.

**Do this**
Take the thought and sort it into a few parts. A few words in each line is
plenty.

**Prompt**
What do I actually know here, and what am I only assuming?

*Sort it out:*
- What I know: `_______________________________`
- What I may be assuming: `______________________`
- What can wait: `_______________________________`
- What may need action: `________________________`

> **Keep it simple.** You are sorting, not judging. A rough split is plenty.

*The last step of **Notice** — seeing the parts instead of the tangle.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif suggesting one line separating into a few strands;
  ivory page.
- **Layout:** Standard minute-page template, but the writing area is **four
  labeled single-line fields** (`wcg-field` with `lines: 1` each) rather than
  open lines. Labels are bold Manrope.
- **Writing lines:** 4 labeled fields, 1 ruled line each.
- **Print:** Four short fields fit comfortably; keep labels left-aligned above
  or inline with each rule.
- **Mobile:** Fields stack; each label sits directly above its line.
- **Accessibility:** Each field label is real text tied to its line; the four
  categories are conveyed by words, not color; reading order top-to-bottom.
- **Compliance:** States plainly that "not every worry is mistaken" — does not
  imply every assumption is irrational or that thoughts are distortions to be
  corrected (avoids clinical/therapy framing).
- **Asset:** Optional decorative motif.

---

### Page 10 — Minute 5 — Choose

- **Page number shown:** 5
- **Purpose:** Teach choosing one realistic intention within the reader's
  control.
- **Eyebrow:** CHOOSE · MINUTE 5
- **Title:** Minute 5 — Choose

**A. FINAL READER-FACING COPY**

*Opening line:* Now choose one thing to do with what you have noticed.

You have picked a thought, named the feeling, and seen its parts. Pick a single
intention that is realistic and within your control today — not the whole
problem solved, just one honest step in a direction you like.

**Do this**
Choose one intention for today. Keep it small enough that you could actually do
it before this time tomorrow.

**Prompt**
What is one intention I can choose for today?

*If you have a moment more:* Is this genuinely mine to decide — or am I reaching
for something outside my control?

*Write a line or two:*
`______________________________________________`
`______________________________________________`

> **Keep it simple.** One clear intention beats five vague ones. Small and real
> is the aim.

*This begins **Choose** — turning noticing into a decision.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif suggesting a single chosen point; ivory page.
- **Layout:** Standard minute-page template.
- **Writing lines:** 2 ruled lines (`wcg-lines(2)`).
- **Print / Mobile / Accessibility:** As previous minute pages.
- **Compliance:** "Within your control" framing; no financial or outcome
  promise; intention is personal and non-monetary by default.
- **Asset:** Optional decorative motif.

---

### Page 11 — Minute 6 — Picture

- **Page number shown:** 6
- **Purpose:** Teach making the intention concrete by picturing the first
  practical step.
- **Eyebrow:** CHOOSE · MINUTE 6
- **Title:** Minute 6 — Picture

**A. FINAL READER-FACING COPY**

*Opening line:* An intention is easier to keep when you can see the first step.

This minute is not about picturing a big result. It is about the small, concrete
action that comes first. What would you actually do — and where, and roughly
when?

**Do this**
Take your intention and picture the first practical step. Make it specific: the
action, the place, and a rough time.

**Prompt**
What would the first small action actually look like today?

*If you have a moment more:* When and where is the natural moment for it to
happen?

*Write a line or two:*
`______________________________________________`
`______________________________________________`

> **Keep it simple.** One step is enough to picture. The rest can reveal itself
> later.

*Still **Choose** — making the intention concrete.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif of a path making one small turn toward a point; ivory
  page.
- **Layout:** Standard minute-page template.
- **Writing lines:** 2 ruled lines (`wcg-lines(2)`).
- **Print / Mobile / Accessibility:** As previous minute pages.
- **Compliance:** Picturing is limited to the next concrete action. Explicitly
  **not** a visualization of wealth, income, or any guaranteed outcome.
- **Asset:** Optional decorative motif.

---

### Page 12 — Minute 7 — Continue

- **Page number shown:** 7
- **Purpose:** Close the routine, carry one word forward, return to the day
  without perfectionism.
- **Eyebrow:** CHOOSE · MINUTE 7
- **Title:** Minute 7 — Continue

**A. FINAL READER-FACING COPY**

*Opening line:* The last minute closes the routine and hands the day back to you.

Choose one word or short phrase from the past few minutes to carry with you —
something to return to when the morning gets loud again. Then let the page go.
You do not have to hold all of it. One word is enough.

**Do this**
Reread what you wrote. Underline one word or phrase to keep. Close the guide and
begin your day.

**Prompt**
What word or phrase do I want to carry into the morning?

*If you have a moment more:* If the day gets noisy, what would be a kind thing to
remember?

*Write your word or phrase:*
`______________________________________________`

> **Keep it simple.** Perfect endings are not required. Carrying one word forward
> is a real result.

*The close of **Choose** — and the quiet end of the routine.*

**B. INTERNAL PRODUCTION NOTES**

- **Visual:** Small motif suggesting a single kept mark or an open door back to
  the day; ivory page.
- **Layout:** Standard minute-page template, with a single writing line for the
  word/phrase.
- **Writing lines:** 1 ruled line (`wcg-lines(1)`).
- **Print / Mobile / Accessibility:** As previous minute pages.
- **Compliance:** "A real result" refers to carrying a word forward, not any
  personal outcome. No promise.
- **Asset:** Optional decorative motif.


---

### Page 13 — Morning reflection worksheet

- **Page number shown:** 8
- **Purpose:** The reusable one-page version of the whole routine, fillable in
  about seven minutes.
- **Eyebrow:** WORKSHEET · SEVEN MINUTES
- **Title:** Morning reflection

**A. FINAL READER-FACING COPY**

*Instruction:* This is the whole routine on one page. Use a fresh copy each
morning, or keep it beside you as you move through the seven minutes. Write a
little or a lot — a few words on each line is enough.

Fields (exact labels, in order):

1. `Date:` `__________________`
2. `The thought taking up the most attention:`
   `______________________________________________`
   `______________________________________________`
3. `The feeling I can name:`
   `______________________________________________`
4. `What I know:`
   `______________________________________________`
5. `What I may be assuming:`
   `______________________________________________`
6. `What can wait:`
   `______________________________________________`
7. `One clear intention for today:`
   `______________________________________________`
   `______________________________________________`
8. `One practical next step:`
   `______________________________________________`
   `______________________________________________`
9. `A word I want to carry into the morning:`
   `______________________________________________`

*Footer microcopy:* `Settle · Notice · Choose — seven quiet minutes.`

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Use the existing worksheet chrome (`wcg-ws-open` header
  band in deep-green with the worksheet name and small Growth Circle mark;
  `wcg-field` for labeled lines; `wcg-ws-footer` for the footer). Ivory writing
  area.
- **Exact line counts:** Date = short single field; Thought = 2 lines;
  Feeling = 1 line; What I know = 1 line; What I may be assuming = 1 line;
  What can wait = 1 line; One clear intention = 2 lines; One practical next
  step = 2 lines; Word to carry = 1 line. **Total = 12 ruled writing lines.**
- **Spacing:** Ruled lines at 0.27in (`sp-ws-line`); ~10pt above each field
  label (`sp-ws-field`); footer ~12pt above (`sp-ws-foot`). This fits one US
  Letter page with the standard margins and stays completable in ~7 minutes.
- **Print:** Lines print as taupe 0.6pt rules; no dark background behind writing;
  generous handwriting room. Home-printer friendly.
- **Mobile:** Fields render as visible, labeled, tappable text fields if the PDF
  is used with a fill app; otherwise as clearly ruled lines. Single column.
- **Accessibility:** Each field label is real, selectable text associated with
  its line; ruled lines are decorative artifacts; logical top-to-bottom reading
  order; the worksheet has its own H1 in the tag tree.
- **Compliance:** Neutral prompts; no scoring, no mood scale, no clinical field.
- **Asset:** Worksheet page `img-04-worksheet` mockup source (see §13).

---

### Page 14 — Seven-day tracker

- **Page number shown:** 9
- **Purpose:** A light, non-clinical way to note seven mornings of practice.
- **Eyebrow:** SEVEN MORNINGS
- **Title:** Your seven-day tracker

**A. FINAL READER-FACING COPY**

*Instruction:* One row a morning. Tick the box when you finish, jot a word for
how the morning felt, note the intention you chose, and — if you like — add a
word at the end of the day. There is no score to keep and nothing to measure.

| Day | Done | Morning in a word | Today's intention | Evening word (optional) |
|---|---|---|---|---|
| Day 1 | ☐ | `__________` | `____________________` | `__________` |
| Day 2 | ☐ | `__________` | `____________________` | `__________` |
| Day 3 | ☐ | `__________` | `____________________` | `__________` |
| Day 4 | ☐ | `__________` | `____________________` | `__________` |
| Day 5 | ☐ | `__________` | `____________________` | `__________` |
| Day 6 | ☐ | `__________` | `____________________` | `__________` |
| Day 7 | ☐ | `__________` | `____________________` | `__________` |

> **Missing a day does not reset your progress.** Begin again on the next line.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Lined table using the existing table style; checkboxes
  drawn with the enlarged `wcg-check` box (17pt square, deep-green 1pt stroke).
  Deep-green semibold header row.
- **Layout:** Instruction line → table (7 rows) → gold-rule reassurance callout.
- **Print:** Checkboxes print clearly at 17pt; write-in cells give real
  handwriting room; keep row height generous. Grayscale-safe.
- **Mobile:** Five columns is the practical maximum; keep the two write-in text
  columns narrow-but-legible and the two "word" columns short so no horizontal
  scroll is needed at phone width.
- **Accessibility:** Real table with a tagged header row; each checkbox has an
  associated text meaning ("Done" column header) — completion is conveyed by the
  box + header label, never by color; the "optional" nature of the last column
  is stated in the header text.
- **Compliance:** No mood scoring, no numeric scale, no clinical measurement.
  Reassurance line removes streak pressure.
- **Asset:** Tracker page `img-05-tracker` mockup source (see §13).

---

### Page 15 — Missed-a-day restart

- **Page number shown:** 10
- **Purpose:** Remove shame around missed days and offer a one-minute way back
  in.
- **Eyebrow:** WHENEVER YOU DRIFT
- **Title:** Missed a morning? Start here.

**A. FINAL READER-FACING COPY**

If a day slipped by — or a week — nothing is broken. There is no streak to
protect and no progress to lose. This routine was always meant to be picked up,
set down, and picked up again. You can begin with a single minute.

**The one-minute version**
1. What is taking up my attention right now?
   `______________________________________________`
   `______________________________________________`
2. What is one thing I can choose next?
   `______________________________________________`
   `______________________________________________`

That is a complete morning. When you are ready, the full seven minutes are
waiting for you.

> **A gentle reminder.** A missed morning is just a morning. Returning is the
> practice — not perfection.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Ivory page. This page doubles as the "one-page routine
  card" source, so keep the one-minute version visually self-contained (a
  bordered card block with the two questions and their lines) for clean cropping.
- **Layout:** Warm paragraph → bordered one-minute card (two `wcg-field`
  entries, 2 lines each) → closing line → gold-rule reminder callout.
- **Writing lines:** 2 fields × 2 lines = 4 ruled lines.
- **Print:** Home-printer friendly; the card border is a thin deep-green rule.
- **Mobile:** Card and fields stack in one column; large, legible.
- **Accessibility:** Ordered list for the two steps; each step's line has a text
  label; callout tagged as blockquote.
- **Compliance:** Non-shaming, no pressure, no streak/urgency language. No
  claims.
- **Asset:** One-page routine card `img-06-routine-card` mockup source — a
  cropped view of the one-minute card (see §13).

---

### Page 16 — Evening variation

- **Page number shown:** 11
- **Purpose:** Offer an optional short evening version without displacing the
  morning routine.
- **Eyebrow:** OPTIONAL
- **Title:** An optional evening version

**A. FINAL READER-FACING COPY**

The morning routine is the heart of this guide. Some people find that a short
version at night helps them set the day down before sleep. This is entirely
optional — use it only if it suits you.

**Four quiet questions**
1. What stayed with me today?
   `______________________________________________`
2. What became a little clearer?
   `______________________________________________`
3. What can I release until tomorrow?
   `______________________________________________`
4. What is one thing I want to remember?
   `______________________________________________`

> Keep it short — a few minutes is plenty. If mornings are all you have room
> for, that is completely fine.

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Ivory page with a soft dusk/low-light motif to
  distinguish it from the morning pages (decorative). Restrained.
- **Layout:** Intro (with "optional" made clear) → four numbered prompts, 1 line
  each → gold-rule note.
- **Writing lines:** 4 single ruled lines.
- **Print / Mobile / Accessibility:** As other worksheet-style pages; ordered
  list tagged; labels are real text.
- **Compliance:** "Release until tomorrow" is plain language for setting a
  thought aside — not a therapeutic or sleep-health claim. Marked optional.
- **Asset:** Optional decorative dusk motif.

---

### Page 17 — Reflection after seven days

- **Page number shown:** 12
- **Purpose:** Help the reader take stock after a week, without implying
  guaranteed change.
- **Eyebrow:** TAKING STOCK
- **Title:** After seven mornings

**A. FINAL READER-FACING COPY**

You have spent a week giving the first few minutes of the day a little
structure. Before you decide what comes next, here are a few questions to sit
with. There are no right answers — this is just you, taking stock.

1. Which step felt most natural?
   `______________________________________________`
2. Which step took a little more effort?
   `______________________________________________`
3. Was there a thought that showed up more than once?
   `______________________________________________`
4. What helped me land on a practical decision?
   `______________________________________________`
5. What would I simplify next week?
   `______________________________________________`
6. Which part of the routine would I keep?
   `______________________________________________`

**In a sentence or two, how would you describe this past week to yourself?**
`______________________________________________`
`______________________________________________`
`______________________________________________`

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Ivory page; small Growth Circle mark. Reflection feel,
  not a test.
- **Layout:** Intro → six numbered prompts (1 line each) → a short personal
  summary field (3 lines) set apart with a bold lead-in.
- **Writing lines:** 6 single lines + 3 summary lines = 9 ruled lines.
- **Print / Mobile / Accessibility:** Ordered list tagged; summary field has a
  real label; single column.
- **Compliance:** Questions ask about the reader's *experience of the steps*,
  never whether the guide "worked" or produced a result. No transformation
  framing.
- **Asset:** Optional decorative motif.

---

### Page 18 — Closing page

- **Page number shown:** none
- **Purpose:** A warm, brand-forward close that reinforces the invitation and
  carries only verified brand details, disclaimer, and copyright.
- **Eyebrow:** (none — back-cover style)
- **Title:** One quiet thing

**A. FINAL READER-FACING COPY**

You gave the start of your days a little room this week — a few minutes to
arrive, to notice, and to choose. That is a genuinely worthwhile habit, and it
is yours now.

You do not need a perfect morning. Seven minutes is an invitation, not a rule.
Shorten it, adapt it, skip a day, and begin again. The value was never in doing
it flawlessly — it was in returning to it when you could.

Whenever a morning feels loud, you know where to start.

Framework band: `SETTLE · NOTICE · CHOOSE`

Closing line (Cormorant italic): `Settle into the day. Notice one thing. Choose where to begin.`

Brand block:
- Wordmark: `Micro Saving Daily`
- Tagline: `Small habits. Stronger money confidence.`
- Website: `microsavingdaily.com`
- Support: `support@microsavingdaily.com` *(include only if verified — see §21)*

Disclaimer (small): `This guide is educational and does not provide financial, medical, or psychological advice. Individual circumstances and results vary.`

Copyright: `© 2026 Micro Saving Daily. All rights reserved.`

**B. INTERNAL PRODUCTION NOTES**

- **Visual direction:** Back-cover style, mirroring the existing guide's close —
  deep-green full bleed, inset gold hairline frame, centered Growth Circle
  (ivory ring, gold dot), the "One quiet thing" heading in ivory, body in warm
  sand, the `SETTLE · NOTICE · CHOOSE` band, then the centered brand block at the
  foot with a gold hairline above it.
- **Layout:** Heading → body → framework band → italic closing line → gold rule
  → wordmark → tagline → website (+ support email if verified) → small
  disclaimer → copyright.
- **Print:** Dark full-bleed is acceptable here (no writing on this page); keep
  text ≥ 0.35in from edges; ensure ivory/sand text on deep-green stays high
  contrast.
- **Mobile:** Centered single column; wordmark and website remain legible.
- **Accessibility:** Heading tagged; website and email as descriptive links
  (link text is the address itself); brand mark marked decorative; contrast
  verified for ivory/sand-on-deep-green.
- **Compliance:** No affiliate offer, no product pitch, no bonus, no review-page
  CTA, no Billionaire Brain Wave. Short educational disclaimer only. Support
  email printed only after verification.
- **Asset:** Final brand visual `img-07-close` (may be native Typst; see §13).


---

## 10. Worksheet specifications

Applies to the Morning reflection worksheet (page 13) and the labeled-field
areas on the minute pages.

- **Chrome:** Reuse the existing Typst macros — `wcg-ws-open` (deep-green header
  band with worksheet name + Growth Circle), `wcg-field` (bold Manrope label +
  ruled lines), `wcg-lines(n)`, `wcg-ws-footer` (Growth Circle + `SETTLE ·
  NOTICE · CHOOSE`). Do not invent new worksheet styling.
- **Writing line height:** 0.27in per ruled line (`sp-ws-line`), matching the
  existing guide's generous handwriting spacing.
- **Rule weight/color:** 0.6pt taupe (`#D6CDB8`) horizontal rules on ivory.
- **Field spacing:** ~10pt above each field label; ~12pt above the footer.
- **Page-13 field/line map (exact):**
  | Field | Lines |
  |---|---|
  | Date | 1 (short) |
  | The thought taking up the most attention | 2 |
  | The feeling I can name | 1 |
  | What I know | 1 |
  | What I may be assuming | 1 |
  | What can wait | 1 |
  | One clear intention for today | 2 |
  | One practical next step | 2 |
  | A word I want to carry into the morning | 1 |
  | **Total** | **12 lines** |
- **Minute-page writing areas:** Minute 1, 2, 3, 5, 6 = 2 open lines each;
  Minute 4 = four labeled single-line fields; Minute 7 = 1 line.
- **Completion time:** Page 13 is sized for ~7 minutes of light handwriting; do
  not add fields beyond those listed.
- **Fillability:** Lines must also work as digital form fields if the reader
  uses a PDF fill app; keep each field mapped to a clear text label.
- **Grayscale:** All worksheet meaning is carried by labels and rules, never by
  color.

---

## 11. Seven-day tracker specification

- **Structure:** 5 columns × 7 day-rows plus a header row.
  - `Day` (Day 1–Day 7, pre-filled)
  - `Done` (checkbox)
  - `Morning in a word` (short write-in)
  - `Today's intention` (write-in)
  - `Evening word (optional)` (short write-in)
- **Checkboxes:** Use the enlarged `wcg-check` box — 17pt square, 1pt deep-green
  stroke, 2pt corner radius. One per day row, in the `Done` column.
- **Header row:** deep-green semibold (existing table header style).
- **Rules:** 0.6pt taupe horizontal rules; roomy row height for handwriting.
- **Required reassurance (verbatim):** "Missing a day does not reset your
  progress. Begin again on the next line."
- **No measurement:** no numeric scale, no 1–10 rating, no mood score, no
  clinical language. "Morning in a word" and "Evening word" are single plain
  words chosen by the reader.
- **Fit:** Must render within the live text area on one US Letter portrait page
  without horizontal scroll on phone-width viewing; keep the two "word" columns
  narrow and the intention column widest.
- **Accessibility:** tagged table, header row with column scope; the `Done`
  state is conveyed by checkbox + "Done" header, not by color; "optional" stated
  in the last column header.

---

## 12. Visual and editorial system

Reuse the Micro Saving Daily / Wealth Confidence Guide system verbatim; only the
subject changes.

- **Color tokens (from `globals.css` and the Typst engine):** deep-green
  `#0F3D2E`, evergreen `#0B241F`, ivory `#F7F3E9`, gold `#C9A15B`, sage
  `#A7BFA3`, warm-sand `#E6D8C3`, taupe `#D6CDB8`; body ink `#1E2E28`; footer
  page-number ink `#8C876F`.
- **Typography:** Cormorant Garamond for display/headings (H1 ≈ 29pt, H2 ≈
  16.5pt, H3 ≈ 14pt); Manrope for body at 12.5pt, leading ≈ 0.9em; italics in
  Cormorant for lead lines and taglines. No auto-hyphenation.
- **Brand mark:** the Growth Circle (ring + rising bars + gold dot), native
  Typst recreation (`wcg-logo`), inheriting `currentColor`, gold dot fixed.
- **Callouts:** markdown blockquotes render as gold-left-rule editorial boxes on
  a soft ivory/sand tint (used for "Keep it simple," disclaimers, reminders).
- **Section/framework pages:** light sage tint full-bleed (page 4), matching the
  existing framework page.
- **Cover + closing:** deep-green full-bleed with inset gold hairline frame.
- **Gold discipline:** gold is an accent only (rules, dots, eyebrows, framework
  bands, display italics) — never small body text on ivory.
- **Approved morning-oriented motifs:** sunrise/low horizon, a simple timer or
  clock, a notebook, a ceramic mug, window light/shadows, linen or paper
  texture, understated audio-wave-inspired lines, headphones (used sparingly and
  only as calm, non-product imagery).
- **Prohibited art (from the manifest, reaffirmed):** vendor product imagery,
  brains or brain scans, neurological diagrams, cash piles, coins, luxury cars,
  mansions, lottery/mystical/energy/chakra/third-eye imagery, fake charts, fake
  testimonials, medical professionals, exaggerated faces, heavy shadows, tiny
  decorative type.
- **Density:** one principal lesson or worksheet per page; spacious; writing
  room prioritized over decoration.

---

## 13. Image-production dependencies

Images are **not** produced in this task. This section specifies what must be
produced later and which pages feed the homepage visual system. Follow the
existing manifest rules: 300 DPI, brand palette only, grayscale-safe, text ≥
0.35in from edges, prohibited-art list enforced. Suggested IDs follow the
existing `img-##` convention within a new guide-scoped set.

**Pages required for the homepage / mockups**

| # | Page name | Homepage / mockup use | Likely crop | Aspect | Text that must stay readable | Treatment | Dependency |
|---|-----------|-----------------------|-------------|--------|------------------------------|-----------|------------|
| img-01-cover | Page 1 — Cover | Hero cover + 3D mockup + bundle | Full page | 17:22 portrait (2550×3300) | Title, subtitle, tagline, brand line | Portrait cover; also a 3D upright mockup and a flat cover | Final cover art produced first; all mockups derive from it |
| img-03-overview | Page 5 — Seven-minute routine | "What's inside" preview band | Full page or wide band | ~16:9 landscape crop of the table | Minute names + step column | Flat page render / device frame | Page 5 rendered PDF |
| img-04-worksheet | Page 13 — Morning reflection worksheet | "What's inside" worksheet visual | Full page | 2:3 portrait | Worksheet title + field labels | Flat page render; optional 2-up spread | Page 13 rendered PDF |
| img-05-tracker | Page 14 — Seven-day tracker | Trust/"printable tracker" visual | Full page | 2:3 portrait | "Seven-day tracker" + column headers | Flat page render | Page 14 rendered PDF |
| img-06-routine-card | Page 15 — one-minute card | "One-page routine card" visual | Cropped card region | ~3:2 landscape | The two one-minute questions | Card / flat-lay crop | Page 15 rendered PDF (card block) |
| img-07-bundle | Composite of the above | "Everything you get" bundle shot | Composite | ~3:2 landscape | Cover + worksheet + tracker legible | Bundle mockup (cover + sheets) | Requires cover + pages 13–15 finals |

**In-guide decorative/functional visuals** (small, native Typst preferred; alt
text noted in §16): page 2 welcome motif, page 4 three-movement motif, each
minute-page motif, page 16 dusk motif, page 18 final brand visual. These may be
rendered as native Typst art (as the existing guide does) rather than external
image files, which keeps text selectable and files small.

**Filenames** (lowercase, hyphenated; see also §18): `img-01-cover.png`,
`img-03-overview.png`, `img-04-worksheet.png`, `img-05-tracker.png`,
`img-06-routine-card.png`, `img-07-bundle.png`.

---

## 14. Print-production specification

Verified against `_quarto.yml` and `styles/ebook-template.typ`.

- **Page size / orientation:** US Letter (8.5×11in), portrait.
- **Margins:** Quarto config sets x 1.1in / y 1in; the Typst engine uses x 1.3in
  / y 1.0in for a calmer line length. **Adopt the same values as the existing
  guide** for consistency.
- **Body type:** Manrope 12.5pt, leading ≈ 0.9em (visual ~1.5).
- **Headings:** Cormorant Garamond — H1 ≈ 29pt (with a short gold rule above),
  H2 ≈ 16.5pt, H3 ≈ 14pt.
- **Writing lines:** 0.27in line height; 0.6pt taupe rules.
- **Checkboxes:** 17pt square, 1pt deep-green stroke.
- **Bleed:** Not required — this is a digital-first, home-printable PDF. The
  deep-green full bleed appears only on the cover and closing pages (no writing).
  Keep all text ≥ 0.35in from every edge.
- **Contrast / ink:** Body ink `#1E2E28` on ivory. Avoid full-bleed dark
  backgrounds on any writing-heavy page. Sage/sand tints kept light for low ink
  and high text contrast.
- **Grayscale:** Every page must read clearly with no color; meaning never
  depends on color alone.
- **Page numbers:** Manrope 9pt, centered footer, ink `#8C876F`; numbering turns
  on at the first routine page (Minute 1) and runs through page 17; cover,
  front matter (pages 2–5 are front matter here) and closing carry no number.
  *(Decision: numbering begins at Minute 1 = shown "1"; see §21 to confirm
  whether pages 2–5 should also be unnumbered front matter, as documented, or
  numbered.)*
- **Footer treatment:** worksheet/tracker pages may also carry the `wcg-ws-footer`
  brand strip; standard pages use the plain page-number footer.
- **Printer safety:** worksheets usable on a standard home printer; no
  heavy backgrounds behind writing areas.

---

## 15. Mobile and digital-PDF specification

- **Readable text size:** body no smaller than 12pt equivalent; labels/footnotes
  no smaller than ~9pt.
- **Single column:** all reading pages are single-column; no multi-column text.
- **Tables:** the overview (page 5, 4 columns) and tracker (page 14, 5 columns)
  are the only tables; keep column text short so neither requires horizontal
  scrolling at phone width.
- **Selectable text:** all body copy, prompts, and labels are real text — never
  baked into images. Native Typst art keeps text live.
- **Links:** website and email on the closing page are tappable with descriptive
  link text (the address itself). Large enough tap targets.
- **Bookmarks:** include PDF bookmarks for major sections — Cover, Welcome, What
  this guide is, Settle · Notice · Choose, The routine, Minutes 1–7 (or a single
  "The seven minutes" parent with 7 children), Morning reflection worksheet,
  Seven-day tracker, Missed-a-day restart, Evening variation, Reflection after
  seven days, Closing.
- **Reading order:** logical top-to-bottom order matching the visual layout.
- **Document title:** descriptive metadata title "The 7-Minute Morning Clarity
  Reset" (see §16).
- **File size:** target well under the ceiling in §18 so it opens quickly on
  mobile data.

---

## 16. Accessibility specification

Implementation checklist (WCAG 2.1 AA-aligned; Section 508 / PDF-UA principles):

- [ ] Export a **tagged** PDF (not an untagged/flattened export).
- [ ] Correct **heading hierarchy** — one H1 per page; H2/H3 nested logically.
- [ ] **Document title** metadata set to "The 7-Minute Morning Clarity Reset."
- [ ] **Language** metadata set to `en-US`.
- [ ] **Logical reading order** matches the visual order on every page.
- [ ] **Alt text** on every functional image (cover, mockup-source renders when
  used as images, brand visual). Suggested alt:
  - Cover: "Cover of The 7-Minute Morning Clarity Reset by Micro Saving Daily, in
    deep green and warm ivory with a small growth-circle mark."
  - Closing brand visual: "Micro Saving Daily growth-circle mark with the tagline
    'Small habits. Stronger money confidence.'"
- [ ] **Decorative** motifs (page/minute motifs, rules, worksheet lines) marked
  as artifacts / decorative so they are skipped by screen readers.
- [ ] **Contrast** meets minimums: body 4.5:1 (ivory/`#1E2E28`), large text 3:1;
  gold never used for small body text.
- [ ] **Descriptive link text** — the visible link is the address (no "click
  here").
- [ ] **Table headers** tagged for the overview and tracker tables (header row,
  column scope).
- [ ] **No color-only meaning** — checkbox state, panel meaning, and field
  categories are conveyed by text/shape.
- [ ] **Selectable text** throughout; no critical text inside images.
- [ ] **Accessible fields/checkboxes** — every checkbox and writing field has a
  visible text label.
- [ ] **Bookmarks** for all major sections (per §15).
- [ ] Run an **accessibility check** (e.g., a PDF/UA checker) after export and
  remediate flagged issues.
- For prompts/trackers specifically: labels are understandable without relying on
  layout alone; decorative rules do not interrupt the tag reading order.

---

## 17. Compliance specification

- **Educational only.** The guide provides reflection prompts and structure. It
  is not financial, investment, tax, legal, medical, or psychological advice, and
  states so on page 3 and briefly on page 18.
- **No prohibited content anywhere:** no Billionaire Brain Wave, no vendor swipe
  language, no affiliate product or link, no wealth attraction, no guaranteed
  income, no brain/neuroscience/hippocampus references, no medical or memory
  claims, no manifestation, no urgency or scarcity, no testimonials, no
  before-and-after results.
- **Standalone value.** Complete and useful with no purchase; nothing in the
  guide is conditional on buying anything.
- **Qualified language.** All statements about what the routine offers use
  hedged phrasing ("designed to help," "may help," "gives you a place to,"
  "invites you to"). No promised personal outcome.
- **Banned vocabulary** (see §6) is excluded from all reader-facing copy.
- **Disclaimer baseline.** Page 3's disclaimer is adapted from the approved
  Wealth Confidence "Before you begin" language and preserves its legal meaning;
  page 18 carries a short educational disclaimer plus copyright.
- **Items to flag for legal review** (see §21): the exact wording of the page-3
  and page-18 disclaimers; whether to print the support email in-guide; the
  copyright year.
- This plan is not legal advice; a qualified reviewer should confirm the
  disclaimer language before publication.

---

## 18. Delivery and file-naming specification

- **PDF filename:** `the-7-minute-morning-clarity-reset.pdf` (lowercase,
  hyphenated; matches the existing `the-wealth-confidence-guide-*.pdf` pattern).
- **Image filenames:** `img-01-cover.png`, `img-03-overview.png`,
  `img-04-worksheet.png`, `img-05-tracker.png`, `img-06-routine-card.png`,
  `img-07-bundle.png` (300 DPI print sources; export web-optimized WebP/PNG
  variants for the homepage from these).
- **Delivery method:** **hosted download recommended** over email attachment —
  better deliverability, no attachment-size penalties, easy to update, and it
  keeps the delivery email light. Serve from the site (or a trusted host) behind
  the opt-in confirmation / thank-you flow.
- **File-size ceiling:** target **≤ 3 MB** (hard ceiling 5 MB). Native Typst art
  keeps size low; if raster mockups are embedded, compress appropriately.
- **Download-button label:** `Download the Free Guide` (matches the homepage
  plan's CTA language).
- **Delivery-email subject:** `Your 7-Minute Morning Clarity Reset`
- **Preview text:** `Your free guide is ready — seven quiet minutes to start the day with one clear step.`
- **Accessible link label / fallback wording (for the delivery email):**
  `Download The 7-Minute Morning Clarity Reset (PDF)` — descriptive link text,
  not "click here." Fallback line: `If the button doesn't work, copy and paste
  this link into your browser: [download URL]`.
- **Note:** No MailerLite configuration is performed here. The homepage plan's
  `OptInForm` → server route → thank-you flow governs actual delivery.

---

## 19. Production sequence

1. Read `node_modules/next/dist/docs/` only if any web integration is later
   attempted (not needed to build the PDF).
2. Scaffold a sibling Quarto project (recommended: `ebook/morning-clarity-reset/`)
   reusing the existing `styles/ebook-template.typ`, `_quarto.yml` settings,
   fonts, and brand SCSS. Do not modify the Wealth Confidence Guide project.
3. Create the manuscript chapters from Section 9 (front matter, framework,
   overview, seven minute pages, worksheet, tracker, restart, evening,
   reflection, closing).
4. Reuse the worksheet/tracker/cover/closing macros; add only guide-specific
   native motifs.
5. Build the PDF (Typst), plus EPUB/HTML if desired, via the existing build
   script pattern.
6. Produce final cover art and the five mockup-source page renders (§13); derive
   homepage WebP/PNG variants.
7. Run QA (§20): claims audit, readability, link check, visual page renders,
   accessibility check.
8. Verify filename, size, bookmarks, metadata, and a print test + mobile test.
9. Hold for approval before any website integration or email wiring.

---

## 20. Quality-assurance checklist

**Content**
- [ ] All 18 pages present; any structural change documented (none planned).
- [ ] No placeholders, TBD, or lorem ipsum.
- [ ] No duplicate sections.
- [ ] Every prompt is actionable.
- [ ] Page-13 worksheet completable in ~7 minutes.
- [ ] No unsupported claims.
- [ ] No affiliate product references.
- [ ] No vendor swipe language.
- [ ] Standalone value is clear.

**Brand**
- [ ] Micro Saving Daily attribution correct.
- [ ] Growth Circle mark used correctly.
- [ ] Palette and typography consistent with the existing guide.
- [ ] Funnel 1 not copied verbatim (distinct framework: Settle · Notice · Choose).
- [ ] Reads unmistakably as the same brand and domain.

**Print**
- [ ] Adequate margins (≥ 0.35in text safety; 1.0–1.3in page margins).
- [ ] Readable font sizes (body 12.5pt).
- [ ] Usable writing space (0.27in lines).
- [ ] Checkboxes print clearly (17pt).
- [ ] No high-ink backgrounds behind writing.
- [ ] Grayscale remains understandable.

**Digital**
- [ ] Text selectable.
- [ ] Links correct and descriptive.
- [ ] PDF Title metadata set.
- [ ] Bookmarks included.
- [ ] Reading order correct.
- [ ] Mobile readability checked.

**Accessibility**
- [ ] Tagged headings.
- [ ] Alt text on functional images; decorative marked decorative.
- [ ] Contrast meets minimums.
- [ ] Descriptive link labels.
- [ ] Language metadata set (en-US).
- [ ] No color-only meaning.
- [ ] Decorative elements excluded from reading order.

**Compliance**
- [ ] No wealth claims.
- [ ] No health claims.
- [ ] No brain/neuroscience claims.
- [ ] No guaranteed results.
- [ ] No testimonials.
- [ ] No medical framing.
- [ ] No fake urgency or scarcity.
- [ ] No affiliate promotion / no Billionaire Brain Wave.
- [ ] Disclaimer present (pages 3 and 18).

**Production**
- [ ] Page count confirmed (18).
- [ ] Filenames confirmed.
- [ ] Source file retained.
- [ ] PDF export tested.
- [ ] File size checked (≤ 3 MB target).
- [ ] Hyperlinks tested.
- [ ] Page previews verified.
- [ ] Print test completed.
- [ ] Mobile test completed.

---

## 21. Open questions and decisions requiring approval

1. **Support email in-guide.** `support@microsavingdaily.com` is defined in
   `src/components/legal.tsx`. The existing guide's closing page shows only the
   website, not an email. **Recommendation:** show website only on page 18 and
   omit the email unless the inbox is confirmed monitored. Confirm.
2. **Disclaimer wording (legal review).** Pages 3 and 18 adapt the approved
   Wealth Confidence disclaimer. **Recommendation:** have a qualified reviewer
   confirm the exact wording before publication; keep the established meaning.
3. **Front-matter numbering.** This plan treats pages 1–5 and 18 as unnumbered
   (numbering starts at Minute 1), mirroring the existing guide's front-matter
   convention. Confirm whether pages 2–5 should remain unnumbered front matter
   or be numbered.
4. **Project location / naming.** Recommended sibling project
   `ebook/morning-clarity-reset/`. Confirm the directory name and that it should
   be a separate Quarto project (recommended) rather than added to the existing
   guide project.
5. **Copyright year.** Plan uses `© 2026`. Confirm the correct year at publish
   time.
6. **In-guide art approach.** Recommendation: render the small per-page motifs as
   native Typst art (keeps text selectable, files small, brand-consistent) and
   reserve external image production for the cover and homepage mockup sources.
   Confirm.

No other open questions; remaining details are resolved in this document.

---

## 22. Final recommendation

Proceed to production of **The 7-Minute Morning Clarity Reset** exactly as
specified here: an 18-page, US Letter, Micro Saving Daily guide built on the
existing Quarto + Typst system, reusing the brand's tokens, typography,
worksheet macros, cover, and closing treatments. The manuscript in Section 9 is
final and complete; a designer or implementation agent can build the PDF without
inventing content.

The guide expands the homepage's Settle · Notice · Choose framework into a
seven-step, seven-minute routine, delivers real standalone value, and stays
strictly educational and affiliate-free. It reinforces trust in Micro Saving
Daily and earns the reader's willingness to open the next email — without any
product pitch.

Recommended immediate next steps, pending approval of the open questions in
§21: scaffold the sibling ebook project, implement the manuscript, produce the
cover and the five mockup-source page renders, and run the full QA and
accessibility pass before any website or email integration.

Do not build, render, produce images, wire delivery, add any affiliate link, or
commit/push until explicitly instructed.
