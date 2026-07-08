import React, { useState } from 'react';
import { GithubIcon } from './icons/Github';
import { Database, Network, Server, ExternalLink } from 'lucide-react';

interface ProjectTag {
  name: string;
  type: 'tag-java' | 'tag-spring' | 'tag-react' | 'tag-db' | 'tag-devops';
}

interface Project {
  title: string;
  repoName: string;
  description: string;
  category: 'backend' | 'fullstack';
  tags: ProjectTag[];
  githubUrl: string;
  demoUrl?: string;
  deviconClass: string;
  accentColor: string;
  accentGlow: string;
  inspectorType: 'SQL Schema' | 'REST Endpoints' | 'Gateway Config';
  inspectorIcon: React.ReactNode;
  inspectorContent: string;
}

interface ProjectsProps {
  selectedSkill: string | null;
}

export const Projects: React.FC<ProjectsProps> = ({ selectedSkill }) => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'fullstack'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projectsData: Project[] = [
    {
      title: 'Job Recommendation Portal',
      repoName: 'JobRecommendationPortal',
      description: 'Full-stack job portal with role-based auth for students and recruiters, built on Spring Boot + MySQL.',
      category: 'fullstack',
      deviconClass: 'devicon-java-plain colored',
      githubUrl: 'https://github.com/aayushpawar07/JobRecommendationPortal',
      accentColor: '#f97316',
      accentGlow: 'rgba(249,115,22,0.12)',
      tags: [
        { name: 'Java', type: 'tag-java' },
        { name: 'Spring Boot', type: 'tag-spring' },
        { name: 'MySQL', type: 'tag-db' },
        { name: 'JavaScript', type: 'tag-react' },
      ],
      inspectorType: 'SQL Schema',
      inspectorIcon: <Database size={14} />,
      inspectorContent: `CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL -- STUDENT, RECRUITER
);

CREATE TABLE jobs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    recruiter_id BIGINT,
    FOREIGN KEY (recruiter_id) REFERENCES users(id)
);`,
    },
    {
      title: 'Hotel Booking Application',
      repoName: 'HotelBookingApplication',
      description: 'Hotel reservation platform with Hibernate JPA entity relationships, room filters, and billing logs.',
      category: 'fullstack',
      deviconClass: 'devicon-spring-plain colored',
      githubUrl: 'https://github.com/aayushpawar07/HotelBookingApplication',
      accentColor: '#10b981',
      accentGlow: 'rgba(16,185,129,0.12)',
      tags: [
        { name: 'Java', type: 'tag-java' },
        { name: 'Spring Boot', type: 'tag-spring' },
        { name: 'React', type: 'tag-react' },
        { name: 'Hibernate', type: 'tag-spring' },
        { name: 'MySQL', type: 'tag-db' },
      ],
      inspectorType: 'REST Endpoints',
      inspectorIcon: <Server size={14} />,
      inspectorContent: `POST /api/bookings      --> Create room reservation
GET  /api/rooms/search  --> Search active room inventory
PUT  /api/bookings/{id} --> Update guest check-in logs
GET  /api/admin/reports --> Retrieve monthly billing logs`,
    },
    {
      title: 'DevBlockers Org Manager',
      repoName: 'DevBlockers',
      description: 'Microservice-based coordinator with Spring Cloud Gateway routing, Eureka discovery, and Docker configs.',
      category: 'backend',
      deviconClass: 'devicon-docker-plain colored',
      githubUrl: 'https://github.com/aayushpawar07/DevBlockers',
      accentColor: 'var(--accent-cyan)',
      accentGlow: 'rgba(0,242,254,0.1)',
      tags: [
        { name: 'Java', type: 'tag-java' },
        { name: 'Spring Boot', type: 'tag-spring' },
        { name: 'Microservices', type: 'tag-spring' },
        { name: 'Spring Cloud', type: 'tag-spring' },
        { name: 'Docker', type: 'tag-devops' },
      ],
      inspectorType: 'Gateway Config',
      inspectorIcon: <Network size={14} />,
      inspectorContent: `spring:
  cloud:
    gateway:
      routes:
        - id: booking-service
          uri: lb://BOOKING-SERVICE
          predicates:
            - Path=/api/bookings/**
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/api/users/**`,
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  const toggleInspector = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'backend', label: 'Microservices' },
            { key: 'fullstack', label: 'Full-Stack' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`filter-tab ${filter === tab.key ? 'active' : ''}`}
              onClick={() => setFilter(tab.key as typeof filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const isMatching = selectedSkill
              ? project.tags.some(tag => tag.name.toLowerCase() === selectedSkill.toLowerCase())
              : false;
            const isExpanded = expandedIndex === idx;
            const cardClass = `project-card glass-card ${selectedSkill ? (isMatching ? 'active-glow' : 'dimmed') : ''}`;

            return (
              <div
                key={idx}
                className={cardClass}
                style={{
                  '--proj-accent': project.accentColor,
                  '--proj-glow': project.accentGlow,
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                } as React.CSSProperties}
              >
                {/* Gradient top accent bar */}
                <div style={{
                  height: '3px',
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                  flexShrink: 0,
                }} />

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Card top row: icon + repo name */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: project.accentGlow,
                      border: `1px solid ${project.accentColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className={project.deviconClass} style={{ fontSize: '21px' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {project.repoName}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6', flex: 0 }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`tech-tag ${tag.type}`}>{tag.name}</span>
                    ))}
                  </div>

                  {/* Expandable Inspector Panel */}
                  {isExpanded && (
                    <div style={{
                      background: 'rgba(6, 6, 12, 0.95)',
                      borderRadius: '6px', padding: '16px', marginBottom: '18px',
                      border: `1px solid ${project.accentColor}30`,
                      animation: 'slideDown 0.2s ease forwards',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: project.accentColor, fontSize: '0.7rem', fontFamily: 'var(--font-mono)', marginBottom: '10px', paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {project.inspectorIcon}
                        <span>{project.inspectorType}</span>
                      </div>
                      <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#94a3b8', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: '1.55' }}>
                        <code>{project.inspectorContent}</code>
                      </pre>
                    </div>
                  )}

                  {/* Action Links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-action-link">
                      <GithubIcon size={14} /> Source Code
                    </a>

                    <button
                      onClick={() => toggleInspector(idx)}
                      className="proj-action-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: isExpanded ? project.accentColor : 'var(--text-muted)' }}
                    >
                      <Database size={14} />
                      {isExpanded ? 'Hide Specs' : 'View Specs'}
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-live-btn"
                      style={{ marginLeft: 'auto', '--proj-accent': project.accentColor } as React.CSSProperties}
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .project-card {
          border-radius: var(--border-radius-sm) !important;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), 
                      border-color 0.3s ease, 
                      box-shadow 0.3s ease !important;
        }

        .project-card:hover {
          transform: translateY(-5px) !important;
          border-color: var(--proj-accent) !important;
          box-shadow: 0 16px 40px -12px var(--proj-glow), 0 0 20px var(--proj-glow) !important;
        }

        .proj-action-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.2s;
        }

        .proj-action-link:hover { color: var(--text-primary); }

        .proj-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
          padding: 3px 10px;
          border-radius: 20px;
          color: var(--proj-accent);
          border: 1px solid var(--proj-accent);
          background: transparent;
          transition: all 0.2s ease;
        }

        .proj-live-btn:hover {
          background: var(--proj-accent);
          color: #000;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .filter-tabs {
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};
export default Projects;
