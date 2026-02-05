import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-16 text-white tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
