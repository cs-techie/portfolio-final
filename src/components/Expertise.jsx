import React from 'react';
import { motion } from 'framer-motion';

const skillBlocks = [
  {
    num: "01",
    title: "PROGRAMMING",
    items: ["C Language", "Python", "Java", "JavaScript (ES6+)", "PHP", "R"],
  },
  {
    num: "02",
    title: "FRONTEND",
    items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    num: "03",
    title: "BACKEND",
    items: ["Node.js", "RESTful APIs"],
  },
  {
    num: "04",
    title: "DATABASE",
    items: ["MySQL", "SQL Queries", "Relational Database Design"],
  },
  {
    num: "05",
    title: "DATA / AI",
    items: ["Python", "NumPy", "Pandas", "Tableau", "PowerBI", "EDA", "OpenCV", "Deep Learning (LSTM)"],
  },
  {
    num: "06",
    title: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Vite"],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
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
            05 — TECHNICAL SKILLS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            WHAT I WORK WITH
          </motion.h2>
        </div>

        {/* 6-Block Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem 2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '3.5rem',
          }}
        >
          {skillBlocks.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {block.num}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                {block.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {block.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                    }}
                  >
                    <span style={{ color: 'var(--text-muted)' }}>—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
