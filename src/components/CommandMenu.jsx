import React, { useState, useEffect } from 'react';
import { Search, FolderGit2, Cpu, User, GraduationCap, Mail, MessageSquare, Copy, Check, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandMenu({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose ? onClose(!isOpen) : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      label: "View Featured Work",
      icon: FolderGit2,
      action: () => {
        window.location.href = '#work';
        onClose(false);
      }
    },
    {
      label: "Explore Engineering Stack",
      icon: Cpu,
      action: () => {
        window.location.href = '#engineering';
        onClose(false);
      }
    },
    {
      label: "How I Build (Engineering Process)",
      icon: ArrowRight,
      action: () => {
        window.location.href = '#process';
        onClose(false);
      }
    },
    {
      label: "Experience & Education Timeline",
      icon: GraduationCap,
      action: () => {
        window.location.href = '#experience';
        onClose(false);
      }
    },
    {
      label: "Read About Me",
      icon: User,
      action: () => {
        window.location.href = '#about';
        onClose(false);
      }
    },
    {
      label: "View / Print Resume (CV)",
      icon: FileText,
      action: () => {
        onClose(false);
        if (onOpenResume) onOpenResume();
      }
    },
    {
      label: "Chat on WhatsApp (+216 56 187 082)",
      icon: MessageSquare,
      action: () => {
        window.open(portfolioData.personal.whatsapp, '_blank');
        onClose(false);
      }
    },
    {
      label: "Copy Email Address",
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => onClose(false)}
    >
      <div 
        className="w-full max-w-lg rounded-xl bg-[#090b10] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-950">
          <Search className="w-4 h-4 text-zinc-500 mr-2.5" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none text-xs"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">
            ESC
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-zinc-500">No commands found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-zinc-300 hover:text-white hover:bg-zinc-850/80 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400">Jump ↵</span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-zinc-950/80 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500">
          <span>Navigation Quick Actions</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
