import React from 'react';

// Languages
export function PythonIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <path fill="#3776AB" d="M11.91 2c-5.04 0-4.73 2.18-4.73 2.18l.01 2.27h4.81v.68H5.21S2 6.77 2 11.85c0 5.07 2.8 4.9 2.8 4.9h1.67v-2.34s-.09-2.8 2.76-2.8h4.74s2.66.04 2.66-2.6V4.65S16.95 2 11.91 2zm-2.6 1.48a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
      <path fill="#FFD43B" d="M12.09 22c5.04 0 4.73-2.18 4.73-2.18l-.01-2.27H12v-.68h6.79s3.21.36 3.21-4.72c0-5.08-2.8-4.91-2.8-4.91h-1.67v2.34s.09 2.8-2.76 2.8H9.83s-2.66-.04-2.66 2.6v4.36S7.05 22 12.09 22zm2.6-1.48a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path fill="#000" d="M13.2 15.6c.15.7.7 1.3 1.5 1.5 1.1.3 2.1-.3 2.1-1.5 0-.8-.5-1.3-1.5-1.7l-.5-.2c-1.5-.6-2.5-1.4-2.5-3.1 0-1.7 1.3-3.1 3.5-3.1 1.5 0 2.6.7 3.2 1.8l-1.6 1c-.3-.7-.9-1.1-1.6-1.1-.8 0-1.4.5-1.4 1.2 0 .7.5 1.1 1.4 1.5l.5.2c1.7.7 2.6 1.5 2.6 3.3 0 1.9-1.5 3.3-3.8 3.3-1.9 0-3.1-.9-3.7-2.2l1.6-1.1zm-7.4 2.2l1.7-1c.4.6.7 1 1.5 1 .7 0 1.2-.3 1.2-1.5V7.6h2.1v8.9c0 2.2-1.3 3.2-3.3 3.2-1.7 0-2.8-.9-3.2-1.9z" />
    </svg>
  );
}

export function JavaIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M7 19c3 1 7 1 10 0-2 .6-5 .8-8 .6-1 0-1.7-.3-2-.6z" fill="#5382A1" />
      <path d="M6 16.5c3.5 1 8.5 1 12 0-2.5.8-6.5 1-9.5.8-1.5 0-2.1-.4-2.5-.8z" fill="#5382A1" />
      <path d="M11.5 2.5c1.5 2-1 3.5-.5 5 1 2 2 1.5 1 3.5-1 2-2.5 2-1 3.5" stroke="#EA2D2E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 4c1 1.5-.5 2.5 0 3.5.7 1.5 1.5 1.2.7 2.7-.8 1.5-1.8 1.5-.7 2.8" stroke="#EA2D2E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 21.5c4.5 1 10 1 14 0-4 .7-9 .8-13 .5-.6 0-.8-.3-1-.5z" fill="#5382A1" />
    </svg>
  );
}

export function CIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <path fill="#00599C" d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5z" />
      <path fill="#fff" d="M12 6.5a5.5 5.5 0 0 0-5.3 4 5.5 5.5 0 0 0 0 3 5.5 5.5 0 0 0 5.3 4c2 0 3.7-1.1 4.6-2.8l-2.4-1.4c-.6.9-1.3 1.4-2.2 1.4-1.5 0-2.8-1.2-2.8-2.7s1.3-2.7 2.8-2.7c.9 0 1.6.5 2.2 1.4l2.4-1.4c-.9-1.7-2.6-2.8-4.6-2.8z" />
    </svg>
  );
}

export function SqlIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M21 15c-1.5-1-3.5-1.2-5-.5-2 1-3.5 3-6 3-1.5 0-3-.5-4.2-1.5.5-1 1.5-1.8 2.7-2.2 2-.7 4.5-.4 6.5-1.8 1.8-1.3 2.5-3.5 2-5.5-.3-1-1-1.8-2-2.2 1.2.8 1.8 2.2 1.5 3.5-.4 1.5-1.6 2.5-3 3-2 .7-4.2.3-6.2 1-2 .7-3.5 2.2-4.3 4.2-1 2.5-.5 5.5 1.5 7.2 2 1.8 5 2.3 7.5 1.3 2-.8 3.5-2.3 5-3.7 1.5-1.4 2.8-2.8 4-4.8z" fill="#00758F" />
      <circle cx="16" cy="6" r="1.2" fill="#38BDF8" />
    </svg>
  );
}

// AI, LLM & ML
export function LangChainIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="1.2" />
      <circle cx="7" cy="8" r="2.2" fill="#22C55E" />
      <circle cx="17" cy="8" r="2.2" fill="#22C55E" />
      <circle cx="12" cy="16" r="2.2" fill="#22C55E" />
      <path d="M8.5 9.5l2.5 5m4.5-5l-2.5 5M9 8h6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FaissIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 21 8.5 12 15 3 8.5" fill="#38BDF8" fillOpacity="0.25" />
      <polygon points="12 9 21 15.5 12 22 3 15.5" fill="#38BDF8" fillOpacity="0.15" />
      <circle cx="12" cy="8.5" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

export function WhisperIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#10A37F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="4" y2="12" />
      <line x1="8" y1="7" x2="8" y2="17" />
      <line x1="12" y1="3.5" x2="12" y2="20.5" />
      <line x1="16" y1="6.5" x2="16" y2="17.5" />
      <line x1="20" y1="10.5" x2="20" y2="13.5" />
    </svg>
  );
}

export function GroqIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#F55036" fillOpacity="0.2" stroke="#F55036" strokeWidth="1.2" />
      <path d="M13.5 4.5L7.5 13h4.5l-1.5 6.5 7-9h-4.5l1.5-6z" fill="#F55036" />
    </svg>
  );
}

export function ScikitLearnIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#F89939" fillOpacity="0.1" />
      <path d="M6.5 12c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" stroke="#F89939" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17.5 12c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5" stroke="#3499CD" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="6.5" cy="12" r="1.8" fill="#3499CD" />
      <circle cx="17.5" cy="12" r="1.8" fill="#F89939" />
    </svg>
  );
}

export function XGBoostIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1" />
      <path d="M12 4.5l-4.5 6.5h3l-3.5 5.5h10l-3.5-5.5h3L12 4.5z" fill="#10B981" />
      <rect x="10.8" y="16.5" width="2.4" height="3" fill="#047857" rx="0.5" />
    </svg>
  );
}

export function GridSearchIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#A855F7" fill="#A855F7" fillOpacity="0.1" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <circle cx="12" cy="12" r="1.5" fill="#A855F7" />
    </svg>
  );
}

// Backend & API
export function FastApiIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="11" fill="#05998B" />
      <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#ffffff" />
    </svg>
  );
}

export function NodeIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#539E43" strokeWidth="1.8" fill="#539E43" fillOpacity="0.2" />
      <text x="12" y="15" textAnchor="middle" fill="#539E43" fontSize="8" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  );
}

export function ExpressIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
      <text x="12" y="16" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="bold" fontFamily="sans-serif">ex</text>
    </svg>
  );
}

export function RestApiIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="6" width="20" height="12" rx="3" stroke="#38BDF8" fill="#38BDF8" fillOpacity="0.1" />
      <path d="M7 10l-2 2 2 2m10-4l2 2-2 2m-5-4l-2 4" />
    </svg>
  );
}

export function WebhookIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#F97316" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" fill="#F97316" fillOpacity="0.2" />
      <path d="M12 2v7m0 6v7m-7-5l5-3m4-4l5-3" />
      <circle cx="12" cy="3" r="1.5" fill="#F97316" />
      <circle cx="4" cy="18" r="1.5" fill="#F97316" />
      <circle cx="20" cy="8" r="1.5" fill="#F97316" />
    </svg>
  );
}

// Frontend
export function ReactIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

export function ViteIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M20.5 3.5l-8 17.5L3.5 3.5l8.5 2 8.5-2z" fill="#BD34FE" fillOpacity="0.2" stroke="#BD34FE" strokeWidth="1" />
      <path d="M13.5 2.5l-8.5 2 6 14.5 2.5-16.5z" fill="#41D1FF" fillOpacity="0.3" />
      <path d="M12.5 5.5l-4 7h4l-2 5 6.5-8h-4.5l2-4h-2z" fill="#FFC517" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#38BDF8" {...props}>
      <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.8 1 2.6 1.8 1.3 1.3 2.9 2.9 6.6 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.8-1-2.6-1.8C17.3 7.6 15.7 6 12 6zm-8 7c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.8 1 2.6 1.8 1.3 1.3 2.9 2.9 6.6 2.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.8-1-2.6-1.8C5.3 14.6 3.7 13 0 13z" />
    </svg>
  );
}

export function HtmlCssIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M3 3l1.5 16.5L12 22l7.5-2.5L21 3H3z" fill="#E34F26" />
      <path d="M12 5v14.5l5.5-1.8L19 5H12z" fill="#1572B6" />
      <path d="M12 7.5H7.5l.3 3.5h4.2v-3.5zm0 5H8l.3 3.5 3.7 1V14.5l-2.2-.6-.2-1.4H12v-2.5z" fill="#fff" />
      <path d="M12 7.5h4.5l-.4 3.5H12v-3.5zm0 5h4l-.4 4.5-3.6 1V14.5l2.2-.6.3-1.4H12v-2.5z" fill="#EBEBEB" />
    </svg>
  );
}

// DevOps & Cloud
export function HetznerIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#D50C2D" />
      <path d="M7 6v12h2.5v-4.5h5V18H17V6h-2.5v4.8h-5V6H7z" fill="#ffffff" />
    </svg>
  );
}

export function DockerIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#2496ED" {...props}>
      <path d="M13 7.5h2V9.5h-2V7.5zm-3 0h2V9.5h-2V7.5zm-3 0h2V9.5H7V7.5zm-3 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-9 3h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm8.5-2.5c-.3-.2-.8-.3-1.3-.2-.2-.6-.6-1.1-1.2-1.4l-.5-.3-.4.4c-.6.7-.8 1.6-.6 2.5-.7.4-1.6.5-2.5.5H1.5c-.3 1.2 0 2.5.7 3.5 1.5 2 3.8 3 6.8 3 5.5 0 9.8-3.2 11.2-7.8.8.1 1.5-.1 1.9-.5l.4-.3-.5-.4z" />
    </svg>
  );
}

export function NginxIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#009639" />
      <path d="M8.5 7.5h1.8l5.2 7V7.5h1.8v9h-1.8l-5.2-7v7H8.5v-9z" fill="#ffffff" />
    </svg>
  );
}

export function CertbotIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M12 2L4 5.5v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12v-6L12 2z" fill="#EEC226" fillOpacity="0.2" stroke="#EEC226" strokeWidth="1.5" />
      <path d="M12 8a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2z" fill="#EEC226" />
      <rect x="9" y="12" width="6" height="5" rx="1" fill="#EEC226" />
    </svg>
  );
}

export function GitHubActionsIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#2088FF" fillOpacity="0.15" stroke="#2088FF" strokeWidth="1.5" />
      <circle cx="7.5" cy="12" r="2" fill="#2088FF" />
      <circle cx="16.5" cy="8.5" r="2" fill="#2088FF" />
      <circle cx="16.5" cy="15.5" r="2" fill="#2088FF" />
      <path d="M9.5 12h3m0 0l2-3m-2 3l2 3" stroke="#2088FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LinuxIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#FCC624" fillOpacity="0.2" stroke="#FCC624" strokeWidth="1" />
      <path d="M12 4c-2.2 0-3.5 1.8-3.5 4 0 1 .3 2.5.8 4-.8 1-1.3 2.5-1.3 4 0 2.5 1.8 4 4 4s4-1.5 4-4c0-1.5-.5-3-1.3-4 .5-1.5.8-3 .8-4 0-2.2-1.3-4-3.5-4z" fill="#1E293B" />
      <ellipse cx="12" cy="15.5" rx="2.5" ry="3" fill="#F8FAFC" />
      <circle cx="11" cy="7.5" r=".7" fill="#FCC624" />
      <circle cx="13" cy="7.5" r=".7" fill="#FCC624" />
      <path d="M11 9.5h2l-1 1.5-1-1.5z" fill="#F97316" />
    </svg>
  );
}

// Automation & Tools
export function N8nIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="6" cy="12" r="3" fill="#EA4B71" />
      <circle cx="18" cy="7" r="3" fill="#FF6D5A" />
      <circle cx="18" cy="17" r="3" fill="#EA4B71" />
      <path d="M9 12h3m0 0l3-4m-3 4l3 4" stroke="#FF6D5A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MetaIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M6.5 7.5C4 7.5 2 9.5 2 12s2 4.5 4.5 4.5c2 0 3.5-1.2 4.5-3 1 1.8 2.5 3 4.5 3 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5c-2 0-3.5 1.2-4.5 3-1-1.8-2.5-3-4.5-3zm0 2.5c1.4 0 2.5 1 2.5 2s-1.1 2-2.5 2-2.5-1-2.5-2 1.1-2 2.5-2zm9 0c1.4 0 2.5 1 2.5 2s-1.1 2-2.5 2-2.5-1-2.5-2 1.1-2 2.5-2z" fill="#0081FB" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10.5" fill="#FF6C37" />
      <path d="M17.5 10c-.5-.8-1.5-1.5-3-1.5-2.2 0-4 1.8-4 4 0 1 .4 2 1.2 2.7l-2.7 1.3 3.5 1.5.5-2c.5.3 1 .5 1.5.5 2.2 0 4-1.8 4-4 0-.7-.2-1.4-.5-2z" fill="#ffffff" />
      <circle cx="14.5" cy="12.5" r="1.5" fill="#FF6C37" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#336791" fillOpacity="0.2" />
      <path d="M12 4c-3.8 0-6.8 2.5-6.8 6.2 0 2.2 1.2 4.2 3 5.2v2.6h1.8v-2h1v2.5h1.8v-3.2c3-.6 5.2-2.8 5.2-5.1C18 6.5 15.3 4 12 4zm-.5 8.5H9.8c-.4 0-.8-.3-.8-.8s.4-.7.8-.7h1.7c.4 0 .8.3.8.7s-.4.8-.8.8zm3.2-2h-4.9c-.4 0-.8-.3-.8-.8s.4-.7.8-.7h4.9c.4 0 .8.3.8.7s-.4.8-.8.8z" fill="#336791" />
    </svg>
  );
}

export function RedisIcon({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z" fill="#DC382D" />
      <path d="M3 8.5l9 4.5 9-4.5v3.5l-9 4.5-9-4.5V8.5z" fill="#A82820" />
      <path d="M3 14.5l9 4.5 9-4.5V18l-9 4.5L3 18v-3.5z" fill="#781C16" />
    </svg>
  );
}

// Master TechIcon mapper
export function TechIcon({ name, className = "w-3.5 h-3.5 shrink-0" }) {
  switch (name) {
    // Languages
    case "Python":
      return <PythonIcon className={className} />;
    case "JavaScript":
      return <JavaScriptIcon className={className} />;
    case "Java":
      return <JavaIcon className={className} />;
    case "C":
      return <CIcon className={className} />;
    case "SQL":
      return <SqlIcon className={className} />;

    // AI, LLM & ML
    case "LangGraph & LangChain":
      return <LangChainIcon className={className} />;
    case "RAG & FAISS":
      return <FaissIcon className={className} />;
    case "Whisper (STT)":
      return <WhisperIcon className={className} />;
    case "Groq & Ollama":
      return <GroqIcon className={className} />;
    case "Scikit-Learn (Pipelines)":
      return <ScikitLearnIcon className={className} />;
    case "XGBoost & Random Forest":
      return <XGBoostIcon className={className} />;
    case "GridSearchCV & Cross-Val":
      return <GridSearchIcon className={className} />;

    // Backend & API
    case "FastAPI":
      return <FastApiIcon className={className} />;
    case "Node.js":
      return <NodeIcon className={className} />;
    case "Express":
      return <ExpressIcon className={className} />;
    case "REST APIs":
      return <RestApiIcon className={className} />;
    case "Webhooks":
      return <WebhookIcon className={className} />;

    // Frontend
    case "React":
      return <ReactIcon className={className} />;
    case "Vite":
      return <ViteIcon className={className} />;
    case "Tailwind CSS":
      return <TailwindIcon className={className} />;
    case "HTML5 / CSS3":
      return <HtmlCssIcon className={className} />;

    // DevOps & Cloud
    case "Hetzner VPS":
      return <HetznerIcon className={className} />;
    case "Docker":
      return <DockerIcon className={className} />;
    case "Nginx":
      return <NginxIcon className={className} />;
    case "Certbot SSL":
      return <CertbotIcon className={className} />;
    case "GitHub Actions (CI/CD)":
      return <GitHubActionsIcon className={className} />;
    case "Linux":
      return <LinuxIcon className={className} />;

    // Automation & Tools
    case "n8n Workflows":
      return <N8nIcon className={className} />;
    case "Meta Graph API":
      return <MetaIcon className={className} />;
    case "Postman":
      return <PostmanIcon className={className} />;
    case "PostgreSQL":
      return <PostgresIcon className={className} />;
    case "Redis":
      return <RedisIcon className={className} />;

    default:
      return <span className="text-[#38BDF8] text-[10px]">✔</span>;
  }
}
