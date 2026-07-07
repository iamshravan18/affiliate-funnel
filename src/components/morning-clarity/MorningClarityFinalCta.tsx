import Image from "next/image";
import { Reveal } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { FINAL } from "./morning-clarity-content";
import { MorningClarityOptInForm } from "./MorningClarityOptInForm";

const bundle = morningClarityImages.guideBundle;

export function MorningClarityFinalCta() {
  return (
    <section id="get-the-guide" className="scroll-mt-24 bg-warm-sand/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal className="overflow-hidden rounded-3xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10">
          <div className="grid lg:grid-cols-2">
            {/* Guide visual on a deep panel for perceived value. */}
            <div className="relative flex flex-col items-center justify-center gap-6 bg-evergreen px-8 py-12 text-center sm:px-12">
              <div className="w-full max-w-sm overflow-hidden rounded-xl ring-1 ring-ivory/15">
                <Image
                  src={bundle.webp}
                  alt={bundle.alt}
                  width={bundle.width}
                  height={bundle.height}
                  sizes="(min-width: 1024px) 380px, 80vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="font-serif text-xl italic text-gold">
                {FINAL.tagline}
              </p>
            </div>

            {/* Opt-in form. */}
            <div className="px-7 py-10 sm:px-10 sm:py-12">
              <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-[2.15rem]">
                {FINAL.h2}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-evergreen/75">
                {FINAL.subcopy}
              </p>
              <div className="mt-8">
                <MorningClarityOptInForm />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-evergreen/60">
                {FINAL.complianceNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
