import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, Code2, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function ExperienceEducation() {
  const { engineeringJourney } = portfolioData;

  return (
    <section id="experience" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
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
            03 // Career & Academic Milestones
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            My Engineering Journey
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base text-[#475569] leading-relaxed font-sans">
            A disciplined trajectory combining formal computer science education at ISIMS with real commercial product delivery.
          </motion.p>
        </motion.div>

        {/* Chronological Timeline */}
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-0.5 before:bg-[#E2E8F0]"
        >
          {engineeringJourney.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp(0.5, 25)}
              className="relative flex items-start gap-5 group"
            >
              
              {/* Timeline Dot */}
              <div className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-[#0F766E] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-5 sm:p-6 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/50 hover:shadow-sm transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E2E8F0] pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-sans">
                      {step.milestone}
                    </h3>
                    <div className="text-xs font-mono text-[#0F766E] font-medium mt-0.5">
                      {step.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#0F766E]/20 w-fit">
                    {step.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {step.details}
                </p>

                {/* Sub-tags if products */}
                {step.year === "2025 — 2026" && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E2E8F0]">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      Autoreply · AI Sales Automation
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      LUX Dental · Clinical SaaS
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                      SupportAi · GraphRAG Platform
                    </span>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
