import { Reveal } from "@/components/motion";

/**
 * Section 2 — Bridge into the optional affiliate offer.
 *
 * Deliberately calm and educational: it acknowledges what the free guide does,
 * then frames the optional third-party presentation as a "go deeper" next step
 * while the visitor waits for their guide email to arrive. No hype, no vendor
 * claims presented as facts.
 */
export function MindsetTransition() {
  return (
    <section
      aria-label="While you wait"
      className="border-t border-warm-sand/60 bg-ivory"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            While You Wait&hellip;
          </span>
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.01em] text-deep-green sm:text-4xl"
        >
          Want to go deeper into your money patterns?
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-5 text-lg leading-relaxed text-evergreen/80"
        >
          The Wealth Confidence Guide helps you start noticing the habits and
          emotions behind your financial decisions. But if you want to
          understand the deeper &ldquo;money scripts&rdquo; that may be
          influencing your confidence, choices, and income patterns, this short
          presentation may be worth watching next.
        </Reveal>
      </div>
    </section>
  );
}
