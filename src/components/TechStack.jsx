import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function TechStack() {
  const { realProjectTech } = portfolioData;

  return (
    <section id="engineering" className="py-28 md:py-36 border-b border-[#263244] relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider uppercase">
            // 02 · Production Technologies
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-sans">
            {realProjectTech.title}
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans">
            {realProjectTech.subtitle}
          </motion.p>
        </motion.div>

        {/* 6 Categorized Production Stack Cards */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
        >
          {realProjectTech.groups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp(0.5, 20)}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="rounded-lg bg-[#172033] border border-[#263244] p-5 flex flex-col justify-between hover:border-[#3B82F6]/60 hover:shadow-sm transition-all"
            >
              <div>
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-3 pb-2.5 border-b border-[#263244] flex items-center justify-between font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    {group.category}
                  </span>
                  <span className="text-[10px] text-[#94A3B8]">{group.items.length} tools</span>
                </h3>

                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-mono text-[#F8FAFC] flex items-start gap-2 group/tech"
                    >
                      <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-3.5 h-3.5">
                        <TechIcon name={skill} className="w-3.5 h-3.5" />
                      </span>
                      <span className="leading-tight group-hover/tech:text-[#38BDF8] transition-colors">
                        {skill}
                      </span>
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
          className="p-4 rounded-xl bg-[#172033] border border-[#263244] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                Production-Tested Stack
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#F8FAFC] font-sans mt-0.5">
                {realProjectTech.proofNote}
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#94A3B8]">
            Full-Stack · Applied AI · DevOps & Cloud Systems
          </span>
        </motion.div>

      </div>
    </section>
  );
}
