import type { Metadata } from "next";
import { BRAND, CONTACT_EMAIL, LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${BRAND}`,
  description: `How ${BRAND} uses affiliate links and earns commissions, in line with FTC guidelines.`,
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      intro="Transparency matters to us. Here is exactly how affiliate links work on this site."
    >
      <p>
        This disclosure is provided in accordance with the United States Federal
        Trade Commission (FTC) guidelines on endorsements and testimonials. It
        explains how {BRAND} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) may earn income from some of the links on our website
        and in our emails.
      </p>

      <h2>What affiliate links are</h2>
      <p>
        An affiliate link is a special tracking link to a product or service
        offered by a third party. If you click one of our affiliate links and
        make a purchase, we may receive a commission from that company.
      </p>

      <h2>What this means for you</h2>
      <ul>
        <li>
          <strong>No extra cost.</strong> Using our affiliate links never
          changes the price you pay. The commission is paid by the seller, not
          by you.
        </li>
        <li>
          <strong>Not every link earns a commission.</strong> Many links on this
          site are simply references or resources with no affiliate
          relationship.
        </li>
        <li>
          <strong>Your choice.</strong> You are always free to visit any product
          or service directly instead of using our links.
        </li>
      </ul>

      <h2>Our commitment</h2>
      <p>
        We only mention products, tools, or resources that we believe may be
        genuinely useful to our readers. Any opinions expressed are our own.
        Earning a commission does not influence the honesty of what we share,
        and a company paying a commission does not buy a positive mention.
      </p>

      <h2>No guaranteed results</h2>
      <p>
        Affiliate products are provided by third parties, and we cannot
        guarantee their quality, availability, or the results you may
        experience. Any purchase you make through a third party is governed by
        that company&apos;s own terms, pricing, and policies.
      </p>

      <h2>Programs we may participate in</h2>
      <p>
        We may participate in a variety of affiliate and referral programs
        operated by third-party companies and networks. When we have a material
        connection to a product we mention, we aim to make that relationship
        clear at or near the relevant link.
      </p>

      <h2>Educational content only</h2>
      <p>
        Nothing on this site, including any affiliate recommendation, is
        financial, investment, tax, or legal advice. Please review our{" "}
        <a href="/disclaimer">Disclaimer</a> and{" "}
        <a href="/terms">Terms of Service</a> for more information, and consult
        a qualified professional before making financial decisions.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about our affiliate relationships, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
