"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import assets from "../theme-and-logos.json";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen w-full select-none transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${
        isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
      }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact framer-12h3bak (desktop flex: 1.3, tablet h: 560px, mobile h: 460px / sm: 500px) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image: matches framer-1xgvdcj (fill, cover, centered) */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/WWdQ2zLteXSFypujmTT6YJPQvA.jpg"
                alt="Rayq"
                fill
                priority
                className="object-cover object-center rounded-[16px]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>

            {/* Top-Left Signature Logo: Links to Home (matching template framer-10cydve) */}
            <div className="relative z-10 p-6">
              <Link
                href="/"
                className="inline-block transform -rotate-[22deg] origin-center hover:opacity-85 transition-opacity"
              >
                <span className="font-script text-[32px] text-white select-none leading-none inline-block">
                  Rayq
                </span>
              </Link>
            </div>

            {/* Floating Glass Pills: elevated higher on the image */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Websites Pill */}
              <div
                className="absolute hidden sm:flex items-center justify-center h-[32px] px-4 rounded-full border border-white/20 bg-white/20 backdrop-blur-[5px] text-white text-[15px] font-medium leading-[1.2] shadow-sm select-none"
                style={{
                  left: "28%",
                  top: "48%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Websites
              </div>

              {/* Branding Pill */}
              <div
                className="absolute hidden sm:flex items-center justify-center h-[32px] px-4 rounded-full border border-white/20 bg-white/20 backdrop-blur-[5px] text-white text-[15px] font-medium leading-[1.2] shadow-sm select-none"
                style={{
                  left: "69%",
                  top: "63%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Branding
              </div>

              {/* Animation Pill */}
              <div
                className="absolute hidden sm:flex items-center justify-center h-[32px] px-4 rounded-full border border-white/20 bg-white/20 backdrop-blur-[5px] text-white text-[15px] font-medium leading-[1.2] shadow-sm select-none"
                style={{
                  left: "8%",
                  top: "69%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Animation
              </div>
            </div>

            {/* Bottom Row: Caption & Social Icons - exact framer-1smybmz */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-6 pt-0">
              <div className="max-w-[432px] mb-8 lg:mb-14 xl:mb-16">
                <h3 className="italic font-normal text-[21px] leading-[1.4] text-white/70 select-none">
                  Designer with a passion for creating intuitive digital experiences.
                </h3>
              </div>

              {/* Social Round Buttons: exact framer-1t8h39t (40px x 40px, rounded-full, 5px blur) */}
              <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur-[5px] flex items-center justify-center text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2.22563 2L6.86514 8.54523L2 14H3.03702L7.32469 9.19285L10.7321 14H14L9.14506 7.15132L13.7399 2H12.7036L8.68614 6.5037L5.49349 2H2.22563Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur-[5px] flex items-center justify-center text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3 1C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3ZM5.56 6.155V11.85H3.79V6.155H5.56ZM5.596 4.832C5.405 5.157 5.052 5.351 4.675 5.34C4.105 5.341 3.642 4.879 3.642 4.308C3.641 3.738 4.103 3.276 4.673 3.275C5.049 3.263 5.403 3.457 5.595 3.781C5.787 4.105 5.787 4.508 5.596 4.832ZM12.2 8.726V11.85H10.432V9.08C10.432 8.42 10.419 7.57 9.512 7.57C8.591 7.57 8.449 8.29 8.449 9.033V11.85H6.68V6.155H8.378V6.933H8.402C8.638 6.485 9.216 6.013 10.076 6.013C11.869 6.013 12.2 7.193 12.2 8.726Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur-[5px] flex items-center justify-center text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.08219 1C2.83111 1 1 2.83281 1 5.08447V10.9178C1 13.1689 2.83281 15 5.08447 15H10.9178C13.1689 15 15 13.1672 15 10.9155V5.08219C15 2.83111 13.1672 1 10.9155 1H5.08219ZM12.0833 3.33333C12.4053 3.33333 12.6667 3.59467 12.6667 3.91667C12.6667 4.23867 12.4053 4.5 12.0833 4.5C11.7613 4.5 11.5 4.23867 11.5 3.91667C11.5 3.59467 11.7613 3.33333 12.0833 3.33333ZM8 4.5C9.93025 4.5 11.5 6.06975 11.5 8C11.5 9.93025 9.93025 11.5 8 11.5C6.06975 11.5 4.5 9.93025 4.5 8C4.5 6.06975 6.06975 4.5 8 4.5ZM8 5.66667C7.38116 5.66667 6.78767 5.9125 6.35008 6.35008C5.9125 6.78767 5.66667 7.38116 5.66667 8C5.66667 8.61884 5.9125 9.21233 6.35008 9.64991C6.78767 10.0875 7.38116 10.3333 8 10.3333C8.61884 10.3333 9.21233 10.0875 9.64991 9.64991C10.0875 9.21233 10.3333 8.61884 10.3333 8C10.3333 7.38116 10.0875 6.78767 9.64991 6.35008C9.21233 5.9125 8.61884 5.66667 8 5.66667Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: Navigation + "A little about me" text + Rayq signature */}
        <section className="w-full min-h-min lg:h-full pt-2 md:pt-4 lg:pt-8 pb-10 lg:pb-8 px-5 md:px-8 lg:pl-0 lg:pr-16 min-w-0 flex flex-col justify-between lg:overflow-hidden lg:flex-[1_0_0px]">
          {/* Top Header */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12 pl-3">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                {/* Active Backdrop Pill: slim top/bottom padding (-top-[3px] -bottom-[3px]) */}
                <span
                  className={`absolute left-[64px] -top-[3px] -bottom-[3px] w-[66px] rounded-full transition-colors pointer-events-none -z-0 ${
                    isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"
                  }`}
                />
                <Link
                  href="/"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="#"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Theme Switcher */}
              <div
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{
                  width: "78px",
                  height: "40px",
                  padding: "8px 12px",
                  backgroundColor: isDarkMode ? "#1f1f1f" : "#f0f0f0",
                }}
                className="relative rounded-full flex items-center justify-between cursor-pointer border border-[#ffffff14] flex-shrink-0 select-none transition-colors duration-300"
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    left: isDarkMode ? "calc(100% - 34px)" : "6px",
                    backgroundColor: isDarkMode ? "#ffffff" : "#1a1a1a",
                  }}
                  className="absolute rounded-full transition-all duration-300 pointer-events-none shadow-sm"
                />

                <span
                  className="relative z-10 flex items-center justify-center w-4 h-4 pointer-events-none"
                  style={{
                    color: isDarkMode ? "#a0a0a0" : "#ffffff",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </span>

                <span
                  className="relative z-10 flex items-center justify-center w-4 h-4 pointer-events-none"
                  style={{
                    color: isDarkMode ? "#141414" : "#a0a0a0",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </header>

          {/* Center Content: "A little about me" heading & text & Rayq signature */}
          <div className="flex-1 flex flex-col justify-center my-10 lg:my-0 max-w-[580px]">
            <h1
              className={`text-[42px] sm:text-[50px] lg:text-[56px] font-semibold tracking-tight leading-[1.1] mb-6 sm:mb-8 ${
                isDarkMode ? "text-white" : "text-[#1e1e28]"
              }`}
            >
              A little about me
            </h1>

            <div
              className={`space-y-6 text-[17px] sm:text-[18px] lg:text-[16px] leading-[1.65] ${
                isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
              }`}
            >
              <p>
                Hi, I’m Rayq, a Creative Director passionate about turning ideas into impactful visuals. I thrive on storytelling, design, and strategy, bringing brands to life with creativity and purpose.
              </p>
              <p>
                With a mix of vision, detail, and a love for bold ideas, I craft experiences that connect and inspire. Whether it’s branding, digital, or campaigns, I believe in pushing creative boundaries while keeping things meaningful.
              </p>
              <p>
                Let’s create something amazing together!
              </p>
            </div>

            {/* Script Signature directly under the copy, aligned right, matching template */}
            <div className="flex justify-end pt-4 sm:pt-6">
              <span
                className={`font-style-script text-[32px] select-none ${
                  isDarkMode ? "text-white" : "text-[#1e1e28]"
                }`}
              >
                Rayq
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

