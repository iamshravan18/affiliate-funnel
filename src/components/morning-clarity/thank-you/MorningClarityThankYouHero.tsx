import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { HERO } from "./thank-you-content";

const guideVisual = morningClarityImages.guideBundle;

/**
 * Success hero — the first content section and the fulfilment of the free-guide
 * promise. The guide is delivered by Resend Automation, BEFORE any mention of
 * the optional affiliate offer.
 *
 * The PDF remains hosted for email delivery, but this page intentionally does
 * not offer a direct download so visitors complete the email-first handoff.
 */
export function MorningClarityThankYouHero() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-heading"
      className="scroll-mt-8 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy — first on mobile, left on desktop */}
          <Reveal className="order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {HERO.eyebrow}
            </span>
            <h1
              id="guide-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-deep-green sm:text-5xl"
            >
              {HERO.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/80">
              {HERO.body}
            </p>

            {/* Helper note — where to look if the automation email is delayed. */}
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-sage/60 bg-sage/20 px-4 py-2.5 text-sm font-medium leading-relaxed text-evergreen/85">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-deep-green"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 10.2l2.4 2.4 4.6-5.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {HERO.confirmation}
            </p>

            <p className="mt-6 text-base leading-relaxed text-evergreen/70">
              {HERO.trustMicrocopy}
            </p>
          </Reveal>

          {/* Guide bundle visual — the free guide, never the paid product. */}
          <RevealMedia delay={0.1} className="order-2">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-warm-sand bg-ivory p-4 shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5 sm:p-6">
              <Image
                src={guideVisual.webp}
                alt={guideVisual.alt}
                width={guideVisual.width}
                height={guideVisual.height}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 420px, 88vw"
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
