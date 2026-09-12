import React from 'react';
import { GraduationCap, MapPin, Compass, BookOpen, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { beyondCode } = portfolioData;

  return (
    <section id="about" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Biography
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              About Me & Outside the Code
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            A builder mindset anchored in academic computer science and hands-on systems delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Human Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-750 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-sans">
                    Software Engineering Student
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    ISIMS — Université de Sfax
                  </p>
                </div>
              </div>

              {portfolioData.personal.bio.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-2 text-xs font-mono">
                {["AI Engineering", "SaaS Architecture", "Applied GraphRAG", "Backend Systems", "FastAPI / Node.js", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Beyond Code Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1 font-semibold">
              Outside the Code:
            </div>

            {/* Currently Learning */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                Currently Exploring
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 font-mono">
                {beyondCode.currentlyLearning.join(" · ")}
              </p>
            </div>

            {/* Location & Remote Availability */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Location & Availability
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 font-sans">
                {beyondCode.location}
              </p>
              <p className="text-xs text-zinc-500 font-mono">
                Timezone: GMT+1 (ideal overlap with Europe, UK, and East Coast)
              </p>
            </div>

            {/* Guiding Principle */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Current Engineering Focus
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans">
                {beyondCode.focus}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
