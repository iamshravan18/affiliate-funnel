import { Reveal } from "@/components/motion";
import { BRIDGE } from "./thank-you-content";

/**
 * Natural "before you go" bridge. A subtle warm-sand background transition
 * signals a gentle shift from guide fulfilment toward the optional next step,
 * without any sales pressure. The small Pause -> Notice -> Choose -> Explore
 * progression connects the free routine to the idea of exploring further.
 */
export function MorningClarityOfferBridge() {
  return (
    <section
      id="optional-next-step"
      aria-labelledby="bridge-heading"
      className="scroll-mt-8 border-t border-warm-sand/60 bg-warm-sand/40"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {BRIDGE.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="bridge-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {BRIDGE.h2}
          </h2>
        </Reveal>

        {BRIDGE.body.map((paragraph, i) => (
          <Reveal
            as="p"
            key={i}
            delay={0.1 + i * 0.05}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            {paragraph}
          </Reveal>
        ))}

        {/* Progression: a calm, non-aggressive visual cue (single arrow row). */}
        <Reveal delay={0.2}>
          <ol className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {BRIDGE.progression.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                <span className="rounded-full border border-taupe bg-ivory px-4 py-1.5 text-sm font-medium text-deep-green">
                  {label}
                </span>
                {i < BRIDGE.progression.length - 1 && (
                  <span aria-hidden="true" className="text-gold">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
