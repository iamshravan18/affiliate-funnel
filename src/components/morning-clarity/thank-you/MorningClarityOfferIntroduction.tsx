import { CtaButton, Reveal, RevealMedia } from "@/components/motion";
import { OfferHeadphonesVisual } from "./OfferAudioVisual";
import {
  AFFILIATE_LINK_ATTRS,
  BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL,
  INLINE_DISCLOSURE,
  OFFER,
  OFFER_TRACKING,
} from "./thank-you-content";

/**
 * Section 4 — Billionaire Brain Wave introduction.
 *
 * Premium two-column card. Left: a restrained CSS audio/headphones visual (NO
 * vendor product artwork, NO guide image used as the paid product). Right: a
 * neutral, non-claim description of the OPTIONAL third-party audio program, its
 * format bullets, the primary affiliate CTA, and an inline affiliate disclosure
 * directly under the CTA.
 *
 * The affiliate URL is verified and live, so the CTA opens the official vendor
 * presentation in a new tab with rel="sponsored noopener noreferrer".
 */
export function MorningClarityOfferIntroduction() {
  return (
    <section
      aria-labelledby="offer-heading"
      data-event="affiliate_bridge_view"
      className="border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-warm-sand bg-ivory shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              {/* Restrained audio visual (not a product image). */}
              <RevealMedia className="p-5 md:p-6">
                <OfferHeadphonesVisual />
              </RevealMedia>

              {/* Content */}
              <div className="px-5 pb-6 md:px-6 md:py-7">
                <p className="inline-flex items-center gap-1.5 rounded-full border border-taupe bg-warm-sand/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-evergreen/75">
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-deep-green"
                    fill="none"
                  >
                    <path
                      d="M8 2.5a3 3 0 0 1 3 3v2.5a3 3 0 0 1-6 0V5.5a3 3 0 0 1 3-3ZM4 8.5a4 4 0 0 0 8 0M8 12.5v1.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {OFFER.eyebrow}
                </p>

                <h2
                  id="offer-heading"
                  className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-[2.25rem]"
                >
                  {OFFER.h2}
                </h2>

                <p className="mt-4 leading-relaxed text-evergreen/80">
                  {OFFER.description}
                </p>

                <ul className="mt-5 grid gap-2.5">
                  {OFFER.bullets.map((point) => (
                    <li
                      key={point}
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
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CtaButton
                    href={BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL}
                    {...AFFILIATE_LINK_ATTRS}
                    data-event="affiliate_offer_click"
                    data-tracking-label={OFFER_TRACKING.hero}
                  >
                    {OFFER.ctaLabel}
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </CtaButton>
                  <p className="mt-3 text-sm text-evergreen/60">
                    {OFFER.ctaMicrocopy}
                  </p>
                </div>

                {/* Inline affiliate disclosure directly under the offer CTA. */}
                <p className="mt-5 border-t border-warm-sand pt-4 text-sm leading-relaxed text-evergreen/70">
                  <span className="font-semibold text-deep-green">
                    Disclosure:
                  </span>{" "}
                  {INLINE_DISCLOSURE}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
