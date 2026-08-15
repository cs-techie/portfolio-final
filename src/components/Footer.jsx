import React from 'react';
import { PERSONAL_INFO } from '../utils/data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '4.5rem 0 3.5rem',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        
        {/* Main Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3rem', marginBottom: '4rem' }}>
          
          <div>
            <a
              href="#hero"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.6rem',
              }}
            >
              SHANKAR
            </a>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              COMPUTER SCIENCE ENGINEERING STUDENT · SOFTWARE DEVELOPER
            </div>
          </div>

          {/* Location & Social Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.775rem' }}>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>HYDERABAD / INDIA</div>
            <div style={{ display: 'flex', gap: '1.75rem' }}>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GITHUB</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LINKEDIN</a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '2.25rem' }}>
          <div>
            © {year} PENDYALA SHANKAR. ALL RIGHTS RESERVED.
          </div>

          <div>
            PORTFOLIO ARCHITECTURE
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
