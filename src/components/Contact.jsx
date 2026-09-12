import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Check, Terminal, ExternalLink, ArrowUpRight, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Internship Opportunity');
  const [customMessage, setCustomMessage] = useState(
    "Hi Mahran, I reviewed your portfolio and would like to discuss a software engineering opportunity."
  );
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneFormatted = portfolioData.personal.phone;
  const phoneRaw = "21656187082";
  const recipientEmail = portfolioData.personal.email;

  const quickTopics = [
    {
      label: "Internship Opportunity",
      msg: "Hi Mahran, I reviewed your portfolio and would like to discuss a software engineering internship opportunity."
    },
    {
      label: "AI Product Build",
      msg: "Hi Mahran, I'm interested in building an AI / Full-Stack product and would love to collaborate with you."
    },
    {
      label: "Freelance / SaaS",
      msg: "Hi Mahran, I have a freelance SaaS / automation project I would like you to engineer."
    },
    {
      label: "Technical Chat",
      msg: "Hi Mahran, I checked out your projects (Autoreply, SupportAi) and wanted to connect."
    }
  ];

  const handleSelectTopic = (item) => {
    setTopic(item.label);
    setCustomMessage(item.msg);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneFormatted);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Build the final message for wa.me
  const fullWhatsAppMessage = name.trim() 
    ? `${customMessage}\n\n— From: ${name.trim()}`
    : customMessage;

  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(fullWhatsAppMessage)}`;

  const handleOpenWhatsApp = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Initiate Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something High-Impact
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Directly reachable on WhatsApp and Email for internships, SaaS builds, and engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Direct Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-emerald-500/30 hover:border-emerald-500/60 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white text-xs font-mono border border-zinc-700 transition-colors"
                  type="button"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">WhatsApp & Direct Line</div>
              <a
                href={`https://wa.me/${phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl font-bold font-mono text-white hover:text-emerald-300 transition-colors"
              >
                {phoneFormatted}
              </a>
              <div className="flex items-center gap-3 pt-3 mt-3 border-t border-zinc-800/80">
                <a
                  href={`https://wa.me/${phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                >
                  <span>Chat directly on WhatsApp (wa.me)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white text-xs font-mono border border-zinc-700 transition-colors"
                  type="button"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Email Address</div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`}
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold font-mono text-white hover:text-emerald-300 transition-colors break-all"
              >
                {recipientEmail}
              </a>
              <div className="flex items-center gap-3 pt-3 mt-3 border-t border-zinc-800/80">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                >
                  <span>Compose via Gmail</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/60 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">Professional Network</div>
                </div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/60 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GitHub</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">Code Repositories</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: WhatsApp Instant Message (wa.me) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-zinc-300">whatsapp_instant_dispatch</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  wa.me/{phoneRaw}
                </span>
              </div>

              {/* Topic Selector Chips */}
              <div className="mb-5">
                <label className="block text-zinc-400 font-mono text-xs mb-2">
                  Select Conversation Objective:
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleSelectTopic(item)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                        topic === item.label
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-semibold'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Composer */}
              <form onSubmit={handleOpenWhatsApp} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-zinc-400 mb-1.5">Your Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Alexandre Dumont / Tech Recruiter"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1.5">WhatsApp Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-zinc-950 group-hover:scale-110 transition-transform" />
                  <span>Send Message on WhatsApp (wa.me)</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </button>

                <div className="pt-3 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Opens WhatsApp Web or App directly</span>
                  <span>Direct to {phoneFormatted}</span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
