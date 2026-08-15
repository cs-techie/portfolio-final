import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

const Hero = ({ openTerminal }) => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '9.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        
        {/* Section Numbering Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-num-tag"
        >
          01 — INTRO
        </motion.div>

        {/* Shorter Clean Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="editorial-display"
          style={{ marginBottom: '1.5rem', maxWidth: '900px' }}
        >
          PENDYALA <br />
          <span style={{ color: 'var(--text-secondary)' }}>SHANKAR</span>
        </motion.h1>

        {/* Clear Subtitle Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span>COMPUTER SCIENCE STUDENT</span>
          <span style={{ color: 'var(--text-muted)' }}>—</span>
          <span>SOFTWARE DEVELOPER</span>
        </motion.div>

        {/* Authentic High-Contrast Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            color: 'var(--text-primary)',
            maxWidth: '800px',
            lineHeight: 1.6,
            marginBottom: '3rem',
            fontWeight: 400,
          }}
        >
          Undergraduate student at <strong style={{ color: '#ffffff' }}>MVSREC</strong> (CPI 8.90). Building practical software, exploring new technologies, and turning ideas into working products with <strong>Python, React, RESTful APIs, and MySQL</strong>.
        </motion.p>

        {/* CTA Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '4.5rem',
          }}
        >
          <a
            href="#projects"
            onClick={() => soundFx.playClick()}
            className="scfo-btn scfo-btn-primary"
          >
            <span>VIEW PROJECTS [03]</span>
            <ArrowDownRight size={15} />
          </a>

          <button
            onClick={() => {
              soundFx.playChime();
              openTerminal();
            }}
            className="scfo-btn scfo-btn-outline"
          >
            <Terminal size={14} />
            <span>TERMINAL CLI (CTRL+K)</span>
          </button>
        </motion.div>

        {/* Technical Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.5rem',
          }}
        >
          <span>HYDERABAD, INDIA</span>
          <div style={{ width: '80px', height: '1px', background: 'var(--border-subtle)' }} />
          <span>SCROLL TO EXPLORE PROJECTS</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
