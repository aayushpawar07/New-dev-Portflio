import React, { useState } from 'react';
import { Layers, Network, ShieldCheck, Database, Cpu } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  tech: string;
}

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('gateway');

  const nodes: Record<string, NodeDetail> = {
    client: {
      id: 'client',
      name: 'Client Application (React)',
      type: 'Frontend Portal',
      icon: <Cpu size={18} />,
      description: 'Single Page Application requesting REST resources. Configured with Axios interceptors to automatically embed secure JWT headers inside incoming header fields.',
      tech: 'React / TypeScript / CSS Variables',
    },
    gateway: {
      id: 'gateway',
      name: 'Spring Cloud API Gateway',
      type: 'Edge Routing Server',
      icon: <Network size={18} />,
      description: 'The single entry point of the ecosystem. Intercepts incoming queries, resolves CORS configurations, validates JWT tokens, and dynamically routes transactions to active microservices.',
      tech: 'Spring Boot / Spring Cloud Gateway',
    },
    eureka: {
      id: 'eureka',
      name: 'Eureka Discovery Server',
      type: 'Service Registry',
      icon: <Layers size={18} />,
      description: 'A service registry allowing microservice instances to dynamically self-register. The API Gateway queries Eureka to lookup hostnames and load-balance client requests across active service instances.',
      tech: 'Netflix Eureka / Spring Cloud Discovery',
    },
    services: {
      id: 'services',
      name: 'Core Microservices (Stateless)',
      type: 'Business Logic Layer',
      icon: <ShieldCheck size={18} />,
      description: 'Multiple decoupled business servers handling specific segments (e.g. Booking Engine, Job Portal engine, User Directory). Connects internally using Web Clients and REST templates.',
      tech: 'Java / Spring Boot / JPA Hibernate / JPA Auditing',
    },
    database: {
      id: 'database',
      name: 'Databases (Relational & Document)',
      type: 'Persistence Layer',
      icon: <Database size={18} />,
      description: 'Decoupled databases keeping business scopes isolated. MySQL handles relational structures with transactional ACID guarantees; MongoDB is used for rapid document ingestion.',
      tech: 'MySQL / PostgreSQL / MongoDB',
    },
  };

  const currentNode = nodes[activeNode];

  return (
    <section id="architecture" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">System Architecture</h2>
        <p style={{ marginBottom: '40px', maxWidth: '680px' }}>
          Here is a production-grade system blueprint detailing how I design and connect backend microservices. Hover over or tap nodes in the interactive diagram below to view implementation details:
        </p>

        <div className="architecture-grid">
          {/* SVG Diagram Canvas */}
          <div className="glass-card diagram-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <svg
              viewBox="0 0 740 380"
              width="100%"
              height="100%"
              style={{ maxHeight: '340px' }}
            >
              {/* Definitions for arrow markers and filters */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-muted)" opacity="0.4" />
                </marker>
                <marker id="arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent-cyan)" />
                </marker>
              </defs>

              {/* Data stream lines */}
              {/* Client -> Gateway */}
              <path
                d="M 120 190 H 220"
                fill="none"
                stroke={activeNode === 'client' || activeNode === 'gateway' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'client' || activeNode === 'gateway' ? 2 : 1.5}
                markerEnd={activeNode === 'client' || activeNode === 'gateway' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className={`flow-line ${activeNode === 'client' ? 'fast' : ''}`}
              />

              {/* Gateway <-> Eureka */}
              <path
                d="M 240 160 V 95 M 260 95 V 160"
                fill="none"
                stroke={activeNode === 'eureka' || activeNode === 'gateway' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'eureka' || activeNode === 'gateway' ? 2 : 1.5}
                className="flow-line"
              />

              {/* Gateway -> Services */}
              <path
                d="M 280 190 Q 360 110 440 110"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'gateway' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'gateway' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'gateway' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line"
              />
              <path
                d="M 280 190 H 440"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'gateway' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'gateway' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'gateway' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line fast"
              />
              <path
                d="M 280 190 Q 360 270 440 270"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'gateway' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'gateway' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'gateway' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line"
              />

              {/* Services -> Database */}
              <path
                d="M 520 110 H 620"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'database' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'database' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'database' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line"
              />
              <path
                d="M 520 190 Q 570 190 620 250"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'database' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'database' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'database' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line"
              />
              <path
                d="M 520 270 H 620"
                fill="none"
                stroke={activeNode === 'services' || activeNode === 'database' ? 'var(--accent-cyan)' : 'var(--border-color)'}
                strokeWidth={activeNode === 'services' || activeNode === 'database' ? 2 : 1.5}
                markerEnd={activeNode === 'services' || activeNode === 'database' ? 'url(#arrow-active)' : 'url(#arrow)'}
                className="flow-line reverse"
              />

              {/* SVG Nodes */}
              {/* Client App Node */}
              <g
                className={`node-group ${activeNode === 'client' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('client')}
                onClick={() => setActiveNode('client')}
                transform="translate(40, 150)"
              >
                <rect width="80" height="80" rx="8" className="node-rect" />
                <text x="40" y="45" className="node-text">React UI</text>
                <text x="40" y="60" className="node-sub">Client</text>
              </g>

              {/* API Gateway Node */}
              <g
                className={`node-group ${activeNode === 'gateway' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('gateway')}
                onClick={() => setActiveNode('gateway')}
                transform="translate(210, 150)"
              >
                <rect width="80" height="80" rx="8" className="node-rect" />
                <text x="40" y="40" className="node-text">API</text>
                <text x="40" y="52" className="node-text">Gateway</text>
                <text x="40" y="65" className="node-sub">Spring Cloud</text>
              </g>

              {/* Eureka Service Discovery Node */}
              <g
                className={`node-group ${activeNode === 'eureka' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('eureka')}
                onClick={() => setActiveNode('eureka')}
                transform="translate(210, 20)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="30" className="node-text">Eureka</text>
                <text x="40" y="45" className="node-sub">Service Registry</text>
              </g>

              {/* Microservices Cluster */}
              <g
                className={`node-group ${activeNode === 'services' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('services')}
                onClick={() => setActiveNode('services')}
                transform="translate(440, 70)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="32" className="node-text">Booking Svc</text>
                <text x="40" y="45" className="node-sub">Instance A</text>
              </g>
              <g
                className={`node-group ${activeNode === 'services' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('services')}
                onClick={() => setActiveNode('services')}
                transform="translate(440, 150)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="32" className="node-text">Portal Svc</text>
                <text x="40" y="45" className="node-sub">Instance B</text>
              </g>
              <g
                className={`node-group ${activeNode === 'services' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('services')}
                onClick={() => setActiveNode('services')}
                transform="translate(440, 230)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="32" className="node-text">Auth Svc</text>
                <text x="40" y="45" className="node-sub">Instance C</text>
              </g>

              {/* Databases Node */}
              <g
                className={`node-group ${activeNode === 'database' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('database')}
                onClick={() => setActiveNode('database')}
                transform="translate(620, 90)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="30" className="node-text">MySQL</text>
                <text x="40" y="45" className="node-sub">Relational DB</text>
              </g>
              <g
                className={`node-group ${activeNode === 'database' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('database')}
                onClick={() => setActiveNode('database')}
                transform="translate(620, 210)"
              >
                <rect width="80" height="60" rx="8" className="node-rect" />
                <text x="40" y="30" className="node-text">MongoDB</text>
                <text x="40" y="45" className="node-sub">NoSQL Document</text>
              </g>
            </svg>
          </div>

          {/* Dynamic details card */}
          <div className="glass-card detail-display-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: 'rgba(0, 242, 254, 0.08)',
                  border: '1px solid rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {currentNode.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {currentNode.name}
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {currentNode.type}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              {currentNode.description}
            </p>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
              <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '5px' }}>
                TECHNOLOGY STACK
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {currentNode.tech}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .architecture-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
        }

        .diagram-card {
          padding: 20px !important;
          background: rgba(12, 10, 20, 0.25) !important;
        }
        
        [data-theme='light'] .diagram-card {
          background: rgba(255, 255, 255, 0.45) !important;
        }

        .node-rect {
          fill: var(--bg-card);
          stroke: var(--border-color);
          stroke-width: 1px;
          transition: var(--transition-smooth);
        }

        .node-text {
          fill: var(--text-primary);
          font-family: var(--font-headings);
          font-size: 10px;
          font-weight: 700;
          text-anchor: middle;
          transition: var(--transition-smooth);
        }

        .node-sub {
          fill: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 8px;
          text-anchor: middle;
          transition: var(--transition-smooth);
        }

        .node-group {
          cursor: pointer;
        }

        .node-group:hover .node-rect,
        .node-group.active .node-rect {
          stroke: var(--accent-cyan);
          fill: rgba(0, 242, 254, 0.05);
          filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.15));
        }

        .node-group:hover .node-text,
        .node-group.active .node-text {
          fill: var(--accent-cyan);
        }

        .flow-line {
          transition: stroke 0.4s ease, stroke-width 0.4s ease;
        }

        @media (max-width: 991px) {
          .architecture-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
export default ArchitectureDiagram;
