import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Download, Command } from 'lucide-react';
import { navLinks, CV_URL } from '../data/portfolioData';
import { Button } from './ui';

export default function Navbar({ theme, toggleTheme, onOpenCommandMenu, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    setOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => handleLink(e, '#top')}
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-fg"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-fg font-mono text-xs font-bold text-bg">MH</span>
          <span>Mahran Hadj Salah</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLink(e, l.href)}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          {onOpenCommandMenu && (
            <button
              type="button"
              onClick={onOpenCommandMenu}
              className="hidden h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-muted transition-colors hover:text-fg lg:inline-flex"
              aria-label="Open command menu"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="font-mono">Ctrl K</span>
            </button>
          )}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button href={CV_URL} download size="sm" className="hidden sm:inline-flex">
            <Download className="h-3.5 w-3.5" />
            Download CV
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col gap-1 pb-4 md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLink(e, l.href)}
              className="rounded-lg px-3 py-2.5 text-base text-muted hover:bg-surface-2 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <Button href={CV_URL} download className="mt-2 sm:hidden">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </nav>
      )}
    </header>
  );
}
