import Link from "next/link";
import { Reveal } from "@/components/motion";

/**
 * Section 11: Final guide-selection CTA on an evergreen background.
 * Side-by-side buttons on desktop, stacked full-width on mobile.
 */
export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-evergreen text-ivory"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <h2
            id="final-cta-heading"
            className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Choose One Small Place to Begin
          </h2>
        </Reveal>

        <Reveal delay={0.1} as="p">
          <span className="mt-5 block text-lg leading-relaxed text-ivory/75">
            Start with the guide that feels most useful today. Both are free,
            practical and designed to fit into real life.
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Link
              href="/wealth-confidence-guide"
              className="inline-flex w-full items-center justify-center rounded-full bg-ivory px-9 py-4 text-base font-medium text-deep-green shadow-md shadow-black/20 transition-colors hover:bg-warm-sand hover:shadow-lg hover:ring-1 hover:ring-gold/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
              data-event="homepage_final_wealth_click"
              data-guide-choice="wealth-confidence"
              data-cta-location="final-section"
            >
              Get the Wealth Confidence Guide
            </Link>
            <Link
              href="/7-minute-morning-clarity-reset"
              className="inline-flex w-full items-center justify-center rounded-full border border-ivory/40 bg-transparent px-9 py-4 text-base font-medium text-ivory transition-colors hover:border-gold/60 hover:bg-ivory/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
              data-event="homepage_final_clarity_click"
              data-guide-choice="morning-clarity"
              data-cta-location="final-section"
            >
              Get the Morning Clarity Reset
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
