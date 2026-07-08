import { Reveal, RevealMedia } from "@/components/motion";
import { OfferSoundWaveVisual } from "./OfferAudioVisual";
import { FIT } from "./thank-you-content";

/**
 * Section 6 — "This may be worth exploring if...". A split layout: an honest
 * self-qualification checklist on the left, a calm audio-listening motif on the
 * right (restrained CSS sound-wave panel — no exaggerated wealth imagery, no
 * product artwork). A smaller "Not for you if..." box sets clear, honest
 * expectations and rules out income / guaranteed-result seekers.
 */
export function MorningClarityOfferFit() {
  return (
    <section
      aria-labelledby="fit-heading"
      className="border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: checklist + not-for-you box */}
          <Reveal className="order-2 lg:order-1">
            <h2
              id="fit-heading"
              className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
            >
              {FIT.h2}
            </h2>

            <ul className="mt-7 grid gap-3.5">
              {FIT.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-evergreen/80"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-deep-green"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="8.5" className="fill-sage/40" />
                    <path
                      d="M6.2 10.3l2.5 2.5 5-5.6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-taupe/70 bg-warm-sand/30 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-deep-green">
                {FIT.notForYouTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-evergreen/75">
                {FIT.notForYou}
              </p>
            </div>
          </Reveal>

          {/* Right: calm audio motif */}
          <RevealMedia delay={0.1} className="order-1 lg:order-2">
            <OfferSoundWaveVisual />
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
