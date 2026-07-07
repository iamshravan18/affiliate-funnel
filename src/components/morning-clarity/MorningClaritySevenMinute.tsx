import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { SEVEN_MINUTE } from "./morning-clarity-content";

const flatLay = morningClarityImages.sevenMinuteFlatLay;

export function MorningClaritySevenMinute() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-[4.5rem]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-16">
          <RevealMedia className="relative order-1 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-sage/20 blur-3xl"
            />
            {/* Desktop uses a tall fixed-height frame so the flat-lay visually
                matches the seven-step list beside it; on mobile the image keeps
                its natural height above the text. object-cover keeps the guide,
                timer, tea and headphones centred without distortion. */}
            <div className="overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5 lg:h-[560px]">
              <Image
                src={flatLay.webp}
                alt={flatLay.alt}
                width={flatLay.width}
                height={flatLay.height}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-auto w-full lg:h-full lg:object-cover lg:object-center"
              />
            </div>
          </RevealMedia>

          <div className="order-2 lg:order-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {SEVEN_MINUTE.eyebrow}
              </span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
            >
              {SEVEN_MINUTE.h2}
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-5 text-lg leading-relaxed text-evergreen/75"
            >
              {SEVEN_MINUTE.intro}
            </Reveal>

            <Reveal delay={0.12}>
              <ol className="mt-6 grid gap-3">
                {SEVEN_MINUTE.steps.map((step) => (
                  <li key={step.minute} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-serif text-base font-semibold text-deep-green"
                    >
                      {step.minute}
                    </span>
                    <div>
                      <p className="font-serif text-lg font-semibold text-deep-green">
                        <span className="sr-only">Minute {step.minute}: </span>
                        {step.name}
                        <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                          {step.movement}
                        </span>
                      </p>
                      <p className="mt-1 leading-relaxed text-evergreen/80">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 rounded-2xl border-l-4 border-gold bg-sage/20 px-6 py-4 leading-relaxed text-evergreen/85">
                {SEVEN_MINUTE.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
