import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 0 80px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div className="label" style={{ marginBottom: '24px', opacity: 0.7 }}>
            Machine Learning Engineer
          </div>
          
          <h1 className="hero-title" style={{ marginBottom: '32px' }}>
            {personalInfo.name}
          </h1>
          
          <p className="text-big" style={{
            marginBottom: '48px',
            maxWidth: '800px',
            margin: '0 auto 48px',
            opacity: 0.9
          }}>
            {personalInfo.tagline}
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={scrollToAbout} className="btn-accent">
              View My Work
            </button>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          color: 'var(--text-primary)'
        }}
      >
        <ArrowDown size={32} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
