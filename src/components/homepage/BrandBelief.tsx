import { Reveal } from "@/components/motion";

/**
 * Section 7: Brand-Belief — sage/pale-green background, brand philosophy.
 */
export function BrandBelief() {
  return (
    <section
      id="our-approach"
      aria-labelledby="belief-heading"
      className="scroll-mt-20 bg-sage/15"
    >
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Our belief
            </p>
          </Reveal>

          <Reveal delay={0.1} as="h2">
            <span
              id="belief-heading"
              className="mt-4 block font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
            >
              You Don&rsquo;t Need a Perfect Plan to Make a Better Start
            </span>
          </Reveal>

          <Reveal delay={0.2} as="p">
            <span className="mt-6 block text-lg leading-relaxed text-evergreen/75 sm:text-xl sm:leading-relaxed">
              Progress often begins with one small decision made more
              intentionally. Micro Saving Daily creates calm, accessible
              resources that help you notice your patterns, organise your
              thoughts and take one practical next step.
            </span>
          </Reveal>

          {/* Pull quote */}
          <Reveal delay={0.3}>
            <blockquote className="mt-10 border-l-4 border-gold/60 py-2 pl-6 text-left">
              <p className="font-serif text-2xl font-medium italic leading-snug text-deep-green sm:text-3xl">
                Small habits. Stronger money confidence.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
