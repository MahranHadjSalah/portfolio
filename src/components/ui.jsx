import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/motion';

const cx = (...c) => c.filter(Boolean).join(' ');

export function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={cx('py-20 sm:py-28 border-t border-line', className)}>
      <div className="container-page">
        {(eyebrow || title) && (
          <motion.header
            variants={fadeInUp(0.5, 16)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12 max-w-2xl sm:mb-14"
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-h2 font-semibold text-fg">{title}</h2>}
            {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Card({ children, className = '', interactive = false, as: Comp = 'div', ...props }) {
  return (
    <Comp
      className={cx(
        'rounded-2xl border border-line bg-surface',
        interactive && 'transition-colors duration-200 hover:border-line-strong hover:bg-surface-2/60',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

const buttonVariants = {
  primary: 'bg-fg text-bg hover:bg-fg/85',
  accent: 'bg-accent text-accent-fg hover:bg-accent/90',
  secondary: 'border border-line bg-surface text-fg hover:border-line-strong hover:bg-surface-2',
  ghost: 'text-muted hover:text-fg hover:bg-surface-2',
};

const buttonSizes = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  icon: 'h-9 w-9 justify-center',
};

export function Button({ variant = 'primary', size = 'md', href, className = '', children, ...props }) {
  const classes = cx(
    'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-150 whitespace-nowrap',
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function Chip({ children, className = '' }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2/60 px-2 py-1 text-xs text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}

const statusStyles = {
  live: { label: 'Live', dot: 'bg-success', text: 'text-success', ring: 'border-success/30 bg-success/10' },
  'in-progress': { label: 'In progress', dot: 'bg-accent', text: 'text-accent', ring: 'border-accent/30 bg-accent/10' },
  personal: { label: 'Personal project', dot: 'bg-subtle', text: 'text-muted', ring: 'border-line bg-surface-2' },
};

export function StatusBadge({ status }) {
  const s = statusStyles[status];
  if (!s) return null;
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium', s.ring, s.text)}>
      <span className={cx('h-1.5 w-1.5 rounded-full', s.dot, status === 'live' && 'animate-pulse')} />
      {s.label}
    </span>
  );
}
