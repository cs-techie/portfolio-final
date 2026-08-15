import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/data';
import { soundFx } from '../utils/audio';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Numbering Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-num-tag"
        >
          07 — DIRECT CONTACT
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            maxWidth: '1100px',
          }}
        >
          LET'S <br />
          <span style={{ color: 'var(--text-secondary)' }}>CONNECT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '650px' }}
        >
          Interested in my work, have a software development opportunity, or just want to connect? Feel free to reach out.
        </motion.p>

        {/* Direct Communication Channels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '4rem',
          }}
        >
          {/* Email */}
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => soundFx.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ textDecoration: 'none' }}
          >
            <div className="studio-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                DIRECT EMAIL
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', wordBreak: 'break-all' }}>
                {PERSONAL_INFO.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                <span>SEND EMAIL</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${PERSONAL_INFO.phone}`}
            onClick={() => soundFx.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            style={{ textDecoration: 'none' }}
          >
            <div className="studio-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                PHONE / CALL
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                {PERSONAL_INFO.phone}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                <span>CALL DIRECTLY</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ textDecoration: 'none' }}
          >
            <div className="studio-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                LINKEDIN
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                LinkedIn Profile
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            style={{ textDecoration: 'none' }}
          >
            <div className="studio-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                GITHUB REPOSITORIES
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                GitHub @cs-techie
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                <span>VIEW CODE</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
