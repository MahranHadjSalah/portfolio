import React from 'react';
import { ArrowRight, ArrowUpRight, Network, Workflow } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { Section, Reveal, Card, Chip, StatusBadge } from './ui';

const placeholderIcons = { supportai: Network, 'enterprise-ai': Workflow };

export default function Work({ onOpenProject }) {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Products and systems I’ve built"
      intro="Agentic AI and retrieval systems — an enterprise conversational AI platform from my internship and a LangGraph multi-agent platform."
    >
      <div className="grid gap-4">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <ProjectCard project={p} onOpen={onOpenProject} featured />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <h3 className="text-xl font-semibold text-fg">More projects</h3>
          <p className="mt-2 text-sm text-muted">Hackathon, coursework and side projects.</p>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.04}>
              <Card
                as="a"
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                interactive
                className="group flex h-full flex-col p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">{p.context}</span>
                  <GithubIcon className="h-4 w-4 text-subtle transition-colors group-hover:text-fg" />
                </div>
                <h4 className="mt-3 font-semibold text-fg">{p.title}</h4>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <p className="mt-4 font-mono text-xs text-subtle">{p.stack.join(' · ')}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project, onOpen, featured = false }) {
  const Icon = placeholderIcons[project.id] || Workflow;
  const open = () => onOpen(project.id);

  return (
    <Card
      interactive
      className={`group flex h-full cursor-pointer flex-col overflow-hidden ${featured ? 'lg:flex-row' : ''}`}
      onClick={open}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' ? open() : null)}
      aria-label={`Open ${project.title} case study`}
    >
      <div
        className={`relative overflow-hidden border-line bg-surface-2 ${
          featured ? 'aspect-[16/9] border-b lg:aspect-auto lg:w-1/2 lg:border-b-0 lg:border-r' : 'aspect-[16/9] border-b'
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full min-h-[200px] w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(var(--accent)/0.18),transparent_60%)]">
            <div className="flex flex-col items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-surface shadow-card">
                <Icon className="h-6 w-6 text-accent" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-fg">{project.title}</span>
            </div>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'sm:p-8 lg:w-1/2' : ''}`}>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-xs text-subtle">{project.period}</span>
        </div>
        <h3 className={`mt-4 font-semibold text-fg ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
        <p className="mt-1 text-sm text-subtle">{project.kind}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.tagline}</p>

        {featured && (
          <ul className="mt-5 space-y-2">
            {project.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, featured ? 8 : 5).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-6 text-sm">
          <span className="inline-flex items-center gap-1 font-medium text-fg">
            Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Visit site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
