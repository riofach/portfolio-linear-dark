import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a keen eye for detail and a love for building seamless digital experiences. With a background in modern web technologies, I bridge the gap between design and engineering.
              </p>
              <p>
                My approach combines technical depth with design sensibility, ensuring that every product I build is not only performant and scalable but also intuitive and visually engaging.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or refining my craft in digital design.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src="/foto.png"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
