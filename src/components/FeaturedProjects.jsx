import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Calendar, Network, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function FeaturedProjects({ onOpenProject }) {
  // Compact, minimalist visual preview mockups for each project
  const renderCardPreview = (project) => {
    if (project.id === 'autoreply') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Meta Webhook · 200ms ACK</span>
              </span>
              <span className="text-[#38BDF8]">query_inventory()</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[10px] font-sans">
              <div className="bg-[#111827] text-[#F8FAFC] px-2.5 py-1.5 rounded-md border border-[#263244] truncate">
                "Hi! Is Black Jacket size L in stock?"
              </div>
              <div className="bg-[#3B82F6] text-white px-2.5 py-1.5 rounded-md font-medium shrink-0">
                "In stock · Checkout ↗"
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'lux-dental') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[#F8FAFC] font-bold">LUX Dental OS</span>
              </span>
              <span className="text-emerald-400">Multi-Chair Agenda</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[9px]">
              <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244] flex justify-between">
                <span className="text-[#94A3B8]">Chair 01:</span>
                <span className="text-[#38BDF8] font-bold">Occupied</span>
              </div>
              <div className="p-1.5 rounded bg-[#0B1120] border border-[#263244] flex justify-between">
                <span className="text-[#94A3B8]">Chair 02:</span>
                <span className="text-emerald-400 font-bold">Available</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'altivox') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-[#F8FAFC] font-bold">AltiVox // GraphRAG</span>
              </span>
              <span className="text-emerald-400">Zero-Hallucination</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="py-1 rounded bg-[#3B82F6]/20 border border-[#3B82F6] text-[#38BDF8] font-bold">
                Llama 3.1 [Active]
              </div>
              <div className="py-1 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                Mistral 7B
              </div>
              <div className="py-1 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                Qwen 2.5
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'smart-finance-analyzer') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#F8FAFC] font-bold">SmartFinance AI</span>
              </span>
              <span className="text-emerald-400 font-bold">Health Score: 87/100</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#38BDF8] font-bold">
                <span className="text-[#94A3B8] block text-[7px]">Liquidity</span> 2.4x
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-emerald-400 font-bold">
                <span className="text-[#94A3B8] block text-[7px]">Solvency</span> 0.38
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#F8FAFC] font-bold">
                <span className="text-[#94A3B8] block text-[7px]">Gemini AI</span> 0 Risks
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'senior-voice') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-[#F8FAFC] font-bold">SeniorVoice STT</span>
              </span>
              <span className="text-emerald-400">Darija / French</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[9px] font-sans">
              <div className="bg-[#0B1120] text-[#F8FAFC] px-2.5 py-1.5 rounded-md border border-[#263244] truncate flex items-center gap-1.5">
                <span className="text-red-400 font-bold font-mono text-[8px]">[SOS]</span>
                <span>"عاوني · نجدة" / "Au secours"</span>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-1 rounded-md text-[8px] font-mono shrink-0">
                Pills: 20:00
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'flutter-ecommerce') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02569B]" />
                <span className="text-[#F8FAFC] font-bold">Flutter Shop UI Kit</span>
              </span>
              <span className="text-[#38BDF8]">iOS & Android</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#38BDF8]">
                20+ Screens
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-emerald-400">
                Skeletons
              </div>
              <div className="p-1 rounded bg-[#3B82F6]/20 border border-[#3B82F6] text-white font-bold">
                Cart (3) ↗
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'hand-detectors') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[#F8FAFC] font-bold">MediaPipe Vision</span>
              </span>
              <span className="text-cyan-400">60 FPS · Neon HUD</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-cyan-400 font-bold">
                21 Landmarks
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#A855F7] font-bold">
                Air Canvas 3D
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-emerald-400 font-bold">
                Game AI
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'university-absence') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[#F8FAFC] font-bold">Attendance OS</span>
              </span>
              <span className="text-emerald-400 font-bold">94.2% Attendance</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#38BDF8]">
                Admin Portal
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-emerald-400">
                Roll-Call (TD/TP)
              </div>
              <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#F8FAFC]">
                Student Health
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'attt-mobile') {
      return (
        <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A56A0]" />
                <span className="text-[#F8FAFC] font-bold">ATTT Mobile Booking</span>
              </span>
              <span className="text-[#22C55E]">Figma Specs</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[9px] font-sans">
              <div className="bg-[#0B1120] text-[#F8FAFC] px-2.5 py-1.5 rounded-md border border-[#263244] truncate">
                Service: <span className="text-[#38BDF8] font-bold">Visite Technique</span>
              </div>
              <div className="bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40 px-2 py-1 rounded-md text-[8px] font-mono shrink-0">
                Confirmé ↗
              </div>
            </div>
          </div>
        </div>
      );
    }

    // SupportAi
    return (
      <div className="w-full h-36 sm:h-40 bg-[#111827] p-3 sm:p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#111827]/90 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="w-full max-w-sm bg-[#172033] rounded-xl border border-[#263244] p-2.5 shadow-md space-y-1.5 font-mono text-[10px]">
          <div className="flex items-center justify-between text-[9px] text-[#94A3B8] border-b border-[#263244] pb-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-[#F8FAFC] font-bold">SupportAi</span>
            </span>
            <span className="text-emerald-400">Hybrid Retrieval</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
            <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#38BDF8] font-bold">pgvector</div>
            <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-emerald-400 font-bold">Neo4j</div>
            <div className="p-1 rounded bg-[#0B1120] border border-[#263244] text-[#F8FAFC] font-bold">LangGraph</div>
          </div>
        </div>
      </div>
    );
  };

  const [activeFilter, setActiveFilter] = React.useState('All');

  const categories = [
    { id: 'All', label: 'All Projects', count: portfolioData.featuredProjects.length },
    { id: 'AI & ML', label: 'AI & LLM', count: 4 },
    { id: 'Full-Stack SaaS', label: 'Full-Stack SaaS', count: 3 },
    { id: 'Mobile & Vision', label: 'Mobile & Vision', count: 3 }
  ];

  const filteredProjects = portfolioData.featuredProjects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') return ['autoreply', 'supportai', 'altivox', 'senior-voice'].includes(project.id);
    if (activeFilter === 'Full-Stack SaaS') return ['lux-dental', 'smart-finance-analyzer', 'university-absence'].includes(project.id);
    if (activeFilter === 'Mobile & Vision') return ['flutter-ecommerce', 'hand-detectors', 'attt-mobile'].includes(project.id);
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#263244] relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-8 space-y-2.5"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider uppercase">
            // 01 · Production Portfolio
          </motion.div>

          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight font-sans leading-[1.05]">
            MY <span className="text-[#3B82F6]">PROJECTS</span>
          </motion.h2>

          <motion.p variants={fadeInUp(0.5, 20)} className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans">
            A verified collection of production-grade AI systems, enterprise SaaS platforms, and mobile vision applications. Click any card to explore the full architecture deep dive.
          </motion.p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? 'bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/20'
                  : 'bg-[#172033] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#263244] hover:border-[#38BDF8]/40'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                activeFilter === cat.id ? 'bg-white/20 text-white' : 'bg-[#111827] text-[#94A3B8]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 2-Column Showcase Grid with Staggered Entrance */}
        <motion.div 
          key={activeFilter}
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp(0.5, 20)}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              onClick={() => onOpenProject(project.id)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenProject(project.id); }}
              className="rounded-xl bg-[#172033] border border-[#3B82F6] hover:border-[#38BDF8] overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-[#3B82F6]/15 transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              {/* Top Half: Minimalist Visual Preview Box */}
              {renderCardPreview(project)}

              {/* Bottom Half: Compact Project Teaser Information */}
              <div className="p-4 sm:p-5 space-y-3 bg-[#172033] flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[9px] font-mono text-[#94A3B8] bg-[#111827] px-2 py-0.5 rounded border border-[#263244]">
                      {project.badge.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors font-sans mb-1.5 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {/* 1-2 sentence description */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-sans line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Bar: 4 Tags + View Case Study Link */}
                <div className="pt-3 border-t border-[#263244] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#111827] text-[10px] font-mono text-[#38BDF8] uppercase font-semibold border border-[#263244]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#38BDF8] group-hover:text-white transition-colors shrink-0">
                    <span>View case study</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
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
