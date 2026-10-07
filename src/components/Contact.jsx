"use client";
import { PERSONAL_INFO } from "@/utils/data";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="section editorial-cta" id="contact">
        <div className="cta-background">
            {/* Fine Grid */}
            <div className="grid-overlay"></div>
            {/* Radial Glow */}
            <div className="radial-glow"></div>
            {/* Curved Decorative Line */}
            <svg className="cta-curve" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0 100 Q 250 200, 500 100 T 1000 100" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" />
            </svg>
        </div>

        <div className="cta-content reveal">
            <div className="tech-labels">
                <span className="label">SYS.READY</span>
                <span className="label">STATUS // OPEN_TO_WORK</span>
                <span className="label">LOC // HYD_IND</span>
            </div>

            <h2 className="cta-heading">
                Let's make<br/>
                <span className="text-glow">something meaningful.</span>
            </h2>
            
            <p className="cta-sub">
                Have an idea, project, or complex engineering problem? Let's build scalable solutions together.
            </p>
            
            <div className="cta-actions">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary">
                    <Mail size={18} />
                    Start a conversation
                    <ArrowRight size={18} className="arrow" />
                </a>
                
                <div className="secondary-actions">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="btn-secondary">
                        <Github size={18} />
                        GitHub
                    </a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <style jsx>{`
            .editorial-cta {
                position: relative;
                padding: 180px 5vw;
                background: #020617; /* Very dark navy/black */
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                border-top: 1px solid rgba(255,255,255,0.05);
            }

            /* DECORATIONS */
            .cta-background {
                position: absolute;
                inset: 0;
                pointer-events: none;
                z-index: 1;
            }

            .grid-overlay {
                position: absolute;
                inset: 0;
                background-image: 
                    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                background-size: 40px 40px;
                mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
                -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
            }

            .radial-glow {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 800px;
                height: 800px;
                background: radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, rgba(2, 132, 199, 0) 70%);
            }

            .cta-curve {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.5;
            }

            /* CONTENT */
            .cta-content {
                position: relative;
                z-index: 2;
                max-width: 800px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .tech-labels {
                display: flex;
                gap: 20px;
                margin-bottom: 40px;
            }

            .label {
                font-family: monospace;
                font-size: 11px;
                color: rgba(56, 189, 248, 0.6);
                letter-spacing: 0.1em;
                padding: 4px 10px;
                border: 1px solid rgba(56, 189, 248, 0.2);
                border-radius: 4px;
                background: rgba(56, 189, 248, 0.05);
            }

            .cta-heading {
                font-size: clamp(48px, 8vw, 84px);
                font-weight: 800;
                line-height: 1.05;
                color: #fff;
                letter-spacing: -0.03em;
                margin-bottom: 30px;
            }

            .text-glow {
                background: linear-gradient(135deg, #e0f2fe, #38bdf8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                filter: drop-shadow(0 0 30px rgba(56, 189, 248, 0.4));
            }

            .cta-sub {
                font-size: 18px;
                line-height: 1.6;
                color: rgba(255,255,255,0.6);
                max-width: 500px;
                margin: 0 auto 50px auto;
            }

            /* BUTTONS */
            .cta-actions {
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
            }

            .btn-primary {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 18px 40px;
                background: #fff;
                color: #0f172a;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 0.02em;
                border-radius: 50px;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                box-shadow: 0 10px 30px rgba(255,255,255,0.15);
            }

            .btn-primary:hover {
                transform: translateY(-4px) scale(1.02);
                box-shadow: 0 15px 40px rgba(255,255,255,0.25), 0 0 20px rgba(56, 189, 248, 0.4);
            }

            .btn-primary .arrow {
                transition: transform 0.3s ease;
            }

            .btn-primary:hover .arrow {
                transform: translateX(4px);
            }

            .secondary-actions {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                justify-content: center;
            }

            .btn-secondary {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 24px;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.1);
                color: #cbd5e1;
                font-size: 14px;
                font-weight: 600;
                border-radius: 50px;
                text-decoration: none;
                transition: all 0.3s ease;
            }

            .btn-secondary:hover {
                background: rgba(255,255,255,0.08);
                border-color: rgba(255,255,255,0.2);
                color: #fff;
            }

            @media (max-width: 768px) {
                .tech-labels {
                    display: none;
                }
                .editorial-cta {
                    padding: 120px 5vw;
                }
            }
        `}</style>
    </section>
  );
}
