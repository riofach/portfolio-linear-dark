import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { sanityFetch } from "../../sanity/lib/fetch";
import { settingsQuery, projectsQuery } from "../../sanity/lib/queries";
import { Settings, Project } from "@/types/sanity";

export const revalidate = 60;

export default async function Home() {
  const settings = await sanityFetch<Settings>({ query: settingsQuery });
  const projects = await sanityFetch<Project[]>({ query: projectsQuery });

  return (
    <div className="flex flex-col w-full">
      <Hero heroText={settings?.heroText} />
      <About />
      <Skills />
      <Projects projects={projects || []} />
      <Experience />
      <Contact />
    </div>
  );
}
