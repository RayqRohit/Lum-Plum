"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import assets from "./theme-and-logos.json";

interface Slide {
  id: number;
  title: string;
  category: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Luminous",
    category: "Visual Design",
    image: "/images/oYhlVIWU5MgrLHfcqMQS7M3AxA.jpg",
  },
  {
    id: 2,
    title: "Osaka",
    category: "Brand Identity",
    image: "/images/lijDKTTFQa95RSKUPUNYKsOdWc.jpg",
  },
  {
    id: 3,
    title: "Atlas",
    category: "Creative Direction",
    image: "/images/yStE9KWzFrtJTVgDpvp7op43a0U.jpg",
  },
];

const partners = [
  assets.springfield,
  assets.orbitc,
  assets.cloud,
  assets.proline,
  assets.amsterdam,
  assets.luminous,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <main
      className={`h-screen w-screen overflow-hidden select-none transition-colors duration-300 ${
        isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
      }`}
    >
      <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden gap-8 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD */}
        <section
          style={{ flex: "1.3 0 0px" }}
          className="h-full py-4 pl-4 pr-0 min-w-0 overflow-hidden flex"
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src={active.image}
                alt={active.title}
                fill
                priority
                className="object-cover object-center transition-all duration-700 ease-out rounded-[16px]"
                sizes="58vw"
              />
              {/* Overlay with 40% darkness matching template */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-[16px]" />
            </div>

            {/* Top Logo */}
            <div className="relative z-10 pt-6 pl-6 md:pt-7 md:pl-7">
              <Link
                href="/"
                className="inline-block transform -rotate-[22deg] origin-left transition-transform hover:scale-105"
              >
                <span className="font-script text-[36px] text-white font-bold drop-shadow-md select-none tracking-wide">
                  Raya
                </span>
              </Link>
            </div>

            {/* Bottom Project Details & Controls */}
            <div className="relative z-10 px-8 pb-7 flex flex-col gap-6">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-[21px] font-medium text-white tracking-normal leading-[1.4em] drop-shadow-sm">
                    {active.title}
                  </h2>
                  <p className="text-[15px] font-normal text-white/70 tracking-normal mt-1 drop-shadow-sm">
                    {active.category}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-90 border border-white/20 text-white cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-0.5"
                  >
                    <path d="M10 6.5L16 12.5L10 18.5" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicator Pills */}
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === index
                        ? "w-7 bg-white"
                        : "w-3 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION - overflow-visible allows focus rings to render freely */}
        <section
          style={{ flex: "1 0 0px" }}
          className="h-full pt-8 pb-7 pr-10 lg:pr-16 pl-0 min-w-0 flex flex-col justify-between overflow-visible"
        >
          {/* Top Header */}
          <header className="flex items-center justify-between w-full flex-shrink-0">
            <nav className="flex items-center gap-6 xl:gap-8">
              <Link
                href="/"
                className={`px-3.5 py-1.5 rounded-full text-[15px] font-medium transition-colors ${
                  isDarkMode
                    ? "bg-[#252528] text-white"
                    : "bg-[#e5e5e5] text-black"
                }`}
              >
                Home
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${
                  isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                }`}
              >
                About
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${
                  isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                }`}
              >
                Projects
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${
                  isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                }`}
              >
                Blog
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${
                  isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Template Light / Dark Switch */}
            <div
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative flex items-center justify-between w-[78px] h-[40px] px-3 rounded-full cursor-pointer transition-colors border select-none ${
                isDarkMode
                  ? "bg-[#141414] border-[#2d2d2d]"
                  : "bg-white border-[#e0e0e0]"
              }`}
            >
              <div
                className={`absolute top-[4px] w-[30px] h-[30px] rounded-full transition-transform duration-300 flex items-center justify-center ${
                  isDarkMode
                    ? "left-[4px] bg-[#1e1e28] shadow-sm transform translate-x-[38px]"
                    : "left-[4px] bg-[#f0f0f0] shadow-sm transform translate-x-0"
                }`}
              />

              <div
                className={`relative z-10 w-4 h-4 flex items-center justify-center transition-colors ${
                  !isDarkMode ? "text-[#1e1e28]" : "text-[#717171]"
                }`}
                dangerouslySetInnerHTML={{ __html: assets.svg11968413515 }}
              />

              <div
                className={`relative z-10 w-4 h-4 flex items-center justify-center transition-colors ${
                  isDarkMode ? "text-white" : "text-[#a0a0a0]"
                }`}
                dangerouslySetInnerHTML={{ __html: assets.svg9163262485 }}
              />
            </div>
          </header>

          {/* Center Content - overflow-visible ensures no child outlines are clipped */}
          <div className="my-auto flex flex-col items-start gap-8 max-w-xl overflow-visible">
            {/* Status Pill */}
            <div
              className={`inline-flex items-center gap-2 h-8 px-4 rounded-full text-[14px] font-medium border ${
                isDarkMode
                  ? "bg-[#1c2b22] text-[#7eea9b] border-[#223d2b]"
                  : "bg-[#f5fbf7] text-[#008a1e] border-[#d4edd9]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7eea9b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
              </span>
              <span>Now booking</span>
            </div>

            {/* Main Title: Exact 56px, Line-height 1.2em, Weight 600 */}
            <h1 className="text-[44px] md:text-[52px] xl:text-[56px] font-semibold tracking-normal leading-[1.2em]">
              I design &amp; build <br />
              products that{" "}
              <span
                className={isDarkMode ? "text-[#47474f]" : "text-[#9999a0]"}
              >
                inspire
              </span>
            </h1>

            {/* Buttons Row with complete clearance and box-shadow ring */}
            <div className="flex items-center gap-4 overflow-visible p-2 -m-2">
              <Link
                href="#"
                style={{
                  height: "48px",
                  padding: "0 24px",
                  borderRadius: "64px",
                  backgroundColor: isDarkMode ? "#fafafa" : "#1e1e28",
                  color: isDarkMode ? "#1e1e28" : "#ffffff",
                }}
                className="btn-pill inline-flex items-center justify-center text-[15px] font-semibold tracking-normal transition-transform duration-150 active:scale-95 hover:opacity-90"
              >
                Book a call
              </Link>
              <Link
                href="#"
                style={{
                  height: "48px",
                  padding: "0 24px",
                  borderRadius: "64px",
                  backgroundColor: isDarkMode ? "rgb(45, 45, 45)" : "rgb(240, 240, 240)",
                  color: isDarkMode ? "#fafafa" : "#1e1e28",
                }}
                className="btn-pill inline-flex items-center justify-center text-[15px] font-semibold tracking-normal transition-transform duration-150 active:scale-95 hover:opacity-90"
              >
                View projects
              </Link>
            </div>
          </div>

          {/* Bottom Brand SVGs */}
          <div className="flex-shrink-0 pt-4 overflow-hidden">
            <div className="flex items-center gap-9 opacity-50 hover:opacity-85 transition-opacity overflow-x-hidden">
              {partners.map((partner, index) => {
                if (!partner?.svg) return null;
                return (
                  <div
                    key={index}
                    className="flex items-center text-[#717171] hover:text-[#a0a0a0] transition-colors flex-shrink-0"
                    style={{ height: `${partner.height}px` }}
                    dangerouslySetInnerHTML={{ __html: partner.svg }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
