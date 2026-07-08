import { CtaButton, Reveal } from "@/components/motion";
import {
  AFFILIATE_LINK_ATTRS,
  BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL,
  OFFER_TRACKING,
  STEPS,
} from "./thank-you-content";

/**
 * Section 7 — "Here's what happens next". Four semantic, numbered steps that
 * frame the offer as a no-pressure, self-directed review. Includes the middle
 * affiliate CTA and a clear opt-out link back to the guide download area.
 */
export function MorningClarityOfferSteps() {
  return (
    <section
      aria-labelledby="steps-heading"
      className="border-t border-warm-sand/60 bg-warm-sand/40"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {STEPS.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="steps-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
            >
              {STEPS.h2}
            </h2>
          </Reveal>
        </div>

        <ol className="mt-10 grid gap-4">
          {STEPS.items.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={0.08 + i * 0.06}
              className="flex items-start gap-4 rounded-2xl border border-taupe/60 bg-ivory p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-deep-green font-serif text-lg font-semibold text-ivory"
              >
                {i + 1}
              </span>
              <span className="pt-1 leading-relaxed text-evergreen/85">
                {item}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton
              href={BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL}
              {...AFFILIATE_LINK_ATTRS}
              data-event="affiliate_offer_click"
              data-tracking-label={OFFER_TRACKING.middle}
            >
              {STEPS.ctaLabel}
              <span aria-hidden="true" className="ml-1">
                &rarr;
              </span>
            </CtaButton>

            <a
              href={STEPS.secondaryHref}
              data-event="affiliate_offer_decline"
              className="text-sm font-medium text-evergreen/70 underline-offset-4 transition-colors hover:text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {STEPS.secondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
