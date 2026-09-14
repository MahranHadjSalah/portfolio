import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768
    );
  });

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="py-14 bg-[#0B1120] border-t border-[#263244] text-xs font-mono text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#263244]">
          
          {/* Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F8FAFC] tracking-wider text-sm">MAHRAN.DEV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            </div>
            <div className="text-[#94A3B8]">
              Software Engineering Student · ISIMS (Université de Sfax)
            </div>
            <div className="flex items-center gap-1.5 text-[#94A3B8] text-[11px]">
              <MapPin className="w-3 h-3 text-[#38BDF8]" />
              <span>Sfax, Tunisia · Open to Remote (Worldwide) & Hybrid</span>
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
              >
                GitHub
              </a>
              <span className="text-[#263244]">/</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#263244]">/</span>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-[#263244]">/</span>
              <a
                href={
                  isMobile
                    ? `mailto:${portfolioData.personal.email}`
                    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        portfolioData.personal.email
                      )}`
                }
                target={isMobile ? undefined : "_blank"}
                rel={isMobile ? undefined : "noreferrer"}
                className="hover:text-[#38BDF8] transition-colors"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#94A3B8]/70">
          <div>
            &copy; {new Date().getFullYear()} Mahran Hadj Salah. All rights reserved.
          </div>
          <div>
            Engineered with React 18, Vite, & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
}
