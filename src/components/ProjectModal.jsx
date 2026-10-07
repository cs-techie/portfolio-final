"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Cpu, Github, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/utils/data";

export default function ProjectModal({ projectId, onClose }) {
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <Dialog open={!!projectId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-[#090d16]/95 border-slate-800 text-slate-100 sm:rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="space-y-3 text-left pb-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <Badge 
              variant={project.badge.includes("Winner") ? "gold" : "default"}
              className="gap-1.5 font-condensed font-black text-xs uppercase tracking-[0.15em] bg-[#7C3AED] text-white border border-purple-300 px-3 py-1"
            >
              {project.badge.includes("Winner") ? <Trophy className="w-3.5 h-3.5 text-amber-300" /> : <Cpu className="w-3.5 h-3.5 text-cyan-300" />}
              {project.badge}
            </Badge>
            <span className="text-xs font-grotesk font-extrabold text-amber-300 tracking-wider">{project.date}</span>
          </div>

          <div>
            <DialogTitle className="text-2xl sm:text-3xl font-condensed font-black text-white uppercase tracking-[0.08em]">{project.title}</DialogTitle>
            <DialogDescription className="text-sm text-cyan-300 font-grotesk font-extrabold mt-1 tracking-wide">
              {project.subtitle}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4 text-sm leading-relaxed">
          
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-1">
            <div className="text-xs font-condensed font-black text-[#FF4D27] uppercase tracking-[0.18em]">Executive Summary:</div>
            <p className="text-slate-100 font-grotesk font-medium text-xs sm:text-sm leading-relaxed tracking-wide">{project.summary}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
              <div className="text-xs font-condensed font-black text-rose-300 uppercase tracking-[0.18em]">The Problem:</div>
              <p className="text-xs sm:text-sm text-slate-100 font-grotesk font-medium leading-relaxed tracking-wide">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
              <div className="text-xs font-condensed font-black text-[#00FF9D] uppercase tracking-[0.18em]">The Solution:</div>
              <p className="text-xs sm:text-sm text-slate-100 font-grotesk font-medium leading-relaxed tracking-wide">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <div className="text-xs font-condensed font-black text-amber-300 uppercase tracking-[0.18em]">Key Features & Modules:</div>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-grotesk font-medium tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF9D] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Contribution */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-1">
            <div className="text-xs font-condensed font-black text-cyan-300 uppercase tracking-[0.18em]">My Personal Contribution:</div>
            <p className="text-xs sm:text-sm text-slate-100 font-grotesk font-medium leading-relaxed tracking-wide">{project.contribution}</p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} className="text-xs font-grotesk font-extrabold tracking-wider bg-slate-900 border border-slate-700 text-slate-100 px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <Button variant="outline" size="sm" onClick={onClose} className="border-slate-700 text-slate-100 font-condensed font-black tracking-wider hover:bg-slate-800">
            Close Case Study
          </Button>

          {project.githubUrl && (
            <Button size="sm" asChild className="gap-2 bg-[#FF4D27] hover:bg-[#ff3b10] text-black font-condensed font-black text-sm tracking-[0.18em]">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                View GitHub Repository ↗
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
