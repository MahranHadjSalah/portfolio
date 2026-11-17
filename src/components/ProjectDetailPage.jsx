import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { TechIcon } from './TechIcons';
import { Button, Card, Chip, Reveal, StatusBadge } from './ui';

export default function ProjectDetailPage({ projectId, onBack, onNavigateProject }) {
  const index = featuredProjects.findIndex((p) => p.id === projectId);
  const project = featuredProjects[index];
  if (!project) return null;
  const next = featuredProjects[(index + 1) % featuredProjects.length];
  const { links } = project;
  const hasLinks = links.live || links.github;

  return (
    <article className="pt-24 pb-20 sm:pt-28">
      <div className="container-page max-w-4xl">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </button>

        <Reveal as="header" className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="text-sm text-subtle">
              {project.kind} · {project.period}
            </span>
          </div>
          <h1 className="mt-5 text-display font-semibold text-fg">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.live && (
              <Button href={links.live}>
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </Button>
            )}
            {links.github && (
              <Button href={links.github} variant="secondary">
                <GithubIcon className="h-4 w-4" /> Source code
              </Button>
            )}
            {!hasLinks && (
              <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
                <Lock className="h-4 w-4" /> Private repository — demo available on request
              </span>
            )}
          </div>
        </Reveal>

        {project.image && (
          <Reveal className="mt-12">
            <Card className="overflow-hidden">
              <img src={project.image} alt={`${project.title} preview`} className="w-full" />
            </Card>
          </Reveal>
        )}

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_220px] md:gap-16">
          <div className="space-y-14">
            <Block title="Overview">
              <p className="text-lg leading-relaxed text-muted">{project.summary}</p>
            </Block>

            <Block title="What I built">
              <ul className="space-y-3">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Block>

            {project.flow && (
              <Block title="How it works">
                <ol className="grid gap-3 sm:grid-cols-2">
                  {project.flow.map((f, i) => (
                    <li key={f.step}>
                      <Card className="h-full p-5">
                        <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <p className="mt-2 font-semibold text-fg">{f.step}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{f.desc}</p>
                      </Card>
                    </li>
                  ))}
                </ol>
              </Block>
            )}

            {project.gallery && (
              <Block title="Diagrams">
                <div className="space-y-4">
                  {project.gallery.map((g) => (
                    <figure key={g.src}>
                      <Card className="overflow-hidden bg-white">
                        <img src={g.src} alt={g.caption} loading="lazy" className="w-full" />
                      </Card>
                      <figcaption className="mt-2 text-sm text-subtle">{g.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </Block>
            )}
          </div>

          <aside className="space-y-8 md:sticky md:top-24 md:self-start">
            <Meta title="Role">
              <p className="text-sm leading-relaxed text-muted">{project.role}</p>
            </Meta>
            <Meta title="Timeline">
              <p className="text-sm text-muted">{project.period}</p>
            </Meta>
            <Meta title="Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <Chip key={t}>
                    <TechIcon name={t} className="h-3 w-3 shrink-0" />
                    {t}
                  </Chip>
                ))}
              </div>
            </Meta>
          </aside>
        </div>

        <button
          type="button"
          onClick={() => onNavigateProject(next.id)}
          className="group mt-24 flex w-full items-center justify-between rounded-2xl border border-line bg-surface p-6 text-left transition-colors hover:border-line-strong sm:p-8"
        >
          <span>
            <span className="block text-sm text-subtle">Next project</span>
            <span className="mt-1 block text-2xl font-semibold text-fg">{next.title}</span>
          </span>
          <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

function Block({ title, children }) {
  return (
    <Reveal as="section">
      <h2 className="mb-5 text-xl font-semibold text-fg">{title}</h2>
      {children}
    </Reveal>
  );
}

function Meta({ title, children }) {
  return (
    <div>
      <h3 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-subtle">{title}</h3>
      {children}
    </div>
  );
}
