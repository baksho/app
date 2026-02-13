import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, FileText, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // If we're not on homepage, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--color-background)',
      borderBottom: '1px solid var(--border-light)',
      zIndex: 1000,
      padding: '16px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div 
          className="header-logo" 
          style={{ cursor: 'pointer' }} 
          onClick={() => {
            if (window.location.pathname !== '/') {
              navigate('/');
            } else {
              scrollToSection('hero');
            }
          }}
        >
          SB
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <button onClick={() => scrollToSection('about')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Experience
          </button>
          <button onClick={() => scrollToSection('education')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Education
          </button>
          <button onClick={() => navigate('/projects')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Projects
          </button>
          <button onClick={() => navigate('/publications')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Publications
          </button>
          <button onClick={() => navigate('/blogs')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Blogs
          </button>
          <button onClick={() => scrollToSection('contact')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Contact
          </button>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginLeft: '16px' }}>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--text-primary)',
              transition: 'opacity 0.15s ease'
            }}>
              <Github size={20} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--text-primary)',
              transition: 'opacity 0.15s ease'
            }}>
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.social.medium} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--text-primary)',
              transition: 'opacity 0.15s ease'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} style={{
              color: 'var(--text-primary)',
              transition: 'opacity 0.15s ease'
            }}>
              <Mail size={20} />
            </a>
          </div>

          <a href={personalInfo.resume} download className="btn-accent">
            <FileText size={16} style={{ marginRight: '8px' }} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
          backgroundColor: 'var(--bg-white)',
          borderTop: '1px solid var(--border-light)'
        }}>
          <button onClick={() => scrollToSection('about')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Experience
          </button>
          <button onClick={() => scrollToSection('education')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Education
          </button>
          <button onClick={() => { navigate('/projects'); setMobileMenuOpen(false); }} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Projects
          </button>
          <button onClick={() => { navigate('/publications'); setMobileMenuOpen(false); }} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Publications
          </button>
          <button onClick={() => { navigate('/blogs'); setMobileMenuOpen(false); }} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Blogs
          </button>
          <button onClick={() => scrollToSection('contact')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Contact
          </button>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
              <Github size={20} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
              <Linkedin size={20} />
            </a>
          </div>

          <a href={personalInfo.resume} download className="btn-accent" style={{ marginTop: '8px' }}>
            <FileText size={16} style={{ marginRight: '8px' }} />
            Resume
          </a>
        </nav>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
        
        nav button:hover,
        nav a:hover {
          opacity: 0.7;
        }
      `}</style>
    </header>
  );
};

export default Header;
