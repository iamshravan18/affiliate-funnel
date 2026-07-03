/**
 * Wealth Confidence Guide — image asset manifest
 * ------------------------------------------------
 * Central, typed registry for every brand + funnel image that lives under
 * `public/images/wealth-confidence/`. The homepage rebuild (next phase) should
 * import from here rather than hard-coding string paths, so alt text,
 * dimensions and intended placement stay consistent and accessible.
 *
 * Notes on the files themselves:
 * - Every raster asset ships as a lossless PNG original (`png`) plus an
 *   optimized WebP (`webp`). Prefer WebP for delivery; PNG is the archival
 *   source. Serve responsively via next/image (which will handle format).
 * - Widths/heights are the true pixel dimensions of the source files and
 *   should be passed to <Image width height> to prevent layout shift.
 * - Alt text is written to be descriptive and accessible (not keyword
 *   stuffed). Decorative-only usages may pass `alt=""` at the call site.
 * - Brand palette: deep green #0F3D2E, soft gold #C9A15B, warm ivory #F7F3E9,
 *   sage #A7BFA3 (see globals.css @theme tokens).
 */

export type AssetOrientation = "portrait" | "landscape" | "square";

export interface WealthConfidenceImage {
  /** Stable lookup key for use in components. */
  key: string;
  /** Public path to the lossless PNG original. */
  png: string;
  /** Public path to the optimized WebP (preferred for delivery). */
  webp: string;
  /** Descriptive, accessible alt text. */
  alt: string;
  width: number;
  height: number;
  /** Simplified aspect ratio label, e.g. "2:3". */
  aspectRatio: string;
  orientation: AssetOrientation;
  /** Where this image is intended to be used on the funnel. */
  recommendedSection: string;
  notes: string;
}

export interface BrandVectorAsset {
  key: string;
  /** Master scalable SVG — preferred wherever a vector can be used. */
  svg: string;
  alt: string;
  notes: string;
}

export interface BrandRasterAsset {
  key: string;
  png: string;
  webp: string;
  alt: string;
  width: number;
  height: number;
  notes: string;
}

const BASE = "/images/wealth-confidence";

/* ------------------------------------------------------------------ */
/* Funnel content imagery (the 7 rendered assets)                      */
/* ------------------------------------------------------------------ */

export const wealthConfidenceImages = {
  guideCoverFlat: {
    key: "guideCoverFlat",
    png: `${BASE}/guide/wealth-confidence-guide-cover-flat.png`,
    webp: `${BASE}/guide/wealth-confidence-guide-cover-flat.webp`,
    alt: "Front cover of the free Wealth Confidence Guide in deep green with soft gold detailing.",
    width: 1024,
    height: 1536,
    aspectRatio: "2:3",
    orientation: "portrait",
    recommendedSection: "Hero lead-magnet visual / opt-in form preview",
    notes: "Flat 2D cover. Best paired beside the email capture form as the primary 'what you get' visual.",
  },
  guide3dMockup: {
    key: "guide3dMockup",
    png: `${BASE}/guide/wealth-confidence-guide-3d-mockup.png`,
    webp: `${BASE}/guide/wealth-confidence-guide-3d-mockup.webp`,
    alt: "Three-dimensional mockup of the Wealth Confidence Guide standing upright.",
    width: 1122,
    height: 1402,
    aspectRatio: "4:5",
    orientation: "portrait",
    recommendedSection: "Hero (alternative) / value stack",
    notes: "3D presentation of the guide. Good higher-perceived-value alternative to the flat cover in the hero.",
  },
  guideWorksheetPreview: {
    key: "guideWorksheetPreview",
    png: `${BASE}/guide/wealth-confidence-guide-worksheet-preview.png`,
    webp: `${BASE}/guide/wealth-confidence-guide-worksheet-preview.webp`,
    alt: "Preview spread showing several worksheet pages from the Wealth Confidence Guide.",
    width: 1672,
    height: 941,
    aspectRatio: "16:9",
    orientation: "landscape",
    recommendedSection: "\"What's inside\" / guide breakdown section",
    notes: "Wide multi-page spread. Works as a full-width band showing the practical worksheets inside.",
  },
  guideCompleteBundle: {
    key: "guideCompleteBundle",
    png: `${BASE}/guide/wealth-confidence-guide-complete-bundle.png`,
    webp: `${BASE}/guide/wealth-confidence-guide-complete-bundle.webp`,
    alt: "The complete Wealth Confidence Guide bundle shown as a collection of pages and worksheets.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Final call-to-action / value summary before opt-in",
    notes: "Everything-you-get shot. Strong reinforcement image near the closing CTA.",
  },
  worksheetDay1: {
    key: "worksheetDay1",
    png: `${BASE}/worksheets/worksheet-day-1-notice-spending-pattern.png`,
    webp: `${BASE}/worksheets/worksheet-day-1-notice-spending-pattern.webp`,
    alt: "Day one worksheet for noticing a daily spending pattern.",
    width: 1024,
    height: 1536,
    aspectRatio: "2:3",
    orientation: "portrait",
    recommendedSection: "\"How it works\" / sample worksheet step 1",
    notes: "Single worksheet page. Use in a 2-up steps section demonstrating the daily practice.",
  },
  worksheetDay2: {
    key: "worksheetDay2",
    png: `${BASE}/worksheets/worksheet-day-2-pause-automatic-purchase.png`,
    webp: `${BASE}/worksheets/worksheet-day-2-pause-automatic-purchase.webp`,
    alt: "Day two worksheet for pausing before an automatic purchase.",
    width: 1024,
    height: 1536,
    aspectRatio: "2:3",
    orientation: "portrait",
    recommendedSection: "\"How it works\" / sample worksheet step 2",
    notes: "Pairs with worksheetDay1 to show two days of the emotional-spending-awareness practice.",
  },
  todaysSmallShiftCard: {
    key: "todaysSmallShiftCard",
    png: `${BASE}/habit/todays-small-shift-habit-card.png`,
    webp: `${BASE}/habit/todays-small-shift-habit-card.webp`,
    alt: "Today's small shift habit card highlighting one calm daily money choice.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "\"Small habits\" concept / brand-belief band",
    notes: "Landscape habit card. Illustrates the 'Small habits. Stronger money confidence.' message.",
  },
} satisfies Record<string, WealthConfidenceImage>;

export const wealthConfidenceImageList: WealthConfidenceImage[] =
  Object.values(wealthConfidenceImages);

/* ------------------------------------------------------------------ */
/* Brand logos                                                         */
/* ------------------------------------------------------------------ */

/** Master horizontal logo (Growth Circle mark + wordmark). Prefer the SVG. */
export const brandLogoPrimary: BrandVectorAsset = {
  key: "logoPrimaryHorizontal",
  svg: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal.svg`,
  alt: "Micro Saving Daily logo: the Growth Circle mark beside the Micro Saving Daily wordmark.",
  notes:
    "Transparent background. Convert text to outlines before final production if exact typography must be locked (per asset README).",
};

/** Raster fallbacks of the horizontal logo at the exported header sizes. */
export const brandLogoRaster = {
  h480: {
    key: "logoHorizontal480",
    png: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-480x120.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-480x120.webp`,
    alt: "Micro Saving Daily logo.",
    width: 480,
    height: 120,
    notes: "Standard website header size.",
  },
  h600: {
    key: "logoHorizontal600",
    png: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-600x150.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-600x150.webp`,
    alt: "Micro Saving Daily logo.",
    width: 600,
    height: 150,
    notes: "Larger website header size.",
  },
  h960: {
    key: "logoHorizontal960",
    png: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-960x240.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-960x240.webp`,
    alt: "Micro Saving Daily logo.",
    width: 960,
    height: 240,
    notes: "Retina header (2x of 480).",
  },
  h1200: {
    key: "logoHorizontal1200",
    png: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-1200x300.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-primary-horizontal-1200x300.webp`,
    alt: "Micro Saving Daily logo.",
    width: 1200,
    height: 300,
    notes: "High-res / retina export.",
  },
  footer: {
    key: "logoFooter",
    png: `${BASE}/logo/micro-saving-daily-logo-footer-500x125.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-footer-500x125.webp`,
    alt: "Micro Saving Daily footer logo.",
    width: 500,
    height: 125,
    notes: "Intended for the site footer.",
  },
  emailHeader: {
    key: "logoEmailHeader",
    png: `${BASE}/logo/micro-saving-daily-logo-email-header-600x160.png`,
    webp: `${BASE}/logo/micro-saving-daily-logo-email-header-600x160.webp`,
    alt: "Micro Saving Daily email header logo.",
    width: 600,
    height: 160,
    notes: "For email templates (not the web funnel) — kept here for a single source of truth.",
  },
} satisfies Record<string, BrandRasterAsset>;

/* ------------------------------------------------------------------ */
/* Brand icons + favicons                                              */
/* ------------------------------------------------------------------ */

export const growthCircleIcon: BrandVectorAsset = {
  key: "growthCircleIcon",
  svg: `${BASE}/icons/micro-saving-daily-growth-circle-icon.svg`,
  alt: "Micro Saving Daily Growth Circle icon mark.",
  notes: "Standalone brand mark. Use where the full wordmark is too wide (e.g. mobile nav, avatars).",
};

export const brandIcons = {
  /** SVG favicon (modern browsers). */
  faviconSvg: `${BASE}/icons/favicon-growth-circle.svg`,
  /** Master 512px PNG icon (PWA / social). */
  icon512: `${BASE}/icons/micro-saving-daily-growth-circle-icon-512x512.png`,
  icon512Webp: `${BASE}/icons/micro-saving-daily-growth-circle-icon-512x512.webp`,
  appleTouchIcon: `${BASE}/icons/apple-touch-icon-180x180.png`,
  favicon64: `${BASE}/icons/favicon-64x64.png`,
  favicon32: `${BASE}/icons/favicon-32x32.png`,
  favicon16: `${BASE}/icons/favicon-16x16.png`,
  faviconIco: `${BASE}/icons/favicon.ico`,
} as const;
