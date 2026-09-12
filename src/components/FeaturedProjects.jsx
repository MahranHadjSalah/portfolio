import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Calendar, 
  Network,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects({ onSelectCaseStudy }) {
  return (
    <section id="work" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Selected Software Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Production-oriented systems engineered from zero to deployment. Click any project for full architectural details.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {portfolioData.featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-900/30 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300"
            >
              {/* Card Header Bar */}
              <div className="px-6 py-4 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">0{index + 1} //</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-zinc-700 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Case Study</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors"
                  >
                    <span>Request Demo</span>
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
                
                {/* Left: Product Information */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 font-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-emerald-400 mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                      {project.summary}
                    </p>

                    {/* Engineering Facts (Honest Evidence) */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                        Key Engineering Facts:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.engineeringFacts.map((fact, fIdx) => (
                          <div key={fIdx} className="p-2 rounded bg-zinc-950/70 border border-zinc-850 flex items-center gap-2 text-xs font-mono text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span>{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architectural Bullet Points */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                        Architecture Breakdown:
                      </div>
                      <ul className="space-y-1.5">
                        {project.architectureHighlights.slice(0, 3).map((arch, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{arch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Deep Dive CTA */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right: Realistic In-Browser System Simulation */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="rounded-xl bg-[#090b10] border border-zinc-800 overflow-hidden shadow-xl">
                    
                    {/* Window Header */}
                    <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-850 flex items-center justify-between text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="text-[11px] text-zinc-400 ml-2 font-semibold">
                          {project.id === 'autoreply' && 'meta_webhook_flow'}
                          {project.id === 'lux-dental' && 'clinical_rbac_schedule'}
                          {project.id === 'supportai' && 'graph_rag_engine'}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Verified Pipeline</span>
                    </div>

                    {/* Previews */}
                    <div className="p-5 bg-[#07090d]">
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
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-[10px] font-mono">
            IG
          </div>
          <div>
            <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
              Direct Message Ingest
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">Meta Graph API v19 · Redis Queue</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
          State Machine
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded bg-zinc-850 flex items-center justify-center text-[10px] text-zinc-400 font-mono">
            User
          </div>
          <div className="bg-zinc-900 text-zinc-200 p-2.5 rounded-lg rounded-tl-none max-w-[85%] border border-zinc-800 font-sans">
            Hi! Do you have the Pro 4K kit in stock? How fast can you deliver to Sfax?
          </div>
        </div>

        <div className="text-[10px] font-mono text-zinc-500 pl-8 flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>Intent: INVENTORY_QUERY · Tool: query_stock("PRO_4K_KIT")</span>
        </div>

        <div className="flex items-start gap-2.5 flex-row-reverse">
          <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] text-emerald-300 font-mono">
            AI
          </div>
          <div className="bg-emerald-950/30 text-zinc-100 p-3 rounded-lg rounded-tr-none max-w-[85%] border border-emerald-500/30 space-y-2 font-sans">
            <p>Yes, 3 units of the <strong>Pro 4K Kit</strong> are available. Express shipping to Sfax takes 24 hours.</p>
            <div className="p-2 rounded bg-zinc-950 border border-emerald-500/20 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-[11px]">Pro 4K Camera Bundle</div>
                <div className="text-[10px] text-emerald-400 font-mono">TND 1,450 · Free Express</div>
              </div>
              <span className="px-2 py-1 bg-emerald-500 text-zinc-950 font-bold rounded text-[10px] font-mono">
                Checkout Link
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 text-[10px] font-mono text-zinc-500 border-t border-zinc-850 flex items-center justify-between">
        <span>Channel: Instagram Webhooks</span>
        <span className="text-emerald-400">Order Flow: Triggered</span>
      </div>
    </div>
  );
}

function DentalPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-cyan-300">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-zinc-100">LUX Dental Practice Management</div>
            <div className="text-[10px] text-zinc-500 font-mono">Clinic Sfax · Multi-Chair View</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-zinc-850 text-cyan-300 text-[10px] font-mono border border-zinc-750">
          RBAC: Practitioner
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 font-mono">
        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-850">
          <div className="text-[10px] text-zinc-500 mb-0.5">Chair 01 Status</div>
          <div className="text-sm font-bold text-white">Occupied</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">Procedure in progress</div>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-850">
          <div className="text-[10px] text-zinc-500 mb-0.5">Patient Dossier</div>
          <div className="text-sm font-bold text-cyan-300">Chart #2041</div>
          <div className="text-[10px] text-zinc-400 mt-0.5">Encrypted records synced</div>
        </div>
      </div>

      <div className="rounded-lg bg-zinc-950 border border-zinc-850 overflow-hidden">
        <div className="px-3 py-1.5 bg-zinc-900 text-[10px] font-mono text-zinc-400 grid grid-cols-4">
          <span>TIME</span>
          <span>PATIENT</span>
          <span>PROCEDURE</span>
          <span className="text-right">STATUS</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center border-b border-zinc-900 font-sans">
          <span className="font-mono text-zinc-400 text-[10px]">09:30</span>
          <span className="font-medium text-zinc-200">K. Ben Ali</span>
          <span className="text-zinc-400">Restoration</span>
          <span className="text-right text-emerald-400 font-mono text-[10px]">In Chair</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center font-sans">
          <span className="font-mono text-zinc-400 text-[10px]">10:15</span>
          <span className="font-medium text-zinc-200">S. Mansour</span>
          <span className="text-zinc-400">Hygiene</span>
          <span className="text-right text-amber-400 font-mono text-[10px]">Waiting</span>
        </div>
      </div>

      <div className="pt-1 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
        <span>PostgreSQL Relational Storage</span>
        <span className="text-emerald-400">RBAC Active</span>
      </div>
    </div>
  );
}

function SupportAiPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-purple-300">
            <Network className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-zinc-100">SupportAi Hybrid GraphRAG</div>
            <div className="text-[10px] text-zinc-500 font-mono">Entity-Relationship Graph + pgvector</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-zinc-850 text-purple-300 text-[10px] font-mono border border-zinc-750">
          Citation Grounded
        </span>
      </div>

      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-850 space-y-1 font-mono">
        <div className="text-[10px] text-zinc-500">Query:</div>
        <div className="text-zinc-200 text-[11px]">
          "What is the warranty coverage for cluster nodes under contract tier A?"
        </div>
      </div>

      <div className="space-y-1.5 font-mono text-[10px]">
        <div className="text-zinc-500 uppercase tracking-wider text-[9px]">Graph Traversal Path:</div>
        <div className="p-2 rounded bg-zinc-950 border border-zinc-850 text-zinc-300">
          <span className="text-purple-400 font-bold">[Tier_A_Contract]</span>
          <span> -&gt; HAS_SLA -&gt; </span>
          <span className="text-cyan-400 font-bold">[Hardware_Warranty]</span>
          <span> -&gt; COVERS -&gt; </span>
          <span className="text-emerald-400 font-bold">[Cluster_Node]</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-purple-950/20 border border-purple-500/25 text-zinc-200 text-[11px] leading-relaxed font-sans">
        <span className="text-purple-300 font-mono font-bold block mb-1 text-[10px]">Grounded Answer (With Source Citation):</span>
        Under Contract Tier A, cluster nodes have 36 months of 24/7 on-site hardware replacement.
        <span className="inline-block ml-1 px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px]">
          Ref: #SLA-Art-4.2
        </span>
      </div>

      <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between">
        <span>Retrieval: Dense Vector + Entity Graph</span>
        <span className="text-emerald-400">Citation Verified</span>
      </div>
    </div>
  );
}
