import Image from "next/image";
import { Reveal, RevealMedia } from "@/components/motion";
import { morningClarityImages } from "@/content/morning-clarity-assets";
import { GUIDE_PDF_READY, GUIDE_PDF_PATH, HERO } from "./thank-you-content";

const guideVisual = morningClarityImages.guideBundle;

/**
 * Success hero — the first content section and the fulfilment of the free-guide
 * promise. The FREE guide is confirmed and made accessible here, BEFORE any
 * mention of the optional affiliate offer.
 *
 * Delivery honesty: real email/PDF delivery is NOT wired yet, and the completed
 * Funnel 2 PDF does not exist in public/downloads. So we never claim the guide
 * was emailed / is in an inbox, and the download control is an accessibly
 * DISABLED placeholder (never a fake link) until GUIDE_PDF_READY is true.
 */
export function MorningClarityThankYouHero() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-heading"
      className="scroll-mt-8 bg-ivory"
    >
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy — first on mobile, left on desktop */}
          <Reveal className="order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {HERO.eyebrow}
            </span>
            <h1
              id="guide-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-deep-green sm:text-5xl"
            >
              {HERO.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-evergreen/80">
              {HERO.body}
            </p>

            {/* Honest confirmation — the guide is ready below (no inbox claim). */}
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-sage/60 bg-sage/20 px-4 py-2.5 text-sm font-medium leading-relaxed text-evergreen/85">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-deep-green"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 10.2l2.4 2.4 4.6-5.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {HERO.confirmation}
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/*
                Guide download. The real PDF is not connected yet, so this is an
                accessibly-disabled placeholder button — it must not pretend the
                download works. When GUIDE_PDF_READY becomes true (PDF shipped to
                GUIDE_PDF_PATH), swap to a real download anchor.
                TODO(guide-delivery): connect GUIDE_PDF_PATH and enable.
              */}
              {GUIDE_PDF_READY ? (
                <a
                  href={GUIDE_PDF_PATH}
                  download
                  data-event="guide_download_click"
                  className="inline-flex items-center justify-center rounded-full bg-deep-green px-9 py-4 text-base font-medium text-ivory shadow-md shadow-deep-green/15 transition-[color,background-color,box-shadow] duration-200 hover:bg-evergreen hover:shadow-lg hover:shadow-deep-green/25 hover:ring-1 hover:ring-gold/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {HERO.primaryLabel}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  aria-describedby="guide-download-status"
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-deep-green/40 px-9 py-4 text-base font-medium text-ivory/90"
                >
                  {HERO.primaryLabel}
                </button>
              )}

              <a
                href={HERO.secondaryHref}
                className="inline-flex items-center justify-center gap-1 text-base font-medium text-deep-green underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {HERO.secondaryLabel}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Not-colour-alone status tied to the disabled download control. */}
            {!GUIDE_PDF_READY && (
              <p
                id="guide-download-status"
                className="mt-3 text-sm leading-relaxed text-evergreen/60"
              >
                {HERO.pendingNote}
              </p>
            )}

            <p className="mt-4 text-sm font-medium text-evergreen/70">
              {HERO.trustMicrocopy}
            </p>
          </Reveal>

          {/* Guide bundle visual — the free guide, never the paid product. */}
          <RevealMedia delay={0.1} className="order-2">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-warm-sand bg-ivory p-4 shadow-xl shadow-deep-green/10 ring-1 ring-deep-green/5 sm:p-6">
              <Image
                src={guideVisual.webp}
                alt={guideVisual.alt}
                width={guideVisual.width}
                height={guideVisual.height}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 420px, 88vw"
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          </RevealMedia>
        </div>
      </div>
    </section>
  );
}
