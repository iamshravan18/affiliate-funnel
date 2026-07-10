import type { Metadata } from "next";
import { HomepageHeader } from "@/components/homepage/HomepageHeader";
import { HomepageHero } from "@/components/homepage/HomepageHero";
import { TrustStrip } from "@/components/homepage/TrustStrip";
import { GuideSelection } from "@/components/homepage/GuideSelection";
import { ComparisonSection } from "@/components/homepage/ComparisonSection";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { BrandBelief } from "@/components/homepage/BrandBelief";
import { WhatGuidesAre } from "@/components/homepage/WhatGuidesAre";
import { AboutSection } from "@/components/homepage/AboutSection";
import { HomepageFaq } from "@/components/homepage/HomepageFaq";
import { FinalCta } from "@/components/homepage/FinalCta";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";

/**
 * Micro Saving Daily — brand homepage (guide gateway).
 *
 * This page introduces the Micro Saving Daily brand and helps visitors choose
 * which free guide to explore. It does NOT collect emails; visitors enter a
 * dedicated funnel before opting in.
 *
 * Route: /
 * Funnel 1 (Wealth Confidence Guide): /wealth-confidence-guide
 * Funnel 2 (Morning Clarity Reset): /7-minute-morning-clarity-reset
 */

export const metadata: Metadata = {
  title: "Micro Saving Daily | Free Guides for Money Confidence and Morning Clarity",
  description:
    "Explore free practical guides from Micro Saving Daily to build stronger money confidence, clearer mornings and more intentional everyday habits.",
  alternates: {
    canonical: "https://www.microsavingdaily.com/",
  },
  openGraph: {
    title: "Micro Saving Daily | Free Guides for Money Confidence and Morning Clarity",
    description:
      "Explore free practical guides from Micro Saving Daily to build stronger money confidence, clearer mornings and more intentional everyday habits.",
    url: "https://www.microsavingdaily.com/",
    siteName: "Micro Saving Daily",
    locale: "en_US",
    type: "website",
  },
};

/** Organization + WebSite + FAQPage structured data for the homepage. */
function HomepageJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Micro Saving Daily",
    url: "https://www.microsavingdaily.com",
    description:
      "Free practical guides for money confidence and morning clarity. Small daily habits for calmer thinking and stronger everyday decisions.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@microsavingdaily.com",
      contactType: "customer service",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Micro Saving Daily",
    url: "https://www.microsavingdaily.com",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are both guides free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can choose either resource and receive it without purchasing anything.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download both guides?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each guide has its own page and sign-up process, so you may explore both separately.",
        },
      },
      {
        "@type": "Question",
        name: "Which guide should I start with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose the Wealth Confidence Guide for everyday money habits and financial awareness. Choose the Morning Clarity Reset for a short routine focused on mental space and daily direction.",
        },
      },
      {
        "@type": "Question",
        name: "Is this financial advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Micro Saving Daily provides educational content and reflection tools only.",
        },
      },
      {
        "@type": "Question",
        name: "Will I receive emails?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. When you request a guide, you may receive relevant educational emails. You can unsubscribe at any time.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <HomepageJsonLd />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-deep-green focus:px-4 focus:py-2 focus:text-ivory focus:shadow-lg"
      >
        Skip to main content
      </a>
      <HomepageHeader />
      <main id="main-content" data-event="homepage_view">
        <HomepageHero />
        <TrustStrip />
        <GuideSelection />
        <ComparisonSection />
        <HowItWorks />
        <BrandBelief />
        <WhatGuidesAre />
        <AboutSection />
        <HomepageFaq />
        <FinalCta />
      </main>
      <HomepageFooter />
    </>
  );
}
