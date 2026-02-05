import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-16 text-white tracking-tight">Experience</h2>

        <div className="relative border-l border-white/20 ml-3 space-y-16">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-12 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black transition-transform duration-300 group-hover:scale-125" />

              <div className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg md:text-xl font-medium text-white">{item.role}</h3>
                  <span className="text-xs md:text-sm font-mono text-white/40 tabular-nums">{item.period}</span>
                </div>
                
                <div className="text-base text-white/70 mb-3">{item.company}</div>
                
                <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
