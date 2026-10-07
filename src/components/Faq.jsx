"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "WHAT ROLES ARE YOU CURRENTLY SEEKING?",
      a: "I am actively seeking a Software Development Intern or Junior Software Engineer role where I can build production-ready full-stack web applications, AI integrations, and data engineering pipelines."
    },
    {
      q: "WHAT IS YOUR HACKATHON RECORD & STANDOUT PROJECTS?",
      a: "I am a 3-time Hackathon Winner! My standout project was AgriConnect — a full-stack agricultural supply chain platform connecting farmers directly with buyers using RESTful APIs, responsive React interfaces, and database matching."
    },
    {
      q: "WHAT WAS YOUR ROLE DURING THE LAWVRIKSH SDE INTERNSHIP?",
      a: "At LawVriksh, I developed core legal-tech web modules, optimized backend RESTful API endpoints, integrated structured JSON data contracts, and automated legal document workflows."
    },
    {
      q: "WHAT ARE YOUR CORE TECHNICAL STACK STRENGTHS?",
      a: "My primary stack covers Python, JavaScript, React 19, Next.js 16, Tailwind CSS, FastAPI, RESTful APIs, MySQL, and Data Analytics tools (Tableau, PowerBI, EDA, OpenCV, Deep Learning)."
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#0d121d] text-slate-100 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* VSK Section Header */}
        <div className="space-y-3 max-w-4xl">
          <span className="text-xs font-condensed font-black uppercase tracking-[0.2em] text-[#FF4D27] bg-[#FF4D27]/15 px-4 py-1.5 rounded-full border border-[#FF4D27]/40">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-condensed font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[0.08em] uppercase text-white">
            CLEAR ANSWERS ON <span className="text-highlight-yellow">ROLES</span>, <span className="text-highlight-emerald">HACKATHONS</span> & <span className="text-highlight-pink">TECHNICAL EXPERIENCE</span>.
          </h2>
        </div>

        {/* VSK Style Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl bg-[#141a26] border border-slate-800 overflow-hidden transition-all duration-300 shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left group hover:bg-[#182030] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-condensed font-black text-[#FF4D27] px-3.5 py-1 rounded-full bg-[#FF4D27]/15 border border-[#FF4D27]/40 tracking-[0.15em]">
                      0{index + 1}
                    </span>
                    <h3 className="font-condensed font-black text-xl sm:text-3xl text-white group-hover:text-[#FF4D27] transition-colors tracking-[0.08em] uppercase">
                      {faq.q}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-condensed font-black text-2xl text-white group-hover:border-[#FF4D27] group-hover:text-[#FF4D27] transition-all shrink-0">
                    {isOpen ? "-" : "+"}
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 font-grotesk text-slate-100 font-medium text-sm sm:text-base border-t border-slate-800/60 leading-relaxed tracking-wide"
                  >
                    <p className="pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
