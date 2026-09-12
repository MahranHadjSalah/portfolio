import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  const { coreDaily, categories } = portfolioData.techStack;

  return (
    <section id="engineering" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Engineering at a Glance
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            A purposeful, production-proven stack focused on applied AI, resilient backends, and reactive interfaces.
          </p>
        </div>

        {/* Primary Daily Stack Banner */}
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
              Core Daily Stack:
            </span>
            <p className="text-xs text-zinc-400 font-sans">
              Technologies I reach for first when architecting production products from scratch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {coreDaily.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-900/30 border border-zinc-800/90 p-6 flex flex-col justify-between hover:border-zinc-750 transition-colors"
            >
              <div>
                <h3 className="text-sm font-bold text-white mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {group.name}
                </h3>

                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <span className="text-zinc-600">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
