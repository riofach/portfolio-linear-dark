export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A description of project one.",
    techStack: ["Next.js", "Tailwind"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/repo",
    image: "/projects/one.png",
  },
];
