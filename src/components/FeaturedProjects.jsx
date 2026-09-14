import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Calendar, Network, Sparkles, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

export default function FeaturedProjects({ onOpenProject }) {
  // High-fidelity, realistic visual preview mockups for each project
  const renderCardPreview = (project) => {
    // 1. Flutter E-Commerce (Twin Smartphone Mockups: Discovery & Cart)
    if (project.id === 'flutter-ecommerce') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#111C38]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 relative z-10 scale-[0.92] sm:scale-100 group-hover:scale-[1.02] transition-transform duration-300">
            {/* Phone 1: Discovery Screen */}
            <div className="w-[120px] sm:w-[140px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-[20px] border-[2.5px] border-[#334155] shadow-2xl overflow-hidden flex flex-col relative shrink-0">
              <div className="w-10 h-2 bg-black rounded-full mx-auto mt-1 mb-0.5" />
              <div className="flex justify-between items-center px-2.5 text-[7px] text-[#94A3B8] font-mono">
                <span>9:41</span>
                <span>● 5G</span>
              </div>
              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[8px] font-bold text-[#F8FAFC]">
                    <span>Discover</span>
                    <span className="text-[#38BDF8]">🔍</span>
                  </div>
                  <div className="flex gap-1 mt-1 text-[6px] font-mono">
                    <span className="bg-[#3B82F6] text-white px-1.5 py-0.5 rounded">All</span>
                    <span className="bg-[#1E293B] text-[#94A3B8] px-1.5 py-0.5 rounded">Shoes</span>
                    <span className="bg-[#1E293B] text-[#94A3B8] px-1.5 py-0.5 rounded">Hoodie</span>
                  </div>
                  <div className="mt-1.5 bg-[#172033] rounded-lg p-1.5 border border-[#263244]">
                    <div className="h-10 rounded bg-gradient-to-tr from-[#1E293B] to-[#334155] flex items-center justify-center text-base">
                      👟
                    </div>
                    <div className="mt-1 flex justify-between items-center text-[7px]">
                      <span className="font-bold text-[#F8FAFC] truncate">Air Jordan 1</span>
                      <span className="text-[#38BDF8] font-mono">$140</span>
                    </div>
                    <div className="text-[6px] text-amber-400">★★★★★ 4.9</div>
                  </div>
                </div>
                <div className="pt-1 border-t border-[#1E293B] flex justify-around text-[8px] text-[#94A3B8]">
                  <span className="text-[#38BDF8]">⌂</span>
                  <span>♡</span>
                  <span>🛍</span>
                  <span>👤</span>
                </div>
              </div>
            </div>

            {/* Phone 2: Cart & Checkout Screen */}
            <div className="w-[120px] sm:w-[140px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-[20px] border-[2.5px] border-[#334155] shadow-2xl overflow-hidden flex flex-col relative shrink-0 -ml-1 sm:ml-0">
              <div className="w-10 h-2 bg-black rounded-full mx-auto mt-1 mb-0.5" />
              <div className="flex justify-between items-center px-2.5 text-[7px] text-[#94A3B8] font-mono">
                <span>9:41</span>
                <span>100%</span>
              </div>
              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[8px] font-bold text-[#F8FAFC]">
                    <span>Cart (2)</span>
                    <span className="text-[#34D399] text-[7px]">Free Ship</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    <div className="p-1 rounded bg-[#172033] border border-[#263244] flex items-center gap-1 text-[7px]">
                      <span className="w-4 h-4 rounded bg-[#1E293B] flex items-center justify-center text-[8px]">👟</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#F8FAFC] truncate font-bold text-[6.5px]">Air Jordan</div>
                        <div className="text-[#94A3B8] text-[6px] font-mono">$140.00</div>
                      </div>
                    </div>
                    <div className="p-1 rounded bg-[#172033] border border-[#263244] flex items-center gap-1 text-[7px]">
                      <span className="w-4 h-4 rounded bg-[#1E293B] flex items-center justify-center text-[8px]">🧥</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#F8FAFC] truncate font-bold text-[6.5px]">Tech Fleece</div>
                        <div className="text-[#94A3B8] text-[6px] font-mono">$95.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[7px] font-mono border-t border-[#1E293B] pt-0.5">
                    <span className="text-[#94A3B8]">Total:</span>
                    <span className="text-[#F8FAFC] font-bold">$235.00</span>
                  </div>
                  <div className="w-full py-1 bg-[#3B82F6] text-white rounded text-[7px] font-bold text-center">
                    Checkout Now →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. ATTT Mobile Booking (Twin Smartphone: Agency Booking & QR Ticket)
    if (project.id === 'attt-mobile') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#0E1A33]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 relative z-10 scale-[0.92] sm:scale-100 group-hover:scale-[1.02] transition-transform duration-300">
            {/* Phone 1: Service & Plate */}
            <div className="w-[120px] sm:w-[140px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-[20px] border-[2.5px] border-[#334155] shadow-2xl overflow-hidden flex flex-col relative shrink-0">
              <div className="w-10 h-2 bg-black rounded-full mx-auto mt-1 mb-0.5" />
              <div className="flex justify-between items-center px-2.5 text-[7px] text-[#94A3B8] font-mono">
                <span>9:41</span>
                <span>● 4G</span>
              </div>
              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="bg-[#1A56A0] -mx-2 -mt-1 p-1 text-center text-white mb-1.5">
                    <div className="text-[7.5px] font-bold tracking-tight">ATTT Mobile</div>
                    <div className="text-[5px] opacity-80">Rép. Tunisienne</div>
                  </div>
                  <div className="bg-[#111827] border border-[#263244] rounded p-1 text-center font-mono">
                    <span className="text-[5.5px] text-[#94A3B8] block">Immatriculation</span>
                    <span className="text-[7.5px] font-bold text-[#F8FAFC] tracking-wider">198 تونس 4520</span>
                  </div>
                  <div className="mt-1 bg-[#172033] rounded p-1 border border-[#3B82F6]/50 text-[6.5px]">
                    <span className="text-[#38BDF8] font-bold block">Visite Technique</span>
                    <span className="text-[#94A3B8] text-[5.5px]">Ariana Charguia II</span>
                  </div>
                </div>
                <div className="bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] text-[6.5px] font-medium py-0.5 rounded text-center">
                  18 Oct · 09:30 ✓
                </div>
              </div>
            </div>

            {/* Phone 2: Digital Ticket & QR Code */}
            <div className="w-[120px] sm:w-[140px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-[20px] border-[2.5px] border-[#334155] shadow-2xl overflow-hidden flex flex-col relative shrink-0 -ml-1 sm:ml-0">
              <div className="w-10 h-2 bg-black rounded-full mx-auto mt-1 mb-0.5" />
              <div className="flex justify-between items-center px-2.5 text-[7px] text-[#94A3B8] font-mono">
                <span>9:41</span>
                <span>100%</span>
              </div>
              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[7.5px] font-bold text-[#F8FAFC] text-center mb-1">
                    Ticket Numérique
                  </div>
                  <div className="w-14 h-14 mx-auto bg-white p-1 rounded-md flex flex-col justify-between shadow-sm">
                    <div className="grid grid-cols-4 gap-0.5 h-full">
                      {[1,1,0,1, 1,0,1,1, 0,1,0,1, 1,1,1,0].map((v, i) => (
                        <div key={i} className={`rounded-[1px] ${v ? 'bg-black' : 'bg-white'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-1 font-mono text-[6px] text-[#94A3B8]">
                    ID: #ATTT-94819
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="bg-[#172033] p-1 rounded text-[6px] text-[#94A3B8] flex justify-between">
                    <span>Payé en ligne:</span>
                    <span className="text-[#34D399] font-bold">35 DT ✓</span>
                  </div>
                  <div className="w-full py-0.5 bg-[#1A56A0] text-white rounded text-[6.5px] font-bold text-center">
                    Télécharger PDF ↗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 3. SeniorVoice (Voice Smartphone with Waveform & Bilingual Bubbles)
    if (project.id === 'senior-voice') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#141A2E]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="w-[190px] sm:w-[220px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-[22px] border-[2.5px] border-[#334155] shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5" />
            <div className="flex justify-between items-center px-3 text-[7px] text-[#94A3B8] font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SeniorVoice</span>
              </span>
              <span>Darija / FR</span>
            </div>

            <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-between">
              {/* Dynamic Waveform */}
              <div className="bg-[#111827] rounded-lg p-2 border border-[#263244] flex items-center justify-center gap-1 h-11">
                {[14, 26, 36, 18, 30, 16, 26, 12].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-1 rounded-full bg-gradient-to-t from-[#3B82F6] to-[#38BDF8]"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              {/* Chat Speech Bubbles */}
              <div className="space-y-1 text-[7px]">
                <div className="bg-[#1E293B] text-[#F8FAFC] p-1.5 rounded-lg rounded-bl-none border border-[#334155] text-right">
                  "عاوني نحب نكلم ولدي محمد"
                </div>
                <div className="bg-[#3B82F6]/20 text-[#38BDF8] p-1.5 rounded-lg rounded-br-none border border-[#3B82F6]/40 flex items-center gap-1">
                  <span>📞</span>
                  <span className="truncate">"Appel vers Mohamed... ⚡"</span>
                </div>
              </div>

              {/* Accessibility Actions */}
              <div className="grid grid-cols-2 gap-1.5 text-[7px] font-bold">
                <div className="bg-red-500/20 text-red-400 border border-red-500/40 p-1 rounded-lg text-center flex items-center justify-center gap-1">
                  <span>🚨</span>
                  <span>SOS Urgence</span>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 p-1 rounded-lg text-center flex items-center justify-center gap-1">
                  <span>💊</span>
                  <span>Doliprane 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 4. Smart Finance Analyzer (Bloomberg/Stripe Style Analytics Window)
    if (project.id === 'smart-finance-analyzer') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#0D1C33]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-xl border border-[#334155] shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111827] border-b border-[#263244]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-[#1E293B]/70 px-2.5 py-0.5 rounded text-[8px] font-mono text-[#94A3B8]">
                smartfinance.ai/q4-report
              </div>
              <div className="text-[7px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Score: 87/100
              </div>
            </div>

            <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
              {/* 3 Metric Tiles */}
              <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                <div className="bg-[#172033] p-1 rounded border border-[#263244]">
                  <span className="text-[6.5px] text-[#94A3B8] block">Net Margin</span>
                  <span className="text-[8.5px] font-bold text-emerald-400">+24.8% ↑</span>
                </div>
                <div className="bg-[#172033] p-1 rounded border border-[#263244]">
                  <span className="text-[6.5px] text-[#94A3B8] block">Liquidity</span>
                  <span className="text-[8.5px] font-bold text-[#38BDF8]">2.4x Safe</span>
                </div>
                <div className="bg-[#172033] p-1 rounded border border-[#263244]">
                  <span className="text-[6.5px] text-[#94A3B8] block">Solvency</span>
                  <span className="text-[8.5px] font-bold text-[#F8FAFC]">0.38 Low</span>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-[#111827] rounded p-1.5 border border-[#263244] relative h-14 flex flex-col justify-between">
                <div className="flex justify-between text-[6.5px] font-mono text-[#94A3B8]">
                  <span>Cash Flow Trajectory (Q1-Q4)</span>
                  <span className="text-emerald-400 font-bold">+€420K</span>
                </div>
                <svg className="w-full h-8 overflow-visible" viewBox="0 0 280 35">
                  <defs>
                    <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 30 Q 40 25, 80 20 T 160 14 T 220 15 T 280 4 L 280 35 L 0 35 Z" fill="url(#finGrad)" />
                  <path d="M 0 30 Q 40 25, 80 20 T 160 14 T 220 15 T 280 4" fill="none" stroke="#10B981" strokeWidth="2" />
                  <circle cx="280" cy="4" r="2.5" fill="#34D399" />
                </svg>
              </div>

              {/* AI Insight */}
              <div className="bg-[#172033] px-2 py-1 rounded border border-[#3B82F6]/40 flex items-center gap-1.5 text-[7px] text-[#94A3B8]">
                <span className="text-[#38BDF8] font-bold shrink-0">✨ Gemini AI:</span>
                <span className="text-[#F8FAFC] truncate">Working capital optimized (+18%). 0 bankruptcy signals detected.</span>
              </div>
            </div>
          </div>
        </div>
      );
    }





    // 8. Hand Detectors (MediaPipe Vision Viewfinder HUD with 21-point Hand Skeleton)
    if (project.id === 'hand-detectors') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#050B14] via-[#091524]/90 to-[#050B14] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[205px] bg-[#050B14] rounded-xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
            {/* Viewfinder Corners */}
            <div className="absolute top-1.5 left-1.5 text-cyan-400 text-xs font-mono font-bold leading-none pointer-events-none">┌</div>
            <div className="absolute top-1.5 right-1.5 text-cyan-400 text-xs font-mono font-bold leading-none pointer-events-none">┐</div>
            <div className="absolute bottom-1.5 left-1.5 text-cyan-400 text-xs font-mono font-bold leading-none pointer-events-none">└</div>
            <div className="absolute bottom-1.5 right-1.5 text-cyan-400 text-xs font-mono font-bold leading-none pointer-events-none">┘</div>

            {/* Top HUD */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#08111D] border-b border-cyan-500/30 text-[7.5px] font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>● REC 60 FPS · 1080p</span>
              </span>
              <span className="text-[#38BDF8]">MediaPipe Hands · 21 Pts</span>
            </div>

            {/* Hand Skeleton SVG */}
            <div className="relative flex-1 flex items-center justify-center">
              <svg className="w-48 h-26 overflow-visible" viewBox="0 0 200 115">
                <path d="M 60 40 Q 110 15, 140 35 T 180 50" fill="none" stroke="#C084FC" strokeWidth="2.5" strokeDasharray="3 2" className="opacity-80" />
                
                <line x1="100" y1="105" x2="70" y2="80" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="100" y1="105" x2="90" y2="70" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="100" y1="105" x2="110" y2="70" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="100" y1="105" x2="130" y2="80" stroke="#06B6D4" strokeWidth="1.5" />
                
                <line x1="70" y1="80" x2="55" y2="65" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="55" y1="65" x2="45" y2="50" stroke="#06B6D4" strokeWidth="1.5" />
                
                <line x1="90" y1="70" x2="85" y2="45" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="85" y1="45" x2="80" y2="25" stroke="#06B6D4" strokeWidth="2" />
                
                <line x1="110" y1="70" x2="110" y2="48" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="110" y1="48" x2="110" y2="32" stroke="#06B6D4" strokeWidth="1.5" />
                
                <line x1="130" y1="80" x2="135" y2="60" stroke="#06B6D4" strokeWidth="1.5" />
                <line x1="135" y1="60" x2="140" y2="45" stroke="#06B6D4" strokeWidth="1.5" />

                <circle cx="100" cy="105" r="3" fill="#38BDF8" />
                <circle cx="70" cy="80" r="2.5" fill="#38BDF8" />
                <circle cx="90" cy="70" r="2.5" fill="#38BDF8" />
                <circle cx="110" cy="70" r="2.5" fill="#38BDF8" />
                <circle cx="130" cy="80" r="2.5" fill="#38BDF8" />
                <circle cx="45" cy="50" r="2.5" fill="#38BDF8" />
                <circle cx="110" cy="32" r="2.5" fill="#38BDF8" />
                <circle cx="140" cy="45" r="2.5" fill="#38BDF8" />

                <circle cx="80" cy="25" r="4" fill="#F43F5E" />
                <circle cx="80" cy="25" r="7.5" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              <div className="absolute right-3 top-2 bg-[#08111D]/80 border border-cyan-500/30 p-1 rounded text-[6px] font-mono text-[#94A3B8]">
                <div>X: 80 | Y: 25</div>
                <div className="text-cyan-400 font-bold">Pinch: 8mm</div>
              </div>
            </div>

            <div className="flex justify-between items-center px-3 py-1 bg-[#08111D] border-t border-cyan-500/30 text-[7px] font-mono">
              <span className="text-cyan-400 font-bold">Gesture: AIR_CANVAS_DRAW</span>
              <span className="text-emerald-400 font-bold">Conf: 99.4%</span>
            </div>
          </div>
        </div>
      );
    }

    // 9. University Absence Management (Faculty Portal Attendance Sheet)
    if (project.id === 'university-absence') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#0E1A33]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-xl border border-[#334155] shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111827] border-b border-[#263244]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-[#1E293B]/70 px-2.5 py-0.5 rounded text-[8px] font-mono text-[#94A3B8]">
                portail.universite.tn/absences/gl3
              </div>
              <div className="text-[7px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Taux: 92.3%
              </div>
            </div>

            <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
              <div className="bg-[#111827] p-1 rounded border border-[#263244] flex justify-between items-center text-[7px] font-mono">
                <span className="text-[#F8FAFC] font-bold">GL-3 · Conception Logicielle</span>
                <span className="text-[#38BDF8]">Salle B204</span>
              </div>

              <div className="space-y-1 text-[7px] font-mono">
                <div className="bg-[#172033] p-1 rounded border border-[#263244] flex justify-between items-center">
                  <span className="text-[#F8FAFC]">1. Sarah Ben Ali</span>
                  <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[6.5px] font-bold">
                    Présent ✓
                  </span>
                </div>
                <div className="bg-[#172033] p-1 rounded border border-[#263244] flex justify-between items-center">
                  <span className="text-[#F8FAFC]">2. Mohamed Triki</span>
                  <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[6.5px] font-bold">
                    Présent ✓
                  </span>
                </div>
                <div className="bg-[#172033] p-1 rounded border border-[#263244] flex justify-between items-center">
                  <span className="text-[#F8FAFC]">3. Yassine Mansour</span>
                  <span className="bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded text-[6.5px] font-bold">
                    Absent (Justifié)
                  </span>
                </div>
              </div>

              <div className="bg-[#111827] p-1 rounded border border-[#263244] space-y-1">
                <div className="flex justify-between text-[6.5px] font-mono text-[#94A3B8]">
                  <span>Présence de la séance</span>
                  <span className="text-emerald-400 font-bold">24 / 26 Présents</span>
                </div>
                <div className="w-full bg-[#1E293B] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92.3%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Enterprise AI Platform (LangGraph Multi-Agent Orchestration Cockpit)
    if (project.id === 'enterprise-ai') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0A0F1D] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-xl border border-[#334155] shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111827] border-b border-[#263244]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-[#1E293B]/70 px-2.5 py-0.5 rounded text-[8px] font-mono text-[#94A3B8]">
                enterprise-ai // LangGraph OS
              </div>
              <div className="text-[7px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED
              </div>
            </div>

            <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
              {/* Supervisor & Intent Bar */}
              <div className="bg-[#111827] px-2 py-1 rounded border border-[#263244] text-[7px] font-mono flex justify-between items-center text-[#94A3B8]">
                <div className="flex items-center gap-1">
                  <span className="text-[#38BDF8] font-bold">⚡ Supervisor:</span>
                  <span className="text-[#F8FAFC]">16 Agents Active</span>
                </div>
                <span className="bg-[#3B82F6]/20 text-[#38BDF8] px-1.5 py-0.5 rounded border border-[#3B82F6]/30">
                  StateGraph
                </span>
              </div>

              {/* 4 Multi-Agent Pipeline Steps */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-[#172033] p-1.5 rounded border border-[#263244] space-y-0.5">
                  <div className="flex items-center justify-between text-[6.5px] font-mono">
                    <span className="text-[#94A3B8]">1. Architect & Contract</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div className="text-[7px] font-mono text-[#F8FAFC] truncate">api_contract.py</div>
                </div>

                <div className="bg-[#172033] p-1.5 rounded border border-[#263244] space-y-0.5">
                  <div className="flex items-center justify-between text-[6.5px] font-mono">
                    <span className="text-[#94A3B8]">2. FastAPI & React 18</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                  <div className="text-[7px] font-mono text-[#F8FAFC] truncate">Manifest Batches (42 files)</div>
                </div>

                <div className="bg-[#172033] p-1.5 rounded border border-[#263244] space-y-0.5">
                  <div className="flex items-center justify-between text-[6.5px] font-mono">
                    <span className="text-[#94A3B8]">3. HITL Milestone Gate</span>
                    <span className="text-[#38BDF8] font-bold">Approved</span>
                  </div>
                  <div className="text-[7px] font-mono text-emerald-400 truncate">interrupt() Resumed</div>
                </div>

                <div className="bg-[#172033] p-1.5 rounded border border-emerald-500/30 space-y-0.5">
                  <div className="flex items-center justify-between text-[6.5px] font-mono">
                    <span className="text-[#94A3B8]">4. Static AST & Sandbox</span>
                    <span className="text-emerald-400 font-bold">21/21 Pass</span>
                  </div>
                  <div className="text-[7px] font-mono text-[#34D399] truncate">pytest: 18 passed</div>
                </div>
              </div>

              {/* Bottom Console Bar */}
              <div className="bg-[#111827] px-2 py-1 rounded border border-[#263244] flex justify-between items-center text-[6.5px] text-[#94A3B8] font-mono">
                <span className="text-[#38BDF8] truncate">pgvector HNSW · Tavily · Fact-Checker Citations</span>
                <span className="text-emerald-400 font-bold shrink-0">Docker Healthy</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 10. SupportAi (pgvector + ArcadeDB Hybrid GraphRAG & LiveKit Voice Console)
    return (
      <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0F172A] via-[#0E1C33]/90 to-[#0B1120] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[205px] bg-[#0A0F1D] rounded-xl border border-[#334155] shadow-2xl overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111827] border-b border-[#263244]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="bg-[#1E293B]/70 px-2.5 py-0.5 rounded text-[8px] font-mono text-[#94A3B8]">
              supportai.corp/hybrid-graphrag
            </div>
            <div className="text-[7px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LiveKit WebRTC
            </div>
          </div>

          <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
            <div className="bg-[#111827] px-2 py-1 rounded border border-[#263244] text-[7px] font-mono flex justify-between text-[#94A3B8]">
              <span className="truncate">RRF: 0.6 pgvector + 0.4 ArcadeDB</span>
              <span className="text-[#38BDF8] shrink-0">&lt;50ms Barge-in</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#172033] p-1.5 rounded-lg border border-[#263244] space-y-0.5">
                <span className="text-[6.5px] font-mono text-[#94A3B8] block">Vector Cosine Match</span>
                <div className="bg-[#111827] p-1 rounded text-[6.5px] font-mono">
                  <div className="text-emerald-400 font-bold">Score: 0.941</div>
                  <div className="text-[#94A3B8] truncate">doc: #sec_sla_v4.pdf</div>
                </div>
              </div>

              <div className="bg-[#172033] p-1.5 rounded-lg border border-[#263244] space-y-0.5">
                <span className="text-[6.5px] font-mono text-[#94A3B8] block">ArcadeDB Causal Tree</span>
                <div className="flex items-center justify-between text-[6px] font-mono text-[#F8FAFC] pt-1">
                  <span className="bg-[#3B82F6]/30 border border-[#3B82F6] px-1 rounded truncate max-w-[45px]">Problem</span>
                  <span className="text-[#38BDF8]">→</span>
                  <span className="bg-emerald-500/30 border border-emerald-500 px-1 rounded truncate max-w-[45px]">Solution</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] px-2 py-1 rounded border border-emerald-500/30 flex justify-between items-center text-[6.5px] text-[#94A3B8] font-mono">
              <span className="text-emerald-400 font-bold">✓ Grounded Answer + Jira Escalation</span>
              <span className="text-[#38BDF8]">Piper ONNX TTS</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [activeFilter, setActiveFilter] = React.useState('All');
  const [showAll, setShowAll] = React.useState(false);

  const categories = [
    { id: 'All', label: 'All Projects', count: portfolioData.featuredProjects.length },
    { id: 'AI & ML', label: 'AI & LLM', count: 3 },
    { id: 'Full-Stack SaaS', label: 'Full-Stack SaaS', count: 2 },
    { id: 'Mobile & Vision', label: 'Mobile & Vision', count: 3 }
  ];

  const handleFilterChange = (catId) => {
    setActiveFilter(catId);
    setShowAll(false);
  };

  const filteredProjects = portfolioData.featuredProjects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') return ['supportai', 'enterprise-ai', 'senior-voice'].includes(project.id);
    if (activeFilter === 'Full-Stack SaaS') return ['smart-finance-analyzer', 'university-absence'].includes(project.id);
    if (activeFilter === 'Mobile & Vision') return ['flutter-ecommerce', 'hand-detectors', 'attt-mobile'].includes(project.id);
    return true;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const handleToggleShowAll = (e) => {
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }

    if (!showAll) {
      setShowAll(true);
      // When opening more projects, smoothly scroll to keep user focused on the FIRST newly opened project
      setTimeout(() => {
        const firstMoreEl = document.getElementById('project-card-4');
        if (firstMoreEl) {
          const navOffset = 85;
          const elementPosition = firstMoreEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 60);
    } else {
      setShowAll(false);
      // When collapsing, smoothly bring user back to the bottom of the base projects
      setTimeout(() => {
        const baseEl = document.getElementById('project-card-2') || document.getElementById('project-card-3');
        if (baseEl) {
          const navOffset = 85;
          const elementPosition = baseEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 60);
    }
  };

  return (
    <section id="work" style={{ overflowAnchor: 'none' }} className="py-20 md:py-28 border-b border-[#263244] relative bg-[#0B1120]">
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
              onClick={() => handleFilterChange(cat.id)}
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
          style={{ overflowAnchor: 'none' }}
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${index}`}
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

        {/* Show More / Show Less Toggle Button */}
        {filteredProjects.length > 4 && (
          <div className="mt-10 sm:mt-12 flex justify-center" style={{ overflowAnchor: 'none' }}>
            <button
              onClick={handleToggleShowAll}
              style={{ overflowAnchor: 'none' }}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] hover:text-[#38BDF8] border border-[#263244] hover:border-[#38BDF8]/60 font-mono text-xs sm:text-sm font-bold shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] group cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : `Show More Projects (${filteredProjects.length - 4} more)`}</span>
              <ChevronDown className={`w-4 h-4 text-[#38BDF8] transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
