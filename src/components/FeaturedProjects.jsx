import React from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Calendar, Network, Sparkles, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/motion';

// Master 3D rendered preview images for flagship projects
const PROJECT_PREVIEW_IMAGES = {
  'supportai': '/projects/supportai/preview.jpg',
  'enterprise-ai': '/projects/enterprise-ai/preview.jpg',
  'smart-finance-analyzer': '/projects/smart-finance/preview.jpg',
};

export default function FeaturedProjects({ onOpenProject }) {
  // High-fidelity, modern visual preview mockups for each project
  const renderCardPreview = (project) => {
    // Flagship Projects with Master 3D Rendered Images
    if (PROJECT_PREVIEW_IMAGES[project.id]) {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-[#0A0F1D] relative overflow-hidden flex items-center justify-center border-b border-[#263244] select-none group/img">
          <img
            src={PROJECT_PREVIEW_IMAGES[project.id]}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#38BDF8] font-bold shadow-lg pointer-events-none flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>{project.badge.split('·')[0].trim()}</span>
          </div>
        </div>
      );
    }

    // 1. Flutter E-Commerce (Twin Flagship Smartphone Mockups: Clean Storefront & Checkout)
    if (project.id === 'flutter-ecommerce') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0A0F1D] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#38BDF8] font-bold shadow-lg pointer-events-none flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Mobile UI Kit</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 sm:gap-4 relative z-10 scale-[0.92] sm:scale-100 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
            {/* Phone 1: Clean White Discovery Screen */}
            <div className="w-[125px] sm:w-[145px] h-[185px] sm:h-[210px] bg-white text-slate-900 rounded-[22px] border-[3px] border-[#334155] shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative shrink-0">
              <div className="w-11 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5 shrink-0" />
              
              <div className="flex justify-between items-center px-3 text-[7.5px] text-slate-500 font-semibold shrink-0">
                <span>9:41</span>
                <span className="text-[6.5px]">5G 100%</span>
              </div>

              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex justify-between items-center text-[9px] font-extrabold text-slate-900">
                    <span>Discover</span>
                    <span className="text-blue-600 text-[10px]">🔍</span>
                  </div>
                  <div className="flex gap-1 mt-1 text-[6.5px] font-semibold">
                    <span className="bg-slate-900 text-white px-1.5 py-0.5 rounded-full">All</span>
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">Shoes</span>
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">Hoodies</span>
                  </div>
                  <div className="mt-1.5 bg-slate-50 rounded-xl p-1.5 border border-slate-200/80 shadow-sm">
                    <div className="h-11 rounded-lg bg-gradient-to-tr from-blue-50 to-indigo-100/80 flex items-center justify-center text-xl">
                      👟
                    </div>
                    <div className="mt-1 flex justify-between items-center text-[7.5px]">
                      <span className="font-bold text-slate-900 truncate">Air Max 270</span>
                      <span className="text-blue-600 font-extrabold font-mono">$140</span>
                    </div>
                    <div className="text-[6.5px] text-amber-500 font-bold">★★★★★ 4.9</div>
                  </div>
                </div>

                <div className="pt-1 border-t border-slate-100 flex justify-around text-[9px] text-slate-400">
                  <span className="text-blue-600 font-bold">⌂</span>
                  <span>♡</span>
                  <span>🛍</span>
                  <span>👤</span>
                </div>
              </div>
            </div>

            {/* Phone 2: Clean White Cart & Checkout Screen */}
            <div className="w-[125px] sm:w-[145px] h-[185px] sm:h-[210px] bg-white text-slate-900 rounded-[22px] border-[3px] border-[#334155] shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative shrink-0 -ml-2 sm:ml-0">
              <div className="w-11 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5 shrink-0" />
              
              <div className="flex justify-between items-center px-3 text-[7.5px] text-slate-500 font-semibold shrink-0">
                <span>9:41</span>
                <span className="text-emerald-600 font-bold text-[6.5px]">Free Ship</span>
              </div>

              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex justify-between items-center text-[9px] font-extrabold text-slate-900">
                    <span>My Cart</span>
                    <span className="bg-blue-100 text-blue-700 text-[6.5px] font-bold px-1.5 py-0.5 rounded-full">2 items</span>
                  </div>
                  
                  <div className="space-y-1 mt-1">
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-1.5 text-[7px]">
                      <span className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center text-[10px]">👟</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-slate-900 truncate font-bold text-[7px]">Air Max 270</div>
                        <div className="text-slate-500 text-[6.5px] font-mono">$140.00</div>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center gap-1.5 text-[7px]">
                      <span className="w-5 h-5 rounded-md bg-purple-50 flex items-center justify-center text-[10px]">🧥</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-slate-900 truncate font-bold text-[7px]">Tech Fleece</div>
                        <div className="text-slate-500 text-[6.5px] font-mono">$95.00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 border-t border-slate-100 pt-1">
                  <div className="flex justify-between text-[7.5px] font-mono">
                    <span className="text-slate-500 font-medium">Total:</span>
                    <span className="text-slate-900 font-extrabold">$235.00</span>
                  </div>
                  <div className="w-full py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[7.5px] font-bold text-center shadow-md shadow-blue-500/20">
                    Checkout Now →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. ATTT Mobile Booking (Twin Smartphone: Agency Portal & QR Ticket)
    if (project.id === 'attt-mobile') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0B1120] via-[#0E1B38] to-[#0A0F1D] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />

          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#38BDF8] font-bold shadow-lg pointer-events-none flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Mobile Web App</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 sm:gap-4 relative z-10 scale-[0.92] sm:scale-100 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
            {/* Phone 1: Reservation & License Plate */}
            <div className="w-[125px] sm:w-[145px] h-[185px] sm:h-[210px] bg-[#0A0F1D] rounded-[22px] border-[3px] border-[#334155] shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative shrink-0">
              <div className="w-11 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5 shrink-0" />
              <div className="bg-[#1E40AF] px-2 py-1.5 text-center text-white shrink-0">
                <div className="text-[8px] font-extrabold tracking-tight">ATTT Mobile</div>
                <div className="text-[5.5px] opacity-85">Agence Technique des Transports Terrestres</div>
              </div>

              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="bg-black border-[1.5px] border-slate-600 rounded-md p-1 text-center shadow-inner">
                    <span className="text-[5.5px] text-slate-400 block font-mono">Immatriculation</span>
                    <span className="text-[8.5px] font-black text-white tracking-widest font-mono">198 تونس 4520</span>
                  </div>

                  <div className="mt-1.5 bg-[#172033] rounded-lg p-1.5 border border-[#3B82F6]/40 text-[7px]">
                    <span className="text-[#38BDF8] font-bold block">Visite Périodique</span>
                    <span className="text-slate-300 text-[6px]">Ariana Charguia II</span>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[7px] font-bold py-1 rounded-lg text-center">
                  18 Octobre · 09:30 ✓
                </div>
              </div>
            </div>

            {/* Phone 2: Digital Ticket & QR Code */}
            <div className="w-[125px] sm:w-[145px] h-[185px] sm:h-[210px] bg-white text-slate-900 rounded-[22px] border-[3px] border-[#334155] shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative shrink-0 -ml-2 sm:ml-0">
              <div className="w-11 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5 shrink-0" />
              
              <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="text-[8.5px] font-extrabold text-slate-900 text-center mb-1">
                    Ticket Numérique
                  </div>
                  
                  <div className="w-16 h-16 mx-auto bg-slate-900 p-1.5 rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-full h-full bg-white p-1 rounded grid grid-cols-5 gap-0.5">
                      {[
                        1,1,1,0,1,
                        1,0,1,1,1,
                        0,1,0,1,0,
                        1,1,0,1,1,
                        1,0,1,0,1
                      ].map((v, i) => (
                        <div key={i} className={`rounded-[0.5px] ${v ? 'bg-black' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-1 font-mono text-[6.5px] text-slate-500 font-semibold">
                    Réf: #ATTT-94819
                  </div>
                </div>

                <div className="space-y-1 border-t border-slate-100 pt-1">
                  <div className="bg-emerald-50 border border-emerald-200 p-1 rounded text-[6.5px] text-emerald-800 flex justify-between font-bold">
                    <span>Payé en ligne:</span>
                    <span>35.000 DT ✓</span>
                  </div>
                  <div className="w-full py-0.5 bg-[#1E40AF] text-white rounded text-[7px] font-bold text-center">
                    Télécharger PDF ↗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 3. SeniorVoice (Accessible Voice Assistant Tablet/Smartphone)
    if (project.id === 'senior-voice') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0B1120] via-[#1A1233] to-[#0A0F1D] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] pointer-events-none" />

          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-purple-400 font-bold shadow-lg pointer-events-none flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Multimodal Voice AI</span>
          </div>

          <div className="w-[200px] sm:w-[230px] h-[185px] sm:h-[210px] bg-[#0A0F1D] rounded-[24px] border-[3px] border-[#475569] shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mt-1 mb-0.5 shrink-0" />

            <div className="flex justify-between items-center px-3 text-[7.5px] text-slate-400 font-mono shrink-0">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SeniorVoice
              </span>
              <span className="text-purple-300 font-semibold">Darija · Français</span>
            </div>

            <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-between overflow-hidden">
              <div className="bg-[#111827] rounded-xl p-2 border border-[#263244] flex items-center justify-center gap-1.5 h-11">
                {[12, 24, 34, 18, 32, 16, 28, 14].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-1.5 rounded-full bg-gradient-to-t from-[#8B5CF6] via-[#A855F7] to-[#38BDF8]"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <div className="space-y-1.5 text-[7.5px]">
                <div className="bg-[#1E293B] text-white p-1.5 rounded-xl rounded-bl-none border border-slate-700 text-right font-medium">
                  "عاوني نحب نكلم ولدي محمد"
                </div>
                <div className="bg-purple-500/20 text-purple-200 p-1.5 rounded-xl rounded-br-none border border-purple-500/40 flex items-center gap-1 font-semibold">
                  <span>📞</span>
                  <span className="truncate">"Appel vers Mohamed en cours... ⚡"</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[7.5px] font-extrabold">
                <div className="bg-red-500/25 text-red-400 border border-red-500/50 p-1.5 rounded-xl text-center flex items-center justify-center gap-1 shadow-sm">
                  <span>🚨</span>
                  <span>SOS Urgence</span>
                </div>
                <div className="bg-emerald-500/25 text-emerald-400 border border-emerald-500/50 p-1.5 rounded-xl text-center flex items-center justify-center gap-1 shadow-sm">
                  <span>💊</span>
                  <span>Doliprane 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 4. Hand Detectors (Real-Time 3D Hand Tracking Viewfinder HUD)
    if (project.id === 'hand-detectors') {
      return (
        <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#050B14] via-[#09182E] to-[#050B14] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.18),transparent_70%)] pointer-events-none" />

          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-cyan-400 font-bold shadow-lg pointer-events-none flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Computer Vision</span>
          </div>

          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[210px] bg-[#050B14] rounded-xl border border-cyan-500/40 shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
            <div className="absolute top-2 left-2 text-cyan-400 text-sm font-mono font-bold leading-none pointer-events-none">┌</div>
            <div className="absolute top-2 right-2 text-cyan-400 text-sm font-mono font-bold leading-none pointer-events-none">┐</div>
            <div className="absolute bottom-2 left-2 text-cyan-400 text-sm font-mono font-bold leading-none pointer-events-none">└</div>
            <div className="absolute bottom-2 right-2 text-cyan-400 text-sm font-mono font-bold leading-none pointer-events-none">┘</div>

            <div className="flex items-center justify-between px-3 py-1.5 bg-[#08111D] border-b border-cyan-500/30 text-[8px] font-mono">
              <span className="flex items-center gap-1.5 text-red-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>● REC 60 FPS · 1080p</span>
              </span>
              <span className="text-[#38BDF8]">MediaPipe Hands · 21 Pts</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <svg className="w-48 h-26 overflow-visible" viewBox="0 0 200 115">
                <path d="M 50 45 Q 100 15, 140 35 T 180 50" fill="none" stroke="#C084FC" strokeWidth="3" strokeDasharray="4 2" className="opacity-90" />
                
                <line x1="100" y1="105" x2="70" y2="80" stroke="#06B6D4" strokeWidth="2" />
                <line x1="100" y1="105" x2="90" y2="70" stroke="#06B6D4" strokeWidth="2" />
                <line x1="100" y1="105" x2="110" y2="70" stroke="#06B6D4" strokeWidth="2" />
                <line x1="100" y1="105" x2="130" y2="80" stroke="#06B6D4" strokeWidth="2" />
                
                <line x1="70" y1="80" x2="55" y2="65" stroke="#06B6D4" strokeWidth="2" />
                <line x1="55" y1="65" x2="45" y2="50" stroke="#06B6D4" strokeWidth="2" />
                
                <line x1="90" y1="70" x2="85" y2="45" stroke="#06B6D4" strokeWidth="2" />
                <line x1="85" y1="45" x2="80" y2="25" stroke="#06B6D4" strokeWidth="2.5" />
                
                <line x1="110" y1="70" x2="110" y2="48" stroke="#06B6D4" strokeWidth="2" />
                <line x1="110" y1="48" x2="110" y2="32" stroke="#06B6D4" strokeWidth="2" />
                
                <line x1="130" y1="80" x2="135" y2="60" stroke="#06B6D4" strokeWidth="2" />
                <line x1="135" y1="60" x2="140" y2="45" stroke="#06B6D4" strokeWidth="2" />

                <circle cx="100" cy="105" r="3.5" fill="#38BDF8" />
                <circle cx="70" cy="80" r="3" fill="#38BDF8" />
                <circle cx="90" cy="70" r="3" fill="#38BDF8" />
                <circle cx="110" cy="70" r="3" fill="#38BDF8" />
                <circle cx="130" cy="80" r="3" fill="#38BDF8" />
                <circle cx="45" cy="50" r="3" fill="#38BDF8" />
                <circle cx="110" cy="32" r="3" fill="#38BDF8" />
                <circle cx="140" cy="45" r="3" fill="#38BDF8" />

                <circle cx="80" cy="25" r="4.5" fill="#F43F5E" />
                <circle cx="80" cy="25" r="8" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>

              <div className="absolute right-3 top-2 bg-[#08111D]/90 border border-cyan-500/40 p-1.5 rounded-lg text-[6.5px] font-mono text-[#94A3B8]">
                <div>X: 80 | Y: 25</div>
                <div className="text-cyan-400 font-bold">Pinch: 8mm</div>
              </div>
            </div>

            <div className="flex justify-between items-center px-3 py-1.5 bg-[#08111D] border-t border-cyan-500/30 text-[7.5px] font-mono">
              <span className="text-cyan-400 font-bold">Gesture: AIR_CANVAS_DRAW</span>
              <span className="text-emerald-400 font-bold">Conf: 99.4%</span>
            </div>
          </div>
        </div>
      );
    }

    // 5. University Absence Management (macOS Browser Attendance Portal)
    return (
      <div className="w-full h-52 sm:h-60 md:h-64 bg-gradient-to-b from-[#0B1120] via-[#0E1A33] to-[#0A0F1D] relative overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#263244] select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#38BDF8] font-bold shadow-lg pointer-events-none flex items-center gap-1.5 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>Web Application</span>
        </div>

        <div className="w-full max-w-[340px] sm:max-w-[380px] h-[185px] sm:h-[210px] bg-[#0A0F1D] rounded-xl border border-[#334155] shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative z-10 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111827] border-b border-[#263244]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="bg-[#1E293B]/70 px-2.5 py-0.5 rounded text-[8px] font-mono text-[#94A3B8]">
              portail.universite.tn/absences/gl3
            </div>
            <div className="text-[7.5px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Taux: 92.3%
            </div>
          </div>

          <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
            <div className="bg-[#111827] p-1 rounded border border-[#263244] flex justify-between items-center text-[7.5px] font-mono">
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
                <span className="bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded text-[6.5px] font-bold">
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
  };

  const [activeFilter, setActiveFilter] = React.useState('All');
  const [showAll, setShowAll] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultCount = isMobile ? 3 : 4;

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

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, defaultCount);

  const isTogglingRef = React.useRef(false);

  const handleToggleShowAll = (e) => {
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
    if (isTogglingRef.current) return;

    const firstMoreIndex = isMobile ? 3 : 4;
    const baseIndex = isMobile ? 2 : 3;

    if (!showAll) {
      isTogglingRef.current = true;
      const startScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

      // 1. Synchronously mount the newly expanded projects
      flushSync(() => {
        setShowAll(true);
      });

      // 2. Keep the viewport locked at the base projects so it doesn't jump to the bottom
      window.scrollTo(0, startScrollY);

      // 3. Normal, natural smooth scroll down to the first newly opened project
      const scrollDown = () => {
        const firstMoreEl = document.getElementById(`project-card-${firstMoreIndex}`);
        if (firstMoreEl) {
          const navOffset = isMobile ? 68 : 85;
          const elementTop = firstMoreEl.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
          const targetY = Math.max(0, elementTop - navOffset);

          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          // Mobile WebKit / Safari fallback if window.scrollTo smooth is inhibited
          if (isMobile) {
            setTimeout(() => {
              const currentY = window.scrollY || window.pageYOffset || 0;
              if (Math.abs(currentY - startScrollY) < 15) {
                firstMoreEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }
        }
        setTimeout(() => {
          isTogglingRef.current = false;
        }, 550);
      };

      // 50ms ensures mobile touch/tap event sequence is fully settled before starting smooth scroll
      setTimeout(scrollDown, 50);
    } else {
      isTogglingRef.current = true;
      // Smoothly scroll back up to base project
      const baseEl = document.getElementById(`project-card-${baseIndex}`) || document.getElementById('project-card-0');
      if (baseEl) {
        const navOffset = isMobile ? 68 : 85;
        const elementTop = baseEl.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
        const targetY = Math.max(0, elementTop - navOffset);

        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });

        if (isMobile) {
          setTimeout(() => {
            const currentY = window.scrollY || window.pageYOffset || 0;
            if (Math.abs(currentY - targetY) > 50) {
              baseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }

      setTimeout(() => {
        setShowAll(false);
        isTogglingRef.current = false;
      }, 450);
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

        {/* 2-Column Showcase Grid */}
        <div 
          style={{ overflowAnchor: 'none' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${index}`}
              initial={index >= defaultCount ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: index >= defaultCount ? 0.2 : 0.35, 
                ease: [0.22, 1, 0.36, 1], 
                delay: index >= defaultCount ? 0 : index * 0.03 
              }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              onClick={() => onOpenProject(project.id)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenProject(project.id); }}
              className="scroll-mt-20 sm:scroll-mt-24 rounded-xl bg-[#172033] border border-[#3B82F6] hover:border-[#38BDF8] overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-[#3B82F6]/15 transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
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
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredProjects.length > defaultCount && (
          <div className="mt-10 sm:mt-12 flex justify-center" style={{ overflowAnchor: 'none' }}>
            <button
              onClick={handleToggleShowAll}
              style={{ overflowAnchor: 'none' }}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-[#172033] hover:bg-[#1e2a42] text-[#F8FAFC] hover:text-[#38BDF8] border border-[#263244] hover:border-[#38BDF8]/60 font-mono text-xs sm:text-sm font-bold shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all focus-visible:ring-2 focus-visible:ring-[#38BDF8] group cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : `Show More Projects (${filteredProjects.length - defaultCount} more)`}</span>
              <ChevronDown className={`w-4 h-4 text-[#38BDF8] transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
