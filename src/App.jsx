import React, { useState, useEffect } from 'react';
import SEO from './components/SEO';
import CustomCursor from './components/CustomCursor';
import Persistent3DVisual from './components/Persistent3DVisual';
import LeftSidebarNav from './components/LeftSidebarNav';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Achievements from './components/Achievements';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import { soundFx } from './utils/audio';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global Shortcut Listener for CLI Terminal (Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playChime();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* SEO Engine */}
      <SEO />

      {/* Refined Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent 3D Software Monolith Centerpiece (Translates across grid on scroll) */}
      <Persistent3DVisual />

      {/* Architectural Hairline Grid Overlay */}
      <div className="architectural-grid-bg" />

      {/* Fixed Vertical Left Sidebar Navigation (Desktop) */}
      <LeftSidebarNav />

      {/* Thin Minimal Top Header */}
      <Navbar openTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Studio Content Area Offset for Left Sidebar */}
      <div className="main-studio-content">
        <main>
          {/* 01 — INTRO */}
          <Hero openTerminal={() => setIsTerminalOpen(true)} />

          {/* 02 — ABOUT */}
          <About />

          {/* 03 — WORK */}
          <Projects />

          {/* 04 — EXPERIENCE */}
          <Experience />

          {/* 05 — SKILLS */}
          <Expertise />

          {/* 06 — ACHIEVEMENTS */}
          <Achievements />

          {/* PROCESS PIPELINE */}
          <Process />

          {/* 07 — CONTACT */}
          <Contact />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* Developer CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}

export default App;
