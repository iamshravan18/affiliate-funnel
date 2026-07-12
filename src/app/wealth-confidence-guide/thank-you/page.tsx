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
 * Post-subscription page for The Wealth Confidence Guide. Email-first flow:
 * the guide is delivered by email (MailerLite), so this page confirms the guide
 * is on its way and tells the visitor to check their inbox — it no longer offers
 * a direct PDF download. It then bridges into ONE optional third-party resource
 * (The Money Script presentation) as the recommended next step.
 *
 * The Micro Saving Daily brand confirmation always appears before the affiliate
 * resource, and the affiliate offer is framed as optional and educational.
 *
 * Not indexed (transactional confirmation page). Affiliate product is
 * deliberately absent from the SEO title/description.
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
        {/* 1. Confirmation — guide is on its way by email */}
        <GuideConfirmation />
        {/* 2. Bridge into the optional next step */}
        <MindsetTransition />
        {/* 3. The Money Script offer card (optional next step) */}
        <AffiliateResourceCard />
        {/* 4. Immediate practical value (Notice · Pause · Repeat) */}
        <ImmediateAction />
      </main>
      <ThankYouFooter />
    </div>
  );
}
