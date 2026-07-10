import { Reveal } from "@/components/motion";

/**
 * Section 3: Trust Strip — four concise trust points.
 * Uses simple inline SVG icons (no external icon package).
 */

const TRUST_POINTS = [
  {
    label: "Free practical resources",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    label: "Simple daily routines",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Educational, not financial advice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    label: "No complicated tools required",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust points" className="border-y border-warm-sand/60 bg-warm-sand/20">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
        <Reveal>
          <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {TRUST_POINTS.map((point) => (
              <li
                key={point.label}
                className="flex items-center gap-3 text-sm font-medium text-deep-green/80"
              >
                <span className="flex-shrink-0 text-gold">{point.icon}</span>
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
