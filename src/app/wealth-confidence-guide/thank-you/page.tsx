import type { Metadata } from "next";
import { ThankYouHeader } from "@/components/wealth-confidence/thank-you/ThankYouHeader";
import { GuideConfirmation } from "@/components/wealth-confidence/thank-you/GuideConfirmation";
import { ImmediateAction } from "@/components/wealth-confidence/thank-you/ImmediateAction";
import { MindsetTransition } from "@/components/wealth-confidence/thank-you/MindsetTransition";
import { AffiliateResourceCard } from "@/components/wealth-confidence/thank-you/AffiliateResourceCard";
import { ThankYouFooter } from "@/components/wealth-confidence/thank-you/ThankYouFooter";

/**
 * /wealth-confidence-guide/thank-you
 *
 * Post-subscription page for The Wealth Confidence Guide. Strategic order
 * (approved Phase 5A): fulfil the guide promise first, deliver an immediate
 * practical money-awareness action, then softly bridge into ONE optional
 * third-party resource (The Billionaire Brain Wave) below the fold.
 *
 * ~70% Micro Saving Daily brand experience / ~30% affiliate bridge. The guide
 * always appears before the affiliate resource, and the affiliate CTA never
 * visually overpowers the brand guide CTA.
 *
 * Not indexed (transactional confirmation page). Affiliate product is
 * deliberately absent from the SEO title/description.
 *
 * TODO(MailerLite): once subscription delivery exists, the OptInForm should
 * redirect here on success (and real email/PDF delivery should replace the
 * "access is being prepared" placeholder wording in GuideConfirmation).
 */
export const metadata: Metadata = {
  title: "Your Wealth Confidence Guide | Micro Saving Daily",
  description:
    "Access The Wealth Confidence Guide and take your first small step toward calmer money awareness.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Your Wealth Confidence Guide | Micro Saving Daily",
    description:
      "Access The Wealth Confidence Guide and take your first small step toward calmer money awareness.",
    url: "/wealth-confidence-guide/thank-you",
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-evergreen">
      <ThankYouHeader />
      <main data-event="thank_you_page_view" className="flex-1">
        {/* 1. Guide fulfilment first */}
        <GuideConfirmation />
        {/* 2. Immediate practical value */}
        <ImmediateAction />
        {/* 3. Soft mindset transition */}
        <MindsetTransition />
        {/* 4. Single optional affiliate resource (below the fold) */}
        <AffiliateResourceCard />
      </main>
      <ThankYouFooter />
    </div>
  );
}
