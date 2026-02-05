export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading the frontend architecture migration to Next.js. Improved core web vitals by 40% and established a comprehensive design system.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Agency",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
  },
  {
    role: "Junior Web Developer",
    company: "Creative Web Studio",
    period: "2019 - 2021",
    description: "Collaborated with designers to translate Figma mockups into responsive web interfaces. specialized in creating interactive animations.",
  },
];
