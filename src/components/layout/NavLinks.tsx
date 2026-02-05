"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function NavLinks({ mobile = false, onItemClick }: { mobile?: boolean; onItemClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) {
              setActiveSection(id)
              // Update URL hash without jumping
              window.history.replaceState(null, "", `#${id}`)
            }
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Middle of screen
      }
    )

    links.forEach((link) => {
      const element = document.getElementById(link.href.substring(1))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (onItemClick) onItemClick()
    }
  }

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className={cn(
            "relative text-sm font-medium transition-colors hover:text-white",
            mobile ? "text-lg py-2" : "",
            activeSection === link.href.substring(1) ? "text-white" : "text-zinc-400"
          )}
        >
          {link.name}
          {!mobile && activeSection === link.href.substring(1) && (
            <motion.span
              layoutId="activeSection"
              className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-white"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </>
  )
}
