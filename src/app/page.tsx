import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { sanityFetch } from "../../sanity/lib/fetch";
import { settingsQuery, projectsQuery, experiencesQuery, skillsQuery } from "../../sanity/lib/queries";
import { Settings, Project, Experience as ExperienceType, Skill } from "@/types/sanity";

export const revalidate = 60;

export default async function Home() {
  const settings = await sanityFetch<Settings>({ query: settingsQuery });
  const projects = await sanityFetch<Project[]>({ query: projectsQuery });
  const experiences = await sanityFetch<ExperienceType[]>({ query: experiencesQuery });
  const skills = await sanityFetch<Skill[]>({ query: skillsQuery });

  return (
    <div className="flex flex-col w-full">
      <Hero heroText={settings?.heroText} />
      <About />
      <Skills skills={skills || []} />
      <Projects projects={projects || []} />
      <Experience experiences={experiences || []} />
      <Contact />
    </div>
  );
}
