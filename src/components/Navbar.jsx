import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Mail, FileText, Search } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenCommandMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#engineering" },
    { name: "Process", href: "#process" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-750 flex items-center justify-center group-hover:border-emerald-500/60 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-1.5 font-mono font-bold text-sm tracking-tight">
              <span>mahran.dev</span>
              <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-100 px-3 py-1 rounded-full transition-colors hover:bg-zinc-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions & Socials */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Quick Cmd+K Button */}
            <button
              onClick={onOpenCommandMenu}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-900/80 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
              title="Quick Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="text-[10px] bg-zinc-800 px-1 rounded text-zinc-500">⌘K</kbd>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-r border-zinc-800 pr-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Real Resume / CV Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-750 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume / CV</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-md bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 shadow-sm shadow-emerald-500/20 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-emerald-400" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-zinc-800 px-4 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/40"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-4 mt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
