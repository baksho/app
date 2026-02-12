import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AllProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, featured

  useEffect(() => {
    fetchProjects();
  }, [filter]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const url = filter === 'featured' ? `${API}/projects?featured=true` : `${API}/projects`;
      const response = await axios.get(url);
      setProjects(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="grid-background" />
      
      <div className="container">
        <button
          onClick={() => navigate('/')}
          className="btn-primary"
          style={{ marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="label" style={{ marginBottom: '24px' }}>
          All Projects
        </div>

        <div className="title-big" style={{ marginBottom: '48px' }}>
          Portfolio
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'btn-accent' : 'btn-primary'}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={filter === 'featured' ? 'btn-accent' : 'btn-primary'}
          >
            Featured Only
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">Loading projects...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body" style={{ color: 'var(--color-error)' }}>{error}</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
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
                  {project.featured && (
                    <span className="label-small" style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      backgroundColor: 'var(--accent-primary)',
                      color: 'var(--accent-foreground)',
                      marginBottom: '12px',
                      width: 'fit-content'
                    }}>
                      Featured
                    </span>
                  )}

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
                      onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
        )}

        {!loading && !error && projects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
