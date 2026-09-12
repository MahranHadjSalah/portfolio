import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Lightbulb, AlertCircle } from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';

export default function CaseStudyModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl text-[#0F172A] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-medium">
              {project.category}
            </span>
            <h2 className="text-xl font-bold text-[#0F172A] font-mono">{project.title} — Case Study</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-50 border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 transition-colors shadow-2xs"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          
          {/* Headline & Overview */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-[#0F766E] font-mono">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-50/50 border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-red-700 font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#E6FFFA]/50 border border-[#0F766E]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                The Solution
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Role */}
          <div className="p-5 rounded-xl bg-slate-50 border border-[#E2E8F0] space-y-2">
            <h3 className="text-xs font-mono text-[#0F766E] uppercase tracking-wider font-bold">
              My Engineering Role:
            </h3>
            <p className="text-sm text-[#0F172A] leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Architectural Implementation */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-[#0F172A] uppercase tracking-wider font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0F766E]" />
              System Architecture & Implementation
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-[#0F766E] mt-0.5">0{idx + 1}</span>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{arch}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decisions & Trade-Offs */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-[#0F172A] uppercase tracking-wider font-bold flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Technical Decisions & Trade-Offs
            </h3>
            <div className="space-y-3">
              {project.technicalDecisions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-mono font-bold text-[#0F172A]">
                    {item.decision}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Results */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-[#0F172A] uppercase tracking-wider font-bold">
              Verified Engineering Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.engineeringFacts.map((fact, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-center gap-2.5 text-xs font-mono text-[#0F172A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-5 rounded-xl bg-slate-50 border border-[#E2E8F0] space-y-2">
            <h3 className="text-xs font-mono text-[#475569] uppercase tracking-wider font-bold">
              Key Takeaway & What I Learned:
            </h3>
            <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
              {project.whatILearned}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F766E] hover:bg-[#115E59] text-white font-bold text-xs font-mono shadow-sm shadow-[#0F766E]/20 transition-colors"
              >
                <span>Request Live Demo</span>
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] text-xs font-mono shadow-2xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#475569] hover:text-[#0F172A] underline"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
