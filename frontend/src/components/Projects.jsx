import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          Selected Work
        </div>

        <div className="title-big" style={{
          marginBottom: '64px',
          maxWidth: '800px'
        }}>
          Projects
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project) => (
            <div key={project.id} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div style={{
                width: '100%',
                aspectRatio: '16/10',
                overflow: 'hidden',
                marginBottom: '24px',
                border: '1px solid var(--border-light)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="text-body" style={{
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  {project.title}
                </h3>

                <p className="text-body" style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                  flex: 1
                }}>
                  {project.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="label-small"
                      style={{
                        padding: '4px 12px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--color-background)',
                        fontSize: '10px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-small"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'opacity 0.15s ease'
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-small"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'opacity 0.15s ease'
                      }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
