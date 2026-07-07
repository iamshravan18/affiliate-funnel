/**
 * The 7-Minute Morning Clarity Reset — homepage copy (Funnel 2)
 * -------------------------------------------------------------
 * Single source of truth for the homepage copy so nothing is duplicated across
 * components. Verbatim, approved copy comes from
 * `docs/funnel-2-homepage-plan.md` (Part 4). Copy for the expanded sections
 * required by the build brief but not given verbatim in Part 4 (the seven-step
 * routine, "Who it's for", "Take a look inside" captions, the trust section,
 * and the FAQ) is composed strictly from the approved manuscript in
 * `docs/funnel-2-lead-magnet-plan.md` and stays within the same compliance
 * boundaries: educational only, no wealth/brain/health claims, no guarantees,
 * no urgency, no product name, no affiliate content.
 */

/* Header — approved (Part 4 » Header) ------------------------------------- */

export const NAV_LINKS = [
  { label: "Routine", href: "#method" },
  { label: "Inside", href: "#inside" },
  { label: "Guide", href: "#get-the-guide" },
] as const;

export const HEADER_CTA = "Get the Free Guide";

/* Hero — approved (Part 4 » 1. Hero) -------------------------------------- */

export const HERO = {
  eyebrow: "Free morning reflection routine",
  h1: "Begin the day with seven quiet, clearer minutes.",
  subcopy:
    "A simple morning routine that helps you slow down, notice the money thoughts running in the background, and set one calmer intention — before the day gets noisy. No budgeting spreadsheet. No pressure.",
  secondaryLinkLabel: "See what's inside",
  secondaryLinkHref: "#inside",
  trustLine: "Free guide • Printable 7-day tracker • No spam",
  reassurance:
    "Made for people who want a calmer start to the day, not another rule to follow.",
  formHeading: "Get the free guide",
} as const;

/* Problem — approved (Part 4 » 2. Problem) -------------------------------- */

export const PROBLEM = {
  h2: "Most mornings start louder than we'd like.",
  intro:
    "Before the first task of the day, the mind is already busy — half-formed to-dos, small worries, and quiet money thoughts we never actually paused on. Micro Saving Daily offers a softer starting point: notice one thought, pause once, choose one calmer intention.",
  cards: [
    {
      title: "Mental clutter",
      body: "The day often begins mid-thought. It's hard to choose calmly when everything arrives at once.",
    },
    {
      title: "Automatic money thoughts",
      body: "Reactions about spending, saving, and \u201Cenough\u201D run on autopilot before we notice them.",
    },
    {
      title: "Routines that don't stick",
      body: "Long morning systems are easy to abandon. Something short is easier to actually repeat.",
    },
  ],
} as const;

/* Method — approved (Part 4 » 3. Method, 3 cards) ------------------------- */

export const METHOD = {
  eyebrow: "Notice. Pause. Repeat.",
  h2: "A calmer morning in three small movements.",
  intro:
    "The reset takes about seven minutes and moves through three simple movements. The full minute-by-minute routine is inside the free guide.",
  cards: [
    {
      step: "Step 01",
      title: "Settle",
      body: "Slow down for a moment and let the morning noise quiet before you decide anything.",
    },
    {
      step: "Step 02",
      title: "Notice",
      body: "Notice one automatic money thought, name the feeling under it, and separate the facts from the worry.",
    },
    {
      step: "Step 03",
      title: "Choose",
      body: "Choose one calm intention and picture a single practical next step you can carry into the day.",
    },
  ],
} as const;

/* Seven-minute routine — composed from the approved manuscript overview
   (funnel-2-lead-magnet-plan.md » Page 5 table + movement mapping). Provides
   the routine as real HTML text, not only inside image previews. ----------- */

export const SEVEN_MINUTE = {
  eyebrow: "The routine at a glance",
  h2: "Seven quiet minutes, seven small steps.",
  intro:
    "Each of the three movements opens into a short, guided step. You read a little and write a little — a single line is plenty on a busy morning.",
  steps: [
    {
      minute: "1",
      movement: "Settle",
      name: "Arrive",
      body: "Land in the day and notice where you are.",
    },
    {
      minute: "2",
      movement: "Notice",
      name: "Notice",
      body: "Pick the one thought taking up the most room.",
    },
    {
      minute: "3",
      movement: "Notice",
      name: "Name",
      body: "Put a plain word to the feeling underneath.",
    },
    {
      minute: "4",
      movement: "Notice",
      name: "Separate",
      body: "Sort what you know from what you are assuming.",
    },
    {
      minute: "5",
      movement: "Choose",
      name: "Choose",
      body: "Set one intention you can act on today.",
    },
    {
      minute: "6",
      movement: "Choose",
      name: "Picture",
      body: "See the first practical step clearly.",
    },
    {
      minute: "7",
      movement: "Choose",
      name: "Continue",
      body: "Close the page and carry one word forward.",
    },
  ],
  note: "Settle is Minute 1. Notice is Minutes 2\u20134. Choose is Minutes 5\u20137.",
} as const;

/* What's inside — approved (Part 4 » 4. What's inside) -------------------- */

export const INSIDE = {
  h2: "Inside The 7-Minute Morning Clarity Reset",
  intro:
    "A short, worksheet-style guide that turns a calmer morning into something you can actually repeat.",
  inclusions: [
    "The full seven-minute reset, minute by minute",
    "A short morning version and a wind-down evening version",
    "A printable seven-day tracker",
    "A one-page routine card for busy days",
    "A gentle restart page for the mornings you miss",
    "An optional guided-audio version if you'd rather listen than read",
  ],
  ctaHeading: "Ready to start your calmer morning?",
  ctaBody:
    "Get the free guide and try the seven-minute reset tomorrow morning.",
  ctaLabel: "Download the Free Guide",
} as const;

/* Who it's for — composed from the approved manuscript audience/problem
   framing (funnel-2-lead-magnet-plan.md » §4). No age labelling, no claims. -- */

export const AUDIENCE = {
  eyebrow: "Who it's for",
  h2: "Made for real, already-busy mornings.",
  intro:
    "This isn't therapy or a budgeting system, and it doesn't ask you to reorganise your life before breakfast. It's a short, dignified way to hear yourself think and start the day with one clear step.",
  points: [
    "You want a calmer start to the day, not another rule to follow.",
    "You like structured prompts more than a blank journal page.",
    "You notice the same money thoughts starting on their own most mornings.",
    "You'd rather do something short you can repeat than something long you'll abandon.",
  ],
  closing: "No experience with reflection or meditation is needed.",
} as const;

/* Belief moment — approved (Part 4 » 6. Belief moment) -------------------- */

export const BELIEF = {
  h2: "One calm minute is enough to begin.",
  body: "Micro Saving Daily is built on a simple belief: a steadier relationship with money doesn't start with a perfect plan. It starts with one small, repeatable moment of clarity you can feel good about.",
  tagline: "Small habits. Stronger money confidence.",
} as const;

/* Take a look inside — captions composed from the approved manuscript
   (funnel-2-lead-magnet-plan.md » Pages 5, 13, 14). ----------------------- */

export const PREVIEWS = {
  eyebrow: "Take a look inside",
  h2: "A calm, worksheet-style guide.",
  intro:
    "A quick look at three of the pages. Every prompt is plain, and there is nothing to score or measure.",
  cards: [
    {
      key: "routinePreview" as const,
      title: "Seven-minute overview",
      body: "The whole routine on one page — Settle, Notice and Choose across seven guided steps.",
    },
    {
      key: "worksheetPreview" as const,
      title: "Morning reflection worksheet",
      body: "Prompts for the thought on your mind, the feeling under it, what you know, one intention and one next step.",
    },
    {
      key: "trackerPreview" as const,
      title: "Seven-day tracker",
      body: "A light way to note seven mornings — with a gentle restart after any missed day.",
    },
  ],
} as const;

/* Trust / compliance — composed from the approved manuscript "What this guide
   is — and is not" (funnel-2-lead-magnet-plan.md » Page 3) and the homepage
   plan compliance note (funnel-2-homepage-plan.md » §2.7). ----------------- */

export const TRUST = {
  eyebrow: "Educational and honest",
  h2: "What this guide is — and is not.",
  isTitle: "What it is",
  is: [
    "An educational reflection routine you can use each morning.",
    "A seven-minute written practice with seven short steps.",
    "A flexible structure you can shorten or adapt to your morning.",
  ],
  isNotTitle: "What it is not",
  isNot: [
    "Financial or investment advice.",
    "Medical advice or mental-health treatment.",
    "A promise of any particular result.",
  ],
  note: "Educational content only. This guide does not provide financial, investment, medical, or psychological advice. Individual circumstances and results vary.",
} as const;

/* FAQ — composed from approved facts already stated across the homepage plan
   and lead-magnet manuscript. Answers stay within the same educational,
   no-promise compliance boundaries. -------------------------------------- */

export const FAQ = {
  eyebrow: "Questions",
  h2: "A few things people ask.",
  items: [
    {
      q: "Is the guide really free?",
      a: "Yes. Enter your first name and email and we'll send The 7-Minute Morning Clarity Reset, including the printable seven-day tracker. No spam, and you can unsubscribe anytime.",
    },
    {
      q: "How long does the routine take?",
      a: "About seven minutes, moving through three simple movements — Settle, Notice and Choose. On a busy morning you can shorten it; a single line on the page still counts.",
    },
    {
      q: "Do I need any experience with reflection or journaling?",
      a: "No. The guide uses plain, structured prompts rather than a blank page, so you always know what to write next. No prior meditation or journaling experience is assumed.",
    },
    {
      q: "Is this financial or budgeting advice?",
      a: "No. It's an educational reflection routine. It does not provide financial, investment, medical, or psychological advice, and there is no budgeting spreadsheet to fill in.",
    },
    {
      q: "What happens after I sign up?",
      a: "We'll email your copy of the guide to the address you share. It's a standalone guide you can start using the very next morning.",
    },
  ],
} as const;

/* Final opt-in — approved (Part 4 » 7. Final opt-in) --------------------- */

export const FINAL = {
  tagline: "Small habits. Stronger money confidence.",
  h2: "Get The 7-Minute Morning Clarity Reset free.",
  subcopy:
    "Enter your details and we'll send the free guide, including the printable seven-day tracker.",
  complianceNote:
    "Educational content only. This guide does not provide financial, investment, medical, or psychological advice.",
} as const;

/* Opt-in form — approved (Part 4 » 7. Final opt-in) ---------------------- */

export const FORM = {
  firstNameLabel: "First name",
  emailLabel: "Email",
  submitLabel: "Send Me the Guide",
  microcopy: "Free guide • No spam • Unsubscribe anytime",
  successHeading: "Thank you — your request is in.",
  successBody:
    "We'll email your copy of The 7-Minute Morning Clarity Reset to the address you shared.",
} as const;
