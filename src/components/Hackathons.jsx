import React from 'react';
import { motion } from 'framer-motion';
import { HACKATHONS, PERSONAL_INFO } from '../utils/data';

const Hackathons = () => {
  return (
    <section id="hackathons" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">06 // ACHIEVEMENTS</div>
          <h2 className="editorial-title">Achievements & Quantified Impact</h2>
          <p className="editorial-subtitle">
            Factual metrics derived directly from my undergraduate academic record, internship, and hackathon victories.
          </p>
        </div>

        {/* Big Number Editorial Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="scfo-card"
              style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Victory Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {HACKATHONS.map((item) => (
            <div key={item.id} className="scfo-card" style={{ borderLeft: '4px solid var(--accent)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  HACKATHON HONORS · {item.date}
                </span>
                <span className="scfo-pill scfo-pill-accent">
                  FIRST PLACE
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {item.title}
              </h3>

              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                Winning Entry: {item.project}
              </div>

              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hackathons;
