"use client";
import { PROJECTS } from "@/utils/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="section editorial-projects" id="projects">
        <div className="projects-header reveal">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Featured <em>Projects.</em></h2>
        </div>
        
        <div className="projects-container">
            {PROJECTS.map((project, index) => {
                const isEven = index % 2 === 0;
                const titleInitial = project.title.substring(0, 2).toUpperCase();

                return (
                    <div 
                        key={project.id || index} 
                        className={`project-row reveal ${isEven ? 'row-even' : 'row-odd'}`}
                    >
                        {/* Visual / Mockup Area */}
                        <div className="project-visual">
                            <div className="visual-inner">
                                {project.image ? (
                                    <div className="project-image-wrapper">
                                        <img src={project.image} alt={project.title} className="project-img" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="abstract-bg">
                                            <span className="huge-initial">{titleInitial}</span>
                                        </div>
                                        <div className="visual-glass">
                                            <div className="browser-dots">
                                                <span></span><span></span><span></span>
                                            </div>
                                            <div className="glass-title">{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="project-info">
                            <div className="project-num">
                                0{index + 1}
                                <span className="project-year">{project.date?.substring(0, 4) || "2024"}</span>
                            </div>
                            
                            <h3>{project.title}</h3>
                            
                            <div className="project-tags">
                                {project.tags?.slice(0, 4).map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                            
                            <p className="project-desc">{project.summary}</p>
                            
                            <a 
                                href={project.githubUrl || "#"} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="view-btn"
                            >
                                View Project <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>

        <style jsx>{`
            .editorial-projects {
                padding: 120px 5vw;
                background: #060913;
                position: relative;
            }

            .projects-header {
                text-align: center;
                margin-bottom: 120px;
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

            .projects-header h2 {
                font-size: clamp(40px, 6vw, 64px);
                font-weight: 800;
                line-height: 1.1;
                color: #fff;
                letter-spacing: -0.02em;
            }

            .projects-container {
                max-width: 1300px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 150px;
            }

            .project-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 80px;
                align-items: center;
            }

            .row-odd {
                direction: rtl; /* flips the grid columns */
            }

            .row-odd > * {
                direction: ltr; /* resets text direction inside */
            }

            /* VISUAL */
            .project-visual {
                position: relative;
                width: 100%;
                aspect-ratio: 4 / 3;
                perspective: 1000px;
            }

            .visual-inner {
                width: 100%;
                height: 100%;
                border-radius: 24px;
                background: linear-gradient(145deg, #0f172a, #020617);
                border: 1px solid rgba(255, 255, 255, 0.05);
                box-shadow: 0 40px 80px rgba(0,0,0,0.5);
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                transform-style: preserve-3d;
            }

            .project-row:hover .visual-inner {
                transform: scale(1.03) rotateY(2deg);
            }

            .row-odd:hover .visual-inner {
                transform: scale(1.03) rotateY(-2deg);
            }

            .project-image-wrapper {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
            }

            .project-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0.9;
                transition: opacity 0.6s ease, transform 0.6s ease;
            }

            .project-row:hover .project-img {
                opacity: 1;
                transform: scale(1.05);
            }

            .abstract-bg {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.15;
            }

            .huge-initial {
                font-size: 280px;
                font-weight: 900;
                color: #38bdf8;
                font-family: 'Inter', sans-serif;
                letter-spacing: -0.05em;
                background: linear-gradient(135deg, #38bdf8, #818cf8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                filter: blur(4px);
                transition: filter 0.6s ease, transform 0.6s ease;
            }

            .project-row:hover .huge-initial {
                filter: blur(8px);
                transform: scale(1.1);
            }

            .visual-glass {
                position: relative;
                width: 80%;
                height: 70%;
                background: rgba(15, 23, 42, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                padding: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                transform: translateZ(30px);
                display: flex;
                flex-direction: column;
            }

            .browser-dots {
                display: flex;
                gap: 6px;
                margin-bottom: 20px;
            }

            .browser-dots span {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #334155;
            }
            .browser-dots span:nth-child(1) { background: #ef4444; }
            .browser-dots span:nth-child(2) { background: #eab308; }
            .browser-dots span:nth-child(3) { background: #22c55e; }

            .glass-title {
                margin-top: auto;
                margin-bottom: auto;
                text-align: center;
                font-family: monospace;
                font-size: 14px;
                color: rgba(255,255,255,0.3);
                letter-spacing: 0.05em;
            }

            /* INFO */
            .project-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .project-num {
                display: flex;
                align-items: center;
                gap: 16px;
                font-size: 16px;
                font-family: monospace;
                font-weight: 600;
                color: #38bdf8;
                margin-bottom: 24px;
            }

            .project-year {
                font-size: 12px;
                color: rgba(255,255,255,0.4);
                border: 1px solid rgba(255,255,255,0.1);
                padding: 4px 10px;
                border-radius: 12px;
            }

            .project-info h3 {
                font-size: clamp(32px, 4vw, 48px);
                font-weight: 800;
                color: #fff;
                line-height: 1.1;
                margin-bottom: 24px;
                letter-spacing: -0.02em;
            }

            .project-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 30px;
            }

            .tag {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                color: #94a3b8;
                padding: 6px 14px;
                border-radius: 8px;
                font-size: 12px;
                letter-spacing: 0.05em;
            }

            .project-desc {
                font-size: 17px;
                line-height: 1.7;
                color: rgba(255, 255, 255, 0.6);
                margin-bottom: 40px;
                max-width: 500px;
            }

            .view-btn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                align-self: flex-start;
                padding: 16px 32px;
                background: #fff;
                color: #0f172a;
                font-weight: 700;
                font-size: 14px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                border-radius: 50px;
                text-decoration: none;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                box-shadow: 0 10px 20px rgba(255,255,255,0.1);
            }

            .view-btn:hover {
                transform: translateY(-4px);
                box-shadow: 0 15px 30px rgba(255,255,255,0.2);
            }

            @media (max-width: 1024px) {
                .project-row {
                    grid-template-columns: 1fr;
                    gap: 40px;
                    direction: ltr; /* Reset flip on mobile */
                }

                .project-row:nth-child(even) .project-visual {
                    order: -1; /* Always show visual first on mobile */
                }

                .project-info {
                    padding: 0 10px;
                }

                .projects-container {
                    gap: 100px;
                }
            }
        `}</style>
    </section>
  );
}
