'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Rocket, Send, Loader2, Check } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion-wrapper';

const formSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }),
	subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
	message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
	const [isSuccess, setIsSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: 'Project Inquiry',
			message: '',
		},
	});

	const onSubmit = async (data: FormData) => {
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log('Form Data:', data);
		setIsSuccess(true);
		reset();

		// Reset success message after 3 seconds
		setTimeout(() => setIsSuccess(false), 3000);
	};

	return (
		<section id="contact" className="w-full max-w-7xl px-6 lg:px-8 py-20 mx-auto">
			<FadeIn>
				<div className="grid md:grid-cols-2 gap-12 md:gap-24">
					<div className="flex flex-col justify-between">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
								Let's work together
							</h2>
							<p className="text-zinc-400 text-lg leading-relaxed mb-8">
								I'm currently available for new projects. If you have a specific idea in mind or
								just want to chat about tech, feel free to shoot me a message.
							</p>
							<div className="space-y-6">
								<a
									className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
									href="mailto:hello@rioraditya.my.id"
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card-dark border border-border-dark group-hover:border-primary/50 transition-colors">
										<Mail className="w-6 h-6" />
									</div>
									<span className="text-lg font-medium">hello@rioraditya.my.id</span>
								</a>
								<div className="flex items-center gap-4 text-white">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card-dark border border-border-dark">
										<MapPin className="w-6 h-6" />
									</div>
									<span className="text-lg font-medium">Tangerang, Indonesia</span>
								</div>
							</div>
						</div>
						<div className="hidden md:block mt-12 p-6 rounded-xl bg-card-dark border border-border-dark relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
								<Rocket className="w-16 h-16 rotate-12 text-white" />
							</div>
							<p className="text-sm font-medium text-primary mb-1">Status</p>
							<div className="flex items-center gap-2">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
								</span>
								<span className="text-white font-medium">Open to offers</span>
							</div>
						</div>
					</div>
					{/* Contact Form */}
					<div className="bg-card-dark/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border-dark shadow-xl">
						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
							<div className="grid md:grid-cols-2 gap-6">
								<label className="flex flex-col gap-2">
									<span className="text-sm font-medium text-zinc-400">Name</span>
									<input
										{...register('name')}
										className={`w-full rounded-lg bg-background border px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
											errors.name
												? 'border-red-500 focus:border-red-500 focus:ring-red-500'
												: 'border-border-dark focus:border-primary focus:ring-primary'
										}`}
										placeholder="John Doe"
										type="text"
										disabled={isSubmitting}
									/>
									{errors.name && (
										<span className="text-xs text-red-500">{errors.name.message}</span>
									)}
								</label>
								<label className="flex flex-col gap-2">
									<span className="text-sm font-medium text-zinc-400">Email</span>
									<input
										{...register('email')}
										className={`w-full rounded-lg bg-background border px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
											errors.email
												? 'border-red-500 focus:border-red-500 focus:ring-red-500'
												: 'border-border-dark focus:border-primary focus:ring-primary'
										}`}
										placeholder="john@company.com"
										type="email"
										disabled={isSubmitting}
									/>
									{errors.email && (
										<span className="text-xs text-red-500">{errors.email.message}</span>
									)}
								</label>
							</div>
							<label className="flex flex-col gap-2">
								<span className="text-sm font-medium text-zinc-400">Subject</span>
								<select
									{...register('subject')}
									className={`w-full rounded-lg bg-background border px-4 py-3 text-white focus:outline-none focus:ring-1 transition-all appearance-none cursor-pointer ${
										errors.subject
											? 'border-red-500 focus:border-red-500 focus:ring-red-500'
											: 'border-border-dark focus:border-primary focus:ring-primary'
									}`}
									disabled={isSubmitting}
								>
									<option value="Project Inquiry">Project Inquiry</option>
									<option value="Job Opportunity">Job Opportunity</option>
									<option value="Mentorship">Mentorship</option>
									<option value="Other">Other</option>
								</select>
								{errors.subject && (
									<span className="text-xs text-red-500">{errors.subject.message}</span>
								)}
							</label>
							<label className="flex flex-col gap-2">
								<span className="text-sm font-medium text-zinc-400">Message</span>
								<textarea
									{...register('message')}
									className={`w-full resize-none rounded-lg bg-background border px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
										errors.message
											? 'border-red-500 focus:border-red-500 focus:ring-red-500'
											: 'border-border-dark focus:border-primary focus:ring-primary'
									}`}
									placeholder="Tell me about your project..."
									rows={4}
									disabled={isSubmitting}
								></textarea>
								{errors.message && (
									<span className="text-xs text-red-500">{errors.message.message}</span>
								)}
							</label>
							<button
								className="mt-2 w-full rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold py-4 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
								type="submit"
								disabled={isSubmitting || isSuccess}
							>
								<AnimatePresence mode="wait">
									{isSubmitting ? (
										<motion.div
											key="loading"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.8 }}
											transition={{ duration: 0.2 }}
											className="flex items-center gap-2"
										>
											<Loader2 className="w-5 h-5 animate-spin" />
											<span>Sending...</span>
										</motion.div>
									) : isSuccess ? (
										<motion.div
											key="success"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.8 }}
											transition={{ duration: 0.2 }}
											className="flex items-center gap-2"
										>
											<Check className="w-5 h-5" />
											<span>Message Sent!</span>
										</motion.div>
									) : (
										<motion.div
											key="idle"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.8 }}
											transition={{ duration: 0.2 }}
											className="flex items-center gap-2"
										>
											<span>Send Message</span>
											<Send className="w-5 h-5" />
										</motion.div>
									)}
								</AnimatePresence>
							</button>
						</form>
					</div>
				</div>
			</FadeIn>
		</section>
	);
}
