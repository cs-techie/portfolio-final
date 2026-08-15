import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'UNDERSTAND', desc: 'Understand the problem domain, constraints, and project requirements.' },
  { num: '02', title: 'PLAN', desc: 'Break the idea into technical components, data models, and feature architecture.' },
  { num: '03', title: 'BUILD', desc: 'Develop, code, and integrate full-stack solutions and AI algorithms.' },
  { num: '04', title: 'TEST', desc: 'Debug, run tests, and refine system performance and user experience.' },
  { num: '05', title: 'LEARN', desc: 'Iterate, experiment with new technologies, and improve technical approach.' },
];

const Process = () => {
  return (
    <section id="process" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-num-tag"
          >
            DEVELOPMENT WORKFLOW
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            HOW I APPROACH PROJECTS
          </motion.h2>
        </div>

        {/* 5-Step Row Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem 2rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '3.5rem',
          }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
