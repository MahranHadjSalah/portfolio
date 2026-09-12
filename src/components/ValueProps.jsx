import React from 'react';
import { Cpu, Layers, Server, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ValueProps() {
  const icons = [Cpu, Layers, Server, Bot];

  return (
    <section className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Focus Areas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              What I Build
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Bridging practical applied AI and production-ready full-stack software architectures.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.whatIBuild.map((item, idx) => {
            const IconComponent = icons[idx] || Cpu;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-zinc-900/30 border border-zinc-800 p-8 hover:border-zinc-750 hover:bg-zinc-900/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-zinc-800/60">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-850"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
