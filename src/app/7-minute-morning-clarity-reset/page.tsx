import type { Metadata } from "next";
import { MorningClarityHeader } from "@/components/morning-clarity/MorningClarityHeader";
import { MorningClarityHero } from "@/components/morning-clarity/MorningClarityHero";
import { MorningClarityProblem } from "@/components/morning-clarity/MorningClarityProblem";
import { MorningClarityMethod } from "@/components/morning-clarity/MorningClarityMethod";
import { MorningClarityInclusions } from "@/components/morning-clarity/MorningClarityInclusions";
import { MorningClaritySevenMinute } from "@/components/morning-clarity/MorningClaritySevenMinute";
import { MorningClarityAudience } from "@/components/morning-clarity/MorningClarityAudience";
import { MorningClarityBelief } from "@/components/morning-clarity/MorningClarityBelief";
import { MorningClarityPreviews } from "@/components/morning-clarity/MorningClarityPreviews";
import { MorningClarityTrust } from "@/components/morning-clarity/MorningClarityTrust";
import { MorningClarityFaq } from "@/components/morning-clarity/MorningClarityFaq";
import { MorningClarityFinalCta } from "@/components/morning-clarity/MorningClarityFinalCta";
import { SiteFooter } from "@/components/wealth-confidence/SiteFooter";
import { morningClarityImages } from "@/content/morning-clarity-assets";

const ROUTE = "/7-minute-morning-clarity-reset";
const ogImage = morningClarityImages.heroDesktop;

/**
 * Funnel 2 homepage — The 7-Minute Morning Clarity Reset (a free Micro Saving
 * Daily lead magnet). Sole goal: collect a first name + email for the free
 * guide. Affiliate-free, educational only — no product name, no affiliate
 * link, no wealth/brain/health claims (see docs/funnel-2-homepage-plan.md).
 * Metadata copy is the approved SEO/OG copy from that plan.
 */
export const metadata: Metadata = {
  title: "The 7-Minute Morning Clarity Reset | Micro Saving Daily",
  description:
    "A free daily reflection routine from Micro Saving Daily — pause, notice automatic money thoughts, and begin the day with clearer intention. Seven quiet minutes. No budgeting app. No spam.",
  alternates: {
    canonical: ROUTE,
  },
  openGraph: {
    title: "The 7-Minute Morning Clarity Reset",
    description:
      "A calm seven-minute morning routine to quiet mental clutter and start the day with clearer intention. Free guide from Micro Saving Daily.",
    url: ROUTE,
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage.webp,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
};

export default function MorningClarityResetPage() {
  return (
    <>
      <MorningClarityHeader />
      <main>
        <MorningClarityHero />
        <MorningClarityProblem />
        <MorningClarityMethod />
        <MorningClarityInclusions />
        <MorningClaritySevenMinute />
        <MorningClarityAudience />
        <MorningClarityBelief />
        <MorningClarityPreviews />
        <MorningClarityTrust />
        <MorningClarityFaq />
        <MorningClarityFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
