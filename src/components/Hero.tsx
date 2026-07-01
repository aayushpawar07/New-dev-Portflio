import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const words = [
    'Java Full Stack Developer',
    'Spring Boot Specialist',
    'Microservices Engineer',
    'React & REST API Builder',
  ];

  const marqueeItems = [
    { name: 'Java', iconClass: 'devicon-java-plain colored' },
    { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-original colored' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
    { name: 'React', iconClass: 'devicon-react-original colored' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    { name: 'Nginx', iconClass: 'devicon-nginx-original colored' },
    { name: 'Git', iconClass: 'devicon-git-plain colored' },
    { name: 'Maven', iconClass: 'devicon-maven-plain colored' },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeTab, setActiveTab] = useState<'developer' | 'security' | 'config'>('developer');

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer: number;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(activeWord.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === activeWord) {
          timer = window.setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setDisplayText(activeWord.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }

      timer = window.setTimeout(handleTyping, typingSpeed);
    };

    timer = window.setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderCodeContent = () => {
    switch (activeTab) {
      case 'security':
        return (
          <code>
            <span className="ann">@Configuration</span>
            {'\n'}
            <span className="ann">@EnableWebSecurity</span>
            {'\n'}
            <span className="kw">public class</span> <span className="cls">SecurityConfig</span> {'{'}
            {'\n  '}
            <span className="ann">@Bean</span>
            {'\n  '}
            <span className="kw">public</span> <span className="cls">SecurityFilterChain</span> <span className="func">filterChain</span>(<span className="cls">HttpSecurity</span> http) {'{'}
            {'\n    '}
            <span className="kw">return</span> http
            {'\n      '}.csrf(csrf {"->"} csrf.disable())
            {'\n      '}.authorizeHttpRequests(auth {"->"} auth
            {'\n        '}.requestMatchers(<span className="str">"/api/auth/**"</span>).permitAll()
            {'\n        '}.anyRequest().authenticated()
            {'\n      '})
            {'\n      '}.sessionManagement(sess {"->"} sess
            {'\n        '}.sessionCreationPolicy(<span className="cls">STATELESS</span>)
            {'\n      '})
            {'\n      '}.build();
            {'\n  '}
            {'}'}
            {'\n'}{'}'}
          </code>
        );
      case 'config':
        return (
          <code>
            <span className="kw">spring:</span>
            {'\n  '}
            <span className="kw">datasource:</span>
            {'\n    '}
            <span className="kw">url:</span> <span className="str">jdbc:mysql://aws-rds:3306/nexus_db</span>
            {'\n    '}
            <span className="kw">username:</span> <span className="str">admin_aayush</span>
            {'\n    '}
            <span className="kw">hikari:</span>
            {'\n      '}
            <span className="kw">maximum-pool-size:</span> <span className="cls">10</span>
            {'\n      '}
            <span className="kw">minimum-idle:</span> <span className="cls">5</span>
            {'\n\n'}
            <span className="kw">eureka:</span>
            {'\n  '}
            <span className="kw">client:</span>
            {'\n    '}
            <span className="kw">serviceUrl:</span>
            {'\n      '}
            <span className="kw">defaultZone:</span> <span className="str">http://eureka-registry:8761/eureka/</span>
          </code>
        );
      case 'developer':
      default:
        return (
          <code>
            <span className="kw">public class</span> <span className="cls">Developer</span> {'{'}
            {'\n  '}
            <span className="ann">@Autowired</span>
            {'\n  '}
            <span className="kw">private</span> <span className="type">String</span> name = <span className="str">"Aayush"</span>;
            {'\n  '}
            <span className="kw">private</span> <span className="type">String</span> role = <span className="str">"Java Full Stack"</span>;
            {'\n  '}
            <span className="kw">private</span> <span className="type">String</span>[] stack = {'{'}
            {'\n    '}
            <span className="str">"Spring Boot"</span>, <span className="str">"AWS EC2"</span>,
            {'\n    '}
            <span className="str">"Microservices"</span>, <span className="str">"Docker"</span>
            {'\n  '};
            {'\n\n  '}
            <span className="kw">public void</span> <span className="func">deployApp</span>() {'{'}
            {'\n    '}
            <span className="cls">System</span>.out.println(<span className="str">"Application online."</span>);
            {'\n  '}
            {'}'}
            {'\n'}
            {'}'}
          </code>
        );
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 20px)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', alignItems: 'center' }}>
        <div className="hero-grid" style={{ width: '100%' }}>
          {/* Main Info */}
          <div className="hero-text">
            {/* Available for work badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '14px',
              }}
            >
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulseGlow 1.5s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                color: '#10b981',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}>
                Available for Full-Time Roles & Freelance
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                marginBottom: '20px',
              }}
            >
              <Terminal size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                Java Full Stack Developer @ Cloud Nexus
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                marginBottom: '24px',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
              }}
            >
              Building Scalable
              <br />
              <span className="highlight">{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.85em',
                  backgroundColor: 'var(--accent-cyan)',
                  marginLeft: '4px',
                  animation: 'pulseGlow 1s step-end infinite',
                }}
              />
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '35px',
                maxWidth: '560px',
                color: 'var(--text-secondary)',
              }}
            >
              Building scalable microservices with Spring Boot and clean, interactive frontends with React.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
                style={{ borderRadius: '4px' }}
              >
                Explore Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
                style={{ borderRadius: '4px' }}
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            {/* Orbiting Tech Icons */}
            <div className="tech-orb orbiter-1" style={{ top: '-15px', left: '-15px' }} title="Java">
              <i className="devicon-java-plain colored" style={{ fontSize: '20px' }}></i>
            </div>
            <div className="tech-orb orbiter-2" style={{ top: '-30px', right: '35px' }} title="Spring Boot">
              <i className="devicon-spring-plain colored" style={{ fontSize: '20px' }}></i>
            </div>
            <div className="tech-orb orbiter-3" style={{ bottom: '-15px', left: '55px' }} title="Docker">
              <i className="devicon-docker-plain colored" style={{ fontSize: '20px' }}></i>
            </div>
            <div className="tech-orb orbiter-4" style={{ bottom: '40px', right: '-15px' }} title="AWS">
              <i className="devicon-amazonwebservices-original colored" style={{ fontSize: '20px' }}></i>
            </div>

            {/* Code Card - Persistent Dark theme with tabs */}
            <div className="visual-card" style={{ padding: '0px', overflow: 'hidden' }}>
              {/* Tab Header */}
              <div className="card-header" style={{ margin: 0, padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                  <button
                    onClick={() => setActiveTab('developer')}
                    className={`ide-tab ${activeTab === 'developer' ? 'active' : ''}`}
                  >
                    Developer.java
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`ide-tab ${activeTab === 'security' ? 'active' : ''}`}
                  >
                    SecurityConfig.java
                  </button>
                  <button
                    onClick={() => setActiveTab('config')}
                    className={`ide-tab ${activeTab === 'config' ? 'active' : ''}`}
                  >
                    application.yml
                  </button>
                </div>
              </div>
              <div style={{ padding: '24px', minHeight: '330px', display: 'flex', flexDirection: 'column' }}>
                <pre className="code-content" style={{ margin: 0 }}>
                  {renderCodeContent()}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Marquee at bottom */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <i className={item.iconClass} style={{ fontSize: '24px' }}></i>
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .tech-orb {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          z-index: 12;
          padding: 8px;
        }

        /* Enforce Dark Theme properties on visual IDE block persistently */
        .visual-card {
          background: rgba(12, 10, 20, 0.85) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 8px;
          width: 100%;
          max-width: 460px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
                      0 0 50px rgba(143, 67, 255, 0.04);
          position: relative;
          z-index: 10;
        }

        .ide-tab {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
          padding: 4px 8px;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .ide-tab:hover {
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.04);
        }

        .ide-tab.active {
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1.5px solid rgba(0, 242, 254, 0.2);
        }

        .card-header {
          display: flex;
          align-items: center;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .red { background-color: #ef4444; }
        .yellow { background-color: #f59e0b; }
        .green { background-color: #10b981; }

        .window-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94a3b8 !important;
          margin-left: 8px;
          letter-spacing: 0.02em;
        }

        .code-content {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: #e2e8f0 !important;
          line-height: 1.65;
        }

        /* Syntax colors */
        .kw { color: #f43f5e !important; font-weight: 500; }     /* Keyword */
        .cls { color: #60a5fa !important; }                       /* Class */
        .type { color: #38bdf8 !important; }                      /* Type */
        .ann { color: #a78bfa !important; }                       /* Annotation */
        .str { color: #34d399 !important; }                       /* String */
        .func { color: #fbbf24 !important; }                      /* Function */

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .hero-text {
            order: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-visual {
            order: 2;
            margin: 50px auto 30px auto;
            width: 100%;
            max-width: 380px;
          }
          .ide-tab {
            font-size: 0.62rem;
            padding: 3px 6px;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
