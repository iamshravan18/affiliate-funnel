import { Reveal } from "@/components/motion";

/**
 * Section 9: About Micro Saving Daily.
 * Simple brand description. No invented founder biography or credentials.
 */
export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="border-t border-warm-sand/60 bg-warm-sand/15">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <h2
            id="about-heading"
            className="text-center font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
          >
            About Micro Saving Daily
          </h2>
        </Reveal>
        <Reveal delay={0.1} as="p">
          <span className="mt-6 block text-center text-lg leading-relaxed text-evergreen/75">
            Micro Saving Daily is built around a simple idea: meaningful change
            often begins with small, repeatable habits. Our free resources are
            designed to make money awareness, personal reflection and everyday
            decision-making feel calmer and more approachable.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
