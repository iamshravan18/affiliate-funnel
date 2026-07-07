import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { PREVIEWS } from "./morning-clarity-content";

export function MorningClarityPreviews() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {PREVIEWS.eyebrow}
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {PREVIEWS.h2}
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-5 text-lg leading-relaxed text-evergreen/75"
          >
            {PREVIEWS.intro}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEWS.cards.map((card, i) => {
            const img = morningClarityImages[card.key];
            return (
              <RevealMedia
                key={card.key}
                delay={0.1 + i * 0.08}
                className="flex flex-col"
              >
                <div className="overflow-hidden rounded-2xl border border-warm-sand bg-ivory shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5">
                  <Image
                    src={img.webp}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-deep-green">
                  {card.title}
                </h3>
                <p className="mt-2 leading-relaxed text-evergreen/75">
                  {card.body}
                </p>
              </RevealMedia>
            );
          })}
        </div>
      </div>
    </section>
  );
}
