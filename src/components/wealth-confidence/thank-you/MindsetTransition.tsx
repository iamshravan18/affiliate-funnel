import { Reveal } from "@/components/motion";

/**
 * Soft transition into the optional affiliate resource. Deliberately calm and
 * factual — it explains *why* the mental side of money habits can matter
 * without endorsing the third-party product or using its vendor claims as
 * facts. This is the "bridge" that stops the affiliate card from feeling like
 * a bait-and-switch.
 */
export function MindsetTransition() {
  return (
    <section
      aria-label="An optional next step"
      className="border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            An optional next step
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
        >
          Sometimes money habits begin before the purchase does.
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-5 text-lg leading-relaxed text-evergreen/80"
        >
          The practical side of money confidence is learning to notice and
          pause. The mental side is understanding the thoughts, stress, and
          automatic patterns that can influence everyday choices.
        </Reveal>
        <Reveal
          as="p"
          delay={0.15}
          className="mt-4 text-lg leading-relaxed text-evergreen/80"
        >
          Some readers also explore audio-based mindset tools as part of a quiet
          daily reflection routine. One third-party resource you may want to
          review is The Billionaire Brain Wave.
        </Reveal>
      </div>
    </section>
  );
}
