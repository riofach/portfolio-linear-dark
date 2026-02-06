import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background pt-16 pb-16 md:pt-40 md:pb-10"
		>
			{/* Noise Texture */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

			{/* 3D Grid Background (Kept from Phase 2 but aligned colors) */}
			<div className="absolute inset-0 perspective-[1000px] overflow-hidden pointer-events-none">
				<div
					className="absolute inset-0 origin-top rotate-x-[60deg] opacity-20"
					style={{
						backgroundImage:
							'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-1/3" />
				<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
			</div>

			{/* Central Glow Orb */}
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>

			{/* Hero Content */}
			<div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
				{/* Availability Badge */}
				<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
					</span>
					Available for new projects
				</div>

				<h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl text-balance drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
					Building digital <br />
					<span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
						experiences that matter.
					</span>
				</h1>

				<p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed text-balance">
					Fullstack Developer & UI/UX Designer crafting beautiful, functional web applications with
					a focus on user experience and clean, maintainable code.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link
						href="#work"
						className="group flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(91,19,236,0.5)]"
					>
						View My Work
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
					<Link
						href="#contact"
						className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
					>
						Contact Me
					</Link>
				</div>
			</div>
		</section>
	);
}
