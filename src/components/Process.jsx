import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const { productLifecycle } = portfolioData;

  return (
    <section id="process" className="py-24 border-b border-[#E2E8F0] bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Engineering Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            {productLifecycle.title}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#0F766E] font-sans">
            "{productLifecycle.motto}"
          </p>
          <p className="text-base text-[#475569] leading-relaxed font-sans">
            {productLifecycle.description}
          </p>
        </div>

        {/* 7-Step Horizontal Visual Pipeline */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
          <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-bold mb-5 flex items-center justify-between">
            <span>End-to-End Product Pipeline:</span>
            <span className="text-[#0F766E]">7 Sequential Stages</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-stretch">
            {productLifecycle.steps.map((stage) => (
              <div 
                key={stage.num}
                className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:bg-[#E6FFFA]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#0F766E] block mb-1.5">
                    {stage.num} //
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans uppercase tracking-tight">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] mt-2.5 font-sans leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
