import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight, FileText, Mail, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenCommandMenu, theme = 'dark', toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768
    );
  });

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        ? 'bg-[#0B1120]/85 backdrop-blur-md border-b border-[#263244] py-3 shadow-md' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      {/* Sleek Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B82F6] shadow-[0_0_8px_#38BDF8] origin-left pointer-events-none"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="group flex items-center gap-2.5 text-[#F8FAFC] hover:text-[#38BDF8] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#172033] border border-[#263244] shadow-xs flex items-center justify-center group-hover:border-[#3B82F6]/60 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-1.5 font-mono font-bold text-sm tracking-tight">
              <span>mahran.dev</span>
              <span className="w-1.5 h-3 bg-[#38BDF8] animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#172033]/90 border border-[#263244] px-3 py-1.5 rounded-full shadow-xs backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] px-3 py-1 rounded-full transition-colors hover:bg-[#1E293B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions & Socials */}
          <div className="hidden md:flex items-center gap-2.5">

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-r border-[#263244] pr-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors shadow-xs"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#3B82F6]/50 transition-colors shadow-xs"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={
                  isMobile
                    ? `mailto:${portfolioData.personal.email}`
                    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        portfolioData.personal.email
                      )}`
                }
                target={isMobile ? undefined : "_blank"}
                rel={isMobile ? undefined : "noreferrer"}
                className="w-8 h-8 rounded-md bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#3B82F6]/50 transition-colors shadow-xs"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Modern Theme Switcher (Dark / Light) */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-md bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#3B82F6]/50 transition-colors shadow-xs group"
                aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>
            )}

            {/* Real Resume / CV Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-[#172033] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
            >
              <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Resume / CV</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center text-xs font-mono font-semibold px-4 py-1.5 rounded-md bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] shadow-sm"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-lg bg-[#172033] border border-[#263244] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] shadow-xs"
                aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-blue-600" />
                )}
              </button>
            )}
            <button
              onClick={onOpenResume}
              className="text-xs font-mono px-2.5 py-1 rounded bg-[#172033] text-[#F8FAFC] border border-[#263244] flex items-center gap-1 shadow-xs"
            >
              <FileText className="w-3 h-3 text-[#38BDF8]" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#172033] border border-[#263244] text-[#F8FAFC] hover:bg-[#1E293B] shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#172033] border-b border-[#263244] px-4 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-[#F8FAFC] hover:text-[#38BDF8] py-2 border-b border-[#263244]"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Theme Toggle Row */}
            {toggleTheme && (
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="w-full flex items-center justify-between py-2 text-sm font-mono text-[#F8FAFC] hover:text-[#38BDF8] border-b border-[#263244] transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-600" />
                  )}
                  <span>Appearance</span>
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#111827] text-[#38BDF8] border border-[#263244] font-semibold">
                  {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </span>
              </button>
            )}

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-4 mt-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8]"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
