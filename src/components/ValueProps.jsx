import React from 'react';
import { Cpu, Layers, Server, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ValueProps() {
  const icons = [Cpu, Layers, Server, Bot];

  return (
    <section className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Focus Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            What I Build
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Bridging practical applied AI and production-ready full-stack software architectures.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.whatIBuild.map((item, idx) => {
            const IconComponent = icons[idx] || Cpu;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-8 hover:border-[#0F766E]/50 hover:shadow-md shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] group-hover:scale-105 transition-transform shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans group-hover:text-[#0F766E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed font-sans mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="text-[10px] font-mono text-[#475569] uppercase tracking-wider mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-50 text-[#0F172A] border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
