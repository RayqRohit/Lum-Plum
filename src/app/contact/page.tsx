"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import WordBlur from "@/components/WordBlur";
import { fadeUpProps, heroImageProps } from "@/lib/motion";

export default function ContactPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [budget, setBudget] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formHeight, setFormHeight] = useState<number | undefined>(undefined);
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
    if (isSubmitting) return;
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
    const formEl = e.currentTarget;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSent(true);
      setIsSubmitting(false);
      setBudget("");
      formEl.reset();
    }, 1500);
  };

  return (
    <main
      className={`min-h-screen w-full transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#fdfdfc] text-[#1e1e28]"
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[50px]">
        {/* LEFT SHOWCASE CARD: exact match to home page width */}
        <section className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.35_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-none lg:shadow-2xl group border border-white/5">
            {/* Background Image: matches framer contact image PvawYUzGU2gTCJpv3UqZk72gg.png */}
            <motion.div
              {...heroImageProps(false)}
              className="absolute inset-0 z-0 rounded-[16px] overflow-hidden"
            >
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
            </motion.div>

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
                <span className="text-white/70 text-[14px] sm:text-[15px] font-normal mb-1.5">
                  Direct Email
                </span>
                <a
                  href="mailto:hello@yourdomain.com"
                  className="text-white text-[15px] sm:text-[16px] font-medium hover:text-white/80 no-underline transition-colors"
                >
                  hello@yourdomain.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <span className="text-white/70 text-[14px] sm:text-[15px] font-normal mb-1.5">
                  Phone / WhatsApp
                </span>
                <a
                  href="tel:+15550192834"
                  className="text-white text-[15px] sm:text-[16px] font-medium hover:text-white/80 no-underline transition-colors"
                >
                  +1 (555) 019-2834
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col">
                <span className="text-white/70 text-[14px] sm:text-[15px] font-normal mb-1.5">
                  Studio / Based in
                </span>
                <span className="text-white text-[15px] sm:text-[16px] font-medium leading-snug">
                  San Francisco, CA / Remote Worldwide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: Navigation + "Let's talk" + Form */}
        <section className="w-full lg:h-full pt-4 md:pt-6 lg:pt-[32px] pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-[64px] min-w-0 flex flex-col justify-start lg:flex-[1_0_0px] overflow-y-auto lg:overflow-hidden overflow-x-hidden">
          {/* Top Header Navigation */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12 pl-0 lg:pl-3">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-2">
                <Link
                  href="/"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                    }`}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                    }`}
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                    }`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  <span
                    className={`absolute -inset-x-3 -inset-y-[6.5px] rounded-full transition-colors pointer-events-none -z-10 ${isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"
                      }`}
                  />
                  Contact
                </Link>
              </nav>

              {/* Theme Switcher */}
              <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>

          {/* Form Content Area */}
          <div className="w-full flex-1 flex flex-col justify-start lg:justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-0 pb-16 lg:pb-0 pl-0 lg:pl-3">
            <h1
              className={`text-[38px] sm:text-[46px] md:text-[52px] font-semibold tracking-tight leading-[1.1] mb-4 ${isDarkMode ? "text-white" : "text-[#1e1e28]"
                }`}
            >
              <WordBlur text="Let’s collaborate" baseDelay={0.15} />
            </h1>
            <motion.p
              {...fadeUpProps(0.4)}
              className={`text-[15px] sm:text-[16px] leading-relaxed mb-8 sm:mb-10 ${isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
                }`}
            >
              Have an upcoming product launch, design system challenge, or full-time opportunity in mind? Drop a line below and let’s discuss how we can work together.
            </motion.p>

            {/* Contact Form OR Success State (exact match to template reference) */}
            {isSent ? (
              <div
                style={{ minHeight: formHeight ? `${formHeight}px` : "430px" }}
                className="w-full flex flex-col items-center justify-center text-center py-10 px-2 animate-in fade-in duration-300"
              >
                {/* Checkmark in Circle */}
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 ${isDarkMode ? "border-white text-white" : "border-[#1e1e28] text-[#1e1e28]"
                    }`}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8.5L6.5 11.5L12.5 5" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className={`text-[21px] sm:text-[23px] font-semibold tracking-normal mb-2 ${isDarkMode ? "text-white" : "text-[#1e1e28]"
                    }`}
                >
                  Message Received!
                </h3>

                {/* Description */}
                <p
                  className={`text-[15px] sm:text-[15.5px] font-normal leading-relaxed text-center max-w-[460px] mx-auto ${isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
                    }`}
                >
                  Thank you for reaching out. I’ve received your details and will get back to you within 24 hours to schedule an introductory conversation.
                </p>
              </div>
            ) : (
              <motion.form
                ref={formRef}
                {...fadeUpProps(0.6)}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 sm:gap-7 w-full"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <div className="flex flex-col gap-3 sm:gap-3.5">
                    <label
                      className={`text-[14px] font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      placeholder="Alex Morgan"
                      className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-3.5">
                    <label
                      className={`text-[14px] font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      placeholder="alex@company.com"
                      className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    />
                  </div>
                </div>

                {/* Row 2: Company & Project budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <div className="flex flex-col gap-3 sm:gap-3.5">
                    <label
                      className={`text-[14px] font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                    >
                      Company or Studio
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      disabled={isSubmitting}
                      placeholder="Stripe, Linear, or Startup Name"
                      className={`h-[44px] px-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${isDarkMode
                        ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                        : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-3.5">
                    <label
                      className={`text-[14px] font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                    >
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        required
                        disabled={isSubmitting}
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        style={{ colorScheme: isDarkMode ? "dark" : "light" }}
                        className={`h-[44px] w-full px-3.5 pr-9 rounded-[8px] text-[15px] outline-none transition-colors border appearance-none cursor-pointer ${!budget
                          ? isDarkMode
                            ? "text-[#636366]"
                            : "text-[#8e8e93]"
                          : isDarkMode
                            ? "text-white"
                            : "text-[#1e1e28]"
                          } ${isDarkMode
                            ? "bg-[#141414] border-[#222222] focus:border-white/40"
                            : "bg-[#f5f5f7] border-[#e5e5ea] focus:border-black/30"
                          } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <option
                          value=""
                          disabled
                          className={isDarkMode ? "bg-[#141414] text-[#636366]" : "bg-[#f5f5f7] text-[#8e8e93]"}
                        >
                          Select estimated budget
                        </option>
                        <option
                          value="under-5k"
                          className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                        >
                          &lt; $5,000 — Sprint / Advisory
                        </option>
                        <option
                          value="5k-10k"
                          className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                        >
                          $5,000 – $10,000 — MVP / Feature Design
                        </option>
                        <option
                          value="10k-plus"
                          className={isDarkMode ? "bg-[#141414] text-white" : "bg-white text-black"}
                        >
                          $10,000+ — End-to-End System
                        </option>
                      </select>
                      {/* Chevron Down Arrow: exact match to Framer template (d="M 3.5 6 L 8 10.5 L 12.5 6", 16x16, stroke-width 1.5) */}
                      <div
                        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 ${isDarkMode ? "text-[#717179]" : "text-[#8e8e93]"
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
                    className={`text-[14px] font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                      }`}
                  >
                    How can I help you?
                  </label>
                  <textarea
                    ref={textareaRef}
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Tell me about your product goals, timeline, and current design challenges..."
                    style={{
                      maxHeight: maxTextareaHeight ? `${maxTextareaHeight}px` : undefined,
                      minHeight: "100px",
                      resize: "vertical",
                    }}
                    className={`w-full min-h-[100px] p-3.5 rounded-[8px] text-[15px] outline-none transition-colors border ${isDarkMode
                      ? "bg-[#141414] border-[#222222] text-white placeholder:text-[#636366] focus:border-white/40"
                      : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                  />
                </div>

                {/* Row 4: Submit Button & Response Time */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`h-[44px] px-7 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "cursor-pointer hover:opacity-90"
                      } ${isDarkMode
                      ? "bg-white text-black"
                      : "bg-[#1e1e28] text-white"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Get in touch</span>
                    )}
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
                      className={`font-medium ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                        }`}
                    >
                      24h
                    </span>
                  </div>
                </div>
              </motion.form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
