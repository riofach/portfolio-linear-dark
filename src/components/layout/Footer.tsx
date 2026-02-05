import Link from 'next/link';
import { Code, AtSign, Link as LinkIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card-dark border-t border-border-dark py-12">
      <div className="max-w-[960px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white tracking-tight">Portfolio.dev</span>
            <p className="text-zinc-400 text-sm">Building digital experiences that matter.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code className="w-6 h-6" />
            </Link>
            <Link
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              href="mailto:hello@portfolio.dev"
              aria-label="Email"
            >
              <AtSign className="w-6 h-6" />
            </Link>
            <Link
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              href="#"
              aria-label="Social Link"
            >
              <LinkIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8"
        >
          <p className="text-sm text-zinc-400">© {currentYear} Portfolio.dev. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
