"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FADE_UP, STAGGER, VIEWPORT_CONFIG, SPRING_SUBTLE } from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      variants={FADE_UP}
      initial="initial"
      whileInView="animate"
      viewport={VIEWPORT_CONFIG}
      transition={{ ...SPRING_SUBTLE, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      variants={STAGGER}
      initial="initial"
      whileInView="animate"
      viewport={VIEWPORT_CONFIG}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
