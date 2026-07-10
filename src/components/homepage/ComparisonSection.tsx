import { Reveal } from "@/components/motion";

/**
 * Section 5: Comparison — helps visitors decide which guide to choose.
 * Desktop: two-column layout. Mobile: stacked cards (not a cramped table).
 */

const WEALTH_POINTS = [
  "Focuses on everyday money habits",
  "Practical spending reflection",
  "Supports stronger financial awareness",
  "Written exercises and prompts",
];

const CLARITY_POINTS = [
  "Focuses on morning clarity",
  "Seven-minute reflection routine",
  "Creates a calmer starting point",
  "Written routine and seven-day tracker",
];

export function ComparisonSection() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="border-t border-warm-sand/60 bg-warm-sand/15"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              A simple way to decide
            </p>
          </Reveal>
          <Reveal delay={0.1} as="h2">
            <span
              id="comparison-heading"
              className="mt-4 block font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
            >
              Not Sure Which One to Choose?
            </span>
          </Reveal>
        </div>

        {/* Comparison cards (stacked on mobile, side-by-side on desktop) */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Wealth Confidence column */}
          <Reveal>
            <div className="rounded-2xl border border-taupe/50 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-deep-green">
                Wealth Confidence Guide
              </h3>
              <ul className="mt-4 space-y-3">
                {WEALTH_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-evergreen/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Morning Clarity column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-taupe/50 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-deep-green">
                Morning Clarity Reset
              </h3>
              <ul className="mt-4 space-y-3">
                {CLARITY_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-evergreen/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Closing copy + CTA */}
        <Reveal>
          <div className="mt-10 text-center">
            <p className="text-base leading-relaxed text-evergreen/70">
              Both guides are educational, practical and designed to support
              small, repeatable changes.
            </p>
            <a
              href="#free-guides"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-deep-green/30 bg-transparent px-8 py-3.5 text-sm font-medium text-deep-green transition-colors hover:border-gold/50 hover:bg-deep-green/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              data-event="homepage_comparison_view"
              data-cta-location="comparison"
            >
              Choose My Starting Point
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
