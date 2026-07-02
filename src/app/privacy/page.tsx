import type { Metadata } from "next";
import { BRAND, CONTACT_EMAIL, LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
  description: `How ${BRAND} collects, uses, and protects your information when you visit the site and request The Wealth Confidence Guide.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what information ${BRAND} collects, why we collect it, and the choices you have.`}
    >
      <p>
        This Privacy Policy describes how {BRAND} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and safeguards
        information when you visit our website, request The Wealth Confidence
        Guide, or communicate with us. By using our website or submitting your
        details, you agree to the practices described here.
      </p>

      <h2>Information we collect</h2>
      <p>
        <strong>Information you provide.</strong> When you request the free
        guide or contact us, we collect the information you choose to submit,
        such as your first name and email address.
      </p>
      <p>
        <strong>Information collected automatically.</strong> Like most
        websites, we may automatically receive limited technical information
        when you browse, including your device type, browser, approximate
        location derived from your IP address, referring page, and how you
        interact with our pages. This information is used in aggregate to keep
        the site working and to understand what is helpful.
      </p>
      <p>
        <strong>Cookies and similar technologies.</strong> We may use cookies
        and comparable technologies to remember preferences and measure site
        performance. You can control cookies through your browser settings;
        disabling them may affect how parts of the site function.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To deliver The Wealth Confidence Guide to the email address you provide.</li>
        <li>
          To send follow-up emails with money-habit tips, related resources,
          and occasional offers, which may include affiliate links.
        </li>
        <li>To respond to your questions and support requests.</li>
        <li>To operate, maintain, secure, and improve the website.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2>Email communications and your choices</h2>
      <p>
        When you request the guide, you are opting in to receive email from us.
        Every marketing email includes an unsubscribe link, and you may opt out
        at any time. You may also email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to be removed.
        We may still send you essential service messages, such as a reply to a
        direct request.
      </p>

      <h2>How your information is shared</h2>
      <p>
        We do not sell your personal information. We share it only in the
        following limited situations:
      </p>
      <ul>
        <li>
          <strong>Service providers.</strong> We use trusted third parties to
          run our business, such as an email delivery platform, website hosting,
          and analytics. These providers process information on our behalf and
          are expected to protect it.
        </li>
        <li>
          <strong>Legal reasons.</strong> We may disclose information if
          required by law, to protect our rights, or to prevent fraud or abuse.
        </li>
        <li>
          <strong>Business transfers.</strong> If our business is involved in a
          merger, acquisition, or sale of assets, information may be transferred
          as part of that transaction.
        </li>
      </ul>

      <h2>Affiliate links and third-party sites</h2>
      <p>
        Our website and emails may contain affiliate links to third-party
        products or services. If you click one and make a purchase, we may earn
        a commission at no extra cost to you. Third-party sites have their own
        privacy practices, and we are not responsible for them. Please review
        our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more
        detail.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information for as long as needed to provide the guide and
        related emails, to comply with legal requirements, and to resolve
        disputes. When you unsubscribe or ask us to delete your data, we remove
        or anonymize it unless we are required to retain it.
      </p>

      <h2>Data security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        your information. However, no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        delete, or restrict the use of your personal information, and to opt out
        of marketing. Residents of the European Economic Area and the United
        Kingdom may have rights under the GDPR, and California residents may
        have rights under the CCPA and CPRA. To exercise any of these rights,
        contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Our website is intended for adults and is not directed to children. We
        do not knowingly collect personal information from children. If you
        believe a child has provided us with information, please contact us so
        we can remove it.
      </p>

      <h2>International visitors</h2>
      <p>
        Our website is operated online and may be accessed from around the
        world. If you access it from outside the country where our service
        providers operate, your information may be processed in a location with
        different data protection laws than your own.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date above. Continued use of the
        website after changes take effect means you accept the updated policy.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy or your information, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
