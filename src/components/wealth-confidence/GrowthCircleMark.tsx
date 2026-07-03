/**
 * Growth Circle brand motif.
 *
 * Circle = daily repetition / consistency.
 * Ascending bars = small money habits becoming visible progress.
 * Gold dot = one small daily money decision.
 *
 * Ring + bars use `currentColor` so the mark inherits its surrounding text
 * color (deep green on light sections, ivory on the dark belief/footer).
 * The gold dot is fixed to the brand gold. Geometry matches the mark used on
 * the legal pages for site-wide consistency.
 */
type GrowthCircleMarkProps = {
  className?: string;
  /** Provide a title to expose the mark to assistive tech; omit for decorative. */
  title?: string;
};

export function GrowthCircleMark({ className, title }: GrowthCircleMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <circle
        cx="20"
        cy="20"
        r="17.5"
        stroke="currentColor"
        strokeWidth="2.25"
        opacity="0.4"
      />
      <rect x="10.5" y="24" width="4.8" height="5" rx="0.9" fill="currentColor" />
      <rect x="17.6" y="20" width="4.8" height="9" rx="0.9" fill="currentColor" />
      <rect
        x="24.7"
        y="14.5"
        width="4.8"
        height="14.5"
        rx="0.9"
        fill="currentColor"
      />
      <circle cx="28.7" cy="10.8" r="2.9" className="fill-gold" />
    </svg>
  );
}
