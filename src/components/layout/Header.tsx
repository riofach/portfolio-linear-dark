"use client"

import { motion, useScroll, useMotionValueEvent, useSpring } from "motion/react"

export function Header() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative z-10">
        {/* Nav items */}
      </nav>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-500 origin-left"
        style={{ scaleX }}
      />
    </header>
  )
}
