export const framerEase = [0.16, 1, 0.3, 1] as const;

export const fadeUpProps = (delay = 0, duration = 0.85, yOffset = 14) => ({
  initial: { opacity: 0.001, y: yOffset },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration,
    delay,
    ease: framerEase,
  },
});

export const heroImageProps = (rotate = false, duration = 2.2, scaleFrom = 1.08) => ({
  initial: {
    opacity: 0.001,
    scale: scaleFrom,
    rotate: rotate ? 1 : 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  transition: {
    duration,
    ease: framerEase,
  },
  style: { transformOrigin: "center" as const },
});
