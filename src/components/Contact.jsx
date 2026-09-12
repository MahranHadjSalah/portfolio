import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const customMsg = "Hi Mahran, I reviewed your portfolio and would like to discuss an opportunity.";

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
    <section id="contact" className="py-24 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0F766E] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-sm bg-[#0F766E]" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Let's build something.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
            I'm currently open to software engineering internships, commercial AI product builds, and technical collaborations. Reach out via direct WhatsApp chat or email.
          </p>
        </div>

        {/* 4 Primary Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#0F766E]/40 hover:border-[#0F766E] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E] group-hover:scale-110 transition-transform shadow-2xs">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F766E] transition-colors" />
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-1 font-sans">WhatsApp</h3>
              <p className="text-xs text-[#475569] font-sans">
                Direct messaging and real-time project discussions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#0F766E] font-semibold">
              Chat on wa.me ↗
            </div>
          </a>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="text-xs font-mono text-[#475569] hover:text-[#0F172A] flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#0F766E]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-1 font-sans">Email</h3>
              <a 
                href={gmailWebUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#0F766E] hover:underline break-all"
              >
                {recipientEmail}
              </a>
            </div>

            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-4 mt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#475569] hover:text-[#0F766E] flex items-center justify-between"
            >
              <span>Compose in Gmail</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] group-hover:text-[#0F766E] transition-colors shadow-2xs">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F766E] transition-colors" />
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-1 font-sans">LinkedIn</h3>
              <p className="text-xs text-[#475569] font-sans">
                Professional network and background verification.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#475569] group-hover:text-[#0F766E]">
              View Profile ↗
            </div>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] group-hover:text-[#0F766E] transition-colors shadow-2xs">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F766E] transition-colors" />
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-1 font-sans">GitHub</h3>
              <p className="text-xs text-[#475569] font-sans">
                Open repositories, production code, and experiments.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#475569] group-hover:text-[#0F766E]">
              View Code Repos ↗
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
