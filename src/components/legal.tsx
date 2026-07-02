import Link from "next/link";

/* ----------------------------------------------------------------- */
/* Shared chrome for the compliance / legal routes:                   */
/*   /privacy  /terms  /affiliate-disclosure  /disclaimer  /contact   */
/*                                                                    */
/* These pages exist so the homepage footer links resolve (not 404),  */
/* which Facebook ad review requires. Content is real, but the items  */
/* below should be confirmed against the actual operating business    */
/* (legal entity name, mailing address, jurisdiction, live inbox,     */
/* and the specific email/analytics providers in use).                */
/* ----------------------------------------------------------------- */

/** Single source of truth so every page/footer stays in sync. */
export const BRAND = "Micro Saving Daily";
export const CONTACT_EMAIL = "support@microsavingdaily.com";
export const EFFECTIVE_DATE = "July 3, 2026";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

/* Brand mark: a simple "Growth Circle" (rising bars inside a ring). */
function GrowthCircle({ className = "" }: { className?: string }) {
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

function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 px-4">
      <div className="mx-auto mt-3 flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border border-taupe/50 bg-ivory/80 px-4 shadow-[0_1px_10px_rgba(11,36,31,0.05)] backdrop-blur-sm sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-deep-green"
          aria-label={`${BRAND} home`}
        >
          <GrowthCircle className="h-6 w-6 text-gold" />
          <span className="text-base font-semibold tracking-tight">{BRAND}</span>
        </Link>

        <Link
          href="/"
          className="text-sm font-medium text-deep-green underline-offset-4 hover:underline"
        >
          &larr; Back to guide
        </Link>
      </div>
    </header>
  );
}

function LegalFooter() {
  return (
    <footer className="bg-evergreen text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-6 border-b border-ivory/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 text-ivory">
            <GrowthCircle className="h-7 w-7 text-gold" />
            <div>
              <p className="text-lg font-semibold leading-none">{BRAND}</p>
              <p className="mt-1 text-sm text-ivory/60">
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
                className="transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ivory/60">
          {BRAND} provides educational content about money habits and financial
          awareness. We are not financial advisors, and this content is not
          financial advice. Some links may be affiliate links, which means we
          may earn a commission at no extra cost to you. Results vary and no
          specific financial outcome is guaranteed.
        </p>

        <p className="mt-6 text-xs text-ivory/40">
          &copy; {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/**
 * Page wrapper for the long-form compliance routes. Renders the brand header,
 * a title block with an effective date, the prose body, and the shared footer.
 */
export function LegalPage({
  title,
  intro,
  kicker = "Legal",
  updated = EFFECTIVE_DATE,
  children,
}: {
  title: string;
  intro?: string;
  kicker?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-evergreen">
      <LegalHeader />

      <main className="flex-1 px-6 pt-16 pb-24">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {kicker}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-deep-green sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 text-lg leading-relaxed text-evergreen/75">
              {intro}
            </p>
          ) : null}
          <p className="mt-4 text-sm text-evergreen/55">
            Last updated: {updated}
          </p>

          <hr className="mt-8 border-taupe/50" />

          <div className="legal-content mt-8">{children}</div>
        </article>
      </main>

      <LegalFooter />
    </div>
  );
}
