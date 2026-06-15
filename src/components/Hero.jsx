import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&auto=format&fit=crop&q=85',
    alt: 'Smart Bathroom Organiser'
  },
  {
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop&q=85',
    alt: 'Smart Kitchen Essentials'
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=85',
    alt: 'Viral Cleaning Tech'
  }
];

const Hero = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 3800);
    return () => clearInterval(t);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container hero-container">
        
        {/* Text content block */}
        <div className="hero-text-box" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          <div style={{
            alignSelf: 'flex-start',
            background: 'linear-gradient(90deg, rgba(37,99,235,0.10) 0%, rgba(99,102,241,0.10) 100%)',
            color: 'var(--accent)',
            fontSize: '10px',
            fontWeight: '800',
            padding: '5px 12px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            border: '1px solid rgba(37,99,235,0.15)'
          }} className="hero-badge">
            🔥 Curated Viral Finds
          </div>

          <h1 className="hero-heading" style={{
            color: '#0F172A',
            lineHeight: '1.25',
            margin: 0,
            fontWeight: '900'
          }}>
            Viral Products Store
          </h1>

          <p className="hero-subtext" style={{
            color: '#475569',
            lineHeight: '1.5',
            margin: 0
          }}>
            Curated Viral Solutions for Smart Living. Discover high-quality, trending home essentials designed to simplify your routine and elevate your space.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }} className="hero-buttons">
            <a 
              href="#best-sellers" 
              onClick={(e) => handleScrollTo(e, 'best-sellers')}
              className="btn btn-primary" 
              style={{ flex: 1, textDecoration: 'none', height: '46px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', borderRadius: '12px' }}
            >
              🛍️ Shop Now
            </a>
            <a 
              href="#shop-categories" 
              onClick={(e) => handleScrollTo(e, 'shop-categories')}
              className="btn btn-secondary" 
              style={{ flex: 1, textDecoration: 'none', height: '46px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', borderRadius: '12px' }}
            >
              Browse Categories
            </a>
          </div>

          {/* Social Proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }} className="hero-social-proof">
            <div style={{ display: 'flex', position: 'relative' }}>
              {['photo-1507003211169-0a1dd7228f2d','photo-1494790108377-be9c29b29330','photo-1500648767791-00dcc994a43e'].map((id, i) => (
                <img 
                  key={id}
                  src={`https://images.unsplash.com/${id}?w=60&auto=format&fit=crop&q=80`}
                  alt={`Happy customer ${i+1}`}
                  style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover', marginLeft: i > 0 ? '-9px' : 0, boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }} 
                />
              ))}
            </div>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A' }}>
              ⭐ 4.8 &nbsp;<span style={{ color: '#64748B', fontWeight: '600' }}>10,000+ Happy Customers</span>
            </span>
          </div>

        </div>

        {/* Hero image with auto-slideshow */}
        <div className="hero-image-box" style={{
          width: '100%',
          height: '220px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          {HERO_SLIDES.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: i === slide ? 1 : 0,
                transition: 'opacity 0.7s ease',
                zIndex: i === slide ? 1 : 0
              }}
            />
          ))}
          {/* Gradient overlay for legibility */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.25) 0%, rgba(15,23,42,0.05) 100%)',
            zIndex: 2
          }} />
          {/* Dot indicators */}
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 3 }}>
            {HERO_SLIDES.map((_, i) => (
              <div key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? '20px' : '7px', height: '7px',
                borderRadius: '4px',
                background: i === slide ? 'white' : 'rgba(255,255,255,0.55)',
                cursor: 'pointer', transition: 'all 0.3s ease'
              }} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* Mobile Default Rules */
        .hero-section {
          padding: 16px 0 !important;
        }
        .hero-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 20px !important;
        }
        .hero-text-box {
          align-items: center !important;
          text-align: center !important;
        }
        .hero-badge {
          align-self: center !important;
        }
        .hero-heading {
          font-size: 26px !important;
          font-weight: 900 !important;
          line-height: 1.2 !important;
        }
        .hero-subtext {
          font-size: 11.5px !important;
          line-height: 1.45 !important;
          max-width: 320px !important;
          margin: 0 auto !important;
          color: #475569 !important;
        }
        .hero-buttons {
          width: 100% !important;
          justify-content: center !important;
        }
        .hero-social-proof {
          justify-content: center !important;
        }
        
        /* Desktop Expansion Rules */
        @media (min-width: 1024px) {
          .hero-section {
            padding: 36px 0 !important;
          }
          .hero-container {
            display: grid !important;
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 40px !important;
          }
          .hero-image-box {
            height: 420px !important;
            border-radius: 24px !important;
          }
          .hero-text-box {
            align-items: flex-start !important;
            text-align: left !important;
            justify-content: center !important;
            gap: 18px !important;
          }
          .hero-badge {
            align-self: flex-start !important;
          }
          .hero-heading {
            font-size: 42px !important;
          }
          .hero-subtext {
            font-size: 16px !important;
            line-height: 1.6 !important;
            max-width: 520px !important;
            margin: 0 !important;
          }
          .hero-buttons {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
          }
          .hero-buttons > * {
            width: auto !important;
            flex: none !important;
            padding: 0 28px !important;
          }
          .hero-social-proof {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
