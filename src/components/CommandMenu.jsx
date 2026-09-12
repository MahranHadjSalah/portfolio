import React, { useState, useEffect } from 'react';
import { Search, FolderGit2, Cpu, User, GraduationCap, Copy, Check, FileText, ArrowRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandMenu({ isOpen, onClose, onOpenResume, onOpenProject, onNavigateHome }) {
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

  const navigateTo = (target) => {
    onClose(false);
    if (onNavigateHome) {
      onNavigateHome(target);
    } else {
      window.location.href = `/${target}`;
    }
  };

  const openProject = (id) => {
    onClose(false);
    if (onOpenProject) {
      onOpenProject(id);
    } else {
      window.history.pushState({ projectId: id }, '', `/${id}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const actions = [
    {
      label: "Project: Autoreply — AI Sales Automation",
      icon: FolderGit2,
      action: () => openProject('autoreply')
    },
    {
      label: "Project: LUX Dental — Clinical Practice OS",
      icon: FolderGit2,
      action: () => openProject('lux-dental')
    },
    {
      label: "Project: SupportAi — GraphRAG Knowledge Engine",
      icon: FolderGit2,
      action: () => openProject('supportai')
    },
    {
      label: "View All Projects Overview",
      icon: FolderGit2,
      action: () => navigateTo('#work')
    },
    {
      label: "Explore Engineering Stack",
      icon: Cpu,
      action: () => navigateTo('#engineering')
    },
    {
      label: "How I Build (Engineering Process)",
      icon: ArrowRight,
      action: () => navigateTo('#process')
    },
    {
      label: "Experience & Education Timeline",
      icon: GraduationCap,
      action: () => navigateTo('#experience')
    },
    {
      label: "Read About Me",
      icon: User,
      action: () => navigateTo('#about')
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => onClose(false)}
    >
      <div 
        className="w-full max-w-lg rounded-xl bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-[#E2E8F0] bg-slate-50">
          <Search className="w-4 h-4 text-[#475569] mr-2.5" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#0F172A] placeholder:text-slate-400 focus:outline-none text-xs"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-[#475569] border border-[#E2E8F0] shadow-2xs">
            ESC
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-slate-400">No commands found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#0F766E] group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 group-hover:text-[#0F766E]">Jump ↵</span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] text-[#475569]">
          <span>Navigation Quick Actions</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
