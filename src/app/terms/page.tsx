import type { Metadata } from "next";
import { BRAND, CONTACT_EMAIL, LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: `Terms of Service | ${BRAND}`,
  description: `The terms and conditions for using the ${BRAND} website and free educational resources.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`Please read these terms carefully. They govern your use of the ${BRAND} website and free resources.`}
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) form an agreement between
        you and {BRAND} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) regarding your use of our website, The Wealth
        Confidence Guide, and any related emails or content
        (together, the &ldquo;Service&rdquo;). By accessing the Service or
        submitting your details, you agree to these Terms. If you do not agree,
        please do not use the Service.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of majority where you
        live, to use the Service. By using it, you confirm that you meet this
        requirement.
      </p>

      <h2>What we provide</h2>
      <p>
        The Service offers free educational content about money habits and
        financial awareness, including a downloadable guide and follow-up
        emails. We may change, pause, or discontinue any part of the Service at
        any time without notice.
      </p>

      <h2>Not financial advice</h2>
      <p>
        All content is provided for general educational and informational
        purposes only. It is not financial, investment, tax, legal, or
        accounting advice, and it does not create any professional or fiduciary
        relationship. You are solely responsible for your own financial
        decisions and should consult a qualified professional before acting on
        anything you read. See our <a href="/disclaimer">Disclaimer</a> for more
        detail.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Service and its content, including text, graphics, logos, and the
        guide itself, are owned by {BRAND} or its licensors and are protected by
        applicable intellectual property laws. We grant you a limited,
        personal, non-transferable license to access and use the content for
        your own non-commercial use. You may not copy, resell, redistribute, or
        create derivative works from our content without written permission.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful, harmful, or fraudulent purpose.</li>
        <li>
          Attempt to gain unauthorized access to the Service, other accounts, or
          our systems.
        </li>
        <li>
          Interfere with or disrupt the Service, including by introducing
          malware or excessive automated requests.
        </li>
        <li>
          Submit information that is false, or that belongs to someone else
          without their permission.
        </li>
      </ul>

      <h2>Email communications</h2>
      <p>
        By submitting your email address, you consent to receive the guide and
        related emails from us, which may include affiliate links. You can
        unsubscribe at any time using the link in any email or by contacting us
        at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Affiliate links and third-party content</h2>
      <p>
        The Service may include affiliate links and links to third-party
        websites. We may earn a commission when you purchase through an
        affiliate link, at no additional cost to you. We do not control and are
        not responsible for third-party content, products, or practices. Your
        dealings with third parties are solely between you and them. See our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind, whether express
        or implied, including fitness for a particular purpose and
        non-infringement. We do not warrant that the Service will be
        uninterrupted, error-free, or that any information is accurate or
        complete.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {BRAND} and its owners will not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of profits, savings, or data, arising
        from your use of, or inability to use, the Service or any content within
        it.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {BRAND} and its owners from any
        claims, losses, or expenses arising out of your use of the Service or
        your violation of these Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in the jurisdiction in
        which {BRAND} operates, without regard to conflict-of-law principles.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above. Your continued use of the
        Service after changes take effect constitutes acceptance of the updated
        Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
