import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Calendar, 
  Database, 
  Bot, 
  Cpu,
  Layers,
  Network
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'metrics'

  return (
    <section id="projects" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Flagship Software
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Products & Systems
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Commercial platforms engineered from zero to deployment with real business impact.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {portfolioData.featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800 overflow-hidden hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Top Bar / Header of Project Card */}
              <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">0{index + 1} //</span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {project.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-800/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors"
                  >
                    <span>Request Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
                
                {/* Left: Product Information */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-emerald-400 mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlight Box */}
                    <div className="rounded-lg bg-zinc-950/70 border-l-2 border-emerald-500 p-3.5 mb-6 text-xs text-zinc-300 font-mono">
                      <span className="text-emerald-400 font-semibold uppercase tracking-wider block mb-1">Key Impact:</span>
                      {project.highlight}
                    </div>

                    {/* Architecture Breakdown */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Architectural Implementation:
                      </h4>
                      <ul className="space-y-2">
                        {project.architecture.map((arch, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{arch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800/80">
                    {project.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded bg-zinc-950/60 border border-zinc-800">
                        <div className="text-base font-bold font-mono text-white">{metric.value}</div>
                        <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Realistic Interactive UI / System Mockup */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="rounded-xl bg-[#0b0e14] border border-zinc-800 overflow-hidden shadow-xl">
                    
                    {/* Mockup Window Title */}
                    <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="text-[11px] text-zinc-400 ml-2">preview://{project.id}.internal</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Live System Demo</span>
                    </div>

                    {/* Dynamic Interactive Component for Each Project */}
                    <div className="p-5 bg-zinc-950">
                      {project.previewType === 'autoreply' && <AutoreplyPreview />}
                      {project.previewType === 'dental' && <DentalPreview />}
                      {project.previewType === 'supportai' && <SupportAiPreview />}
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

/* Interactive Preview for Autoreply: Meta Sales Bot */
function AutoreplyPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            IG
          </div>
          <div>
            <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
              Direct Message Channel
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-zinc-500 font-mono">Webhook Active · Latency 640ms</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
          AI Auto-Sales Engine
        </span>
      </div>

      {/* Simulated Conversation Feed */}
      <div className="space-y-3 font-sans">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">
            User
          </div>
          <div className="bg-zinc-850 text-zinc-200 p-2.5 rounded-lg rounded-tl-none max-w-[85%] border border-zinc-750">
            Hi! Do you have the Pro 4K camera kit in stock? And what's the shipping delay to Tunis?
          </div>
        </div>

        {/* AI Processing Pill */}
        <div className="text-[10px] font-mono text-zinc-500 pl-8 flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>Intent: PRODUCT_QUERY · DB Tool: check_inventory("PRO_4K_KIT")</span>
        </div>

        <div className="flex items-start gap-2.5 flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] text-emerald-300 font-mono">
            AI
          </div>
          <div className="bg-emerald-950/40 text-zinc-100 p-3 rounded-lg rounded-tr-none max-w-[85%] border border-emerald-500/30 space-y-2">
            <p>Yes! We currently have 3 units of the <strong>Pro 4K Kit</strong> in stock. Next-day delivery is available to Tunis via Express Carrier.</p>
            <div className="p-2 rounded bg-zinc-900 border border-emerald-500/20 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-[11px]">Pro 4K Camera Bundle</div>
                <div className="text-[10px] text-emerald-400 font-mono">TND 1,450 · Free Next-Day</div>
              </div>
              <span className="px-2 py-1 bg-emerald-500 text-zinc-950 font-bold rounded text-[10px]">
                Instant Order
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 text-[10px] font-mono text-zinc-500 border-t border-zinc-800 flex items-center justify-between">
        <span>Channel: Instagram Graph API v19.0</span>
        <span className="text-emerald-400">Order Funnel: Converted</span>
      </div>
    </div>
  );
}

/* Interactive Preview for LUX Dental: Clinical SaaS */
function DentalPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-300 font-bold">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-zinc-100">LUX Dental Practice Management</div>
            <div className="text-[10px] text-zinc-500 font-mono">Clinic: Sfax Central · Dr. Amine M.</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20">
          RBAC: Practitioner
        </span>
      </div>

      {/* Schedule & Odontogram Status Grid */}
      <div className="grid grid-cols-2 gap-2.5 font-mono">
        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
          <div className="text-[10px] text-zinc-400 mb-1">Upcoming Appointments</div>
          <div className="text-sm font-bold text-white">8 Scheduled</div>
          <div className="text-[10px] text-emerald-400 mt-1">SMS Reminders: 100% Delivered</div>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
          <div className="text-[10px] text-zinc-400 mb-1">Active Patient Chart</div>
          <div className="text-sm font-bold text-cyan-300">Tooth #16 & #17</div>
          <div className="text-[10px] text-zinc-400 mt-1">Composite Restoration Done</div>
        </div>
      </div>

      {/* Patient Queue mini table */}
      <div className="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
        <div className="px-3 py-2 bg-zinc-850/80 border-b border-zinc-800 text-[10px] font-mono text-zinc-400 grid grid-cols-4">
          <span>TIME</span>
          <span>PATIENT</span>
          <span>PROCEDURE</span>
          <span className="text-right">STATUS</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center border-b border-zinc-800/40">
          <span className="font-mono text-zinc-400">09:30</span>
          <span className="font-medium text-zinc-200">K. Ben Ali</span>
          <span className="text-zinc-400">Crown Fitting</span>
          <span className="text-right text-emerald-400 font-mono text-[10px]">In Chair</span>
        </div>
        <div className="px-3 py-2 text-[11px] grid grid-cols-4 items-center">
          <span className="font-mono text-zinc-400">10:15</span>
          <span className="font-medium text-zinc-200">S. Mansour</span>
          <span className="text-zinc-400">Oral Hygiene</span>
          <span className="text-right text-amber-400 font-mono text-[10px]">Waiting</span>
        </div>
      </div>

      <div className="pt-1 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
        <span>PostgreSQL Schema: Multi-tenant Encrypted</span>
        <span className="text-emerald-400">HIPAA Compliant Data Flow</span>
      </div>
    </div>
  );
}

/* Interactive Preview for SupportAi: GraphRAG Platform */
function SupportAiPreview() {
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-300">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-zinc-100">SupportAi GraphRAG Engine</div>
            <div className="text-[10px] text-zinc-500 font-mono">Entity-Relation Knowledge Graph</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-mono border border-purple-500/20">
          Zero-Hallucination
        </span>
      </div>

      {/* Query & Traversal Log */}
      <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
        <div className="text-[10px] font-mono text-zinc-400">Input Enterprise Query:</div>
        <div className="text-zinc-200 font-medium text-[11px]">
          "What is the warranty coverage for enterprise cluster nodes under contract tier A?"
        </div>
      </div>

      {/* Graph Traversal Path */}
      <div className="space-y-1.5 font-mono text-[10px]">
        <div className="text-zinc-400 uppercase tracking-wider text-[9px]">Graph Context Traversal Path:</div>
        <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-zinc-300">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-purple-400 font-bold">[Tier_A_Contract]</span>
            <span>-&gt; HAS_SLA -&gt;</span>
            <span className="text-cyan-400 font-bold">[Hardware_Warranty]</span>
            <span>-&gt; COVERS -&gt;</span>
            <span className="text-emerald-400 font-bold">[Cluster_Node]</span>
          </div>
          <span className="text-emerald-400 text-[9px] font-mono">Weight: 0.96</span>
        </div>
      </div>

      {/* Grounded Output */}
      <div className="p-2.5 rounded bg-purple-950/30 border border-purple-500/30 text-zinc-200 text-[11px] leading-relaxed">
        <span className="text-purple-300 font-mono font-bold block mb-1 text-[10px]">Grounded Answer (Synthesized & Cited):</span>
        Under Contract Tier A, enterprise cluster nodes have 36 months of 24/7 on-site hardware replacement.
        <span className="inline-block ml-1 px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px]">
          Ref: #SLA-Art-4.2
        </span>
      </div>

      <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between">
        <span>Retrieval: pgvector + Knowledge Graph</span>
        <span className="text-emerald-400">Confidence: 99.1%</span>
      </div>
    </div>
  );
}
