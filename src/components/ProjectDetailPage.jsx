import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Calendar, 
  Network, 
  Sparkles, 
  Bot, 
  Clock, 
  Check, 
  Copy,
  Zap,
  Play
} from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn, fadeIn } from '../utils/motion';

export default function ProjectDetailPage({ projectId, onBack, onNavigateProject }) {
  const [copied, setCopied] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Scroll to top when page loads or project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const project = portfolioData.featuredProjects.find((p) => p.id === projectId) || portfolioData.featuredProjects[0];
  const allProjects = portfolioData.featuredProjects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const copyUrl = () => {
    const url = `${window.location.origin}/${project.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom visual icon for each project
  const renderProjectIcon = () => {
    switch (project.id) {
      case 'autoreply':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0F766E]">
            <Bot className="w-9 h-9 text-[#0F766E]" />
          </div>
        );
      case 'lux-dental':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0F766E]">
            <Calendar className="w-9 h-9 text-[#0F766E]" />
          </div>
        );
      case 'supportai':
      default:
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0F766E]">
            <Network className="w-9 h-9 text-[#0F766E]" />
          </div>
        );
    }
  };

  // Interactive showcase mockup per project
  const renderShowcaseMockup = () => {
    if (project.id === 'autoreply') {
      return (
        <div className="bg-slate-900 rounded-2xl p-4 sm:p-8 text-white border border-slate-800 font-mono">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 ml-2">autoreply-webhook-engine // Meta Live Session</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              200ms ACK Active
            </span>
          </div>

          {/* Device Showcase Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Simulated Mobile Instagram/Messenger DM */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-sans text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-mono text-slate-400">
                <span>Instagram Direct Message</span>
                <span className="text-[#0F766E]">Live Chat</span>
              </div>
              
              <div className="space-y-2.5">
                <div className="bg-slate-800 text-slate-200 p-2.5 rounded-lg max-w-[80%]">
                  "Hello, is the Black Leather Jacket in size L available for express delivery to Tunis?"
                </div>

                <div className="bg-[#0F766E] text-white p-2.5 rounded-lg max-w-[85%] ml-auto space-y-2">
                  <p>
                    "Hi! Yes, we have 4 units left in stock at our central hub. Express delivery takes 24 hours."
                  </p>
                  <div className="bg-white/10 p-2 rounded text-[11px] font-mono border border-white/20">
                    <div className="font-bold">Item: Leather Jacket (Size L)</div>
                    <div className="text-emerald-200 font-semibold">189.000 TND · In Stock</div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-white text-[#0F766E] font-bold px-2.5 py-1 rounded text-[10px]">
                      Direct Checkout Link Generated ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Runtime & LangGraph State */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 text-xs font-mono space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
                  <span>LangGraph Execution Pipeline</span>
                  <span className="text-emerald-400 font-semibold">p95: 184ms</span>
                </div>

                <div className="space-y-2 pt-3 text-[11px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-[#0F766E] font-bold">1. Webhook Ingest: </span>
                    HMAC verified, acknowledged with HTTP 200 in 34ms.
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-[#0F766E] font-bold">2. Intent Node: </span>
                    Classified as <strong className="text-emerald-400">PURCHASE_INTENT_STOCK</strong> (score: 0.98).
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-[#0F766E] font-bold">3. Tool Call: </span>
                    <code>query_inventory(sku="JKT-BLK-L")</code> &rarr; 4 available.
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-[#0F766E] font-bold">4. Checkout Action: </span>
                    Session token generated & dispatched via Meta Graph API.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between items-center">
                <span>Redis Worker: Active</span>
                <span className="text-emerald-400">0 Failed Retries</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'lux-dental') {
      return (
        <div className="bg-slate-900 rounded-2xl p-4 sm:p-8 text-white border border-slate-800 font-mono">
          {/* Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 ml-2">lux-dental-saas // Clinical Multi-Chair Agenda</span>
            </div>
            <span className="text-emerald-400 font-semibold">PostgreSQL ACID Audited</span>
          </div>

          {/* Dashboard Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400">Chair 01 Status</div>
              <div className="text-lg font-bold text-white">Occupied</div>
              <div className="text-xs text-emerald-400 font-semibold">Dr. Hadj Salah · Implantology</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400">Chair 02 Status</div>
              <div className="text-lg font-bold text-white">Available</div>
              <div className="text-xs text-slate-400">Next Slot: 10:30 AM</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400">Security & RBAC</div>
              <div className="text-lg font-bold text-emerald-400">Practitioner Tier</div>
              <div className="text-xs text-slate-400">Encrypted Medical Records</div>
            </div>
          </div>

          {/* Agenda Grid Mockup */}
          <div className="mt-4 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden text-xs">
            <div className="px-4 py-2 bg-slate-900 text-slate-400 grid grid-cols-4 font-mono text-[10px] border-b border-slate-800">
              <span>TIME</span>
              <span>PATIENT DOSSIER</span>
              <span>PROCEDURE</span>
              <span className="text-right">CHAIR ASSIGNMENT</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center border-b border-slate-900">
              <span className="font-mono text-slate-400">09:00 - 10:00</span>
              <span className="font-bold text-white">K. Ben Ali (#2041)</span>
              <span className="text-slate-300">Root Canal Treatment</span>
              <span className="text-right text-emerald-400 font-semibold font-mono">Chair 01</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center border-b border-slate-900">
              <span className="font-mono text-slate-400">10:30 - 11:15</span>
              <span className="font-bold text-white">M. Trabelsi (#1984)</span>
              <span className="text-slate-300">Composite Restoration</span>
              <span className="text-right text-emerald-400 font-semibold font-mono">Chair 02</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center">
              <span className="font-mono text-slate-400">11:30 - 12:00</span>
              <span className="font-bold text-white">S. Chaabane (#2102)</span>
              <span className="text-slate-300">Periodontal Cleaning</span>
              <span className="text-right text-slate-400 font-mono">Scheduled</span>
            </div>
          </div>
        </div>
      );
    }

    // SupportAi
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-8 text-white border border-slate-800 font-mono">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-slate-400 ml-2">supportai-graphrag // Hybrid Retrieval Pipeline</span>
          </div>
          <span className="text-emerald-400 font-semibold">Zero-Hallucination Grounded</span>
        </div>

        {/* GraphRAG Traversal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-bold text-[#0F766E] uppercase">1. Dense Vector Search</div>
            <p className="text-xs text-slate-300 font-sans">
              Cosine similarity over 1536-dim embeddings stored in <strong>pgvector</strong> with HNSW index.
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">Top-k: 5 Chunks (0.89 sim)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-bold text-[#0F766E] uppercase">2. Knowledge Graph Traversal</div>
            <p className="text-xs text-slate-300 font-sans">
              Multi-hop Cypher queries across <strong>Neo4j</strong> entity relations to connect indirect corporate facts.
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">2-Hop Expansion Verified</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-[11px] font-bold text-[#0F766E] uppercase">3. Grounded Synthesis</div>
            <p className="text-xs text-slate-300 font-sans">
              Context-checked prompt with explicit inline source citations [Doc #12, Graph Rel: Subsidiary].
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">Real-time SSE Streaming</div>
          </div>
        </div>

        {/* Live Query Verification Console */}
        <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Query Execution Trace:</div>
          <div className="bg-slate-900 p-2.5 rounded font-mono text-[11px] text-slate-200">
            <span className="text-[#0F766E]">$ </span>
            supportai.query("What compliance policy governs customer data retention in European operations?")
          </div>
          <div className="text-slate-300 font-sans text-xs leading-relaxed pt-1">
            "According to GDPR Section 4.2 <span className="text-[#0F766E] font-mono">[Ref: Policy-EU-2024]</span> and related Data Processing Agreement <span className="text-[#0F766E] font-mono">[Node: DPA-EU]</span>, customer records are retained for exactly 36 months post-contract expiration."
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans pb-24"
    >
      
      {/* Top Single-Page Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#0F172A] hover:text-[#0F766E] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E] px-2.5 py-1.5 rounded-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#0F766E]" />
              <span>Back to all projects</span>
            </button>
            <span className="hidden sm:inline-block text-[#CBD5E1] font-mono text-sm">/</span>
            <span className="hidden sm:inline-block font-mono text-xs text-[#0F766E] bg-[#E6FFFA] px-2 py-0.5 rounded border border-[#0F766E]/20 font-semibold">
              /{project.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 hover:bg-slate-100 text-xs font-mono text-[#475569] border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              title="Share Project URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#0F766E]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-1.5 rounded-md bg-[#0F766E] text-white hover:bg-[#115E59] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Discuss Project</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header matching Reference Image 3 */}
      <motion.section 
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        animate="visible"
        className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6"
      >
        
        {/* App Icon Centered */}
        <motion.div variants={scaleIn(0.4, 0.9)} className="flex justify-center mb-6">
          {renderProjectIcon()}
        </motion.div>

        {/* Project Badge / Role */}
        <motion.div variants={fadeInUp(0.4, 15)} className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E6FFFA] text-[#0F766E] border border-[#0F766E]/30 font-bold">
            {project.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#475569] border border-[#E2E8F0]">
            {project.contextNote}
          </span>
        </motion.div>

        {/* Big Commanding Title */}
        <motion.h1 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight font-sans mb-4 leading-[1.1]">
          {project.title}
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto font-sans leading-relaxed mb-8">
          {project.tagline}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div variants={fadeInUp(0.5, 20)} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#0F766E] shadow-sm font-sans"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Request Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-sm border border-[#E2E8F0] transition-all focus-visible:ring-2 focus-visible:ring-[#0F766E] font-sans"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Large Device & Architecture Showcase Mockup */}
      <motion.section 
        variants={scaleIn(0.5, 0.98)}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        {renderShowcaseMockup()}
      </motion.section>

      {/* Structured Deep-Dive Sections */}
      <motion.div 
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12"
      >
        
        {/* 1. Problem & Solution */}
        <motion.div variants={fadeInUp(0.5, 20)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider">
              The Real Friction
            </div>
            <h3 className="text-base font-bold text-[#0F172A] font-sans">The Core Problem</h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
              Engineered Solution
            </div>
            <h3 className="text-base font-bold text-[#0F172A] font-sans">How I Solved It</h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* 2. What I Built (Exact Checklist) */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="border-b border-[#E2E8F0] pb-3">
            <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
              Hands-On Contribution
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-sans mt-0.5">
              What I Built
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.whatIBuilt.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-[#E2E8F0] hover:border-[#0F766E]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0F172A] font-sans leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. System Architecture Highlights */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
          <div className="border-b border-[#E2E8F0] pb-3">
            <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
              Engineering Architecture
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-sans mt-0.5">
              System Design & Data Flow
            </h2>
          </div>

          <ul className="space-y-3">
            {project.architectureHighlights.map((point, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-[#475569] font-sans leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Key Architectural Decisions */}
        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
            <div className="border-b border-[#E2E8F0] pb-3">
              <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
                Rationale & Tradeoffs
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-sans mt-0.5">
                Key Technical Decisions
              </h2>
            </div>

            <div className="space-y-4">
              {project.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-[#E2E8F0] space-y-1.5">
                  <h4 className="text-sm font-bold text-[#0F172A] font-sans">
                    {dec.decision}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                    {dec.reason}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 5. Production Tech Stack */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
          <div className="text-xs font-mono text-[#0F766E] font-bold uppercase tracking-wider">
            Technologies Used in this Project
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-[#0F172A] border border-[#E2E8F0] text-xs font-mono font-semibold hover:border-[#0F766E]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Navigation: Next & Previous Project */}
        <motion.div variants={fadeInUp(0.5, 20)} className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-mono border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Previous: <strong>{prevProject.title}</strong></span>
          </button>

          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold hover:bg-black transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <span>All Projects Overview</span>
          </button>

          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-mono border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <span>Next: <strong>{nextProject.title}</strong></span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0F766E]" />
          </button>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}
