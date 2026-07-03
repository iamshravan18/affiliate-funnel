import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";

const day1 = wealthConfidenceImages.worksheetDay1;
const day2 = wealthConfidenceImages.worksheetDay2;

export function WorkbookSampleSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl">
              Start with one pattern. Then one pause.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/75">
              The first steps are intentionally small. You are not trying to fix
              your whole financial life in one day. You are learning to notice
              what is already happening and make one calmer choice.
            </p>
            <div className="mt-8 rounded-2xl border-l-4 border-gold bg-sage/20 px-6 py-5">
              <p className="font-serif text-xl font-semibold leading-snug text-deep-green">
                One small habit today can create a big difference tomorrow.
              </p>
            </div>
          </Reveal>

          <RevealMedia delay={0.1} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[day1, day2].map((sheet) => (
                <div
                  key={sheet.key}
                  className="overflow-hidden rounded-xl border border-warm-sand bg-ivory shadow-lg shadow-deep-green/10 ring-1 ring-deep-green/5"
                >
                  <Image
                    src={sheet.webp}
                    alt={sheet.alt}
                    width={sheet.width}
                    height={sheet.height}
                    sizes="(min-width: 640px) 260px, 44vw"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
