import React from 'react';
import { Trophy, Award, Code, Star, Zap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const stats = [
    {
      value: '377',
      label: 'Problems Solved',
      sublabel: 'LeetCode',
      icon: <Code size={20} />,
      accent: 'var(--accent-cyan)',
      glow: 'rgba(0,242,254,0.1)',
    },
    {
      value: '6+',
      label: 'Certifications',
      sublabel: 'Verified Skills',
      icon: <Award size={20} />,
      accent: '#fbbf24',
      glow: 'rgba(251,191,36,0.1)',
    },
    {
      value: '21+',
      label: 'Repositories',
      sublabel: 'GitHub Public',
      icon: <Star size={20} />,
      accent: '#34d399',
      glow: 'rgba(52,211,153,0.1)',
    },
    {
      value: '2+',
      label: 'Years Coding',
      sublabel: 'Professional',
      icon: <Zap size={20} />,
      accent: 'var(--accent-violet)',
      glow: 'rgba(143,67,255,0.1)',
    },
  ];

  const certifications = [
    { name: 'Java (Basic)', issuer: 'HackerRank', color: '#00ea64', icon: 'devicon-java-plain colored' },
    { name: 'SQL (Advanced)', issuer: 'HackerRank', color: '#00ea64', icon: 'devicon-mysql-plain colored' },
    { name: 'Problem Solving', issuer: 'HackerRank', color: '#00ea64', icon: 'devicon-python-plain colored' },
    { name: 'Spring Boot', issuer: 'Udemy', color: '#a435f0', icon: 'devicon-spring-plain colored' },
    { name: 'React Developer', issuer: 'Udemy', color: '#a435f0', icon: 'devicon-react-original colored' },
    { name: 'Docker Essentials', issuer: 'IBM', color: '#0043ce', icon: 'devicon-docker-plain colored' },
  ];

  return (
    <section id="achievements" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        {/* Achievement Stats Row */}
        <div className="achievement-stats-grid">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card ach-stat-card"
              style={{ '--ach-accent': stat.accent, '--ach-glow': stat.glow } as React.CSSProperties}
            >
              <div className="ach-icon-box">{stat.icon}</div>
              <div className="ach-value">{stat.value}</div>
              <div className="ach-label">{stat.label}</div>
              <div className="ach-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24' }}>
              <Trophy size={17} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>Certifications</h3>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="glass-card cert-card">
                {/* Top accent bar */}
                <div style={{ height: '3px', background: cert.color, borderRadius: '3px 3px 0 0', margin: '-1px -1px 20px -1px', opacity: 0.7 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className={cert.icon} style={{ fontSize: '28px' }} />
                  <div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>{cert.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, fontFamily: 'var(--font-mono)', marginTop: '3px' }}>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .achievement-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .ach-stat-card {
          padding: 28px 20px !important;
          border-radius: var(--border-radius-sm) !important;
          text-align: center;
          transition: border-color 0.3s ease, box-shadow 0.3s ease !important;
        }

        .ach-stat-card:hover {
          border-color: var(--ach-accent) !important;
          box-shadow: 0 0 30px var(--ach-glow) !important;
        }

        .ach-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--ach-glow);
          border: 1px solid var(--ach-accent);
          color: var(--ach-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: transform 0.3s ease;
        }

        .ach-stat-card:hover .ach-icon-box {
          transform: scale(1.1) rotate(-5deg);
        }

        .ach-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--ach-accent);
          font-family: var(--font-headings);
          line-height: 1;
          margin-bottom: 6px;
        }

        .ach-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 3px;
        }

        .ach-sublabel {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .cert-card {
          padding: 0 !important;
          border-radius: var(--border-radius-sm) !important;
          overflow: hidden;
          padding-bottom: 18px !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease !important;
        }

        .cert-card:hover {
          transform: translateY(-4px) !important;
        }

        @media (max-width: 991px) {
          .achievement-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 575px) {
          .achievement-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default Achievements;
