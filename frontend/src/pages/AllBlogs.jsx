import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Clock, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/blogs`);
      setBlogs(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs');
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
          All Blog Posts
        </div>

        <div className="title-big" style={{ marginBottom: '48px' }}>
          Blog
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">Loading blogs...</p>
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
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {blog.image && (
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    border: '1px solid var(--border-light)'
                  }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
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
                )}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <span className="label-small" style={{ opacity: 0.7 }}>
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="label-small" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      opacity: 0.7
                    }}>
                      <Clock size={12} />
                      {blog.read_time}
                    </span>
                  </div>

                  <h3 className="text-body" style={{
                    fontWeight: '600',
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {blog.title}
                  </h3>

                  <p className="text-body" style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                    flex: 1
                  }}>
                    {blog.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="label-small"
                        style={{
                          padding: '4px 12px',
                          border: '1px solid var(--border-light)',
                          backgroundColor: 'var(--bg-white)',
                          fontSize: '10px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <span className="label-small">Read on Medium</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">No blog posts found.</p>
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div style={{
            marginTop: '64px',
            textAlign: 'center'
          }}>
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Visit Medium Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
