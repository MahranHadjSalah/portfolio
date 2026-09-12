import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experienceTimeline } = portfolioData;

  return (
    <section id="experience" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
              Career & Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              Experience & Academic Timeline
            </h2>
          </div>
          <p className="text-sm text-[#475569] max-w-md font-mono">
            Formal foundations in software engineering accompanied by real commercial product delivery.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E2E8F0]">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-6 group">
              
              {/* Timeline Dot */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-white border-2 border-[#0F766E] shadow-2xs flex items-center justify-center shrink-0 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E2E8F0] pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-sans">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-[#0F766E] font-medium mt-0.5">
                      {item.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#475569] bg-slate-100 px-2.5 py-1 rounded border border-[#E2E8F0] w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-[#475569] font-sans">
                      <span className="text-[#0F766E] mt-0.5 font-bold">•</span>
                      <span>{pt}</span>
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
