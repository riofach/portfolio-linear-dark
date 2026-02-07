"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { StaggerContainer } from "@/components/ui/motion-wrapper";
import { FADE_UP } from "@/lib/motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/types/sanity";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
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
          <Link
            className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-white transition-colors"
            href="/allprojects"
          >
            View all projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project._id} variants={FADE_UP}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
