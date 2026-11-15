"use client";

import React from "react";
import { motion } from "framer-motion";

interface WordBlurProps {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
}

export default function WordBlur({
  text,
  baseDelay = 0.15,
  stagger = 0.06,
  className = "",
}: WordBlurProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.001, filter: "blur(8px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.85,
            delay: baseDelay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${className}`}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </>
  );
}
