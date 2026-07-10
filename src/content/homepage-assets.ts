/**
 * Homepage — image asset manifest
 * --------------------------------
 * Central, typed registry for the three approved homepage images that live
 * under `public/images/homepage/`. Components import from here rather than
 * hard-coding string paths, so alt text, dimensions and intended placement
 * stay consistent and accessible.
 *
 * Each asset ships as an optimized JPG (quality 90) plus WebP (quality 88).
 * Prefer WebP for delivery via next/image (which will handle format
 * negotiation automatically). JPG serves as the universal fallback.
 *
 * Widths/heights are the true pixel dimensions of the source files and must
 * be passed to <Image width height> to prevent layout shift.
 */

export interface HomepageImage {
  webp: string;
  jpg: string;
  alt: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait" | "square";
  recommendedSection: string;
}

export const homepageImages = {
  hero: {
    webp: "/images/homepage/micro-saving-daily-homepage-hero.webp",
    jpg: "/images/homepage/micro-saving-daily-homepage-hero.jpg",
    alt: "The Wealth Confidence Guide and the 7-Minute Morning Clarity Reset displayed together with worksheets, tea, a notebook, headphones and a mobile preview.",
    width: 1448,
    height: 1086,
    orientation: "landscape",
    recommendedSection: "Homepage hero",
  },

  wealthConfidenceCard: {
    webp: "/images/homepage/wealth-confidence-guide-card.webp",
    jpg: "/images/homepage/wealth-confidence-guide-card.jpg",
    alt: "The Wealth Confidence Guide shown with a spending-pattern worksheet, reflection card, pen, receipt and mobile preview.",
    width: 1586,
    height: 992,
    orientation: "landscape",
    recommendedSection: "Homepage Wealth Confidence guide card",
  },

  morningClarityCard: {
    webp: "/images/homepage/morning-clarity-reset-card.webp",
    jpg: "/images/homepage/morning-clarity-reset-card.jpg",
    alt: "The 7-Minute Morning Clarity Reset shown with a morning-reflection worksheet, seven-day tracker, timer, headphones, tea and mobile preview.",
    width: 1586,
    height: 992,
    orientation: "landscape",
    recommendedSection: "Homepage Morning Clarity guide card",
  },
} as const;
