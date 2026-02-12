import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '48px' }}>
          Get In Touch
        </div>

        <div className="title-big" style={{
          marginBottom: '64px',
          maxWidth: '800px'
        }}>
          Contact
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          maxWidth: '1200px'
        }}>
          <div>
            <p className="text-body" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                  Email
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="text-body"
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'opacity 0.15s ease'
                  }}
                >
                  your.email@example.com
                </a>
              </div>

              <div>
                <div className="label-small" style={{ marginBottom: '8px', opacity: 0.7 }}>
                  Location
                </div>
                <p className="text-body" style={{ margin: 0 }}>
                  Your Location
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            {submitSuccess ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 24px',
                textAlign: 'center'
              }}>
                <CheckCircle size={48} color="var(--accent-primary)" style={{ marginBottom: '24px' }} />
                <h3 className="text-body" style={{ marginBottom: '12px' }}>
                  Message Sent!
                </h3>
                <p className="text-body" style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <label className="label-small" style={{
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: 0,
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      backgroundColor: 'var(--color-background)',
                      transition: 'border-color 0.15s ease'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="label-small" style={{
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: 0,
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      backgroundColor: 'var(--color-background)',
                      transition: 'border-color 0.15s ease'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="label-small" style={{
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: 0,
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      backgroundColor: 'var(--color-background)',
                      transition: 'border-color 0.15s ease'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="label-small" style={{
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: 0,
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      backgroundColor: 'var(--color-background)',
                      transition: 'border-color 0.15s ease',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {submitError && (
                  <div style={{
                    padding: '12px',
                    marginBottom: '24px',
                    backgroundColor: 'rgba(255, 56, 56, 0.1)',
                    border: '1px solid var(--color-error)',
                    color: 'var(--color-error)',
                    fontSize: '14px'
                  }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent"
                  style={{
                    width: '100%',
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} style={{ marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
