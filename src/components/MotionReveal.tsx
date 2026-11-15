"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface MotionFadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  yOffset?: number;
  children: React.ReactNode;
}

export function MotionFadeUp({
  delay = 0,
  duration = 0.85,
  yOffset = 14,
  className = "",
  children,
  style,
  ...props
}: MotionFadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionHeroImageProps extends HTMLMotionProps<"div"> {
  rotate?: boolean;
  duration?: number;
  scaleFrom?: number;
  children: React.ReactNode;
}

export function MotionHeroImage({
  rotate = false,
  duration = 2.2,
  scaleFrom = 1.08,
  className = "",
  children,
  style,
  ...props
}: MotionHeroImageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0.001,
        scale: scaleFrom,
        rotate: rotate ? 1 : 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "center", ...style }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
