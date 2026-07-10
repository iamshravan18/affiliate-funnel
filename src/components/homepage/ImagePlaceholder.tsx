/**
 * Homepage image placeholder component.
 *
 * Creates premium, intentional image placeholders with correct aspect ratios,
 * soft backgrounds, subtle borders, and internal labels explaining what final
 * image belongs there. These will be replaced with actual images later.
 */

type ImagePlaceholderProps = {
  /** Primary label shown in the placeholder */
  label: string;
  /** Secondary description of the intended final image */
  description: string;
  /** Aspect ratio as a Tailwind class (e.g. "aspect-[4/3]") */
  aspectRatio?: string;
  /** Background color variant */
  bg?: "ivory" | "sage" | "warm-sand";
  /** Additional className */
  className?: string;
};

const BG_CLASSES = {
  ivory: "bg-ivory",
  sage: "bg-sage/20",
  "warm-sand": "bg-warm-sand/40",
} as const;

export function ImagePlaceholder({
  label,
  description,
  aspectRatio = "aspect-[4/3]",
  bg = "ivory",
  className = "",
}: ImagePlaceholderProps) {
  return (
    /* HOMEPAGE IMAGE PLACEHOLDER — replace with final image asset */
    <div
      className={`${aspectRatio} ${BG_CLASSES[bg]} flex flex-col items-center justify-center rounded-2xl border border-taupe/50 p-6 text-center ${className}`}
      role="img"
      aria-label={`Placeholder: ${label} — ${description}`}
    >
      {/* Decorative frame icon */}
      <svg
        className="mb-3 h-8 w-8 text-taupe"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <p className="text-sm font-semibold text-deep-green/70">{label}</p>
      <p className="mt-1 max-w-[280px] text-xs leading-relaxed text-evergreen/50">
        {description}
      </p>
    </div>
  );
}
