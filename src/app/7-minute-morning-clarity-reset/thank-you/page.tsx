import type { Metadata } from "next";
import { MorningClarityThankYouHeader } from "@/components/morning-clarity/thank-you/MorningClarityThankYouHeader";
import { MorningClarityThankYouHero } from "@/components/morning-clarity/thank-you/MorningClarityThankYouHero";
import { MorningClarityOfferIntroduction } from "@/components/morning-clarity/thank-you/MorningClarityOfferIntroduction";
import { MorningClarityOfferFit } from "@/components/morning-clarity/thank-you/MorningClarityOfferFit";
import { MorningClarityDecision } from "@/components/morning-clarity/thank-you/MorningClarityDecision";
import { MorningClarityOfferFinalCta } from "@/components/morning-clarity/thank-you/MorningClarityOfferFinalCta";
import { ThankYouFooter } from "@/components/wealth-confidence/thank-you/ThankYouFooter";

const ROUTE = "/7-minute-morning-clarity-reset/thank-you";

/**
 * /7-minute-morning-clarity-reset/thank-you
 *
 * Funnel 2 post-opt-in bridge page — refined to a compact five-section flow so
 * the OPTIONAL Billionaire Brain Wave offer is visible and understandable
 * within the first 1–1.5 desktop screens, without feeling aggressive:
 *   1. Compact email-first confirmation hero — confirm the free guide is on its way.
 *   2. Primary offer + product image — the optional third-party audio program.
 *   3. Short "why this fits" (three cards).
 *   4. Brief decision / trust (two columns).
 *   5. Final CTA + full affiliate disclosure.
 *
 * The free Micro Saving Daily guide is always distinguished from the separate
 * paid third-party offer. No wealth/income/brain/neuroscience/medical/
 * manifestation claims and no guarantees appear anywhere on this page, and the
 * vendor's own promotional wording is never repeated or endorsed.
 *
 * SEO: this is a transactional post-opt-in bridge page, so it is
 * `noindex, nofollow` and the affiliate product is kept out of the SEO
 * title/description. Canonical points at the route itself.
 *
 */
export const metadata: Metadata = {
  title: "Your Morning Clarity Guide Is on Its Way | Micro Saving Daily",
  description:
    "Your free 7-Minute Morning Clarity Reset is on its way. Check your email and explore an optional guided audio program.",
  alternates: {
    canonical: ROUTE,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Your Morning Clarity Guide Is on Its Way | Micro Saving Daily",
    description:
      "Your free 7-Minute Morning Clarity Reset is on its way. Check your email and explore an optional guided audio program.",
    url: ROUTE,
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function MorningClarityThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-evergreen">
      {/* Compact confirmation header */}
      <MorningClarityThankYouHeader />
      <main data-event="thank_you_page_view" className="flex-1">
        {/* 1. Email-first confirmation hero */}
        <MorningClarityThankYouHero />
        {/* 2. Primary offer + product image */}
        <MorningClarityOfferIntroduction />
        {/* 3. Short "why this fits" */}
        <MorningClarityOfferFit />
        {/* 4. Brief decision / trust */}
        <MorningClarityDecision />
        {/* 5. Final CTA + full affiliate disclosure */}
        <MorningClarityOfferFinalCta />
      </main>
      {/* Footer (reused Micro Saving Daily thank-you footer, unchanged) */}
      <ThankYouFooter />
    </div>
  );
}
