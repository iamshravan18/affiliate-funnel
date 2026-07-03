import { Reveal } from "@/components/motion";
import { GrowthCircleMark } from "./GrowthCircleMark";

const STEPS = [
  {
    step: "Step 01",
    title: "Notice",
    body: "Spot one spending pattern that may be shaping your choices.",
  },
  {
    step: "Step 02",
    title: "Pause",
    body: "Create a short moment before one automatic purchase.",
  },
  {
    step: "Step 03",
    title: "Repeat",
    body: "Choose one small habit you can carry into tomorrow.",
  },
];

export function MethodSection() {
  return (
    <section id="method" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Notice. Pause. Repeat.
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            A calmer way to build money confidence.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            The guide is built around three small actions you can actually use
            in everyday life.
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-sage/50 bg-sage/20 p-7"
            >
              <div className="flex items-center justify-between">
                <GrowthCircleMark className="h-9 w-9 text-deep-green" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-deep-green">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-evergreen/80">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
