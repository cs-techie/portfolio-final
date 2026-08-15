import React from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2, UserCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { soundFx } from '../utils/audio';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(0, 0, 0, 0.75)',
      }}
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        className="dev-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '88vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: 'var(--text-muted)',
            padding: '0.3rem',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
            <span className="tag tag-accent">{project.badge}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.date}</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.1rem' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Problem & Solution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #f87171' }}>
            <h4 style={{ fontSize: '0.85rem', color: '#f87171', fontWeight: 700, marginBottom: '0.2rem' }}>
              Problem Statement
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{project.problem}</p>
          </div>

          <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent)' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>
              Technical Solution
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{project.solution}</p>
          </div>
        </div>

        {/* Contribution */}
        <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #a855f7', marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: 700, marginBottom: '0.2rem' }}>
            My Contribution
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{project.contribution}</p>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Key Features
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>•</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Technologies</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              <GithubIcon size={16} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
