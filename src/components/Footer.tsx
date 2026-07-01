import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon } from './icons/Github';
import { Link2, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  const socials = [
    { href: 'https://github.com/aayushpawar07', icon: <GithubIcon size={17} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/AayushParadkar/', icon: <Link2 size={17} />, label: 'LinkedIn' },
    { href: 'https://leetcode.com/u/aayushparadkar99/', icon: <Code size={17} />, label: 'LeetCode' },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '48px 0 32px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-headings)',
                fontWeight: 800,
                fontSize: '1.3rem',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px',
              }}
            >
              <Terminal size={20} style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'initial' }} />
              aayush.dev
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '240px', lineHeight: 1.6 }}>
              Java Full Stack Developer building scalable microservices and fluid frontends.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div>
            <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Quick Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    textAlign: 'left',
                    padding: 0,
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s',
                  }}
                  className="footer-nav-link"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social + Scroll Top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px', textAlign: 'right' }}>
                Connect
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="footer-social-btn"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
            &copy; {new Date().getFullYear()} Aayush Paradkar. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
            "Simplicity is the soul of efficiency."
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .footer-nav-link:hover {
          color: var(--accent-cyan) !important;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .footer-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0,242,254,0.05);
          transform: translateY(-2px);
        }

        .scroll-top-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0,242,254,0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-grid > div:last-child {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-grid > div:last-child {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
