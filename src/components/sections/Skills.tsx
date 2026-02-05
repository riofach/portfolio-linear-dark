import { skills } from "@/data/skills";
import { SkillCard } from "@/components/ui/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            I leverage a modern stack to build performant, scalable, and accessible web applications. Here are the tools and technologies I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
