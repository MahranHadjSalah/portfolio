import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, ShieldCheck, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function About() {
  const { currentlyLearning, securityFocusNote } = portfolioData;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Building':
        return 'bg-[#3B82F6]/20 text-[#38BDF8] border-[#3B82F6]/40 font-bold';
      case 'Deepening':
        return 'bg-[#111827] text-[#F8FAFC] border-[#263244] font-semibold';
      case 'Exploring':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30 font-semibold';
      default:
        return 'bg-[#111827] text-[#94A3B8] border-[#263244] font-medium';
    }
  };

  return (
    <section id="about" className="py-28 md:py-36 border-b border-[#263244] relative bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider uppercase">
            // 05 · About & Growth
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-sans">
            About Me & Growth
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans">
            A builder mindset anchored in academic computer science and continuous hands-on systems delivery.
          </motion.p>
        </motion.div>

        {/* 2-Column Symmetrical, Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Human Background & Detailed Bio (6 cols) */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 p-7 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#3B82F6]/60 hover:shadow-md transition-all"
          >
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#263244]">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] font-sans leading-tight">
                    Software Engineering Student
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-0.5">
                    ISIMS — Université de Sfax
                  </p>
                </div>
              </div>

              {/* Credo Callout */}
              <div className="p-4 rounded-lg bg-[#0B1120] border border-[#263244] space-y-1">
                <div className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                  Builder Credo
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC] font-sans leading-relaxed">
                  "{portfolioData.personal.builderCredo.statement}"
                </p>
                <p className="text-xs text-[#94A3B8] font-sans">
                  {portfolioData.personal.builderCredo.subtext}
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                <p>
                  {portfolioData.personal.description}
                </p>
                {portfolioData.personal.bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Location & Remote Availability */}
            <div className="pt-4 border-t border-[#263244] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Sfax, Tunisia (Worldwide Remote)</span>
              </span>
              <span className="text-[#38BDF8] font-semibold bg-[#3B82F6]/15 px-2.5 py-0.5 rounded border border-[#3B82F6]/30">
                GMT+1 Timezone
              </span>
            </div>

            {/* Trilingual Competence */}
            <div className="pt-3 border-t border-[#263244]/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#94A3B8] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                Languages:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[#F8FAFC] bg-[#111827] px-2 py-0.5 rounded border border-[#263244] text-[11px]">
                  Arabic <span className="text-[#38BDF8] text-[10px] font-semibold">(Native)</span>
                </span>
                <span className="text-[#F8FAFC] bg-[#111827] px-2 py-0.5 rounded border border-[#263244] text-[11px]">
                  French <span className="text-[#38BDF8] text-[10px] font-semibold">(Fluent)</span>
                </span>
                <span className="text-[#F8FAFC] bg-[#111827] px-2 py-0.5 rounded border border-[#263244] text-[11px]">
                  English <span className="text-[#38BDF8] text-[10px] font-semibold">(Technical)</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Currently Learning (Top) + Application Security (Bottom) (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* Box 1: Currently Learning Roadmap */}
            <motion.div 
              variants={fadeInUp(0.5, 20)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-7 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs flex-1 flex flex-col justify-between space-y-4 hover:border-[#3B82F6]/60 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[#263244] mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F8FAFC] font-sans leading-tight">
                        Currently Learning
                      </h3>
                      <p className="text-xs font-mono text-[#94A3B8] mt-0.5">
                        Self-Directed Growth & Deep Dives
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8] bg-[#111827] px-2.5 py-1 rounded border border-[#263244]">
                    4 Focus Areas
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentlyLearning.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-lg bg-[#0B1120] border border-[#263244] hover:border-[#3B82F6]/50 transition-colors space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-[#38BDF8]">0{idx + 1}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC] font-sans">
                            {item.topic}
                          </h4>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getStatusBadge(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] font-sans pl-5 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#263244] text-[11px] font-mono text-[#94A3B8] flex items-center justify-between">
                <span>Goal: Production Mastery</span>
                <span className="text-[#38BDF8] font-semibold">Continuous Evolution</span>
              </div>
            </motion.div>

            {/* Box 2: Application Security & Standards */}
            <motion.div 
              variants={fadeInUp(0.5, 20)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="p-7 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#3B82F6]/60 hover:shadow-md transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 pb-3.5 border-b border-[#263244]">
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F8FAFC] font-sans leading-tight">
                      Application Security
                    </h3>
                    <p className="text-xs font-mono text-[#94A3B8] mt-0.5">
                      Defensive Coding & Systems Hardening
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                  Beyond building functional features, I proactively study and apply web application security fundamentals to safeguard data integrity and prevent vulnerabilities before production deployment.
                </p>

                <div className="p-3.5 rounded-lg bg-[#0B1120] border border-[#263244] space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#F8FAFC] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    {securityFocusNote}
                  </span>
                  <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                    Hands-on security lab exercises covering OWASP Top 10 vulnerabilities: Broken Access Control (RBAC), Server-Side Request Forgery (SSRF), SQL Injection, and authentication flaw mitigation.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#263244] text-[11px] font-mono text-[#94A3B8] flex items-center justify-between">
                <span>PortSwigger Academy</span>
                <span className="text-emerald-400 font-semibold font-mono">Defense-in-Depth</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
