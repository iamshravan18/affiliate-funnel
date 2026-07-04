import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { wealthConfidenceImages } from "@/content/wealth-confidence-assets";

const guideVisual = wealthConfidenceImages.guide3dMockup;
const day1 = wealthConfidenceImages.worksheetDay1;

/**
 * Confirmation hero — the first visible section and the fulfilment of the
 * homepage promise. Must feel calm and honest.
 *
 * Delivery honesty:
 *   MailerLite is NOT connected in this phase (OptInForm is UI-only). So we do
 *   NOT claim the guide was emailed / is in the inbox. Instead we use
 *   placeholder-ready "access is being prepared" wording.
 *
 * Download button:
 *   No real PDF asset exists yet (nothing under public/*.pdf). We therefore
 *   render the primary CTA as an accessibly DISABLED button (aria-disabled +
 *   real `disabled`) with explanatory microcopy, rather than inventing a fake
 *   URL or shipping an empty file.
 *   TODO(guide-pdf): When the real Wealth Confidence Guide PDF is produced,
 *   drop it in /public (e.g. /guides/wealth-confidence-guide.pdf), swap this
 *   <button> for an <a href download> (or the post-subscription delivery URL),
 *   remove the disabled state, and remove the "being prepared" note.
 *
 * Day 1 link:
 *   The only real Day-1 asset is an IMAGE (printable worksheet), not an
 *   interactive page, so the secondary link opens that image in a new tab and
 *   is labelled as a printable worksheet.
 */
export function GuideConfirmation() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-heading"
      className="scroll-mt-8 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
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
              Your Wealth Confidence Guide is ready.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/80">
              We&apos;ve saved your place. Start with Day 1 and focus on noticing
              just one spending pattern before trying to change anything.
            </p>

            {/* Honest, placeholder-ready delivery note (no MailerLite yet). */}
            <p className="mt-4 rounded-xl border border-warm-sand bg-warm-sand/25 px-4 py-3 text-sm leading-relaxed text-evergreen/75">
              Your guide access is being prepared. Once email delivery is
              connected, you&apos;ll also receive a copy in your inbox.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/*
                Accessibly-disabled primary CTA (no PDF asset yet).
                Styled to match CtaButton solid, dimmed to read as unavailable.
              */}
              <button
                type="button"
                disabled
                aria-disabled="true"
                data-event="guide_download_click"
                aria-describedby="download-status"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-deep-green/45 px-9 py-4 text-base font-medium text-ivory/90 shadow-md shadow-deep-green/10"
              >
                Download the Guide
              </button>

              <a
                href={day1.webp}
                target="_blank"
                rel="noopener noreferrer"
                data-event="day_one_open_click"
                className="inline-flex items-center justify-center gap-1 text-base font-medium text-deep-green underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Open Day 1: Notice One Spending Pattern
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Not-color-alone status for the disabled download. */}
            <p id="download-status" className="mt-3 text-sm text-evergreen/60">
              The downloadable PDF is being finalised — Day 1 opens a printable
              worksheet you can start with right now.
            </p>

            <p className="mt-6 text-base leading-relaxed text-evergreen/70">
              No complicated budget. No pressure to be perfect. Just one small
              step.
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
