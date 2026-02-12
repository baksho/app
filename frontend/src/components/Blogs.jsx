import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API}/blogs?limit=3`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blogs" style={{
      padding: '120px 0',
      backgroundColor: 'var(--color-background)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          Latest Writings
        </div>

        <div className="title-big" style={{
          marginBottom: '64px',
          maxWidth: '800px'
        }}>
          Blog Posts
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px' }}>
            <p className="text-body">Loading blogs...</p>
          </div>
        ) : (
          <>
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

            <div style={{
              marginTop: '64px',
              textAlign: 'center'
            }}>
              <button
                onClick={() => navigate('/blogs')}
                className="btn-primary"
              >
                View All Posts
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blogs;
