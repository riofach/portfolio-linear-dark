export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repoUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Linear",
    description: "A high-performance personal portfolio website with Linear-inspired design, built with Next.js 16 and Tailwind CSS v4.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://portfolio.example.com",
    repoUrl: "https://github.com/example/portfolio",
    image: "/window.svg",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms featuring data visualization and inventory management.",
    tags: ["React", "D3.js", "Node.js", "Supabase"],
    link: "https://dashboard.example.com",
    image: "/globe.svg",
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat interface for LLMs with streaming responses, code syntax highlighting, and history management.",
    tags: ["TypeScript", "OpenAI API", "Zustand", "Vite"],
    link: "https://chat.example.com",
    image: "/window.svg",
  },
];
