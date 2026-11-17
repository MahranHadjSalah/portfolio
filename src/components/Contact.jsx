import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, Download } from 'lucide-react';
import { personal, lookingFor, CV_URL } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { Section, Reveal, Card, Button } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const channels = [
    { label: 'LinkedIn', value: 'mahran-hadj-salah', href: personal.linkedin, Icon: LinkedinIcon },
    { label: 'GitHub', value: 'MahranHadjSalah', href: personal.github, Icon: GithubIcon },
    { label: 'WhatsApp', value: personal.phone, href: personal.whatsapp, Icon: WhatsAppIcon },
    { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, Icon: Phone },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s work together">
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <Card className="flex h-full flex-col justify-between gap-10 p-6 sm:p-10">
            <div>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                I’m looking for <span className="text-fg">{lookingFor.slice(0, 2).join(' and ').toLowerCase()}</span>, plus
                backend / full-stack and AI product roles. {personal.workPreference}.
              </p>
            </div>
            <div>
              <p className="text-sm text-subtle">Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="mt-1 block break-all text-xl font-semibold text-fg hover:text-accent sm:text-2xl"
              >
                {personal.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${personal.email}`}>
                  <Mail className="h-4 w-4" /> Send an email
                </Button>
                <Button variant="secondary" onClick={copyEmail}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy address'}
                </Button>
                <Button variant="ghost" href={CV_URL} download>
                  <Download className="h-4 w-4" /> CV (PDF)
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="divide-y divide-line">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-surface-2/60"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-bg text-muted group-hover:text-fg">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-subtle">{label}</span>
                  <span className="block truncate text-fg">{value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </a>
            ))}
            <div className="p-5 text-sm text-muted">
              Based in {personal.location} · {personal.timezone}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
