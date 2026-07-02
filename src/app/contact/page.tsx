import type { Metadata } from "next";
import { BRAND, CONTACT_EMAIL, LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: `Contact | ${BRAND}`,
  description: `Get in touch with the ${BRAND} team about the free guide, your account, or a privacy request.`,
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact us"
      kicker="Get in touch"
      intro="Questions about the guide, your emails, or your data? We are happy to help."
    >
      <p>
        The best way to reach {BRAND} is by email. We read every message and aim
        to respond within two to three business days.
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>What we can help with</h2>
      <ul>
        <li>Trouble receiving or downloading The Wealth Confidence Guide.</li>
        <li>Questions about the emails you receive from us.</li>
        <li>
          Unsubscribing, or updating the email address on file. You can also
          unsubscribe using the link at the bottom of any email we send.
        </li>
        <li>
          Privacy requests, such as accessing, correcting, or deleting your
          information. See our <a href="/privacy">Privacy Policy</a> for details.
        </li>
        <li>General feedback about our content.</li>
      </ul>

      <h2>A quick note</h2>
      <p>
        We are not financial advisors, and we cannot provide personalized
        financial, investment, tax, or legal advice by email. Our content is
        educational only. For decisions about your specific situation, please
        consult a qualified professional. You can learn more in our{" "}
        <a href="/disclaimer">Disclaimer</a>.
      </p>

      <h2>Helping us respond faster</h2>
      <p>
        When you write to us, it helps to include the email address you used to
        request the guide and a short description of your question. This lets us
        find your details and reply with the right information more quickly.
      </p>
    </LegalPage>
  );
}
