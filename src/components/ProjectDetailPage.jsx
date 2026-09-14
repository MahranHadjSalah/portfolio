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
      case 'enterprise-ai':
        return (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-[#3B82F6]/50 shadow-lg shadow-[#3B82F6]/10 flex items-center justify-center text-[#38BDF8]">
            <Bot className="w-9 h-9 text-[#38BDF8]" />
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

    // Enterprise AI Platform
    if (project.id === 'enterprise-ai') {
      return (
        <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#263244] text-xs gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[#94A3B8] ml-2">enterprise-ai // LangGraph Multi-Agent OS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#38BDF8] bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-2 py-0.5 rounded">
                Checkpointer: AsyncPostgresSaver
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED (Static + Sandbox)
              </span>
            </div>
          </div>

          {/* Interactive Mode Selector */}
          <div className="flex flex-wrap gap-2 pt-6">
            {[
              { id: 0, label: '1. Knowledge Team (6 Agents)' },
              { id: 1, label: '2. Software Team (10 Agents)' },
              { id: 2, label: '3. Static AST Validator (21 Defects)' },
              { id: 3, label: '4. Architecture Blueprints' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSimStep(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  simStep === tab.id
                    ? 'bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/20'
                    : 'bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#263244]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content 0: Knowledge Team Pipeline */}
          {simStep === 0 && (
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-1.5">
                  <div className="text-[10px] text-[#38BDF8] font-bold">1 & 2 · RETRIEVAL & WEB SEARCH</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">pgvector (HNSW) + Tavily</div>
                  <p className="text-[11px] text-[#94A3B8] font-sans">
                    Embeds with text-embedding-3-small. Fallback to Tavily web search only if internal doc chunks &lt; 3.
                  </p>
                  <div className="text-[10px] text-emerald-400">Score: 0.932 cosine similarity</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-1.5">
                  <div className="text-[10px] text-[#38BDF8] font-bold">3 & 4 · SUMMARY & FACT CHECKER</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">Anti-Hallucination Gate</div>
                  <p className="text-[11px] text-[#94A3B8] font-sans">
                    Summarizer condenses multi-source context. Fact Checker rigorously validates every claim against raw chunks.
                  </p>
                  <div className="text-[10px] text-emerald-400">0 ungrounded claims detected</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-1.5">
                  <div className="text-[10px] text-emerald-400 font-bold">5 & 6 · ANSWER & CITATIONS</div>
                  <div className="text-xs font-bold text-emerald-400">Exact Section Footnotes</div>
                  <p className="text-[11px] text-[#94A3B8] font-sans">
                    Binds exact footnote tags with source and section. Pauses for milestone approval when policy requires.
                  </p>
                  <div className="text-[10px] text-[#38BDF8]">HITL Approval: Granted ✓</div>
                </div>
              </div>

              {/* Sample Knowledge Output Trace */}
              <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
                <div className="text-[10px] text-[#94A3B8] uppercase font-bold flex justify-between">
                  <span>Live Grounded Answer Trace:</span>
                  <span className="text-emerald-400">SSE Stream Completed (2.1s)</span>
                </div>
                <div className="bg-[#0B1120] border border-[#263244] p-3 rounded font-sans text-xs text-[#F8FAFC] leading-relaxed">
                  "Under Enterprise SLA Agreement v4.2 <span className="text-[#38BDF8] font-mono">[1] SLA_Tier4.pdf § 3.1</span>, multi-region database failover RTO is guaranteed at <strong>&lt; 15 minutes</strong> with zero data loss (RPO = 0). Employee audit logs are immutably archived for <strong>7 years</strong> in cold storage <span className="text-[#38BDF8] font-mono">[2] Compliance_2026.pdf § 8.4</span>."
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 1: Software Team Pipeline */}
          {simStep === 1 && (
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
                  <div className="text-[10px] text-[#38BDF8] font-bold">1. PM & BA</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">Scope & Milestones</div>
                  <div className="text-[10px] text-[#94A3B8] font-sans">3-6 milestones + user stories checklist</div>
                  <div className="text-[9px] text-emerald-400 font-mono">Milestone Gate: Approved ✓</div>
                </div>

                <div className="p-3 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
                  <div className="text-[10px] text-[#38BDF8] font-bold">2. ARCHITECT</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">ER & API Contract</div>
                  <div className="text-[10px] text-[#94A3B8] font-sans">Binding api_contract.py + schema</div>
                  <div className="text-[9px] text-emerald-400 font-mono">Milestone Gate: Approved ✓</div>
                </div>

                <div className="p-3 rounded-xl bg-[#111827] border border-[#263244] space-y-1">
                  <div className="text-[10px] text-[#38BDF8] font-bold">3. ENGINEERS</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">FastAPI + React 18</div>
                  <div className="text-[10px] text-[#94A3B8] font-sans">TypeScript, Tailwind v4, SQLAlchemy</div>
                  <div className="text-[9px] text-[#38BDF8] font-mono">Manifest batches: 42 files</div>
                </div>

                <div className="p-3 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-1">
                  <div className="text-[10px] text-emerald-400 font-bold">4. QA & SANDBOX</div>
                  <div className="text-xs font-bold text-emerald-400">pytest & Container</div>
                  <div className="text-[10px] text-[#94A3B8] font-sans">Full suite execution in Docker</div>
                  <div className="text-[9px] text-emerald-400 font-mono">18 / 18 tests passing</div>
                </div>
              </div>

              {/* Manifest Batch Breakdown */}
              <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
                <div className="text-[10px] text-[#94A3B8] uppercase font-bold flex justify-between">
                  <span>Batch Execution Progress (42 Files Generated):</span>
                  <span className="text-[#38BDF8]">Token Cost: $0.42 / $50 Cap</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <div className="bg-[#0B1120] p-2 rounded border border-[#263244]">
                    <span className="text-emerald-400">Batch 1: Models</span>
                    <span className="block text-[9px] text-[#94A3B8]">SQLAlchemy & Schemas</span>
                  </div>
                  <div className="bg-[#0B1120] p-2 rounded border border-[#263244]">
                    <span className="text-emerald-400">Batch 2: Endpoints</span>
                    <span className="block text-[9px] text-[#94A3B8]">FastAPI async routes</span>
                  </div>
                  <div className="bg-[#0B1120] p-2 rounded border border-[#263244]">
                    <span className="text-emerald-400">Batch 3: Frontend UI</span>
                    <span className="block text-[9px] text-[#94A3B8]">React 18 + Tailwind v4</span>
                  </div>
                  <div className="bg-[#0B1120] p-2 rounded border border-[#263244]">
                    <span className="text-emerald-400">Batch 4: Test Suites</span>
                    <span className="block text-[9px] text-[#94A3B8]">pytest integration tests</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Static AST Validator */}
          {simStep === 2 && (
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
                  <div className="text-xs font-bold text-[#38BDF8] uppercase flex items-center justify-between">
                    <span>Deterministic Static Validator</span>
                    <span className="text-emerald-400">21 / 21 Pass</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-sans">
                    Non-LLM deterministic checks preventing structural defects before container execution:
                  </p>
                  <ul className="space-y-1 text-[11px] text-[#F8FAFC]">
                    <li className="flex items-center gap-1.5 text-emerald-400">✓ Frontend ↔ Backend contract matching</li>
                    <li className="flex items-center gap-1.5 text-emerald-400">✓ Pydantic v1 vs v2 compatibility validation</li>
                    <li className="flex items-center gap-1.5 text-emerald-400">✓ Foreign key index presence & relational integrity</li>
                    <li className="flex items-center gap-1.5 text-emerald-400">✓ Brand token adherence (zero hardcoded hex codes)</li>
                    <li className="flex items-center gap-1.5 text-emerald-400">✓ Feature checklist coverage check in generated source</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase flex items-center justify-between">
                    <span>Execution Sandbox Gate</span>
                    <span className="text-emerald-400">Container Healthy</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-sans">
                    Isolated runtime container execution for runtime smoke testing:
                  </p>
                  <div className="bg-[#0B1120] p-2.5 rounded font-mono text-[10px] space-y-1 text-[#94A3B8]">
                    <div className="text-emerald-400">$ tsc --noEmit (TypeScript Type Checker)</div>
                    <div className="text-[#F8FAFC]">✓ 0 errors, 0 warnings across 24 TSX files</div>
                    <div className="text-emerald-400 pt-1">$ pytest -v tests/ (Backend Test Suite)</div>
                    <div className="text-[#F8FAFC]">✓ 18 passed, 0 failed in 1.42s</div>
                    <div className="text-emerald-400 pt-1">$ headless-smoke-check</div>
                    <div className="text-[#F8FAFC]">✓ Hydration successful, 0 browser console errors</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Architecture Blueprints */}
          {simStep === 3 && (
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
                  <div className="text-xs font-bold text-[#38BDF8] flex items-center justify-between">
                    <span>System Architecture Flow</span>
                    <span className="text-[10px] text-[#94A3B8]">Three-Tier Multi-Agent Model</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-[#263244] bg-[#0A0F1D]">
                    <img 
                      src="/projects/enterprise-ai/architecture_diagram.png" 
                      alt="System Architecture Diagram" 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
                  <div className="text-xs font-bold text-[#38BDF8] flex items-center justify-between">
                    <span>Platform Blueprint</span>
                    <span className="text-[10px] text-[#94A3B8]">16 Agents & Governance</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-[#263244] bg-[#0A0F1D]">
                    <img 
                      src="/projects/enterprise-ai/enterprise_ai_platform_blueprint.png" 
                      alt="Enterprise AI Platform Blueprint" 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    }

    // SupportAi
    return (
      <div className="bg-[#172033] rounded-2xl p-4 sm:p-8 text-[#F8FAFC] border border-[#263244] font-mono shadow-2xl">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#263244] text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[#94A3B8] ml-2">supportai // Hybrid GraphRAG & WebRTC Voice Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#38BDF8] bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-2 py-0.5 rounded">
              LiveKit SFU :7880
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              RRF: 0.6 Vector + 0.4 ArcadeDB
            </span>
          </div>
        </div>

        {/* 4 Architectural Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-6">
          {/* Pillar 1: Hybrid GraphRAG */}
          <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[10px] font-bold text-[#38BDF8] uppercase flex items-center justify-between">
              <span>1. Hybrid GraphRAG</span>
              <span className="text-emerald-400">RRF Fused</span>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
              Fuses 384-dim <strong>PostgreSQL 18 pgvector</strong> embeddings with <strong>ArcadeDB</strong> causal property graphs (<em>Problem → Cause → Solution</em>).
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">Zero-Hallucination Gate (τ &gt; 0.65)</div>
          </div>

          {/* Pillar 2: Sub-Second WebRTC Voice */}
          <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[10px] font-bold text-[#38BDF8] uppercase flex items-center justify-between">
              <span>2. Sub-Second Voice</span>
              <span className="text-emerald-400">&lt;50ms Barge-In</span>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
              Full-duplex <strong>LiveKit SFU</strong> UDP stream + <strong>Silero VAD</strong> instant barge-in interruption + on-premise <strong>Piper ONNX TTS</strong>.
            </p>
            <div className="text-[10px] text-[#38BDF8] font-mono">Decoupled from HTTP cycle</div>
          </div>

          {/* Pillar 3: Sales FSM & Guardrails */}
          <div className="p-3.5 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
            <div className="text-[10px] font-bold text-[#38BDF8] uppercase flex items-center justify-between">
              <span>3. Sales Intelligence</span>
              <span className="text-emerald-400">Deterministic</span>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
              6-stage FSM (<em>Catalogue → Pitch → Objection → Close</em>) with <strong>regex price guardrails</strong> eliminating hallucinated discounts.
            </p>
            <div className="text-[10px] text-emerald-400 font-mono">100% Price Catalogue Parity</div>
          </div>

          {/* Pillar 4: Jira Sync & GDPR */}
          <div className="p-3.5 rounded-xl bg-[#111827] border border-emerald-500/30 space-y-2">
            <div className="text-[10px] font-bold text-emerald-400 uppercase flex items-center justify-between">
              <span>4. Jira Sync & PII</span>
              <span className="text-emerald-400">GDPR Ready</span>
            </div>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
              Bi-directional <strong>Jira Service Management</strong> escalation with automated NLP PII scrubbing prior to knowledge graph ingestion.
            </p>
            <div className="text-[10px] text-[#38BDF8] font-mono">4-Tier Tenant Isolation</div>
          </div>
        </div>

        {/* Live Query & Audio Synthesis Trace */}
        <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] text-xs space-y-2">
          <div className="text-[10px] text-[#94A3B8] uppercase font-bold flex justify-between">
            <span>Query Execution & Causal Traversal Trace:</span>
            <span className="text-emerald-400">RRF Match: 0.941 (pgvector 0.6 + ArcadeDB 0.4)</span>
          </div>
          <div className="bg-[#0B1120] border border-[#263244] p-2.5 rounded font-mono text-[11px] text-[#F8FAFC]">
            <span className="text-[#38BDF8]">$ </span>
            supportai.pipeline.resolve("Laser head stops oscillating mid-cycle on Model CX-400")
          </div>
          <div className="text-[#94A3B8] font-sans text-xs leading-relaxed pt-1">
            "ArcadeDB traversal: <strong className="text-[#F8FAFC]">CX-400</strong> ──[HAS_ISSUE]──&gt; <strong className="text-[#F8FAFC]">Oscillation Halt</strong> ──[CAUSED_BY]──&gt; <strong className="text-amber-400">Limit Switch Dust Accumulation</strong> ──[RESOLVED_BY]──&gt; <strong className="text-emerald-400">Clean sensor optic with 99% IPA (Procedure § 4.2)</strong>. Synthesized via Piper Neural TTS in 185ms."
          </div>
        </div>

        {/* System Architecture Diagram Preview */}
        <div className="mt-4 p-4 rounded-xl bg-[#111827] border border-[#263244] space-y-2">
          <div className="text-xs font-bold text-[#38BDF8] flex items-center justify-between">
            <span>5-Layer System Topology & Multi-Tenant Hierarchy</span>
            <span className="text-[10px] text-[#94A3B8]">From Official Repository</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg overflow-hidden border border-[#263244] bg-[#0A0F1D]">
              <img 
                src="/projects/supportai/altivox_system_architecture.jpg" 
                alt="SupportAi System Architecture" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#263244] bg-[#0A0F1D]">
              <img 
                src="/projects/supportai/altivox_role_hierarchy_light.jpg" 
                alt="SupportAi Multi-Tenant Hierarchy" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
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

        {/* Primary Action Button */}
        <motion.div variants={fadeInUp(0.5, 20)} className="flex items-center justify-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-sm shadow-xl shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] font-sans group"
          >
            <GithubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>View Repo</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
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
