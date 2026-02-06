import { Terminal, PenTool, Code, LucideIcon } from "lucide-react";
import { experience } from "@/data/experience";

const iconMap: Record<string, LucideIcon> = {
  terminal: Terminal,
  "pen-tool": PenTool,
  code: Code,
};

export function Experience() {
  return (
    <section className="py-24 px-6 lg:px-8" id="experience">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience
            </h2>
            <p className="text-zinc-400 text-lg">
              My professional journey and milestones.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-[48px_1fr] gap-x-4 md:gap-x-8">
            {experience.map((item, index) => {
              const Icon = iconMap[item.icon] || Code;
              const isLast = index === experience.length - 1;
              const isFirst = index === 0;

              return (
                <div key={index} className="contents">
                  {/* Icon Column */}
                  <div className={`flex flex-col items-center ${isFirst ? "pt-2" : ""}`}>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-card-dark border border-border-dark ${
                        isFirst
                          ? "text-primary shadow-[0_0_15px_rgba(91,19,236,0.15)]"
                          : "text-white"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    {!isLast && (
                      <div className="h-full w-[1px] bg-border-dark my-2 relative overflow-hidden">
                        {isFirst && (
                          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent w-full h-1/2"></div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className={`flex flex-col ${isLast ? "pb-4" : "pb-12"} pt-1`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full border w-fit ${
                          isFirst
                            ? "text-primary bg-primary/10 border-primary/20"
                            : "text-zinc-400 bg-card-dark border-border-dark"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-base mt-2 leading-relaxed">
                      {item.company}
                    </p>
                    <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
