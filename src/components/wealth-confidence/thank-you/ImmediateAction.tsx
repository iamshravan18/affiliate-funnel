import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { GrowthCircleMark } from "../GrowthCircleMark";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";

const shiftCard = wealthConfidenceImages.todaysSmallShiftCard;

const STEPS = [
  {
    step: "Step 01",
    title: "Notice",
    body: "Identify the purchase or spending pattern.",
  },
  {
    step: "Step 02",
    title: "Pause",
    body: "Create ten quiet seconds before the next automatic choice.",
  },
  {
    step: "Step 03",
    title: "Repeat",
    body: "Carry one small awareness habit into tomorrow.",
  },
];

/**
 * Immediate practical value after the recommended next step. This keeps the
 * page grounded in the Micro Saving Daily method (Notice · Pause · Repeat) and
 * gives the visitor a real first action they can take on this page.
 */
export function ImmediateAction() {
  return (
    <section
      id="start-here"
      aria-label="Start here — try this before you leave"
      data-event="thank_you_immediate_action_view"
      className="scroll-mt-8 border-t border-warm-sand/60 bg-sage/10"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Start here
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            Try this before you leave this page.
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-5 text-lg leading-relaxed text-evergreen/80"
          >
            Think about the last purchase you made automatically. You do not need
            to judge it or change it today. Simply notice what it was and what
            was happening when you made it.
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <ol className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {STEPS.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={0.1 + i * 0.08}
                className="rounded-2xl border border-sage/50 bg-ivory p-6"
              >
                <div className="flex items-center justify-between">
                  <GrowthCircleMark className="h-8 w-8 text-deep-green" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-deep-green">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-evergreen/80">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <RevealMedia delay={0.15}>
            <figure className="overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5">
              <Image
                src={shiftCard.webp}
                alt={shiftCard.alt}
                width={shiftCard.width}
                height={shiftCard.height}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="h-auto w-full"
              />
            </figure>
            <p className="mt-4 text-center text-sm text-evergreen/65">
              Today&apos;s Small Shift — one calm money choice at a time.
            </p>
          </RevealMedia>
        </div>

        {/* Secondary CTA — kept calm and subordinate to the main page actions. */}
        <div className="mt-12 text-center">
          <a
            href={wealthConfidenceImages.worksheetDay1.webp}
            target="_blank"
            rel="noopener noreferrer"
            data-event="day_one_open_click"
            className="inline-flex items-center justify-center gap-1 text-base font-medium text-deep-green underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Open Day 1
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
