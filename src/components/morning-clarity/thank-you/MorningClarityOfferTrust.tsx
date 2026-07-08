import { Reveal } from "@/components/motion";
import { TRUST } from "./thank-you-content";

/**
 * Section 9 — trust and expectations. A calm sage section that slows the
 * reader down, reaffirms that the free guide stands on its own, and states
 * plainly that no mindset or audio program can guarantee a personal result.
 * Two small trust panels reinforce independent decision-making and that
 * results vary.
 */
export function MorningClarityOfferTrust() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-t border-warm-sand/60 bg-sage/20"
    >
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              id="trust-heading"
              className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
            >
              {TRUST.h2}
            </h2>
          </Reveal>
          {TRUST.body.map((paragraph, i) => (
            <Reveal
              as="p"
              key={i}
              delay={0.05 + i * 0.05}
              className="mt-5 text-lg leading-relaxed text-evergreen/75"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TRUST.panels.map((panel, i) => (
            <Reveal
              key={panel.title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-taupe/70 bg-ivory p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-deep-green">
                {panel.title}
              </h3>
              <p className="mt-2 leading-relaxed text-evergreen/80">
                {panel.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
