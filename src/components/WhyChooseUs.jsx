import React from 'react';
import { photoReviews } from '../data/products';
import { STORE_NAME } from '../utils/shopify';

const WhyChooseUs = ({ onNavigate }) => {
  
  const handleReviewClick = (productSlug) => {
    onNavigate('product', productSlug || 'uv-toothbrush-holder-sterilizer');
    setTimeout(() => {
      const element = document.getElementById('reviews-target');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="why-choose-us" style={{ padding: '16px 0', backgroundColor: 'white' }} className="whychoose-section-padding">
      <div className="container whychoose-container">
        
        <div className="whychoose-layout">
          
          {/* Brand Pillars Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="whychoose-left-block">
            <h2 className="whychoose-title" style={{ color: 'var(--text-dark)', margin: '0 0 4px 0', fontWeight: '800' }}>
              Why Thousands Choose {STORE_NAME}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { icon: '✅', title: 'Practical Products', sub: 'Carefully selected to solve real home problems.' },
                { icon: '🚚', title: 'Fast Delivery', sub: 'Quick delivery across India in 2-5 days.' },
                { icon: '💰', title: 'COD Available', sub: 'Pay when you receive your order.' },
                { icon: '🔒', title: 'Secure Payments', sub: '100% safe & secure checkout.' },
                { icon: '↩', title: 'Easy Returns', sub: '7-day easy return & refund policy.' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    alignItems: 'flex-start',
                    borderBottom: idx < 4 ? '1px solid var(--border)' : 'none'
                  }}
                  className="whychoose-row"
                >
                  <span style={{ lineHeight: 1, flexShrink: 0 }} className="whychoose-icon-size">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="whychoose-row-title" style={{ fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>
                      {item.title}
                    </h4>
                    <p className="whychoose-row-sub" style={{ color: 'var(--text-muted)', margin: '2px 0 0 0', lineHeight: 1.3 }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="whychoose-right-block">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="reviews-section-title" style={{ color: 'var(--text-dark)', margin: 0, fontWeight: '800' }}>
                Customer Photo Reviews
              </h2>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleReviewClick('uv-toothbrush-holder-sterilizer'); }} 
                className="reviews-link-font"
              >
                View All
              </a>
            </div>

            {/* Horizontal Scroll Row / Desktop Grid */}
            <div className="scroll-row reviews-layout-row">
              {photoReviews.map((rev) => (
                <div 
                  key={rev.id}
                  onClick={() => handleReviewClick(rev.productSlug)}
                  className="card reviews-card-item"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={rev.photo} 
                    alt={rev.name} 
                    className="reviews-card-img"
                    style={{ width: '100%', objectFit: 'cover' }} 
                  />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} className="reviews-card-body">
                    <div style={{ color: '#FFB800', fontWeight: 'bold', lineHeight: 1 }} className="reviews-stars-font">
                      {'★'.repeat(Math.floor(rev.rating))}
                      {rev.rating % 1 !== 0 ? '½' : ''}
                    </div>
                    
                    <p className="reviews-text-font" style={{
                      color: 'var(--text-main)',
                      fontWeight: '500',
                      margin: 0,
                      lineHeight: '1.3',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      "{rev.text}"
                    </p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }} className="reviews-buyer-font">
                      <span style={{ fontWeight: '800', color: 'var(--text-dark)' }}>{rev.name}</span>
                      <span className="badge-green">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .whychoose-container {
          padding: 0 16px;
        }
        .whychoose-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .whychoose-title {
          font-size: 15px !important;
        }
        .whychoose-row {
          padding: 8px 0;
        }
        .whychoose-icon-size {
          font-size: 20px;
        }
        .whychoose-row-title {
          font-size: 13px !important;
        }
        .whychoose-row-sub {
          font-size: 11px;
        }

        .reviews-section-title {
          font-size: 15px !important;
        }
        .reviews-link-font {
          font-size: 11px !important;
          font-weight: 700;
          color: var(--accent);
        }
        .reviews-layout-row {
          display: flex;
          gap: 10px;
          padding: 4px 0 12px 0;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .reviews-card-item {
          width: 200px;
          border-radius: 12px;
          border: 1px solid var(--border);
          scroll-snap-align: start;
        }
        .reviews-card-img {
          height: 110px;
        }
        .reviews-card-body {
          padding: 10px;
        }
        .reviews-stars-font {
          font-size: 12px;
        }
        .reviews-text-font {
          font-size: 11px;
          -webkit-line-clamp: 3;
          height: 42px;
        }
        .reviews-buyer-font {
          font-size: 11px;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .whychoose-section-padding {
            padding: 36px 0 !important;
          }
          .whychoose-container {
            max-width: 1280px !important;
            margin: 0 auto !important;
            padding: 0 16px !important;
          }
          .whychoose-layout {
            display: grid !important;
            grid-template-columns: 0.95fr 1.05fr !important;
            gap: 40px !important;
            flex-direction: row !important;
          }
          .whychoose-title {
            font-size: 24px !important;
          }
          .whychoose-row {
            padding: 12px 0 !important;
          }
          .whychoose-icon-size {
            font-size: 24px !important;
          }
          .whychoose-row-title {
            font-size: 15px !important;
          }
          .whychoose-row-sub {
            font-size: 13px !important;
          }
          .reviews-section-title {
            font-size: 24px !important;
          }
          .reviews-link-font {
            font-size: 14px !important;
          }
          .reviews-layout-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .reviews-card-item {
            width: 100% !important;
            border-radius: 20px !important;
          }
          .reviews-card-img {
            height: 140px !important;
          }
          .reviews-card-body {
            padding: 16px !important;
            gap: 8px !important;
          }
          .reviews-stars-font {
            font-size: 14px !important;
          }
          .reviews-text-font {
            font-size: 12px !important;
            -webkit-line-clamp: 2 !important;
            height: 32px !important;
          }
          .reviews-buyer-font {
            font-size: 12px !important;
          }
        }
        
        /* Tablet overrides */
        @media (min-width: 768px) and (max-width: 1023px) {
          .reviews-layout-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
            overflow-x: visible !important;
          }
          .reviews-card-item {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
