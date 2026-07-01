import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, FolderGit, GitCommit, Star, Users, Activity, GitBranch, Flame, Code2 } from 'lucide-react';

export const Stats: React.FC = () => {
  const statsData = [
    { value: '21', label: 'Repositories', icon: <FolderGit size={17} />, accent: 'var(--accent-cyan)', glow: 'rgba(0,242,254,0.12)' },
    { value: '468', label: 'Contributions', icon: <GitCommit size={17} />, accent: 'var(--accent-violet)', glow: 'rgba(143,67,255,0.12)' },
    { value: '15', label: 'Stars Earned', icon: <Star size={17} />, accent: '#fbbf24', glow: 'rgba(251,191,36,0.12)' },
    { value: '22', label: 'Followers', icon: <Users size={17} />, accent: '#10b981', glow: 'rgba(16,185,129,0.12)' },
  ];

  // Real LeetCode stats for aayushparadkar99
  const leetcodeStats = { total: 377, easy: 295, medium: 82, hard: 0 };
  const easyDash = (leetcodeStats.easy / leetcodeStats.total) * 251.2;
  const mediumDash = (leetcodeStats.medium / leetcodeStats.total) * 251.2;

  // Top languages (based on GitHub repos)
  const topLangs = [
    { name: 'Java', percent: 52, color: '#f97316', icon: 'devicon-java-plain colored' },
    { name: 'JavaScript', percent: 22, color: '#fbbf24', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', percent: 12, color: '#38bdf8', icon: 'devicon-typescript-plain colored' },
    { name: 'SQL', percent: 8, color: '#a78bfa', icon: 'devicon-mysql-plain colored' },
    { name: 'YAML / Config', percent: 6, color: '#34d399', icon: 'devicon-docker-plain colored' },
  ];

  // Animate bar widths
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Streak grid (fake contribution squares — 12 weeks × 7 days)
  const weeks = 14;
  const days = 7;
  const intensities = [0, 1, 2, 3, 4];
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const seed = (w * 7 + d + 3) % 11;
      if (seed < 3) return 0;
      if (seed < 6) return 1;
      if (seed < 8) return 2;
      if (seed < 10) return 3;
      return 4;
    })
  );

  const intensityColor: Record<number, string> = {
    0: 'rgba(255,255,255,0.04)',
    1: 'rgba(0,242,254,0.2)',
    2: 'rgba(0,242,254,0.4)',
    3: 'rgba(0,242,254,0.65)',
    4: 'rgba(0,242,254,0.9)',
  };

  return (
    <section id="stats-dashboard" ref={sectionRef} style={{ position: 'relative', zIndex: 10, padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">

        {/* Row 1: 4 counters + LeetCode donut */}
        <div className="stats-top-row">
          <div className="github-stats-grid">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card stat-counter-card"
                style={{ '--s-accent': stat.accent, '--s-glow': stat.glow } as React.CSSProperties}
              >
                <div className="stat-icon-box">{stat.icon}</div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* LeetCode Donut */}
          <div className="glass-card leetcode-card">
            <div style={{ position: 'relative', width: '108px', height: '108px', flexShrink: 0 }}>
              <svg viewBox="0 0 100 100" width="108" height="108">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="9"
                  strokeDasharray={`${easyDash} 251.2`} strokeDashoffset="0"
                  transform="rotate(-90 50 50)" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="9"
                  strokeDasharray={`${mediumDash} 251.2`} strokeDashoffset={`-${easyDash}`}
                  transform="rotate(-90 50 50)" strokeLinecap="round" />
              </svg>
              <div className="donut-center">
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-headings)', lineHeight: 1 }}>{leetcodeStats.total}</span>
                <span style={{ fontSize: '0.52rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solved</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <a href="https://leetcode.com/u/aayushparadkar99/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
                <i className="devicon-leetcode-plain colored" style={{ fontSize: '16px' }} />
                aayushparadkar99
                <ExternalLink size={11} style={{ color: 'var(--text-muted)' }} />
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
                {[
                  { label: 'Easy', val: leetcodeStats.easy, color: '#10b981', pct: Math.round((leetcodeStats.easy / leetcodeStats.total) * 100) },
                  { label: 'Medium', val: leetcodeStats.medium, color: '#fbbf24', pct: Math.round((leetcodeStats.medium / leetcodeStats.total) * 100) },
                  { label: 'Hard', val: leetcodeStats.hard, color: '#ef4444', pct: 0 },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '4px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }} />
                        {item.label}
                      </span>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{item.val}</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: animated ? `${item.pct}%` : '0%', background: item.color, borderRadius: '2px', transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Activity Grid + Top Languages + Streak */}
        <div className="stats-bottom-row">

          {/* Contribution Activity Heatmap */}
          <div className="glass-card stats-panel">
            <div className="panel-header">
              <div className="panel-icon" style={{ background: 'rgba(0,242,254,0.1)', color: 'var(--accent-cyan)' }}>
                <Activity size={15} />
              </div>
              <span>Activity Heatmap</span>
              <a href="https://github.com/aayushpawar07" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem' }}>
                github/aayushpawar07 <ExternalLink size={10} />
              </a>
            </div>
            <div className="heatmap-grid">
              {grid.map((week, wi) => (
                <div key={wi} className="heatmap-col">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      className="heat-cell"
                      style={{ background: intensityColor[level] }}
                      title={`Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Less</span>
              {intensities.map(i => (
                <div key={i} style={{ width: '9px', height: '9px', borderRadius: '2px', background: intensityColor[i] }} />
              ))}
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>More</span>
            </div>
          </div>

          {/* Top Languages */}
          <div className="glass-card stats-panel">
            <div className="panel-header">
              <div className="panel-icon" style={{ background: 'rgba(143,67,255,0.1)', color: 'var(--accent-violet)' }}>
                <Code2 size={15} />
              </div>
              <span>Top Languages</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {topLangs.map((lang) => (
                <div key={lang.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className={lang.icon} style={{ fontSize: '15px' }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{lang.name}</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: lang.color, fontWeight: 600 }}>{lang.percent}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: animated ? `${lang.percent}%` : '0%',
                      background: `linear-gradient(90deg, ${lang.color}, ${lang.color}88)`,
                      borderRadius: '2px',
                      transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Streak */}
          <div className="glass-card stats-panel streak-panel">
            <div className="panel-header">
              <div className="panel-icon" style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24' }}>
                <Flame size={15} />
              </div>
              <span>GitHub Streak</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '4px' }}>
              {[
                { label: 'Total Contributions', value: '468', color: 'var(--accent-cyan)', sub: 'Aug 2023 – Present' },
                { label: 'Longest Streak', value: '335', color: '#fbbf24', sub: 'Jul 2024 – May 2025' },
                { label: 'Current Streak', value: '1', color: '#10b981', sub: 'Jul 1' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
                  <div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0, fontFamily: 'var(--font-mono)', opacity: 0.6 }}>{item.sub}</p>
                  </div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: item.color, fontFamily: 'var(--font-headings)', lineHeight: 1 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
              <GitBranch size={13} style={{ color: 'var(--text-muted)' }} />
              <a href="https://github.com/aayushpawar07" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                github.com/aayushpawar07 <ExternalLink size={10} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .stats-top-row {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 18px;
          align-items: stretch;
          margin-bottom: 18px;
        }

        .github-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .stat-counter-card {
          padding: 20px !important;
          border-radius: var(--border-radius-sm) !important;
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease !important;
        }

        .stat-counter-card:hover {
          border-color: var(--s-accent) !important;
          box-shadow: 0 0 24px var(--s-glow) !important;
        }

        .stat-icon-box {
          width: 30px; height: 30px;
          border-radius: 7px;
          background: var(--s-glow);
          border: 1px solid var(--s-accent);
          color: var(--s-accent);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 6px;
        }

        .stat-value {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-headings);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: var(--font-mono);
        }

        .leetcode-card {
          display: flex;
          gap: 22px;
          align-items: center;
          padding: 24px !important;
          border-radius: var(--border-radius-sm) !important;
        }

        .donut-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .leetcode-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-headings);
        }
        .leetcode-link:hover { color: var(--accent-cyan) !important; }

        /* Bottom row */
        .stats-bottom-row {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 18px;
          align-items: stretch;
        }

        .stats-panel {
          padding: 22px !important;
          border-radius: var(--border-radius-sm) !important;
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-headings);
        }

        .panel-icon {
          width: 28px; height: 28px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Heatmap */
        .heatmap-grid {
          display: flex;
          gap: 3px;
        }

        .heatmap-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .heat-cell {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          transition: opacity 0.2s;
          cursor: default;
        }

        .heat-cell:hover {
          opacity: 0.75;
          outline: 1px solid rgba(255,255,255,0.2);
        }

        @media (max-width: 1024px) {
          .stats-bottom-row {
            grid-template-columns: 1fr 1fr;
          }
          .stats-bottom-row > .stats-panel:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .stats-top-row {
            grid-template-columns: 1fr;
          }
          .stats-bottom-row {
            grid-template-columns: 1fr;
          }
          .leetcode-card {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 575px) {
          .github-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default Stats;
