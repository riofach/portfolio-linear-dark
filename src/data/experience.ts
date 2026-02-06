export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

export const experience: Experience[] = [
  {
    role: "Senior Fullstack Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description:
      "Leading the frontend migration to React 18 and Next.js. Architecting scalable microservices using Node.js and gRPC. Mentoring a squad of 5 junior developers and implementing CI/CD best practices.",
    icon: "terminal",
  },
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2019 - 2021",
    description:
      "Designed user-centric interfaces for mobile and web applications. Conducted user research, wireframing, and prototyping in Figma. Collaborated closely with developers to ensure design fidelity.",
    icon: "pen-tool",
  },
  {
    role: "Frontend Developer",
    company: "StartUp Hub",
    period: "2017 - 2019",
    description:
      "Developed responsive landing pages and dashboards. Optimized website performance and improved SEO rankings. Worked with Vue.js and classic LAMP stack.",
    icon: "code",
  },
];
