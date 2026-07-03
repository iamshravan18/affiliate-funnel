import Image from "next/image";
import { CtaButton } from "@/components/motion";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";
import { GrowthCircleMark } from "./GrowthCircleMark";

// Desktop uses the full "everything you get" bundle; mobile uses the cleaner
// single 3D mockup (the bundle collection reads busy/small at phone widths).
const bundle = wealthConfidenceImages.guideCompleteBundle;
const mockup = wealthConfidenceImages.guide3dMockup;

const FRAME =
  "overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5";

/**
 * Hero. Above-the-fold copy + CTA render immediately (no entrance animation)
 * so the primary message and opt-in action are never hidden pre-hydration —
 * better LCP and conversion. Scroll-reveal motion is reserved for the sections
 * below the fold.
 */
export function Hero() {
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-deep-green/80">
            <GrowthCircleMark className="h-4 w-4 text-deep-green" />
            Free money-awareness guide
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-deep-green sm:text-5xl lg:text-[3.35rem]">
            Build stronger money confidence one small choice at a time.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-evergreen/80">
            Get a simple guide that helps you notice spending patterns, pause
            before automatic purchases, and make calmer financial decisions
            without complicated budgeting.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col items-start gap-x-7 gap-y-4 sm:flex-row sm:items-center">
              <CtaButton href="#get-the-guide">Get My Free Guide →</CtaButton>
              <a
                href="#inside"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-deep-green decoration-gold decoration-2 underline-offset-4 transition-colors hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                See what&apos;s inside
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
            <span className="text-sm font-medium text-evergreen/70">
              Free guide • Practical worksheets • No spam
            </span>
          </div>

          <p className="mt-6 text-sm italic leading-relaxed text-evergreen/60">
            Made for people who want calmer money habits, not stricter money
            shame.
          </p>
        </div>

        <div className="relative">
          {/* Soft sage halo behind the guide for premium depth. */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-sage/25 blur-3xl"
          />

          {/* Mobile / tablet: cleaner single 3D guide mockup. */}
          <div className={`${FRAME} lg:hidden`}>
            <Image
              src={mockup.webp}
              alt={mockup.alt}
              width={mockup.width}
              height={mockup.height}
              priority
              sizes="(max-width: 1023px) 92vw, 1px"
              className="h-auto w-full"
            />
          </div>

          {/* Desktop: full guide bundle for perceived value. */}
          <div className={`${FRAME} hidden lg:block`}>
            <Image
              src={bundle.webp}
              alt={bundle.alt}
              width={bundle.width}
              height={bundle.height}
              priority
              sizes="(min-width: 1024px) 46vw, 1px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
