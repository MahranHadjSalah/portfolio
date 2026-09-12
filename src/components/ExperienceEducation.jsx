import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { education, experience } = portfolioData.educationExperience;

  return (
    <section id="education" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Background & Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Formal foundations in software engineering accompanied by active commercial product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Academic Journey</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-zinc-900/40 border border-zinc-800 p-6 hover:border-zinc-700 transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-mono text-emerald-400 mt-0.5">
                        {item.institution}
                      </p>
                      <p className="text-xs text-zinc-400 font-mono">
                        {item.university}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Product Delivery Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Product Development & Milestones</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-zinc-900/40 border border-zinc-800 p-6 hover:border-zinc-700 transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {item.role}
                      </h4>
                      <p className="text-xs font-mono text-emerald-400 mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-xs text-zinc-400 font-mono">
                        {item.type}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
