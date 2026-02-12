import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '80px 0 40px',
      backgroundColor: 'var(--color-background)',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          <div>
            <div className="header-logo" style={{ marginBottom: '24px' }}>
              ML/DL
            </div>
            <p className="text-body" style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Machine Learning Engineer specializing in Deep Learning & AI Solutions
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <div className="label-small" style={{ marginBottom: '16px' }}>
              Quick Links
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="#about" className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}>
                About
              </a>
              <a href="#experience" className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}>
                Experience
              </a>
              <a href="#projects" className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}>
                Projects
              </a>
              <a href="#blogs" className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}>
                Blogs
              </a>
              <a href="#contact" className="text-body" style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}>
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="label-small" style={{ marginBottom: '16px' }}>
              Connect
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body"
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
              >
                GitHub
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body"
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body"
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
              >
                Medium
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-body"
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <p className="label-small" style={{ opacity: 0.7 }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        footer a:hover {
          color: var(--text-primary) !important;
        }
        footer a[style*="width: 40px"]:hover {
          background: rgba(35, 35, 35, 0.05);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
