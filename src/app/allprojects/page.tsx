import { ProjectCard } from "@/components/ui/ProjectCard";
import { ChevronDown } from "lucide-react";
import { sanityFetch } from "../../../sanity/lib/fetch";
import { projectsQuery } from "../../../sanity/lib/queries";
import { Project } from "@/types/sanity";

export const metadata = {
  title: "All Projects | Portfolio",
  description: "A complete archive of my work in development, design, and experimentation.",
};

export const revalidate = 60;

export default async function AllProjectsPage() {
  const projects = await sanityFetch<Project[]>({ query: projectsQuery }) || [];

  return (
    <main className="flex-grow min-h-screen relative">
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        {/* Background Elements */}
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  All Projects
                </h1>
                <span className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-gray-400">
                  {projects.length}
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl">
                A complete archive of my work in development, design, and experimentation.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 flex justify-center">
            <button
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-not-allowed opacity-80"
              disabled
            >
              Load More Projects
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
