import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-white/5 border-b border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white/50 mb-6 leading-relaxed line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium text-white/60 bg-white/5 rounded-full border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
