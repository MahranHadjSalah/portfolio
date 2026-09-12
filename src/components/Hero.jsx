import React, { useState } from 'react';
import { ArrowRight, Code2, Terminal, Sparkles, Download, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid border-b border-zinc-800/80">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.status}</span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-emerald-300 to-emerald-500">{portfolioData.personal.name}</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-emerald-400 font-medium tracking-wide">
                {portfolioData.personal.title}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            <p className="text-sm text-zinc-400 max-w-xl">
              Software Engineering Student at <strong className="text-zinc-200 font-semibold">ISIMS (Université de Sfax)</strong>. 
              Engineering end-to-end commercial solutions—from autonomous sales agents and GraphRAG knowledge engines to multi-tenant cloud platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white text-sm font-mono border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 text-xs font-mono border border-zinc-800/80 transition-all"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Quick Metrics Ticker */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-zinc-800/80 w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold font-mono text-white">3+</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Production Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">ISIMS</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Software Eng. Cycle</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Product-Focused</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0b0e14] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-zinc-400 ml-2">architecture_pipeline</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-zinc-950 p-0.5 rounded border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`px-2 py-1 rounded text-[10px] transition-colors ${
                      activeTab === 'pipeline' 
                        ? 'bg-zinc-800 text-emerald-400 font-semibold' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    agent_graph.py
                  </button>
                  <button
                    onClick={() => setActiveTab('runtime')}
                    className={`px-2 py-1 rounded text-[10px] transition-colors ${
                      activeTab === 'runtime' 
                        ? 'bg-zinc-800 text-emerald-400 font-semibold' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    execution.log
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-5 text-zinc-300 leading-relaxed overflow-x-auto min-h-[300px] bg-[#07090d]">
                {activeTab === 'pipeline' ? (
                  <div className="space-y-1 text-[11px]">
                    <p className="text-zinc-500"># LangGraph Autonomous Agent Definition</p>
                    <p><span className="text-purple-400">from</span> langgraph.graph <span className="text-purple-400">import</span> StateGraph, END</p>
                    <p><span className="text-purple-400">from</span> core.rag <span className="text-purple-400">import</span> HybridGraphRetriever</p>
                    <p className="text-zinc-500 pt-2"># Initialize workflow state machine</p>
                    <p>workflow = StateGraph(AgentState)</p>
                    <p>workflow.add_node(<span className="text-emerald-300">"intent_classifier"</span>, classify_intent)</p>
                    <p>workflow.add_node(<span className="text-emerald-300">"graph_rag_retriever"</span>, query_graph_context)</p>
                    <p>workflow.add_node(<span className="text-emerald-300">"tool_executor"</span>, execute_db_action)</p>
                    <p>workflow.add_node(<span className="text-emerald-300">"response_synthesizer"</span>, generate_safe_reply)</p>
                    <p className="text-zinc-500 pt-2"># Define dynamic execution edges</p>
                    <p>workflow.add_conditional_edges(</p>
                    <p className="pl-4"><span className="text-emerald-300">"intent_classifier"</span>,</p>
                    <p className="pl-4">route_action,</p>
                    <p className="pl-4">&#123;<span className="text-emerald-300">"catalog"</span>: <span className="text-emerald-300">"tool_executor"</span>, <span className="text-emerald-300">"info"</span>: <span className="text-emerald-300">"graph_rag_retriever"</span>&#125;</p>
                    <p>)</p>
                    <p className="text-emerald-400 pt-2">app = workflow.compile()</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-[11px] font-mono">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span>[00:24:12]</span>
                      <span className="text-emerald-400">INFO</span>
                      <span>Meta Webhook received: IG DM intent</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span>[00:24:12]</span>
                      <span className="text-cyan-400">ROUTER</span>
                      <span>Classified as: PURCHASE_INQUIRY (confidence 0.98)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span>[00:24:13]</span>
                      <span className="text-purple-400">TOOL</span>
                      <span>Calling query_catalog(item="dental_scanner", stock=True)</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span>[00:24:13]</span>
                      <span className="text-yellow-400">RAG</span>
                      <span>Retrieved specs + pricing from pgvector in 14ms</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300">
                      <span>[00:24:13]</span>
                      <span className="text-emerald-400">DONE</span>
                      <span>Synthesized contextual response & checkout link.</span>
                    </div>
                    <div className="pt-2 text-zinc-500 border-t border-zinc-800 text-[10px] flex items-center justify-between">
                      <span>Latency: 780ms · Tokens: 412</span>
                      <span className="text-emerald-400">Status: 200 OK</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Kernel: Python 3.12 · FastAPI Async
                </span>
                <span>UTF-8 · Git: main</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
