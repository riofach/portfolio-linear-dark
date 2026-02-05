import { skills } from '@/data/skills';

export function Skills() {
	return (
		<section
			className="relative py-24 px-6 lg:px-8 border-b border-white/5 bg-background-dark/50"
			id="skills"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Expertise &amp; Tools
					</h2>
					<p className="mt-4 text-gray-400 max-w-xl">
						My preferred stack for building scalable, high-performance applications.
					</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
						>
							<div
								className={`h-10 w-10 text-white ${skill.hoverColor} transition-colors tech-icon-glow`}
							>
								{skill.svg}
							</div>
							<span className="text-sm font-medium text-gray-300 group-hover:text-white">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
