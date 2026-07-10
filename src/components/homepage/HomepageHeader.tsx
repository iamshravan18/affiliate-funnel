"use client";

import { useState } from "react";

/**
 * Homepage brand header with navigation.
 * Desktop: logo + nav links + CTA button.
 * Mobile: logo + hamburger menu with accessible keyboard navigation.
 */

const NAV_LINKS = [
  { label: "Free Guides", href: "#free-guides" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "FAQ", href: "#faq" },
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

export function HomepageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-sand/70 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        {/* Brand mark + name */}
        <a
          href="#top"
          aria-label="Micro Saving Daily home"
          className="flex items-center gap-2 rounded-sm text-deep-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <GrowthCircleMark className="h-7 w-7 text-gold" />
          <span className="text-base font-semibold tracking-tight">
            Micro Saving Daily
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
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

        {/* Desktop CTA */}
        <a
          href="#free-guides"
          className="hidden rounded-full bg-deep-green px-5 py-2.5 text-sm font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:inline-flex"
          data-event="homepage_header_cta_click"
        >
          Choose Your Free Guide
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-deep-green transition-colors hover:bg-warm-sand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-warm-sand/50 bg-ivory px-5 pb-5 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-deep-green transition-colors hover:bg-warm-sand/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#free-guides"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full bg-deep-green px-5 py-3 text-center text-sm font-medium text-ivory shadow-md shadow-deep-green/15 transition-colors hover:bg-evergreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                data-event="homepage_header_cta_click"
              >
                Choose Your Free Guide
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
