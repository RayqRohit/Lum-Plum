"use client";

import React from "react";
import assets from "@/app/theme-and-logos.json";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export default function ThemeToggle({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleProps) {
  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{
        width: "78px",
        height: "40px",
        padding: "8px 12px",
        borderRadius: "64px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isDarkMode ? "rgb(30, 30, 30)" : "rgb(240, 240, 240)",
        backgroundColor: isDarkMode ? "rgb(20, 20, 20)" : "rgb(255, 255, 255)",
      }}
      className="flex-shrink-0 relative flex items-center cursor-pointer select-none transition-colors duration-200"
      role="button"
      tabIndex={0}
      aria-label="Toggle dark mode"
    >
      {/* Highlight Circle (28px x 28px, rounded-[64px]) */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "64px",
          backgroundColor: isDarkMode ? "#ffffff" : "rgb(30, 30, 40)",
          transform: isDarkMode ? "translateX(36px)" : "translateX(0px)",
        }}
        className="absolute left-[6px] top-[5px] transition-transform duration-300 ease-out z-[1]"
      />

      {/* Icons Container (16px icons separated across 28px track) */}
      <div className="relative z-[2] w-full flex items-center justify-between">
        <div
          className="w-4 h-4 flex items-center justify-center transition-colors duration-200"
          style={{
            color: isDarkMode ? "#717171" : "#ffffff",
          }}
          dangerouslySetInnerHTML={{ __html: assets.svg11968413515 }}
        />

        <div
          className="w-4 h-4 flex items-center justify-center transition-colors duration-200"
          style={{
            color: isDarkMode ? "#141414" : "#a0a0a0",
          }}
          dangerouslySetInnerHTML={{ __html: assets.svg9163262485 }}
        />
      </div>
    </div>
  );
}
