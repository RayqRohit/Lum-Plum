"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import assets from "./theme-and-logos.json";

interface Slide {
  id: number;
  title: string;
  category: string;
  image: string;
}

const SLIDE_DURATION = 5000; // 5 seconds per slide autoplay matching standard Framer slideshows

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Autoplay timer: smoothly fills up the active indicator pill over SLIDE_DURATION, then advances to next slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  const active = slides[currentSlide];

  return (
    <main
      className={`h-screen w-screen overflow-hidden select-none transition-colors duration-300 ${isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden gap-8 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD */}
        <section
          style={{ flex: "1.3 0 0px" }}
          className="h-full py-4 pl-4 pr-0 min-w-0 overflow-hidden flex"
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image Layers - Stacked for smooth crossfade transitions */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              {slides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-[1.04] pointer-events-none z-0"
                      }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover object-center rounded-[16px]"
                      sizes="58vw"
                    />
                  </div>
                );
              })}
              {/* Overlay with 40% darkness matching template */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-[16px] z-20" />
            </div>

            {/* Top Logo - Exact Framer Axel template styling (padding: 24px 0 0 24px, 32px font size, rotate(-22deg), Chaumont Script) */}
            <div className="relative z-10 pt-6 pl-6">
              <Link
                href="/"
                className="inline-block transform -rotate-[22deg] origin-center transition-transform"
              >
                <span className="font-script text-[32px] text-white select-none leading-none inline-block">
                  Rayq
                </span>
              </Link>
            </div>

            {/* Bottom Project Details & Controls: matches axeltmpl (padding: 0 32px 24px, gap: 48px) */}
            <div className="relative z-10 px-8 pb-6 flex flex-col gap-12">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[21px] font-medium text-white tracking-normal leading-[1.4em] drop-shadow-sm">
                    {active.title}
                  </h2>
                  <p className="text-[15px] font-normal text-white/70 tracking-normal mt-1 drop-shadow-sm">
                    {active.category}
                  </p>
                </div>

                {/* Arrow Button */}
                {/* Arrow Button */}
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/20 text-white cursor-pointer"
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

              {/* Slide Indicator Pills - Matches Framer template (28px x 6px with backdrop blur and animated fill) */}
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, index) => {
                  const isActive = currentSlide === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className="group relative w-[28px] h-[6px] rounded-full cursor-pointer overflow-hidden p-0 border-0 focus:outline-none"
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Standart track */}
                      <span className="absolute inset-0 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30" />
                      {/* Animated active fill */}
                      <span
                        key={isActive ? `active-${currentSlide}` : `inactive-${index}`}
                        className={`absolute inset-0 rounded-full bg-white origin-left ${isActive
                            ? "w-full animate-pill-fill"
                            : "w-0 opacity-0"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION */}
        <section
          style={{ flex: "1 0 0px" }}
          className="h-full pt-8 pb-0 pr-10 lg:pr-16 pl-0 min-w-0 flex flex-col overflow-hidden"
        >
          {/* Top Header */}
          <header className="flex items-center justify-between w-full flex-shrink-0">
            <nav className="flex items-center gap-6 xl:gap-8">
              <Link
                href="/"
                className={`px-3.5 py-1.5 rounded-full text-[15px] font-medium transition-colors ${isDarkMode
                  ? "bg-[#252528] text-white"
                  : "bg-[#e5e5e5] text-black"
                  }`}
              >
                Home
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${isDarkMode
                  ? "text-[#a0a0a0] hover:text-white"
                  : "text-[#666666] hover:text-black"
                  }`}
              >
                About
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${isDarkMode
                  ? "text-[#a0a0a0] hover:text-white"
                  : "text-[#666666] hover:text-black"
                  }`}
              >
                Projects
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${isDarkMode
                  ? "text-[#a0a0a0] hover:text-white"
                  : "text-[#666666] hover:text-black"
                  }`}
              >
                Blog
              </Link>
              <Link
                href="#"
                className={`text-[15px] font-medium transition-colors ${isDarkMode
                  ? "text-[#a0a0a0] hover:text-white"
                  : "text-[#666666] hover:text-black"
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* Template Light / Dark Switch: Exact framer-CxA1g (78px x 40px, padding 8px 12px, Highlight circle 28px) */}
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
              className="relative flex items-center cursor-pointer select-none transition-colors duration-200"
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
          </header>

          {/* Center Content Wrapper: matches framer-1oe3eyy with flex-1 justify-center gap-[124px] */}
          <div className="flex-1 flex flex-col justify-center gap-[124px] w-full min-h-0">
            {/* Title Wrapper: matches framer-1kve0dn with gap-8 (32px) */}
            <div className="flex flex-col items-start gap-8 max-w-xl">
              {/* Status Pill */}
              <div
                className={`inline-flex items-center gap-2 h-8 px-4 rounded-full text-[14px] font-medium border ${isDarkMode
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

              {/* Title & Buttons Wrapper: matches framer-1bip8km with exact gap-[64px] */}
              <div className="flex flex-col items-start gap-16 w-full">
                {/* Main Title: Exact 56px, Line-height 1.2em, Weight 600 */}
                <h1 className="text-[44px] md:text-[52px] xl:text-[56px] font-semibold tracking-normal leading-[1.2em]">
                  I design &amp; build <br />
                  products that{" "}
                  <span
                    className={isDarkMode ? "text-[#717171]" : "text-[#9999a0]"}
                  >
                    inspire
                  </span>
                </h1>

                {/* Solid buttons: matches framer-1y3kbdw gap-4 (16px) */}
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    style={{
                      height: "48px",
                      padding: "0 24px",
                      borderRadius: "64px",
                      backgroundColor: isDarkMode ? "#fafafa" : "#1e1e28",
                      color: isDarkMode ? "#1e1e28" : "#ffffff",
                    }}
                    className="inline-flex items-center justify-center text-[15px] font-semibold tracking-normal leading-[48px] select-none text-center transition-opacity duration-150 hover:opacity-90"
                  >
                    <span className="leading-none">Book a call</span>
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
                    className="inline-flex items-center justify-center text-[15px] font-semibold tracking-normal leading-[48px] select-none text-center transition-opacity duration-150 hover:opacity-90"
                  >
                    <span className="leading-none">View projects</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Brand SVGs Marquee: inside framer-1oe3eyy with exact 24px height */}
            <div className="flex-shrink-0 w-full overflow-hidden h-[24px] select-none pointer-events-none">
              <div className="logo-marquee-mask w-full overflow-hidden">
                <div className="animate-marquee items-center gap-10">
                  {/* 1st set */}
                  {partners.map((partner, index) => {
                    if (!partner?.svg) return null;
                    return (
                      <div
                        key={`s1-${index}`}
                        className="flex items-center flex-shrink-0"
                        style={{
                          height: `${partner.height}px`,
                          width: `${partner.width}px`,
                          color: isDarkMode ? "#717171" : "#797d85",
                        }}
                        dangerouslySetInnerHTML={{ __html: partner.svg }}
                      />
                    );
                  })}

                  {/* 2nd set */}
                  {partners.map((partner, index) => {
                    if (!partner?.svg) return null;
                    return (
                      <div
                        key={`s2-${index}`}
                        className="flex items-center flex-shrink-0"
                        style={{
                          height: `${partner.height}px`,
                          width: `${partner.width}px`,
                          color: isDarkMode ? "#717171" : "#797d85",
                        }}
                        dangerouslySetInnerHTML={{ __html: partner.svg }}
                      />
                    );
                  })}

                  {/* 3rd set */}
                  {partners.map((partner, index) => {
                    if (!partner?.svg) return null;
                    return (
                      <div
                        key={`s3-${index}`}
                        className="flex items-center flex-shrink-0"
                        style={{
                          height: `${partner.height}px`,
                          width: `${partner.width}px`,
                          color: isDarkMode ? "#717171" : "#797d85",
                        }}
                        dangerouslySetInnerHTML={{ __html: partner.svg }}
                      />
                    );
                  })}

                  {/* 4th set for seamless wide looping */}
                  {partners.map((partner, index) => {
                    if (!partner?.svg) return null;
                    return (
                      <div
                        key={`s4-${index}`}
                        className="flex items-center flex-shrink-0"
                        style={{
                          height: `${partner.height}px`,
                          width: `${partner.width}px`,
                          color: isDarkMode ? "#717171" : "#797d85",
                        }}
                        dangerouslySetInnerHTML={{ __html: partner.svg }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
