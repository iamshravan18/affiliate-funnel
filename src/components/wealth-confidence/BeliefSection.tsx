import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";
import { GrowthCircleMark } from "./GrowthCircleMark";

const habit = wealthConfidenceImages.todaysSmallShiftCard;

/**
 * Signature brand-belief moment. Deep evergreen panel, ivory typography, gold
 * used only as a fine accent — the emotional beat before the final opt-in.
 */
export function BeliefSection() {
  return (
    <section className="bg-evergreen text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <GrowthCircleMark className="h-10 w-10 text-ivory/90" />
            <span
              aria-hidden="true"
              className="mt-6 block h-px w-16 bg-gold/70"
            />
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-ivory sm:text-[2.6rem]">
              One small shift is enough for today.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/80">
              Micro Saving Daily is built on a simple belief: money confidence
              does not start with a perfect budget. It starts with one small
              decision you can see, repeat, and feel good about.
            </p>
            <p className="mt-8 font-serif text-xl italic text-gold">
              Small habits. Stronger money confidence.
            </p>
          </Reveal>

          <RevealMedia delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-sage/15 blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/5 p-3 shadow-2xl shadow-black/20">
              <Image
                src={habit.webp}
                alt={habit.alt}
                width={habit.width}
                height={habit.height}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
