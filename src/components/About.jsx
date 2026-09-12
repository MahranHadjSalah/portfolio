import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, ShieldCheck, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function About() {
  const { currentlyLearning, engineeringInterests, securityFocusNote } = portfolioData;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Building':
        return 'bg-[#E6FFFA] text-[#0F766E] border-[#0F766E]/30 font-bold';
      case 'Deepening':
        return 'bg-slate-100 text-[#0F172A] border-[#E2E8F0] font-semibold';
      case 'Exploring':
        return 'bg-amber-50 text-amber-700 border-amber-200 font-semibold';
      default:
        return 'bg-slate-100 text-[#475569] border-[#E2E8F0] font-medium';
    }
  };

  return (
    <section id="about" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mb-12 space-y-2"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#0F766E] font-medium tracking-wide">
            Builder Background
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            About Me & Growth
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base text-[#475569] leading-relaxed font-sans">
            A builder mindset anchored in academic computer science and continuous hands-on systems delivery.
          </motion.p>
        </motion.div>

        {/* 2x2 Clean, Harmonious Symmetrical Grid */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          
          {/* Box 1: Human Background & Education */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-5 hover:border-[#0F766E]/50 hover:shadow-sm transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-sans leading-tight">
                    Software Engineering Student
                  </h3>
                  <p className="text-xs font-mono text-[#475569] mt-0.5">
                    ISIMS — Université de Sfax
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {portfolioData.personal.bio.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Location & Remote Availability */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#475569]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Sfax, Tunisia (Worldwide Remote)</span>
              </span>
              <span className="text-[#0F766E] font-semibold bg-[#E6FFFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                GMT+1 Timezone
              </span>
            </div>
          </motion.div>

          {/* Box 2: Currently Learning Roadmap */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#0F766E]/50 hover:shadow-sm transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] font-sans leading-tight">
                      Currently Learning
                    </h3>
                    <p className="text-xs font-mono text-[#475569] mt-0.5">
                      Self-Directed Growth & Deep Dives
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#475569] bg-slate-100 px-2 py-0.5 rounded border border-slate-200 hidden sm:inline-block">
                  4 Focus Areas
                </span>
              </div>

              <div className="space-y-2.5">
                {currentlyLearning.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-lg bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/40 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-[#0F766E]">0{idx + 1}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans">
                          {item.topic}
                        </h4>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] font-sans pl-5 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#475569] flex items-center justify-between">
              <span>Goal: Production Mastery</span>
              <span className="text-[#0F766E] font-semibold">Continuous Evolution</span>
            </div>
          </motion.div>

          {/* Box 3: Core Specialties & Technical Interests */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-5 hover:border-[#0F766E]/50 hover:shadow-sm transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-sans leading-tight">
                    Specialties & Interests
                  </h3>
                  <p className="text-xs font-mono text-[#475569] mt-0.5">
                    Engineering Strengths & Focus Areas
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-mono text-[#0F172A] font-bold uppercase tracking-wider mb-2">
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

                <div className="pt-2">
                  <div className="text-xs font-mono text-[#0F172A] font-bold uppercase tracking-wider mb-2">
                    Engineering Domains:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {engineeringInterests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded bg-slate-100 text-[#0F172A] border border-[#E2E8F0]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#475569] flex items-center justify-between">
              <span>Full-Stack & Applied AI</span>
              <span className="text-[#0F172A] font-bold">Pragmatic Builder</span>
            </div>
          </motion.div>

          {/* Box 4: Application Security & Standards */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-5 hover:border-[#0F766E]/50 hover:shadow-sm transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-sans leading-tight">
                    Application Security
                  </h3>
                  <p className="text-xs font-mono text-[#475569] mt-0.5">
                    Defensive Coding & Systems Hardening
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                Beyond building functional features, I proactively study and apply web application security fundamentals to safeguard data integrity and prevent vulnerabilities before production deployment.
              </p>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-[#E2E8F0] space-y-1.5">
                <span className="font-mono text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                  {securityFocusNote}
                </span>
                <p className="text-xs text-[#475569] font-sans leading-relaxed">
                  Hands-on security lab exercises covering OWASP Top 10 vulnerabilities: Broken Access Control (RBAC), Server-Side Request Forgery (SSRF), SQL Injection, and authentication flaw mitigation.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#475569] flex items-center justify-between">
              <span>PortSwigger Academy</span>
              <span className="text-emerald-700 font-semibold font-mono">Defense-in-Depth</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
