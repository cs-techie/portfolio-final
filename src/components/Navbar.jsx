"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="logo">
          SHANKAR<span>.</span>
        </a>

        <div className="desktop-nav">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#projects" className="nav-link">WORK</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#resume" className="nav-link">RESUME</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-dark">
            LET'S TALK ↗
          </a>
          
          <button 
            className="mobile-menu-button" 
            id="mobileToggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>WORK</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a>
        <a href="#resume" onClick={() => setIsOpen(false)}>RESUME</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </div>
    </>
  );
}
