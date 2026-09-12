import React from 'react';
import { GraduationCap, MapPin, BookOpen, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { currentlyLearning, engineeringInterests, securityFocusNote } = portfolioData;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Building':
        return 'bg-[#E6FFFA] text-[#0F766E] border-[#0F766E]/30';
      case 'Deepening':
        return 'bg-slate-100 text-[#0F172A] border-[#E2E8F0]';
      case 'Exploring':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-[#475569] border-[#E2E8F0]';
    }
  };

  return (
    <section id="about" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Identity & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            About Me & Growth
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A builder mindset anchored in academic computer science and continuous hands-on systems delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Human Biography & Specialties */}
          <div className="lg:col-span-6 space-y-6">
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
                    ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax
                  </p>
                </div>
              </div>

              {portfolioData.personal.bio.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              {/* Core Specialties */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <div className="text-xs font-mono text-[#0F172A] font-bold uppercase tracking-wider">
                  Core Specialties:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {portfolioData.personal.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-bold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location & Remote Availability */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#475569]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Sfax, Tunisia (Open to Remote Worldwide)</span>
                </span>
                <span className="text-[#0F766E] font-semibold">GMT+1 Timezone</span>
              </div>

            </div>
          </div>

          {/* Right Column: Currently Learning Roadmap & Engineering Interests */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Currently Learning */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Currently Learning</span>
                </div>
                <span className="text-[11px] font-mono text-[#475569]">Continuous Self-Study</span>
              </div>

              <div className="space-y-3">
                {currentlyLearning.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:bg-[#E6FFFA]/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#0F766E]">0{idx + 1}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans">
                          {item.topic}
                        </h4>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border font-semibold ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] font-sans pl-6">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Interests & Application Security */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
              <div className="text-xs font-mono text-[#0F172A] font-bold uppercase tracking-wider">
                Engineering Interests:
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {engineeringInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded bg-slate-100 text-[#0F172A] border border-[#E2E8F0]"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0F766E] shrink-0" />
                <div className="text-xs text-[#475569] font-sans">
                  <span className="font-bold text-[#0F172A] block">{securityFocusNote}</span>
                  Targeted study on OWASP Top 10, authentication flaw exploitation, and server-side request forgery (SSRF).
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
