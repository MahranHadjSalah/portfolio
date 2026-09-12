import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Server, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function ValueProps() {
  const icons = [Cpu, Layers, Server, Bot];

  return (
    <section className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
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
            Core Disciplines
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            What I Build
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base text-[#475569] leading-relaxed font-sans">
            Bridging practical applied AI and production-ready full-stack software architectures.
          </motion.p>
        </motion.div>

        {/* 4 Clean Pillars */}
        <motion.div 
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {(portfolioData.whatIBuild || []).map((item, idx) => {
            const IconComponent = icons[idx] || Cpu;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp(0.5, 25)}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="rounded-xl bg-white border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0F766E]/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-md bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-sans group-hover:text-[#0F766E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed font-sans mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="text-[10px] font-mono text-[#475569] uppercase tracking-wider mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-50 text-[#0F172A] border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
