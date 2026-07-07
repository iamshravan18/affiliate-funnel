import { Reveal } from "@/components/motion";
import { FAQ } from "./morning-clarity-content";

/**
 * FAQ built on native <details>/<summary> so it is fully keyboard-operable and
 * announces expanded/collapsed state to assistive tech with zero client-side
 * JavaScript. The disclosure marker is conveyed by a text-labelled icon, not
 * color alone.
 */
export function MorningClarityFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[50rem] px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {FAQ.eyebrow}
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
          >
            {FAQ.h2}
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="grid gap-3">
            {FAQ.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-taupe/60 bg-ivory px-6 py-1 shadow-sm shadow-deep-green/5 open:shadow-md open:shadow-deep-green/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-lg font-semibold text-deep-green marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                  <span>{item.q}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-deep-green transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-evergreen/80">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
