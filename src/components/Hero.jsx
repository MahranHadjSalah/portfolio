import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Copy, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0B1120] bg-tech-grid border-b border-[#263244]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear Builder Positioning */}
          <motion.div 
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >

            {/* Headline with Bold Outline Display Typography */}
            <motion.div variants={fadeInUp(0.5, 20)} className="space-y-3">
              <div className="text-xs font-mono text-[#38BDF8] font-medium tracking-wide uppercase">
                Software Engineering Student · AI & Full-Stack Builder
              </div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F8FAFC] leading-[1.02] font-sans">
                Mahran <span className="text-outline-blue">Hadj Salah</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#94A3B8] leading-snug font-sans max-w-2xl pt-1">
                {portfolioData.personal.shortTagline}
              </h2>
            </motion.div>

            {/* Core Capabilities & Metrics Grid */}
            <motion.div variants={fadeInUp(0.5, 20)} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl pt-1">
              {portfolioData.personal.honestStats.map((stat, sIdx) => (
                <div key={sIdx} className="p-3 rounded-lg bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/50 hover:shadow-xs transition-all">
                  <div className="text-2xl font-black text-[#38BDF8] font-mono tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#F8FAFC] font-sans leading-tight mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#94A3B8] font-mono mt-1">{stat.note}</div>
                </div>
              ))}
            </motion.div>

            {/* High-Converting Action Buttons */}
            <motion.div variants={fadeInUp(0.5, 20)} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#3B82F6] text-white font-semibold text-sm hover:bg-[#2563EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] font-sans shadow-lg shadow-[#3B82F6]/20"
              >
                <span>View Flagship Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] text-sm font-mono border border-[#263244] hover:border-[#3B82F6]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] font-medium"
              >
                <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
                <span>Let's Talk</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] text-sm font-mono border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#172033] hover:bg-[#1e2a42] text-[#94A3B8] hover:text-[#F8FAFC] text-xs font-mono border border-[#263244] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#38BDF8]" /> : <Copy className="w-4 h-4 text-[#94A3B8]" />}
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
              </button>
            </motion.div>

            {/* Internship Target Pill */}
            <motion.div variants={fadeInUp(0.5, 15)} className="pt-2 text-xs font-mono text-[#94A3B8] flex flex-wrap items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="font-semibold text-[#F8FAFC]">Targeting:</span>
              <span>{portfolioData.whatImLookingFor.opportunities.join(" · ")}</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Circular Portrait Image */}
          <motion.div 
            variants={scaleIn(0.6, 0.95)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#3B82F6]/30 via-[#38BDF8]/20 to-transparent blur-xl pointer-events-none" />

              {/* Decorative Tech Ring */}
              <div className="relative p-2 rounded-full border border-[#38BDF8]/30 bg-[#172033]/60 backdrop-blur-xs">
                {/* Circular Portrait */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[#38BDF8]/50 ring-8 ring-[#111827] shadow-2xl shadow-[#3B82F6]/20 bg-[#172033]">
                  <img
                    src="/profile.jpg?v=3"
                    alt="Mahran Hadj Salah"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Status Badge beneath Portrait */}
              <motion.div 
                variants={fadeInUp(0.7, 10)}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#172033] border border-[#263244] shadow-lg text-xs font-mono text-[#F8FAFC]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-[#38BDF8]">Open to Opportunities</span>
                <span className="text-[#94A3B8]">·</span>
                <span className="text-[#94A3B8]">Remote & On-site</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
