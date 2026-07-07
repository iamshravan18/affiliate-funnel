import Image from "next/image";
import { GrowthCircleMark } from "@/components/wealth-confidence/GrowthCircleMark";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { HERO } from "./morning-clarity-content";
import { MorningClarityOptInForm } from "./MorningClarityOptInForm";

const heroDesktop = morningClarityImages.heroDesktop;
const heroMobile = morningClarityImages.heroMobile;

const FRAME =
  "overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5";

/**
 * Hero. Above-the-fold copy + opt-in form render immediately (no entrance
 * animation) so the primary conversion action is never hidden pre-hydration.
 * The opt-in sits in the left column on ivory so form labels stay fully
 * readable and never overlap the lifestyle image (the woman's face is never
 * covered). Desktop and mobile receive different image compositions rather
 * than a crop of one another.
 */
export function MorningClarityHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f7f3e9 0%, #f7f3e9 55%, #f1ead9 100%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 pt-10 pb-12 sm:pt-12 sm:pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-16 lg:pb-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-deep-green/80">
            <GrowthCircleMark className="h-4 w-4 text-deep-green" />
            {HERO.eyebrow}
          </span>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-deep-green sm:text-5xl lg:text-[3.35rem]">
            {HERO.h1}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-evergreen/90">
            {HERO.subcopy}
          </p>

          {/* Opt-in form: the hero's primary conversion action. */}
          <div className="mt-6 rounded-2xl border border-taupe/60 bg-ivory/90 p-5 shadow-md shadow-deep-green/10 sm:p-6">
            <p className="font-serif text-xl font-semibold text-deep-green">
              {HERO.formHeading}
            </p>
            <div className="mt-3">
              <MorningClarityOptInForm />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <span className="text-sm font-medium text-evergreen/70">
              {HERO.trustLine}
            </span>
            <a
              href={HERO.secondaryLinkHref}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-deep-green decoration-gold decoration-2 underline-offset-4 transition-colors hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {HERO.secondaryLinkLabel}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <p className="text-sm italic leading-relaxed text-evergreen/60">
              {HERO.reassurance}
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Soft sage halo behind the visual for premium depth. */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-sage/25 blur-3xl"
          />

          {/* Mobile / tablet: portrait composition. */}
          <div className={`${FRAME} lg:hidden`}>
            <Image
              src={heroMobile.webp}
              alt={heroMobile.alt}
              width={heroMobile.width}
              height={heroMobile.height}
              priority
              sizes="(max-width: 1023px) 92vw, 1px"
              className="h-auto w-full"
            />
          </div>

          {/* Desktop: landscape composition. */}
          <div className={`${FRAME} hidden lg:block`}>
            <Image
              src={heroDesktop.webp}
              alt={heroDesktop.alt}
              width={heroDesktop.width}
              height={heroDesktop.height}
              priority
              sizes="(min-width: 1024px) 47vw, 1px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
