import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Tech Stack & Tools
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            A purposeful, production-proven stack selected for speed, type safety, and real-time AI execution.
          </p>
        </div>

        {/* 4 Architectural Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.techStack.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-900/40 border border-zinc-800 p-7 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Layer 0{idx + 1}</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono mb-6">
                  {group.description}
                </p>

                {/* Skill Chips Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                        skill.highlight
                          ? 'bg-zinc-850/90 border-emerald-500/30 text-white shadow-sm'
                          : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        )}
                        <span className="text-xs font-mono font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Integrated in production pipelines</span>
                <span className="text-emerald-400/80">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
