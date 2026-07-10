import type { Metadata } from "next";
import { SiteHeader } from "@/components/wealth-confidence/SiteHeader";
import { Hero } from "@/components/wealth-confidence/Hero";
import { ProblemSection } from "@/components/wealth-confidence/ProblemSection";
import { MethodSection } from "@/components/wealth-confidence/MethodSection";
import { WhatsInsideSection } from "@/components/wealth-confidence/WhatsInsideSection";
import { WorkbookSampleSection } from "@/components/wealth-confidence/WorkbookSampleSection";
import { BeliefSection } from "@/components/wealth-confidence/BeliefSection";
import { FinalOptInSection } from "@/components/wealth-confidence/FinalOptInSection";
import { SiteFooter } from "@/components/wealth-confidence/SiteFooter";

/**
 * /wealth-confidence-guide
 *
 * Funnel 1 — The Wealth Confidence Guide lead-capture page. Previously lived
 * at the root (/), now preserved here at its dedicated route so the root can
 * serve as the Micro Saving Daily brand homepage.
 *
 * IMPORTANT: Do not modify the content, styling, components, opt-in form,
 * MailerLite integration, or tracking of this page. It must remain visually
 * and functionally identical to the original.
 */

export const metadata: Metadata = {
  title: "The Wealth Confidence Guide | Micro Saving Daily",
  description:
    "Build stronger money confidence one small choice at a time with a free guide from Micro Saving Daily.",
  alternates: {
    canonical: "/wealth-confidence-guide",
  },
  openGraph: {
    title: "The Wealth Confidence Guide | Micro Saving Daily",
    description:
      "Simple daily money-awareness shifts for calmer financial decisions. Small habits. Stronger money confidence.",
    url: "/wealth-confidence-guide",
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function WealthConfidenceGuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <WhatsInsideSection />
        <WorkbookSampleSection />
        <BeliefSection />
        <FinalOptInSection />
      </main>
      <SiteFooter />
    </>
  );
}
