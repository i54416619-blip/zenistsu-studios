// ─────────────────────────────────────────────────────────────
// Zenistsu Studios — Framer Motion Animation Variants
// ─────────────────────────────────────────────────────────────

import type { Variants } from "framer-motion";

const easeCustom = [0.25, 0.46, 0.45, 0.94] as const;
const easeSlide = [0.76, 0, 0.24, 1] as const;

// ─── Fade Variants ────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeCustom },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

// ─── Scale Variants ───────────────────────────────────────────

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeCustom },
  },
};

// ─── Stagger Container ───────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ─── Text Reveal ──────────────────────────────────────────────

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeCustom },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeCustom },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

// ─── Slide Variants ───────────────────────────────────────────

export const slideUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: easeSlide },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.5, ease: easeSlide },
  },
};

// ─── Page Transition ──────────────────────────────────────────

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeCustom,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: easeCustom },
  },
};

// ─── Card Hover ───────────────────────────────────────────────

export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: easeCustom },
  },
};

// ─── Navbar ───────────────────────────────────────────────────

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeCustom, delay: 0.2 },
  },
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.4, ease: easeSlide },
  },
  open: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.5, ease: easeSlide },
  },
};

// ─── Marquee ──────────────────────────────────────────────────

export const marquee = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear",
      },
    },
  },
};

// ─── Loading Screen ───────────────────────────────────────────

export const loadingVariants: Variants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: easeSlide, delay: 0.2 },
  },
};

export const loadingLogoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeCustom },
  },
};

export const loadingBarVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.8, ease: easeCustom },
  },
};
