# Funnel 2 Homepage Plan — Micro Saving Daily (7-Minute Morning Clarity Reset)

Status: **Planning + final approved copy.** No code has been built. Do not
implement without following the guardrails in
`docs/second-funnel-billionaire-brain-wave-plan.md` and `CLAUDE.md`.

## Brand decision (LOCKED)

**Micro Saving Daily is the parent brand for Funnel 2.** The earlier
separate-brand option ("Morning Mindset Reset" as its own standalone identity)
is **removed and closed.** Funnel 2 is now a second lead magnet published
**under the Micro Saving Daily brand**, reusing its **exact design tokens and
components** — the same logo, Growth Circle mark, palette, typography, spacing,
motion, form, footer, and legal chrome. "The 7-Minute Morning Clarity Reset" is
a **product/campaign name**, not a separate brand.

Reconciliation with the strategy memo: `second-funnel-billionaire-brain-wave-plan.md`
previously recommended a separate brand to protect Micro Saving Daily's trust.
That recommendation is **superseded** for two reasons: (1) the live Micro Saving
Daily thank-you page (`/wealth-confidence-guide/thank-you`) **already** bridges
to the Billionaire Brain Wave affiliate offer via `AffiliateResourceCard`, so
the parent brand is already associated with this offer in a compliant, isolated
way; and (2) the Funnel 2 homepage itself carries **no affiliate content**, so
using the parent brand on an affiliate-free educational lead magnet does not add
trust risk. The affiliate offer stays quarantined on the separate, clearly
disclosed independent review page — never on this homepage.

This plan describes the **lead-magnet opt-in homepage** for **The 7-Minute
Morning Clarity Reset**, a Micro Saving Daily guide. It reuses the **exact
design system** of the existing Micro Saving Daily funnel — one shared component
library, token set, typography scale, spacing rhythm, motion language, form
behaviour, and legal chrome.

Important scope boundaries (from prior approved memory):

- This homepage is an **opt-in / lead-capture page only**. It contains **no
  affiliate offer, no product name (Billionaire Brain Wave), no vendor imagery,
  and no wealth/brain/health claims.** The affiliate offer appears only later,
  on a separate clearly-disclosed independent **review page** — never here.
- This plan does not modify the existing Micro Saving Daily funnel, its
  components, or The Wealth Confidence Guide. Funnel 2 is an **additive** second
  lead magnet at its own route under the same brand.
- Because the design system is shared, Funnel 2 reuses the **same brand
  identity** (Micro Saving Daily logo, Growth Circle mark, wordmark) and the
  **same seven design tokens** — there is no separate palette, logo, or motif.

---

## Part 1 — Design system audit (source of truth to preserve)

Extracted from the live Micro Saving Daily funnel. File references are the
canonical implementations Funnel 2 must mirror.

### 1.1 Tech stack

- **Next.js 16.2.10** (App Router), **React 19.2.4**, **Tailwind CSS v4**
  (`@import "tailwindcss"` + `@theme` tokens in `src/app/globals.css`; no
  `tailwind.config.js`), **framer-motion 12** for restrained motion.
- Fonts loaded via `next/font/google` in `src/app/layout.tsx`.
- Per repo rule (`AGENTS.md`): **read `node_modules/next/dist/docs/` before
  writing any Next.js code** — this is a modified Next.js with breaking changes.
- `next/image` used for every raster asset with explicit `width`/`height`
  (prevents CLS); SVG logo served with `unoptimized`.

### 1.2 Color tokens — `src/app/globals.css` `@theme`

| Token | Hex | Primary role |
|-------|-----|--------------|
| `deep-green` | `#0F3D2E` | Headings, solid CTA background, primary marks |
| `evergreen` | `#0B241F` | Body text (with opacity), dark panels, footer |
| `ivory` | `#F7F3E9` | Page background, text on dark panels |
| `gold` | `#C9A15B` | **Accents only** — eyebrows, dividers, marker dots, italic taglines on dark, focus outlines, underline decoration |
| `sage` | `#A7BFA3` | Soft fills/halos (`sage/20`, `/25`, `/45`), method cards |
| `taupe` | `#D6CDB8` | Input borders, card borders (`taupe/60`) |
| `warm-sand` | `#E6D8C3` | Section-tint backgrounds (`warm-sand/40`), image-frame borders |

Usage rules to preserve:
- Body text is `evergreen` at opacity steps: `/90` `/85` `/80` `/75` `/70` `/60`.
- **Gold is never used for small low-contrast body text on ivory** — accent only.
- Default page: `bg-ivory text-evergreen` (set on `<body>` in `layout.tsx`).
- `color-scheme: light` only; no dark mode.

### 1.3 Typography

- **Serif:** Cormorant Garamond → `--font-cormorant` → `font-serif`
  (weights 500/600/700). Used for all headings and italic taglines.
- **Sans:** Manrope → `--font-manrope` → `font-sans` (default body).
- Scale (preserve exactly):
  - **H1 (hero):** `font-serif font-semibold tracking-[-0.01em] text-deep-green`,
    `text-4xl sm:text-5xl lg:text-[3.35rem]`, `leading-[1.08]`. One `<h1>` per page.
  - **H2 (section):** `font-serif font-semibold tracking-[-0.01em] text-deep-green`,
    `text-3xl sm:text-4xl`, `leading-tight`.
  - **H3 (card):** `font-serif font-semibold text-deep-green`, `text-2xl`
    or `text-[1.35rem]`.
  - **Eyebrow / kicker:** `text-xs font-semibold uppercase tracking-[0.24em] text-gold`
    (variants `tracking-[0.18em]`, `[0.14em]`).
  - **Body / intro:** `text-lg leading-relaxed text-evergreen/75`.
  - **Card body:** `text-base leading-relaxed text-evergreen/80–85`.
  - **Italic tagline:** `font-serif italic text-gold` (on dark panels).

### 1.4 Spacing & layout

- **Containers:** `mx-auto px-6` with max-width by context:
  `max-w-6xl` (standard sections), `max-w-5xl` (final opt-in), `max-w-4xl`
  (affiliate/review card), `max-w-3xl` (legal), `max-w-2xl` (centered heading blocks).
- **Section vertical padding:** `py-20 sm:py-24` or `py-20 sm:py-28`;
  hero uses `py-16 sm:py-20 lg:py-28`.
- **Anchored sections:** `scroll-mt-24` (offsets the sticky header; `html` uses
  `scroll-behavior: smooth`, no global `scroll-padding-top` by design).
- **Two-column grids:** `lg:grid-cols-2` or asymmetric
  `lg:grid-cols-[1.05fr_0.95fr]` / `[0.98fr_1.05fr]`, `gap-12 lg:gap-16`.
- **Alternating section backgrounds** (rhythm to preserve):
  `ivory → warm-sand/40 → ivory → warm-sand/40 → evergreen (belief) → warm-sand/40 (final)`.
- Radii: cards `rounded-2xl` / `rounded-3xl`; inputs `rounded-xl`; buttons/badges `rounded-full`.
- Shadows: `shadow-md`/`shadow-xl shadow-deep-green/10`; image frames add `ring-1 ring-deep-green/5`.

### 1.5 Reusable components (`src/components`)

| Component | File | Reuse strategy for Funnel 2 |
|-----------|------|------------------------------|
| `CtaButton` | `motion.tsx` | **Reuse as-is.** `tone="solid"\|"outline"`, `size="sm"\|"md"`, rounded-full, scale hover/tap, gold focus ring, respects reduced motion. |
| `Reveal` / `RevealMedia` | `motion.tsx` | **Reuse as-is.** Opacity + translateY only, once-on-scroll, ease `[0.22,1,0.36,1]`, honors `prefers-reduced-motion`. |
| `OptInForm` | `OptInForm.tsx` | **Reuse pattern.** first name + email, optimistic submit, MailerLite TODO. Funnel 2 needs its own instance/route + brand copy. |
| `GrowthCircleMark` | `wealth-confidence/GrowthCircleMark.tsx` | **Do NOT reuse the mark itself** (brand-specific). Funnel 2 needs its own brand motif at the same size conventions (`h-4/9/10 w-*`, `currentColor` + gold dot). |
| `LegalPage` + chrome | `legal.tsx` | **Reuse the wrapper/prose pattern**; swap `BRAND`, `CONTACT_EMAIL`, `EFFECTIVE_DATE`. |
| `SiteHeader` / `SiteFooter` | `wealth-confidence/*` | **Clone structure**, re-skin with Funnel 2 brand + nav anchors. |
| Section components | `wealth-confidence/*` | **Clone structure/classes**, replace copy + imagery. |
| `AffiliateResourceCard` | `wealth-confidence/thank-you/*` | Pattern reference for the **review page** (out of scope for this homepage), incl. inline disclosure, outline CTA, CSS/SVG visual. |

### 1.6 Motion language (`motion.tsx`)

- Only `opacity` + `transform` (translate/scale) are animated — never
  width/height/top/left.
- Reveals fire **once** on scroll-in (`viewport={{ once: true, amount: 0.2–0.25 }}`),
  ease `[0.22,1,0.36,1]`, duration `0.6`/`0.7`, optional `delay` for stagger.
- Above-the-fold hero copy/CTA render immediately (no entrance animation) for LCP.
- All motion collapses to no-transform under `prefers-reduced-motion`.

### 1.7 Form behaviour (`OptInForm.tsx`)

- Client component (`"use client"`), `noValidate`, `onSubmit` prevents default.
- Fields: **First name** (`type=text`, `autoComplete="given-name"`, required)
  and **Email** (`type=email`, `autoComplete="email"`, required).
- Inputs: `rounded-xl border border-taupe bg-ivory px-4 py-3`, focus
  `focus:border-deep-green focus:ring-2 focus:ring-deep-green/40`; labels
  `text-sm font-medium text-deep-green` with `htmlFor`.
- Submit: full-width `rounded-full bg-deep-green text-ivory px-8 py-4`, scale
  hover/tap, gold focus outline.
- **Not wired to a backend yet** — optimistic `submitted` state renders a
  `role="status"` sage panel. TODO(MailerLite): POST to a server route reading
  the API key from env, then redirect to the thank-you page on success.
- Microcopy under the button, e.g. `Free guide • No spam • Unsubscribe anytime`.

### 1.8 Image system (`src/content/wealth-confidence-assets.ts`)

- **Typed manifest** is the single source of truth: each asset has
  `key, png, webp, alt, width, height, aspectRatio, orientation,
  recommendedSection, notes`. Components import from the manifest — never
  hard-code paths.
- Every raster ships **PNG (archival) + WebP (delivery, preferred)**; pass true
  pixel `width`/`height` to `next/image` to prevent layout shift.
- Existing dimensions (for parity when producing Funnel 2 assets):

| Asset role | px | ratio | orientation |
|------------|----|-------|-------------|
| Cover (flat) | 1024×1536 | 2:3 | portrait |
| 3D mockup | 1122×1402 | 4:5 | portrait |
| Worksheet preview (wide) | 1672×941 | 16:9 | landscape |
| Complete bundle | 1536×1024 | 3:2 | landscape |
| Single worksheet page | 1024×1536 | 2:3 | portrait |
| Habit / belief card | 1536×1024 | 3:2 | landscape |
| Logo horizontal | 480×120, 600×150, 960×240 (2×), 1200×300 | 4:1 | — |
| Footer logo | 500×125 | 4:1 | — |
| Icon (PWA/social) | 512×512 | 1:1 | — |
| apple-touch | 180×180 | 1:1 | — |
| favicons | 16 / 32 / 64 + `.ico` + SVG | 1:1 | — |

- Header logo rendered at `h-8 sm:h-9` from the SVG (`unoptimized`); hero images
  use `priority` + responsive `sizes`.

### 1.9 Legal & compliance elements

- Shared `LegalPage` wrapper renders brand header (pill/rounded), title block
  with kicker + `Last updated` date, `.legal-content` prose body, evergreen footer.
- `.legal-content` prose rhythm is defined in `globals.css` (no Typography
  plugin): serif h2/h3 in deep-green, gold list markers, gold-tinted underlined links.
- Routes present so footer links resolve (required for Meta/Facebook ad review):
  `/privacy`, `/terms`, `/affiliate-disclosure`, `/disclaimer`, `/contact`.
- Constants in `legal.tsx`: `BRAND`, `CONTACT_EMAIL`, `EFFECTIVE_DATE`.
- Footer (site + legal) carries the standing disclaimer: educational content,
  not financial advice, affiliate links may earn commission at no extra cost,
  results vary / no guaranteed outcome; dynamic copyright year.
- FTC-aligned affiliate disclosure page already exists as a reuse template.

---

## Part 2 — Funnel 2 homepage plan (Micro Saving Daily)

### 2.1 Goal & positioning

- **Single goal:** email opt-in for **The 7-Minute Morning Clarity Reset** free
  guide, published under the Micro Saving Daily brand. No other conversion, no
  affiliate link, no product name (Billionaire Brain Wave) on this page.
- **Tone:** calm, credible, editorial, non-sensational — Micro Saving Daily's
  existing voice. Sell clarity, reflection, consistency, a short daily routine,
  calmer money-related thinking, and optional guided audio as a format.
- **Must not promise** (see full list in the strategy memory): wealth, becoming
  a billionaire, effortless money, brain activation, guaranteed outcomes,
  neurological/medical results.

### 2.2 Brand & design-system reuse (LOCKED — no divergence)

Funnel 2 reuses the Micro Saving Daily brand **and** design system verbatim.
There is nothing to "swap" at the brand level.

- **Reuse unchanged (identity):** the Micro Saving Daily logo
  (`brandLogoPrimary` SVG), the `GrowthCircleMark` motif, the wordmark, and the
  tagline "Small habits. Stronger money confidence."
- **Reuse unchanged (system):** all seven `@theme` tokens (deep-green,
  evergreen, ivory, gold, sage, taupe, warm-sand), the full typography scale,
  spacing rhythm, background alternation, `CtaButton`, `Reveal`/`RevealMedia`,
  the `OptInForm` pattern, `LegalPage` chrome, the image-manifest pattern, and
  all `next/image` conventions.
- **No separate palette, logo, or brand motif.** The prior palette-divergence
  option is removed. If any component needs a Funnel-2 variant, it must consume
  the **same tokens and the same components** — only content (copy + imagery)
  differs.
- **Directory / isolation (product-scoped, not brand-scoped):** keep the second
  lead magnet's files isolated but under the shared brand — new imagery under
  `public/images/morning-clarity/`, a typed manifest at
  `src/content/morning-clarity-assets.ts`, and page-specific sections under
  `src/components/morning-clarity/`. These **import** the shared brand assets
  (`GrowthCircleMark`, `brandLogoPrimary`) and shared primitives
  (`CtaButton`, `Reveal`, `OptInForm`, `LegalPage`) rather than redefining them.
  The existing Wealth Confidence funnel is left untouched.

### 2.3 Page structure (mirrors `src/app/page.tsx` section order)

Same skeleton, same background rhythm, same motion. Section-by-section mapping:

| # | Funnel 2 section | Mirrors (Funnel 1) | Background | Notes |
|---|------------------|--------------------|------------|-------|
| — | Sticky header | `SiteHeader` | `ivory/85` blur | Logo + nav (md+) + `CtaButton size="sm"` "Get the Free Guide" |
| 1 | Hero | `Hero` | ivory + gradient | H1 + subcopy + primary CTA + "see what's inside" link + trust line + lead-magnet visual |
| 2 | Problem | `ProblemSection` | `warm-sand/40` | 3 pain cards — morning mental clutter framing |
| 3 | Method (7-minute) | `MethodSection` | ivory | The reset framework as small steps |
| 4 | What's inside | `WhatsInsideSection` | `warm-sand/40` | Inclusions list + guide preview + mid-page CTA |
| 5 | Sample routine | `WorkbookSampleSection` | ivory | 2-up sample pages + pull-quote |
| 6 | Belief moment | `BeliefSection` | `evergreen` (dark) | Emotional beat + italic gold tagline |
| 7 | Final opt-in | `FinalOptInSection` | `warm-sand/40` | Deep panel visual + `OptInForm` |
| — | Footer | `SiteFooter` | `evergreen` | Brand + legal links + standing disclaimer |

### 2.4 Section detail

**Header** — clone `SiteHeader`. Sticky `top-0 z-50`, `bg-ivory/85 backdrop-blur-md`,
`border-b border-warm-sand/70`. Left: **Micro Saving Daily** logo
(`brandLogoPrimary` SVG, `h-8 sm:h-9`). Center (md+): nav anchors
`Guide (#get-the-guide)`, `Routine (#method)`, `Inside (#inside)`.
Right: `CtaButton size="sm"` → "Get the Free Guide". Mobile: logo + CTA only.

**1. Hero** — clone `Hero` layout (`max-w-6xl`, asymmetric grid, ivory→sand
gradient, sage halo behind the visual frame).
- Eyebrow pill: brand motif + "Free 7-minute morning routine".
- H1 (calm, no claims), e.g. *"Begin the day with seven quiet, clearer minutes."*
- Subcopy: reflection routine that helps organize money-related thoughts before
  the day gets noisy — no budgeting, no financial promises.
- Primary `CtaButton href="#get-the-guide"` "Get My Free Guide →" + secondary
  `#inside` link "See what's inside →".
- Trust line: `Free guide • Printable tracker • No spam`.
- Visual: lead-magnet cover/mockup (new asset, 4:5 or 2:3) in the standard image
  frame, `priority`, responsive `sizes`, mobile single mockup / desktop bundle.

**2. Problem** — clone `ProblemSection`. Centered heading + 3 `article` cards
(`rounded-2xl border border-taupe/60 bg-ivory p-7 shadow-md`, gold dot). Themes:
morning mental overload, automatic money thoughts, routine that fits real life
(not shame). Keep it non-sensational; no financial-hardship targeting.

**3. Method (the 7-minute reset)** — clone `MethodSection`. Gold eyebrow
("Slow down. Notice. Choose."), H2, then a `sm:grid-cols-3` (or condensed) set of
step cards on `sage/20` with the brand motif + step label. Represents the reset
framework (slow down → notice the thought → name the emotion → separate facts
from fear → choose one intention → visualize a next step → close). Condense to
3 grouped steps for the card grid, or use a 7-item list to match the guide.

**4. What's inside** — clone `WhatsInsideSection`. Two-column: guide preview image
(wide 16:9 in the framed panel with sage halo) + inclusions `<ul>` with the sage
check bubble. Inclusions e.g.: seven-minute routine, morning + evening versions,
seven-day tracker, restart page, one-page routine card, optional guided-audio
note. Mid-page CTA card (`rounded-3xl border border-taupe/60`) with brand motif,
"Ready to start your calmer morning?", `CtaButton` "Download the Free Guide".

**5. Sample routine** — clone `WorkbookSampleSection`. Two-column: copy +
gold-left-border pull-quote (`border-l-4 border-gold bg-sage/20`) beside a 2-up
grid of sample routine pages (portrait 2:3 assets in the light frame). Reinforce
"start with one quiet minute" framing.

**6. Belief moment** — clone `BeliefSection`. Full **evergreen** dark panel,
ivory type, `GrowthCircleMark` in `text-ivory/90`, gold hairline divider + the
Micro Saving Daily italic gold tagline "Small habits. Stronger money
confidence." Optional habit/routine card image (3:2) in the `ivory/5` framed
panel. This is the emotional beat before the final CTA.

**7. Final opt-in** — clone `FinalOptInSection`. `max-w-5xl`, `warm-sand/40`
section, `rounded-3xl` card split into a deep **evergreen** visual panel (guide
mockup + italic gold tagline) and the form panel (H2 + subcopy + `OptInForm`).
`id="get-the-guide"`, `scroll-mt-24`.

**Footer** — reuse `SiteFooter` as-is. Evergreen, `GrowthCircleMark` + "Micro
Saving Daily" + tagline, legal nav links, standing educational-content
disclaimer, dynamic copyright year.

### 2.5 Form & delivery

- Reuse the `OptInForm` pattern with this guide's copy and the existing
  "Send Me the Guide" button label. Same fields, styling, focus states,
  reduced-motion handling, and microcopy.
- Same **MailerLite TODO**: dedicated server route reading the API key from env
  (never client-exposed), a **separate group/segment id for this lead magnet**
  (so Funnel 2 leads stay distinguishable from Wealth Confidence leads under the
  one brand), redirect to this guide's thank-you page on success. Keep the UI
  honest — no implication of real delivery until wired.
- The homepage form must **not** imply any affiliate relationship or product.

### 2.6 Imagery to produce (parity with §1.8)

New, original, brand-safe assets only, in the Micro Saving Daily visual style
(per memory: **no vendor imagery, no product packaging, no brain scans, no
luxury/wealth imagery, no testimonials**):
- Lead-magnet cover (2:3, 1024×1536) and/or 3D mockup (4:5, 1122×1402).
- Wide routine preview (16:9, 1672×941).
- Two sample routine pages (2:3, 1024×1536 each).
- Routine/belief card (3:2, 1536×1024).
- **Logo, favicons, and icons are NOT re-produced** — reuse the existing Micro
  Saving Daily `brandLogoPrimary`, `brandIcons`, and favicon set from
  `layout.tsx`.
- All new rasters as PNG + WebP; register in `src/content/morning-clarity-assets.ts`
  before use.
- Acceptable motifs: headphones, abstract audio waveforms, morning desk,
  notebook, seven-minute clock, sunrise, reflection card, neutral listening scene.

### 2.7 Legal & compliance (homepage)

- **Reuse the existing legal routes as-is** (`/privacy`, `/terms`,
  `/affiliate-disclosure`, `/disclaimer`, `/contact`) and the shared `legal.tsx`
  constants (`BRAND`, `CONTACT_EMAIL`, `EFFECTIVE_DATE`) — no new legal entity,
  since the parent brand is unchanged. Footer links must resolve (Meta ad review).
- Footer standing disclaimer: educational content only, not financial/medical/
  psychological advice, results vary, no guaranteed outcome.
- Even though **no affiliate link appears on the homepage**, the FTC
  affiliate-disclosure page stays available (the review page and emails rely on
  it) and footer disclaimer language stays truthful and non-sensational.
- Compliance note near the form (from the Meta landing page in the strategy
  memo): "Educational content only. This guide does not provide financial,
  investment, medical, or psychological advice."

### 2.8 Accessibility & performance parity

- Exactly one `<h1>`; preserve semantic landmarks and heading order.
- Gold never used for small body text on ivory; maintain contrast.
- All interactive elements keep the gold `focus-visible` outline.
- `next/image` with explicit dimensions on every asset; hero visual `priority`.
- Motion respects `prefers-reduced-motion`; above-the-fold content renders
  without entrance animation for LCP.
- `scroll-mt-24` on every anchored section.

### 2.9 Explicitly out of scope for the homepage

- Affiliate offer, "Billionaire Brain Wave" name, vendor imagery, HopLink,
  review content — all belong on the separate **independent review page**
  (`/billionaire-brain-wave-review/`, see strategy memo), not here.
- Real email/PDF delivery wiring, tracking pixels, and ad creatives.

---

## Part 3 — Build sequence (when approved)

1. Read `node_modules/next/dist/docs/` (modified Next.js 16) before coding.
2. Produce the new lead-magnet imagery + typed manifest
   `src/content/morning-clarity-assets.ts` (§2.6). Reuse the existing brand
   logo/icons — do not regenerate them.
3. Scaffold page-specific sections under `src/components/morning-clarity/`,
   importing the shared brand assets and primitives (no forks of `CtaButton`,
   `Reveal`, `OptInForm`, `GrowthCircleMark`, `SiteHeader`, `SiteFooter`,
   `LegalPage`).
4. Assemble the homepage route (its own path under the same brand) mirroring
   `page.tsx` section order (§2.3) with the final copy from Part 4.
5. Reuse the existing legal routes/footer as-is (§2.7).
6. Wire `OptInForm` → server subscribe route (separate MailerLite group) →
   this guide's thank-you page (§2.5).
7. QA parity: tokens, typography, spacing, motion, a11y, LCP (§2.8).

Do not build, wire live delivery, add the affiliate link, or commit/push until
explicitly instructed.


---

## Part 4 — Final homepage copy (approved shared system)

Voice: Micro Saving Daily — calm, editorial, plain, non-sensational. Framework
nod: **Notice. Pause. Repeat.** Compliance: no wealth/billionaire/brain/health
claims, no guarantees, no urgency, no product name. Copy below is final and
ready to drop into the cloned components; bracketed notes are implementation
hints, not display text.

### Document / SEO metadata

- **Browser title:** `The 7-Minute Morning Clarity Reset | Micro Saving Daily`
- **Meta description:** `A free daily reflection routine from Micro Saving Daily — pause, notice automatic money thoughts, and begin the day with clearer intention. Seven quiet minutes. No budgeting app. No spam.`
- **OpenGraph title:** `The 7-Minute Morning Clarity Reset`
- **OpenGraph description:** `A calm seven-minute morning routine to quiet mental clutter and start the day with clearer intention. Free guide from Micro Saving Daily.`

### Header (`SiteHeader` clone)

- **Logo:** Micro Saving Daily (`brandLogoPrimary`), links to `#top`.
- **Nav (md+):** `Routine` → `#method` · `Inside` → `#inside` · `Guide` → `#get-the-guide`
- **Header CTA (`size="sm"`):** `Get the Free Guide`

### 1. Hero (`Hero` clone)

- **Eyebrow pill** [Growth Circle mark + text]: `Free morning reflection routine`
- **H1:** `Begin the day with seven quiet, clearer minutes.`
- **Subcopy:**
  `A simple morning routine that helps you slow down, notice the money thoughts running in the background, and set one calmer intention — before the day gets noisy. No budgeting spreadsheet. No pressure.`
- **Primary CTA** (`href="#get-the-guide"`): `Get My Free Guide →`
- **Secondary link** (`href="#inside"`): `See what's inside →`
- **Trust line:** `Free guide • Printable 7-day tracker • No spam`
- **Reassurance line** (italic, `evergreen/60`):
  `Made for people who want a calmer start to the day, not another rule to follow.`
- **Visual:** guide cover / 3D mockup in the standard framed panel
  (mobile: single mockup, desktop: cover or bundle), `priority`.

### 2. Problem (`ProblemSection` clone)

- **H2:** `Most mornings start louder than we'd like.`
- **Intro:**
  `Before the first task of the day, the mind is already busy — half-formed to-dos, small worries, and quiet money thoughts we never actually paused on. Micro Saving Daily offers a softer starting point: notice one thought, pause once, choose one calmer intention.`
- **Card 1 — `Mental clutter`:**
  `The day often begins mid-thought. It's hard to choose calmly when everything arrives at once.`
- **Card 2 — `Automatic money thoughts`:**
  `Reactions about spending, saving, and "enough" run on autopilot before we notice them.`
- **Card 3 — `Routines that don't stick`:**
  `Long morning systems are easy to abandon. Something short is easier to actually repeat.`

### 3. Method — the seven-minute reset (`MethodSection` clone, 3 cards)

- **Eyebrow:** `Notice. Pause. Repeat.`
- **H2:** `A calmer morning in three small movements.`
- **Intro:**
  `The reset takes about seven minutes and moves through three simple movements. The full minute-by-minute routine is inside the free guide.`
- **Card — Step 01 · `Settle`:**
  `Slow down for a moment and let the morning noise quiet before you decide anything.`
- **Card — Step 02 · `Notice`:**
  `Notice one automatic money thought, name the feeling under it, and separate the facts from the worry.`
- **Card — Step 03 · `Choose`:**
  `Choose one calm intention and picture a single practical next step you can carry into the day.`

### 4. What's inside (`WhatsInsideSection` clone)

- **H2:** `Inside The 7-Minute Morning Clarity Reset`
- **Intro:**
  `A short, worksheet-style guide that turns a calmer morning into something you can actually repeat.`
- **Inclusions list** (sage check bubbles):
  - `The full seven-minute reset, minute by minute`
  - `A short morning version and a wind-down evening version`
  - `A printable seven-day tracker`
  - `A one-page routine card for busy days`
  - `A gentle restart page for the mornings you miss`
  - `An optional guided-audio version if you'd rather listen than read`
- **Mid-page CTA card** [Growth Circle mark]:
  - **Heading:** `Ready to start your calmer morning?`
  - **Body:** `Get the free guide and try the seven-minute reset tomorrow morning.`
  - **CTA** (`href="#get-the-guide"`): `Download the Free Guide`

### 5. Sample routine (`WorkbookSampleSection` clone)

- **H2:** `Start with one quiet minute.`
- **Body:**
  `The first steps are intentionally small. You're not trying to reorganize your whole life before breakfast — you're learning to notice what's already there and choose one calmer response.`
- **Pull-quote** (gold left border, `bg-sage/20`):
  `Seven quiet minutes is a small thing. Repeated, it changes how the day begins.`
- **Visual:** 2-up sample routine pages (portrait 2:3) in the light frames.

### 6. Belief moment (`BeliefSection` clone — evergreen dark panel)

- **Mark:** `GrowthCircleMark` in `text-ivory/90` + gold hairline divider.
- **H2:** `One calm minute is enough to begin.`
- **Body:**
  `Micro Saving Daily is built on a simple belief: a steadier relationship with money doesn't start with a perfect plan. It starts with one small, repeatable moment of clarity you can feel good about.`
- **Tagline** (italic gold): `Small habits. Stronger money confidence.`
- **Visual:** routine/reflection card (3:2) in the `ivory/5` framed panel.

### 7. Final opt-in (`FinalOptInSection` + `OptInForm` clone)

- **Section id:** `get-the-guide` (`scroll-mt-24`).
- **Left evergreen panel:** guide mockup + italic gold tagline
  `Small habits. Stronger money confidence.`
- **Form panel:**
  - **H2:** `Get The 7-Minute Morning Clarity Reset free.`
  - **Subcopy:** `Enter your details and we'll send the free guide, including the printable seven-day tracker.`
  - **Field label 1:** `First name`
  - **Field label 2:** `Email`
  - **Submit button:** `Send Me the Guide`
  - **Form microcopy:** `Free guide • No spam • Unsubscribe anytime`
  - **Compliance note** (small, below form, `evergreen/60`):
    `Educational content only. This guide does not provide financial, investment, medical, or psychological advice.`
- **Optimistic success state** (reused `role="status"` sage panel):
  - **Heading:** `Thank you — your request is in.`
  - **Body:** `We'll email your copy of The 7-Minute Morning Clarity Reset to the address you shared.`

### Footer (`SiteFooter` reused as-is)

- Micro Saving Daily mark + name + `Small habits. Stronger money confidence.`
- Links: `Privacy Policy` · `Terms` · `Disclaimer` · `Affiliate Disclosure`
- Standing disclaimer (existing):
  `Micro Saving Daily provides educational content about money habits and financial awareness. It is not financial advice. Results vary.`
- `© {year} Micro Saving Daily. All rights reserved.`

### Copy compliance checklist (verify before build)

- [ ] No wealth, income, billionaire, "brain," neuroscience, or health claims.
- [ ] No guarantees, no fake urgency, no scarcity, no testimonials.
- [ ] No mention of Billionaire Brain Wave or any affiliate offer/link.
- [ ] Money framing stays at "notice / calmer thinking / clearer intention."
- [ ] Exactly one `<h1>` (the hero); heading order preserved.
- [ ] Disclaimer + educational-only note present; footer legal links resolve.
