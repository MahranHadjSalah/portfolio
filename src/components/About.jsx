import React from 'react';
import { personal, languages, softSkills, interests } from '../data/portfolioData';
import { Section, Reveal, Card } from './ui';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit more about me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {personal.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="divide-y divide-line">
            <InfoBlock title="Languages">
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.language} className="flex items-center justify-between text-sm">
                    <span className="text-fg">{l.language}</span>
                    <span className="text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </InfoBlock>
            <InfoBlock title="Soft skills">
              <p className="text-sm leading-relaxed text-muted">{softSkills.join(' · ')}</p>
            </InfoBlock>
            <InfoBlock title="Interests">
              <p className="text-sm leading-relaxed text-muted">{interests.join(' · ')}</p>
            </InfoBlock>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function InfoBlock({ title, children }) {
  return (
    <div className="p-5 sm:p-6">
      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-subtle">{title}</h3>
      {children}
    </div>
  );
}
