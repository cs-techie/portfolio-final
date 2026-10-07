"use client";
import { Search, Layers, Terminal, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Process() {
  const steps = [
    { 
      num: "01",
      title: "DISCOVER", 
      desc: "Understand the problem domain, constraints, and project goals.",
      icon: Search,
      x: 350,
      y: 150,
      align: "left"
    },
    { 
      num: "02",
      title: "DESIGN", 
      desc: "Create technical architecture, data models, and system flows.",
      icon: Layers,
      x: 650,
      y: 450,
      align: "right"
    },
    { 
      num: "03",
      title: "DEVELOP", 
      desc: "Turn the architecture into a robust software solution.",
      icon: Terminal,
      x: 350,
      y: 750,
      align: "left"
    },
    { 
      num: "04",
      title: "LAUNCH", 
      desc: "Test, optimize and deploy the final application.",
      icon: Rocket,
      x: 650,
      y: 1050,
      align: "right"
    }
  ];

  return (
    <section className="section process-roadmap" id="process">
        <div className="roadmap-grid-overlay"></div>
        
        <div className="roadmap-header reveal">
            <span className="eyebrow">FROM IDEA TO LAUNCH</span>
            <h2>Turning ideas into<br/>real-world products.</h2>
        </div>
        
        <div className="roadmap-container reveal">
            
            {/* SVG Path */}
            <svg className="roadmap-svg" viewBox="0 0 1000 1200" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
                        <stop offset="20%" stopColor="#22d3ee" stopOpacity="1" />
                        <stop offset="80%" stopColor="#2dd4bf" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                    </linearGradient>
                    <filter id="roadmapGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="15" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Outer Glow */}
                <path 
                    className="roadmap-path-glow"
                    d="M 350 0 L 350 150 C 350 300, 650 300, 650 450 C 650 600, 350 600, 350 750 C 350 900, 650 900, 650 1050 L 650 1200" 
                    fill="none" 
                    stroke="url(#roadmapGradient)" 
                    strokeWidth="6" 
                    filter="url(#roadmapGlow)" 
                    opacity="0.4"
                />
                
                {/* Core Line */}
                <path 
                    className="roadmap-path-core"
                    d="M 350 0 L 350 150 C 350 300, 650 300, 650 450 C 650 600, 350 600, 350 750 C 350 900, 650 900, 650 1050 L 650 1200" 
                    fill="none" 
                    stroke="url(#roadmapGradient)" 
                    strokeWidth="2" 
                />
            </svg>

            {/* Milestones */}
            <div className="milestones-wrapper">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div 
                            key={index} 
                            className={`milestone milestone-${step.align}`}
                            style={{ 
                                top: `${(step.y / 1200) * 100}%`, 
                                left: `${(step.x / 1000) * 100}%` 
                            }}
                        >
                            {/* Node Point */}
                            <div className="milestone-node">
                                <div className="node-glow"></div>
                                <div className="node-core">
                                    <Icon size={20} color="#e0f2fe" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="milestone-content">
                                <div className="step-num">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <style jsx>{`
            .process-roadmap {
                padding: 120px 5vw;
                background: #000000;
                position: relative;
                overflow: hidden;
            }

            .roadmap-grid-overlay {
                position: absolute;
                inset: 0;
                background-image: 
                    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                background-size: 50px 50px;
                mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%);
                -webkit-mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%);
                z-index: 1;
                pointer-events: none;
            }
            .roadmap-header {
                text-align: center;
                margin-bottom: 100px;
                position: relative;
                z-index: 2;
            }

            .eyebrow {
                display: block;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.15em;
                color: #38bdf8;
                margin-bottom: 20px;
                text-transform: uppercase;
            }

            .roadmap-header h2 {
                font-size: clamp(36px, 5vw, 56px);
                font-weight: 800;
                line-height: 1.1;
                color: #fff;
                letter-spacing: -0.02em;
            }

            .roadmap-container {
                position: relative;
                width: 100%;
                max-width: 1000px;
                margin: 0 auto;
                aspect-ratio: 1000 / 1200;
            }

            .roadmap-svg {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }

            /* Draw animation on scroll - could be triggered by JS intersection observer, but CSS animation gives a nice continuous flow */
            .roadmap-path-core, .roadmap-path-glow {
                stroke-dasharray: 4000;
                stroke-dashoffset: 4000;
                animation: drawPath 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                animation-timeline: view();
                animation-range: entry 10% cover 50%;
            }

            @keyframes drawPath {
                to { stroke-dashoffset: 0; }
            }

            .milestones-wrapper {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
            }

            .milestone {
                position: absolute;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
            }

            .milestone-node {
                position: relative;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: rgba(10, 15, 30, 0.8);
                border: 1px solid rgba(56, 189, 248, 0.3);
                backdrop-filter: blur(8px);
                z-index: 3;
                transition: transform 0.3s ease, border-color 0.3s ease;
                box-shadow: 0 0 20px rgba(0,0,0,0.5);
            }

            .milestone:hover .milestone-node {
                transform: scale(1.1);
                border-color: rgba(56, 189, 248, 0.8);
            }

            .node-glow {
                position: absolute;
                inset: -5px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0) 70%);
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .milestone:hover .node-glow {
                opacity: 1;
            }

            .node-core {
                position: relative;
                z-index: 2;
            }

            .milestone-content {
                position: absolute;
                width: 340px;
                padding: 30px;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 20px;
                backdrop-filter: blur(12px);
                transition: transform 0.4s ease, background 0.4s ease;
            }

            .milestone:hover .milestone-content {
                background: rgba(255, 255, 255, 0.04);
                transform: translateY(-5px);
            }

            .milestone-left .milestone-content {
                right: calc(100% + 40px);
                text-align: right;
            }

            .milestone-right .milestone-content {
                left: calc(100% + 40px);
                text-align: left;
            }

            .step-num {
                font-size: 14px;
                font-family: monospace;
                font-weight: 600;
                color: #38bdf8;
                margin-bottom: 12px;
                letter-spacing: 0.1em;
            }

            .milestone-content h3 {
                font-size: 24px;
                font-weight: 700;
                color: #fff;
                margin-bottom: 12px;
                letter-spacing: 0.02em;
            }

            .milestone-content p {
                font-size: 15px;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.6);
                margin: 0;
            }

            @media (max-width: 900px) {
                .roadmap-container {
                    aspect-ratio: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    padding-left: 30px;
                }

                .roadmap-svg {
                    display: none;
                }

                .milestones-wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                }

                .milestone {
                    position: relative;
                    transform: none;
                    left: 0 !important;
                    top: 0 !important;
                    align-items: flex-start;
                }

                /* Mobile Vertical Line */
                .milestones-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 29px; /* center of node */
                    width: 2px;
                    background: linear-gradient(180deg, #0284c7 0%, #2dd4bf 100%);
                    opacity: 0.4;
                    z-index: 1;
                }

                .milestone-node {
                    min-width: 60px;
                    margin-right: 30px;
                }

                .milestone-content {
                    position: relative;
                    right: auto !important;
                    left: auto !important;
                    width: 100%;
                    text-align: left !important;
                    padding: 25px;
                }
            }
        `}</style>
    </section>
  );
}
