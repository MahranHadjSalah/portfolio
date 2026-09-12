import React from 'react';
import { Terminal, GitBranch } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section className="py-20 border-b border-[#E2E8F0] bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            Engineering Experiments
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Specialized Architectures & Open Experiments
          </h3>
          <p className="text-xs font-mono text-[#475569] mt-1">
            Focused technical modules, distributed algorithms, and agent workflows.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.secondaryProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#E2E8F0] p-6 hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                    {project.category}
                  </span>
                  <Terminal className="w-4 h-4 text-[#0F766E]" />
                </div>

                <h4 className="text-base font-bold text-[#0F172A] mb-2">
                  {project.title}
                </h4>

                <p className="text-xs text-[#475569] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-[#475569] border border-[#E2E8F0]"
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
