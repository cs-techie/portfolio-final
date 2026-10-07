"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TERMINAL_COMMANDS, PERSONAL_INFO } from "@/utils/data";

export default function TerminalModal({ isOpen, onClose }) {
  const [inputCommand, setInputCommand] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Pendyala Shankar's Portfolio CLI v2.0." },
    { type: "system", text: "Type 'help' to see all available commands, or 'projects' / 'skills' for quick details." }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [history, isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: `$ ${inputCommand}` }];

    if (cmd === "clear") {
      setHistory([]);
      setInputCommand("");
      return;
    }

    if (TERMINAL_COMMANDS[cmd]) {
      newHistory.push({ type: "output", text: TERMINAL_COMMANDS[cmd] });
    } else {
      newHistory.push({
        type: "error",
        text: `Command not recognized: '${cmd}'. Type 'help' for valid commands.`
      });
    }

    setHistory(newHistory);
    setInputCommand("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-[#090d16]/95 border-slate-800 text-slate-100 font-mono sm:rounded-2xl p-0 overflow-hidden shadow-2xl">
        {/* Terminal Title Bar */}
        <div className="bg-[#0e1424] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="text-xs font-semibold text-slate-300 ml-2 flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              shankar@portfolio-cli:~
            </span>
          </div>
          <Badge variant="outline" className="text-[10px] border-cyan-500/30 text-cyan-400">
            Interactive Shell
          </Badge>
        </div>

        {/* Terminal Body Window */}
        <div className="p-5 h-[380px] overflow-y-auto space-y-3 text-xs leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === "input" && (
                <span className="text-cyan-400 font-bold">{item.text}</span>
              )}
              {item.type === "system" && (
                <span className="text-slate-400">{item.text}</span>
              )}
              {item.type === "output" && (
                <span className="text-slate-200">{item.text}</span>
              )}
              {item.type === "error" && (
                <span className="text-rose-400 font-semibold">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommandSubmit} className="bg-[#0b101c] px-4 py-3 border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-xs">$</span>
          <input
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder="Type 'help', 'about', 'skills', 'projects'..."
            className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-400 focus:outline-none font-mono"
            autoFocus
          />
          <button type="submit" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
