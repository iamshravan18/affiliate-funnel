import { Reveal } from "@/components/motion";

/**
 * Section 8: What the Guides Are — and Are Not.
 * Two balanced panels, compact and reassuring.
 */

const ARE_POINTS = [
  "educational resources",
  "practical reflection tools",
  "short, repeatable routines",
  "free guides designed for everyday use",
];

const ARE_NOT_POINTS = [
  "financial or investment advice",
  "medical or psychological treatment",
  "promises of income or specific results",
  "substitutes for professional guidance",
];

export function WhatGuidesAre() {
  return (
    <section aria-labelledby="what-guides-heading" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal>
          <h2
            id="what-guides-heading"
            className="text-center font-serif text-3xl font-semibold leading-tight tracking-tight text-deep-green sm:text-4xl"
          >
            Practical, Educational and Honest
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* What they are */}
          <Reveal>
            <div className="rounded-2xl border border-sage/40 bg-sage/10 p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-deep-green">
                What they are
              </h3>
              <ul className="mt-4 space-y-2.5">
                {ARE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-evergreen/75"
                  >
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* What they are not */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-taupe/40 bg-warm-sand/20 p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-deep-green">
                What they are not
              </h3>
              <ul className="mt-4 space-y-2.5">
                {ARE_NOT_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-evergreen/75"
                  >
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-evergreen/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6M9 9l6 6" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
