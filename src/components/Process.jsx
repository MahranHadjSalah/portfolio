import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function Process() {
  const { productLifecycle } = portfolioData;

  return (
    <section id="process" className="py-24 border-b border-[#E2E8F0] bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-12 space-y-2"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#0F766E] font-medium tracking-wide">
            02 // Product Lifecycle
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            {productLifecycle.title}
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg font-bold text-[#0F766E] font-sans">
            "{productLifecycle.motto}"
          </motion.p>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
            {productLifecycle.description}
          </motion.p>
        </motion.div>

        {/* 7-Step Horizontal Visual Pipeline */}
        <motion.div 
          variants={scaleIn(0.5, 0.98)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-bold mb-4 flex items-center justify-between">
            <span>End-to-End Product Pipeline:</span>
            <span className="text-[#0F766E] font-semibold">7 Sequential Stages</span>
          </div>

          <motion.div 
            variants={staggerContainer(0.06, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-stretch"
          >
            {productLifecycle.steps.map((stage) => (
              <motion.div 
                key={stage.num}
                variants={fadeInUp(0.4, 15)}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/50 hover:bg-[#E6FFFA]/30 hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#0F766E] block mb-1.5 group-hover:scale-105 transition-transform origin-left">
                    {stage.num} //
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans uppercase tracking-tight group-hover:text-[#0F766E] transition-colors">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] mt-2.5 font-sans leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
