/**
 * The 7-Minute Morning Clarity Reset — thank-you / bridge-page copy (Funnel 2)
 * ---------------------------------------------------------------------------
 * Single source of truth for the post-opt-in bridge page copy and the shared
 * affiliate constants, so nothing is duplicated across the section components.
 *
 * Positioning (approved — see docs/second-funnel-billionaire-brain-wave-plan.md
 * and CLAUDE.md): the FREE Micro Saving Daily guide is always confirmed and made
 * accessible FIRST; the Billionaire Brain Wave offer is introduced only after,
 * as a clearly-disclosed, OPTIONAL third-party audio program. No wealth, income,
 * brain/neuroscience, medical, or manifestation claims; no guarantees; no fake
 * urgency. Vendor claims are only ever stated as attributed, never as fact.
 */

/* -------------------------------------------------------------------------- */
/* Affiliate link + guide download — implementation-honest constants          */
/* -------------------------------------------------------------------------- */

/**
 * VERIFIED affiliate URL. Reused verbatim from the existing, approved Funnel 1
 * thank-you affiliate card (src/components/wealth-confidence/thank-you/
 * AffiliateResourceCard.tsx). This is the vendor's custom-domain hoplink.
 *
 * TODO(tracking): This is a custom vendor-domain hoplink (not hop.clickbank.net),
 * so appending ClickBank's `tid` parameter is NOT guaranteed to be honoured and
 * the URL format does not clearly support per-CTA query tracking. We therefore
 * do NOT invent query parameters. Per-CTA intent is expressed with
 * `data-tracking-label` attributes (see OFFER_TRACKING) until the correct
 * tracking syntax is confirmed with the affiliate program.
 */
export const BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL =
  "https://thebillionairebrainwave.com/?hopId=080bdea2-fa9d-4f5c-affd-4a654bd6a762";

/** rel + target applied to every outbound affiliate CTA. */
export const AFFILIATE_LINK_ATTRS = {
  target: "_blank",
  rel: "sponsored noopener noreferrer",
} as const;

/** Per-location tracking labels (data-attribute only — no query params). */
export const OFFER_TRACKING = {
  hero: "bbw_offer_intro_cta",
  middle: "bbw_offer_steps_cta",
  final: "bbw_offer_final_cta",
} as const;

/**
 * Guide download status.
 *
 * The completed Funnel 2 PDF (`the-7-minute-morning-clarity-reset.pdf`) does NOT
 * yet exist in `public/downloads/` (only the Wealth Confidence Guide ships
 * there). So the download control is rendered as an accessibly-disabled
 * placeholder — it must never pretend the download works.
 *
 * TODO(guide-delivery): once the approved PDF ships at
 * `public/downloads/the-7-minute-morning-clarity-reset.pdf`, set
 * GUIDE_PDF_READY = true and GUIDE_PDF_PATH will be wired to the real file.
 */
export const GUIDE_PDF_READY = false;
export const GUIDE_PDF_PATH = "/downloads/the-7-minute-morning-clarity-reset.pdf";

/* -------------------------------------------------------------------------- */
/* Section 2 — Success hero (guide confirmation + access)                     */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "Your guide is ready",
  h1: "Your 7-Minute Morning Clarity Reset Is Ready",
  body: "You\u2019ve taken the first step toward creating a calmer, more intentional start to your day. Access your guide below and begin whenever you\u2019re ready.",
  primaryLabel: "Download the Free Guide",
  // Honest confirmation copy — no email/inbox promise (delivery not wired).
  confirmation: "Your guide is ready below.",
  // Shown while the real PDF is not yet connected.
  pendingNote:
    "Your downloadable guide will appear here once delivery is connected.",
  secondaryLabel: "Continue to the optional next step",
  secondaryHref: "#optional-next-step",
  trustMicrocopy: "Free guide \u00B7 No purchase required",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 3 — Natural bridge                                                 */
/* -------------------------------------------------------------------------- */

export const BRIDGE = {
  eyebrow: "Before you go \u2014 an optional next step",
  h2: "What If Your Morning Routine Could Go One Step Deeper?",
  body: [
    "The 7-Minute Morning Clarity Reset helps you slow down, notice what is taking up your attention and choose a clearer direction for the day.",
    "Some people also enjoy using guided audio routines as part of that quiet morning space. That is why we wanted to share one optional program that may complement the habit you have just started.",
  ],
  progression: ["Pause", "Notice", "Choose", "Explore"],
} as const;

/* -------------------------------------------------------------------------- */
/* Section 4 — Offer introduction                                             */
/* -------------------------------------------------------------------------- */

export const OFFER = {
  eyebrow: "Optional guided audio program",
  h2: "Introducing Billionaire Brain Wave",
  description:
    "Billionaire Brain Wave is a separate digital audio program for people interested in exploring guided mindset routines and a more intentional approach to their personal goals.",
  bullets: [
    "Simple audio-based format",
    "Designed to fit into a quiet daily routine",
    "Can be explored from home",
    "No complicated technical setup",
    "Optional next step after your free guide",
  ],
  ctaLabel: "Watch the Free Presentation",
  ctaMicrocopy:
    "Opens the official Billionaire Brain Wave presentation in a new tab.",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 5 — Why it connects                                                */
/* -------------------------------------------------------------------------- */

export const CONNECTION = {
  eyebrow: "Why we\u2019re sharing this",
  h2: "A Natural Next Step After Your Morning Reset",
  cards: [
    {
      title: "Create Space",
      body: "Your free guide begins by helping you step out of the morning rush and create a quieter starting point.",
    },
    {
      title: "Direct Your Attention",
      body: "The routine helps you notice what is occupying your mind and choose what deserves your focus.",
    },
    {
      title: "Explore Further",
      body: "The optional presentation introduces a separate guided approach for people who want to continue exploring mindset and personal goals.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Section 6 — Fit section                                                    */
/* -------------------------------------------------------------------------- */

export const FIT = {
  h2: "This May Be Worth Exploring If\u2026",
  checklist: [
    "You enjoy guided audio or meditation-style routines.",
    "You want a simple practice that can fit into your morning.",
    "You are interested in mindset, goals and intentional living.",
    "You prefer listening over completing another long workbook.",
    "You understand that individual experiences and results vary.",
  ],
  notForYouTitle: "Not for you if\u2026",
  notForYou:
    "This is not a fit if you are looking for guaranteed income, instant financial results or professional financial advice.",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 7 — What happens next                                              */
/* -------------------------------------------------------------------------- */

export const STEPS = {
  eyebrow: "No pressure \u2014 review it for yourself",
  h2: "Here\u2019s What Happens Next",
  items: [
    "Click the button below.",
    "Visit the official Billionaire Brain Wave presentation.",
    "Review the program, creator, format, pricing and guarantee.",
    "Decide whether it feels appropriate for you.",
  ],
  ctaLabel: "See the Official Presentation",
  secondaryLabel: "No thanks \u2014 take me to my guide",
  secondaryHref: "#guide",
} as const;

/* -------------------------------------------------------------------------- */
/* Section 8 — Affiliate disclosure (exact approved copy)                     */
/* -------------------------------------------------------------------------- */

export const DISCLOSURE = {
  label: "Affiliate disclosure:",
  body: "If you choose to purchase through this link, Micro Saving Daily may receive a commission at no additional cost to you. This recommendation is optional, and you should review the official presentation carefully before making a decision.",
} as const;

/** Compact inline disclosure used directly under the in-card offer CTA. */
export const INLINE_DISCLOSURE =
  "Affiliate recommendation. Billionaire Brain Wave is a separate third-party program and is not part of your free guide. If you purchase through this link, Micro Saving Daily may earn a commission at no additional cost to you.";

/* -------------------------------------------------------------------------- */
/* Section 9 — Trust and expectations                                         */
/* -------------------------------------------------------------------------- */

export const TRUST = {
  h2: "A Thoughtful Decision Is Better Than a Rushed One",
  body: [
    "Take your time reviewing the information. The program is separate from your free Morning Clarity Reset, and purchasing it is not required to use or benefit from your guide.",
    "No mindset or audio program can guarantee income, wealth or a specific personal result.",
  ],
  panels: [
    {
      title: "Independent Decision",
      body: "Review the official details carefully and decide for yourself whether the program fits your needs.",
    },
    {
      title: "Results Vary",
      body: "Personal experiences differ, and no financial or personal outcome is guaranteed.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Section 10 — Final CTA                                                      */
/* -------------------------------------------------------------------------- */

export const FINAL = {
  eyebrow: "Optional next step",
  h2: "Ready to Explore the Guided Audio Presentation?",
  body: "Watch the official presentation and decide whether this audio-based routine fits the kind of morning practice you want to build.",
  primaryLabel: "Watch the Billionaire Brain Wave Presentation",
  secondaryLabel: "Download My Morning Clarity Guide Instead",
  secondaryHref: "#guide",
  microcopy:
    "Optional third-party offer \u00B7 Results vary \u00B7 No guaranteed financial outcome",
} as const;
