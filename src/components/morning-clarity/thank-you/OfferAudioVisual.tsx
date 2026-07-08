/**
 * Restrained, brand-safe CSS/SVG audio visuals for the optional-offer sections.
 *
 * We deliberately DO NOT use Billionaire Brain Wave product artwork, vendor
 * imagery, or the free Morning Clarity guide image here — that would either
 * breach the vendor's image restrictions or blur the line between the free
 * guide and the separate paid product. These are neutral, calm audio/listening
 * motifs (headphones, soft wave lines) rendered as decorative SVG.
 */

/** Headphone + soft wave panel — used in the offer introduction column. */
export function OfferHeadphonesVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-deep-green"
    >
      <svg
        viewBox="0 0 400 260"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-30"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M0 ${72 + i * 26} C 80 ${52 + i * 26}, 140 ${92 + i * 26}, 200 ${
              72 + i * 26
            } S 340 ${52 + i * 26}, 400 ${72 + i * 26}`}
            stroke="var(--color-sage)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="relative h-20 w-20 text-ivory"
      >
        <path
          d="M14 34v-2a18 18 0 0 1 36 0v2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="34"
          width="10"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="44"
          y="34"
          width="10"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="49" cy="43" r="2" className="fill-gold" />
      </svg>
    </div>
  );
}

/** Calm equaliser / sound-wave panel — used beside the "fit" checklist. */
export function OfferSoundWaveVisual() {
  const bars = [22, 40, 30, 56, 44, 68, 50, 34, 60, 28, 46, 38];
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-sage/50 bg-sage/20"
    >
      <svg
        viewBox="0 0 240 96"
        fill="none"
        className="h-24 w-4/5 text-deep-green"
        preserveAspectRatio="xMidYMid meet"
      >
        {bars.map((h, i) => (
          <rect
            key={i}
            x={6 + i * 19}
            y={(96 - h) / 2}
            width="8"
            height={h}
            rx="4"
            fill="currentColor"
            opacity={0.35 + (i % 4) * 0.15}
          />
        ))}
        <circle cx="120" cy="48" r="3.2" className="fill-gold" />
      </svg>
    </div>
  );
}
