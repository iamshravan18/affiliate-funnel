import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";

const guideVisual = wealthConfidenceImages.guide3dMockup;

/**
 * Section 1 — Confirmation hero.
 *
 * Delivery model (email-first):
 *   The guide is delivered by email via the connected MailerLite flow (see
 *   /api/wealth-confidence/subscribe). This page intentionally does NOT offer a
 *   direct PDF download anymore — we want the visitor to open their inbox and
 *   engage with the email sequence. The approved PDF still ships at
 *   public/downloads/the-wealth-confidence-guide.pdf (used by the email), so it
 *   is deliberately not linked here.
 */
export function GuideConfirmation() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-heading"
      className="scroll-mt-8 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy — first on mobile, left on desktop */}
          <Reveal className="order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              You&apos;re in
            </span>
            <h1
              id="guide-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-deep-green sm:text-5xl"
            >
              Your Wealth Confidence Guide is on its way!
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/80">
              Please check your inbox in the next few minutes. We&apos;ve sent
              your guide to the email address you entered.
            </p>

            {/* Helper note — where to look if it hasn't arrived yet. */}
            <p className="mt-4 rounded-xl border border-warm-sand bg-warm-sand/25 px-4 py-3 text-sm leading-relaxed text-evergreen/75">
              If you don&apos;t see it soon, check your Promotions or Spam
              folder.
            </p>

            <p className="mt-6 text-base leading-relaxed text-evergreen/70">
              No complicated budget. No pressure to be perfect. Just one small
              step at a time.
            </p>
          </Reveal>

          {/* Guide visual — second on mobile, right on desktop */}
          <RevealMedia delay={0.1} className="order-2">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-warm-sand bg-ivory p-5 shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5 sm:p-7">
              <Image
                src={guideVisual.webp}
                alt={guideVisual.alt}
                width={guideVisual.width}
                height={guideVisual.height}
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 80vw"
                priority
                className="h-auto w-full"
              />
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
