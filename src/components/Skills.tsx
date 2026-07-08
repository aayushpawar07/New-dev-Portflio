import React from 'react';
import { Database, HardDrive, Layout, ShieldAlert, Cpu, Lock, Globe, Server } from 'lucide-react';

interface SkillItem {
  name: string;
  deviconClass?: string;
  fallbackIcon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  tagType: 'tag-spring' | 'tag-devops' | 'tag-db' | 'tag-react';
  accentColor: string;
  glowColor: string;
  skills: SkillItem[];
}

interface SkillsProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export const Skills: React.FC<SkillsProps> = ({ selectedSkill, onSelectSkill }) => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend & Languages',
      icon: <HardDrive size={18} />,
      tagType: 'tag-spring',
      accentColor: '#60a5fa',
      glowColor: 'rgba(96, 165, 250, 0.12)',
      skills: [
        { name: 'Java', deviconClass: 'devicon-java-plain colored' },
        { name: 'Spring Boot', deviconClass: 'devicon-spring-plain colored' },
        { name: 'Microservices', fallbackIcon: <Cpu size={13} /> },
        { name: 'Spring Security', deviconClass: 'devicon-spring-plain colored' },
        { name: 'JWT Auth', fallbackIcon: <Lock size={13} /> },
        { name: 'REST APIs', fallbackIcon: <Globe size={13} /> },
        { name: 'JPA / Hibernate', fallbackIcon: <Server size={13} /> },
        { name: 'Maven', deviconClass: 'devicon-maven-plain colored' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <ShieldAlert size={18} />,
      tagType: 'tag-devops',
      accentColor: '#f97316',
      glowColor: 'rgba(249, 115, 22, 0.12)',
      skills: [
        { name: 'AWS EC2', deviconClass: 'devicon-amazonwebservices-original colored' },
        { name: 'Docker', deviconClass: 'devicon-docker-plain colored' },
        { name: 'Nginx', deviconClass: 'devicon-nginx-original colored' },
        { name: 'Git & GitHub', deviconClass: 'devicon-git-plain colored' },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={18} />,
      tagType: 'tag-db',
      accentColor: '#a78bfa',
      glowColor: 'rgba(167, 139, 250, 0.12)',
      skills: [
        { name: 'MySQL', deviconClass: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', deviconClass: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', deviconClass: 'devicon-mongodb-plain colored' },
        { name: 'SQL Query Tuning', fallbackIcon: <Database size={13} /> },
      ],
    },
    {
      title: 'Frontend & UI',
      icon: <Layout size={18} />,
      tagType: 'tag-react',
      accentColor: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.12)',
      skills: [
        { name: 'JavaScript', deviconClass: 'devicon-javascript-plain colored' },
        { name: 'React', deviconClass: 'devicon-react-original colored' },
        { name: 'TypeScript', deviconClass: 'devicon-typescript-plain colored' },
        { name: 'HTML5', deviconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3', deviconClass: 'devicon-css3-plain colored' },
      ],
    },
  ];

  return (
    <section id="skills" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Tech Arsenal</h2>
        <p style={{ marginBottom: '48px', maxWidth: '480px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Click any skill to highlight matching projects below.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card skill-category-card"
              style={{
                '--cat-accent': category.accentColor,
                '--cat-glow': category.glowColor,
              } as React.CSSProperties}
            >
              {/* Card Header */}
              <div className="cat-header">
                <div className="cat-icon-box">
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
                <span className="cat-count">{category.skills.length}</span>
              </div>

              {/* Accent divider */}
              <div className="cat-divider" />

              {/* Skill Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.toLowerCase() === skill.name.toLowerCase();
                  return (
                    <button
                      key={sIdx}
                      className={`skill-chip ${isSelected ? 'skill-chip--active' : ''}`}
                      onClick={() => onSelectSkill(isSelected ? null : skill.name)}
                      title={`Filter projects by ${skill.name}`}
                    >
                      {skill.deviconClass ? (
                        <i className={skill.deviconClass} style={{ fontSize: '15px' }} />
                      ) : (
                        skill.fallbackIcon && (
                          <span style={{ display: 'flex', opacity: 0.7 }}>
                            {skill.fallbackIcon}
                          </span>
                        )
                      )}
                      <span>{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-category-card {
          padding: 28px !important;
          border-radius: var(--border-radius-sm) !important;
          transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
        }

        .skill-category-card:hover {
          border-color: var(--cat-accent) !important;
          box-shadow: 0 0 30px var(--cat-glow) !important;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .cat-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cat-glow);
          border: 1px solid var(--cat-accent);
          color: var(--cat-accent);
          flex-shrink: 0;
        }

        .cat-count {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--cat-accent);
          background: var(--cat-glow);
          border: 1px solid var(--cat-accent);
          border-radius: 20px;
          padding: 2px 8px;
          font-weight: 600;
        }

        .cat-divider {
          height: 1px;
          background: linear-gradient(90deg, var(--cat-accent) 0%, transparent 70%);
          opacity: 0.25;
          margin-bottom: 18px;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid var(--border-color);
          background: rgba(255,255,255,0.02);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .skill-chip:hover {
          border-color: var(--cat-accent);
          color: var(--cat-accent);
          background: var(--cat-glow);
          transform: translateY(-1px);
        }

        .skill-chip--active {
          border-color: var(--cat-accent) !important;
          background: var(--cat-glow) !important;
          color: var(--cat-accent) !important;
          box-shadow: 0 0 10px var(--cat-glow);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-category-card {
            padding: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .skill-chip {
            font-size: 0.75rem;
            padding: 4px 10px;
          }
        }
      `}</style>
    </section>
  );
};
export default Skills;
