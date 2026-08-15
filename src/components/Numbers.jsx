import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Code2, GraduationCap } from 'lucide-react';

const metrics = [
  {
    num: '8.90',
    label: 'CUMULATIVE CPI',
    subtext: 'MVSREC Computer Science & Engineering',
    icon: GraduationCap,
  },
  {
    num: '3x',
    label: 'HACKATHON WINS',
    subtext: 'AgriConnect, AntiScamDefender, Book2Resell',
    icon: Award,
  },
  {
    num: '100%',
    label: 'LIGHTHOUSE TARGET',
    subtext: 'Clean architecture, Web Vitals & Accessibility',
    icon: Zap,
  },
  {
    num: '40+',
    label: 'REPOS & MODULES',
    subtext: 'Full-stack applications, APIs & ML projects',
    icon: Code2,
  },
];

const Numbers = () => {
  return (
    <section id="numbers" className="section-padding">
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
            01 // IN NUMBERS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            Quantitative Impact & Metrics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-subtitle"
          >
            Empirical metrics representing technical rigor, hackathon victories, academic performance, and code craft.
          </motion.p>
        </div>

        {/* 4-Card Metric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scfo-glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '220px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                    0{index + 1} // METRIC
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      background: 'var(--accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {item.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Numbers;
