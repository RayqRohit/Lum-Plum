"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ContactPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [budget, setBudget] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [maxTextareaHeight, setMaxTextareaHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateMaxHeight = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 1024) {
        setMaxTextareaHeight(undefined);
        return;
      }
      if (textareaRef.current) {
        const rect = textareaRef.current.getBoundingClientRect();
        // Distance from top of textarea to bottom of screen minus:
        // form row gap (28px) + button height (44px) + pt-2 (8px) + bottom margin (24px) = 104px
        const spaceBelow = 104;
        const available = window.innerHeight - rect.top - spaceBelow;
        setMaxTextareaHeight(Math.max(100, Math.floor(available)));
      }
    };

    updateMaxHeight();
    const timer1 = setTimeout(updateMaxHeight, 100);
    const timer2 = setTimeout(updateMaxHeight, 400);
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setBudget("");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <main
      className={`min-h-screen w-full select-none transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${
        isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
      }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact matches template (desktop flex: 1.3, tablet h: 560px, mobile h: 460px / sm: 500px) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image: matches framer contact image PvawYUzGU2gTCJpv3UqZk72gg.png */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/PvawYUzGU2gTCJpv3UqZk72gg.png"
                alt="Workspace"
                fill
                priority
                className="object-cover object-center rounded-[16px]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              {/* Warm gradient overlay matching template linear-gradient(180deg, #fff0 72%, #8d5f42) */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[16px] z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(141, 95, 66, 0.95) 100%)",
                }}
              />
            </div>

            {/* Top-Left Signature Logo: Links to Home (matching template framer-10cydve) */}
            <div className="relative z-20 p-6">
              <Link
                href="/"
                className="inline-block transform -rotate-[22deg] origin-center hover:opacity-85 transition-opacity"
              >
                <span className="font-script text-[32px] text-white select-none leading-none inline-block">
                  Rayq
                </span>
              </Link>
            </div>

            {/* Bottom Contacts: 3 Columns (Email, Phone, Location) */}
            <div className="relative z-20 px-6 sm:px-8 pb-8 sm:pb-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full">
              {/* Email */}
              <div className="flex flex-col">
                <span className="text-white/70 text-[13px] font-normal mb-1">
                  Email
                </span>
                <a
                  href="mailto:hi@yoursite.com"
                  className="text-white text-[14px] font-medium hover:underline transition-all"
                >
                  hi@yoursite.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <span className="text-white/70 text-[13px] font-normal mb-1">
                  Phone
                </span>
                <a
                  href="tel:302-555-6789"
                  className="text-white text-[14px] font-medium hover:underline transition-all"
                >
                  (302) 555-6789
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col">
                <span className="text-white/70 text-[13px] font-normal mb-1">
                  Location
                </span>
                <span className="text-white text-[14px] font-medium leading-snug">
                  5678 Dupont Hwy Dover, DE 19901
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: Navigation + "Let's talk" + Form */}
        <section className="w-full lg:h-full pt-4 md:pt-6 lg:pt-[32px] pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-[64px] min-w-0 flex flex-col justify-start lg:flex-[1_0_0px] overflow-y-auto lg:overflow-hidden overflow-x-hidden">
          {/* Top Header Navigation */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12 pl-3">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                {/* Active Backdrop Pill for Contact */}
                <span
                  className={`absolute right-[-10px] -top-[3px] -bottom-[3px] w-[78px] rounded-full transition-colors pointer-events-none -z-0 ${
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
                    isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
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
                  href="/contact"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Theme Switcher */}
              <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>

          {/* Form Content Area */}
          <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-16 pb-16 lg:pb-6 pl-3 max-w-[620px]">
            <h1
              className={`text-[38px] sm:text-[46px] md:text-[52px] font-semibold tracking-tight leading-[1.1] mb-4 ${
                isDarkMode ? "text-white" : "text-[#1e1e28]"
              }`}
            >
              Let’s talk
            </h1>
            <p
              className={`text-[15px] sm:text-[16px] leading-relaxed mb-8 sm:mb-10 ${
                isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
              }`}
            >
              I’d love to hear from you! Whether you have a question, a project in mind,
              or just want to say hi, feel free to reach out.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7 w-full">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  <label
                    className={`text-[14px] font-medium ${
                      isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Axel Smith"
                    className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${
                      isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:gap-3.5">
                  <label
                    className={`text-[14px] font-medium ${
                      isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hi@axel.com"
                    className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${
                      isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Company & Project budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  <label
                    className={`text-[14px] font-medium ${
                      isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Dream Studio"
                    className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${
                      isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:gap-3.5">
                  <label
                    className={`text-[14px] font-medium ${
                      isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                  >
                    Project budget
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`h-[44px] w-full px-3.5 pr-9 rounded-[8px] text-[15px] outline-none transition-colors border appearance-none cursor-pointer ${
                        !budget
                          ? isDarkMode
                            ? "text-[#636366]"
                            : "text-[#8e8e93]"
                          : isDarkMode
                          ? "text-white"
                          : "text-[#1e1e28]"
                      } ${
                        isDarkMode
                          ? "bg-[#141414] border-[#222222] focus:border-white/40"
                          : "bg-[#f5f5f7] border-[#e5e5ea] focus:border-black/30"
                      }`}
                    >
                      <option
                        value=""
                        disabled
                        className={isDarkMode ? "bg-[#141414] text-[#636366]" : "bg-[#f5f5f7] text-[#8e8e93]"}
                      >
                        Select your budget
                      </option>
                      <option
                        value="under-5k"
                        className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                      >
                        Under $5,000
                      </option>
                      <option
                        value="5k-10k"
                        className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                      >
                        $5,000 - $10,000
                      </option>
                      <option
                        value="10k-plus"
                        className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                      >
                        $10,000+
                      </option>
                    </select>
                    {/* Chevron Down Arrow: exact match to Framer template (d="M 3.5 6 L 8 10.5 L 12.5 6", 16x16, stroke-width 1.5) */}
                    <div
                      className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 ${
                        isDarkMode ? "text-[#717179]" : "text-[#8e8e93]"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M 3.5 6 L 8 10.5 L 12.5 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: How I can help? */}
              <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
                <label
                  className={`text-[14px] font-medium ${
                    isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                  }`}
                >
                  How I can help?
                </label>
                <textarea
                  ref={textareaRef}
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your company needs"
                  style={{
                    maxHeight: maxTextareaHeight ? `${maxTextareaHeight}px` : undefined,
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  className={`w-full min-h-[100px] p-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${
                    isDarkMode
                      ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                      : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                  }`}
                />
              </div>

              {/* Row 4: Submit Button & Response Time */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className={`h-[44px] px-7 rounded-full text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer shadow-sm ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-[#1e1e28] text-white hover:bg-black"
                  }`}
                >
                  {isSent ? "Message sent!" : "Get in touch"}
                </button>

                {/* Avg. response badge */}
                <div className="flex items-center gap-1.5 text-[13px] sm:text-[13.5px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className={isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"}>
                    Avg. response:
                  </span>
                  <span
                    className={`font-medium ${
                      isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                  >
                    24h
                  </span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
