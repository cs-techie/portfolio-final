import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

const Navbar = ({ openTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#expertise' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s ease',
        padding: scrolled ? '1.1rem 0' : '2rem 0',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left Identity */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          SHANKAR
        </a>

        {/* Center/Right Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.75rem' }} className="desktop-top-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                textDecoration: 'none',
              }}
              className="scfo-nav-item"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              soundFx.playChime();
              openTerminal();
            }}
            className="scfo-btn scfo-btn-outline"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.725rem' }}
            title="Open CLI Terminal (Ctrl+K)"
          >
            <Terminal size={13} />
            <span className="terminal-text">CLI</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="scfo-btn scfo-btn-primary desktop-cta"
            style={{ padding: '0.45rem 1rem', fontSize: '0.725rem' }}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="scfo-btn scfo-btn-outline mobile-toggle"
            style={{ padding: '0.4rem', display: 'none' }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-primary)',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            zIndex: 99,
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.75rem',
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="scfo-btn scfo-btn-primary"
            style={{ marginTop: 'auto' }}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}

      <style>{`
        .scfo-nav-item:hover {
          color: var(--text-primary) !important;
        }
        @media (max-width: 900px) {
          .desktop-top-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
