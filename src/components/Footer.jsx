import React from 'react';
import { personal } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name} · {personal.location}
        </p>
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-fg">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-fg">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
