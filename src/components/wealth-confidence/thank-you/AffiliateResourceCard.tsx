import { CtaButton, Reveal } from "@/components/motion";

/**
 * Affiliate resource card — the ONLY affiliate offer on this page.
 *
 * Compliance rules baked in here (do not relax without approval):
 * - Framed strictly as an OPTIONAL, third-party, audio-based mindset/focus
 *   resource. No wealth/income/manifestation/medical/neurological claims and
 *   no repetition of the vendor's aggressive sales-page claims.
 * - The card must NOT visually overpower the guide download. The guide CTA is
 *   the solid brand button; this affiliate CTA uses the lighter OUTLINE tone so
 *   the brand promise stays dominant.
 * - Inline affiliate disclosure sits directly under the CTA (not only in the
 *   footer) and is rendered at a readable size/contrast — never tiny gold text.
 * - "Optional / third-party" status is communicated with text + an icon, not
 *   colour alone.
 * - The visual is a tasteful CSS/SVG panel (calm wave motif + headphone /
 *   notebook iconography). We do NOT fabricate product cover art.
 *   TODO(asset): a dedicated, brand-safe affiliate bridge lifestyle image
 *   (calm reflection / audio listening) would improve this section later.
 *
 * Affiliate link:
 *   Opens in a new tab with rel="sponsored noopener noreferrer".
 *   TODO(tracking): This is a custom vendor-domain hoplink (not
 *   hop.clickbank.net), so appending ClickBank's `tid` tracking parameter is
 *   NOT guaranteed to be honoured. The intended tracking label is
 *   "thank_you_page" (see TRACKING_LABEL). Confirm the correct tracking-param
 *   syntax with the affiliate program before adding it; until then the provided
 *   URL is preserved verbatim.
 */
const AFFILIATE_URL =
  "https://thebillionairebrainwave.com/?hopId=080bdea2-fa9d-4f5c-affd-4a654bd6a762";

/** Intended tracking label for the affiliate link (see TODO above). */
const TRACKING_LABEL = "thank_you_page";

const SUPPORTING_POINTS = [
  "Digital audio-based program",
  "Designed for short daily listening",
  "Review the vendor\u2019s full claims and terms before purchasing",
  "Separate from The Wealth Confidence Guide",
];

/** Calm, brand-safe CSS/SVG visual: soft wave lines + headphone motif. */
function ReflectionVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-deep-green"
    >
      {/* Subtle wave lines suggesting audio / calm reflection. */}
      <svg
        viewBox="0 0 400 240"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-30"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0 ${70 + i * 26} C 80 ${50 + i * 26}, 140 ${90 + i * 26}, 200 ${
              70 + i * 26
            } S 340 ${50 + i * 26}, 400 ${70 + i * 26}`}
            stroke="var(--color-sage)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Headphone mark = audio listening (not a product image). */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="relative h-16 w-16 text-ivory"
      >
        <path
          d="M14 34v-2a18 18 0 0 1 36 0v2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="34"
          width="10"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="44"
          y="34"
          width="10"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="49" cy="43" r="2" className="fill-gold" />
      </svg>
    </div>
  );
}

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
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              {/* Calm CSS visual panel */}
              <div className="p-5 md:p-6">
                <ReflectionVisual />
              </div>

              {/* Content */}
              <div className="px-5 pb-6 md:px-6 md:py-6">
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
                  The Billionaire Brain Wave
                </h2>

                <p className="mt-3 leading-relaxed text-evergreen/80">
                  A short audio-based program marketed as a daily mindset and
                  focus ritual. You can review the program, its contents, the
                  vendor&apos;s claims, price, and refund terms before deciding
                  whether it is relevant to you.
                </p>

                <ul className="mt-4 grid gap-2">
                  {SUPPORTING_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-evergreen/75"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage"
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

                {/* Primary affiliate CTA — OUTLINE tone keeps it subordinate to
                    the solid brand guide CTA above. Opens in a new tab. */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CtaButton
                    href={AFFILIATE_URL}
                    tone="outline"
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    data-event="affiliate_offer_click"
                    data-tracking-label={TRACKING_LABEL}
                  >
                    Explore the Optional Resource
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </CtaButton>

                  <a
                    href="#guide"
                    data-event="affiliate_offer_decline"
                    className="text-sm font-medium text-evergreen/70 underline-offset-4 transition-colors hover:text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    No thanks, I&apos;ll start with the guide
                  </a>
                </div>

                {/* Inline affiliate disclosure — readable, not footer-only. */}
                <p className="mt-5 border-t border-warm-sand pt-4 text-sm leading-relaxed text-evergreen/70">
                  <span className="font-semibold text-deep-green">
                    Disclosure:
                  </span>{" "}
                  This is an optional third-party resource and is not part of The
                  Wealth Confidence Guide. If you purchase through this link,
                  Micro Saving Daily may earn a commission at no additional cost
                  to you. No financial result is guaranteed.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
