import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
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
        <div className="header-logo" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
          ML/DL
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
          <button onClick={() => scrollToSection('projects')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease'
          }}>
            Projects
          </button>
          <button onClick={() => scrollToSection('blogs')} className="label-small" style={{
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
          <button onClick={() => scrollToSection('projects')} className="label-small" style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '8px 0'
          }}>
            Projects
          </button>
          <button onClick={() => scrollToSection('blogs')} className="label-small" style={{
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
