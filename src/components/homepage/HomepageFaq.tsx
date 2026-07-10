import { Reveal } from "@/components/motion";

/**
 * Section 10: FAQ — renders all answers visibly (no accordion since the
 * existing codebase does not have a reliable accordion pattern).
 */

const FAQS = [
  {
    question: "Are both guides free?",
    answer:
      "Yes. You can choose either resource and receive it without purchasing anything.",
  },
  {
    question: "Can I download both guides?",
    answer:
      "Yes. Each guide has its own page and sign-up process, so you may explore both separately.",
  },
  {
    question: "Which guide should I start with?",
    answer:
      "Choose the Wealth Confidence Guide for everyday money habits and financial awareness. Choose the Morning Clarity Reset for a short routine focused on mental space and daily direction.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. Micro Saving Daily provides educational content and reflection tools only.",
  },
  {
    question: "Will I receive emails?",
    answer:
      "Yes. When you request a guide, you may receive relevant educational emails. You can unsubscribe at any time.",
  },
];

export function HomepageFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 bg-ivory"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <h2
            id="faq-heading"
            className="text-center font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
          >
            A Few Things People Ask
          </h2>
        </Reveal>

        <dl className="mt-10 space-y-8">
          {FAQS.map((faq, idx) => (
            <Reveal key={faq.question} delay={idx * 0.05}>
              <div className="border-b border-taupe/40 pb-6">
                <dt className="font-serif text-lg font-semibold text-deep-green">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-evergreen/70">
                  {faq.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
