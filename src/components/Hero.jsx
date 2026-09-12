import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Copy, MapPin, Target, Play, Shield, Terminal, Zap, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn, fadeIn } from '../utils/motion';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pipelineStages = [
    {
      id: "01",
      name: "Webhook Ingestion & HMAC",
      telemetry: "200ms ACK",
      status: "Verified",
      desc: "Intercepts Meta / REST payloads with HMAC-SHA256 signature validation and asynchronous queue push.",
      endpoint: "POST /api/v1/webhooks/meta",
      runtime: "FastAPI + Redis Queue"
    },
    {
      id: "02",
      name: "LangGraph State Machine",
      telemetry: "Cyclical Graph",
      status: "Active",
      desc: "Classifies intent, manages multi-turn conversation memory, and routes to tool nodes or RAG flows.",
      endpoint: "state_graph.invoke(intent_state)",
      runtime: "Python 3.11 + LangGraph"
    },
    {
      id: "03",
      name: "Hybrid GraphRAG Retrieval",
      telemetry: "Cosine + Graph",
      status: "Retrieved",
      desc: "Executes pgvector dense semantic search coupled with Neo4j entity graph traversal to eliminate hallucinations.",
      endpoint: "hybrid_search(query, top_k=5)",
      runtime: "pgvector + Neo4j"
    },
    {
      id: "04",
      name: "Deterministic Tool Execution",
      telemetry: "Zero Hallucination",
      status: "Executed",
      desc: "Invokes real database APIs for stock validation, multi-chair calendar booking, or checkout links.",
      endpoint: "tools.check_inventory(item_id)",
      runtime: "PostgreSQL 16 + AsyncPG"
    },
    {
      id: "05",
      name: "Grounded Response Generation",
      telemetry: "Streaming 42 t/s",
      status: "Ready",
      desc: "Synthesizes source-verified responses streamed directly back to client channels.",
      endpoint: "stream_tokens(context, session_id)",
      runtime: "SSE / WebSocket"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Clear Builder Positioning */}
          <motion.div 
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Top Status & Context Pills */}
            <motion.div variants={fadeInUp(0.4, 15)} className="flex flex-wrap items-center gap-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#0F172A] hover:border-[#0F766E]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
                <span className="text-[#475569] text-[10px]">CURRENTLY BUILDING:</span>
                <span className="text-[#0F766E] font-bold">Autoreply</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#475569]">
                <MapPin className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>ISIMS · Université de Sfax</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E6FFFA] border border-[#0F766E]/30 text-xs font-mono text-[#0F766E] font-medium">
                <Target className="w-3.5 h-3.5" />
                <span>Open for Internships</span>
              </div>
            </motion.div>

            {/* Headline with Bold Outline Display Typography */}
            <motion.div variants={fadeInUp(0.5, 20)} className="space-y-3">
              <div className="text-xs font-mono text-[#0F766E] font-medium tracking-wide">
                Software Engineering Student · AI & Full-Stack Builder
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans">
                Mahran <span className="text-outline-teal">Hadj Salah</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#1E293B] leading-snug font-sans max-w-2xl">
                {portfolioData.personal.shortTagline}
              </h2>
            </motion.div>

            {/* Focus Description */}
            <motion.p variants={fadeInUp(0.5, 20)} className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed font-sans">
              {portfolioData.personal.description}
            </motion.p>

            {/* Quiet, Disciplined Honest Stats Grid */}
            <motion.div variants={fadeInUp(0.5, 20)} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl pt-1">
              {portfolioData.personal.honestStats.map((stat, sIdx) => (
                <div key={sIdx} className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <div className="text-2xl font-black text-[#0F766E] font-mono tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#0F172A] font-sans leading-tight mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#475569] font-mono mt-1 truncate">{stat.note}</div>
                </div>
              ))}
            </motion.div>

            {/* High-Converting Action Buttons */}
            <motion.div variants={fadeInUp(0.5, 20)} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#0F766E] text-white font-semibold text-sm hover:bg-[#115E59] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 font-sans"
              >
                <span>View Flagship Projects</span>
              </a>

              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-sm font-mono border border-emerald-200 transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 font-medium"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Let's Talk</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-mono border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4 text-[#0F766E]" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white hover:bg-slate-50 text-[#475569] hover:text-[#0F172A] text-xs font-mono border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#0F766E]" /> : <Copy className="w-4 h-4 text-[#475569]" />}
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
              </button>
            </motion.div>

            {/* Internship Target Pill */}
            <motion.div variants={fadeInUp(0.5, 15)} className="pt-2 text-xs font-mono text-[#475569] flex flex-wrap items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
              <span className="font-semibold text-[#0F172A]">Targeting:</span>
              <span>{portfolioData.whatImLookingFor.opportunities.join(" · ")}</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Architectural Hero Pipeline Visual */}
          <motion.div 
            variants={scaleIn(0.6, 0.96)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="rounded-xl bg-white border border-[#E2E8F0] overflow-hidden font-mono text-xs">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-300 ml-2 font-mono">architecture_runtime.py</span>
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ONLINE // p95: 168ms</span>
                </div>
              </div>

              {/* Interactive Pipeline Stages */}
              <div className="p-4 sm:p-5 space-y-2 bg-[#F8FAFC]">
                <div className="text-[10px] uppercase text-[#475569] font-bold tracking-wider mb-2 flex items-center justify-between">
                  <span>Interactive System Flow</span>
                  <span className="text-[#0F766E]">Click stage to inspect</span>
                </div>

                {pipelineStages.map((stage, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setActiveStep(idx)}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx); }}
                      className={`p-3 rounded-lg border transition-colors cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                        isSelected
                          ? 'bg-white border-[#0F766E] shadow-xs'
                          : 'bg-white/80 border-[#E2E8F0] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-[#0F766E] text-white' : 'bg-slate-100 text-[#475569]'
                          }`}>
                            {stage.id}
                          </span>
                          <span className={`text-xs font-bold font-sans ${isSelected ? 'text-[#0F766E]' : 'text-[#0F172A]'}`}>
                            {stage.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#0F766E] bg-[#E6FFFA] px-2 py-0.5 rounded border border-[#0F766E]/20">
                          {stage.telemetry}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="mt-2 pt-2 border-t border-[#E2E8F0] space-y-1.5 text-[11px]">
                          <p className="text-[#475569] font-sans leading-relaxed">
                            {stage.desc}
                          </p>
                          <div className="bg-slate-900 text-slate-200 p-2 rounded text-[10px] font-mono overflow-x-auto">
                            <span className="text-[#0F766E] font-bold">$ </span>
                            {stage.endpoint}
                          </div>
                          <div className="text-[10px] text-[#475569] flex items-center justify-between pt-0.5">
                            <span>Runtime: <strong className="text-[#0F172A]">{stage.runtime}</strong></span>
                            <span className="text-emerald-700 font-semibold">{stage.status}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2.5 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#475569]">
                <span>Stateful Agentic Graph · Event-Driven</span>
                <span className="text-[#0F172A] font-semibold">ISIMS Software Eng.</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
