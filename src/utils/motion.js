/**
 * Centralized Framer Motion variants and animation utilities.
 * Built with clean physics-based cubic-bezier easing for smooth, natural entrance motions.
 */

// Custom easing curves
export const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.4, 0, 0.2, 1];

/**
 * Orchestrates staggered reveals for children elements.
 */
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

/**
 * Fade up animation - ideal for text, cards, and section headers.
 */
export const fadeInUp = (duration = 0.5, yOffset = 24) => ({
  hidden: { 
    opacity: 0, 
    y: yOffset 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: EASE_OUT_CUBIC,
    },
  },
});

/**
 * Simple opacity fade.
 */
export const fadeIn = (duration = 0.4) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration,
      ease: 'easeOut',
    },
  },
});

/**
 * Subtle zoom-in animation - great for badges, stats, and mockups.
 */
export const scaleIn = (duration = 0.4, initialScale = 0.95) => ({
  hidden: { 
    opacity: 0, 
    scale: initialScale 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration,
      ease: EASE_OUT_CUBIC,
    },
  },
});

/**
 * Slide-in animation from left or right.
 */
export const slideIn = (direction = 'left', duration = 0.5, distance = 40) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -distance : distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: EASE_OUT_CUBIC,
    },
  },
});

/**
 * Interactive card hover micro-interaction.
 */
export const cardHoverMotion = {
  rest: { 
    y: 0, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
  hover: { 
    y: -4, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
};
