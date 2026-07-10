import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Section 4: Guide-Selection — two equal cards letting visitors choose
 * which funnel to enter. No opt-in form here.
 */

export function GuideSelection() {
  return (
    <section
      id="free-guides"
      aria-labelledby="guides-heading"
      className="scroll-mt-20 bg-ivory"
      data-event="homepage_comparison_view"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Choose Your Starting Point
            </p>
          </Reveal>
          <Reveal delay={0.1} as="h2">
            <span
              id="guides-heading"
              className="mt-4 block font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
            >
              Choose the Guide That Fits What You Need Today
            </span>
          </Reveal>
          <Reveal delay={0.15} as="p">
            <span className="mt-4 block text-lg leading-relaxed text-evergreen/70">
              Both guides are free. Start with the one that feels most relevant
              right now&mdash;you can always explore the other later.
            </span>
          </Reveal>
        </div>

        {/* Guide cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* CARD 1 — Funnel 1 */}
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-taupe/50 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* HOMEPAGE IMAGE PLACEHOLDER — Funnel 1 guide mockup */}
              <ImagePlaceholder
                label="Wealth Confidence Guide Mockup"
                description="Final Funnel 1 guide bundle image will be added here"
                aspectRatio="aspect-[16/10]"
                bg="warm-sand"
                className="rounded-none rounded-t-2xl border-0 border-b border-taupe/30"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  For stronger money confidence
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-deep-green">
                  The Wealth Confidence Guide
                </h3>
                <p className="mt-3 text-base leading-relaxed text-evergreen/70">
                  A practical guide for recognising everyday money patterns,
                  making more intentional choices and building confidence through
                  small, repeatable actions.
                </p>
                <p className="mt-4 text-sm font-medium text-deep-green/80">
                  Best for:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-evergreen/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    noticing everyday money patterns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    making more intentional spending choices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    building confidence without judgment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    using practical written exercises
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href="/wealth-confidence-guide"
                    className="inline-flex w-full items-center justify-center rounded-full bg-deep-green px-8 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    data-event="homepage_wealth_guide_click"
                    data-guide-choice="wealth-confidence"
                    data-cta-location="guide-card"
                  >
                    Explore the Wealth Confidence Guide
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* CARD 2 — Funnel 2 */}
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-taupe/50 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* HOMEPAGE IMAGE PLACEHOLDER — Funnel 2 guide mockup */}
              <ImagePlaceholder
                label="Morning Clarity Reset Mockup"
                description="Final Funnel 2 guide bundle image will be added here"
                aspectRatio="aspect-[16/10]"
                bg="sage"
                className="rounded-none rounded-t-2xl border-0 border-b border-taupe/30"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  For clearer, calmer mornings
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-deep-green">
                  The 7-Minute Morning Clarity Reset
                </h3>
                <p className="mt-3 text-base leading-relaxed text-evergreen/70">
                  A short morning routine that helps you pause, identify what is
                  taking up your attention and choose one clear direction for the
                  day.
                </p>
                <p className="mt-4 text-sm font-medium text-deep-green/80">
                  Best for:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-evergreen/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    starting the day with a crowded mind
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    following a simple morning routine
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    using structured reflection prompts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    building a short, repeatable habit
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href="/7-minute-morning-clarity-reset"
                    className="inline-flex w-full items-center justify-center rounded-full bg-deep-green px-8 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    data-event="homepage_morning_clarity_click"
                    data-guide-choice="morning-clarity"
                    data-cta-location="guide-card"
                  >
                    Explore the Morning Clarity Reset
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
