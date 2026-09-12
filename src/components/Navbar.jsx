import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenCommandMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
        ? 'bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-xs' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      {/* Sleek Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F766E] origin-left pointer-events-none"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="group flex items-center gap-2.5 text-[#0F172A] hover:text-[#0F766E] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center group-hover:border-[#0F766E]/60 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5 text-[#0F766E] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-1.5 font-mono font-bold text-sm tracking-tight">
              <span>mahran.dev</span>
              <span className="w-1.5 h-3 bg-[#0F766E] animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-[#E2E8F0] px-3 py-1.5 rounded-full shadow-xs backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-[#475569] hover:text-[#0F172A] px-3 py-1 rounded-full transition-colors hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions & Socials */}
          <div className="hidden md:flex items-center gap-2.5">

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-r border-[#E2E8F0] pr-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:border-slate-300 transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:border-slate-300 transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F766E] hover:border-[#0F766E]/40 transition-colors shadow-xs"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Real Resume / CV Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-[#0F172A] border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Resume / CV</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center text-xs font-mono font-semibold px-4 py-1.5 rounded-md bg-[#0F766E] text-white hover:bg-[#115E59] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono px-2.5 py-1 rounded bg-white text-[#0F172A] border border-[#E2E8F0] flex items-center gap-1 shadow-xs"
            >
              <FileText className="w-3 h-3 text-[#0F766E]" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 py-5 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-[#0F172A] hover:text-[#0F766E] py-2 border-b border-[#E2E8F0]"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-4 mt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#475569] hover:text-[#0F766E]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#475569] hover:text-[#0F766E]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#475569] hover:text-[#0F766E]"
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
