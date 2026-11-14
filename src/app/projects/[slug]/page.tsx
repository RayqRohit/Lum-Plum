"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "luminous";
  const project = projectsData[slug] || projectsData.luminous;

  const [isDarkMode, setIsDarkMode] = useState(true);
  if (!project) {
    notFound();
  }

  return (
    <main
      className={`min-h-screen w-full transition-colors duration-300 lg:h-screen lg:overflow-hidden ${isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact matches template (h-[460px] sm:h-[500px] md:h-[560px] lg:h-full, lg:flex-[1.3_0_0px]) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Project Image */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-center rounded-[16px]"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
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

            {/* Bottom Controls: Back button on left, Share buttons on right */}
            <div className="relative z-10 px-6 sm:px-7 md:px-8 pb-5 sm:pb-5 md:pb-6 flex items-center justify-between">
              {/* Back to Projects Arrow Button */}
              <Link
                href="/projects"
                aria-label="Back to projects"
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
                  className="mr-0.5"
                >
                  <path d="M14 6.5L8 12.5L14 18.5" />
                </svg>
              </Link>

              {/* Share Controls */}
              <div className="flex items-center gap-3">
                <span className="text-white text-[14px] font-medium leading-none drop-shadow-sm select-none">
                  Share
                </span>

                <div className="flex items-center gap-2">
                  {/* Share on X */}
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/20 text-white cursor-pointer"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Share on LinkedIn */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/20 text-white cursor-pointer"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Share on Pinterest */}
                  <a
                    href="https://in.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Pinterest"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/20 text-white cursor-pointer"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.151-1.499-.696-2.435-2.875-2.435-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.374l-.747 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: matches framer-3wz52k and framer-1e50uxw with scrollable content */}
        <section className="w-full lg:h-full pt-4 md:pt-6 lg:pt-[32px] pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-[64px] min-w-0 flex flex-col justify-start lg:flex-[1_0_0px] overflow-y-auto overflow-x-hidden">
          {/* Top Navigation Header: matches axeltmpl with Projects pill */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1 pl-3">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                {/* Active Backdrop Pill for Projects */}
                <span
                  className={`absolute left-[137px] -top-[4px] -bottom-[4px] w-[82px] rounded-full transition-colors pointer-events-none -z-0 ${isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"
                    }`}
                />
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
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
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
                  href="#"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                      ? "text-[#a0a0a0] hover:text-white"
                      : "text-[#666666] hover:text-black"
                    }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Light / Dark Mode Toggle */}
              <div
                onClick={() => setIsDarkMode(!isDarkMode)}
                role="button"
                tabIndex={0}
                aria-label="Toggle dark mode"
                className={`relative flex items-center justify-between w-[78px] h-[40px] px-[12px] py-[8px] rounded-full cursor-pointer transition-colors flex-shrink-0 ${isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"
                  }`}
              >
                <span
                  className={`absolute top-[6px] w-[28px] h-[28px] rounded-full transition-all duration-300 shadow-sm pointer-events-none ${isDarkMode
                      ? "left-[44px] bg-[#2d2d2d]"
                      : "left-[6px] bg-[#ffffff]"
                    }`}
                />

                {/* Sun Icon */}
                <div
                  className={`relative z-10 flex items-center justify-center w-[20px] h-[20px] transition-opacity duration-300 ${!isDarkMode
                      ? "opacity-100 text-[#1e1e28]"
                      : "opacity-40 text-[#ffffff] hover:opacity-70"
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
                    <circle cx="8" cy="8" r="3.5" />
                    <line x1="8" y1="1" x2="8" y2="2.5" />
                    <line x1="8" y1="13.5" x2="8" y2="15" />
                    <line x1="1" y1="8" x2="2.5" y2="8" />
                    <line x1="13.5" y1="8" x2="15" y2="8" />
                    <line x1="3.05" y1="3.05" x2="4.11" y2="4.11" />
                    <line x1="11.89" y1="11.89" x2="12.95" y2="12.95" />
                    <line x1="3.05" y1="12.95" x2="4.11" y2="11.89" />
                    <line x1="11.89" y1="4.11" x2="12.95" y2="3.05" />
                  </svg>
                </div>

                {/* Moon Icon */}
                <div
                  className={`relative z-10 flex items-center justify-center w-[20px] h-[20px] transition-opacity duration-300 ${isDarkMode
                      ? "opacity-100 text-[#fafafa]"
                      : "opacity-40 text-[#1e1e28] hover:opacity-70"
                    }`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.5 9.5A6 6 0 1 1 6.5 2.5a4.8 4.8 0 0 0 7 7z" />
                  </svg>
                </div>
              </div>
            </div>
          </header>

          {/* Project Details Content: matches axeltmpl description view */}
          <div className="w-full max-w-[562px] flex flex-col gap-6 mt-14 sm:mt-16 md:mt-20 lg:mt-18 xl:mt-20 pb-24">
            {/* Title */}
            <h1
              className={`text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold tracking-normal leading-[1.15] mb-2 ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                }`}
            >
              {project.title}
            </h1>

            {/* Intro Paragraphs */}
            <div
              className={`space-y-5 text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                }`}
            >
              {project.introParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Main Section */}
            {project.mainSection && (
              <div className="flex flex-col gap-5 mt-4">
                <h2
                  className={`text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-normal leading-[1.3] ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                >
                  {project.mainSection.heading}
                </h2>

                <div
                  className={`space-y-5 text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                    }`}
                >
                  {project.mainSection.paragraphsBeforeQuote.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Quote Block */}
                {project.mainSection.quote && (
                  <blockquote
                    className={`my-2 pl-5 border-l-2 py-1 ${isDarkMode
                        ? "border-[#fafafa] text-[#fafafa]"
                        : "border-[#1e1e28] text-[#1e1e28]"
                      }`}
                  >
                    <p className="text-[17px] sm:text-[18px] font-normal leading-[1.6] italic">
                      {project.mainSection.quote.text}
                    </p>
                    {project.mainSection.quote.author && (
                      <p
                        className={`text-[15px] font-normal mt-1 not-italic ${isDarkMode ? "text-[#a0a0a0]" : "text-[#717179]"
                          }`}
                      >
                        {project.mainSection.quote.author}
                      </p>
                    )}
                  </blockquote>
                )}

                <div
                  className={`space-y-5 text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                    }`}
                >
                  {project.mainSection.paragraphsAfterQuote.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Section */}
            {project.impactSection && (
              <div className="flex flex-col gap-5 mt-4">
                <h2
                  className={`text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-normal leading-[1.3] ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                >
                  {project.impactSection.heading}
                </h2>

                <p
                  className={`text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                    }`}
                >
                  {project.impactSection.intro}
                </p>

                {/* Impact Bullet Points */}
                <ul className="space-y-3 my-1 pl-4 list-disc marker:text-emerald-500">
                  {project.impactSection.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className={`text-[16px] leading-[1.65] ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                        }`}
                    >
                      <strong
                        className={`font-semibold ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                          }`}
                      >
                        {bullet.label}
                      </strong>{" "}
                      – {bullet.text}
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                    }`}
                >
                  {project.impactSection.conclusion}
                </p>
              </div>
            )}

            {/* Next Section */}
            {project.nextSection && (
              <div className="flex flex-col gap-4 mt-4">
                <h2
                  className={`text-[22px] sm:text-[24px] md:text-[28px] font-semibold tracking-normal leading-[1.3] ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                    }`}
                >
                  {project.nextSection.heading}
                </h2>

                <p
                  className={`text-[16px] leading-[1.65] font-normal ${isDarkMode ? "text-[#a0a0a0]" : "text-[#47474f]"
                    }`}
                >
                  {project.nextSection.text}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
