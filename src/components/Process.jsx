import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-bold mb-4 flex items-center justify-between">
            <span>End-to-End Product Pipeline:</span>
            <span className="text-[#0F766E]">7 Sequential Stages</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 items-center">
            {productLifecycle.steps.map((stage, sIdx) => (
              <React.Fragment key={stage.num}>
                <div className="p-3 rounded-xl bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:bg-[#E6FFFA]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#0F766E] block mb-1">
                      {stage.num} //
                    </span>
                    <h4 className="text-xs font-bold text-[#0F172A] font-sans uppercase tracking-tight">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#475569] mt-2 font-sans leading-tight">
                    {stage.desc}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 5 Core Disciplines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {[
            {
              step: "01",
              title: "Problem Scoping",
              desc: "Deconstruct business requirements, identify user friction, and define strict API & data boundaries."
            },
            {
              step: "02",
              title: "System Architecture",
              desc: "Design normalized database schemas, Redis queues, and event-driven webhook ingestion layers."
            },
            {
              step: "03",
              title: "Full-Stack Build",
              desc: "Develop type-safe, asynchronous FastAPI/Node services with reactive, component-driven React interfaces."
            },
            {
              step: "04",
              title: "AI Integration",
              desc: "Integrate LangGraph cyclical state machines, pgvector embeddings, and citation-grounded GraphRAG pipelines."
            },
            {
              step: "05",
              title: "Verification & Deploy",
              desc: "Stress-test webhook edge cases, handle concurrency, containerize with Docker, and monitor runtime behavior."
            }
          ].map((item, idx) => (
            <div
              key={item.step}
              className="rounded-xl bg-white border border-[#E2E8F0] p-5 hover:border-[#0F766E]/50 hover:shadow-md shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-[#0F766E]">
                    {item.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0F766E] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#0F766E] transition-colors font-sans">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-[10px] font-mono text-slate-400 group-hover:text-[#475569]">
                Discipline {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
