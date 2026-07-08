import Image from "next/image";
import { CtaButton, Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import {
  AFFILIATE_LINK_ATTRS,
  BILLIONAIRE_BRAIN_WAVE_AFFILIATE_URL,
  OFFER,
  OFFER_ANCHOR,
  OFFER_TRACKING,
} from "./thank-you-content";

const productVisual = morningClarityImages.billionaireBrainWaveProduct;

/**
 * Section 2 — Primary offer. Appears immediately after the confirmation hero so
 * the optional Billionaire Brain Wave program is understandable within the
 * first 1–1.5 desktop screens.
 *
 * Premium two-column layout: left is the approved third-party product image
 * (box, disc, smartphone, headphones); right is a neutral, non-claim
 * description, four format bullets, the primary affiliate CTA, and the concise
 * affiliate disclosure placed directly under the CTA (never buried).
 *
 * The product image is served as WebP (JPG fallback lives alongside it) and is
 * displayed with object-contain in a controlled frame so the full mockup stays
 * visible without distortion. The source was top-cropped to de-emphasize the
 * lower benefit-claim strip, and no vendor claims are repeated in the copy.
 */
export function MorningClarityOfferIntroduction() {
  return (
    <section
      id={OFFER_ANCHOR}
      aria-labelledby="offer-heading"
      data-event="affiliate_bridge_view"
      className="scroll-mt-8 border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
          {/* Product image — first on desktop, second on mobile is avoided:
              on mobile the product must appear before the offer copy, so it is
              rendered first in the DOM and sits above the copy at small widths.
              The card uses a portrait frame: on mobile it grows with the image's
              natural aspect ratio (no fixed height that would leave empty bands);
              on desktop it is a fixed tall frame so it visually matches the
              height of the copy column and the portrait mockup fills it. */}
          <RevealMedia className="order-1">
            <div className="mx-auto flex aspect-[4/5] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-2xl border border-warm-sand bg-warm-sand/25 p-4 shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5 sm:max-w-[460px] sm:p-6 md:aspect-auto md:h-[600px] md:max-w-[540px] lg:h-[640px]">
              <Image
                src={productVisual.webp}
                alt={productVisual.alt}
                width={productVisual.width}
                height={productVisual.height}
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 46vw, 92vw"
                loading="eager"
                fetchPriority="high"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
          </RevealMedia>

          {/* Offer copy + CTA + inline disclosure */}
          <Reveal className="order-2">
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

            {OFFER.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 leading-relaxed text-evergreen/80"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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
                data-tracking-label={OFFER_TRACKING.offer}
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

            {/* Affiliate disclosure directly under the offer CTA (not buried). */}
            <p className="mt-5 border-t border-warm-sand pt-4 text-sm leading-relaxed text-evergreen/70">
              {OFFER.disclosure}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
