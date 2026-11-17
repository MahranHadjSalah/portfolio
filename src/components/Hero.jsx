import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Radio, Briefcase, GraduationCap, Users } from 'lucide-react';
import { personal, heroFacts, CV_URL } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Button, Card } from './ui';
import { staggerContainer, fadeInUp } from '../utils/motion';

const factIcons = { live: Radio, now: Briefcase, edu: GraduationCap, lead: Users };

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="hero-backdrop pointer-events-none absolute inset-0 -z-0" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Left: identity */}
          <motion.div variants={staggerContainer(0.08, 0.05)} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp(0.5, 12)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {personal.availability}
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp(0.6, 16)} className="mt-6 text-display font-semibold text-fg">
              {personal.firstName}{' '}
              <span className="text-muted">{personal.lastName}</span>
            </motion.h1>

            <motion.p variants={fadeInUp(0.5, 16)} className="mt-4 font-mono text-sm text-accent">
              {personal.title}
            </motion.p>

            <motion.p variants={fadeInUp(0.5, 16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              <span className="text-fg">{personal.headline}</span> {personal.intro}
            </motion.p>

            <motion.div variants={fadeInUp(0.5, 16)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#work">
                View my work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={CV_URL} download variant="secondary">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp(0.5, 16)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {personal.location}
              </span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 hover:text-fg">
                <Mail className="h-4 w-4" /> Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            <Card className="col-span-2 overflow-hidden p-0 sm:col-span-1 sm:row-span-2">
              <img
                src={personal.photo}
                alt={personal.name}
                width="399"
                height="420"
                className="aspect-[399/420] w-full object-cover object-top sm:aspect-auto sm:h-full"
              />
            </Card>
            {heroFacts.map((f) => (
              <FactTile key={f.kind} fact={f} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FactTile({ fact }) {
  const Icon = factIcons[fact.kind];
  const live = fact.kind === 'live';
  return (
    <Card className="flex flex-col justify-between gap-6 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-subtle">{fact.label}</span>
        {live ? (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
        ) : (
          <Icon className="h-4 w-4 text-subtle" />
        )}
      </div>
      <div>
        <p className="text-base font-semibold leading-tight text-fg">{fact.value}</p>
        <p className="mt-1 text-xs leading-snug text-muted">{fact.note}</p>
      </div>
    </Card>
  );
}
