import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0e14] border border-zinc-800 shadow-2xl text-zinc-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0e14]/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-zinc-400">Curriculum Vitae · Mahran Hadj Salah</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-zinc-950 text-zinc-300 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm font-mono text-emerald-400 font-medium">
              Software Engineering Student · AI & Full-Stack Developer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {portfolioData.personal.location}
              </span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-emerald-400">
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                {portfolioData.personal.phone}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                github.com/MahranHadjSalah
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
              Education
            </h2>
            <div className="space-y-1.5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">National Engineering Diploma in Software Engineering</h3>
                  <p className="text-xs font-mono text-zinc-400">ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">2024 — Present</span>
              </div>
              <p className="text-xs text-zinc-400">
                Focus: Software Architecture, Advanced Algorithms, Database Systems, Distributed Computing.
              </p>
            </div>
          </div>

          {/* Featured Software Products */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
              Key Engineering Projects
            </h2>

            {portfolioData.featuredProjects.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-mono">{proj.title} <span className="font-normal text-zinc-400">— {proj.category}</span></h3>
                  <span className="text-[11px] font-mono text-zinc-500">{proj.techStack.slice(0, 4).join(" · ")}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {proj.summary}
                </p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-0.5">
                  {proj.architectureHighlights.slice(0, 2).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">AI & Intelligence:</span>
                <span className="text-zinc-300">LangGraph, LangChain, RAG, GraphRAG, LLMs, Embeddings</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Backend:</span>
                <span className="text-zinc-300">FastAPI, Node.js, Express, PostgreSQL, Redis, REST APIs</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Frontend:</span>
                <span className="text-zinc-300">React, Vite, Tailwind CSS, JavaScript (ESNext)</span>
              </div>
              <div>
                <span className="text-zinc-500 block">DevOps & Cloud:</span>
                <span className="text-zinc-300">Docker, Git / GitHub, Linux</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Availability: Open for Internships & Projects</span>
            <span className="text-emerald-400">Sfax, Tunisia (Remote / Hybrid)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
