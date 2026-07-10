import { Reveal } from "@/components/motion";

/**
 * Section 6: How It Works — three simple steps (Choose, Practice, Repeat).
 * Homepage-specific component (does not import from Funnel 2).
 */

const STEPS = [
  {
    number: "1",
    title: "Choose",
    description:
      "Select the free guide that matches what you need today.",
  },
  {
    number: "2",
    title: "Practice",
    description: "Use one short exercise or routine at a time.",
  },
  {
    number: "3",
    title: "Repeat",
    description:
      "Return to the habit when it is useful\u2014without requiring perfect consistency.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-20 bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              The Micro Saving Daily approach
            </p>
          </Reveal>
          <Reveal delay={0.1} as="h2">
            <span
              id="how-heading"
              className="mt-4 block font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
            >
              Simple Resources. Small Actions. No Pressure.
            </span>
          </Reveal>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.1}>
              <div className="flex flex-col items-center rounded-2xl border border-taupe/40 bg-white p-8 text-center shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/25 font-serif text-xl font-semibold text-deep-green">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-deep-green">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-evergreen/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
