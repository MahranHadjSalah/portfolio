import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, leadership } from '../data/portfolioData';
import { Section, Reveal, Card } from './ui';

export default function EducationLeadership() {
  return (
    <Section id="education" eyebrow="Education & leadership" title="Foundations and community">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
            <GraduationCap className="h-4 w-4" /> Education
          </Reveal>
          <div className="space-y-3">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.05}>
                <Card className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-fg">{e.degree}</h3>
                    <span className="font-mono text-xs text-subtle">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{e.courses.join(' · ')}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
            <Award className="h-4 w-4" /> Leadership & activities
          </Reveal>
          <Card className="divide-y divide-line">
            {leadership.map((l, i) => (
              <Reveal key={l.role} delay={i * 0.05} className="p-6">
                <h3 className="font-semibold text-fg">{l.role}</h3>
                <p className="mt-0.5 text-sm text-accent">{l.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.description}</p>
              </Reveal>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  );
}
