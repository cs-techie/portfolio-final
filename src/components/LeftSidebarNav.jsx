import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/audio';

const navItems = [
  { num: '01', id: 'hero', label: 'INTRO', href: '#hero' },
  { num: '02', id: 'about', label: 'ABOUT', href: '#about' },
  { num: '03', id: 'projects', label: 'PROJECTS', href: '#projects' },
  { num: '04', id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { num: '05', id: 'expertise', label: 'SKILLS', href: '#expertise' },
  { num: '06', id: 'achievements', label: 'ACHIEVEMENTS', href: '#achievements' },
  { num: '07', id: 'contact', label: 'CONTACT', href: '#contact' },
];

const LeftSidebarNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    soundFx.playClick();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="left-sidebar-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: 'var(--left-sidebar-width)',
        borderRight: '1px solid var(--border-subtle)',
        padding: '8rem 2rem 3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 90,
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '0.12em',
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.25s ease',
              }}
            >
              <span
                style={{
                  width: isActive ? '16px' : '6px',
                  height: '1px',
                  background: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  transition: 'width 0.25s ease',
                }}
              />
              <span>{item.num} — {item.label}</span>
            </a>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.675rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        CS STUDENT · MVSREC <br />
        CPI: 8.90 / 10.0
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .left-sidebar-nav { display: none !important; }
        }
      `}</style>
    </aside>
  );
};

export default LeftSidebarNav;
