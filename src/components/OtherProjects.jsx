import React from 'react';
import { Terminal, GitBranch, FlaskConical } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function OtherProjects() {
  const experiments = portfolioData.engineeringExperiments || portfolioData.secondaryProjects;

  return (
    <section className="py-20 border-b border-[#E2E8F0] bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <FlaskConical className="w-3.5 h-3.5 text-[#0F766E]" />
            Focused Technical Modules
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight font-sans">
            Engineering Experiments
          </h3>
          <p className="text-base text-[#475569] leading-relaxed font-sans">
            Targeted architectural modules demonstrating technical depth in agent swarms, asynchronous queue brokers, and document retrieval.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#E2E8F0] p-6 hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-bold">
                    {project.category}
                  </span>
                  <Terminal className="w-4 h-4 text-[#0F766E]" />
                </div>

                <h4 className="text-base font-bold text-[#0F172A] mb-2 font-sans">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-[#334155] border border-[#E2E8F0]"
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
