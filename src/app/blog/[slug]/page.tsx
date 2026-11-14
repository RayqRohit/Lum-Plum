"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useParams, notFound } from "next/navigation";
import { blogPostsBySlug, blogPosts } from "@/data/blogData";

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || blogPosts[0].slug;
  const post = blogPostsBySlug[slug];

  const [isDarkMode, setIsDarkMode] = useState(true);

  if (!post) {
    notFound();
  }

  return (
    <main
      className={`min-h-screen w-full transition-colors duration-300 lg:h-screen lg:overflow-hidden ${
        isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
      }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact matches template (h-[460px] sm:h-[500px] md:h-[560px] lg:h-full, lg:flex-[1.3_0_0px]) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Blog Cover Image */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                style={{ objectPosition: post.objectPosition || "center" }}
                className="object-cover rounded-[16px]"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none rounded-[16px] z-20" />
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

            {/* Bottom Controls: Back button to /blog on left, Share buttons on right */}
            <div className="relative z-10 px-6 sm:px-7 md:px-8 pb-5 sm:pb-5 md:pb-6 flex items-center justify-between">
              {/* Back to Blog Arrow Button */}
              <Link
                href="/blog"
                aria-label="Back to blog"
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
          {/* Top Navigation Header: matches axeltmpl with Blog pill */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1 pl-3">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                {/* Active Backdrop Pill for Blog */}
                <span
                  className={`absolute left-[228px] -top-[3px] -bottom-[3px] w-[62px] rounded-full transition-colors pointer-events-none -z-0 ${
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
                    isDarkMode ? "text-white" : "text-black"
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

              {/* Light / Dark Mode Toggle */}
              <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>

          {/* Blog Article Content */}
          <article className="pt-12 sm:pt-16 md:pt-20 pb-20 pl-3 max-w-[640px]">
            {/* Title */}
            <h1
              className={`text-[32px] sm:text-[40px] md:text-[46px] font-semibold leading-[1.18] mb-8 tracking-tight ${
                isDarkMode ? "text-white" : "text-[#1e1e28]"
              }`}
            >
              {post.title}
            </h1>

            {/* Content Blocks */}
            <div className="space-y-6">
              {post.blocks.map((block, idx) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={idx}
                      className={`text-[22px] sm:text-[25px] font-semibold tracking-tight pt-4 mb-3 ${
                        isDarkMode ? "text-white" : "text-[#1e1e28]"
                      }`}
                      dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                  );
                }

                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={idx}
                      className={`border-l-2 pl-4 sm:pl-5 py-2 my-7 text-[15px] sm:text-[16px] italic leading-relaxed ${
                        isDarkMode
                          ? "border-white/30 text-white/90 bg-white/[0.02]"
                          : "border-black/30 text-[#1e1e28]/90 bg-black/[0.02]"
                      }`}
                      dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                  );
                }

                return (
                  <p
                    key={idx}
                    className={`text-[15px] sm:text-[16px] leading-[1.7] ${
                      isDarkMode ? "text-[#a0a0a0]" : "text-[#666666]"
                    }`}
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                );
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
