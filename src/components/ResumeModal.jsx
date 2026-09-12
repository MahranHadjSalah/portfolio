import React, { useEffect } from 'react';
import { X, Printer, MapPin } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl text-[#0F172A] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span className="text-xs font-mono text-[#475569]">Curriculum Vitae · Mahran Hadj Salah</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-mono border border-[#E2E8F0] shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-50 border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] shadow-2xs transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-[#0F172A] print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#E2E8F0] pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm font-mono text-[#0F766E] font-semibold">
              {portfolioData.personal.mainTitle}
            </p>
            <p className="text-xs italic text-[#475569] font-sans">
              "{portfolioData.personal.builderCredo.statement}"
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#475569] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                {portfolioData.personal.location}
              </span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-[#0F766E]">
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#0F766E]">
                {portfolioData.personal.phone}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-[#0F766E]">
                github.com/MahranHadjSalah
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#0F766E] uppercase tracking-wider font-bold">
              Education & Engineering Formation
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">National Engineering Diploma in Software Engineering</h3>
                  <p className="text-xs font-mono text-[#475569]">ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax</p>
                </div>
                <span className="text-xs font-mono text-[#475569]">2025 — Present</span>
              </div>
              <p className="text-xs text-[#475569]">
                Core focus: Distributed Software Architecture, Advanced Algorithms, Relational & Vector Databases, Operating Systems.
              </p>
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#0F766E] uppercase tracking-wider font-bold">
              Major Software Products
            </h2>

            {portfolioData.featuredProjects.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#0F172A] font-mono">
                    {proj.title} <span className="font-normal text-[#0F766E]">({proj.role})</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#475569]">{proj.techStack.slice(0, 4).join(" · ")}</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {proj.summary}
                </p>
                <ul className="list-disc list-inside text-xs text-[#475569] space-y-0.5">
                  {proj.whatIBuilt.slice(0, 3).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#0F766E] uppercase tracking-wider font-bold">
              Production Stack & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-[#475569] block font-semibold">AI & Intelligence:</span>
                <span className="text-[#0F172A]">Python, LangGraph, LangChain, RAG, GraphRAG, pgvector</span>
              </div>
              <div>
                <span className="text-[#475569] block font-semibold">Backend & Architecture:</span>
                <span className="text-[#0F172A]">FastAPI, Node.js, Express, REST APIs, Webhooks, Redis</span>
              </div>
              <div>
                <span className="text-[#475569] block font-semibold">Frontend:</span>
                <span className="text-[#0F172A]">React, Vite, Tailwind CSS, JavaScript (ESNext)</span>
              </div>
              <div>
                <span className="text-[#475569] block font-semibold">Data & DevOps:</span>
                <span className="text-[#0F172A]">PostgreSQL, Docker, Git / GitHub, Linux</span>
              </div>
            </div>
          </div>

          {/* Availability & Objective */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#475569]">
            <span>Objective: Seeking Software Engineering & AI Internships</span>
            <span className="text-[#0F766E] font-semibold">Sfax, Tunisia (Remote Worldwide / Hybrid)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
