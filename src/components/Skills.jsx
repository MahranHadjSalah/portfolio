import React from 'react';
import { skills } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Section, Reveal, Card } from './ui';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      intro="The stack I use across my internship, AutoReply and personal projects."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.04} className={group.wide ? 'lg:col-span-2' : ''}>
            <Card className="h-full p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-fg">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-bg/60 px-2.5 py-1.5 text-sm text-muted"
                  >
                    <TechIcon name={item} className="h-3.5 w-3.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
