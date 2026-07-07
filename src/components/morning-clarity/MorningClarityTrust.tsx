import { Reveal } from "@/components/motion";
import { TRUST } from "./morning-clarity-content";

/**
 * Trust / compliance section. Adapts the guide's approved "What this guide is —
 * and is not" framing so the educational, no-advice positioning is stated in
 * plain HTML on the homepage. The two panels are distinguished by heading text
 * and border, never by color alone.
 */
export function MorningClarityTrust() {
  return (
    <section className="bg-warm-sand/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {TRUST.eyebrow}
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {TRUST.h2}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal
            as="article"
            className="rounded-2xl border border-sage/60 bg-sage/20 p-7"
          >
            <h3 className="font-serif text-xl font-semibold text-deep-green">
              {TRUST.isTitle}
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {TRUST.is.map((item) => (
                <li
                  key={item}
                  className="leading-relaxed text-evergreen/85 before:mr-2 before:font-semibold before:text-gold before:content-['+']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            as="article"
            delay={0.06}
            className="rounded-2xl border border-taupe/70 bg-ivory p-7"
          >
            <h3 className="font-serif text-xl font-semibold text-deep-green">
              {TRUST.isNotTitle}
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {TRUST.isNot.map((item) => (
                <li
                  key={item}
                  className="leading-relaxed text-evergreen/85 before:mr-2 before:font-semibold before:text-evergreen/50 before:content-['\2013']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={0.1}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-evergreen/60"
        >
          {TRUST.note}
        </Reveal>
      </div>
    </section>
  );
}
