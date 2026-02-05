"use client"

import { motion, useScroll, useMotionValueEvent, useSpring } from "motion/react"
import { useState } from "react"

import { NavLinks } from "./NavLinks"

export function Header() {
  const { scrollYProgress, scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
      setMobileMenuOpen(false) // Close mobile menu on scroll down
    } else {
      setHidden(false)
    }
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-white text-lg tracking-tight">
          Portfolio
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 relative z-10">
          <NavLinks />
        </nav>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-500 origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  )
}
