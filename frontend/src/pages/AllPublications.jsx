import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FileText, Quote } from 'lucide-react';
import { publications } from '../data/mock';

const AllPublications = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); // all, conference, journal

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type.toLowerCase() === filter);

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
          All Publications
        </div>

        <div className="title-big" style={{ marginBottom: '48px' }}>
          Research & Publications
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'btn-accent' : 'btn-primary'}
          >
            All Publications
          </button>
          <button
            onClick={() => setFilter('conference')}
            className={filter === 'conference' ? 'btn-accent' : 'btn-primary'}
          >
            Conferences
          </button>
          <button
            onClick={() => setFilter('journal')}
            className={filter === 'journal' ? 'btn-accent' : 'btn-primary'}
          >
            Journals
          </button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {filteredPublications.map((pub) => (
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

        {filteredPublications.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">No publications found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPublications;
