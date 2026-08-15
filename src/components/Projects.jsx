import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../utils/data';
import ProjectModal from './ProjectModal';
import { soundFx } from '../utils/audio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '5.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-num-tag"
          >
            03 — MY PROJECTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-title"
          >
            FEATURED PROJECTS
          </motion.h2>
        </div>

        {/* Alternating Case Study Compositions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const isFullWidth = idx === 2;

            if (isFullWidth) {
              // Project 03: Full-Width Visual / Info Below
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '4rem' }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                        PROJECT 0{idx + 1} — {project.date}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase' }}>
                        {project.title}
                      </h3>
                    </div>

                    <span className="scfo-pill">{project.badge}</span>
                  </div>

                  {/* Full-Width Visual Container */}
                  <div
                    data-cursor="view"
                    onClick={() => {
                      soundFx.playChime();
                      setSelectedProject(project);
                    }}
                    className="project-visual-container studio-card"
                    style={{
                      height: '380px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '3.5rem',
                      marginBottom: '3rem',
                      background: 'linear-gradient(135deg, var(--bg-surface-elevated) 0%, var(--bg-secondary) 100%)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontWeight: 700 }}>
                      PROJECT ARCHITECTURE & EXAM SIMULATOR
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, maxWidth: '850px' }}>
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Info Row Below */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
                    <div>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        {project.summary}
                      </p>
                      <div style={{ fontSize: '0.95rem', color: '#ffffff', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1.25rem', lineHeight: 1.6 }}>
                        <strong>My Contribution: </strong>{project.contribution}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>
                        TECHNOLOGIES & REPOSITORY
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                        {project.tags.map((t) => (
                          <span key={t} className="scfo-pill">{t}</span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                          onClick={() => {
                            soundFx.playChime();
                            setSelectedProject(project);
                          }}
                          className="scfo-btn scfo-btn-primary"
                        >
                          <span>VIEW DETAILS</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Project 01 & 02 Alternating Compositions
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '4.5rem',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '4.5rem',
                }}
              >
                {/* Visual Block */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div
                    data-cursor="view"
                    onClick={() => {
                      soundFx.playChime();
                      setSelectedProject(project);
                    }}
                    className="project-visual-container studio-card"
                    style={{
                      minHeight: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      background: 'var(--bg-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 900, color: 'var(--text-muted)' }}>
                        0{idx + 1}
                      </span>
                      <span className="scfo-pill">{project.badge}</span>
                    </div>

                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontWeight: 700 }}>
                        FEATURED PROJECT
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25 }}>
                        {project.subtitle}
                      </h4>
                    </div>

                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', fontWeight: 600 }}>
                      {project.date} · COMPLETED
                    </div>
                  </div>
                </div>

                {/* Details Block */}
                <div style={{ order: isEven ? 2 : 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    PROJECT 0{idx + 1}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {project.summary}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>
                      MY CONTRIBUTION
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem', lineHeight: 1.6 }}>
                      {project.contribution}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                    {project.tags.map((t) => (
                      <span key={t} className="scfo-pill">{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <button
                      onClick={() => {
                        soundFx.playChime();
                        setSelectedProject(project);
                      }}
                      className="scfo-btn scfo-btn-primary"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scfo-btn scfo-btn-outline"
                      >
                        <GithubIcon size={14} />
                        <span>GITHUB</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Modal View */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>
  );
};

export default Projects;
