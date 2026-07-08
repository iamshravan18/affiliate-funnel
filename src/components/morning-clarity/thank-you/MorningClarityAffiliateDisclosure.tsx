import { Reveal } from "@/components/motion";
import { DISCLOSURE } from "./thank-you-content";

/**
 * Section 8 — affiliate disclosure. Placed immediately below the offer CTA
 * (Section 7). Rendered as an accessible, bordered panel at readable body-text
 * size and contrast — never tiny footer-style copy. Exact approved wording.
 */
export function MorningClarityAffiliateDisclosure() {
  return (
    <section
      aria-label="Affiliate disclosure"
      className="border-t border-warm-sand/60 bg-warm-sand/40"
    >
      <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-6 sm:pb-20">
        <Reveal>
          <div className="rounded-2xl border border-deep-green/25 bg-ivory p-5 sm:p-6">
            <p className="text-base leading-relaxed text-evergreen/85">
              <span className="font-semibold text-deep-green">
                {DISCLOSURE.label}
              </span>{" "}
              {DISCLOSURE.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
