import Link from "next/link";

/**
 * Section 12: Homepage footer with brand mark, tagline, navigation,
 * legal links, and disclaimer.
 */

const NAV_LINKS = [
  { label: "Free Guides", href: "#free-guides" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#our-approach" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
];

function GrowthCircleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="17.5" stroke="currentColor" strokeWidth="2.5" />
      <rect x="10.5" y="24" width="4.8" height="5" rx="0.9" fill="currentColor" />
      <rect x="17.6" y="20" width="4.8" height="9" rx="0.9" fill="currentColor" />
      <rect x="24.7" y="14.5" width="4.8" height="14.5" rx="0.9" fill="currentColor" />
      <circle cx="28.7" cy="10.8" r="2.6" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

export function HomepageFooter() {
  return (
    <footer className="bg-evergreen text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top row: brand + nav */}
        <div className="flex flex-col gap-8 border-b border-ivory/15 pb-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand lockup */}
          <div className="flex items-center gap-3 text-ivory">
            <GrowthCircleMark className="h-8 w-8 text-gold" />
            <div>
              <p className="text-lg font-semibold leading-none">
                Micro Saving Daily
              </p>
              <p className="mt-1.5 text-sm text-ivory/60">
                Small habits. Stronger money confidence.
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="underline-offset-4 transition-colors hover:text-ivory hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline-offset-4 transition-colors hover:text-ivory hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact */}
        <p className="mt-8 text-sm text-ivory/60">
          <a
            href="mailto:support@microsavingdaily.com"
            className="underline-offset-4 transition-colors hover:text-ivory hover:underline"
          >
            support@microsavingdaily.com
          </a>
        </p>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ivory/60">
          Micro Saving Daily provides educational content about money awareness
          and personal habits. It does not provide financial, investment, medical
          or psychological advice. Individual circumstances and results vary.
        </p>

        <p className="mt-6 text-xs text-ivory/40">
          &copy; {new Date().getFullYear()} Micro Saving Daily. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
