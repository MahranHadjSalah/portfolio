import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Lightbulb, AlertCircle, GitBranch } from 'lucide-react';
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
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-bold">
              {project.badge || project.category}
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
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              Role: {project.role}
            </div>
            <p className="text-lg font-semibold text-[#0F172A] font-sans">
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
            <p className="text-sm font-bold text-[#0F172A]">
              {project.role}
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* Detailed Deliverables / What I Built */}
          {project.whatIBuilt && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono text-[#0F172A] uppercase tracking-wider font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                {project.id === 'lux-dental' ? 'My Contribution:' : 'What I Built:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.whatIBuilt.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SupportAi Visual Flow if present */}
          {project.architectureFlow && (
            <div className="p-5 rounded-xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <GitBranch className="w-4 h-4" />
                <span>SupportAi Hybrid Retrieval Pipeline:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                {project.architectureFlow.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                    <div className="font-mono text-[10px] text-[#0F766E] font-bold">Stage 0{idx + 1}</div>
                    <div className="font-bold text-[#0F172A] text-xs mt-0.5">{step.step}</div>
                    <div className="text-[11px] text-[#475569] mt-1">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          {/* Key Takeaways */}
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
