import Image from "next/image";
import { CtaButton, Reveal, RevealMedia } from "@/components/motion";

/**
 * Section 3 + 4 — The Money Script offer card (the ONLY affiliate offer on this
 * page) plus its trust/disclaimer line.
 *
 * Compliance + design rules baked in here (do not relax without approval):
 * - Framed as an OPTIONAL, third-party, educational presentation. No
 *   wealth/income/manifestation/medical claims and no repetition of the
 *   vendor's aggressive sales-page wording.
 * - Premium calm card: image INSIDE the card (not a full-width banner).
 *   Responsive — image left / copy right on desktop, stacked (image above copy)
 *   on mobile.
 * - "Optional / third-party" status is communicated with text + icon, not
 *   colour alone. A short independent-recommendation disclaimer sits directly
 *   under the CTA (Section 4).
 *
 * Affiliate link:
 *   The Money Script ClickBank hoplink. The CTA opens in a new tab with
 *   rel="sponsored noopener noreferrer" and reuses the existing affiliate CTA
 *   tracking attributes (data-event / data-tracking-label).
 *
 * Mockup image:
 *   Served from public/images/the-money-script-mockup.jpg.
 */
const MONEY_SCRIPT_AFFILIATE_URL =
  "https://399ebep0yf69650bpihrv-vewe.hop.clickbank.net";

/** Intended tracking label for the affiliate link. */
const TRACKING_LABEL = "thank_you_page";

const MOCKUP = {
  src: "/images/the-money-script-mockup.jpg",
  alt: "The Money Script free presentation mockup.",
  width: 1122,
  height: 1402,
};

export function AffiliateResourceCard() {
  return (
    <section
      id="optional-resource"
      aria-labelledby="affiliate-heading"
      data-event="affiliate_bridge_view"
      className="border-t border-warm-sand/60 bg-sage/10"
    >
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-warm-sand bg-ivory shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              {/* Mockup image — inside the card. Stacked on top on mobile,
                  left on desktop. Sits on a soft beige panel so it reads as a
                  tasteful product still, not a loud banner. */}
              <RevealMedia className="flex items-center justify-center bg-warm-sand/30 p-6 sm:p-8">
                <div className="w-full max-w-[240px] overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-md shadow-deep-green/10">
                  <Image
                    src={MOCKUP.src}
                    alt={MOCKUP.alt}
                    width={MOCKUP.width}
                    height={MOCKUP.height}
                    sizes="(min-width: 768px) 240px, 60vw"
                    className="h-auto w-full"
                  />
                </div>
              </RevealMedia>

              {/* Content */}
              <div className="px-5 pb-6 pt-2 md:px-7 md:py-8">
                {/* Optional / third-party badge — icon + text, not colour alone */}
                <p className="inline-flex items-center gap-1.5 rounded-full border border-taupe bg-warm-sand/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-evergreen/75">
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-deep-green"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 7.2v3.4M8 5.2h.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Optional third-party resource
                </p>

                <h2
                  id="affiliate-heading"
                  className="mt-4 font-serif text-2xl font-semibold leading-tight text-deep-green sm:text-3xl"
                >
                  Watch This Free Money Script Presentation
                </h2>

                <p className="mt-3 leading-relaxed text-evergreen/80">
                  This presentation explains how hidden beliefs and repeated
                  financial patterns can shape the way people think, save,
                  spend, and pursue income opportunities.
                </p>

                {/* CTA — reuses the existing affiliate CTA tracking. Opens in a
                    new tab. Placeholder URL until the real link is configured. */}
                <div className="mt-6">
                  <CtaButton
                    href={MONEY_SCRIPT_AFFILIATE_URL}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    data-event="affiliate_offer_click"
                    data-tracking-label={TRACKING_LABEL}
                  >
                    Watch The Free Presentation
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </CtaButton>
                </div>

                {/* Section 4 — small trust / disclaimer line under the CTA. */}
                <p className="mt-4 text-sm leading-relaxed text-evergreen/65">
                  This is an independent recommendation and may include an
                  affiliate link.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
