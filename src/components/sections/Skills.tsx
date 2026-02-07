"use client";

import { motion } from "motion/react";
import { StaggerContainer } from "@/components/ui/motion-wrapper";
import { FADE_UP } from "@/lib/motion";
import { Skill as SkillType } from "@/types/sanity";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";

interface SkillsProps {
  skills: SkillType[];
}

export function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <section
      className="relative py-24 px-6 lg:px-8 border-b border-white/5 bg-background-dark/50"
      id="skills"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Expertise &amp; Tools
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            My preferred stack for building scalable, high-performance applications.
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill._id}
              variants={FADE_UP}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 cursor-default"
            >
              <div
                className={`h-10 w-10 text-white transition-colors tech-icon-glow relative`}
              >
                {skill.icon ? (
                  <Image 
                    src={urlFor(skill.icon).url()} 
                    alt={skill.name} 
                    fill 
                    className="object-contain"
                  />
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-lg font-bold border rounded-full border-white/20">
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
