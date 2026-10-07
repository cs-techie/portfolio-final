"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Sparkles, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HACKATHONS, CERTIFICATIONS } from "@/utils/data";

export default function Achievements() {
  const accoladesList = [
    {
      bg: "bg-[#F5C518] text-slate-950",
      badge: "3X HACKATHON WINNER",
      badgeBg: "bg-slate-950 text-[#F5C518]",
      title: '"SHANKAR DELIVERED A PRODUCTION-READY AGRI-TECH PLATFORM UNDER 36 HOURS."',
      quote: "Built AgriConnect — a full-stack agricultural supply chain & direct farmer market platform, winning 1st place for exceptional architecture and UI responsiveness.",
      author: "MVSREC Hackathon Panel",
      role: "Hackathon Jury 2024",
      borderColor: "border-black/20",
      iconBg: "bg-black/20 text-slate-950",
    },
    {
      bg: "bg-[#FAF6F0] text-slate-950",
      badge: "LAWVRIKSH INTERNSHIP",
      badgeBg: "bg-[#FF4D27] text-white",
      title: '"OUTSTANDING SDE INTERN WITH EXCEPTIONAL API & BACKEND CRAFTSMANSHIP."',
      quote: "Developed core web modules, legal-tech UI components, and integrated complex JSON REST APIs during the SDE internship.",
      author: "Engineering Lead",
      role: "LawVriksh Tech",
      borderColor: "border-black/20",
      iconBg: "bg-black/20 text-slate-950",
    },
    {
      bg: "bg-[#C4D1FF] text-slate-950",
      badge: "ACADEMIC RECORD",
      badgeBg: "bg-[#3730A3] text-white font-black",
      title: '"CONSISTENT ACADEMIC DISTINCTION (8.90 CPI) IN COMPUTER SCIENCE."',
      quote: "Maintained a top-tier academic record while actively building real-world projects, leading student developer workshops, and competing in hackathons.",
      author: "Department of CSE",
      role: "MVSREC College",
      borderColor: "border-black/20",
      iconBg: "bg-black/20 text-slate-950",
    },
    {
      bg: "bg-[#5B21B6] text-white border border-[#A855F7]/50",
      badge: "VERIFIED CERTIFICATION",
      badgeBg: "bg-[#FFD700] text-slate-950 font-black",
      title: '"MASTERY IN DATA ANALYTICS, SQL ARCHITECTURE & MACHINE LEARNING."',
      quote: "Certified in Python Data Analysis, Data Science Stack, and Machine Learning workflows with hands-on computer vision implementations.",
      author: "Global Tech Certification",
      role: "Analytics & ML",
      borderColor: "border-white/20",
      iconBg: "bg-white/20 text-white",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#0d121d] text-slate-100 border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* VSK Header */}
        <div className="space-y-3 max-w-4xl">
          <span className="text-xs font-condensed font-black uppercase tracking-[0.2em] text-[#FF4D27] bg-[#FF4D27]/15 px-4 py-1.5 rounded-full border border-[#FF4D27]/40">
            KIND WORDS & HACKATHON ACCOLADES
          </span>

          <h2 className="font-condensed font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[0.08em] uppercase text-white">
            PROVEN UNDER <span className="text-highlight-yellow">PRESSURE</span>, RECOGNIZED FOR <span className="text-highlight-pink">EXCELLENCE</span>.
          </h2>
        </div>

        {/* VSK Style Solid Colorful Cards Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accoladesList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 ${item.bg} shadow-2xl flex flex-col justify-between space-y-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="space-y-4">
                <span className={`inline-block text-xs font-condensed font-black px-4 py-1.5 rounded-full uppercase tracking-[0.18em] ${item.badgeBg}`}>
                  {item.badge}
                </span>

                <h3 className="font-condensed font-black text-2xl sm:text-3xl leading-snug uppercase tracking-[0.08em]">
                  {item.title}
                </h3>

                <p className="font-grotesk text-sm sm:text-base leading-relaxed font-extrabold tracking-wide">
                  {item.quote}
                </p>
              </div>

              <div className={`pt-4 border-t ${item.borderColor} flex items-center justify-between`}>
                <div>
                  <div className="font-condensed font-black text-xl uppercase tracking-[0.15em]">
                    {item.author}
                  </div>
                  <div className="font-grotesk text-xs sm:text-sm font-extrabold tracking-wider opacity-90">
                    {item.role}
                  </div>
                </div>

                <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center font-condensed font-black text-xl shrink-0`}>
                  🏆
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
