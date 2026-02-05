import { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1">
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="font-semibold text-white tracking-wide text-lg">{skill.name}</h3>
        <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{skill.category}</span>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
    </div>
  );
}
