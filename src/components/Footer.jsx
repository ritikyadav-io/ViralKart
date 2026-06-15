import React, { useState } from 'react';
import { STORE_NAME } from '../utils/shopify';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing! We've sent a welcome discount to ${email}.`);
    setEmail('');
  };

  const handleLinkClick = (e, slug) => {
    e.preventDefault();
    onNavigate('home', slug);
    window.scrollTo(0, 0);
  };

  const handleInfoClick = (e, pageSlug) => {
    e.preventDefault();
    onNavigate('info', pageSlug);
  };

  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '24px', paddingBottom: '24px' }}>
      
      {/* 1. Trust bar: horizontal scroll row on mobile, space-around on desktop */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '20px' }} className="footer-trust-wrapper">
        <div className="scroll-row footer-trust-scroll-row" style={{ display: 'flex', gap: '12px' }}>
          {[
            { icon: '⭐', text: 'Rated 4.8/5 Reviews' },
            { icon: '🚚', text: 'Delivery Across India' },
            { icon: '💰', text: 'Cash On Delivery' },
            { icon: '🔒', text: 'Secure Payments' },
            { icon: '📞', text: 'WhatsApp Support' }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="footer-trust-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '700',
                color: 'white',
                flexShrink: 0,
                scrollSnapAlign: 'start'
              }}
            >
              <span style={{ fontSize: '14px' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Main Footer layout (Grids on Desktop, Stacks on Mobile) */}
        <div className="footer-main-layout">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }} className="footer-logo-align" onClick={(e) => handleLinkClick(e, null)}>
              <div style={{
                background: 'var(--accent)',
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '800', color: 'white' }}>
                {STORE_NAME}
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', margin: 0 }} className="footer-tagline-text">
              Viral Products Store
            </p>
            
            {/* Social icons: row under Brand Info (desktop aligns left, mobile centers) */}
            <div className="footer-social-row" style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              {['📘', '📸', '🎥', '📌'].map((icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2, 3, 4, 5: Sitemap Links (Grid on Desktop, Stacked list on Mobile) */}
          <div className="footer-sitemap-block">
            <div className="footer-links-group">
              <h4 className="footer-group-title">Shop</h4>
              <a href="#" onClick={(e) => handleLinkClick(e, null)}>All Products</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'cleaning-solutions')}>Cleaning Solutions</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'kitchen-essentials')}>Kitchen Essentials</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'home-organization')}>Home Organization</a>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-group-title">Information</h4>
              <a href="#" onClick={(e) => handleInfoClick(e, 'about-us')}>About Us</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'contact-us')}>Contact Us</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'shipping-policy')}>Shipping Policy</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'return-policy')}>Return Policy</a>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-group-title">Help</h4>
              <a href="#faq-section" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => { const el = document.getElementById('faq-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 200); }}>FAQs</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'track-order')}>Track Order</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'return-policy')}>Returns & Refunds</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'support-center')}>Support Center</a>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-group-title">Blogs</h4>
              <a href="#" onClick={(e) => handleInfoClick(e, 'blogs')}>All Blogs</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'uv-toothbrush-sanitizer-bathroom-hygiene-guide')}>Bathroom Hygiene Guide</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'electric-spin-scrubber-home-cleaning-hacks')}>Home Cleaning Hacks</a>
              <a href="#" onClick={(e) => handleInfoClick(e, 'how-to-prevent-kitchen-sink-clog-plumbing-tips')}>Sink Maintenance Tips</a>
            </div>
          </div>

          {/* Column 5: Thank You */}
          <div className="footer-newsletter-col" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 className="footer-group-title newsletter-title-align">Thank You</h4>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', margin: 0 }} className="newsletter-text-align">
              We appreciate your business! Feel free to reach out to our team if you need any assistance.
            </p>
          </div>

        </div>

        {/* 3. Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }} className="footer-bottom-bar">
          
          {/* Payment icons */}
          <div className="footer-payment-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
            {['UPI', 'COD', 'VISA', 'MC', 'RUPAY'].map((p, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '9px',
                  fontWeight: '800',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  padding: '3px 6px',
                  borderRadius: '4px',
                  height: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-copyright-text" style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px', fontWeight: '600' }}>
            © 2026 {STORE_NAME}. All Rights Reserved.
          </div>

        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .footer-trust-scroll-row {
          padding: 0 16px 8px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .footer-trust-item {
          min-width: 120px;
        }
        .footer-logo-align {
          justify-content: center;
        }
        .footer-tagline-text {
          text-align: center;
        }
        .footer-social-row {
          justify-content: center;
        }
        .footer-main-layout {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-sitemap-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 10px 0;
        }
        .footer-links-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .footer-group-title {
          display: none; /* Hide header text on mobile stacked view */
        }
        .footer-links-group a {
          font-size: 13px;
          padding: 8px 0;
          color: #9CA3AF;
          font-weight: 600;
        }
        .newsletter-title-align {
          display: block !important;
          text-align: center;
          font-size: 13px !important;
          font-weight: 800;
        }
        .newsletter-text-align {
          text-align: center;
        }
        .newsletter-input {
          width: 100%;
          text-align: center;
        }
        .newsletter-btn {
          width: 100%;
        }
        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Desktop overrides */
        @media (min-width: 1024px) {
          .footer-trust-wrapper {
            padding-bottom: 20px !important;
            margin-bottom: 32px !important;
          }
          .footer-trust-scroll-row {
            padding: 0 16px !important;
            overflow-x: visible !important;
            justify-content: space-around !important;
          }
          .footer-trust-item {
            min-width: auto !important;
            font-size: 14px !important;
          }
          .footer-main-layout {
            display: grid !important;
            grid-template-columns: 1.2fr 2.6fr 1.3fr !important;
            gap: 40px !important;
            flex-direction: row !important;
          }
          .footer-brand-col {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-logo-align {
            justify-content: flex-start !important;
          }
          .footer-tagline-text {
            text-align: left !important;
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
          .footer-social-row {
            justify-content: flex-start !important;
          }
          .footer-sitemap-block {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            border-top: none !important;
            border-bottom: none !important;
            padding: 0 !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
          .footer-links-group {
            align-items: flex-start !important;
          }
          .footer-group-title {
            display: block !important;
            font-size: 15px !important;
            font-weight: 800 !important;
            margin-bottom: 12px !important;
          }
          .footer-links-group a {
            font-size: 13px !important;
            padding: 4px 0 !important;
            color: var(--text-light) !important;
            font-weight: 500 !important;
          }
          .footer-links-group a:hover {
            color: white !important;
          }
          .footer-newsletter-col {
            align-items: flex-start !important;
          }
          .newsletter-title-align {
            text-align: left !important;
            font-size: 15px !important;
            font-weight: 800 !important;
            margin-bottom: 12px !important;
          }
          .newsletter-text-align {
            text-align: left !important;
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
          .newsletter-form-layout {
            flex-direction: row !important;
            width: 100% !important;
          }
          .newsletter-input {
            flex: 1 !important;
            width: auto !important;
            text-align: left !important;
          }
          .newsletter-btn {
            width: auto !important;
            padding: 0 16px !important;
          }
          .footer-bottom-bar {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
            padding-top: 20px !important;
          }
          .footer-payment-row {
            order: 2 !important;
          }
          .footer-copyright-text {
            order: 1 !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
