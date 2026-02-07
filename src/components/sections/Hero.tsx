'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FADE_UP, STAGGER, SPRING_SUBTLE } from '@/lib/motion';
import { LocalizedText } from '@/types/sanity';

interface HeroProps {
	heroText?: LocalizedText;
}

export function Hero({ heroText }: HeroProps) {
	const title = heroText?.en || "Building digital experiences that matter.";
	
	// Split title for formatting if needed, or just render it. 
	// The original had a split with <span>.
	// We'll render it simply for now or try to preserve the split if the CMS data supports it.
	// Since CMS is just text, we might lose the specific "gray" styling on the second line unless we parse it.
	// For now, let's just render the text.
	
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
			<div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>

			{/* Hero Content */}
			<motion.div
				className="relative z-10 mx-auto max-w-5xl px-6 text-center"
				variants={STAGGER}
				initial="initial"
				animate="animate"
			>
				{/* Availability Badge */}
				<motion.div
					variants={FADE_UP}
					className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
				>
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
					</span>
					Available for new projects
				</motion.div>

				<motion.h1
					variants={FADE_UP}
					className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl text-balance drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
				>
					{title}
				</motion.h1>

				<motion.p
					variants={FADE_UP}
					className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed text-balance"
				>
					Fullstack Developer & UI/UX Designer crafting beautiful, functional web applications with
					a focus on user experience and clean, maintainable code.
				</motion.p>

				<motion.div
					variants={FADE_UP}
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
				>
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
				</motion.div>
			</motion.div>
		</section>
	);
}
