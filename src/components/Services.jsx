import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Database, ShieldAlert, Code, Sparkles } from 'lucide-react';

const servicesList = [
  {
    tag: '01 // FRONTEND ARCHITECTURE',
    title: 'Modern Web & Dynamic Interfaces',
    description: 'Building ultra-responsive, high-performance user interfaces with React, modern CSS, framer-motion, and state management.',
    tech: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Vite', 'Tailwind/Vanilla CSS'],
    icon: Layout,
  },
  {
    tag: '02 // BACKEND & APIS',
    title: 'Scalable Microservices & Databases',
    description: 'Designing RESTful APIs, relational databases, user authentication systems, and server-side business logic.',
    tech: ['Python', 'Node.js', 'Express', 'MySQL', 'REST APIs'],
    icon: Database,
  },
  {
    tag: '03 // AI & INTELLIGENCE',
    title: 'Machine Learning & Smart Tools',
    description: 'Integrating predictive ML algorithms, OCR scanning engines, crop analytics, and automated decision tools.',
    tech: ['Scikit-Learn', 'Pandas/NumPy', 'OpenCV/EasyOCR', 'Data Analytics'],
    icon: Cpu,
  },
  {
    tag: '04 // SECURITY & SYSTEM INTEGRATION',
    title: 'Real-Time Protection & Verification',
    description: 'Building scam detection, optical character verification, encrypted storage, and real-time validation layers.',
    tech: ['Security Workflows', 'OAuth/JWT', 'Data Sanitation', 'Git/GitHub'],
    icon: ShieldAlert,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
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
            02 // SERVICES & CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            Engineering Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-subtitle"
          >
            From web applications to intelligent backend pipelines—delivering end-to-end software solutions engineered for production.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scfo-glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                      {service.tag}
                    </span>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '6px',
                        background: 'var(--bg-surface-elevated)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.75rem',
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  {service.tech.map((t) => (
                    <span key={t} className="scfo-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
