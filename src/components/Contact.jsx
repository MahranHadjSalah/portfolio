import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Check, Copy, ExternalLink, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    "Hi Mahran, I reviewed your portfolio and would like to discuss an opportunity."
  );

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
    <section id="contact" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-sm bg-emerald-500" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Let's build something.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            I'm currently open to software engineering internships, commercial AI product builds, and technical collaborations. Reach out via email or direct WhatsApp chat.
          </p>
        </div>

        {/* 4 Primary Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/40 border border-emerald-500/30 hover:border-emerald-500/70 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-sans">WhatsApp</h3>
              <p className="text-xs text-zinc-400 font-sans">
                Quick direct messaging and project discussions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 text-xs font-mono text-emerald-400">
              Chat on wa.me ↗
            </div>
          </a>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-sans">Email</h3>
              <a 
                href={gmailWebUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-emerald-300 break-all"
              >
                {recipientEmail}
              </a>
            </div>

            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-4 mt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white flex items-center justify-between"
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
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-750 hover:bg-zinc-900/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-sans">LinkedIn</h3>
              <p className="text-xs text-zinc-400 font-sans">
                Professional connections and background verification.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
              View Profile ↗
            </div>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-750 hover:bg-zinc-900/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-sans">GitHub</h3>
              <p className="text-xs text-zinc-400 font-sans">
                Open repositories, commits, and experiments.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
              View Code Repos ↗
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
