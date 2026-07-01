import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll spy logic
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition-smooth)',
        background: isScrolled
          ? theme === 'dark'
            ? 'rgba(7, 6, 11, 0.85)'
            : 'rgba(248, 250, 252, 0.85)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            fontFamily: 'var(--font-headings)',
            fontWeight: 800,
            fontSize: '1.4rem',
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Terminal style={{ color: 'var(--accent-cyan)', width: 24, height: 24 }} />
          <span>aayush.dev</span>
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '30px',
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-headings)',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                padding: '6px 0',
              }}
            >
              {link.name}
              {activeSection === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan)',
                    boxShadow: '0 0 8px var(--accent-cyan)',
                  }}
                />
              )}
            </button>
          ))}

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-color)',
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Header Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '15px' }} className="mobile-actions">
          {/* Theme Switcher Mobile */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-color)',
            }}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: theme === 'dark' ? 'rgba(7, 6, 11, 0.98)' : 'rgba(248, 250, 252, 0.98)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            transition: 'var(--transition-smooth)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-headings)',
                fontWeight: 600,
                fontSize: '1.5rem',
                color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
            style={{ marginTop: '10px' }}
          >
            Hire Me
          </button>
        </div>
      )}

      {/* Inject Media Queries for Menu Visibility */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-actions {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-actions {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};
export default Navbar;
