import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { AUDIENCE } from "./morning-clarity-content";

const scene = morningClarityImages.realMorningRoutine;

function AudienceCheck() {
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

export function MorningClarityAudience() {
  return (
    <section className="bg-warm-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {AUDIENCE.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-balance text-deep-green sm:text-4xl">
              {AUDIENCE.h2}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/75">
              {AUDIENCE.intro}
            </p>
            <ul className="mt-8 grid gap-4">
              {AUDIENCE.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <AudienceCheck />
                  <span className="text-base leading-relaxed text-evergreen/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic leading-relaxed text-evergreen/60">
              {AUDIENCE.closing}
            </p>
          </Reveal>

          <RevealMedia delay={0.1} className="relative order-1 lg:order-2">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-sage/20 blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5">
              <Image
                src={scene.webp}
                alt={scene.alt}
                width={scene.width}
                height={scene.height}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
