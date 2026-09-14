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
  Play,
  TrendingUp,
  BarChart3,
  FileSpreadsheet,
  FileDown,
  Mic,
  Volume2,
  HeartHandshake,
  AlertCircle,
  Smartphone,
  ShoppingBag,
  CreditCard,
  Package,
  Eye,
  Camera,
  Hand,
  Activity,
  GraduationCap,
  Users,
  ClipboardCheck,
  BookOpen,
  Car,
  CheckSquare,
  FileCheck
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <Bot className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'lux-dental':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <Calendar className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'altivox':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <Cpu className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'smart-finance-analyzer':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-9 h-9 text-emerald-400" />
          </div>
        );
      case 'senior-voice':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <Mic className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'flutter-ecommerce':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <ShoppingBag className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'hand-detectors':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-cyan-400">
            <Eye className="w-9 h-9 text-cyan-400" />
          </div>
        );
      case 'university-absence':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <GraduationCap className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
      case 'attt-mobile':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#22C55E]">
            <Car className="w-9 h-9 text-[#22C55E]" />
          </div>
        );
      case 'supportai':
      default:
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#263244] shadow-sm flex items-center justify-center text-[#38BDF8]">
            <Network className="w-9 h-9 text-[#38BDF8]" />
          </div>
        );
    }
  };

  // Interactive showcase mockup per project
  const renderShowcaseMockup = () => {
    if (project.id === 'autoreply') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">autoreply-webhook-engine // Meta Live Session</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              200ms ACK Active
            </span>
          </div>

          {/* Device Showcase Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Simulated Mobile Instagram/Messenger DM */}
            <div className="rounded-xl bg-[#111827] border border-[#263244] p-4 font-sans text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#263244] pb-2 text-[11px] font-mono text-[#94A3B8]">
                <span>Instagram Direct Message</span>
                <span className="text-[#38BDF8]">Live Chat</span>
              </div>
              
              <div className="space-y-2.5">
                <div className="bg-[#0B1120] text-[#94A3B8] border border-[#263244] p-2.5 rounded-lg max-w-[80%]">
                  "Hello, is the Black Leather Jacket in size L available for express delivery to Tunis?"
                </div>

                <div className="bg-[#3B82F6] text-white p-2.5 rounded-lg max-w-[85%] ml-auto space-y-2">
                  <p>
                    "Hi! Yes, we have 4 units left in stock at our central hub. Express delivery takes 24 hours."
                  </p>
                  <div className="bg-black/25 p-2 rounded text-[11px] font-mono border border-white/20">
                    <div className="font-bold">Item: Leather Jacket (Size L)</div>
                    <div className="text-emerald-300 font-semibold">189.000 TND · In Stock</div>
                  </div>
                  <div className="pt-1">
                    <span className="inline-block bg-white text-[#172033] font-bold px-2.5 py-1 rounded text-[10px]">
                      Direct Checkout Link Generated ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Runtime & LangGraph State */}
            <div className="rounded-xl bg-[#111827] border border-[#263244] p-4 text-xs font-mono space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#263244] pb-2 text-[11px] text-[#94A3B8]">
                  <span>LangGraph Execution Pipeline</span>
                  <span className="text-emerald-400 font-semibold">p95: 184ms</span>
                </div>

                <div className="space-y-2 pt-3 text-[11px]">
                  <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                    <span className="text-[#38BDF8] font-bold">1. Webhook Ingest: </span>
                    HMAC verified, acknowledged with HTTP 200 in 34ms.
                  </div>
                  <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                    <span className="text-[#38BDF8] font-bold">2. Intent Node: </span>
                    Classified as <strong className="text-emerald-400">PURCHASE_INTENT_STOCK</strong> (score: 0.98).
                  </div>
                  <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                    <span className="text-[#38BDF8] font-bold">3. Tool Call: </span>
                    <code>query_inventory(sku="JKT-BLK-L")</code> &rarr; 4 available.
                  </div>
                  <div className="p-2 rounded bg-[#0B1120] border border-[#263244] text-[#94A3B8]">
                    <span className="text-[#38BDF8] font-bold">4. Checkout Action: </span>
                    Session token generated & dispatched via Meta Graph API.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#263244] text-[10px] text-[#94A3B8] flex justify-between items-center">
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
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">lux-dental-saas // Clinical Multi-Chair Agenda</span>
            </div>
            <span className="text-emerald-400 font-semibold">PostgreSQL ACID Audited</span>
          </div>

          {/* Dashboard Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[11px] text-[#94A3B8]">Chair 01 Status</div>
              <div className="text-lg font-bold text-[#F8FAFC]">Occupied</div>
              <div className="text-xs text-[#38BDF8] font-semibold">Dr. Hadj Salah · Implantology</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[11px] text-[#94A3B8]">Chair 02 Status</div>
              <div className="text-lg font-bold text-[#F8FAFC]">Available</div>
              <div className="text-xs text-[#94A3B8]">Next Slot: 10:30 AM</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[11px] text-[#94A3B8]">Security & RBAC</div>
              <div className="text-lg font-bold text-emerald-400">Practitioner Tier</div>
              <div className="text-xs text-[#94A3B8]">Encrypted Medical Records</div>
            </div>
          </div>

          {/* Agenda Grid Mockup */}
          <div className="mt-4 rounded-xl bg-[#111827] border border-[#263244] overflow-hidden text-xs">
            <div className="px-4 py-2 bg-[#0B1120] text-[#94A3B8] grid grid-cols-4 font-mono text-[10px] border-b border-[#263244]">
              <span>TIME</span>
              <span>PATIENT DOSSIER</span>
              <span>PROCEDURE</span>
              <span className="text-right">CHAIR ASSIGNMENT</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center border-b border-[#263244]/50">
              <span className="font-mono text-[#94A3B8]">09:00 - 10:00</span>
              <span className="font-bold text-[#F8FAFC]">K. Ben Ali (#2041)</span>
              <span className="text-[#94A3B8]">Root Canal Treatment</span>
              <span className="text-right text-emerald-400 font-semibold font-mono">Chair 01</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center border-b border-[#263244]/50">
              <span className="font-mono text-[#94A3B8]">10:30 - 11:15</span>
              <span className="font-bold text-[#F8FAFC]">M. Trabelsi (#1984)</span>
              <span className="text-[#94A3B8]">Composite Restoration</span>
              <span className="text-right text-emerald-400 font-semibold font-mono">Chair 02</span>
            </div>
            <div className="px-4 py-3 grid grid-cols-4 items-center">
              <span className="font-mono text-[#94A3B8]">11:30 - 12:00</span>
              <span className="font-bold text-[#F8FAFC]">S. Chaabane (#2102)</span>
              <span className="text-[#94A3B8]">Periodontal Cleaning</span>
              <span className="text-right text-[#94A3B8] font-mono">Scheduled</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'altivox') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">altivox-core // Enterprise GraphRAG Platform</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Active Tenant: NovaSaaS
            </span>
          </div>

          {/* Model Selection & Benchmarking Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#3B82F6] space-y-2 relative overflow-hidden">
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#3B82F6]/20 text-[#38BDF8] text-[9px] font-bold">
                ACTIVE
              </div>
              <div className="text-[11px] font-bold text-[#38BDF8]">Llama 3.1 8B Instruct</div>
              <div className="text-xs text-[#94A3B8] font-sans">
                Primary production model for customer support chat.
              </div>
              <div className="pt-2 border-t border-[#263244] text-[10px] space-y-1 text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Hallucination Rate:</span>
                  <span className="text-emerald-400 font-bold">&lt; 1.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROUGE-L Score:</span>
                  <span className="text-[#F8FAFC] font-bold">0.88</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference Speed:</span>
                  <span className="text-[#38BDF8] font-bold">42 tok/s</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="text-[11px] font-bold text-[#94A3B8]">Mistral 7B Instruct</div>
              <div className="text-xs text-[#94A3B8] font-sans">
                High-throughput engine for standard FAQ retrieval.
              </div>
              <div className="pt-2 border-t border-[#263244] text-[10px] space-y-1 text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Hallucination Rate:</span>
                  <span className="text-emerald-400 font-bold">&lt; 2.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROUGE-L Score:</span>
                  <span className="text-[#F8FAFC] font-bold">0.84</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference Speed:</span>
                  <span className="text-[#38BDF8] font-bold">48 tok/s</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="text-[11px] font-bold text-[#94A3B8]">Qwen 2.5 7B</div>
              <div className="text-xs text-[#94A3B8] font-sans">
                Optimized for multilingual inquiries and complex schemas.
              </div>
              <div className="pt-2 border-t border-[#263244] text-[10px] space-y-1 text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Hallucination Rate:</span>
                  <span className="text-emerald-400 font-bold">&lt; 1.6%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROUGE-L Score:</span>
                  <span className="text-[#F8FAFC] font-bold">0.87</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference Speed:</span>
                  <span className="text-[#38BDF8] font-bold">39 tok/s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline & Escalation Trace */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2 text-xs">
              <div className="text-[10px] text-[#38BDF8] uppercase font-bold">EnsembleRetriever (Weighted Fusion)</div>
              <div className="space-y-1.5 text-[11px] text-[#94A3B8]">
                <div className="flex justify-between p-2 rounded bg-[#0B1120] border border-[#263244]">
                  <span>PostgreSQL + pgvector (Content Chunks)</span>
                  <span className="text-emerald-400 font-bold">Weight: 0.60</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-[#0B1120] border border-[#263244]">
                  <span>Neo4j Entity Graph (Knowledge Map)</span>
                  <span className="text-[#38BDF8] font-bold">Weight: 0.40</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2 text-xs">
              <div className="text-[10px] text-emerald-400 uppercase font-bold">Zero-Hallucination Gate</div>
              <div className="p-2.5 rounded bg-[#0B1120] border border-[#263244] text-[11px] text-[#94A3B8] leading-relaxed">
                If confidence &lt; threshold: pure Python escalation pipeline bypasses LLM synthesis and instantly dispatches customer ticket to Manager Portal.
              </div>
            </div>
          </div>

          {/* Live Query Verification Console */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Customer Chat Live Trace (Manager Grounded):</div>
            <div className="bg-[#0B1120] border border-[#263244] p-2.5 rounded font-mono text-[11px] text-[#F8FAFC]">
              <span className="text-[#38BDF8]">&gt; User: </span>
              "Does NovaSaaS enterprise plan include dedicated Neo4j instance backup SLA?"
            </div>
            <div className="text-[#94A3B8] font-sans text-xs leading-relaxed pt-1">
              "Yes. Under Section 3 of NovaSaaS Service Terms <span className="text-[#38BDF8] font-mono">[Ref: SLA-2025-V2]</span>, all enterprise tenants receive automated snapshotting every 4 hours with a 99.95% uptime guarantee."
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'smart-finance-analyzer') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">smartfinance-analytics // Diagnostics Console</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Google Gemini 1.5 Active
            </span>
          </div>

          {/* Metrics & Diagnostic Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1 md:col-span-1">
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Financial Health Score</div>
              <div className="text-3xl font-black text-emerald-400">87<span className="text-xs text-[#94A3B8]">/100</span></div>
              <div className="text-[11px] text-[#38BDF8] font-sans">Grade: Excellent Solvency</div>
              <div className="w-full bg-[#0B1120] rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '87%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Current Liquidity</div>
              <div className="text-2xl font-black text-[#F8FAFC]">2.42x</div>
              <div className="text-[11px] text-emerald-400 font-sans">Above 1.5x threshold</div>
              <div className="text-[10px] text-[#94A3B8]">Instant obligation coverage</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Profit Margin</div>
              <div className="text-2xl font-black text-[#F8FAFC]">+18.4%</div>
              <div className="text-[11px] text-[#38BDF8] font-sans">+3.2% vs previous Q</div>
              <div className="text-[10px] text-[#94A3B8]">Net income over gross revenue</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Debt / Equity</div>
              <div className="text-2xl font-black text-[#F8FAFC]">0.38</div>
              <div className="text-[11px] text-emerald-400 font-sans">Healthy leverage ratio</div>
              <div className="text-[10px] text-[#94A3B8]">Low bankruptcy exposure</div>
            </div>
          </div>

          {/* Gemini AI Risk Analysis Output */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#38BDF8] font-bold uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Gemini Generative Financial Synthesis
              </span>
              <span className="text-emerald-400">0 Critical Risks Detected</span>
            </div>
            <div className="bg-[#0B1120] border border-[#263244] p-3 rounded-lg font-sans text-xs text-[#94A3B8] leading-relaxed">
              "Company operates with strong cash buffer and consistent gross profitability. Revenue trajectory exhibits +14.2% QoQ growth. <strong className="text-[#F8FAFC]">Strategic Recommendation:</strong> Refinance short-term supplier payables within 60 days to unlock an estimated 8.5% additional operational working capital."
            </div>
            <div className="flex items-center justify-between pt-2 text-[10px] text-[#94A3B8]">
              <span>Data source: Q1–Q3 Ingested Statements (CSV)</span>
              <span className="text-[#38BDF8] flex items-center gap-1 font-mono">
                <FileDown className="w-3.5 h-3.5" />
                executive_report_q3.pdf (Generated via PDFKit)
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'senior-voice') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">seniorvoice-stt-engine // Bilingual Pipeline</span>
            </div>
            <span className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              Whisper STT (Darija + French)
            </span>
          </div>

          {/* Bilingual Voice Testbed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-red-500/30 space-y-2">
              <div className="text-[10px] text-red-400 font-bold uppercase flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                1. Emergency SOS Intent
              </div>
              <div className="bg-[#0B1120] p-2.5 rounded border border-[#263244] text-[11px] text-[#F8FAFC]">
                🗣️ "عاوني · نجدة" / "Au secours !"
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Triggers loudest alarm, auto-dials primary caregiver, and dispatches SMS location beacon.
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">Status: 0.42s Dispatch</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-2">
              <div className="text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                2. Medication Intake
              </div>
              <div className="bg-[#0B1120] p-2.5 rounded border border-[#263244] text-[11px] text-[#F8FAFC]">
                🗣️ "ذكرني ناكل الدوا متاعي"
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Logs Doliprane 1000mg for 20:00 (Evening slot). High-contrast visual reminder scheduled.
              </div>
              <div className="text-[10px] text-[#38BDF8] font-mono">TTS: Spoken in Tunisian Arabic</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-blue-500/30 space-y-2">
              <div className="text-[10px] text-[#38BDF8] font-bold uppercase flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5" />
                3. Loved-Ones Calling
              </div>
              <div className="bg-[#0B1120] p-2.5 rounded border border-[#263244] text-[11px] text-[#F8FAFC]">
                🗣️ "عيطلي لـ Mohamed"
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Entity parser extracts 'Mohamed', resolves contact ID from SQLite, and triggers browser dialer.
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">Direct Voice Routing</div>
            </div>
          </div>

          {/* Simulated Speech Synthesis Feedback */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="text-[10px] text-[#94A3B8] uppercase font-bold flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              Live Speech Feedback (Client Web Speech API):
            </div>
            <div className="bg-[#0B1120] border border-[#263244] p-3 rounded-lg text-xs leading-relaxed text-[#F8FAFC]">
              🔊 <em>"حاضر، سجلتلك تذكير الدواء متاعك الليلة مع الثمانية متع الليل."</em>
              <span className="block text-[10px] text-[#94A3B8] mt-1 font-mono">
                [Audio: 16kHz mono WebM → Whisper STT → Intent: MEDICATION_ADD → SQLite Commit]
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'flutter-ecommerce') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">flutter-shop-uikit // Device Viewport</span>
            </div>
            <span className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#02569B] animate-pulse" />
              Flutter 3.x · 60 FPS
            </span>
          </div>

          {/* Modular Architecture Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                Discovery & Catalog
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Dynamic promotional carousels, flash sales countdown timers, category pills, and search autocomplete.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">Shimmer Skeletons Active</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                Cart & Checkout Flow
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Multi-step checkout with address picker, coupon validation, virtual wallet balance, and payment gateway selection.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">Animated Transitions</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                Order Tracking & Wallet
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Live delivery status pipeline, return policy bottom sheet, customer review ratings, and transaction histories.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">Decoupled DTO Models</div>
            </div>
          </div>

          {/* Screen Architecture Specs */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Design System & Codebase Architecture:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[10px]">
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <span className="text-[#94A3B8] block text-[9px]">Typography</span> Plus Jakarta Sans
              </div>
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <span className="text-[#94A3B8] block text-[9px]">Routing</span> Named Routes
              </div>
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <span className="text-[#94A3B8] block text-[9px]">Screen Count</span> 20+ Production Views
              </div>
              <div className="p-2 rounded bg-[#0B1120] border border-[#263244]">
                <span className="text-[#94A3B8] block text-[9px]">Target</span> Android & iOS
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'hand-detectors') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">mediapipe-gesture-studio // Vision Pipeline</span>
            </div>
            <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              60 FPS · EMA Smoothed
            </span>
          </div>

          {/* Interactive Vision Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                1. Neon Hand Tracker
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                21 3D landmarks per hand rendered with Gaussian neon bloom, particle physics trails, and real-time handedness detection.
              </p>
              <div className="text-[10px] text-cyan-400 font-mono">hand_detector.py · EMA 0.85</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#A855F7] uppercase flex items-center gap-1.5">
                <Hand className="w-3.5 h-3.5" />
                2. Air Studio Pro
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                3D air canvas allowing in-air drawing. Stroke width (4–30px) modulates dynamically based on wrist-to-palm distance.
              </p>
              <div className="text-[10px] text-[#A855F7] font-mono">air_writing.py · PNG Export</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                3. Game AI Studio
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Rock-Paper-Scissors-Lizard-Spock with Markov predictive engine analyzing user gesture history with pyttsx3 speech commentary.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">rock_paper_scissors.py</div>
            </div>
          </div>

          {/* Vision Telemetry Trace */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Real-Time Landmark Telemetry Trace:</div>
            <div className="bg-[#0B1120] border border-[#263244] p-2.5 rounded font-mono text-[11px] text-[#F8FAFC]">
              <span className="text-cyan-400">&gt; MediaPipe: </span>
              21 Keypoints Identified | Hand: Right | Tip(Index): (x=482, y=214, z=-0.042) | Gesture: [DRAWING] | Brush: 18px #00FFFF
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'university-absence') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">university-absence-os // Session Management</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              RBAC Enabled (3 Portals)
            </span>
          </div>

          {/* 3 Role Portals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Administrator Portal
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Full governance of student enrollments, faculty credentials, academic modules, department programs, and global analytics.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">Role: admin (Full CRUD)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <ClipboardCheck className="w-3.5 h-3.5" />
                Professor Portal
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Schedule Cours, TD, or TP sessions. One-click batch roll-call marking presence, absence, and justification motifs.
              </p>
              <div className="text-[10px] text-[#38BDF8] font-mono">Role: professeur (Roll-Call)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
              <div className="text-[11px] font-bold text-[#38BDF8] uppercase flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Student Dashboard
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Real-time personal attendance tracking, module absence ratios, medical justification status, and elimination warnings.
              </p>
              <div className="text-[10px] text-emerald-400 font-mono">Role: etudiant (Attendance: 94.2%)</div>
            </div>
          </div>

          {/* Live Roll-Call Register Simulator */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#38BDF8] font-bold uppercase">
                Active Session: Génie Logiciel · Architecture Logicielle (TD #04)
              </span>
              <span className="text-emerald-400 font-bold">Class Roster: 24/25 Present</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-sans text-xs">
              <div className="p-2.5 rounded bg-[#0B1120] border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#F8FAFC]">Yassine Ben Amor</div>
                  <div className="text-[10px] font-mono text-[#94A3B8]">ID: U00014</div>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-bold">✔ Present</span>
              </div>
              <div className="p-2.5 rounded bg-[#0B1120] border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#F8FAFC]">Sarra Mansour</div>
                  <div className="text-[10px] font-mono text-[#94A3B8]">ID: U00028 · Motif: Medical Cert</div>
                </div>
                <span className="text-amber-400 font-mono text-[11px] font-bold">Justified ⏳</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'attt-mobile') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">attt-reservation // Mobile App Stepper</span>
            </div>
            <span className="text-[#22C55E] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1A56A0] animate-pulse" />
              Figma Parity · Mobile 390px
            </span>
          </div>

          {/* Stepper Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-6 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] text-[#38BDF8] font-bold">1. ACCUEIL</div>
              <div className="text-xs font-bold text-[#F8FAFC]">Prendre un RDV</div>
              <div className="text-[10px] text-[#94A3B8] font-sans">Plate lookup trigger</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] text-[#38BDF8] font-bold">2. SERVICE</div>
              <div className="text-xs font-bold text-[#F8FAFC]">Visite Périodique</div>
              <div className="text-[10px] text-emerald-400 font-sans">Tarif: 35.000 TND</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
              <div className="text-[10px] text-[#38BDF8] font-bold">3. FORMULAIRE</div>
              <div className="text-xs font-bold text-[#F8FAFC]">Données Propriétaire</div>
              <div className="text-[10px] text-[#94A3B8] font-sans">Validation en temps réel</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-1">
              <div className="text-[10px] text-emerald-400 font-bold">4. CONFIRMATION</div>
              <div className="text-xs font-bold text-emerald-400">Reçu & Code Barre</div>
              <div className="text-[10px] text-[#F8FAFC] font-sans">Centre Sfax Sud</div>
            </div>
          </div>

          {/* Mobile Booking Confirmation Card */}
          <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
            <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Digital Reservation Receipt Summary:</div>
            <div className="bg-[#0B1120] border border-[#263244] p-3 rounded-lg font-sans text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-bold text-[#F8FAFC] text-sm">Rendez-Vous Confirmé #ATTT-2026-8942</div>
                <div className="text-[#94A3B8] text-xs mt-0.5">
                  Véhicule: <strong className="text-[#38BDF8] font-mono">234 تونس 8912</strong> · Date: <strong>18 Septembre 2026 à 09:30</strong>
                </div>
              </div>
              <div className="bg-[#1A56A0] text-white px-3 py-1.5 rounded-md font-mono text-xs font-bold shrink-0 self-start sm:self-auto">
                Centre: Sfax Sud
              </div>
            </div>
          </div>
        </div>
      );
    }

    // SupportAi
    return (
      <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#263244] text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[#94A3B8] ml-2">supportai-graphrag // Hybrid Retrieval Pipeline</span>
          </div>
          <span className="text-emerald-400 font-semibold">Zero-Hallucination Grounded</span>
        </div>

        {/* GraphRAG Traversal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[11px] font-bold text-[#38BDF8] uppercase">1. Dense Vector Search</div>
            <p className="text-xs text-[#94A3B8] font-sans">
              Cosine similarity over 1536-dim embeddings stored in <strong>pgvector</strong> with HNSW index.
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">Top-k: 5 Chunks (0.89 sim)</div>
          </div>

          <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[11px] font-bold text-[#38BDF8] uppercase">2. Knowledge Graph Traversal</div>
            <p className="text-xs text-[#94A3B8] font-sans">
              Multi-hop Cypher queries across <strong>Neo4j</strong> entity relations to connect indirect corporate facts.
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">2-Hop Expansion Verified</div>
          </div>

          <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[11px] font-bold text-[#38BDF8] uppercase">3. Grounded Synthesis</div>
            <p className="text-xs text-[#94A3B8] font-sans">
              Context-checked prompt with explicit inline source citations [Doc #12, Graph Rel: Subsidiary].
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">Real-time SSE Streaming</div>
          </div>
        </div>

        {/* Live Query Verification Console */}
        <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
          <div className="text-[10px] text-[#94A3B8] uppercase font-bold">Query Execution Trace:</div>
          <div className="bg-[#0B1120] border border-[#263244] p-2.5 rounded font-mono text-[11px] text-[#F8FAFC]">
            <span className="text-[#38BDF8]">$ </span>
            supportai.query("What compliance policy governs customer data retention in European operations?")
          </div>
          <div className="text-[#94A3B8] font-sans text-xs leading-relaxed pt-1">
            "According to GDPR Section 4.2 <span className="text-[#38BDF8] font-mono">[Ref: Policy-EU-2024]</span> and related Data Processing Agreement <span className="text-[#38BDF8] font-mono">[Node: DPA-EU]</span>, customer records are retained for exactly 36 months post-contract expiration."
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
      className="min-h-screen bg-[#0B1120] text-[#F8FAFC] font-sans pb-24"
    >
      
      {/* Top Single-Page Navigation */}
      <header className="sticky top-0 z-40 bg-[#0B1120]/85 backdrop-blur-md border-b border-[#263244] py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] px-2.5 py-1.5 rounded-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
              <span>Back to all projects</span>
            </button>
            <span className="hidden sm:inline-block text-[#263244] font-mono text-sm">/</span>
            <span className="hidden sm:inline-block font-mono text-xs text-[#38BDF8] bg-[#3B82F6]/15 px-2 py-0.5 rounded border border-[#3B82F6]/30 font-semibold">
              /{project.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyUrl}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#172033] hover:bg-[#1e2a42] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              title="Share Project URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>

            <a
              href={project.demoUrl || project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-1.5 rounded-md bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
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
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#3B82F6]/15 text-[#38BDF8] border border-[#3B82F6]/30 font-bold">
            {project.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#172033] text-[#94A3B8] border border-[#263244]">
            {project.contextNote}
          </span>
        </motion.div>

        {/* Big Commanding Title */}
        <motion.h1 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight font-sans mb-4 leading-[1.1]">
          {project.title}
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-sans leading-relaxed mb-8">
          {project.tagline}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div variants={fadeInUp(0.5, 20)} className="flex flex-wrap items-center justify-center gap-3">
          {project.id === 'autoreply' && (
            <a
              href="https://autoreply.online/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] shadow-lg shadow-[#3B82F6]/20 font-sans"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit autoreply.online ↗</span>
            </a>
          )}

          <a
            href={project.demoUrl || project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${project.id === 'autoreply' ? 'bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] border border-[#263244]' : 'bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/20'} font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] font-sans`}
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Request Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] font-bold text-sm border border-[#263244] transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] font-sans"
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
          <div className="p-6 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-2">
            <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
              The Real Friction
            </div>
            <h3 className="text-base font-bold text-[#F8FAFC] font-sans">The Core Problem</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-2">
            <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
              Engineered Solution
            </div>
            <h3 className="text-base font-bold text-[#F8FAFC] font-sans">How I Solved It</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* 2. What I Built (Exact Checklist) */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-5">
          <div className="border-b border-[#263244] pb-3">
            <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
              Hands-On Contribution
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-sans mt-0.5">
              What I Built
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.whatIBuilt.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111827] border border-[#263244] hover:border-[#3B82F6]/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F8FAFC] font-sans leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. System Architecture Highlights */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-4">
          <div className="border-b border-[#263244] pb-3">
            <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
              Engineering Architecture
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-sans mt-0.5">
              System Design & Data Flow
            </h2>
          </div>

          <ul className="space-y-3">
            {project.architectureHighlights.map((point, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Key Architectural Decisions */}
        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-5">
            <div className="border-b border-[#263244] pb-3">
              <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                Rationale & Tradeoffs
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-sans mt-0.5">
                Key Technical Decisions
              </h2>
            </div>

            <div className="space-y-4">
              {project.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#111827] border border-[#263244] space-y-1.5">
                  <h4 className="text-sm font-bold text-[#F8FAFC] font-sans">
                    {dec.decision}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed">
                    {dec.reason}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 5. Production Tech Stack */}
        <motion.div variants={fadeInUp(0.5, 20)} className="p-6 sm:p-8 rounded-xl bg-[#172033] border border-[#263244] shadow-xs space-y-4">
          <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
            Technologies Used in this Project
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-[#111827] text-[#38BDF8] border border-[#263244] text-xs font-mono font-semibold hover:border-[#3B82F6]/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Navigation: Next & Previous Project */}
        <motion.div variants={fadeInUp(0.5, 20)} className="pt-6 border-t border-[#263244] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#172033] hover:bg-[#1e2a42] text-xs font-mono text-[#F8FAFC] border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Previous: <strong>{prevProject.title}</strong></span>
          </button>

          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#3B82F6] text-white font-mono text-xs font-bold hover:bg-[#2563EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <span>All Projects Overview</span>
          </button>

          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#172033] hover:bg-[#1e2a42] text-xs font-mono text-[#F8FAFC] border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <span>Next: <strong>{nextProject.title}</strong></span>
            <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}
