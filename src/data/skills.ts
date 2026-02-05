export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  iconName?: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Git", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];
