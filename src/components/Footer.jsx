import React from 'react';
import { ArrowUp, Terminal, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#050608] border-t border-zinc-900 text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-zinc-900">
          
          {/* Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-wider text-sm">MAHRAN.DEV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-zinc-400">
              Software Engineering Student · ISIMS (Université de Sfax)
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
              <MapPin className="w-3 h-3 text-zinc-500" />
              <span>Sfax, Tunisia · Open to Remote (Worldwide) & Hybrid</span>
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            &copy; {new Date().getFullYear()} Mahran Hadj Salah. All rights reserved.
          </div>
          <div>
            Engineered with React 18, Vite, & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
}
