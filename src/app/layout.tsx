import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://rioraditya.click'),
	title: 'Fachrio Raditya (Rio) - Fullstack Developer & UI/UX Designer',
	description:
		'Fullstack Developer & UI/UX Designer crafting beautiful, functional web applications with a focus on user experience and clean, maintainable code.',
	keywords: [
		'Fachrio Raditya',
		'Rio Raditya',
		'Fullstack Developer',
		'Frontend Engineer',
		'Portfolio',
	],
	alternates: {
		canonical: 'https://rioraditya.click',
	},
	openGraph: {
		title: 'Rio Raditya - Portfolio',
		description: 'Building digital experiences that matter. Explore my projects and skills.',
		url: 'https://rioraditya.click',
		siteName: 'Rio Raditya Portfolio',
		images: [
			{
				url: '/og-image.png', // We don't have this file but standard practice to link it
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rio Raditya - Portfolio',
		description: 'Fullstack Developer & UI/UX Designer crafting beautiful web experiences.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Fachrio Raditya',
		alternateName: 'Rio Raditya',
		url: 'https://rioraditya.click',
		sameAs: [
			'https://github.com/riofach',
			'https://linkedin.com/in/fachrio-raditya-0bab75285',
			'https://instagram.com/rrdtyaa_',
			'https://dribbble.com/FRaditya',
		],
		jobTitle: 'Fullstack Developer',
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-white/20`}
				suppressHydrationWarning
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
