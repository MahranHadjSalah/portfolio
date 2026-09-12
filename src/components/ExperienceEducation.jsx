import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Code2, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { engineeringJourney } = portfolioData;

  return (
    <section id="experience" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Personal Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            My Engineering Journey
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A disciplined trajectory combining formal computer science education at ISIMS with real commercial product delivery.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-[13px] before:w-0.5 before:bg-[#E2E8F0]">
          {engineeringJourney.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-6 group">
              
              {/* Timeline Dot */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-white border-2 border-[#0F766E] shadow-2xs flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E2E8F0] pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-sans">
                      {step.milestone}
                    </h3>
                    <div className="text-xs font-mono text-[#0F766E] font-medium mt-0.5">
                      {step.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#0F766E]/20 w-fit">
                    {step.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {step.details}
                </p>

                {/* Sub-tags if products */}
                {step.year === "2025 — 2026" && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E2E8F0]">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      Autoreply · AI Sales Automation
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      LUX Dental · Clinical SaaS
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      SupportAi · GraphRAG Platform
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
