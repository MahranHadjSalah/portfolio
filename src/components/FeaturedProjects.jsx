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
        <div className="w-full h-56 sm:h-64 bg-[#111827] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Dual Phone Preview Mockup */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 max-w-sm w-full">
            {/* Phone 1: Incoming Message */}
            <div className="w-36 sm:w-44 bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-lg space-y-2 text-[10px] font-sans">
              <div className="flex items-center justify-between border-b border-[#263244] pb-1.5 font-mono text-[9px] text-[#94A3B8]">
                <span>Instagram DM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-[#111827] text-[#F8FAFC] border border-[#263244] p-2 rounded-lg leading-tight">
                "Hi! Is the Black Jacket in size L in stock?"
              </div>
              <div className="bg-[#3B82F6] text-white p-2 rounded-lg space-y-1">
                <p className="leading-tight font-medium">"Yes, 4 left in stock! Ready to ship."</p>
                <span className="inline-block bg-white text-[#172033] font-bold px-1.5 py-0.5 rounded text-[8px] font-mono">
                  Checkout Link ↗
                </span>
              </div>
            </div>

            {/* Phone 2: Inventory & Order Flow */}
            <div className="w-36 sm:w-44 bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-lg space-y-2 text-[10px] font-sans hidden sm:block">
              <div className="flex items-center justify-between border-b border-[#263244] pb-1.5 font-mono text-[9px] text-[#94A3B8]">
                <span>FastAPI + Redis</span>
                <span className="text-emerald-400 font-mono">200ms ACK</span>
              </div>
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244] font-mono text-[9px] text-[#94A3B8] space-y-1">
                <div className="text-[#38BDF8] font-bold">query_inventory()</div>
                <div className="text-emerald-400">STATUS: AVAILABLE</div>
                <div className="text-[#94A3B8]">SKU: JKT-BLK-L</div>
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
        <div className="w-full h-56 sm:h-64 bg-[#111827] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Clinical Dashboard Screen Mockup */}
          <div className="w-full max-w-md bg-[#172033] rounded-xl border border-[#263244] p-3 shadow-lg space-y-2.5 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-[#263244] pb-1.5 text-[9px] text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#F8FAFC] font-bold">LUX Dental OS</span>
              </div>
              <span className="text-emerald-400">Multi-Chair Calendar</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9px]">
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <div className="text-[#94A3B8]">Chair 01</div>
                <div className="text-[#F8FAFC] font-bold text-[11px]">Occupied</div>
                <div className="text-[#38BDF8] font-semibold">K. Ben Ali (#2041)</div>
              </div>
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <div className="text-[#94A3B8]">Chair 02</div>
                <div className="text-[#F8FAFC] font-bold text-[11px]">Available</div>
                <div className="text-[#94A3B8]">Slot: 10:30 AM</div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[9px] flex items-center justify-between text-[#94A3B8]">
              <span>Patient Dossier #2041</span>
              <span className="text-emerald-400 font-bold">Audit Logged (ACID)</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'altivox') {
      return (
        <div className="w-full h-56 sm:h-64 bg-[#111827] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Enterprise Support OS Mockup */}
          <div className="w-full max-w-md bg-[#172033] rounded-xl border border-[#263244] p-3 shadow-lg space-y-2 font-mono text-[10px]">
            <div className="flex items-center justify-between border-b border-[#263244] pb-1.5 text-[9px] text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-[#F8FAFC] font-bold">AltiVox // Enterprise Support OS</span>
              </div>
              <span className="text-emerald-400 font-mono">Tenant: NovaSaaS</span>
            </div>

            {/* Dynamic Model Selector (Manager Portal) */}
            <div className="p-2 rounded bg-[#0B1120] border border-[#263244] space-y-1.5">
              <div className="flex items-center justify-between text-[8px] text-[#94A3B8]">
                <span>Active LLM Model (Manager Portal)</span>
                <span className="text-emerald-400 font-semibold">Zero-Hallucination Gate</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[8px] text-center">
                <div className="py-1 px-1 rounded bg-[#3B82F6]/20 border border-[#3B82F6] text-[#38BDF8] font-bold">
                  Llama 3.1 [Active]
                </div>
                <div className="py-1 px-1 rounded bg-[#111827] border border-[#263244] text-[#94A3B8]">
                  Mistral 7B
                </div>
                <div className="py-1 px-1 rounded bg-[#111827] border border-[#263244] text-[#94A3B8]">
                  Qwen 2.5
                </div>
              </div>
            </div>

            {/* Hybrid Storage & Escalation Status */}
            <div className="grid grid-cols-2 gap-2 text-[9px]">
              <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8] flex items-center justify-between">
                <span>Vector + Graph</span>
                <span className="text-emerald-400 font-bold">pgvector + Neo4j</span>
              </div>
              <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8] flex items-center justify-between">
                <span>Escalation</span>
                <span className="text-[#38BDF8] font-bold">Human-in-Loop</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // SupportAi
    return (
      <div className="w-full h-56 sm:h-64 bg-[#111827] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

        {/* GraphRAG Dashboard Mockup */}
        <div className="w-full max-w-md bg-[#172033] rounded-xl border border-[#263244] p-3 shadow-lg space-y-2.5 font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#263244] pb-1.5 text-[9px] text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-[#F8FAFC] font-bold">SupportAi // GraphRAG Engine</span>
            </div>
            <span className="text-emerald-400">Hybrid Retrieval</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
            <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244]">
              <div className="text-[#94A3B8] text-[8px]">Dense Search</div>
              <div className="text-[#38BDF8] font-bold">pgvector</div>
            </div>
            <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244]">
              <div className="text-[#94A3B8] text-[8px]">Knowledge Graph</div>
              <div className="text-emerald-400 font-bold">Neo4j</div>
            </div>
            <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244]">
              <div className="text-[#94A3B8] text-[8px]">State Graph</div>
              <div className="text-[#F8FAFC] font-bold">LangGraph</div>
            </div>
          </div>

          <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[9px] space-y-1">
            <div className="text-[#94A3B8]">Query: "Retention policy for EU records"</div>
            <div className="text-emerald-300 font-bold">Citation Verified: [GDPR-Doc-4.2]</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-28 md:py-36 border-b border-[#263244] relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference Image 1 */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider uppercase">
            // 01 · Featured Projects
          </motion.div>

          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-4xl sm:text-6xl font-black text-[#F8FAFC] tracking-tight font-sans leading-[1.05]">
            MY<br />
            <span className="text-[#3B82F6]">PROJECTS</span>
          </motion.h2>

          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans">
            A collection of production-ready AI and full-stack software systems. Click any project to explore the deep dive case study.
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
              className="rounded-2xl bg-[#172033] border border-[#263244] overflow-hidden group cursor-pointer hover:border-[#3B82F6]/60 hover:shadow-xl hover:shadow-[#3B82F6]/5 transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              {/* Top Half: Visual Preview Box */}
              {renderCardPreview(project)}

              {/* Bottom Half: Project Teaser Information */}
              <div className="p-6 sm:p-7 space-y-4 bg-[#172033] flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8] bg-[#111827] px-2 py-0.5 rounded border border-[#263244]">
                      {project.badge.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors font-sans mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>

                  {/* 1-2 sentence description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Bar: 4-5 Tags + View Case Study Link */}
                <div className="pt-4 border-t border-[#263244] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#111827] text-[11px] font-mono text-[#38BDF8] uppercase font-semibold border border-[#263244]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#38BDF8] group-hover:text-white transition-colors shrink-0">
                    <span>View case study</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
