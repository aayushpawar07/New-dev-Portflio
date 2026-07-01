import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const educationDetails = {
    collegeName: 'Sagar Institute of Science Technology and Research',
    location: 'Bhopal, MP, India',
    courseName: 'B.Tech in Computer Science and Engineering',
    startYear: '2022',
    endYear: '2026',
    bulletPoints: [
      'Core studies include Data Structures, Algorithms, DBMS, Operating Systems, and Artificial Intelligence.',
      'Completed specialized certifications in C++, Spring Boot, and Full Stack Web Development.',
    ],
  };

  return (
    <section id="education" className="section" style={{ zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-layout" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-card education-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Header portion */}
            <div className="edu-card-header" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  background: 'rgba(143, 67, 255, 0.08)',
                  border: '1px solid rgba(143, 67, 255, 0.15)',
                  color: 'var(--accent-violet)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {educationDetails.collegeName}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', fontWeight: 600, fontFamily: 'var(--font-headings)' }}>
                  {educationDetails.courseName}
                </p>
              </div>

              {/* Date Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={14} />
                <span>{educationDetails.startYear} - {educationDetails.endYear}</span>
              </div>
            </div>

            {/* Content description */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px', color: 'var(--text-primary)' }}>
                <BookOpen size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                  ACADEMIC HIGHLIGHTS
                </span>
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                {educationDetails.bulletPoints.map((point, index) => (
                  <li key={index} style={{ lineHeight: '1.6' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        .education-card {
          padding: 32px !important;
          border-radius: var(--border-radius-sm) !important;
        }
      `}</style>
    </section>
  );
};
export default Education;
