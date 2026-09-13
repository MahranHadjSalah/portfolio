import React, { useEffect } from 'react';
import { X, Printer, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const openPrintableWindow = () => {
    const printContent = document.getElementById('printable-cv');
    if (!printContent) return;
    const win = window.open('', '_blank', 'width=850,height=1000');
    if (!win) {
      alert('Please allow popups for this site to export your PDF.');
      return;
    }
    win.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Mahran_Hadj_Salah_CV</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @page { size: A4 portrait; margin: 12mm 15mm; }
            * { box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
              color: #0f172a; 
              background: #ffffff;
              padding: 24px; 
              max-width: 820px; 
              margin: 0 auto; 
              line-height: 1.45; 
              font-size: 13px;
            }
            h1 { font-size: 26px; font-weight: 800; margin: 0 0 4px 0; color: #0f172a; }
            h2 { 
              font-size: 12px; 
              font-weight: 700; 
              text-transform: uppercase; 
              letter-spacing: 0.05em; 
              color: #1e3a8a; 
              border-bottom: 1.5px solid #cbd5e1; 
              padding-bottom: 4px; 
              margin-top: 20px; 
              margin-bottom: 10px; 
            }
            h3 { font-size: 14px; font-weight: 700; margin: 0; color: #0f172a; }
            p, li, span { color: #334155; }
            a { color: #1d4ed8; text-decoration: none; }
            ul { margin: 4px 0 0 0; padding-left: 18px; }
            li { margin-bottom: 3px; font-size: 12px; color: #334155; }
            .avoid-break { break-inside: avoid; page-break-inside: avoid; margin-bottom: 12px; }
            .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .meta-line { display: flex; flex-wrap: wrap; gap: 12px; font-size: 12px; color: #475569; margin-top: 6px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
    }, 300);
  };

  const handlePrint = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 1. Set document title so browser names the PDF file cleanly
    const originalTitle = document.title;
    document.title = 'Mahran_Hadj_Salah_CV';

    // 2. Temporarily reset body overflow to allow full multi-page printing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';

    // 3. Cleanup after printing is finished
    const cleanup = () => {
      document.title = originalTitle;
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = originalOverflow || 'unset';
      }
      document.documentElement.style.overflow = 'unset';
      window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);

    // 4. Trigger print
    try {
      window.print();
    } catch (err) {
      console.warn('Native window.print() failed, trying fallback printable window:', err);
      openPrintableWindow();
    } finally {
      // Fallback timeout in case afterprint does not fire in some browsers
      setTimeout(cleanup, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0B1120]/80 backdrop-blur-md animate-in fade-in duration-200 resume-modal-overlay">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#172033] border border-[#263244] shadow-2xl text-[#F8FAFC] font-sans resume-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111827]/95 backdrop-blur-md border-b border-[#263244] resume-controls-bar no-print">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-xs font-mono text-[#94A3B8]">Curriculum Vitae · Mahran Hadj Salah</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#172033] border border-[#263244] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1e2a42] shadow-2xs transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div id="printable-cv" className="p-8 sm:p-12 space-y-8 bg-[#172033] text-[#F8FAFC] printable-resume-sheet print:p-0 print:bg-white print:text-slate-900">
          
          {/* Header */}
          <div className="border-b border-[#263244] print:border-slate-300 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] print:text-slate-900 tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm font-mono text-[#38BDF8] print:text-blue-700 font-semibold">
              {portfolioData.personal.mainTitle}
            </p>
            <p className="text-xs italic text-[#94A3B8] print:text-slate-600 font-sans">
              "{portfolioData.personal.builderCredo.statement}"
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#94A3B8] print:text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] print:text-blue-600" />
                {portfolioData.personal.location}
              </span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-[#38BDF8] print:text-blue-700">
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] print:text-blue-700">
                {portfolioData.personal.phone}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] print:text-blue-700">
                github.com/MahranHadjSalah
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 resume-avoid-break">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Education & Engineering Formation
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900">National Engineering Diploma in Software Engineering</h3>
                  <p className="text-xs font-mono text-[#94A3B8] print:text-slate-600">ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax</p>
                </div>
                <span className="text-xs font-mono text-[#94A3B8] print:text-slate-600">2025 — Present</span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700">
                Core focus: Distributed Software Architecture, Advanced Algorithms, Relational & Vector Databases, Operating Systems.
              </p>
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Major Software Products
            </h2>

            {portfolioData.featuredProjects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 resume-avoid-break print:mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                    {proj.title} <span className="font-normal text-[#38BDF8] print:text-blue-700">({proj.role})</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#94A3B8] print:text-slate-600">{proj.techStack.slice(0, 4).join(" · ")}</span>
                </div>
                <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                  {proj.summary}
                </p>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                  {proj.whatIBuilt.slice(0, 3).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="space-y-3 resume-avoid-break">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Production Stack & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">AI & Intelligence:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">Python, LangGraph, LangChain, RAG, GraphRAG, pgvector</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Backend & Architecture:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">FastAPI, Node.js, Express, REST APIs, Webhooks, Redis</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Frontend:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">React, Vite, Tailwind CSS, JavaScript (ESNext)</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Data & DevOps:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">PostgreSQL, Docker, Git / GitHub, Linux</span>
              </div>
            </div>
          </div>

          {/* Availability & Objective */}
          <div className="pt-4 border-t border-[#263244] print:border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] print:text-slate-600">
            <span>Objective: Seeking Software Engineering & AI Internships</span>
            <span className="text-[#38BDF8] print:text-blue-700 font-semibold">Sfax, Tunisia (Remote Worldwide / Hybrid)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
