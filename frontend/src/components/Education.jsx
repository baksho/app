import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          Education
        </div>

        <div className="title-big" style={{
          marginBottom: '64px',
          maxWidth: '800px'
        }}>
          Academic Journey
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '900px'
        }}>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '24px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <GraduationCap size={24} color="var(--accent-primary)" />
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '8px'
                }}>
                  <div>
                    <h3 className="text-body" style={{
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      {edu.title}
                    </h3>
                    <div className="label-small" style={{ opacity: 0.7 }}>
                      {edu.company} • {edu.location}
                    </div>
                  </div>
                  <div className="label-small" style={{
                    padding: '4px 12px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--color-background)'
                  }}>
                    {edu.period}
                  </div>
                </div>

                <ul style={{
                  listStyle: 'none',
                  marginTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {edu.description.map((item, index) => (
                    <li
                      key={index}
                      className="text-body"
                      style={{
                        paddingLeft: '20px',
                        position: 'relative',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--accent-primary)'
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
