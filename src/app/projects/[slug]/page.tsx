import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { projectQuery, projectsQuery } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/image";
import { Project } from "@/types/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await sanityFetch<Project[]>({ query: projectsQuery });
  
  if (!projects) return [];
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await sanityFetch<Project>({ query: projectQuery, params: { slug } });

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await sanityFetch<Project>({ query: projectQuery, params: { slug } });

  if (!project) {
    notFound();
  }

  const imageUrl = project.thumbnail 
    ? urlFor(project.thumbnail).width(1200).height(675).url() 
    : "/placeholder.png";

  return (
    <main className="flex-grow min-h-screen relative pt-24 pb-16 px-6 lg:px-8">
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl relative z-10">
        <Link 
          href="/allprojects" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag) => (
              <span 
                key={tag} 
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            {project.title}
          </h1>
          
          <div className="flex gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>

        {project.thumbnail && (
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-card-dark relative mb-10">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="whitespace-pre-wrap">{project.description}</p>
        </div>
      </div>
    </main>
  );
}
