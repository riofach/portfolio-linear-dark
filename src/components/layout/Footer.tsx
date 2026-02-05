import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-zinc-400">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
