import React, { useState } from 'react';
import { Mail, MapPin, Code, Send, CheckCircle, Phone, Link2 } from 'lucide-react';
import { GithubIcon } from './icons/Github';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const socials = [
    {
      href: 'https://github.com/aayushpawar07',
      label: 'GitHub',
      icon: <GithubIcon size={19} />,
      color: '#e2e8f0',
    },
    {
      href: 'https://www.linkedin.com/in/AayushParadkar/',
      label: 'LinkedIn',
      icon: <Link2 size={19} />,
      color: '#0ea5e9',
    },
    {
      href: 'https://leetcode.com/u/aayushparadkar99/',
      label: 'LeetCode',
      icon: <Code size={19} />,
      color: '#fbbf24',
    },
  ];

  return (
    <section id="contact" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <h3 className="contact-headline">
              Let's build something <span className="highlight">remarkable</span> together.
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.7 }}>
              Open to full-time Java Full Stack roles, REST API integrations, and microservices consulting.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'ayushparadkar4@gmail.com', href: 'mailto:ayushparadkar4@gmail.com', color: 'rgba(0,242,254,0.12)', border: 'rgba(0,242,254,0.2)', iconColor: 'var(--accent-cyan)' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+91 6265561446', href: 'tel:+916265561446', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)', iconColor: '#34d399' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Bhopal, MP, India', href: undefined, color: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', iconColor: 'var(--accent-violet)' },
              ].map((item, i) => (
                <div key={i} className="contact-detail-item">
                  <div
                    className="detail-icon"
                    style={{
                      background: item.color,
                      border: `1px solid ${item.border}`,
                      color: item.iconColor,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span className="detail-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="detail-value">{item.value}</a>
                    ) : (
                      <span className="detail-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '44px' }}>
              <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Find Me On
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="social-btn"
                    style={{ '--social-color': s.color } as React.CSSProperties}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card contact-form-card">
            {status === 'success' ? (
              <div className="form-success">
                <CheckCircle size={56} color="var(--accent-cyan)" style={{ filter: 'drop-shadow(0 0 12px rgba(0,242,254,0.4))', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="Project Inquiry / Hiring" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Tell me about your project..." required />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '0.82rem', margin: 0 }}>
                    Please fill out all required fields.
                  </p>
                )}

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '4px' }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : <><Send size={15} style={{ marginRight: 8 }} />Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-headline {
          font-size: 1.9rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 18px;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .detail-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-label {
          display: block;
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          margin-bottom: 2px;
          text-transform: uppercase;
        }

        .detail-value {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        a.detail-value:hover {
          color: var(--accent-cyan);
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          color: var(--social-color);
          border-color: var(--social-color);
          background: color-mix(in srgb, var(--social-color) 10%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px -8px var(--social-color);
        }

        .contact-form-card {
          padding: 40px !important;
          border-radius: var(--border-radius-sm) !important;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 350px;
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .contact-headline {
            font-size: 1.5rem;
          }
          .contact-form-card {
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .contact-headline {
            font-size: 1.3rem;
          }
          .contact-form-card {
            padding: 18px !important;
          }
        }
      `}</style>
    </section>
  );
};
export default Contact;
