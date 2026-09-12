import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="py-24 border-b border-[#E2E8F0] bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            How I Engineer Products
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A disciplined engineering lifecycle: from problem scoping to architecture, validation, and containerized deployment.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {portfolioData.howIBuild.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-xl bg-white border border-[#E2E8F0] p-5 hover:border-[#0F766E]/50 hover:shadow-md shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-[#0F766E]">
                    {step.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0F766E] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#0F766E] transition-colors font-sans">
                  {step.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-[10px] font-mono text-slate-400 group-hover:text-[#475569]">
                Phase {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
