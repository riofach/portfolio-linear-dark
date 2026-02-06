import { Mail, MapPin, Rocket, Send } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion-wrapper';

export function Contact() {
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
								I'm currently available for new projects. If you have a specific idea in mind or just
								want to chat about tech, feel free to shoot me a message.
							</p>
							<div className="space-y-6">
								<a
									className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
									href="mailto:hello@portfolio.dev"
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
									<span className="text-lg font-medium">Jakarta, Indonesia</span>
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
						<form className="flex flex-col gap-6">
							<div className="grid md:grid-cols-2 gap-6">
								<label className="flex flex-col gap-2">
									<span className="text-sm font-medium text-zinc-400">Name</span>
									<input
										className="w-full rounded-lg bg-background border border-border-dark px-4 py-3 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
										placeholder="John Doe"
										type="text"
									/>
								</label>
								<label className="flex flex-col gap-2">
									<span className="text-sm font-medium text-zinc-400">Email</span>
									<input
										className="w-full rounded-lg bg-background border border-border-dark px-4 py-3 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
										placeholder="john@company.com"
										type="email"
									/>
								</label>
							</div>
							<label className="flex flex-col gap-2">
								<span className="text-sm font-medium text-zinc-400">Subject</span>
								<select className="w-full rounded-lg bg-background border border-border-dark px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
									<option>Project Inquiry</option>
									<option>Job Opportunity</option>
									<option>Mentorship</option>
									<option>Other</option>
								</select>
							</label>
							<label className="flex flex-col gap-2">
								<span className="text-sm font-medium text-zinc-400">Message</span>
								<textarea
									className="w-full resize-none rounded-lg bg-background border border-border-dark px-4 py-3 text-white placeholder-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
									placeholder="Tell me about your project..."
									rows={4}
								></textarea>
							</label>
							<button
								className="mt-2 w-full rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold py-4 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
								type="button"
							>
								Send Message
								<Send className="w-5 h-5" />
							</button>
						</form>
					</div>
				</div>
			</FadeIn>
		</section>
	);
}
