import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const RecentlyViewed = ({ onNavigate }) => {
  const { recentlyViewed, addToCart, wishlist, toggleWishlist, addToRecentlyViewed } = useContext(CartContext);

  if (recentlyViewed.length === 0) return null;

  const handleProductClick = (product) => {
    addToRecentlyViewed(product);
    onNavigate('product', product.slug);
    window.scrollTo(0, 0);
  };

  return (
    <section id="recently-viewed" style={{ padding: '16px 0', backgroundColor: 'var(--bg)' }} className="recent-section-padding">
      <div className="container recent-container">
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
          <h2 className="recent-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
            Recently Viewed
          </h2>
          <a href="#best-sellers" className="recent-link-font">View All</a>
        </div>

        {/* Scroll Container / Desktop Grid */}
        <div className="scroll-row recent-layout-row">
          {recentlyViewed.map((p) => {
            const discountPct = Math.round(((p.comparePrice - p.price) / p.comparePrice) * 100);
            const isWished = wishlist.includes(p.id);

            return (
              <div 
                key={p.id}
                className="card recent-product-card"
                style={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                onClick={() => handleProductClick(p)}
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(p.id);
                  }}
                  className="recent-heart-btn"
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: isWished ? 'var(--warning)' : 'var(--text-light)'
                  }}
                >
                  {isWished ? '❤️' : '🤍'}
                </button>

                {/* Image */}
                <div className="recent-image-box" style={{
                  backgroundColor: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                  padding: '8px'
                }}>
                  <img 
                    src={p.images ? p.images[0] : p.image} 
                    alt={p.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Body Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }} className="recent-card-body">
                  
                  {/* Stars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }} className="recent-stars-box">
                    <span style={{ color: '#FFB800' }}>★ {p.rating}</span>
                  </div>

                  {/* Title */}
                  <h3 className="recent-title-font" style={{
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    margin: 0,
                    lineHeight: '1.25',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {p.title}
                  </h3>

                  {/* Pricing */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="recent-price-font" style={{ fontWeight: '800', color: 'var(--text-dark)' }}>
                      ₹{p.price}
                    </span>
                    <span className="recent-compare-font" style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      ₹{p.comparePrice}
                    </span>
                  </div>

                  {/* Quick Add CTA */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p, 1);
                    }}
                    className="btn btn-primary recent-btn-height"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .recent-container {
          padding: 0;
        }
        .title-bar-padding {
          padding: 0 16px;
        }
        .recent-section-title {
          font-size: 15px !important;
        }
        .recent-link-font {
          font-size: 11px !important;
          font-weight: 700;
          color: var(--accent);
        }
        .recent-layout-row {
          display: flex; 
          gap: 10px; 
          padding: 4px 16px 12px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .recent-product-card {
          width: 155px;
          border-radius: 12px;
          border: 1px solid var(--border);
          flex-shrink: 0;
          scroll-snap-align: start;
        }
        .recent-heart-btn {
          top: 6px;
          right: 6px;
          width: 24px;
          height: 24px;
          font-size: 12px;
        }
        .recent-image-box {
          width: 155px;
          height: 140px;
        }
        .recent-card-body {
          padding: 10px;
        }
        .recent-stars-box {
          font-size: 11px !important;
        }
        .recent-title-font {
          font-size: 12px !important;
          -webkit-line-clamp: 2;
          height: 28px;
        }
        .recent-price-font {
          font-size: 14px !important;
        }
        .recent-compare-font {
          font-size: 11px !important;
        }
        .recent-btn-height {
          height: 34px !important;
          font-size: 12px !important;
          border-radius: 8px !important;
          margin-top: 4px !important;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .recent-section-padding {
            padding: 36px 0 !important;
          }
          .recent-container {
            padding: 0 16px !important;
          }
          .recent-section-title {
            font-size: 24px !important;
          }
          .recent-link-font {
            font-size: 14px !important;
          }
          .recent-layout-row {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .recent-product-card {
            width: 100% !important;
            border-radius: 20px !important;
          }
          .recent-heart-btn {
            top: 10px !important;
            right: 10px !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 14px !important;
          }
          .recent-image-box {
            width: 100% !important;
            height: 180px !important;
          }
          .recent-card-body {
            padding: 12px !important;
            gap: 6px !important;
          }
          .recent-stars-box {
            font-size: 11px !important;
          }
          .recent-title-font {
            font-size: 13px !important;
            -webkit-line-clamp: 2 !important;
            height: 34px !important;
          }
          .recent-price-font {
            font-size: 15px !important;
          }
          .recent-compare-font {
            font-size: 11px !important;
          }
          .recent-btn-height {
            height: 34px !important;
            font-size: 12px !important;
            border-radius: 8px !important;
            margin-top: 6px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RecentlyViewed;
