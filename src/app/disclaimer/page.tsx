import type { Metadata } from "next";
import { BRAND, CONTACT_EMAIL, LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: `Disclaimer | ${BRAND}`,
  description: `${BRAND} content is educational only and is not financial, investment, tax, or legal advice.`,
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro={`${BRAND} shares educational content only. It is not a substitute for professional financial advice.`}
    >
      <p>
        The information provided by {BRAND} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) on this website and in The Wealth Confidence Guide
        and related emails is for general educational and informational purposes
        only. By using this site, you acknowledge and agree to the terms of this
        Disclaimer.
      </p>

      <h2>Not financial advice</h2>
      <p>
        Our content is not financial, investment, tax, accounting, or legal
        advice. We are not financial advisors, and nothing we share should be
        interpreted as a recommendation to buy, sell, or hold any financial
        product or to pursue any particular financial strategy. Always seek the
        guidance of a qualified professional who understands your specific
        situation before making financial decisions.
      </p>

      <h2>No professional relationship</h2>
      <p>
        Reading our content, downloading the guide, or contacting us does not
        create an advisor-client, fiduciary, or other professional relationship
        between you and {BRAND}.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        Personal finance outcomes depend on many factors that are unique to each
        individual and outside our control. We make no promises or guarantees
        about savings, income, or any specific financial result. Your results
        will vary, and any examples are for illustration only, not a promise of
        performance.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You are solely responsible for your own financial choices and for
        evaluating whether any information is appropriate for your
        circumstances. Any action you take based on our content is strictly at
        your own risk.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        We make reasonable efforts to keep our content accurate and up to date,
        but we do not warrant that it is complete, reliable, or free of errors.
        Information may change over time, and we are under no obligation to
        update it.
      </p>

      <h2>External links</h2>
      <p>
        Our content may contain links to third-party websites, including
        affiliate links. We do not control those sites and are not responsible
        for their content, accuracy, or practices. Including a link does not
        imply endorsement. Please review our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for details on
        how affiliate links work.
      </p>

      <h2>Testimonials and examples</h2>
      <p>
        Any stories, examples, or opinions shared reflect individual experiences
        and are not typical or guaranteed. They are provided to illustrate ideas
        and do not represent a promise that you will achieve similar outcomes.
      </p>

      <h2>Consult a professional</h2>
      <p>
        Before making decisions that affect your finances, please consult a
        licensed financial advisor, accountant, or attorney who can consider
        your individual needs.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Disclaimer, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
