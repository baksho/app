import React from 'react';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  return (
    <section id="about" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          About Me
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1/1',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              marginBottom: '24px'
            }}>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div>
            <h2 className="text-regular" style={{ marginBottom: '24px' }}>
              {personalInfo.name}
            </h2>
            
            <p className="text-body" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              {personalInfo.bio}
            </p>

            <div style={{ marginBottom: '32px' }}>
              <div className="label-small" style={{ marginBottom: '16px' }}>
                Technical Skills
              </div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="label-small"
                    style={{
                      padding: '8px 16px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--color-background)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <a href="#contact" className="btn-accent">
                Contact Me
              </a>
              <a href={personalInfo.resume} download className="btn-primary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
