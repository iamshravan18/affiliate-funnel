import Image from "next/image";
import Link from "next/link";
import { brandLogoPrimary } from "@/content/wealth-confidence-assets";

/**
 * Compact confirmation header for the Morning Clarity thank-you page.
 *
 * Deliberately simpler than the homepage header — no primary navigation menu,
 * so nothing competes with the guide confirmation. Just the Micro Saving Daily
 * logo and a small text link back to the homepage. Not sticky (the flow is
 * short and downward). Reuses the shared brand logo asset.
 */
export function MorningClarityThankYouHeader() {
  return (
    <header className="border-b border-warm-sand/70 bg-ivory">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link
          href="/7-minute-morning-clarity-reset"
          aria-label="Micro Saving Daily home"
          className="flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Image
            src={brandLogoPrimary.svg}
            alt="Micro Saving Daily"
            width={200}
            height={50}
            priority
            unoptimized
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <Link
          href="/7-minute-morning-clarity-reset"
          className="text-sm font-medium text-deep-green/80 underline-offset-4 transition-colors hover:text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Back to Micro Saving Daily
        </Link>
      </div>
    </header>
  );
}
