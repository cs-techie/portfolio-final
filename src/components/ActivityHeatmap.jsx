import React from 'react';
import { Activity } from 'lucide-react';

const generateActivityData = () => {
  const weeks = 52;
  const daysPerWeek = 7;
  const data = [];
  
  // Seeded activity pattern mimicking a high-volume developer GitHub profile
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const isWeekend = d === 0 || d === 6;
      let level = 0;
      const rand = (w * 7 + d * 13) % 100;
      
      if (isWeekend) {
        level = rand > 65 ? (rand > 85 ? 3 : 1) : 0;
      } else {
        if (rand > 80) level = 4;
        else if (rand > 55) level = 3;
        else if (rand > 30) level = 2;
        else if (rand > 10) level = 1;
        else level = 0;
      }
      week.push(level);
    }
    data.push(week);
  }
  return data;
};

const activityLevels = [
  'var(--bg-surface-elevated)',
  'rgba(56, 189, 248, 0.25)',
  'rgba(56, 189, 248, 0.5)',
  'rgba(56, 189, 248, 0.75)',
  'var(--accent-cyan)',
];

const ActivityHeatmap = () => {
  const activityData = generateActivityData();

  return (
    <div className="scfo-glass-card" style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Ein Jahr, Tag für Tag · 365 Days of Code Pulse
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <span>480+ COMMITS & PULL REQUESTS</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>LESS</span>
            {activityLevels.map((bg, idx) => (
              <div key={idx} style={{ width: '10px', height: '10px', borderRadius: '2px', background: bg }} />
            ))}
            <span>MORE</span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Every cell represents an active development day. Dense clusters highlight sprint execution and hackathon build-outs; steady streams indicate continuous refactoring and optimization.
      </p>

      {/* Heatmap Grid */}
      <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(52, 1fr)',
            gap: '3px',
            minWidth: '720px',
          }}
        >
          {activityData.map((week, wIdx) => (
            <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  title={`Week ${wIdx + 1}, Day ${dIdx + 1}: Activity Level ${level}`}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '2px',
                    backgroundColor: activityLevels[level],
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.3)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
