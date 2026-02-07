"use client";

import { Terminal, PenTool, Code, LucideIcon, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FADE_UP, STAGGER, VIEWPORT_CONFIG, SPRING_SUBTLE } from "@/lib/motion";
import { Experience as ExperienceType } from "@/types/sanity";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const iconMap: Record<string, LucideIcon> = {
  terminal: Terminal,
  "pen-tool": PenTool,
  code: Code,
};

export function Experience({ experiences }: ExperienceProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date);
  };

  return (
    <section className="py-24 px-6 lg:px-8" id="experience">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience
            </h2>
            <p className="text-zinc-400 text-lg">
              My professional journey and milestones.
            </p>
          </div>

          <motion.div 
            className="mt-8 grid grid-cols-[48px_1fr] gap-x-4 md:gap-x-8"
            variants={STAGGER}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
          >
            {experiences?.map((item, index) => {
              const isLast = index === experiences.length - 1;
              const isFirst = index === 0;
              
              const startDate = formatDate(item.startDate);
              const endDate = item.current ? "Present" : formatDate(item.endDate);
              const period = `${startDate} - ${endDate}`;

              return (
                <div key={item._id} className="contents">
                  {/* Icon Column */}
                  <motion.div 
                    className={`flex flex-col items-center ${isFirst ? "pt-2" : ""}`}
                    variants={FADE_UP}
                    transition={SPRING_SUBTLE}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-card-dark border border-border-dark overflow-hidden relative ${
                        isFirst
                          ? "text-primary shadow-[0_0_15px_rgba(91,19,236,0.15)]"
                          : "text-white"
                      }`}
                    >
                      {item.logo ? (
                        <div className="relative w-full h-full">
                           <Image 
                             src={urlFor(item.logo).url()} 
                             alt={item.company} 
                             fill 
                             className="object-cover"
                           />
                        </div>
                      ) : (
                        <Briefcase size={24} />
                      )}
                    </div>
                    {!isLast && (
                      <div className="h-full w-[1px] bg-border-dark my-2 relative overflow-hidden">
                        {isFirst && (
                          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent w-full h-1/2"></div>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    className={`flex flex-col ${isLast ? "pb-4" : "pb-12"} pt-1`}
                    variants={FADE_UP}
                    transition={SPRING_SUBTLE}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full border w-fit ${
                          isFirst
                            ? "text-primary bg-primary/10 border-primary/20"
                            : "text-zinc-400 bg-card-dark border-border-dark"
                        }`}
                      >
                        {period}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-base mt-2 leading-relaxed">
                      {item.company}
                    </p>
                    {item.description && (
                      <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
