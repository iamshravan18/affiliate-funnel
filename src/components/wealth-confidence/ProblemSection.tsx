import { Reveal } from "@/components/motion";

const PAINS = [
  {
    title: "Too many rules",
    body: "Traditional budgeting can feel like another thing to fail at.",
  },
  {
    title: "Automatic spending",
    body: "Small purchases can become patterns before we notice them.",
  },
  {
    title: "Money stress",
    body: "The goal is not perfection. The goal is feeling more aware and in control.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-warm-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            Money advice can feel heavier than the problem itself.
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            Traditional budgeting often feels overwhelming, strict, or
            guilt-based. Micro Saving Daily gives you a softer starting point:
            notice one pattern, pause once, repeat one small habit.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal
              as="article"
              key={pain.title}
              delay={0.1 + i * 0.08}
              className="rounded-2xl border border-warm-sand bg-ivory p-7 shadow-sm shadow-deep-green/5"
            >
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-gold"
              />
              <h3 className="mt-5 font-serif text-xl font-semibold text-deep-green">
                {pain.title}
              </h3>
              <p className="mt-3 leading-relaxed text-evergreen/75">
                {pain.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
