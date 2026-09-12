import React, { useState } from 'react';
import { ArrowRight, FileText, Download, Check, Copy, MapPin, Sparkles, Activity, Layers } from 'lucide-react';
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-zinc-800/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Clear Identity */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Currently Building / Open To Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">CURRENTLY BUILDING:</span>
                <span className="text-emerald-300 font-semibold">Autoreply</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>ISIMS · Université de Sfax</span>
              </div>
            </div>

            {/* Name and Direct Title */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Mahran Hadj Salah
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Software Engineering Student building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-emerald-200 to-emerald-400">
                  AI-powered products
                </span>{' '}
                and SaaS systems.
              </h1>
            </div>

            {/* Subtitle / Focus */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-sans">
              {portfolioData.personal.headline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 group font-sans"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white text-sm font-mono border border-zinc-750 transition-all"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 text-xs font-mono border border-zinc-800 transition-all"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Availability Pill */}
            <div className="pt-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{portfolioData.personal.availability}</span>
            </div>

          </div>

          {/* Right Column: Visual Architecture Pipeline Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#090b10] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="text-[11px] text-zinc-400 ml-2 font-semibold">architecture_pipeline</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  System Operational
                </span>
              </div>

              {/* Visual Pipeline Stages */}
              <div className="p-5 sm:p-6 space-y-3 bg-[#07090d]">
                {pipelineStages.map((stage, idx) => (
                  <div key={idx} className="space-y-2">
                    <div 
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'bg-zinc-900 border-emerald-500/40 text-white shadow-sm'
                          : 'bg-zinc-950/60 border-zinc-850 text-zinc-400 hover:border-zinc-750'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-xs text-white">{stage.name}</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Ready
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 pl-4.5 font-sans">
                        {stage.desc}
                      </p>
                    </div>

                    {idx < pipelineStages.length - 1 && (
                      <div className="flex justify-center py-0.5 text-zinc-600">
                        <span className="text-xs">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500">
                <span>LangGraph State Graph · Event-Driven</span>
                <span className="text-zinc-400">ISIMS Software Eng.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
