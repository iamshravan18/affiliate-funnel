import Image from "next/image";
import { CtaButton, Reveal, RevealMedia } from "@/components/motion";
import { GrowthCircleMark } from "@/components/wealth-confidence/GrowthCircleMark";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { INSIDE } from "./morning-clarity-content";

const bundle = morningClarityImages.guideBundle;

function IncludedCheck() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sage/45">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-3.5 w-3.5 text-deep-green"
      >
        <path
          d="M4 10.5l3.5 3.5L16 5.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function MorningClarityInclusions() {
  return (
    <section id="inside" className="scroll-mt-24 bg-warm-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {INSIDE.h2}
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            {INSIDE.intro}
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <RevealMedia className="relative order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-sage/20 blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5">
              <Image
                src={bundle.webp}
                alt={bundle.alt}
                width={bundle.width}
                height={bundle.height}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </RevealMedia>

          <Reveal className="order-2">
            <ul className="grid gap-4">
              {INSIDE.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IncludedCheck />
                  <span className="text-base leading-relaxed text-evergreen/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-[42.5rem] flex-col items-center gap-4 rounded-3xl border border-taupe/60 bg-ivory px-8 py-10 text-center shadow-md shadow-deep-green/10 sm:px-12 sm:py-12">
            <GrowthCircleMark className="h-9 w-9 text-deep-green" />
            <p className="font-serif text-2xl font-semibold leading-snug text-deep-green sm:text-3xl">
              {INSIDE.ctaHeading}
            </p>
            <p className="max-w-lg leading-relaxed text-evergreen/75">
              {INSIDE.ctaBody}
            </p>
            <CtaButton href="#get-the-guide" className="mt-1">
              {INSIDE.ctaLabel}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
