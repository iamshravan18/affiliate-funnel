@AGENTS.md

# Micro Saving Daily — project guidance

Premium financial-wellness **lead-capture funnel** for the free lead magnet
**The Wealth Confidence Guide**. Domain: microsavingdaily.com. The homepage's
only goal is a free-guide opt-in — it is not an app, blog, SaaS dashboard,
bank site, or affiliate bridge page.

## Brand
- Promise: Build stronger money confidence one small choice at a time.
- Tagline: Small habits. Stronger money confidence.
- Method: Notice. Pause. Repeat.
- Palette tokens (`src/app/globals.css` `@theme`): deep-green `#0F3D2E`,
  evergreen `#0B241F`, ivory `#F7F3E9`, gold `#C9A15B`, sage `#A7BFA3`,
  warm-sand `#E6D8C3`, taupe `#D6CDB8`.
- Fonts: Cormorant Garamond (serif headings), Manrope (sans / body / UI).
- Logo: Growth Circle mark (see `GrowthCircleMark.tsx`).
- Assets: use the typed manifest at `src/content/wealth-confidence-assets.ts`
  (prefer the WebP variants). Do not use `public/images/wealth-confidence/_legacy/`.

## CTA strategy (approved)
- Header CTA: "Get the Free Guide"
- Hero primary CTA: "Get My Free Guide →"
- Hero secondary link: "See what's inside →" (anchors to the What's Inside
  section, `#inside`)
- Mid-page CTA, placed after the What's Inside guide preview:
  "Download the Free Guide" (anchors to the final opt-in, `#get-the-guide`)
- Final opt-in form button: "Send Me the Guide" (do not change)
- Shared button: `CtaButton` in `src/components/motion.tsx`
  (`size="sm" | "md"`, `tone="solid" | "outline"`). Solid = deep-green
  background, ivory text, subtle soft-gold hover ring/glow, visible gold
  `focus-visible` outline. Use `size="sm"` for the compact header CTA so it
  never grows to hero size.
- Keep CTAs calm, premium, understated, and focused only on the free guide.

## Compliance (homepage)
- No affiliate/product mentions; no Billionaire Brain Wave, Pyramid Wealth
  Frequency, or ClickBank; no income claims, wealth guarantees, or
  manifestation language.
- No fake urgency, fake testimonials, or fake stats; no aggressive
  direct-response red/orange/neon styling.
- Gold is never used for small low-contrast body text on ivory (accents only).
- One `<h1>` only; preserve semantic landmarks and heading order.

## Thank-you page (approved — Phase 5A)
Route: `/wealth-confidence-guide/thank-you`
(`src/app/wealth-confidence-guide/thank-you/page.tsx`; components under
`src/components/wealth-confidence/thank-you/`).
- The guide is **always delivered / presented before** the affiliate resource.
  Strategic order: confirmation → guide access → immediate Notice·Pause·Repeat
  action → soft mindset transition → affiliate card.
- Balance is approximately **70% Micro Saving Daily / 30% affiliate bridge**.
- The **only** affiliate offer on this page is **The Billionaire Brain Wave**.
  Pyramid Wealth Frequency is reserved for later testing — not this page.
- It must be framed as an **optional third-party audio-based mindset/focus
  resource**. No financial, wealth, income, manifestation, medical, or
  neurological claims/guarantees, and never repeat the vendor's sales claims.
- **Inline affiliate disclosure is mandatory** (directly under the affiliate
  CTA, readable — never tiny gold text), in addition to the footer disclaimer.
- The **affiliate CTA must not visually overpower the guide CTA**: guide CTA is
  the solid brand button; affiliate CTA uses the lighter outline tone. Affiliate
  card sits below the fold on mobile.
- Page is **`noindex, nofollow`**; the affiliate product is excluded from the
  SEO title/description. Outbound affiliate link opens in a new tab with
  `rel="sponsored noopener noreferrer"`.
- Tracking is data-attribute-only for now (`data-event="…"`:
  thank_you_page_view, guide_download_click, day_one_open_click,
  affiliate_bridge_view, affiliate_offer_click, affiliate_offer_decline) — no
  analytics platform wired yet.

## Phase notes
- Complete: Phase 1 (inspect), Phase 2 (assets organized/optimized + manifest),
  Phase 3 (homepage build), Phase 4 (browser/responsive QA polish),
  Phase 4.1 (CTA conversion polish), Phase 5A (thank-you page + affiliate
  bridge, honest placeholders).
- Built: Resend integration for the opt-in routes. Funnel 1 creates/updates
  Resend contacts, adds them to `RESEND_FUNNEL1_SEGMENT_ID`, and sends the
  `wealth_confidence_guide_signup` event so the Resend Automation owns guide
  delivery. Funnel 2 creates/updates Resend contacts, adds them to
  `RESEND_FUNNEL2_SEGMENT_ID`, and sends the `morning_clarity_reset_signup`
  event so its Resend Automation owns delivery. The thank-you page intentionally
  does not expose a direct guide download button. Affiliate link tracking param
  is not applied (custom vendor-domain hoplink; confirm syntax first).


## Ebook: The Wealth Confidence Guide (Phase 5A research/authoring)
Evidence-informed lead-magnet workbook. Project lives **only** under
`ebook/wealth-confidence-guide/` (do not scatter ebook files into the website).

- **Title / subtitle:** "The Wealth Confidence Guide" — "Simple daily
  money-awareness shifts for calmer financial decisions." Framework: Notice.
  Pause. Repeat. 28–34 pages (built: **34**).
- **Audience:** publicly age-inclusive; **never** labelled by age. Internal
  reader profile is a US adult ~45–70. **Mature-reader-first accessibility**:
  Manrope 12pt body, Cormorant Garamond headings, generous spacing, strong
  contrast, no gold body text, grayscale-usable worksheets, one H1 per chapter.
- **Research hierarchy:** US gov/regulatory → systematic reviews/meta-analyses →
  peer-reviewed behavioural/consumer-psych → universities → recognised
  nonprofits. Discovery via **OpenAlex** (`OPENALEX_API_KEY` read from env only,
  never printed/committed); metadata **verified via Crossref/official domains**.
- **Evidence matrix is mandatory:** every research claim must appear (verified)
  in `research/evidence-matrix.csv` before it enters the manuscript. 18 sources
  (16 peer-reviewed, 2 government). **No invented citations, authors, DOIs, IDs,
  or numbers.** Every numerical claim is cited.
- **No unsupported/overstated claims.** Hedged language only ("research
  suggests", "is associated with"). **No financial promises**, **no medical/
  neurological claims**, no manifestation language.
- **No affiliate offer in the core ebook** (RULE 8): no Billionaire Brain Wave,
  Pyramid Wealth Frequency, or ClickBank anywhere in the guide. The closing page
  may only invite readers to continue the guide / return to microsavingdaily.com
  / watch email for future educational resources.
- **Publishing:** Quarto (bundles Pandoc + Typst) → PDF (Typst), EPUB, HTML.
  Tools install to `~/.local` (`quarto`, `vale`, `lychee`); fonts in
  `assets/fonts`. Rebuild via `scripts/build_ebook.sh`.
- **Final images are generated separately** (RULE 9): the repo ships
  dimensionally-correct **branded placeholders** + a complete
  `assets/image-manifest.md` (18 assets, briefs, alt text). Do not invent stock
  art or fake product mockups.
- **QA:** `scripts/verify_citations.py`, `audit_claims.py`, `check_readability.py`,
  `render_pdf_pages.py`; reports in `qa/`. Citation audit clean; Vale 0 errors;
  Lychee links reachable; PDF pages visually inspected via PyMuPDF renders.
- **No website integration before manual approval:** do NOT copy the PDF into the
  site's public download directory or enable a download button until approved.


## Ebook V5.1 (final release candidate)
- **V5.1 is the final release candidate**, built from the approved **V5** source
  of truth. **V5 and V5.0 remain archived** (`ebook/wealth-confidence-guide/releases/v5/`,
  `.../releases/v5.0/`). **Old releases must never be deleted or overwritten.**
- **25-page structure retained** (affiliate-free; 17 numbered superscript
  citations; 17 references; seven lessons; seven worksheets; no author-year
  citations; no font shrinking; no reduced writing space).
- **Numbered superscript citations retained.** The citation helper in
  `styles/ebook-template.typ` uses a word joiner
  (`#let super(body) = { sym.wj; __wcg-super-orig(body) }`) so markers stay glued
  to the preceding word and never wrap to their own line.
- **Seven native Typst lesson illustrations** were added (prior phase); **page-20
  native card icons** (moon/clock/bolt/star/loop) added via `wcg-moment-icon`.
- **No affiliate content in the ebook** (no Billionaire Brain Wave / Pyramid
  Wealth Frequency / ClickBank).
- **PDF metadata requirements** (set by `scripts/finalize_pdf.py`, PyMuPDF):
  Title "The Wealth Confidence Guide", Author "Micro Saving Daily", a Subject and
  Keywords, `/Lang = en-US`, and a left-to-right reading-direction hint.
- **Bookmark requirements:** clean two-level outline — L1 "The Wealth Confidence
  Guide" → p1; L2: Before You Begin→3, Notice. Pause. Repeat.→4, Day 1→5, Day 2→7,
  Day 3→9, Day 4→11, Day 5→13, Day 6→15, Day 7→17, Seven-Day Reflection→19, Common
  Spending Moments→20, Automatic Spending Audit→21, Compassionate Restart→22, Your
  Next 30 Days→23, Sources & References→24, One Last Thing→25.
- **The PDF is authoritative.** EPUB and HTML do not reproduce all native Typst
  worksheet/card/reference layouts.
- **Outputs:** `output/the-wealth-confidence-guide-v5.1.{pdf,epub,html}`,
  `output/html/index.html`; release bundle at `releases/v5.1/` (PDF/EPUB/HTML +
  QA reports + 25 page renders + source snapshot + build notes).
- **Website integration happens only after approval:** do NOT copy the PDF into
  the site's public download directory or enable the download button until
  explicitly approved.


## Second Funnel — Billionaire Brain Wave

The full strategy and planning memory for the second funnel is stored at:

docs/second-funnel-billionaire-brain-wave-plan.md

Read that file before researching, planning, designing, or building any part of the second funnel.

This funnel is separate from Micro Saving Daily.

Do not add Billionaire Brain Wave content, affiliate links, or vendor imagery to The Wealth Confidence Guide or the existing Micro Saving Daily funnel.

Do not begin implementation without first verifying the current ClickBank marketplace data, affiliate terms, allowed traffic sources, and vendor compliance requirements.

Verified constraints (July 2026 research update — full detail in the memory file):

- Vendor-provided email swipes are research-only and must not be copied into ads, emails, advertorials, landing pages, review pages, or social content.
- Any product-focused page must be a clearly disclosed independent REVIEW page (REVIEW in title, URL, and cover graphics).
- Paid ads must not use the product name, and product-name/PPC bidding is prohibited.
- Do not use vendor imagery (including background-swapped versions) without written affiliate-manager permission.
- Do not use testimonials, health/brain-growth claims, wealth guarantees, fake urgency, or conspiracy/institutional claims. State vendor claims only as attributed, never as fact.
- Read the full memory file (docs/second-funnel-billionaire-brain-wave-plan.md) before any second-funnel work.
