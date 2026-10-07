"use client";
import { SKILLS, SKILL_CATEGORIES } from "@/utils/data";
export default function Skills() {
  const categories = SKILL_CATEGORIES.filter(c => c.id !== "all");

  return (
    <section className="section skills" id="skills">
        <div className="skills-grid reveal">
            <div className="skill">
                <span className="section-kicker">03 / EXPERTISE</span>
                <h2>Core <em>Skills.</em></h2>
                <p style={{ maxWidth: '520px', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.7 }}>
                    My technical toolkit spans both front-end and back-end technologies, allowing me to build comprehensive, robust applications.
                </p>
            </div>
            {categories.map((category, index) => {
                const categorySkills = SKILLS.filter(s => s.category === category.id);
                if (categorySkills.length === 0) return null;
                
                return (
                    <div key={index} className="skill">
                        <div className="skill-number">0{index + 1}</div>
                        <h3>{category.label}</h3>
                        <div className="tags">
                            {categorySkills.map((s, i) => (
                                <span key={i}>{s.name}</span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  );
}
