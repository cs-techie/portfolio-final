import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../utils/data';
import { soundFx } from '../utils/audio';

const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Pendyala Shankar CLI [Version 1.0.0]' },
    { type: 'system', content: 'Type "help" to view available commands.\n' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    soundFx.playTerminalKey();

    const newHistory = [...history, { type: 'user', content: `shankar@mvsrec:~$ ${cmdStr}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'github') {
      window.open(TERMINAL_COMMANDS.github, '_blank');
    } else if (trimmed === 'linkedin') {
      window.open(TERMINAL_COMMANDS.linkedin, '_blank');
    }

    const output = TERMINAL_COMMANDS[trimmed] || `Command not found: "${cmdStr}". Type "help" for a list of available commands.`;
    newHistory.push({ type: 'output', content: output });

    setHistory(newHistory);
    setCommandHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const chips = ['help', 'about', 'education', 'experience', 'skills', 'projects', 'certifications', 'contact', 'clear'];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0, 0, 0, 0.75)',
      }}
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
    >
      <div
        className="dev-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          height: '480px',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: 0,
          background: '#090d16',
          border: '1px solid var(--border-color)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TerminalIcon size={16} style={{ color: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              shankar@mvsrec: ~ (terminal)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={() => {
                soundFx.playClick();
                setHistory([]);
              }}
              style={{ color: 'var(--text-muted)', padding: '0.2rem' }}
              title="Clear screen"
            >
              <Trash2 size={15} />
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              style={{ color: 'var(--text-primary)', padding: '0.2rem' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Console Content */}
        <div
          style={{
            flexGrow: 1,
            padding: '1rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: 1.55,
            color: '#e2e8f0',
          }}
        >
          {history.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: '0.5rem',
                whiteSpace: 'pre-wrap',
                color: item.type === 'user' ? 'var(--accent)' : item.type === 'system' ? '#f59e0b' : '#cbd5e1',
              }}
            >
              {item.content}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion Chips */}
        <div
          style={{
            padding: '0.4rem 1rem',
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
            Run:
          </span>
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              style={{
                padding: '0.15rem 0.45rem',
                fontSize: '0.725rem',
                fontFamily: 'var(--font-mono)',
                borderRadius: '3px',
                background: 'var(--bg-surface)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#090d16',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 'bold' }}>
            shankar@mvsrec:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command..."
            style={{
              flexGrow: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}
          />
          <CornerDownLeft size={14} style={{ color: 'var(--text-muted)' }} />
        </div>

      </div>
    </div>
  );
};

export default TerminalModal;
