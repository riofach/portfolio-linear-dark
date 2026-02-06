import { projects } from "@/data/projects";

export const metadata = {
  title: "All Projects | Portfolio",
  description: "A complete archive of my work in development, design, and experimentation.",
};

export default function AllProjectsPage() {
  return (
    <main className="flex-grow min-h-screen relative">
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        {/* Background Elements */}
        <div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  All Projects
                </h1>
                <span className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-gray-400">
                  {projects.length}
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl">
                A complete archive of my work in development, design, and experimentation.
              </p>
            </div>
            {/* Filters removed as per plan */}
          </div>

          {/* Projects Grid Placeholder */}
          <div className="min-h-[200px] border border-dashed border-white/10 rounded-lg flex items-center justify-center text-gray-500">
            Projects Grid Loading...
          </div>
        </div>
      </section>
    </main>
  );
}
