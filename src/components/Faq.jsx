import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { soundFx } from '../utils/audio';

const faqsList = [
  {
    q: "What role and type of software opportunity are you seeking?",
    a: "I am actively seeking a Software Development Intern or Junior Full-Stack Engineer position. I am open to remote, hybrid, or on-site roles in Hyderabad or pan-India starting immediately for Q3/Q4 2026.",
  },
  {
    q: "What technical stack and languages do you specialize in?",
    a: "My primary tech stack includes Python, React.js, JavaScript (ES6+), Node.js, RESTful APIs, MySQL, and Data Analytics tools (Tableau, PowerBI, Pandas). I also have foundational experience in C, Java, and R.",
  },
  {
    q: "What was your core contribution during your internship at LawVriksh?",
    a: "At LawVriksh, I developed legal-tech web application components, structured JSON data flows for backend microservices, optimized RESTful API routes, and conducted database schema refactoring for improved query speeds.",
  },
  {
    q: "Tell us about your 3 hackathon victories and what you built.",
    a: "I won 3 national-level hackathons by building production-focused solutions: (1) AgriConnect (Smart Agriculture Portal), (2) AntiScamDefender101 (Real-time phishing & scam detection tool), and (3) Book2Resell (Peer-to-peer textbook marketplace with automated pricing).",
  },
  {
    q: "Does your software work responsively across desktop, tablet, and mobile?",
    a: "Yes. Every UI application I build strictly enforces fluid grid responsive design, WCAG contrast accessibility, keyboard shortcuts (such as Ctrl+K CLI modal), and a strict performance budget.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    soundFx.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
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
            08 // FREQUENTLY ASKED QUESTIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            Klarheit Vorab · FAQ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-subtitle"
          >
            Clear answers regarding engineering workflow, technical stack, internship availability, and hackathon projects.
          </motion.p>
        </div>

        {/* Accordion Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '960px' }}>
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="scfo-glass-card"
                style={{ padding: 0 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.q}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent)' : 'var(--bg-surface-elevated)',
                      color: isOpen ? '#000' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 1.5rem 1.5rem 1.5rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.95rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '1.25rem',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
