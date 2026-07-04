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
- Not yet built (future phases): MailerLite integration (`OptInForm` is UI-only,
  see its `MailerLite` TODO — must not imply real email delivery, and should
  redirect to the thank-you page on success once wired). Real guide **PDF does
  not exist yet** — the thank-you "Download the Guide" button is accessibly
  disabled with a documented TODO until the asset ships. Affiliate link tracking
  param is not applied (custom vendor-domain hoplink; confirm syntax first).
