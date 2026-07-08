import { CtaButton, Reveal } from "@/components/motion";
import {
  AFFILIATE_LINK_ATTRS,
  BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL,
  DECISION,
  OFFER_TRACKING,
} from "./thank-you-content";

/**
 * Section 4 — Brief decision / trust. Merges the essential meaning of the
 * former long "This May Be Worth Exploring If…", the four-step "Here's What
 * Happens Next", and the standalone trust section into one compact two-column
 * block:
 *   Left  — a short "worth exploring if…" checklist.
 *   Right — a "review it for yourself" panel with the affiliate CTA, an equal
 *           path back to the free guide, and a short non-guarantee note.
 */
export function MorningClarityDecision() {
  return (
    <section
      aria-labelledby="decision-heading"
      className="border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left — worth exploring if… */}
          <Reveal>
            <h2
              id="decision-heading"
              className="font-serif text-2xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-[1.75rem]"
            >
              {DECISION.leftHeading}
            </h2>
            <ul className="mt-5 grid gap-3">
              {DECISION.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 leading-relaxed text-evergreen/80"
                >
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-sage"
                    fill="none"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — review it for yourself */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-warm-sand bg-warm-sand/25 p-6 shadow-sm shadow-deep-green/5 sm:p-7">
              <h3 className="font-serif text-xl font-semibold text-deep-green">
                {DECISION.rightHeading}
              </h3>
              <p className="mt-3 leading-relaxed text-evergreen/80">
                {DECISION.rightBody}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <CtaButton
                  href={BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL}
                  {...AFFILIATE_LINK_ATTRS}
                  data-event="affiliate_offer_click"
                  data-tracking-label={OFFER_TRACKING.decision}
                  className="w-full"
                >
                  {DECISION.ctaLabel}
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </CtaButton>
                <a
                  href={DECISION.secondaryHref}
                  data-event="affiliate_offer_decline"
                  className="inline-flex items-center justify-center text-sm font-medium text-deep-green underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {DECISION.secondaryLabel}
                </a>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-evergreen/60">
                {DECISION.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
