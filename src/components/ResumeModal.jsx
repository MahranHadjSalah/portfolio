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
          <title>Hadj_Salah_Mahran_CV</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @page { size: A4 portrait; margin: 10mm 14mm 12mm 14mm; }
            * { box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
              color: #0f172a; 
              background: #ffffff;
              padding: 16px; 
              max-width: 820px; 
              margin: 0 auto; 
              line-height: 1.4; 
              font-size: 11.5px;
            }
            h1 { font-size: 22px; font-weight: 800; margin: 0 0 2px 0; color: #0f172a; }
            h2 { 
              font-size: 11px; 
              font-weight: 700; 
              text-transform: uppercase; 
              letter-spacing: 0.05em; 
              color: #1e3a8a; 
              border-bottom: 1.5px solid #cbd5e1; 
              padding-bottom: 3px; 
              margin-top: 14px; 
              margin-bottom: 8px; 
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
            <span className="text-xs font-mono text-[#94A3B8]">Curriculum Vitae · Hadj Salah Mahran</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer"
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
        <div id="printable-cv" className="p-8 sm:p-12 space-y-7 bg-[#172033] text-[#F8FAFC] printable-resume-sheet print:p-0 print:bg-white print:text-slate-900">
          
          {/* Header */}
          <div className="border-b border-[#263244] print:border-slate-300 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] print:text-slate-900 tracking-tight">
                Hadj Salah Mahran
              </h1>
              <span className="text-xs font-mono text-[#38BDF8] print:text-blue-700 font-semibold">
                Software Engineering Student · AI & Full-Stack
              </span>
            </div>
            
            <p className="text-xs text-[#94A3B8] print:text-slate-700 font-sans leading-relaxed">
              Software engineering student passionate about web development, artificial intelligence, and automation. I build production full-stack systems and SaaS combining AI agents, RAG/GraphRAG, and modern cloud architecture.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#94A3B8] print:text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] print:text-blue-600" />
                Sfax, Tunisia
              </span>
              <span>•</span>
              <a href="mailto:mahranhadjsalah56@gmail.com" className="hover:text-[#38BDF8] print:text-blue-700">
                mahranhadjsalah56@gmail.com
              </a>
              <span>•</span>
              <a href="https://wa.me/21656187082" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] print:text-blue-700">
                +216 56187082
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/mahran-hadj-salah-4b98bb393/" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] print:text-blue-700">
                linkedin.com/in/mahran-hadj-salah
              </a>
              <span>•</span>
              <a href="https://github.com/MahranHadjSalah" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] print:text-blue-700">
                github.com/MahranHadjSalah
              </a>
            </div>
          </div>

          {/* Education — Both Prestigious Cycles */}
          <div className="space-y-3 resume-avoid-break">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {/* Degree 1 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900">
                    Computer Engineering Degree — Software Engineering
                  </h3>
                  <span className="text-xs font-mono text-[#94A3B8] print:text-slate-600">2025 – Present</span>
                </div>
                <p className="text-xs font-mono text-[#38BDF8] print:text-blue-700">
                  ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax
                </p>
                <p className="text-xs text-[#94A3B8] print:text-slate-700 mt-1 leading-relaxed">
                  Engineering program focused on modern software engineering: design and modeling (UML, design patterns), mathematics & optimization, complex & certifying systems, advanced database management, embedded systems & advanced networking, and computer security. Strong emphasis on Agile/Scrum methodologies.
                </p>
              </div>

              {/* Degree 2 */}
              <div className="pt-2 border-t border-[#263244]/60 print:border-slate-200">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900">
                    Integrated Preparatory Cycle — Computer Science & Multimedia
                  </h3>
                  <span className="text-xs font-mono text-[#94A3B8] print:text-slate-600">2023 – 2025</span>
                </div>
                <p className="text-xs font-mono text-[#38BDF8] print:text-blue-700">
                  ISIMS Sfax · 4 Semesters (120 ECTS Credits)
                </p>
                <p className="text-xs text-[#94A3B8] print:text-slate-700 mt-1 leading-relaxed">
                  High-level scientific program designed to build strong foundations in CS and applied math: structured & OOP (C, Python, Java), advanced algorithms, data structures, complexity theory, mathematics (algebra, analysis, probability, graph theory, formal logic), operating systems, TCP/IP networking, and computer architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Key Projects & Experience — 4 Major Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Projects & Experience
            </h2>

            {/* Project 0: Enterprise AI Platform */}
            <div className="space-y-1.5 resume-avoid-break print:mb-3">
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                  Enterprise AI Platform — Autonomous Multi-Agent OS <span className="font-normal text-xs text-[#94A3B8] print:text-slate-600">| AI Architecture (2026)</span>
                </h3>
                <span className="text-xs font-mono text-[#38BDF8] print:text-blue-700">
                  LangGraph StateGraph & HITL
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Autonomous multi-agent system coordinating 16 specialized agents for verified corporate knowledge retrieval and full-stack software synthesis.
              </p>
              <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                <li>LangGraph StateGraph architecture orchestrating 6 Knowledge agents (pgvector, anti-hallucination fact checking) and 10 Software agents.</li>
                <li>Human-in-the-Loop (HITL) milestone approval gates pausing execution graphs via interrupt() for operator verification.</li>
                <li>Four safety layers: batched manifests, golden scaffolds, non-LLM static AST validation (21 defect classes), and Docker sandbox smoke tests.</li>
              </ul>
              <div className="text-[11px] font-mono text-[#38BDF8] print:text-blue-700 pt-0.5">
                Technologies: Python, FastAPI, LangGraph, PostgreSQL, pgvector, React 18, TypeScript, Docker
              </div>
            </div>

            {/* Project 1: Smart Finance Analyzer */}
            <div className="space-y-1.5 resume-avoid-break print:mb-3">
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                  Smart Finance Analyzer — Full-Stack AI Financial Platform <span className="font-normal text-xs text-[#94A3B8] print:text-slate-600">| Full-Stack & AI (2026)</span>
                </h3>
                <span className="text-xs font-mono text-[#38BDF8] print:text-blue-700">
                  Automated Financial Statements
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Full-stack financial analysis platform extracting balance sheets and cash flows, calculating financial health scores, and generating automated Gemini AI diagnostic reports.
              </p>
              <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                <li>Automated liquidity, solvency, and profitability ratio computations with dynamic SVG visualization curves.</li>
                <li>Google Gemini API integration with prompt chains for structured risk evaluations and strategic advice.</li>
                <li>Secure RESTful backend with PostgreSQL relational schema and multi-format PDF statement exports.</li>
              </ul>
              <div className="text-[11px] font-mono text-[#38BDF8] print:text-blue-700 pt-0.5">
                Technologies: React, Node.js, Express, PostgreSQL, Google Gemini API, Tailwind CSS, Docker
              </div>
            </div>

            {/* Project 2: SeniorVoice */}
            <div className="space-y-1.5 resume-avoid-break print:mb-3">
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                  SeniorVoice — AI Voice Assistant <span className="font-normal text-xs text-[#94A3B8] print:text-slate-600">| Hackathon 38 Explorers (2025)</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 print:text-emerald-700 font-semibold">
                  Hackathon Finalist Deliverable
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Voice assistant dedicated to elderly Tunisian users with accessible, multimodal speech interaction.
              </p>
              <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                <li>Natural Darija / French code-switching speech recognition and comprehension via Whisper (STT) + LLM pipeline.</li>
                <li>End-to-end voice-to-text-to-voice synthesis pipeline with instantaneous audio feedback.</li>
                <li>Senior-friendly React interface: high-contrast large interactive elements and simplified one-touch navigation.</li>
              </ul>
              <div className="text-[11px] font-mono text-[#38BDF8] print:text-blue-700 pt-0.5">
                Technologies: React, FastAPI, Whisper (STT), Python, REST API, Text-to-Speech
              </div>
            </div>

            {/* Project 3: MediaPipe Hand Detectors */}
            <div className="space-y-1.5 resume-avoid-break print:mb-3">
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                  MediaPipe Hand Detectors — Computer Vision & Air Canvas <span className="font-normal text-xs text-[#94A3B8] print:text-slate-600">| Computer Vision (2025 – 2026)</span>
                </h3>
                <span className="text-xs font-mono text-cyan-400 print:text-cyan-700 font-semibold">
                  60 FPS Landmark Tracking
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Real-time computer vision system tracking 21 3D hand landmarks for touchless gesture interactions and interactive air canvas painting.
              </p>
              <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                <li>High-performance hand landmark detection executing at 60 FPS on standard camera feeds.</li>
                <li>Dynamic fingertip pinch gesture recognition triggering virtual 3D drawing, tool switching, and canvas manipulation.</li>
                <li>Interactive HUD display with vector landmark rendering, Euclidean distance math, and zero latency.</li>
              </ul>
              <div className="text-[11px] font-mono text-[#38BDF8] print:text-blue-700 pt-0.5">
                Technologies: Python, OpenCV, MediaPipe, NumPy, Math / Geometry
              </div>
            </div>

            {/* Project 4: SupportAi */}
            <div className="space-y-1.5 resume-avoid-break print:mb-3">
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h3 className="text-sm font-bold text-[#F8FAFC] print:text-slate-900 font-mono">
                  SupportAi — Enterprise Hybrid GraphRAG & WebRTC Voice <span className="font-normal text-xs text-[#94A3B8] print:text-slate-600">| AI Systems (2025 – 2026)</span>
                </h3>
                <span className="text-xs font-mono text-[#38BDF8] print:text-blue-700">
                  ArcadeDB + pgvector RRF
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Enterprise conversational platform combining dense vector retrieval with ArcadeDB causal property graphs, sub-second WebRTC voice streaming, and closed-loop Jira synchronization.
              </p>
              <ul className="list-disc list-inside text-xs text-[#94A3B8] print:text-slate-700 space-y-0.5">
                <li>Hybrid RRF retriever combining PostgreSQL 18 pgvector embeddings (60%) with ArcadeDB causal problem-solution graphs (40%).</li>
                <li>Sub-second WebRTC voice transport via LiveKit SFU, Silero VAD (&lt;50ms barge-in interruption), and on-premise Piper Neural TTS.</li>
                <li>6-stage FSM autonomous sales engine with deterministic regex price guardrails preventing hallucinated catalogue pricing.</li>
              </ul>
              <div className="text-[11px] font-mono text-[#38BDF8] print:text-blue-700 pt-0.5">
                Technologies: Python 3.12, FastAPI, PostgreSQL 18, pgvector, ArcadeDB, LiveKit, Silero VAD, Piper TTS, Redis, Docker
              </div>
            </div>
          </div>

          {/* Technical Skills — Categorized Stack matching CV */}
          <div className="space-y-3 resume-avoid-break">
            <h2 className="text-xs font-mono text-[#38BDF8] print:text-blue-800 uppercase tracking-wider font-bold print:border-b print:border-slate-300 print:pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono">
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Programming Languages:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">Python · JavaScript · Java · C · SQL · HTML/CSS</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">AI, LLM & Machine Learning:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">LangGraph · LangChain · RAG · Whisper (STT) · Scikit-Learn · XGBoost · Random Forest · FAISS · Groq</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Backend & APIs:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">Node.js · Express.js · FastAPI · REST APIs · Meta Webhooks</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">DevOps & Cloud:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">GitHub Actions (CI/CD) · Nginx · Certbot SSL · Hetzner VPS · Docker · Linux · Vercel</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Databases & Caching:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">PostgreSQL · MySQL · pgvector · FAISS (vector) · Redis</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Automation & Tools:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">n8n Workflows · Meta Developer API · Git/GitHub · Postman · Figma</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Software Architecture:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">UML · OO Design · Design Patterns · Software Architecture</span>
              </div>
              <div>
                <span className="text-[#94A3B8] print:text-slate-600 block font-semibold">Systems & Algorithms:</span>
                <span className="text-[#F8FAFC] print:text-slate-900">Linux · TCP/IP · Network Services · Data Structures · Graph Theory</span>
              </div>
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="pt-3 border-t border-[#263244] print:border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono resume-avoid-break">
            <div>
              <span className="text-[#38BDF8] print:text-blue-800 font-bold uppercase tracking-wider block mb-1">
                Languages:
              </span>
              <div className="space-y-0.5 text-[#94A3B8] print:text-slate-700">
                <p><strong className="text-[#F8FAFC] print:text-slate-900">Arabic:</strong> Native (Mother tongue)</p>
                <p><strong className="text-[#F8FAFC] print:text-slate-900">French:</strong> Fluent (Written & spoken — professional level)</p>
                <p><strong className="text-[#F8FAFC] print:text-slate-900">English:</strong> Intermediate (Technical reading, documentation, communication)</p>
              </div>
            </div>

            <div>
              <span className="text-[#38BDF8] print:text-blue-800 font-bold uppercase tracking-wider block mb-1">
                Interests & Focus:
              </span>
              <p className="text-[#94A3B8] print:text-slate-700 leading-relaxed">
                Independent SaaS Development · AI Agents & Automation · n8n Workflows · Competitive Programming · Entrepreneurship
              </p>
            </div>
          </div>

          {/* Objective Footer */}
          <div className="pt-3 border-t border-[#263244] print:border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] print:text-slate-600">
            <span>Seeking Software Engineering & AI Internships</span>
            <span className="text-[#38BDF8] print:text-blue-700 font-semibold">Sfax, Tunisia (Remote Worldwide / Hybrid)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
