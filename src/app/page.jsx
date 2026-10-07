"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Process from "@/components/Process";

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      
      {/* IDEA */}
      <Process />
      
      {/* JOURNEY */}
      <Experience />
      
      {/* CRAFT */}
      <Skills />
      
      {/* PROJECTS */}
      <Projects onOpenProject={(id) => setSelectedProjectId(id)} />
      
      {/* LET'S BUILD */}
      <Contact />
      
      <Footer />
    </main>
  );
}
