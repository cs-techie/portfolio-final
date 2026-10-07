"use client";
import React from 'react';
export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        id="heroVideo"
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-content reveal">
        <div className="hero-top">
            PENDYALA SHANKAR
            <span className="hero-top-line"></span>
            AI DEVELOPER x WEB DEVELOPER
        </div>

        <div className="hero-main">
            <div className="hero-left">
                <div className="hero-eyebrow">
                    <span></span>
                    CREATIVE DIGITAL EXPERIENCES
                </div>
                <h1>
                    I turn <em>ideas</em> <br />
                    into robust <br />
                    software.
                </h1>
                <p>
                    Computer Science undergraduate and 3x hackathon-winning full-stack developer with a passion for building scalable, data-driven applications.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-light">VIEW MY WORK ↗</a>
                    <button className="watch-button" id="introTrigger">
                        <div className="play-circle">▶</div>
                        <div>
                            <strong>WATCH INTRO</strong>
                            <small>PLAY VIDEO</small>
                        </div>
                    </button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-right-heading">CURRENTLY</div>
                <div className="hero-roles">
                    <span>FULL-STACK DEV</span>
                    <span>AI / ML</span>
                    <span>DATA ANALYTICS</span>
                </div>

                <div className="hero-experience">
                    <strong>03<span>x</span></strong>
                    <span>HACKATHON<br/>WINNER</span>
                </div>

                <div className="availability">
                    <i></i>
                    <span>AVAILABLE FOR<br/>SELECTED PROJECTS</span>
                </div>
            </div>
        </div>
      </div>
      <div className="video-modal" id="introModal" aria-hidden="true">
        <button className="modal-close" id="modalClose">&times;</button>
        <div className="modal-container">
            <div className="modal-header">
                <span>INTRODUCTION</span>
                <span>ESC to close</span>
            </div>
            <video id="introVideo" controls playsInline>
                <source src="/assets/intro.mp4" type="video/mp4" />
            </video>
        </div>
      </div>
    </section>
  );
}
