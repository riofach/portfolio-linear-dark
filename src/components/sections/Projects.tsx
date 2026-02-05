import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section className="py-24 px-6 lg:px-8" id="work">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-dark pb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected Work
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              A curated list of projects that demonstrate my ability to bridge the
              gap between design and engineering.
            </p>
          </div>
          <a
            className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-white transition-colors"
            href="#"
          >
            View all projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]">
            <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
              <img
                alt="Dashboard interface with data visualization charts"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrYuG7lmS1K0jJVvUmEs9X3jf7z8BIJBziYsYRn38eQGLXN5blpfdAqsB0HCyf2BWm7LNxavbf_ZQQGqjjrYV4RSB34-UWsrtk8Vf0HsQSnbPYQNvQZ449EVUBooz6EL30-cj7g3rjthn8t8U0Uchp7n9Z8Bnqm3vsATeAcZ-wlEKgOaxAvMNBzNQUKJSabk2yUNlGcKPtIFLS05yqDPR3BuqJxLf4ocn_ufpTvtwZTjFUgxnWXZbLGJru3ukl3DbnzQOnynMWYj0"
              />
            </div>
            <div className="relative z-20 -mt-12 p-8 pt-0">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  React
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Tailwind
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Node.js
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                E-commerce Analytics Dashboard
              </h3>
              <p className="mt-2 text-gray-400">
                A comprehensive analytics platform for online retailers,
                featuring real-time data visualization and inventory management.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                  Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]">
            <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
              <img
                alt="Mobile banking application interface on a phone screen"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUkuIrOtYT5ddkCUT7vgZkJ1SDURC1jCdlWliqnUON-i7D5ZlmvRK6p2KKUhc6FWQfy1LlAtN7iTWTHC5F3C9P_3h9Yuf_eYy_UATEBqppUH36BcPLHRBlhQuJDGBS9I0d5aCZET-xTFMnWSh11ozKfyggnJfJHT_5CL43LQqWH_6LWOfyTK1G47wXFsgrUgHqczW_jeOdzBSMpkCf10PAjM-cP-UI6WyUTRdl_CQyorjHVaC2LUUEyZSuh3o588qJjSH3PeSEPow"
              />
            </div>
            <div className="relative z-20 -mt-12 p-8 pt-0">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  iOS
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  SwiftUI
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Figma
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                NeoBank Mobile App
              </h3>
              <p className="mt-2 text-gray-400">
                A modern fintech mobile application focused on simplifying
                personal finance for Gen Z users.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                  Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]">
            <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
              <img
                alt="Travel website landing page with scenic landscape"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMpgKHxr1YS0o7tpoqdubRez4WeppIUQVhlhvRaU6LDKVNypCZWT7M5U4ParS-P6IURbLbFX6CS3ff0MFbJMGBmR82M_IGHaNjnuF6OByAAU6LBHxWXrIssijWzQR7g86iDxrvOjPH_g-GnstXpHC2ooI1Lt-DhgvPvJHatrDUguwG3m8pTEFQwqsr6mv55FMP_kPRRjRY8QYWDR4XcowHhykeSqK8Sixihtab4ewHU6dV02g7cb152xyCUp0WVk56hSMpX03oIC4"
              />
            </div>
            <div className="relative z-20 -mt-12 p-8 pt-0">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Next.js
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Supabase
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                Wanderlust Travel Platform
              </h3>
              <p className="mt-2 text-gray-400">
                A comprehensive booking engine allowing users to create custom
                travel itineraries with AI assistance.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                  Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]">
            <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
              <img
                alt="Abstract AI generated artwork representing content generation"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQwfJq3QA3xpmfQuqb2QogwEZHr-fmXykYnNQTcsZmuQn5br_PjzUwqBSw3YDu8NZk_rfUdo266ygualBCAMNvzoT53m3gJqezpiy6FvcZjidnafI8LSJnMwhEDe6ai0xmoGzwaRVAJPzT0zHsgyOIfmj6pG-iNTQMCmKKgMctpy1AzojX0WlW-F6H2wBEjhP0g_ggAA32jfxTkNXa7LZnJE6Cg7z7LCJ5eYkm3n0iB7snvOWdOcoYIceYXF3koIm-86hzmTW4zg"
              />
            </div>
            <div className="relative z-20 -mt-12 p-8 pt-0">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Python
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  OpenAI
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                CopyGen AI
              </h3>
              <p className="mt-2 text-gray-400">
                An intelligent content generation tool helping marketers create
                SEO-optimized blog posts in minutes.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                  Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
