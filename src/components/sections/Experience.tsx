import { Terminal, PenTool, Code } from "lucide-react";

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
            {/* Timeline Item 1 */}
            <div className="flex flex-col items-center pt-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-dark border border-border-dark text-primary shadow-[0_0_15px_rgba(91,19,236,0.15)]">
                <Terminal size={24} />
              </div>
              <div className="h-full w-[1px] bg-border-dark my-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent w-full h-1/2"></div>
              </div>
            </div>
            <div className="flex flex-col pb-12 pt-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold text-white">
                  Senior Fullstack Developer
                </h3>
                <span className="text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  2021 - Present
                </span>
              </div>
              <p className="text-zinc-400 text-base mt-2 leading-relaxed">
                TechCorp Inc.
              </p>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
                Leading the frontend migration to React 18 and Next.js.
                Architecting scalable microservices using Node.js and gRPC.
                Mentoring a squad of 5 junior developers and implementing CI/CD
                best practices.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-dark border border-border-dark text-white">
                <PenTool size={24} />
              </div>
              <div className="h-full w-[1px] bg-border-dark my-2"></div>
            </div>
            <div className="flex flex-col pb-12 pt-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold text-white">
                  UI/UX Designer
                </h3>
                <span className="text-sm font-medium text-zinc-400 px-3 py-1 rounded-full bg-card-dark border border-border-dark w-fit">
                  2019 - 2021
                </span>
              </div>
              <p className="text-zinc-400 text-base mt-2 leading-relaxed">
                Creative Studio
              </p>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
                Designed user-centric interfaces for mobile and web
                applications. Conducted user research, wireframing, and
                prototyping in Figma. Collaborated closely with developers to
                ensure design fidelity.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-dark border border-border-dark text-white">
                <Code size={24} />
              </div>
            </div>
            <div className="flex flex-col pb-4 pt-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold text-white">
                  Frontend Developer
                </h3>
                <span className="text-sm font-medium text-zinc-400 px-3 py-1 rounded-full bg-card-dark border border-border-dark w-fit">
                  2017 - 2019
                </span>
              </div>
              <p className="text-zinc-400 text-base mt-2 leading-relaxed">
                StartUp Hub
              </p>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">
                Developed responsive landing pages and dashboards. Optimized
                website performance and improved SEO rankings. Worked with
                Vue.js and classic LAMP stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
