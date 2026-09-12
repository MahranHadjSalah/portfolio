import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Calendar, Network, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function FeaturedProjects({ onOpenProject }) {
  // Visual preview mockups for each project matching Image 2
  const renderCardPreview = (project) => {
    if (project.id === 'autoreply') {
      return (
        <div className="w-full h-56 sm:h-64 bg-slate-950 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-colors">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Dual Phone Preview Mockup */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 max-w-sm w-full">
            {/* Phone 1: Incoming Message */}
            <div className="w-36 sm:w-44 bg-slate-900 rounded-xl border border-slate-800 p-2.5 shadow-lg space-y-2 text-[10px] font-sans">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-mono text-[9px] text-slate-400">
                <span>Instagram DM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-slate-800 text-slate-200 p-2 rounded-lg leading-tight">
                "Hi! Is the Black Jacket in size L in stock?"
              </div>
              <div className="bg-[#0F766E] text-white p-2 rounded-lg space-y-1">
                <p className="leading-tight font-medium">"Yes, 4 left in stock! Ready to ship."</p>
                <span className="inline-block bg-white text-[#0F766E] font-bold px-1.5 py-0.5 rounded text-[8px] font-mono">
                  Checkout Link ↗
                </span>
              </div>
            </div>

            {/* Phone 2: Inventory & Order Flow */}
            <div className="w-36 sm:w-44 bg-slate-900 rounded-xl border border-slate-800 p-2.5 shadow-lg space-y-2 text-[10px] font-sans hidden sm:block">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-mono text-[9px] text-slate-400">
                <span>FastAPI + Redis</span>
                <span className="text-emerald-400 font-mono">200ms ACK</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[9px] text-slate-300 space-y-1">
                <div className="text-[#0F766E] font-bold">query_inventory()</div>
                <div className="text-emerald-400">STATUS: AVAILABLE</div>
                <div className="text-slate-400">SKU: JKT-BLK-L</div>
              </div>
              <div className="p-1.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[9px] font-mono text-center font-bold">
                Order Funnel Active
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'lux-dental') {
      return (
        <div className="w-full h-56 sm:h-64 bg-slate-950 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-colors">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Clinical Dashboard Screen Mockup */}
          <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2.5 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[9px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">LUX Dental OS</span>
              </div>
              <span className="text-emerald-400">Multi-Chair Calendar</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="text-slate-400">Chair 01</div>
                <div className="text-white font-bold text-[11px]">Occupied</div>
                <div className="text-[#0F766E] font-semibold">K. Ben Ali (#2041)</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="text-slate-400">Chair 02</div>
                <div className="text-white font-bold text-[11px]">Available</div>
                <div className="text-slate-400">Slot: 10:30 AM</div>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[9px] flex items-center justify-between text-slate-300">
              <span>Patient Dossier #2041</span>
              <span className="text-emerald-400 font-bold">Audit Logged (ACID)</span>
            </div>
          </div>
        </div>
      );
    }

    // SupportAi
    return (
      <div className="w-full h-56 sm:h-64 bg-slate-950 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-colors">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        {/* GraphRAG Dashboard Mockup */}
        <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2.5 font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[9px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
              <span className="text-white font-bold">SupportAi // GraphRAG Engine</span>
            </div>
            <span className="text-emerald-400">Hybrid Retrieval</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
            <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
              <div className="text-slate-400 text-[8px]">Dense Search</div>
              <div className="text-[#0F766E] font-bold">pgvector</div>
            </div>
            <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
              <div className="text-slate-400 text-[8px]">Knowledge Graph</div>
              <div className="text-emerald-400 font-bold">Neo4j</div>
            </div>
            <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
              <div className="text-slate-400 text-[8px]">State Graph</div>
              <div className="text-white font-bold">LangGraph</div>
            </div>
          </div>

          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[9px] space-y-1">
            <div className="text-slate-400">Query: "Retention policy for EU records"</div>
            <div className="text-emerald-300 font-bold">Citation Verified: [GDPR-Doc-4.2]</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference Image 1 */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#0F766E] font-bold tracking-wider uppercase">
            // 01
          </motion.div>

          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight font-sans leading-[1.05]">
            MY<br />
            <span className="text-[#0F766E]">PROJECTS</span>
          </motion.h2>

          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A collection of production-ready AI and full-stack software systems. Click any project to explore the deep dive.
          </motion.p>
        </motion.div>

        {/* 2-Column Showcase Grid with Staggered Entrance */}
        <motion.div 
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {portfolioData.featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp(0.55, 30)}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              onClick={() => onOpenProject(project.id)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenProject(project.id); }}
              className="rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden group cursor-pointer hover:border-[#0F766E]/60 hover:shadow-lg transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              {/* Top Half: Visual Preview Box */}
              {renderCardPreview(project)}

              {/* Bottom Half: Project Information */}
              <div className="p-6 sm:p-7 space-y-3 bg-white flex-1 flex flex-col justify-between">
                <div>
                  {/* Title with Arrow Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#0F766E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  {/* Concise Summary */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Uppercase Monospace Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2E8F0]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-[#0F172A] uppercase font-semibold border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
