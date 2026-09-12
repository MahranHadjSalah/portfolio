import React from 'react';
import { Terminal, GitBranch, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section className="py-20 border-b border-zinc-800/80 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            Engineering Experiments
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Specialized Architectures & Open Experiments
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            Focused technical modules, distributed algorithms, and agent workflows.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.secondaryProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-900/30 border border-zinc-800 p-6 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                    {project.category}
                  </span>
                  <Terminal className="w-4 h-4 text-zinc-500" />
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  {project.title}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
