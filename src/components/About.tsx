import React from 'react';
import { Server, Lock, Layout, Database, FileText } from 'lucide-react';

interface Competency {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  iconColor: string;
  glowColor: string;
}

export const About: React.FC = () => {
  const coreCompetencies: Competency[] = [
    {
      title: 'Backend Engineering',
      description: 'Building REST APIs with Spring Boot and designing robust system schemas.',
      icon: <Server size={20} />,
      colorClass: 'comp-backend',
      iconColor: 'var(--accent-blue)',
      glowColor: 'rgba(59, 130, 246, 0.08)',
    },
    {
      title: 'Frontend Engineering',
      description: 'Crafting responsive client interfaces using React, TypeScript, and state trees.',
      icon: <Layout size={20} />,
      colorClass: 'comp-frontend',
      iconColor: 'var(--accent-green)',
      glowColor: 'rgba(16, 185, 129, 0.08)',
    },
    {
      title: 'API Authentication & JWT',
      description: 'Securing endpoints using Spring Security and stateless JWT authentication.',
      icon: <Lock size={20} />,
      colorClass: 'comp-security',
      iconColor: 'var(--accent-violet)',
      glowColor: 'rgba(143, 67, 255, 0.08)',
    },
    {
      title: 'Database Architecture',
      description: 'Designing normalized database schemas and optimizing Hibernate JPA queries.',
      icon: <Database size={20} />,
      colorClass: 'comp-db',
      iconColor: 'var(--accent-orange)',
      glowColor: 'rgba(249, 115, 22, 0.08)',
    },
  ];

  return (
    <section id="about" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>

        <div className="about-grid">
          {/* Narrative bio with isometric visual stack on right */}
          <div className="about-bio-layout glass-card" style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '32px' }}>
            <div style={{ flex: 1.2 }}>
              <h3
                style={{
                  fontSize: '1.65rem',
                  marginBottom: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: '1.3',
                }}
              >
                Building secure, scalable microservices and fluid frontends.
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                Full Stack Developer @ <strong>Cloud Nexus</strong>. Based in Bhopal, India, I write clean, testable code, coordinate microservice networks, and craft responsive user experiences.
              </p>
              
              <div>
                <a
                  href="https://drive.google.com/file/d/1UL6DoyKKamc5DM3nWvbe_-TUkwW52JcB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.82rem',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <FileText size={14} /> View Resume
                </a>
              </div>
            </div>

            {/* Interactive Floating Full-Stack SVG visual */}
            <div className="visual-stack-container" style={{ flex: 0.8, display: 'flex', justifyContent: 'center' }}>
              <svg viewBox="0 0 200 240" width="150" height="180" className="isometric-stack-svg">
                {/* Connecting vertical data path */}
                <path d="M 100,55 V 175" fill="none" stroke="var(--border-color)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Animated data packet traveling between layers */}
                <circle cx="100" cy="55" r="4.5" fill="var(--accent-cyan)" style={{ filter: 'drop-shadow(0 0 6px var(--accent-cyan))' }}>
                  <animate attributeName="cy" values="55;115;175;115;55" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.4;0.9;0.4;0.9" dur="3.5s" repeatCount="indefinite" />
                </circle>

                {/* Layer 3 - Bottom: Database (MySQL/PostgreSQL) */}
                <g className="stack-layer layer-db" transform="translate(0, 120)">
                  <path d="M 20,55 L 100,15 L 180,55 L 100,95 Z" fill="rgba(59, 130, 246, 0.04)" stroke="var(--accent-blue)" strokeWidth="1.5" />
                  {/* Database Cylinder */}
                  <g transform="translate(88, 38)">
                    <ellipse cx="12" cy="6" rx="12" ry="4.5" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
                    <path d="M 0,6 V 13 A 12 4.5 0 0 0 24,13 V 6" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
                    <path d="M 0,13 V 20 A 12 4.5 0 0 0 24,20 V 13" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" />
                  </g>
                  <text x="100" y="80" fill="var(--text-muted)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-mono)">DATABASE</text>
                </g>

                {/* Layer 2 - Middle: Gateway/Auth (Spring Security) */}
                <g className="stack-layer layer-security" transform="translate(0, 60)">
                  <path d="M 20,55 L 100,15 L 180,55 L 100,95 Z" fill="rgba(143, 67, 255, 0.04)" stroke="var(--accent-violet)" strokeWidth="1.5" />
                  {/* Shield / Security Indicator */}
                  <path d="M 94,36 L 106,36 L 106,45 C 106,50 102,52 100,54 C 98,52 94,50 94,45 Z" fill="none" stroke="var(--accent-violet)" strokeWidth="1.5" />
                  <text x="100" y="80" fill="var(--text-muted)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-mono)">API GATEWAY</text>
                </g>

                {/* Layer 1 - Top: Client UI (React App) */}
                <g className="stack-layer layer-frontend" transform="translate(0, 0)">
                  <path d="M 20,55 L 100,15 L 180,55 L 100,95 Z" fill="rgba(16, 185, 129, 0.04)" stroke="var(--accent-green)" strokeWidth="1.5" />
                  {/* React-like Orbital Ring */}
                  <g transform="translate(100, 45)">
                    <ellipse cx="0" cy="0" rx="14" ry="4.5" fill="none" stroke="var(--accent-green)" strokeWidth="1.2" transform="rotate(30)" />
                    <ellipse cx="0" cy="0" rx="14" ry="4.5" fill="none" stroke="var(--accent-green)" strokeWidth="1.2" transform="rotate(-30)" />
                    <circle cx="0" cy="0" r="2.5" fill="var(--accent-green)" />
                  </g>
                  <text x="100" y="80" fill="var(--text-muted)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-mono)">FRONTEND UI</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Grid of 4 Focus areas */}
          <div className="focus-cards-grid">
            {coreCompetencies.map((comp, index) => (
              <div
                key={index}
                className={`glass-card focus-card ${comp.colorClass}`}
                style={{
                  '--hover-glow': comp.glowColor,
                  '--icon-color': comp.iconColor,
                } as React.CSSProperties}
              >
                <div className="focus-icon-box">{comp.icon}</div>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {comp.title}
                </h4>
                <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .about-bio-layout {
          height: 100%;
          border-radius: var(--border-radius-sm) !important;
        }

        .focus-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .focus-card {
          padding: 24px !important;
          border-radius: var(--border-radius-sm) !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.3s ease, 
                      box-shadow 0.3s ease, 
                      background-color 0.3s ease !important;
        }

        .focus-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--icon-color);
          margin-bottom: 16px;
          transition: var(--transition-smooth);
        }

        [data-theme='light'] .focus-icon-box {
          background: rgba(15, 23, 42, 0.02);
        }

        /* Color-coded hover behaviors */
        .focus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px -10px var(--hover-glow), 
                      0 0 15px var(--hover-glow) !important;
          border-color: var(--icon-color) !important;
        }

        .focus-card:hover .focus-icon-box {
          color: #ffffff;
          background: var(--icon-color);
          border-color: transparent;
          box-shadow: 0 0 10px var(--icon-color);
        }

        /* Isometric visual stack animations */
        @keyframes floatStack {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .isometric-stack-svg {
          animation: floatStack 6s ease-in-out infinite;
        }

        .stack-layer {
          transition: transform 0.3s ease;
        }
        .layer-frontend:hover { transform: translate(0, -5px); }
        .layer-security:hover { transform: translate(0, -3px) scale(1.01); }
        .layer-db:hover { transform: translate(0, -1px); }

        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-bio-layout {
            flex-direction: column;
            text-align: center;
          }
          .visual-stack-container {
            margin-top: 20px;
          }
        }

        @media (max-width: 575px) {
          .focus-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default About;
