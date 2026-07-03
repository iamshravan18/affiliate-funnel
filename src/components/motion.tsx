"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

/** Static motion DOM components (avoids deprecated `motion(stringTag)`). */
const MOTION_TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  li: motion.li,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
  section: motion.section,
} as const;

type MotionTagName = keyof typeof MOTION_TAGS;

/**
 * Restrained, premium motion primitives.
 *
 * Rules enforced here:
 * - Only opacity + translate (transform) are animated. Never width/height/top/left.
 * - All motion respects `prefers-reduced-motion` (transforms collapse to 0).
 * - Reveals fire once on scroll-in, no scroll hijacking or continuous parallax.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger/entry delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px (translate only). */
  y?: number;
  /** Element to render (semantic flexibility). */
  as?: MotionTagName;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Image reveal: opacity + subtle translate only. Wrap an <Image> or media block.
 */
export function RevealMedia({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE, delay },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type CtaButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  /** Visual variant. */
  tone?: "solid" | "outline";
  /** Padding/size scale. */
  size?: "sm" | "md";
};

/**
 * Primary CTA anchor with restrained hover/tap feedback (scale only).
 */
export function CtaButton({
  children,
  tone = "solid",
  size = "md",
  className = "",
  ...rest
}: CtaButtonProps) {
  const reduced = useReducedMotion();

  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-[color,background-color,box-shadow,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-9 py-4 text-base",
  } as const;

  const tones = {
    solid:
      "bg-deep-green text-ivory shadow-md shadow-deep-green/15 hover:bg-evergreen hover:shadow-lg hover:shadow-deep-green/25 hover:ring-1 hover:ring-gold/50",
    outline:
      "border border-deep-green/30 bg-transparent text-deep-green hover:border-gold/50 hover:bg-deep-green/5",
  } as const;

  const interaction = reduced
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

  return (
    <motion.a
      className={`${base} ${sizes[size]} ${tones[tone]} ${className}`}
      {...interaction}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
