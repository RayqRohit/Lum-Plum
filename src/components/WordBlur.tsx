"use client";

import React from "react";

interface WordBlurProps {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
}

export default function WordBlur({
  text,
  baseDelay = 0.15,
  stagger = 0.08,
  className = "",
}: WordBlurProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block animate-word-blur ${className}`}
          style={{ animationDelay: `${(baseDelay + i * stagger).toFixed(2)}s` }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}
