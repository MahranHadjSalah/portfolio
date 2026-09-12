import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-24 border-b border-zinc-800/80 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              How I Engineer Products
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            A disciplined engineering lifecycle: from problem scoping to architecture, validation, and containerized deployment.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {portfolioData.howIBuild.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-5 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-emerald-400">
                    {step.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors font-sans">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">
                Phase {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
