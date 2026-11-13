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

const SLIDE_DURATION = 5000;

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
      className={`min-h-screen w-full select-none transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: matches template (h-[260px] sm:h-[300px] md:h-[523px] lg:h-full) */}
        <section
          className="w-full h-[260px] sm:h-[300px] md:h-[523px] lg:h-full py-3 sm:py-5 md:py-8 lg:py-4 px-4 sm:px-6 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0"
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image Layers - Stacked for smooth crossfade transitions */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              {slides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
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
                      sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                  </div>
                );
              })}
              {/* Overlay with 40% darkness matching template */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-[16px] z-20" />
            </div>

            {/* Top Logo - Exact Framer Axel template styling (padding: 24px 0 0 24px, 32px font size, rotate(-22deg), Chaumont Script) */}
            <div className="relative z-10 pt-5 pl-5 sm:pt-6 sm:pl-6 md:pt-6 md:pl-6">
              <Link
                href="/"
                className="inline-block transform -rotate-[22deg] origin-center transition-transform"
              >
                <span className="font-script text-[28px] sm:text-[30px] md:text-[32px] text-white select-none leading-none inline-block">
                  Rayq
                </span>
              </Link>
            </div>

            {/* Bottom Project Details & Controls: matches axeltmpl */}
            <div className="relative z-10 px-6 sm:px-7 md:px-8 pb-5 sm:pb-5 md:pb-6 flex flex-col gap-5 sm:gap-7 md:gap-12">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[17px] sm:text-[18px] md:text-[21px] font-medium text-white tracking-normal leading-[1.4em] drop-shadow-sm">
                    {active.title}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] font-normal text-white/70 tracking-normal mt-0.5 md:mt-1 drop-shadow-sm">
                    {active.category}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/20 text-white cursor-pointer"
                >
                  <svg
                    width="19"
                    height="19"
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

        {/* RIGHT CONTENT SECTION: matches framer-e5cx0g & framer-eadwsm */}
        <section
          className="w-full min-h-min lg:h-full pt-2 md:pt-4 lg:pt-8 pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-16 min-w-0 flex flex-col lg:overflow-hidden lg:flex-[1_0_0px]"
        >
          {/* Top Header: On mobile the entire bar scrolls together (nav + theme switch), matching axeltmpl .framer-1lxwaom { overflow: auto } */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12">
              <nav className="flex items-center gap-7 sm:gap-8 xl:gap-8 flex-shrink-0">
                <Link
                  href="/"
                  className={`px-3.5 py-1.5 rounded-full text-[14px] md:text-[15px] font-medium transition-colors flex-shrink-0 ${
                    isDarkMode
                      ? "bg-[#252528] text-white"
                      : "bg-[#e5e5e5] text-black"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className={`text-[14px] md:text-[15px] font-medium transition-colors flex-shrink-0 ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className={`text-[14px] md:text-[15px] font-medium transition-colors flex-shrink-0 ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="#"
                  className={`text-[14px] md:text-[15px] font-medium transition-colors flex-shrink-0 ${
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className={`text-[14px] md:text-[15px] font-medium transition-colors flex-shrink-0 ${
                    isDarkMode
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
                className="flex-shrink-0 relative flex items-center cursor-pointer select-none transition-colors duration-200"
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
            </div>
          </header>

          {/* Center Content Wrapper: matches framer-1oe3eyy with flex-1 justify-center gap-16 md:gap-24 lg:gap-[124px] w-full min-h-0 pt-16 md:pt-20 lg:pt-0 */}
          <div className="flex-1 flex flex-col justify-center gap-16 md:gap-24 lg:gap-[124px] w-full min-h-0 pt-16 md:pt-20 lg:pt-0">
            {/* Title Wrapper: matches framer-1kve0dn */}
            <div className="flex flex-col items-start gap-6 md:gap-8 max-w-xl">
              {/* Status Pill */}
              <div
                className={`inline-flex items-center gap-2 h-8 px-4 rounded-full text-[14px] font-medium border mt-4 md:mt-6 lg:mt-0 ${
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

              {/* Title & Buttons Wrapper: matches framer-1bip8km with responsive gap */}
              <div className="flex flex-col items-start gap-12 sm:gap-14 md:gap-16 w-full">
                {/* Main Title: responsive 32px on mobile, 40px on tablet, 56px on desktop */}
                <h1 className="text-[32px] sm:text-[40px] xl:text-[56px] font-semibold tracking-normal leading-[1.2em]">
                  I design &amp; build <br />
                  products that{" "}
                  <span
                    className={isDarkMode ? "text-[#717171]" : "text-[#9999a0]"}
                  >
                    inspire
                  </span>
                </h1>

                {/* Solid buttons: matches framer-1y3kbdw gap-4 (16px) with extra top spacing on mobile */}
                <div className="flex items-center gap-4 flex-wrap mt-2 sm:mt-0">
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
                    <span>Book a call</span>
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
                    <span>View projects</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Brand SVGs Marquee: inside framer-1oe3eyy with exact 24px height */}
            <div className="flex-shrink-0 w-full overflow-hidden h-[24px] select-none pointer-events-none mt-6 lg:mt-0">
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
