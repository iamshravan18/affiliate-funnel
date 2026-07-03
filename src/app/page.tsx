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
 * Micro Saving Daily — homepage (lead-capture funnel for The Wealth Confidence
 * Guide). Sole goal: opt-ins for the free guide. No thank-you page, affiliate
 * bridge, or live email integration in this phase (see OptInForm MailerLite
 * TODO). Imagery + alt text + dimensions come from the typed asset manifest at
 * src/content/wealth-confidence-assets.ts.
 */
export default function Home() {
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
