import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    num: "3X",
    label: "HACKATHONS WON",
    description: "First-place awards in competitive hackathons including AgriConnect sustainable supply chain platform.",
  },
  {
    num: "8.90",
    label: "ENGINEERING CPI",
    description: "Academic CPI score across Computer Science & Engineering coursework at MVSREC.",
  },
  {
    num: "40+",
    label: "REPOSITORIES & MODULES",
    description: "Open-source Python algorithms, React applications, and REST API architectures on GitHub.",
  },
  {
    num: "100%",
    label: "PROJECT DELIVERABLES",
    description: "Consistent delivery of legal-tech modules and AI gesture recognition models during internship.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-num-tag"
          >
            06 — ACHIEVEMENTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            ACCOMPLISHMENTS & METRICS
          </motion.h2>
        </div>

        {/* 4-Column Number Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem 2rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '3.5rem',
          }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  lineHeight: 0.9,
                  marginBottom: '1rem',
                  letterSpacing: '-0.04em',
                }}
              >
                {s.num}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.775rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.65rem',
                }}
              >
                {s.label}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
