/**
 * The 7-Minute Morning Clarity Reset — thank-you / bridge-page copy (Funnel 2)
 * ---------------------------------------------------------------------------
 * Single source of truth for the compact post-opt-in bridge page copy and the
 * shared affiliate constants, so nothing is duplicated across the section
 * components.
 *
 * Positioning (approved — see docs/second-funnel-billionaire-brain-wave-plan.md
 * and CLAUDE.md): the FREE Micro Saving Daily guide is confirmed as emailed
 * FIRST; the Billionaire Brain Wave offer is then introduced immediately as a
 * clearly-disclosed, OPTIONAL third-party audio program. No wealth, income,
 * brain/neuroscience, medical, or manifestation claims; no guarantees; no fake
 * urgency. Vendor claims are never repeated or endorsed.
 *
 * This page was refined to a compact five-section structure so the offer is
 * understandable within the first 1–1.5 desktop screens:
 *   1. Compact confirmation hero (free guide first)
 *   2. Primary offer + product image
 *   3. Short "why this fits" (three cards)
 *   4. Brief decision / trust (two columns)
 *   5. Final CTA + full affiliate disclosure
 */

/* -------------------------------------------------------------------------- */
/* Affiliate link constants                                                     */
/* -------------------------------------------------------------------------- */

/**
 * VERIFIED affiliate URL. This is the official ClickBank VSL hoplink for the
 * Billionaire Brain Wave offer (vendor `attractbr`, affiliate `microsave`).
 *
 * TODO(tracking): This is a standard ClickBank hoplink. ClickBank's `tid`
 * tracking parameter could be appended for per-CTA attribution, but we do NOT
 * invent query parameters here. Per-CTA intent is expressed with
 * `data-tracking-label` attributes (see OFFER_TRACKING) until the correct
 * tracking syntax is confirmed with the affiliate program.
 */
export const BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL =
  "https://hop.clickbank.net/?affiliate=microsave&vendor=attractbr&pid=vsl";

/** rel + target applied to every outbound affiliate CTA. */
export const AFFILIATE_LINK_ATTRS = {
  target: "_blank",
  rel: "sponsored noopener noreferrer",
} as const;

/** Per-location tracking labels (data-attribute only — no query params). */
export const OFFER_TRACKING = {
  offer: "bbw_offer_primary_cta",
  decision: "bbw_offer_decision_cta",
  final: "bbw_offer_final_cta",
} as const;

/** Shared anchor id for the primary optional offer section. */
export const OFFER_ANCHOR = "optional-next-step";

/* -------------------------------------------------------------------------- */
/* Section 1 — Compact confirmation hero (free guide first)                    */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "You\u2019re in",
  h1: "Your 7-Minute Morning Clarity Reset is on its way!",
  body: "Please check your inbox in the next few minutes. We\u2019ve sent your guide to the email address you entered.",
  confirmation: "If you don\u2019t see it soon, check your Promotions or Spam folder.",
  trustMicrocopy:
    "Before you go, there\u2019s one more resource you may want to explore below \u2193",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 2 — Primary offer + product image                                   */
/* -------------------------------------------------------------------------- */

export const OFFER = {
  eyebrow: "Optional guided audio program",
  h2: "A Simple Audio-Based Next Step for Your Morning Routine",
  body: [
    "The Morning Clarity Reset helps you pause, notice what is taking up your attention and choose a clearer direction for the day.",
    "Billionaire Brain Wave is a separate third-party audio program for people who want to explore a guided mindset routine as part of that quiet morning space.",
  ],
  bullets: [
    "Simple audio-based format",
    "Easy to explore from home",
    "Designed to fit into a quiet daily routine",
    "Optional and separate from your free guide",
  ],
  ctaLabel: "Watch the Free Presentation",
  ctaMicrocopy:
    "Opens the official Billionaire Brain Wave presentation in a new tab.",
  // Concise affiliate disclosure placed directly under the offer CTA.
  disclosure:
    "Affiliate disclosure: If you choose to purchase through this link, Micro Saving Daily may receive a commission at no additional cost to you.",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 3 — Short "why this fits" (three compact cards)                      */
/* -------------------------------------------------------------------------- */

export const FIT = {
  h2: "Why This May Fit the Habit You\u2019ve Just Started",
  cards: [
    {
      title: "Pause",
      body: "Your free guide helps you create a calmer starting point.",
    },
    {
      title: "Focus",
      body: "The routine helps you decide what deserves your attention today.",
    },
    {
      title: "Explore",
      body: "The optional audio presentation offers another guided way to continue that mindset practice.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Section 4 — Brief decision / trust (two columns)                            */
/* -------------------------------------------------------------------------- */

export const DECISION = {
  leftHeading: "This May Be Worth Exploring If\u2026",
  checklist: [
    "You enjoy guided audio or meditation-style routines.",
    "You want something simple that can fit into your morning.",
    "You are interested in mindset and intentional living.",
    "You understand that individual results vary.",
  ],
  rightHeading: "Review It for Yourself",
  rightBody:
    "Visit the official presentation, review the format, creator, pricing and guarantee, then decide whether it feels appropriate for you.",
  ctaLabel: "See the Official Presentation",
  secondaryLabel: "No thanks \u2014 return to my confirmation",
  secondaryHref: "#guide",
  note: "This is not a guaranteed-income program or financial advice.",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 5 — Final CTA + full affiliate disclosure                           */
/* -------------------------------------------------------------------------- */

export const FINAL = {
  eyebrow: "Optional next step",
  h2: "Ready to Explore the Audio Presentation?",
  body: "Watch the official presentation and decide whether this optional audio routine fits the kind of morning practice you want to build.",
  primaryLabel: "Watch the Billionaire Brain Wave Presentation",
  secondaryLabel: "Return to My Confirmation",
  secondaryHref: "#guide",
  microcopy:
    "Optional third-party offer \u00B7 Results vary \u00B7 No guaranteed financial outcome",
  disclosureLabel: "Affiliate disclosure:",
  disclosureBody:
    "If you choose to purchase through this link, Micro Saving Daily may receive a commission at no additional cost to you. This recommendation is optional, and you should review the official presentation carefully before making a decision.",
} as const;
