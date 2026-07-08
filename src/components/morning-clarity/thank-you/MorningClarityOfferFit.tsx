import { Reveal } from "@/components/motion";
import { FIT } from "./thank-you-content";

/**
 * Section 3 — Short "why this fits" section. Replaces the previous long
 * three-card explanation and long checklist with a single compact block of
 * three short cards (Pause / Focus / Explore). Kept deliberately brief.
 */
export function MorningClarityOfferFit() {
  return (
    <section
      aria-labelledby="fit-heading"
      className="border-t border-warm-sand/60 bg-sage/10"
    >
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-14">
        <Reveal>
          <h2
            id="fit-heading"
            className="text-center font-serif text-2xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-3xl"
          >
            {FIT.h2}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {FIT.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-warm-sand bg-ivory p-6 shadow-sm shadow-deep-green/5">
                <span
                  aria-hidden="true"
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-deep-green/10 text-sm font-semibold text-deep-green"
                >
                  {index + 1}
                </span>
                <h3 className="font-serif text-lg font-semibold text-deep-green">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-evergreen/80">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
