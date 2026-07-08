import { Reveal } from "@/components/motion";
import { GrowthCircleMark } from "@/components/wealth-confidence/GrowthCircleMark";
import { CONNECTION } from "./thank-you-content";

/**
 * Section 5 — why we're sharing this. Three restrained cards that mirror the
 * homepage's Settle / Notice / Choose design language (sage-tinted cards, brand
 * mark, gold accents). Explains, honestly and without claims, how the optional
 * presentation relates to the habit the reader just started.
 */
export function MorningClarityOfferConnection() {
  return (
    <section
      aria-labelledby="connection-heading"
      className="border-t border-warm-sand/60 bg-warm-sand/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {CONNECTION.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="connection-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
            >
              {CONNECTION.h2}
            </h2>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {CONNECTION.cards.map((card, i) => (
            <Reveal
              as="li"
              key={card.title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-sage/50 bg-sage/20 p-7"
            >
              <div className="flex items-center justify-between">
                <GrowthCircleMark className="h-9 w-9 text-deep-green" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {`Step 0${i + 1}`}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-deep-green">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-evergreen/80">
                {card.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
