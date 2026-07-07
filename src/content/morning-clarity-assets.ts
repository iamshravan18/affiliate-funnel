/**
 * The 7-Minute Morning Clarity Reset — image asset manifest (Funnel 2)
 * --------------------------------------------------------------------
 * Central, typed registry for the funnel-2 imagery under
 * `public/images/morning-clarity/`. Components import from here rather than
 * hard-coding string paths, so alt text, dimensions, and intended placement
 * stay consistent and accessible (mirrors the pattern in
 * `src/content/wealth-confidence-assets.ts`).
 *
 * Notes on the files themselves:
 * - Every raster ships as a high-quality JPG (archival) plus an optimized WebP
 *   (delivery, preferred). The website uses WebP as the primary source; JPG is
 *   kept for reference / fallback. Full provenance, byte sizes, and per-image
 *   compression are documented in `docs/funnel-2-image-asset-manifest.md`.
 * - `width`/`height` are the true pixel dimensions of the source files and are
 *   passed to <Image width height> to prevent Cumulative Layout Shift.
 * - Alt text below is the approved, accessible copy from the asset manifest.
 * - The two native-ad assets (native human / native flat lay) are intentionally
 *   NOT used on the homepage; they are registered here only for a single source
 *   of truth. They are reserved for Taboola / Revcontent / Meta placements.
 * - Brand palette: deep-green #0F3D2E, evergreen #0B241F, ivory #F7F3E9,
 *   gold #C9A15B, sage #A7BFA3, taupe #D6CDB8, warm-sand #E6D8C3
 *   (see globals.css @theme tokens).
 */

export type AssetOrientation = "portrait" | "landscape" | "square";

export interface MorningClarityImage {
  /** Stable lookup key for use in components. */
  key: string;
  /** Public path to the optimized WebP (preferred for delivery). */
  webp: string;
  /** Public path to the high-quality JPG (archival / fallback). */
  jpg: string;
  /** Descriptive, accessible alt text. */
  alt: string;
  width: number;
  height: number;
  /** Simplified aspect ratio label, e.g. "3:2". */
  aspectRatio: string;
  orientation: AssetOrientation;
  /** Where this image is intended to be used on the funnel. */
  recommendedSection: string;
  /** Whether the asset is used on the public homepage (vs. native-ad only). */
  homepage: boolean;
  notes: string;
}

const BASE = "/images/morning-clarity";

export const morningClarityImages = {
  heroDesktop: {
    key: "heroDesktop",
    webp: `${BASE}/morning-clarity-hero-desktop.webp`,
    jpg: `${BASE}/morning-clarity-hero-desktop.jpg`,
    alt: "Woman writing in a morning reflection guide beside tea and headphones in a softly lit home.",
    width: 1672,
    height: 941,
    aspectRatio: "16:9",
    orientation: "landscape",
    recommendedSection: "Homepage hero (desktop)",
    homepage: true,
    notes: "Primary above-the-fold hero visual on laptop/desktop widths.",
  },
  heroMobile: {
    key: "heroMobile",
    webp: `${BASE}/morning-clarity-hero-mobile.webp`,
    jpg: `${BASE}/morning-clarity-hero-mobile.jpg`,
    alt: "Woman pausing after writing in a morning reflection guide beside tea and headphones.",
    width: 1122,
    height: 1402,
    aspectRatio: "4:5",
    orientation: "portrait",
    recommendedSection: "Mobile homepage hero and social",
    homepage: true,
    notes: "Portrait composition served on small screens so mobile is not a crop of the desktop image.",
  },
  guideBundle: {
    key: "guideBundle",
    webp: `${BASE}/morning-clarity-guide-bundle.webp`,
    jpg: `${BASE}/morning-clarity-guide-bundle.jpg`,
    alt: "The 7-Minute Morning Clarity Reset shown with its routine overview, worksheet, tracker, routine card and mobile preview.",
    width: 1672,
    height: 941,
    aspectRatio: "16:9",
    orientation: "landscape",
    recommendedSection: "What's Inside and final CTA",
    homepage: true,
    notes: "Complete lead-magnet bundle mockup — the 'everything you get' visual.",
  },
  sevenMinuteFlatLay: {
    key: "sevenMinuteFlatLay",
    webp: `${BASE}/morning-clarity-seven-minute-flat-lay.webp`,
    jpg: `${BASE}/morning-clarity-seven-minute-flat-lay.jpg`,
    alt: "Open seven-minute morning routine guide beside a timer, tea, pen and headphones.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Seven-minute method section",
    homepage: true,
    notes: "Flat-lay supporting visual for the seven-minute routine explanation.",
  },
  realMorningRoutine: {
    key: "realMorningRoutine",
    webp: `${BASE}/morning-clarity-real-morning-routine.webp`,
    jpg: `${BASE}/morning-clarity-real-morning-routine.jpg`,
    alt: "Woman completing a short morning reflection worksheet at a lived-in kitchen table.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Who It's For section",
    homepage: true,
    notes: "Real-life morning routine scene for the audience section.",
  },
  routinePreview: {
    key: "routinePreview",
    webp: `${BASE}/morning-clarity-routine-preview.webp`,
    jpg: `${BASE}/morning-clarity-routine-preview.jpg`,
    alt: "Seven-minute overview page listing Settle, Notice and Choose with seven guided steps.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Take a Look Inside",
    homepage: true,
    notes: "Preview of the routine overview page.",
  },
  worksheetPreview: {
    key: "worksheetPreview",
    webp: `${BASE}/morning-clarity-worksheet-preview.webp`,
    jpg: `${BASE}/morning-clarity-worksheet-preview.jpg`,
    alt: "Morning reflection worksheet with prompts for a thought, feeling, known facts, one intention and one practical next step.",
    width: 1672,
    height: 941,
    aspectRatio: "16:9",
    orientation: "landscape",
    recommendedSection: "Take a Look Inside",
    homepage: true,
    notes: "Preview of the fillable morning reflection worksheet.",
  },
  trackerPreview: {
    key: "trackerPreview",
    webp: `${BASE}/morning-clarity-tracker-preview.webp`,
    jpg: `${BASE}/morning-clarity-tracker-preview.jpg`,
    alt: "Seven-day routine tracker showing daily intentions and a return after one missed day.",
    width: 1672,
    height: 941,
    aspectRatio: "16:9",
    orientation: "landscape",
    recommendedSection: "Take a Look Inside",
    homepage: true,
    notes: "Preview of the seven-day tracker page.",
  },
  nativeHuman: {
    key: "nativeHuman",
    webp: `${BASE}/morning-clarity-native-human.webp`,
    jpg: `${BASE}/morning-clarity-native-human.jpg`,
    alt: "Woman writing in a reflection guide during a quiet morning routine.",
    width: 1535,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Native ads (Taboola, Revcontent, Meta) — not used on the homepage",
    homepage: false,
    notes: "Native-ad human image. Reserved for paid placements; do not render on the homepage.",
  },
  nativeFlatLay: {
    key: "nativeFlatLay",
    webp: `${BASE}/morning-clarity-native-flat-lay.webp`,
    jpg: `${BASE}/morning-clarity-native-flat-lay.jpg`,
    alt: "Seven-minute morning routine guide beside a timer, tea, pen and headphones in warm morning light.",
    width: 1536,
    height: 1024,
    aspectRatio: "3:2",
    orientation: "landscape",
    recommendedSection: "Native ads (Taboola, Revcontent, Meta) — not used on the homepage",
    homepage: false,
    notes: "Native-ad flat lay. Reserved for paid placements; do not render on the homepage.",
  },
} satisfies Record<string, MorningClarityImage>;

export const morningClarityImageList: MorningClarityImage[] =
  Object.values(morningClarityImages);
