import Image from "next/image";
import Link from "next/link";
import { brandLogoPrimary } from "@/content/wealth-confidence-assets";

/**
 * Minimal thank-you-page header.
 *
 * Intentionally NOT the full homepage navigation — the goal here is to keep the
 * visitor oriented to the brand without distracting from the guide. Just the
 * horizontal logo and a subtle "Return to Micro Saving Daily" text link.
 *
 * Compact height, ivory background, subtle warm-sand bottom border to match the
 * approved brand chrome. Not sticky (no reason to occupy vertical space on the
 * short confirmation flow).
 */
export function ThankYouHeader() {
  return (
    <header className="border-b border-warm-sand/70 bg-ivory">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link
          href="/"
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
          href="/"
          className="text-sm font-medium text-deep-green/80 underline-offset-4 transition-colors hover:text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Return to Micro Saving Daily
        </Link>
      </div>
    </header>
  );
}
