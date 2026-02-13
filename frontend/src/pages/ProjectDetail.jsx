import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/projects/${id}`);
      setProject(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching project:', err);
      setError('Project not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="text-body">Loading project...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="text-body" style={{ color: 'var(--color-error)', marginBottom: '24px' }}>{error}</p>
          <button onClick={() => navigate('/projects')} className="btn-primary">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <button
          onClick={() => navigate('/projects')}
          className="btn-primary"
          style={{ marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Hero Image */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
            marginBottom: '48px',
            border: '1px solid var(--border-light)'
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Project Header */}
          <div style={{ marginBottom: '48px' }}>
            {project.featured && (
              <span className="label-small" style={{
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--accent-foreground)',
                marginBottom: '16px'
              }}>
                Featured Project
              </span>
            )}

            <h1 className="text-regular" style={{ marginBottom: '16px' }}>
              {project.title}
            </h1>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <Github size={16} style={{ marginRight: '8px' }} />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} style={{ marginRight: '8px' }} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div className="card" style={{ marginBottom: '32px' }}>
            <div className="label-small" style={{ marginBottom: '16px' }}>
              About This Project
            </div>
            <p className="text-body" style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              fontSize: '16px'
            }}>
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="card" style={{ marginBottom: '32px' }}>
            <div className="label-small" style={{ marginBottom: '16px' }}>
              Technologies Used
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-body"
                  style={{
                    padding: '8px 16px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--color-background)',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Metadata */}
          <div className="card">
            <div className="label-small" style={{ marginBottom: '16px' }}>
              Project Information
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={16} color="var(--text-secondary)" />
                <span className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Created: {new Date(project.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={16} color="var(--text-secondary)" />
                <span className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Last Updated: {new Date(project.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
