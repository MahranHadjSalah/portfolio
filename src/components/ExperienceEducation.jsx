import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experienceTimeline } = portfolioData;

  return (
    <section id="experience" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Career & Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Experience & Academic Timeline
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Formal foundations in software engineering accompanied by real commercial product delivery.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-zinc-800">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-6 group">
              
              {/* Timeline Dot */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-[#08090d] border-2 border-emerald-500 flex items-center justify-center shrink-0 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-800/80 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded border border-zinc-700 w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                      <span className="text-emerald-400 mt-0.5">•</span>
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
