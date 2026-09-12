import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
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
    { name: "What I Do", href: "#what-i-do" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Terminal Monogram */}
          <a href="#" className="group flex items-center gap-3 text-zinc-100 hover:text-white transition-colors">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-emerald-500/60 transition-all duration-300">
              <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-semibold text-sm tracking-tight flex items-center gap-1.5">
                mahran.dev
                <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-100 px-3 py-1.5 rounded-full transition-colors hover:bg-zinc-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action / Socials */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-zinc-800 pr-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Send Email"
                title={`Send Email to ${portfolioData.personal.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Chat on WhatsApp"
                title={`WhatsApp: ${portfolioData.personal.phone}`}
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Menu"
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
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
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
