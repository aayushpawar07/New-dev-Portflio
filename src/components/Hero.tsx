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
    { name: 'React', iconClass: 'devicon-react-original colored' },
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
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
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
            <span className="ann">@Configuration</span>{'\n'}
            <span className="ann">@EnableWebSecurity</span>{'\n'}
            <span className="kw">public class</span> <span className="cls">SecurityConfig</span> {'{'}
            {'\n  '}<span className="ann">@Bean</span>
            {'\n  '}<span className="kw">public</span> <span className="cls">SecurityFilterChain</span> <span className="func">filterChain</span>(<span className="cls">HttpSecurity</span> http) {'{'}
            {'\n    '}<span className="kw">return</span> http
            {'\n      '}.csrf(csrf {"->"} csrf.disable())
            {'\n      '}.authorizeHttpRequests(auth {"->"} auth
            {'\n        '}.requestMatchers(<span className="str">"/api/auth/**"</span>).permitAll()
            {'\n        '}.anyRequest().authenticated()
            {'\n      '})
            {'\n      '}.sessionManagement(sess {"->"} sess
            {'\n        '}.sessionCreationPolicy(<span className="cls">STATELESS</span>)
            {'\n      '})
            {'\n      '}.build();
            {'\n  '}{'}'}{'\n'}{'}'}
          </code>
        );
      case 'config':
        return (
          <code>
            <span className="kw">spring:</span>{'\n  '}
            <span className="kw">datasource:</span>{'\n    '}
            <span className="kw">url:</span> <span className="str">jdbc:mysql://aws-rds:3306/nexus_db</span>{'\n    '}
            <span className="kw">username:</span> <span className="str">admin_aayush</span>{'\n    '}
            <span className="kw">hikari:</span>{'\n      '}
            <span className="kw">maximum-pool-size:</span> <span className="cls">10</span>{'\n\n'}
            <span className="kw">eureka:</span>{'\n  '}
            <span className="kw">client:</span>{'\n    '}
            <span className="kw">serviceUrl:</span>{'\n      '}
            <span className="kw">defaultZone:</span> <span className="str">http://eureka-registry:8761/eureka/</span>
          </code>
        );
      default:
        return (
          <code>
            <span className="kw">public class</span> <span className="cls">Developer</span> {'{'}
            {'\n  '}<span className="ann">@Autowired</span>
            {'\n  '}<span className="kw">private</span> <span className="type">String</span> name = <span className="str">"Aayush"</span>;
            {'\n  '}<span className="kw">private</span> <span className="type">String</span> role = <span className="str">"Java Full Stack"</span>;
            {'\n  '}<span className="kw">private</span> <span className="type">String</span>[] stack = {'{'}
            {'\n    '}<span className="str">"Spring Boot"</span>, <span className="str">"AWS EC2"</span>,
            {'\n    '}<span className="str">"Microservices"</span>, <span className="str">"Docker"</span>
            {'\n  '};
            {'\n\n  '}<span className="kw">public void</span> <span className="func">deployApp</span>() {'{'}
            {'\n    '}<span className="cls">System</span>.out.println(<span className="str">"Application online."</span>);
            {'\n  '}{'}'}{'\n'}{'}'}
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
            {/* Available badge */}
            <div className="avail-badge">
              <span className="avail-dot" />
              <span>Available for Full-Time Roles & Freelance</span>
            </div>

            {/* Role badge */}
            <div className="role-badge">
              <Terminal size={13} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <span>Java Full Stack Developer @ Cloud Nexus</span>
            </div>

            <h1 className="hero-h1">
              Building Scalable
              <br />
              <span className="highlight">{displayText}</span>
              <span className="cursor-blink" />
            </h1>

            <p className="hero-sub">
              Building scalable microservices with Spring Boot and clean, interactive frontends with React.
            </p>

            <div className="hero-cta-row">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                Explore Projects <ArrowRight size={15} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Let's Connect
              </button>
            </div>
          </div>

          {/* Code Visual */}
          <div className="hero-visual">
            {/* Orbiting Icons */}
            <div className="tech-orb orbiter-1" title="Java"><i className="devicon-java-plain colored" style={{ fontSize: '18px' }} /></div>
            <div className="tech-orb orbiter-2" title="Spring Boot"><i className="devicon-spring-plain colored" style={{ fontSize: '18px' }} /></div>
            <div className="tech-orb orbiter-3" title="Docker"><i className="devicon-docker-plain colored" style={{ fontSize: '18px' }} /></div>
            <div className="tech-orb orbiter-4" title="AWS"><i className="devicon-amazonwebservices-original colored" style={{ fontSize: '18px' }} /></div>

            {/* Code Card */}
            <div className="visual-card">
              <div className="card-header">
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                </div>
                <div className="ide-tabs">
                  {(['developer', 'security', 'config'] as const).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`ide-tab ${activeTab === tab ? 'active' : ''}`}>
                      {tab === 'developer' ? 'Developer.java' : tab === 'security' ? 'SecurityConfig.java' : 'application.yml'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="code-body">
                <pre className="code-content" style={{ margin: 0 }}>
                  {renderCodeContent()}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <i className={item.iconClass} style={{ fontSize: '22px' }} />
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

        .avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 20px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.25);
          margin-bottom: 12px;
          font-family: var(--font-mono);
          color: #10b981;
          font-size: 0.73rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          flex-wrap: nowrap;
          white-space: nowrap;
        }

        .avail-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        .role-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 20px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hero-h1 {
          font-size: clamp(2rem, 4.5vw, 3.6rem);
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
          word-break: break-word;
        }

        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: var(--accent-cyan);
          margin-left: 4px;
          vertical-align: middle;
          animation: pulseGlow 1s step-end infinite;
        }

        .hero-sub {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 480px;
          color: var(--text-secondary);
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        /* Tech orbs */
        .tech-orb {
          position: absolute;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          z-index: 12; padding: 6px;
        }
        .orbiter-1 { top: -12px; left: -12px; }
        .orbiter-2 { top: -25px; right: 30px; }
        .orbiter-3 { bottom: -12px; left: 50px; }
        .orbiter-4 { bottom: 35px; right: -12px; }

        /* Code Card */
        .visual-card {
          background: rgba(10,9,18,0.9) !important;
          border: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 8px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0,0,0,0.4);
          position: relative; z-index: 10;
        }

        .card-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 10px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ide-tabs {
          display: flex;
          gap: 4px;
          margin-left: auto;
          flex-wrap: wrap;
        }

        .ide-tab {
          background: none; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 0.63rem;
          color: #64748b; padding: 3px 7px; border-radius: 4px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .ide-tab:hover { color: #e2e8f0; background: rgba(255,255,255,0.04); }
        .ide-tab.active { color: var(--accent-cyan); background: rgba(0,242,254,0.08); border: 1px solid rgba(0,242,254,0.2); }

        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .red { background: #ef4444; }
        .yellow { background: #f59e0b; }
        .green { background: #10b981; }

        .code-body {
          padding: 20px;
          min-height: 280px;
          overflow-x: auto;
        }

        .code-content {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #e2e8f0 !important;
          line-height: 1.65;
          white-space: pre;
        }

        .kw  { color: #f43f5e !important; font-weight: 500; }
        .cls { color: #60a5fa !important; }
        .type { color: #38bdf8 !important; }
        .ann { color: #a78bfa !important; }
        .str { color: #34d399 !important; }
        .func { color: #fbbf24 !important; }

        /* ======= MOBILE ======= */
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-text {
            display: flex; flex-direction: column; align-items: center;
          }
          .hero-sub { max-width: 100%; }
          .hero-visual {
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .avail-badge {
            font-size: 0.67rem;
            padding: 4px 10px;
            white-space: normal;
            text-align: center;
          }
          .role-badge {
            font-size: 0.68rem;
            max-width: 100%;
          }
          .hero-h1 {
            font-size: clamp(1.7rem, 6vw, 2.4rem);
          }
          .code-body {
            min-height: 220px;
            padding: 14px;
          }
          .code-content { font-size: 0.7rem; }
          .ide-tab { font-size: 0.58rem; padding: 2px 5px; }
          .orbiter-1, .orbiter-2, .orbiter-3, .orbiter-4 {
            width: 32px; height: 32px;
          }
          .hero-cta-row {
            justify-content: center;
          }
          .btn {
            padding: 10px 20px;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
