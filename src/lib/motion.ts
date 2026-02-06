export const SPRING_SUBTLE = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const STAGGER = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const VIEWPORT_CONFIG = {
  once: true,
  margin: "-10%",
};
