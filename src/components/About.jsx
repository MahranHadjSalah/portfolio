import React from 'react';
import { GraduationCap, MapPin, BookOpen, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { beyondCode } = portfolioData;

  return (
    <section id="about" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
              Biography
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              About Me & Outside the Code
            </h2>
          </div>
          <p className="text-sm text-[#475569] max-w-md font-mono">
            A builder mindset anchored in academic computer science and hands-on systems delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Human Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 shadow-2xs flex items-center justify-center text-[#0F766E]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-sans">
                    Software Engineering Student
                  </h3>
                  <p className="text-xs font-mono text-[#475569]">
                    ISIMS — Université de Sfax
                  </p>
                </div>
              </div>

              {portfolioData.personal.bio.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-2 text-xs font-mono">
                {["AI Engineering", "SaaS Architecture", "Applied GraphRAG", "Backend Systems", "FastAPI / Node.js", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded bg-slate-50 text-[#0F172A] border border-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Beyond Code Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#475569] uppercase tracking-wider px-1 font-semibold">
              Outside the Code:
            </div>

            {/* Currently Learning */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                Currently Exploring
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] font-mono">
                {beyondCode.currentlyLearning.join(" · ")}
              </p>
            </div>

            {/* Location & Remote Availability */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Location & Availability
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] font-sans font-medium">
                {beyondCode.location}
              </p>
              <p className="text-xs text-[#475569] font-mono">
                Timezone: GMT+1 (ideal overlap with Europe, UK, and East Coast)
              </p>
            </div>

            {/* Guiding Principle */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Current Engineering Focus
              </div>
              <p className="text-xs sm:text-sm text-[#475569] font-sans">
                {beyondCode.focus}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
