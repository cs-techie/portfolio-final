import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../utils/data';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Numbering Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-num-tag"
        >
          02 — ABOUT ME
        </motion.div>

        {/* 2-Column Student Profile Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4.5rem', marginBottom: '5rem' }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="editorial-title"
            >
              ABOUT <br /> ME
            </motion.h2>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 500 }}
            >
              I’m a Computer Science Engineering student at <strong style={{ color: 'var(--accent-cyan)' }}>Maturi Venkata Subba Rao Engineering College (MVSREC)</strong> with a CPI score of <strong>8.90 / 10.0</strong> who enjoys turning ideas into working software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}
            >
              I build web applications, experiment with AI-powered solutions, and continuously explore new technologies through projects and hackathons. Having completed a Software Development Internship at <strong>LawVriksh</strong> and won <strong>3 hackathons</strong>, my goal is to continuously grow as a strong software engineer.
            </motion.p>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              HYDERABAD, INDIA · SEEKING SOFTWARE DEVELOPMENT ROLES
            </div>
          </div>
        </div>

        {/* Academic Records */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '2.25rem', fontWeight: 700 }}>
            ACADEMIC RECORD & CPI METRICS
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  borderLeft: '2px solid var(--border-hover)',
                  paddingLeft: '1.75rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  {edu.year}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  {edu.degree}
                </h3>

                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  {edu.institute}
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  CPI / SCORE: {edu.cpi}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
