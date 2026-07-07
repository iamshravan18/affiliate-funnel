import { Reveal } from "@/components/motion";
import { GrowthCircleMark } from "@/components/wealth-confidence/GrowthCircleMark";
import { BELIEF } from "./morning-clarity-content";

/**
 * Signature brand-belief moment. Deep evergreen panel, ivory typography, gold
 * used only as a fine accent — the emotional beat before the previews and the
 * final opt-in. Centered, text-only (no ad-only lifestyle asset used here).
 */
export function MorningClarityBelief() {
  return (
    <section className="bg-evergreen text-ivory">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <Reveal className="flex flex-col items-center">
          <GrowthCircleMark className="h-10 w-10 text-ivory/90" />
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold/70" />
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-ivory sm:text-[2.6rem]">
            {BELIEF.h2}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
            {BELIEF.body}
          </p>
          <p className="mt-8 font-serif text-xl italic text-gold">
            {BELIEF.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
