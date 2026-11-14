"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { blogPosts } from "@/data/blogData";

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main
      className={`min-h-screen w-full select-none transition-colors duration-300 lg:h-screen lg:w-screen lg:overflow-hidden ${isDarkMode ? "bg-[#141414] text-[#fafafa]" : "bg-[#ffffff] text-[#1e1e28]"
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden gap-4 lg:gap-[64px]">
        {/* LEFT SHOWCASE CARD: exact matches template (desktop flex: 1.3, tablet h: 560px, mobile h: 460px / sm: 500px) */}
        <section className="w-full h-[460px] sm:h-[500px] md:h-[560px] lg:h-full py-5 md:py-8 lg:py-4 px-5 md:px-8 lg:pl-4 lg:pr-0 min-w-0 overflow-hidden flex lg:flex-[1.3_0_0px] flex-shrink-0">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden flex flex-col justify-between shadow-2xl group border border-white/5">
            {/* Background Image: matches framer-1xgvdcj (fill, cover, centered) */}
            <div className="absolute inset-0 z-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/9rDa37mrWKjRmKCbZeHnURC402s.png"
                alt="Beyond the Pixels"
                fill
                priority
                style={{ objectPosition: "42.3% 89.5%" }}
                className="object-cover rounded-[16px]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              {/* Dark overlay matching template #0000004d (~30%) */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-[16px] z-10" />
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

            {/* Bottom Featured Article Card */}
            <div className="relative z-20 px-6 sm:px-8 pb-12 sm:pb-14 lg:pb-14 flex flex-col justify-end gap-4 sm:gap-5">
              <div className="inline-flex items-center gap-1.5 h-[30px] px-3.5 rounded-full border border-white/20 bg-white/20 backdrop-blur-[6px] text-white text-[13px] font-medium w-fit select-none">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.00056 11.8333L3.8859 13.9966L4.6719 9.41459L1.33856 6.16993L5.93856 5.50326L7.9959 1.33459L10.0532 5.50326L14.6532 6.16993L11.3199 9.41459L12.1059 13.9966L8.00056 11.8333Z" />
                </svg>
                <span>Featured</span>
              </div>
              <Link
                href="/blog/beyond-the-pixels-why-we-interview-designers-makers-and-creative-thinkers"
                className="font-medium text-[18px] sm:text-[20px] lg:text-[21px] leading-[1.3] text-white hover:opacity-85 transition-opacity max-w-[540px]"
              >
                Beyond the Pixels: Why We Interview Designers, Makers, and Creative Thinkers
              </Link>
            </div>
          </div>
        </section>

        {/* RIGHT CONTENT SECTION: Navigation + Blog Header + Newsletter + Blog Feed */}
        <section className="w-full lg:h-full pt-4 md:pt-6 lg:pt-[32px] pb-10 lg:pb-0 px-5 md:px-8 lg:pl-0 lg:pr-[64px] min-w-0 flex flex-col justify-start lg:flex-[1_0_0px] overflow-y-auto overflow-x-hidden">
          {/* Top Header Navigation */}
          <header className="w-full flex-shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center justify-between min-w-max w-full gap-8 md:gap-12 pl-3">
              <nav className="relative flex items-center gap-8 flex-shrink-0 py-1">
                {/* Active Backdrop Pill for Blog */}
                <span
                  className={`absolute left-[228px] -top-[3px] -bottom-[3px] w-[62px] rounded-full transition-colors pointer-events-none -z-0 ${isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"
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
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode
                    ? "text-[#a0a0a0] hover:text-white"
                    : "text-[#666666] hover:text-black"
                    }`}
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className={`relative z-10 text-[15px] font-medium leading-[1.2] flex-shrink-0 transition-colors ${isDarkMode ? "text-white" : "text-black"
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

              {/* Theme Switcher */}
              <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>

          {/* Main Blog Header */}
          <div className="pt-12 sm:pt-16 md:pt-20 pb-8 pl-3 max-w-[560px]">
            <h1
              className={`text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold tracking-tight leading-[1.1] mb-4 ${isDarkMode ? "text-white" : "text-[#1e1e28]"
                }`}
            >
              Blog
            </h1>
            <p
              className={`text-[15px] sm:text-[16px] leading-relaxed mb-7 sm:mb-8 ${isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
                }`}
            >
              Welcome to the blog, a space where I share insights, inspiration,
              behind-the-scenes moments, and everything in between.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`flex-1 rounded-[8px] px-4 py-3 text-[14px] sm:text-[15px] outline-none transition-colors border ${isDarkMode
                    ? "bg-[#191919] border-[#292929] text-white placeholder:text-[#636366] focus:border-white/40"
                    : "bg-[#f5f5f7] border-[#e5e5ea] text-[#1e1e28] placeholder:text-[#8e8e93] focus:border-black/30"
                    }`}
                />
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-[8px] text-[14px] sm:text-[15px] font-medium transition-colors shrink-0 cursor-pointer shadow-sm ${isDarkMode
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-[#1e1e28] text-white hover:bg-black"
                    }`}
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </div>

              {/* Social Proof Avatars */}
              <div className="flex items-center gap-2.5 pt-1">
                <div className="flex items-center">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-[#141414] z-30">
                    <Image
                      src="/images/Gd6opmdiz9GnKJnINZggCjgBQo.png"
                      alt="Creator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-[#141414] -ml-2 z-20">
                    <Image
                      src="/images/v2KHoUTceXdJvNKsRsPlDQSgj3c.png"
                      alt="Creator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-[#141414] -ml-2 z-10">
                    <Image
                      src="/images/K4b3hzScgXvNUfgcceJCsdBLKY.png"
                      alt="Creator"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span
                  className={`text-[13px] font-medium ${isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
                    }`}
                >
                  Trusted by 1,000+ Creators
                </span>
              </div>
            </form>
          </div>

          {/* Blog Feed Cards */}
          <div className="pl-3 pb-20 pt-4 flex flex-col gap-12 sm:gap-14 max-w-[620px]">
            {blogPosts.slice(0, visibleCount).map((post) => (
              <article key={post.slug} className="group flex flex-col">
                {/* Post Cover Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full aspect-[1.95/1] rounded-[16px] overflow-hidden mb-4 sm:mb-5 block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectPosition: post.objectPosition || "center" }}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-[16px]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </Link>

                {/* Category Badge */}
                <div className="mt-3 sm:mt-4 mb-3">
                  <span
                    className={`inline-flex items-center px-3.5 py-1 rounded-full text-[13px] font-medium select-none ${isDarkMode
                      ? `${post.categoryColors.darkBg} ${post.categoryColors.darkText}`
                      : `${post.categoryColors.lightBg} ${post.categoryColors.lightText}`
                      }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`text-[16px] sm:text-[17px] font-medium leading-[1.4] transition-colors block hover:opacity-85 ${isDarkMode ? "text-[#fafafa]" : "text-[#1e1e28]"
                      }`}
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Description */}
                <p
                  className={`text-[13.5px] sm:text-[14px] leading-relaxed ${isDarkMode ? "text-[#8e8e93]" : "text-[#71717f]"
                    }`}
                >
                  {post.description}
                </p>
              </article>
            ))}

            {/* Load More Button */}
            {visibleCount < blogPosts.length && (
              <div className="flex justify-center w-full pt-2 pb-6">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 2)}
                  className={`w-[100px] h-[40px] rounded-[10px] text-[14px] font-semibold flex items-center justify-center cursor-pointer transition-colors select-none ${isDarkMode
                    ? "bg-[#1e1e1e] text-[#fafafa] hover:bg-[#282828]"
                    : "bg-[#f0f0f0] text-[#1e1e28] hover:bg-[#e4e4e4]"
                    }`}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
