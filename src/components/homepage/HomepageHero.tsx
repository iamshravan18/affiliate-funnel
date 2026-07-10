import { Reveal, RevealMedia } from "@/components/motion";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * Section 2: Hero — introduces Micro Saving Daily as the parent brand.
 * Balanced introduction, does not favor Funnel 1 or Funnel 2.
 */
export function HomepageHero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="scroll-mt-20 bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Micro Saving Daily
              </p>
            </Reveal>

            <Reveal delay={0.1} as="h1">
              <span
                id="hero-heading"
                className="mt-5 block font-serif text-4xl font-semibold leading-tight tracking-tight text-deep-green sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
              >
                A Calmer, More Confident Relationship With Money Starts Small
              </span>
            </Reveal>

            <Reveal delay={0.2} as="p">
              <span className="mt-6 block text-lg leading-relaxed text-evergreen/75 sm:text-xl sm:leading-relaxed">
                Explore practical, easy-to-follow resources designed to help you
                pause, think clearly and build stronger everyday
                habits&mdash;without complicated systems or unrealistic promises.
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#free-guides"
                  className="inline-flex items-center justify-center rounded-full bg-deep-green px-9 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  data-event="homepage_wealth_guide_click"
                  data-cta-location="hero"
                >
                  Explore the Free Guides
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-deep-green/30 bg-transparent px-9 py-4 text-base font-medium text-deep-green transition-colors hover:border-gold/50 hover:bg-deep-green/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Learn How It Works
                </a>
              </div>
            </Reveal>
          </div>

          {/* HOMEPAGE IMAGE PLACEHOLDER — Hero image */}
          <RevealMedia delay={0.2}>
            <ImagePlaceholder
              label="Homepage Hero Image"
              description="Two Micro Saving Daily guides arranged in a premium editorial flat-lay"
              aspectRatio="aspect-[4/3]"
              bg="warm-sand"
              className="w-full"
            />
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
