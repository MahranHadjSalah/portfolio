import React, { useEffect, useState } from 'react';
import { Search, FolderGit2, Hash, FileText, Copy, Check, MessageSquare } from 'lucide-react';
import { featuredProjects, navLinks, personal, CV_URL } from '../data/portfolioData';

export default function CommandMenu({ isOpen, setOpen, onOpenProject, onNavigate }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const run = (fn) => () => {
    setOpen(false);
    fn();
  };

  const actions = [
    ...featuredProjects.map((p) => ({
      group: 'Projects',
      label: p.title,
      hint: p.kind,
      icon: FolderGit2,
      action: run(() => onOpenProject(p.id)),
    })),
    ...navLinks.map((l) => ({
      group: 'Sections',
      label: l.label,
      icon: Hash,
      action: run(() => onNavigate(l.href)),
    })),
    {
      group: 'Actions',
      label: 'Download CV (PDF)',
      icon: FileText,
      action: run(() => window.open(CV_URL, '_blank', 'noopener')),
    },
    {
      group: 'Actions',
      label: 'Chat on WhatsApp',
      icon: MessageSquare,
      action: run(() => window.open(personal.whatsapp, '_blank', 'noopener')),
    },
    {
      group: 'Actions',
      label: copied ? 'Email copied' : 'Copy email address',
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard?.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
    },
  ];

  const q = query.trim().toLowerCase();
  const filtered = actions.filter((a) => `${a.label} ${a.hint || ''}`.toLowerCase().includes(q));
  const groups = [...new Set(filtered.map((a) => a.group))];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4">
          <Search className="h-4 w-4 text-subtle" />
          <input
            autoFocus
            type="text"
            placeholder="Search projects, sections, actions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && filtered[0]?.action()}
            className="h-12 w-full bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">ESC</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && <p className="p-6 text-center text-sm text-subtle">No results.</p>}
          {groups.map((g) => (
            <div key={g} className="mb-1">
              <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-subtle">{g}</p>
              {filtered
                .filter((a) => a.group === g)
                .map((a) => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={a.label}
                      type="button"
                      onClick={a.action}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-subtle" />
                      <span className="flex-1">{a.label}</span>
                      {a.hint && <span className="truncate text-xs text-subtle">{a.hint}</span>}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
