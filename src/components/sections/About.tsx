import Image from 'next/image';
import { MapPin, Languages, GraduationCap } from 'lucide-react';

export function About() {
	return (
		<section
			id="about"
			className="py-24 px-6 lg:px-8 border-b border-white/5 relative overflow-hidden"
		>
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
					{/* Text Content */}
					<div className="order-2 lg:order-1">
						<div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
							About Me
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
							Crafting interfaces with <span className="text-primary">precision</span> and{' '}
							<span className="text-primary">passion</span>.
						</h2>
						<div className="space-y-6 text-lg text-gray-400 leading-relaxed">
							<p>
								I&apos;m a multidisciplinary developer and designer with over 5 years of experience
								in shipping digital products. My journey began with a curiosity for how things work
								on the web, which quickly evolved into a career obsession with creating
								pixel-perfect user experiences.
							</p>
							<p>
								I specialize in bridging the gap between design and engineering. Whether it&apos;s
								architecting a scalable backend or fine-tuning interaction animations, I bring a
								holistic approach to every project. I believe the best products are built when form
								and function work in perfect harmony.
							</p>
							<p>
								When I&apos;m not coding, you can find me exploring new coffee shops, contributing
								to open-source, or hiking the nearest trails.
							</p>
						</div>

						<div className="mt-8 flex flex-wrap gap-4">
							<div className="flex items-center gap-2 text-sm text-gray-300">
								<MapPin className="h-4 w-4 text-primary" />
								Jakarta, Indonesia
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-300">
								<Languages className="h-4 w-4 text-primary" />
								Indonesia, English
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-300">
								<GraduationCap className="h-4 w-4 text-primary" />
								S.T. Informatics
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
						<div className="relative group max-w-md w-full">
							<div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-800 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
							<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#16181D] shadow-2xl">
								<Image
									src="/foto.png"
									alt="John Doe Profile Portrait"
									fill
									className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
