"use client";
export default function About() {
  return (
    <section className="section about" id="about">
        <div className="about-grid">
            <div className="about-image reveal">
                <img src="/profile-img.jpeg" alt="Pendyala Shankar" />
            </div>
            
            <div className="about-content reveal">
                <span className="section-kicker">
                    01 / ABOUT
                </span>
                
                <h2>
                    I turn ideas into
                    <br />
                    <em>digital experiences.</em>
                </h2>
                <p>
                    I’m a Computer Science undergraduate with a <strong>CGPA of 8.37</strong> and a <strong>3x hackathon winner</strong>, passionate about building products that are practical, scalable, and thoughtfully designed.
                </p>
                <p>
                    From shipping <strong>REST APIs and production web modules</strong> at a legal-tech startup to building and deploying full-stack applications across <strong>AI, agri-tech, computer vision, and ed-tech</strong>, I enjoy taking ideas from concept to execution.
                </p>
                <p>
                    My toolkit includes <strong>Python, JavaScript, React, SQL, DSA, OOP, and DBMS</strong>, with a growing focus on <strong>AI, intelligent systems, and modern software engineering</strong>.
                </p>
                <p>
                    <strong>Currently open to Software Engineering internships and new-grad opportunities.</strong>
                </p>                
                <a href="#contact" className="underline-link">
                    GET IN TOUCH ↗
                </a>
            </div>
        </div>
        
        <style jsx>{`
            .about-content p {
                margin-bottom: 20px;
            }
            .about-content p:last-of-type {
                margin-bottom: 40px;
            }
            .about-content strong {
                color: var(--black);
                font-weight: 700;
            }
            .about-image img {
                mix-blend-mode: multiply;
                /* Also ensure it doesn't have a solid background color applied anywhere else */
                background-color: transparent;
            }
        `}</style>
    </section>
  );
}
