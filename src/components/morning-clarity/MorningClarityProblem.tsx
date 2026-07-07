import { Reveal } from "@/components/motion";
import { PROBLEM } from "./morning-clarity-content";

export function MorningClarityProblem() {
  return (
    <section className="bg-warm-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {PROBLEM.h2}
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            {PROBLEM.intro}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PROBLEM.cards.map((card, i) => (
            <Reveal
              as="article"
              key={card.title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-taupe/60 bg-ivory p-7 shadow-md shadow-deep-green/10"
            >
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-gold"
              />
              <h3 className="mt-5 font-serif text-[1.35rem] font-semibold tracking-[-0.01em] text-deep-green">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-evergreen/75">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
