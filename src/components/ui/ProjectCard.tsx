"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionLink
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-colors hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)] h-full"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="relative z-20 -mt-12 p-8 pt-0">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="mt-2 text-gray-400 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
            Case Study
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
