import React from 'react';
import { motion } from 'framer-motion';
import ActivityHeatmap from './ActivityHeatmap';
import { Cpu, Code2, Database, BarChart3, Wrench, Terminal } from 'lucide-react';

const skillGroups = [
  {
    num: "01",
    category: "Programming Languages",
    items: ["Python", "Java", "PHP", "R", "C language"],
    desc: "Primary languages for scripting, backend logic, machine learning, and core CS algorithms.",
    icon: Code2,
  },
  {
    num: "02",
    category: "Web Technologies",
    items: ["HTML5/CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Bootstrap", "Vite"],
    desc: "Frontend component architecture, modern UI design systems, and responsive web design.",
    icon: Cpu,
  },
  {
    num: "03",
    category: "Database Management",
    items: ["MySQL", "SQL Queries", "Database Schema Modeling", "Indexing", "Normalization"],
    desc: "Relational database schema modeling, query optimization, indexing, and data normalization.",
    icon: Database,
  },
  {
    num: "04",
    category: "Data & Analytics",
    items: ["Tableau", "PowerBI", "Exploratory Data Analysis (EDA)", "Data Visualization", "Pandas"],
    desc: "Translating complex datasets into actionable business intelligence dashboards and insights.",
    icon: BarChart3,
  },
  {
    num: "05",
    category: "Tools & Platforms",
    items: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Vercel", "REST APIs"],
    desc: "Developer environment, version control workflows, PR reviews, and analytical notebooks.",
    icon: Wrench,
  },
  {
    num: "06",
    category: "Core CS Concepts",
    items: ["OOPs Principles", "DBMS Architecture", "REST API Design", "Data Structures & Algorithms"],
    desc: "Foundational computer science principles, memory efficiency, and modular system architecture.",
    icon: Terminal,
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
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
            07 // DAS SYSTEM · CAPABILITIES & PULSE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            System Capabilities & Activity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-subtitle"
          >
            No guesswork—a systematic breakdown of tech stacks, skill weightings, and real-time development pulse.
          </motion.p>
        </div>

        {/* System Profile Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="scfo-glass-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>
                      SYS // {group.num}
                    </span>
                    <Icon size={18} style={{ color: 'var(--accent-cyan)' }} />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {group.category}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                    {group.desc}
                  </p>
                </div>

                {/* Items List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {group.items.map((item) => (
                    <span key={item} className="scfo-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 365-Day Contribution Activity Heatmap */}
        <ActivityHeatmap />

      </div>
    </section>
  );
};

export default Skills;

