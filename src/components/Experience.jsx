"use client";
import { WORK_EXPERIENCE, EDUCATION } from "@/utils/data";

export default function Experience() {
  return (
    <section className="section journey" id="experience">
        <div className="journey-layout">
            
            {/* LEFT: Sticky Header */}
            <div className="journey-sidebar reveal">
                <span className="section-kicker">06 / RESUME</span>
                <h2>
                    The journey<br/>
                    behind the<br/>
                    <em>work.</em>
                </h2>
                <p>
                    A comprehensive look at my professional experience, academic background, and the skills I've developed along the way.
                </p>
                
                <div className="resume-buttons">
                    <a href="/assets/resume.pdf" target="_blank" className="btn-download">
                        View Resume ↗
                    </a>
                </div>
            </div>

            {/* RIGHT: Timeline Content */}
            <div className="journey-content reveal">
                
                {/* EXPERIENCE SECTION */}
                <div className="timeline-section">
                    <h3 className="timeline-title">EXPERIENCE</h3>
                    
                    <div className="timeline-list">
                        {WORK_EXPERIENCE.map((job, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="item-header">
                                    <div className="item-role">
                                        <h4>{job.role}</h4>
                                        <span className="item-company">— {job.company}</span>
                                    </div>
                                    <div className="item-date">{job.period}</div>
                                </div>
                                
                                <ul className="item-bullets">
                                    {job.highlights.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EDUCATION SECTION */}
                <div className="timeline-section" style={{ marginTop: '80px' }}>
                    <h3 className="timeline-title">EDUCATION</h3>
                    
                    <div className="timeline-list">
                        {EDUCATION.map((edu, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="item-header">
                                    <div className="item-role">
                                        <h4>{edu.degree}</h4>
                                    </div>
                                    <div className="item-date">{edu.year}</div>
                                </div>
                                <div className="item-institute">{edu.institute}</div>
                                <div className="item-cpi">{edu.cpi}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

        <style jsx>{`
            .journey {
                padding: 120px 5vw;
                background: #020617;
                color: #fff;
                border-top: 1px solid rgba(255,255,255,0.05);
            }

            .journey-layout {
                max-width: 1300px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1.8fr;
                gap: 80px;
                align-items: flex-start;
            }

            /* SIDEBAR */
            .journey-sidebar {
                position: sticky;
                top: 120px;
            }

            .section-kicker {
                display: block;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.15em;
                color: #38bdf8;
                margin-bottom: 20px;
            }

            .journey-sidebar h2 {
                font-size: clamp(48px, 5vw, 64px);
                font-weight: 800;
                line-height: 1.05;
                letter-spacing: -0.03em;
                margin-bottom: 30px;
            }

            .journey-sidebar h2 em {
                color: #38bdf8;
                font-style: normal;
            }

            .journey-sidebar p {
                font-size: 18px;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.6);
                max-width: 400px;
                margin-bottom: 40px;
            }

            .btn-download {
                display: inline-flex;
                align-items: center;
                padding: 16px 32px;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
                color: #fff;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                text-decoration: none;
                border-radius: 50px;
                transition: all 0.3s ease;
            }

            .btn-download:hover {
                background: #fff;
                color: #020617;
                transform: translateY(-2px);
            }

            /* TIMELINE CONTENT */
            .timeline-title {
                font-size: 24px;
                font-weight: 700;
                letter-spacing: 0.05em;
                color: rgba(255,255,255,0.4);
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }

            .timeline-list {
                display: flex;
                flex-direction: column;
                gap: 50px;
            }

            .timeline-item {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                flex-wrap: wrap;
                gap: 10px;
            }

            .item-role {
                display: flex;
                align-items: baseline;
                gap: 12px;
                flex-wrap: wrap;
            }

            .item-role h4 {
                font-size: 22px;
                font-weight: 700;
                color: #fff;
                margin: 0;
            }

            .item-company {
                font-size: 18px;
                color: #38bdf8;
                font-weight: 500;
            }

            .item-date {
                font-family: monospace;
                font-size: 14px;
                color: rgba(255,255,255,0.5);
                background: rgba(255,255,255,0.05);
                padding: 4px 12px;
                border-radius: 20px;
            }

            .item-bullets {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .item-bullets li {
                position: relative;
                padding-left: 20px;
                font-size: 16px;
                line-height: 1.7;
                color: rgba(255,255,255,0.7);
            }

            .item-bullets li::before {
                content: "•";
                position: absolute;
                left: 0;
                color: #38bdf8;
                font-weight: bold;
            }

            .item-institute {
                font-size: 18px;
                color: rgba(255,255,255,0.8);
            }

            .item-cpi {
                font-family: monospace;
                font-size: 14px;
                color: rgba(255,255,255,0.5);
            }

            @media (max-width: 900px) {
                .journey-layout {
                    grid-template-columns: 1fr;
                    gap: 60px;
                }
                .journey-sidebar {
                    position: relative;
                    top: 0;
                }
                .item-header {
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        `}</style>
    </section>
  );
}
