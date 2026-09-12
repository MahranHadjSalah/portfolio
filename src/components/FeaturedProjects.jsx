import React from 'react';
import { 
  Zap, 
  Calendar, 
  Network, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects({ onSelectCaseStudy }) {
  return (
    <section id="work" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Selected Software Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Featured Case Studies
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Production-oriented systems engineered from zero to deployment. Click any project for full architectural details and live simulators.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {portfolioData.featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Card Header Bar */}
              <div className="px-6 py-4 bg-slate-50 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#475569]">0{index + 1} //</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white hover:bg-slate-100 text-[#0F172A] border border-[#E2E8F0] shadow-2xs transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Case Study</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white hover:bg-slate-100 text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] shadow-2xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#E6FFFA] hover:bg-teal-100 text-[#0F766E] border border-[#0F766E]/30 shadow-2xs transition-colors"
                  >
                    <span>Request Demo</span>
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-stretch">
                
                {/* Left: Product Information */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2 font-sans">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-sans font-semibold text-[#0F766E] leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-sans">
                      {project.summary}
                    </p>

                    {/* Engineering Facts (Honest Evidence) */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-[#475569] uppercase tracking-wider font-semibold">
                        Key Engineering Facts:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.engineeringFacts.map((fact, fIdx) => (
                          <div key={fIdx} className="p-2.5 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-center gap-2 text-xs text-[#0F172A] font-sans font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architectural Bullet Points */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-[#475569] uppercase tracking-wider font-semibold">
                        Architecture Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {project.architectureHighlights.slice(0, 3).map((arch, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                            <span className="text-[#0F766E] mt-0.5 font-bold">•</span>
                            <span>{arch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Deep Dive CTA */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 text-[#0F172A] border border-[#E2E8F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0F766E] hover:text-[#115E59] font-semibold transition-colors group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: Realistic In-Browser System Simulation */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="rounded-xl bg-white border border-[#E2E8F0] overflow-hidden shadow-md">
                    
                    {/* Window Header */}
                    <div className="px-4 py-2.5 bg-slate-50 border-b border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#475569]">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="text-[11px] text-[#0F172A] ml-2 font-semibold">
                          {project.id === 'autoreply' && 'meta_webhook_flow'}
                          {project.id === 'lux-dental' && 'clinical_rbac_schedule'}
                          {project.id === 'supportai' && 'graph_rag_engine'}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#0F766E] font-mono font-semibold">Verified Pipeline</span>
                    </div>

                    {/* Previews */}
                    <div className="p-5 bg-[#F8FAFC]/70">
                      {project.id === 'autoreply' && <AutoreplyPreview />}
                      {project.id === 'lux-dental' && <DentalPreview />}
                      {project.id === 'supportai' && <SupportAiPreview />}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function AutoreplyPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center text-[#0F172A] font-bold text-[10px] font-mono">
            IG
          </div>
          <div>
            <div className="font-semibold text-[#0F172A] flex items-center gap-1.5">
              Direct Message Ingest
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
            </div>
            <div className="text-[10px] text-[#475569] font-mono">Meta Graph API v19 · Redis Queue</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#E6FFFA] text-[#0F766E] text-[10px] font-mono border border-[#0F766E]/20 font-medium">
          State Machine
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-[10px] text-[#475569] font-mono">
            User
          </div>
          <div className="bg-white text-[#0F172A] p-2.5 rounded-lg rounded-tl-none max-w-[85%] border border-[#E2E8F0] shadow-2xs font-sans">
            Hi! Do you have the Pro 4K kit in stock? How fast can you deliver to Sfax?
          </div>
        </div>

        <div className="text-[10px] font-mono text-[#475569] pl-8 flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-[#0F766E]" />
          <span>Intent: INVENTORY_QUERY · Tool: query_stock("PRO_4K_KIT")</span>
        </div>

        <div className="flex items-start gap-2.5 flex-row-reverse">
          <div className="w-6 h-6 rounded bg-[#E6FFFA] border border-[#0F766E]/40 flex items-center justify-center text-[10px] text-[#0F766E] font-mono font-bold">
            AI
          </div>
          <div className="bg-[#E6FFFA] text-[#0F172A] p-3 rounded-lg rounded-tr-none max-w-[85%] border border-[#0F766E]/30 space-y-2 font-sans shadow-2xs">
            <p>Yes, 3 units of the <strong>Pro 4K Kit</strong> are available. Express shipping to Sfax takes 24 hours.</p>
            <div className="p-2 rounded bg-white border border-[#0F766E]/25 flex items-center justify-between shadow-2xs">
              <div>
                <div className="font-semibold text-[#0F172A] text-[11px]">Pro 4K Camera Bundle</div>
                <div className="text-[10px] text-[#0F766E] font-mono font-medium">TND 1,450 · Free Express</div>
              </div>
              <span className="px-2 py-1 bg-[#0F766E] text-white font-bold rounded text-[10px] font-mono shadow-2xs">
                Checkout Link
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 text-[10px] font-mono text-[#475569] border-t border-[#E2E8F0] flex items-center justify-between">
        <span>Channel: Instagram Webhooks</span>
        <span className="text-[#0F766E] font-semibold">Order Flow: Triggered</span>
      </div>
    </div>
  );
}

function DentalPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-[#0F172A]">LUX Dental Practice Management</div>
            <div className="text-[10px] text-[#475569] font-mono">Clinic Sfax · Multi-Chair View</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-slate-100 text-[#0F766E] text-[10px] font-mono border border-[#E2E8F0] font-medium">
          RBAC: Practitioner
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 font-mono">
        <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="text-[10px] text-[#475569] mb-0.5">Chair 01 Status</div>
          <div className="text-sm font-bold text-[#0F172A]">Occupied</div>
          <div className="text-[10px] text-[#0F766E] font-semibold mt-0.5">Procedure in progress</div>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="text-[10px] text-[#475569] mb-0.5">Patient Dossier</div>
          <div className="text-sm font-bold text-[#0F766E]">Chart #2041</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Encrypted records synced</div>
        </div>
      </div>

      <div className="rounded-lg bg-white border border-[#E2E8F0] overflow-hidden shadow-2xs">
        <div className="px-3 py-1.5 bg-slate-50 text-[10px] font-mono text-[#475569] grid grid-cols-4 border-b border-[#E2E8F0]">
          <span>TIME</span>
          <span>PATIENT</span>
          <span>PROCEDURE</span>
          <span className="text-right">STATUS</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center border-b border-slate-100 font-sans">
          <span className="font-mono text-[#475569] text-[10px]">09:30</span>
          <span className="font-medium text-[#0F172A]">K. Ben Ali</span>
          <span className="text-[#475569]">Restoration</span>
          <span className="text-right text-[#0F766E] font-mono text-[10px] font-semibold">In Chair</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center font-sans">
          <span className="font-mono text-[#475569] text-[10px]">10:15</span>
          <span className="font-medium text-[#0F172A]">S. Mansour</span>
          <span className="text-[#475569]">Hygiene</span>
          <span className="text-right text-amber-600 font-mono text-[10px] font-semibold">Waiting</span>
        </div>
      </div>

      <div className="pt-1 text-[10px] font-mono text-[#475569] flex items-center justify-between">
        <span>PostgreSQL Relational Storage</span>
        <span className="text-[#0F766E] font-semibold">RBAC Active</span>
      </div>
    </div>
  );
}

function SupportAiPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#E6FFFA] border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
            <Network className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-[#0F172A]">SupportAi Hybrid GraphRAG</div>
            <div className="text-[10px] text-[#475569] font-mono">Entity-Relationship Graph + pgvector</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#E6FFFA] text-[#0F766E] text-[10px] font-mono border border-[#0F766E]/20 font-medium">
          Citation Grounded
        </span>
      </div>

      <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] space-y-1 font-mono shadow-2xs">
        <div className="text-[10px] text-[#475569]">Query:</div>
        <div className="text-[#0F172A] text-[11px]">
          "What is the warranty coverage for cluster nodes under contract tier A?"
        </div>
      </div>

      <div className="space-y-1.5 font-mono text-[10px]">
        <div className="text-[#475569] uppercase tracking-wider text-[9px]">Graph Traversal Path:</div>
        <div className="p-2 rounded bg-white border border-[#E2E8F0] text-[#0F172A] shadow-2xs">
          <span className="text-indigo-600 font-bold">[Tier_A_Contract]</span>
          <span className="text-[#475569]"> -&gt; HAS_SLA -&gt; </span>
          <span className="text-teal-600 font-bold">[Hardware_Warranty]</span>
          <span className="text-[#475569]"> -&gt; COVERS -&gt; </span>
          <span className="text-[#0F766E] font-bold">[Cluster_Node]</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-[#E6FFFA] border border-[#0F766E]/30 text-[#0F172A] text-[11px] leading-relaxed font-sans shadow-2xs">
        <span className="text-[#0F766E] font-mono font-bold block mb-1 text-[10px]">Grounded Answer (With Source Citation):</span>
        Under Contract Tier A, cluster nodes have 36 months of 24/7 on-site hardware replacement.
        <span className="inline-block ml-1 px-1.5 py-0.2 rounded bg-white text-[#0F766E] font-mono text-[9px] border border-[#0F766E]/30">
          Ref: #SLA-Art-4.2
        </span>
      </div>

      <div className="text-[10px] font-mono text-[#475569] flex items-center justify-between">
        <span>Retrieval: Dense Vector + Entity Graph</span>
        <span className="text-[#0F766E] font-semibold">Citation Verified</span>
      </div>
    </div>
  );
}
