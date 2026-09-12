import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function TechStack() {
  const { realProjectTech } = portfolioData;

  return (
    <section id="engineering" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
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
            Production Technologies
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            {realProjectTech.title}
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base text-[#475569] leading-relaxed font-sans">
            {realProjectTech.subtitle}
          </motion.p>
        </motion.div>

        {/* 5 Categorized Cards Grid */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6"
        >
          {realProjectTech.groups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp(0.5, 20)}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="rounded-lg bg-white border border-[#E2E8F0] p-5 flex flex-col justify-between hover:border-[#0F766E]/50 hover:shadow-sm transition-all"
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-3 pb-2.5 border-b border-[#E2E8F0] flex items-center justify-between font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                    {group.category}
                  </span>
                  <span className="text-[10px] text-[#475569]">{group.items.length} tools</span>
                </h3>

                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-mono text-[#334155] flex items-center gap-2"
                    >
                      <span className="text-[#0F766E] text-[10px]">✔</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof of Production Note */}
        <motion.div 
          variants={scaleIn(0.5, 0.98)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/25 flex items-center justify-center text-[#0F766E] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                Production-Tested Stack
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans mt-0.5">
                {realProjectTech.proofNote}
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#475569]">
            Full-Stack · Applied AI · Distributed Systems
          </span>
        </motion.div>

      </div>
    </section>
  );
}
