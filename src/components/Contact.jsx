import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy, Target, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/motion';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const customMsg = "Hi Mahran, I reviewed your portfolio and would like to discuss an opportunity.";

  const { whatImLookingFor } = portfolioData;
  const recipientEmail = portfolioData.personal.email;
  const whatsappUrl = `https://wa.me/${portfolioData.personal.phoneRaw}?text=${encodeURIComponent(customMsg)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    recipientEmail
  )}&su=${encodeURIComponent('Software Engineering Opportunity')}&body=${encodeURIComponent(customMsg)}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 border-b border-[#263244] relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <motion.div variants={fadeInUp(0.4, 15)} className="text-xs font-mono text-[#38BDF8] font-bold tracking-wider uppercase">
            // 06 · Contact & Inquiries
          </motion.div>
          <motion.h2 variants={fadeInUp(0.5, 20)} className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-sans">
            Let's build something.
          </motion.h2>
          <motion.p variants={fadeInUp(0.5, 20)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans">
            I'm currently seeking engineering opportunities where I can solve real friction, architect scalable backends, and build intelligent software products.
          </motion.p>
        </motion.div>

        {/* What I'm Looking For (Conversion Box) */}
        <motion.div 
          variants={scaleIn(0.5, 0.98)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="p-6 sm:p-7 rounded-xl bg-[#172033] border border-[#263244] shadow-xs mb-10 max-w-4xl space-y-3.5"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>{whatImLookingFor.title}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {whatImLookingFor.opportunities.map((opp, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-lg bg-[#0B1120] border border-[#263244] text-xs font-mono text-[#F8FAFC] font-semibold flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>{opp}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] font-sans pt-1">
            {whatImLookingFor.note}
          </p>
        </motion.div>

        {/* 4 Primary Channel Cards - Disciplined & Quiet */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          
          {/* WhatsApp Direct */}
          <motion.a
            variants={fadeInUp(0.5, 20)}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-xl bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/60 hover:shadow-lg transition-all flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8] font-semibold">Instant</span>
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-1 font-sans">WhatsApp</h3>
              <p className="text-xs text-[#94A3B8] font-sans">
                Direct messaging and real-time project discussions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#263244] text-xs font-mono text-[#38BDF8] font-semibold">
              wa.me/{portfolioData.personal.phoneRaw}
            </div>
          </motion.a>

          {/* Email */}
          <motion.div 
            variants={fadeInUp(0.5, 20)}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="p-5 sm:p-6 rounded-xl bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/60 hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#263244] flex items-center justify-center text-[#F8FAFC] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={copyEmail}
                  className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#38BDF8] px-2 py-0.5 rounded bg-[#0B1120] border border-[#263244]"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-1 font-sans">Email</h3>
              <a 
                href={gmailWebUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#38BDF8] hover:underline break-all focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                {recipientEmail}
              </a>
            </div>

            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-4 mt-4 border-t border-[#263244] text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              Compose in Gmail ↗
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            variants={fadeInUp(0.5, 20)}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-xl bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/60 hover:shadow-lg transition-all flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#263244] flex items-center justify-center text-[#F8FAFC] group-hover:text-[#38BDF8] group-hover:scale-105 transition-all">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#94A3B8]">Network</span>
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-1 font-sans">LinkedIn</h3>
              <p className="text-xs text-[#94A3B8] font-sans">
                Professional network and background verification.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#263244] text-xs font-mono text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors">
              in/mahran-hadj-salah ↗
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={fadeInUp(0.5, 20)}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-5 sm:p-6 rounded-xl bg-[#172033] border border-[#263244] hover:border-[#3B82F6]/60 hover:shadow-lg transition-all flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#263244] flex items-center justify-center text-[#F8FAFC] group-hover:text-[#38BDF8] group-hover:scale-105 transition-all">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-[#94A3B8]">Code</span>
              </div>

              <h3 className="text-base font-bold text-[#F8FAFC] mb-1 font-sans">GitHub</h3>
              <p className="text-xs text-[#94A3B8] font-sans">
                Open repositories, production code, and architecture.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#263244] text-xs font-mono text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors">
              github.com/MahranHadjSalah ↗
            </div>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
