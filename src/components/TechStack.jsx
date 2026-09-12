import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  const { coreDaily, categories } = portfolioData.techStack;

  return (
    <section id="engineering" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Engineering at a Glance
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A purposeful, production-proven stack focused on applied AI, resilient backends, and reactive interfaces.
          </p>
        </div>

        {/* Primary Daily Stack Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#0F766E] font-bold block mb-1">
              Core Daily Stack:
            </span>
            <p className="text-xs text-[#475569] font-sans">
              Technologies I reach for first when architecting production products from scratch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {coreDaily.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 shadow-2xs"
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
              className="rounded-xl bg-white border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all"
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-4 pb-3 border-b border-[#E2E8F0] flex items-center gap-2 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                  {group.name}
                </h3>

                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-mono text-[#475569] flex items-center gap-2"
                    >
                      <span className="text-slate-400">•</span>
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
