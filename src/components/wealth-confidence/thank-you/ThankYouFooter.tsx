import Link from "next/link";
import { GrowthCircleMark } from "../GrowthCircleMark";

/**
 * Thank-you-page footer. Uses the approved evergreen brand footer style (mirrors
 * SiteFooter / the legal pages) but carries the fuller Phase-5A disclaimer that
 * explicitly covers third-party product claims, since this page introduces an
 * affiliate resource. Kept as its own component so the homepage footer stays
 * untouched.
 */
const FOOTER_LINKS = [
  { label: "Return to homepage", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export function ThankYouFooter() {
  return (
    <footer className="bg-evergreen text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-6 border-b border-ivory/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-ivory">
            <GrowthCircleMark className="h-8 w-8 text-ivory/90" />
            <div>
              <p className="text-lg font-semibold leading-none">
                Micro Saving Daily
              </p>
              <p className="mt-1.5 text-sm text-ivory/60">
                Small habits. Stronger money confidence.
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {FOOTER_LINKS.map((link) => (
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

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ivory/60">
          Micro Saving Daily provides educational content about money awareness
          and spending habits. It does not provide financial, investment,
          medical, or psychological advice. Third-party products may make their
          own claims, which should be reviewed independently. Individual
          experiences and results vary.
        </p>

        <p className="mt-6 text-xs text-ivory/40">
          &copy; {new Date().getFullYear()} Micro Saving Daily. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
