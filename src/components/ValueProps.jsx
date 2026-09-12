import React from 'react';
import { Cpu, Layers, Bot, Network, Server, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ValueProps() {
  const iconMap = {
    Cpu: Cpu,
    Layers: Layers,
    Bot: Bot,
    Network: Network,
    Server: Server,
  };

  return (
    <section id="what-i-do" className="py-24 border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I Build & Engineer
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-mono">
            Bridging frontier generative AI and production-ready full-stack software architectures.
          </p>
        </div>

        {/* 5-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.whatIDo.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Cpu;
            return (
              <div
                key={item.id}
                className={`group relative rounded-xl bg-zinc-900/40 border border-zinc-800 p-7 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80' : ''
                }`}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mb-3">
                    {item.short}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
