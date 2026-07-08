import type { Metadata } from "next";
import { MorningClarityThankYouHeader } from "@/components/morning-clarity/thank-you/MorningClarityThankYouHeader";
import { MorningClarityThankYouHero } from "@/components/morning-clarity/thank-you/MorningClarityThankYouHero";
import { MorningClarityOfferBridge } from "@/components/morning-clarity/thank-you/MorningClarityOfferBridge";
import { MorningClarityOfferIntroduction } from "@/components/morning-clarity/thank-you/MorningClarityOfferIntroduction";
import { MorningClarityOfferConnection } from "@/components/morning-clarity/thank-you/MorningClarityOfferConnection";
import { MorningClarityOfferFit } from "@/components/morning-clarity/thank-you/MorningClarityOfferFit";
import { MorningClarityOfferSteps } from "@/components/morning-clarity/thank-you/MorningClarityOfferSteps";
import { MorningClarityAffiliateDisclosure } from "@/components/morning-clarity/thank-you/MorningClarityAffiliateDisclosure";
import { MorningClarityOfferTrust } from "@/components/morning-clarity/thank-you/MorningClarityOfferTrust";
import { MorningClarityOfferFinalCta } from "@/components/morning-clarity/thank-you/MorningClarityOfferFinalCta";
import { ThankYouFooter } from "@/components/wealth-confidence/thank-you/ThankYouFooter";

const ROUTE = "/7-minute-morning-clarity-reset/thank-you";

/**
 * /7-minute-morning-clarity-reset/thank-you
 *
 * Funnel 2 post-opt-in bridge page. Strategic order (approved — see CLAUDE.md
 * and docs/second-funnel-billionaire-brain-wave-plan.md):
 *   1. Confirm the free guide is ready and give clear access to it FIRST.
 *   2. Only then introduce the OPTIONAL third-party Billionaire Brain Wave
 *      audio program, with attributed (never asserted) claims, an inline +
 *      standalone affiliate disclosure, and a genuine path back to the guide.
 *
 * The free Micro Saving Daily guide is always distinguished from the separate
 * paid third-party offer. No wealth/income/brain/neuroscience/medical/
 * manifestation claims and no guarantees appear anywhere on this page.
 *
 * SEO: this is a transactional post-opt-in bridge page, so it is
 * `noindex, nofollow` and the affiliate product is kept out of the SEO
 * title/description. Canonical points at the route itself.
 *
 * TODO(guide-delivery): the completed Funnel 2 PDF is not yet connected, so the
 * download control is an accessibly-disabled placeholder (see
 * MorningClarityThankYouHero / thank-you-content GUIDE_PDF_READY).
 */
export const metadata: Metadata = {
  title: "Your Morning Clarity Guide Is Ready | Micro Saving Daily",
  description:
    "Access your free 7-Minute Morning Clarity Reset and explore an optional guided audio program.",
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
    title: "Your Morning Clarity Guide Is Ready | Micro Saving Daily",
    description:
      "Access your free 7-Minute Morning Clarity Reset and explore an optional guided audio program.",
    url: ROUTE,
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function MorningClarityThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-evergreen">
      {/* 1. Compact confirmation header */}
      <MorningClarityThankYouHeader />
      <main data-event="thank_you_page_view" className="flex-1">
        {/* 2. Success hero with guide access (free guide, before any offer) */}
        <MorningClarityThankYouHero />
        {/* 3. Natural "before you go" bridge */}
        <MorningClarityOfferBridge />
        {/* 4. Billionaire Brain Wave introduction */}
        <MorningClarityOfferIntroduction />
        {/* 5. Why it connects to the free guide */}
        <MorningClarityOfferConnection />
        {/* 6. "This may be for you if..." */}
        <MorningClarityOfferFit />
        {/* 7. "What happens next" */}
        <MorningClarityOfferSteps />
        {/* 8. Affiliate disclosure */}
        <MorningClarityAffiliateDisclosure />
        {/* 9. Trust and expectations */}
        <MorningClarityOfferTrust />
        {/* 10. Final CTA */}
        <MorningClarityOfferFinalCta />
      </main>
      {/* 11. Footer (reused Micro Saving Daily thank-you footer, unchanged) */}
      <ThankYouFooter />
    </div>
  );
}
