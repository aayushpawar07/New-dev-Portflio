import React from 'react';
import { Briefcase, GitBranch, Terminal, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Java Full Stack Developer',
      company: 'Cloud Nexus',
      period: 'Present',
      description: 'Engineering responsive React frontends and resilient Spring Boot REST APIs for cloud-deployed applications.',
      details: [
        'Building scalable microservices with Spring Boot and dynamic admin dashboards with React/TypeScript.',
        'Optimizing MySQL queries, managing Docker containers, and hosting services on AWS EC2.',
      ],
      icon: <Briefcase size={16} />,
      badge: 'Full-Time',
      accentColor: 'var(--accent-cyan)',
      glowColor: 'rgba(0, 242, 254, 0.08)',
    },
    {
      role: 'Open Source Contributor',
      company: 'GitHub Community',
      period: 'Active',
      description: 'Collaborating on open developer utilities, system integrations, and React templates.',
      details: [
        'Contributing backend classes and reusable React elements to community repositories.',
        'Collaborating on git workflows, merging pull requests, and resolving package issues.',
      ],
      icon: <GitBranch size={16} />,
      badge: 'Collaboration',
      accentColor: 'var(--accent-violet)',
      glowColor: 'rgba(143, 67, 255, 0.08)',
    },
    {
      role: 'Independent Developer',
      company: 'Academic & Self-Guided',
      period: 'Continuous',
      description: 'Building end-to-end fullstack products to explore system architectures.',
      details: [
        'Designed and hosted AssessHub (exam portal) and JobRecommendationPortal on AWS EC2.',
        'Developed food delivery order tracking interfaces using ReactJS, NodeJS, and MongoDB.',
      ],
      icon: <Terminal size={16} />,
      badge: 'Freelance / Labs',
      accentColor: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.08)',
    },
  ];

  return (
    <section id="experience" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline-wrapper">
          {/* Vertical line */}
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  background: exp.accentColor,
                  boxShadow: `0 0 12px ${exp.accentColor}`,
                }}
              />

              {/* Card */}
              <div
                className="glass-card timeline-card"
                style={{
                  '--exp-accent': exp.accentColor,
                  '--exp-glow': exp.glowColor,
                } as React.CSSProperties}
              >
                {/* Top row */}
                <div className="timeline-card-header">
                  <div
                    className="exp-icon-box"
                    style={{ background: exp.glowColor, color: exp.accentColor }}
                  >
                    {exp.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: '0.88rem', color: exp.accentColor, fontWeight: 600 }}>
                      {exp.company}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                    <span className="exp-badge" style={{ color: exp.accentColor, background: exp.glowColor, border: `1px solid ${exp.accentColor}` }}>
                      {exp.badge}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Accent divider */}
                <div style={{ height: '1px', background: `linear-gradient(90deg, ${exp.accentColor}, transparent)`, opacity: 0.2, margin: '14px 0' }} />

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '14px', fontStyle: 'italic', lineHeight: 1.5 }}>
                  {exp.description}
                </p>

                <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {detail}
                    </li>
                  ))}
                </ul>

                {idx === 0 && (
                  <div style={{ marginTop: '18px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: exp.accentColor, fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.accentColor, animation: 'pulse 1.5s infinite' }} />
                    Currently Active
                    <ArrowUpRight size={12} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-wrapper {
          position: relative;
          padding-left: 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-line {
          position: absolute;
          left: 11px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-violet), #34d399);
          opacity: 0.25;
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 28px;
        }

        .timeline-dot {
          position: absolute;
          left: -32px;
          top: 24px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          z-index: 2;
        }

        .timeline-card {
          padding: 24px !important;
          border-radius: var(--border-radius-sm) !important;
          transition: border-color 0.3s ease, box-shadow 0.3s ease !important;
        }

        .timeline-card:hover {
          border-color: var(--exp-accent) !important;
          box-shadow: 0 0 30px var(--exp-glow) !important;
        }

        .timeline-card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }

        .exp-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-badge {
          font-size: 0.68rem;
          font-weight: 600;
          font-family: var(--font-mono);
          padding: 2px 8px;
          border-radius: 20px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @media (max-width: 768px) {
          .timeline-card-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};
export default Experience;
