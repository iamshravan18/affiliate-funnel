import Image from "next/image";
import { Reveal } from "@/components/motion";
import { OptInForm } from "@/components/OptInForm";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";

const mockup = wealthConfidenceImages.guide3dMockup;

export function FinalOptInSection() {
  return (
    <section id="get-the-guide" className="scroll-mt-24 bg-warm-sand/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal className="overflow-hidden rounded-3xl border border-warm-sand bg-ivory shadow-xl shadow-deep-green/10">
          <div className="grid lg:grid-cols-2">
            {/* Guide visual on a deep panel for perceived value. */}
            <div className="relative flex flex-col items-center justify-center gap-6 bg-evergreen px-8 py-12 text-center sm:px-12">
              <div className="w-52 max-w-full sm:w-60">
                <Image
                  src={mockup.webp}
                  alt={mockup.alt}
                  width={mockup.width}
                  height={mockup.height}
                  sizes="(min-width: 1024px) 240px, 60vw"
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
              <p className="font-serif text-xl italic text-gold">
                Small habits. Stronger money confidence.
              </p>
            </div>

            {/* Opt-in form. */}
            <div className="px-7 py-10 sm:px-10 sm:py-12">
              <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-[2.15rem]">
                Get The Wealth Confidence Guide free.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-evergreen/75">
                Start with simple daily money-awareness shifts for calmer
                financial decisions.
              </p>
              <div className="mt-8">
                <OptInForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
