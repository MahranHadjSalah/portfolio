import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function ExperienceEducation({ onOpenResume }) {
  const { engineeringJourney } = portfolioData;

  return (
    <section id="experience" className="py-28 md:py-36 border-b border-[#263244] relative bg-[#0B1120]">
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
            // 04 · Career & Education
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-sans">
            Engineering Milestones
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans">
            A linear progression from computer science foundations at ISIMS to commercial AI and full-stack software delivery.
          </motion.p>
        </motion.div>

        {/* Compressed Horizontal Timeline — 4 Cards / 1 Line Each / No Paragraphs */}
        <div className="relative">
          {/* Subtle connecting track line on large screens */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-0.5 bg-[#263244] z-0" />

          <motion.div 
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
          >
            {engineeringJourney.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp(0.5, 20)}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="p-5 sm:p-6 rounded-xl bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/60 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                {/* Top: Year Pill + Pulse Dot */}
                <div className="flex items-center justify-between pb-3 border-b border-[#263244]">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] bg-[#3B82F6]/15 px-3 py-1 rounded-full border border-[#3B82F6]/30">
                    {step.year}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] group-hover:scale-125 transition-transform" />
                </div>

                {/* 1-Line Milestone Title & 1-Line Org */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] font-sans group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {step.milestone}
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] leading-tight">
                    {step.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Résumé Action Hook */}
        {onOpenResume && (
          <motion.div 
            variants={fadeInUp(0.5, 15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-end"
          >
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#38BDF8]" />
              <span>Looking for complete academic & experience details? View Résumé / CV</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
