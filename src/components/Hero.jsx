import React, { useState } from 'react';
import { ArrowRight, Download, Check, Copy, MapPin, Sparkles, Target, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pipelineStages = [
    { name: "Intent Classifier", desc: "Meta Webhook · Real-time purchase intent routing", status: "Active" },
    { name: "GraphRAG Retriever", desc: "pgvector + Entity relationship traversal", status: "Active" },
    { name: "Tool Executor", desc: "Dynamic database query · Catalog check", status: "Active" },
    { name: "Response Synthesizer", desc: "Context-grounded streaming response", status: "Active" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-[#E2E8F0]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#0F766E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Positioning & Clear Builder Identity */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Currently Building / Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-xs font-mono text-[#0F172A] hover:border-[#0F766E]/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
                <span className="text-[#475569] uppercase tracking-wider text-[10px]">CURRENTLY BUILDING:</span>
                <span className="text-[#0F766E] font-semibold">Autoreply</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#E2E8F0] shadow-xs text-xs font-mono text-[#475569]">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>ISIMS · Université de Sfax</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6FFFA] border border-[#0F766E]/30 shadow-xs text-xs font-mono text-[#0F766E]">
                <Target className="w-3.5 h-3.5" />
                <span className="font-semibold">Open for Internships</span>
              </div>
            </div>

            {/* Name and Direct Personal Branding */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0F766E] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                Software Engineering Student · AI & Full-Stack Builder
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.08] font-sans">
                {portfolioData.personal.name}
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#1E293B] leading-snug font-sans max-w-2xl">
                {portfolioData.personal.shortTagline}
              </h2>
            </div>

            {/* Builder Credo Callout */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs max-w-2xl border-l-4 border-l-[#0F766E]">
              <p className="text-sm sm:text-base font-bold text-[#0F172A] font-sans">
                "{portfolioData.personal.builderCredo.statement}"
              </p>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 font-sans">
                {portfolioData.personal.builderCredo.subtext}
              </p>
            </div>

            {/* Subtitle / Focus */}
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed font-sans">
              {portfolioData.personal.description}
            </p>

            {/* Verifiable Honest Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-1">
              {portfolioData.personal.honestStats.map((stat, sIdx) => (
                <div key={sIdx} className="p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="text-2xl font-extrabold text-[#0F766E] font-mono">{stat.value}</div>
                  <div className="text-xs font-bold text-[#0F172A] font-sans leading-tight mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#475569] font-mono mt-1 truncate">{stat.note}</div>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F766E] text-white font-bold text-sm hover:bg-[#115E59] shadow-md shadow-[#0F766E]/20 hover:shadow-[#0F766E]/30 transition-all duration-200 group font-sans"
              >
                <span>View Flagship Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-mono border border-[#E2E8F0] shadow-xs hover:border-slate-300 transition-all"
              >
                <Download className="w-4 h-4 text-[#0F766E]" />
                <span>Download CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#475569] hover:text-[#0F172A] text-xs font-mono border border-[#E2E8F0] shadow-xs hover:border-slate-300 transition-all"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#0F766E]" /> : <Copy className="w-4 h-4 text-[#475569]" />}
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Availability & Internship Conversion Note */}
            <div className="pt-2 text-xs font-mono text-[#475569] flex flex-wrap items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
              <span className="font-semibold text-[#0F172A]">Target:</span>
              <span>{portfolioData.whatImLookingFor.opportunities.join(" · ")}</span>
            </div>

          </div>

          {/* Right Column: Visual Architecture Pipeline Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="text-[11px] text-[#0F172A] ml-2 font-semibold">architecture_pipeline</span>
                </div>
                <span className="text-[10px] text-[#0F766E] flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                  System Operational
                </span>
              </div>

              {/* Visual Pipeline Stages */}
              <div className="p-5 sm:p-6 space-y-3 bg-[#F8FAFC]/60">
                {pipelineStages.map((stage, idx) => (
                  <div key={idx} className="space-y-2">
                    <div 
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'bg-[#E6FFFA] border-[#0F766E]/40 text-[#0F172A] shadow-xs' 
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                          <span className="text-xs text-[#0F172A]">{stage.name}</span>
                        </div>
                        <span className="text-[10px] text-[#0F766E] font-mono bg-[#0F766E]/10 px-1.5 py-0.5 rounded border border-[#0F766E]/20">
                          Ready
                        </span>
                      </div>
                      <p className="text-[11px] text-[#475569] mt-1 pl-4.5 font-sans">
                        {stage.desc}
                      </p>
                    </div>

                    {idx < pipelineStages.length - 1 && (
                      <div className="flex justify-center py-0.5 text-slate-400">
                        <span className="text-xs">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#475569]">
                <span>LangGraph State Graph · Event-Driven</span>
                <span className="text-[#0F172A] font-medium">ISIMS Software Eng.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
