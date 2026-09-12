import React from 'react';
import { ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  const { realProjectTech, securityFocusNote } = portfolioData;

  return (
    <section id="engineering" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Practical Engineering Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            {realProjectTech.title}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            {realProjectTech.subtitle}
          </p>
        </div>

        {/* 5 Categorized Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {realProjectTech.groups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#E2E8F0] p-5 flex flex-col justify-between hover:border-[#0F766E]/40 hover:shadow-md shadow-sm transition-all"
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-3 pb-2.5 border-b border-[#E2E8F0] flex items-center justify-between font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                    {group.category}
                  </span>
                  <span className="text-[10px] text-[#475569]">{group.items.length} tools</span>
                </h3>

                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-mono text-[#334155] flex items-center gap-2"
                    >
                      <span className="text-[#0F766E] text-[10px]">✔</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Proof of Production & Application Security Secondary Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Used across products proof */}
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/25 flex items-center justify-center text-[#0F766E] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                Production-Tested Stack
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans mt-0.5">
                {realProjectTech.proofNote}
              </div>
            </div>
          </div>

          {/* Application Security secondary focus */}
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#475569] font-bold uppercase tracking-wider">
                Secondary Technical Interest
              </div>
              <div className="text-xs sm:text-sm text-[#0F172A] font-sans mt-0.5">
                {securityFocusNote}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
