import Image from "next/image";
import { CtaButton } from "@/components/motion";
import { brandLogoPrimary } from "@/content/wealth-confidence-assets";
import { HEADER_CTA, NAV_LINKS } from "./morning-clarity-content";

/**
 * Sticky, lightly translucent ivory header — same chrome as the Micro Saving
 * Daily funnel-1 header, product-scoped only so the nav labels match the
 * approved funnel-2 copy (Routine / Inside / Guide) and the logo anchors to
 * the top of this page. Reuses the shared brand logo asset and CtaButton.
 */
export function MorningClarityHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-warm-sand/70 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <a
          href="#top"
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
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-green/80 decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-deep-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton href="#get-the-guide" size="sm">
          {HEADER_CTA}
        </CtaButton>
      </div>
    </header>
  );
}
