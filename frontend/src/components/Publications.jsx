import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, FileText, Quote } from 'lucide-react';
import { publications } from '../data/mock';

const Publications = () => {
  const navigate = useNavigate();
  const featuredPublications = publications.filter(pub => pub.featured).slice(0, 3);

  return (
    <section id="publications" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          Research & Publications
        </div>

        <div className="title-big" style={{
          marginBottom: '64px',
          maxWidth: '800px'
        }}>
          Publications
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {featuredPublications.map((pub) => (
            <div key={pub.id} className="card" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 className="text-body" style={{
                    fontWeight: '600',
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {pub.title}
                  </h3>
                  
                  <div className="label-small" style={{
                    marginBottom: '8px',
                    opacity: 0.7
                  }}>
                    {pub.authors}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    marginBottom: '12px'
                  }}>
                    <span className="label-small" style={{
                      padding: '4px 12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--color-background)'
                    }}>
                      {pub.type}
                    </span>
                    <span className="label-small" style={{
                      padding: '4px 12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--color-background)'
                    }}>
                      {pub.year}
                    </span>
                    {pub.citations && (
                      <span className="label-small" style={{
                        padding: '4px 12px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--color-background)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Quote size={12} />
                        {pub.citations} citations
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-body" style={{
                marginBottom: '16px',
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                {pub.venue}
              </div>

              <p className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                {pub.abstract}
              </p>

              <div style={{
                display: 'flex',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
                flexWrap: 'wrap'
              }}>
                <a
                  href={pub.url}
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
                  View Paper
                </a>
                {pub.pdf && (
                  <a
                    href={pub.pdf}
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
                    <FileText size={16} />
                    PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '64px',
          textAlign: 'center'
        }}>
          <button
            onClick={() => navigate('/publications')}
            className="btn-accent"
          >
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
