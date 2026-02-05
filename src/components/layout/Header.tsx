"use client"

import { useState } from "react"
import { Terminal, Download } from "lucide-react"
import { NavLinks } from "./NavLinks"
import { MobileMenu } from "./MobileMenu"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/5 glass-nav"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">John Doe</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20">
            <Download className="h-[18px] w-[18px]" />
            Resume
          </button>
          
          {/* Mobile Menu Trigger */}
          <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-primary origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
    </motion.header>
  )
}
