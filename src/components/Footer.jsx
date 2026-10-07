"use client";
import { PERSONAL_INFO } from "@/utils/data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="editorial-footer">
        <div className="footer-top">
            {/* LEFT: Identity */}
            <div className="footer-col brand-col">
                <div className="footer-logo">
                    SHANKAR<span className="dot">.</span>
                </div>
                <p className="footer-tagline">
                    Software Engineer building scalable backend systems, intelligent AI applications, and premium digital experiences.
                </p>
            </div>

            {/* CENTER: Navigation */}
            <div className="footer-col nav-col">
                <span className="col-label">NAVIGATION</span>
                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#process">Process</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>

            {/* RIGHT: Socials */}
            <div className="footer-col social-col">
                <span className="col-label">CONNECT</span>
                <div className="footer-socials">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
                        GitHub <ArrowUpRight size={14} />
                    </a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn <ArrowUpRight size={14} />
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`}>
                        Email <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="copyright">
                &copy; {year} Shankar. All rights reserved.
            </div>
            <div className="status">
                <span className="status-dot"></span>
                Available for opportunities
            </div>
        </div>

        <style jsx>{`
            .editorial-footer {
                background: #020617; /* Connects visually with the CTA */
                padding: 100px 5vw 40px;
                color: #fff;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
            }

            .footer-top {
                max-width: 1300px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                gap: 60px;
                margin-bottom: 80px;
            }

            .footer-col {
                display: flex;
                flex-direction: column;
            }

            .brand-col {
                padding-right: 40px;
            }

            .footer-logo {
                font-size: 24px;
                font-weight: 800;
                letter-spacing: -0.02em;
                margin-bottom: 20px;
            }

            .footer-logo .dot {
                color: #38bdf8;
            }

            .footer-tagline {
                font-size: 16px;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.5);
                max-width: 380px;
            }

            .col-label {
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.1em;
                color: rgba(255, 255, 255, 0.3);
                margin-bottom: 30px;
            }

            .footer-nav, .footer-socials {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .footer-nav a, .footer-socials a {
                color: rgba(255, 255, 255, 0.7);
                text-decoration: none;
                font-size: 15px;
                font-weight: 500;
                transition: color 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 4px;
                width: fit-content;
            }

            .footer-nav a:hover, .footer-socials a:hover {
                color: #38bdf8;
            }

            .footer-bottom {
                max-width: 1300px;
                margin: 0 auto;
                padding-top: 30px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                color: rgba(255, 255, 255, 0.4);
            }

            .status {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .status-dot {
                width: 8px;
                height: 8px;
                background: #22c55e;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
            }

            @media (max-width: 768px) {
                .footer-top {
                    grid-template-columns: 1fr;
                    gap: 50px;
                }
                .footer-bottom {
                    flex-direction: column;
                    gap: 20px;
                    align-items: flex-start;
                }
            }
        `}</style>
    </footer>
  );
}
