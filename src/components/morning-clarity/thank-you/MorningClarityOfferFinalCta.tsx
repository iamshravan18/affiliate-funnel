import { CtaButton, Reveal } from "@/components/motion";
import { GrowthCircleMark } from "@/components/wealth-confidence/GrowthCircleMark";
import {
  AFFILIATE_LINK_ATTRS,
  BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL,
  FINAL,
  OFFER_TRACKING,
} from "./thank-you-content";

/**
 * Section 10 — final CTA. Dark evergreen panel, ivory type, gold as a fine
 * accent only. Offers the final affiliate CTA alongside a clear, equally
 * available path back to the free guide. Footer microcopy restates that this
 * is an optional third-party offer with no guaranteed outcome.
 *
 * The affiliate CTA is the solid brand button (this section contains no
 * competing guide-download control, so it is unambiguous); the "download my
 * guide instead" path is an outline button of equal prominence, keeping the
 * free guide a genuine, non-subordinate choice.
 */
export function MorningClarityOfferFinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="bg-evergreen text-ivory"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-20">
        <Reveal className="flex flex-col items-center">
          <GrowthCircleMark className="h-10 w-10 text-ivory/90" />
          <span aria-hidden="true" className="mt-5 block h-px w-16 bg-gold/70" />
          <span className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {FINAL.eyebrow}
          </span>
          <h2
            id="final-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-ivory sm:text-[2.6rem]"
          >
            {FINAL.h2}
          </h2>
          <p className="mt-4 max-w-[42rem] text-lg leading-relaxed text-ivory/80">
            {FINAL.body}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton
              href={BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL}
              {...AFFILIATE_LINK_ATTRS}
              tone="invert"
              data-event="affiliate_offer_click"
              data-tracking-label={OFFER_TRACKING.final}
            >
              {FINAL.primaryLabel}
              <span aria-hidden="true" className="ml-1">
                &rarr;
              </span>
            </CtaButton>

            <a
              href={FINAL.secondaryHref}
              data-event="affiliate_offer_decline"
              className="inline-flex items-center justify-center rounded-full border border-ivory/40 bg-transparent px-9 py-4 text-base font-medium text-ivory transition-colors duration-200 hover:border-gold/60 hover:bg-ivory/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {FINAL.secondaryLabel}
            </a>
          </div>

          <p className="mt-6 text-sm text-ivory/60">{FINAL.microcopy}</p>

          {/* Full affiliate disclosure directly below the final CTA area. */}
          <p className="mt-6 max-w-[44rem] border-t border-ivory/20 pt-5 text-sm leading-relaxed text-ivory/70">
            <span className="font-semibold text-ivory/90">
              {FINAL.disclosureLabel}
            </span>{" "}
            {FINAL.disclosureBody}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
