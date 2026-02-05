export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section / Intro */}
      <section className="min-h-screen flex items-center justify-center bg-zinc-950 border-b border-white/5">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Portfolio Linear Dark</h1>
          <p className="text-zinc-400">Scroll down to test navigation</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-zinc-900 border-b border-white/5">
        <h2 className="text-4xl font-bold text-white">About</h2>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center bg-zinc-950 border-b border-white/5">
        <h2 className="text-4xl font-bold text-white">Work</h2>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-zinc-900 border-b border-white/5">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-zinc-950">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
      </section>
    </div>
  );
}
