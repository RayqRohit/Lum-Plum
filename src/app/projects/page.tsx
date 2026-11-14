"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

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

interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  category: string;
  year: string;
  href: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "luminous",
    title: "Luminous",
    badge: "New",
    category: "Visual Design",
    year: "2025",
    href: "/projects/luminous",
  },
  {
    id: "nova",
    title: "Nova",
    category: "Product Design",
    year: "2024",
    href: "/projects/nova",
  },
  {
    id: "osaka",
    title: "Osaka",
    category: "Branding",
    year: "2023",
    href: "/projects/osaka",
  },
  {
    id: "atlas",
    title: "Atlas",
    category: "Photography",
    year: "2022",
    href: "/projects/atlas",
  },
  {
    id: "prism",
    title: "Prism",
    category: "UI/UX Design",
    year: "2021",
    href: "/projects/prism",
  },
];

export default function ProjectsPage() {
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
      className={`min-h-screen w-full select-none transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${
        isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
      }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact matches template (h-[460px] sm:h-[500px] md:h-[560px] lg:h-full, lg:flex-[1.3_0_0px]) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
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

            {/* Top Logo - Exact Framer Axel template styling (p-6, 32px font size, rotate(-22deg), Chaumont Script) */}
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

            {/* Bottom Project Details & Controls: matches axeltmpl */}
            <div className="relative z-10 px-6 sm:px-7 md:px-8 pb-5 sm:pb-5 md:pb-6 flex flex-col gap-5 sm:gap-7 md:gap-12">
              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${active.title.toLowerCase()}`}
                  className="group block cursor-pointer"
                >
                  <h2 className="text-[17px] sm:text-[18px] md:text-[21px] font-medium text-white tracking-normal leading-[1.4em] drop-shadow-sm group-hover:underline">
                    {active.title}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] font-normal text-white/70 tracking-normal mt-0.5 md:mt-1 drop-shadow-sm">
                    {active.category}
                  </p>
                </Link>

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
                      {/* Standard track */}
                      <span className="absolute inset-0 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30" />
                      {/* Animated active fill */}
                      <span
                        key={isActive ? `active-${currentSlide}` : `inactive-${index}`}
                        className={`absolute inset-0 rounded-full bg-white origin-left ${
                          isActive ? "w-full animate-pill-fill" : "w-0 opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: matches framer-2soks1 (padding: 32px 0 0, flex: 1) */}
        <section className="w-full min-h-min lg:h-full pt-4 md:pt-6 lg:pt-[32px] pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-[64px] min-w-0 flex flex-col justify-start lg:flex-[1_0_0px]">
          {/* Container matches framer-cuj1jw (flex: 1, justify-center in desktop) */}
          <div className="w-full flex-1 flex flex-col justify-start lg:justify-center">
            {/* Top Navigation Header: matches framer-1bejsl8 (padding: 0 0 0 12px) */}
            <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1 pl-3">
              <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12">
                <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                  {/* Active Backdrop Pill: Exact Framer position for Projects (centered on Projects, width 82px) */}
                  <span
                    className={`absolute left-[137px] -top-[4px] -bottom-[4px] w-[82px] rounded-full transition-colors pointer-events-none -z-0 ${
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
                      isDarkMode
                        ? "text-[#a0a0a0] hover:text-white"
                        : "text-[#666666] hover:text-black"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                      isDarkMode ? "text-white" : "text-[#1e1e28]"
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/blog"
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

                {/* Template Light / Dark Switch */}
                <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              </div>
            </header>

            {/* Content Container: matches framer-ktld8a (flex: 1, justify-center, gap: 64px, max-w-[562px]) */}
            <div className="flex-1 flex flex-col justify-center gap-[64px] w-full max-w-[562px] mt-14 sm:mt-16 md:mt-20 lg:mt-0">
              {/* Title Section: matches framer-1ofc9bv (gap: 16px) */}
              <div className="flex flex-col gap-4">
                <h1
                  className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold tracking-normal leading-[1.2] ${
                    isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                  }`}
                >
                  Projects
                </h1>
                <p
                  className={`text-[16px] font-normal leading-[1.4] ${
                    isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                  }`}
                >
                  Here’s a collection of the work I’ve had the privilege to bring to life. Each
                  project tells a unique story, crafted with creativity and attention to detail.
                </p>
              </div>

              {/* Projects Table List: matches framer-10sjdvu & framer-720d3c (width 562px) */}
              <div className="flex flex-col w-full">
                {projectsList.map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className={`group flex items-center justify-between w-full border-t transition-all duration-200 ease-out cursor-pointer hover:scale-[0.99] hover:opacity-70 active:scale-[0.98] origin-center ${
                      isDarkMode ? "border-[#1e1e1e]" : "border-[#f0f0f0]"
                    }`}
                  >
                    {/* Column 1: Title + optional Badge (framer-149ask0: flex 1, gap 12px, py-6) */}
                    <div className="flex-[1_0_0px] min-w-0 flex items-center gap-3 py-6">
                      <span
                        className={`text-[14px] font-medium leading-[1.2] transition-colors duration-200 ${
                          isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                      >
                        {project.title}
                      </span>

                      {project.badge && (
                        <span
                          className={`inline-flex items-center justify-center h-[24px] px-[10px] rounded-full text-[13px] font-semibold leading-none transition-colors duration-200 ${
                            isDarkMode
                              ? "bg-[#1c2b22] text-[#7eea9b]"
                              : "bg-[#f5fbf7] text-[#008a1e]"
                          }`}
                        >
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Column 2: Category (framer-1ka7y5u: flex 1, justify-start, py-6) */}
                    <div className="flex-[1_0_0px] min-w-0 flex items-center justify-start py-6">
                      <span
                        className={`text-[14px] font-normal leading-[1.2] transition-colors duration-200 ${
                          isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Column 3: Year (framer-1a6z83b: flex none, justify-end, py-6) */}
                    <div className="flex-none flex items-center justify-end py-6">
                      <span
                        className={`text-[14px] font-normal leading-[1.2] transition-colors duration-200 ${
                          isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                        }`}
                      >
                        {project.year}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
