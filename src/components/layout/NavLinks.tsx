'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
	{ name: 'Home', href: '/#home' },
	{ name: 'About', href: '/#about' },
	{ name: 'Tools', href: '/#skills' },
	{ name: 'Work', href: '/#work' },
	{ name: 'Contact', href: '/#contact' },
];

export function NavLinks({
	mobile = false,
	onItemClick,
}: {
	mobile?: boolean;
	onItemClick?: () => void;
}) {
	const pathname = usePathname();
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		// Only run observer on home page
		if (pathname !== '/') return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('id');
						if (id) {
							setActiveSection(id);
							// Update URL hash without jumping
							window.history.replaceState(null, '', `#${id}`);
						}
					}
				});
			},
			{
				rootMargin: '-50% 0px -50% 0px', // Middle of screen
			},
		);

		links.forEach((link) => {
			const targetId = link.href.replace('/#', '');
			const element = document.getElementById(targetId);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [pathname]);

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
		if (pathname === '/') {
			e.preventDefault();
			const targetId = href.replace('/#', '');
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
				if (onItemClick) onItemClick();
			}
		}
	};

	return (
		<>
			{links.map((link) => {
				const isActive = activeSection === link.href.replace('/#', '') && pathname === '/';
				
				return (
					<Link
						key={link.name}
						href={link.href}
						onClick={(e) => handleScroll(e, link.href)}
						className={cn(
							'relative text-sm font-medium transition-colors hover:text-white py-1 group',
							mobile ? 'text-lg py-2' : '',
							isActive ? 'text-white' : 'text-zinc-400',
						)}
					>
						{link.name}

						{/* Active State Underline */}
						{!mobile && isActive && (
							<motion.span
								layoutId="activeSection"
								className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_2px_rgba(91,19,236,0.6)]"
								transition={{ type: 'spring', stiffness: 380, damping: 30 }}
							/>
						)}

						{/* Hover State Underline (for non-active items) */}
						{!mobile && !isActive && (
							<span className="absolute bottom-[-1px] left-0 h-[2px] w-full scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
						)}
					</Link>
				);
			})}
		</>
	);
}
