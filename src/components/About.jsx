import React from 'react';
import { Terminal, GraduationCap, Compass, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Engineering Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me & Builder Philosophy
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Academic rigor combined with hands-on product creation.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Software Engineering Student
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    ISIMS — Université de Sfax
                  </p>
                </div>
              </div>

              {portfolioData.personal.bio.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Core Interests Tag Pills */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Core Technical Focus Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI & LLMs", "RAG & GraphRAG", "Autonomous AI Agents", "LangGraph", "Full-Stack SaaS", "FastAPI & Microservices", "PostgreSQL / pgvector"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-800/80 text-emerald-300 border border-emerald-500/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
              Guiding Principles:
            </div>

            {portfolioData.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold">0{idx + 1}.</span>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* University Highlight Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/25 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wide">Academic Base</div>
                <div className="text-sm font-bold text-white mt-0.5">ISIMS · Université de Sfax</div>
                <div className="text-xs text-zinc-400 mt-0.5">Engineering Cycle in Software Engineering</div>
              </div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                1st Year
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
