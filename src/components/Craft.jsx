import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Gauge, Layers, Terminal, Sparkles } from 'lucide-react';

const craftPillars = [
  {
    num: '01',
    title: 'Frame Budget & Performance First',
    description: 'Design is half the equation; the other half is clean engineering craft. Every component is optimized for 60fps responsiveness with minimal DOM mutations.',
    highlight: 'Budgeted for ultra-low latency & zero unnecessary re-renders.',
    icon: Gauge,
  },
  {
    num: '02',
    title: 'Modular Architecture & State Integrity',
    description: 'Decoupled component architecture with single-responsibility principles. Clean state passing prevents race conditions and side effects.',
    highlight: 'Maintainable, extensible code structure following SOLID principles.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Cross-Viewport Fluid Adaptation',
    description: 'Every layout is designed responsively for desktop widescreen down to compact mobile phones. Typography and spatial rhythm auto-scale seamlessly.',
    highlight: 'Tested across 1440px desktop, 768px tablet, and 375px mobile.',
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Developer Control & Keyboard Velocity',
    description: 'Empowering power users with shortcut triggers like Ctrl+K CLI terminal, accessible keyboard focus rings, and dark-mode defaults.',
    highlight: 'Accessible, keyboard-first interaction model.',
    icon: Terminal,
  },
];

const Craft = () => {
  return (
    <section id="craft" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            03 // CRAFT & ARCHITECTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            How We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-subtitle"
          >
            Great design requires relentless technical handcraft. We build software with performance budgets, clean patterns, and zero compromise on accessibility.
          </motion.p>
        </div>

        {/* 2x2 Craft Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {craftPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scfo-glass-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                    {pillar.num} // PRINCIPLE
                  </span>
                  <Icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {pillar.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1rem',
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Craft;
