import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { Section, Reveal, Chip } from './ui';

export default function Experience({ onOpenProject }) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I’m building right now"
      intro="An AI engineering internship on enterprise conversational AI, and a SaaS I founded and run in production."
    >
      <ol className="relative space-y-6 sm:space-y-0">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={i * 0.05} className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-10">
            <div className="pt-1 sm:pt-7">
              <p className="font-mono text-xs text-subtle">{job.period}</p>
              <p className="mt-1 text-sm text-muted">{job.location}</p>
            </div>

            <div className="relative border-line sm:border-l sm:pb-10 sm:pl-10">
              <span className="absolute -left-[5px] top-9 hidden h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent sm:block" />
              <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      <span className="text-fg">{job.company}</span> · {job.product}
                    </p>
                  </div>
                  {job.projectId && (
                    <button
                      type="button"
                      onClick={() => onOpenProject(job.projectId)}
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Case study <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
