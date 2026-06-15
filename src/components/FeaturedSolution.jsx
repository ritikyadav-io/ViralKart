import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const FeaturedSolution = ({ onNavigate }) => {
  const { addToCart, addToRecentlyViewed, products, isLoading } = useContext(CartContext);
  
  // Dynamic selection: product changes every 7 days (7-day Featured of the Week cycle)
  const getWeeklyProduct = () => {
    if (!products || products.length === 0) return null;
    const now = new Date();
    const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    const weekIndex = Math.floor(daysSinceEpoch / 7);
    const index = weekIndex % products.length;
    return products[index];
  };

  const product = getWeeklyProduct();

  // Don't render while loading or if no products
  if (isLoading || !product) return null;

  const handleCardClick = () => {
    addToRecentlyViewed(product);
    onNavigate('product', product.slug);
    window.scrollTo(0, 0);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discountPct = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);

  return (
    <section id="featured-solution" style={{ padding: '16px 0', backgroundColor: 'white' }} className="featured-section-padding">
      <div className="container featured-container" style={{ padding: '0 16px' }}>
        
        <div 
          onClick={handleCardClick}
          className="card featured-layout"
          style={{
            background: '#EFF6FF',
            border: '1px solid #DBEAFE',
            padding: '16px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          
          {/* Top Label & Image Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="featured-left-block">
            
            <div style={{
              backgroundColor: 'var(--accent)',
              color: 'white',
              fontSize: '11px',
              fontWeight: '800',
              padding: '4px 10px',
              borderRadius: '8px',
              alignSelf: 'flex-start',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }} className="featured-label-font">
              ⭐ Featured Of The Week
            </div>
            
            <div className="featured-image-box" style={{
              width: '100%',
              height: '150px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(37,99,235,0.06)',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={product.images[0]} 
                alt={product.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '8px'
                }}
              />
            </div>
          </div>

          {/* Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="featured-right-block">
            
            <h3 className="featured-title-font" style={{ fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>
              {product.title}
            </h3>

            {/* Stars & Sold details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="featured-stars-font">
              <span style={{ color: '#FFB800' }}>★ ★ ★ ★ ★</span>
              <span style={{ fontWeight: '800', color: 'var(--text-dark)' }}>{product.rating}</span>
              <span style={{ color: 'var(--text-light)' }} className="desktop-only-divider">|</span>
              <span className="badge-green">{product.soldCount}</span>
            </div>

            {/* Benefits: 12px list, checkmarks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }} className="featured-benefits-font">
              {product.benefits && product.benefits.length > 0 ? (
                product.benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span>
                    <span>{benefit.title} — {benefit.desc}</span>
                  </div>
                ))
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span>
                    <span>Premium Quality Design</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span>
                    <span>100% Secure Checkout</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span>
                    <span>Cash On Delivery Available</span>
                  </div>
                </>
              )}
            </div>

            {/* Price: 18px bold + strikethrough + badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="featured-price-font" style={{ fontWeight: '800', color: 'var(--text-dark)' }}>
                ₹{product.price}
              </span>
              <span className="featured-compare-font" style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ₹{product.comparePrice}
              </span>
              <span className="badge-red bestsellers-badge-font" style={{ padding: '2px 6px' }}>
                {discountPct}% OFF
              </span>
            </div>

            {/* Before/after removed */}

            {/* CTA button: full width, height 48px, 14px font on mobile */}
            <button 
              onClick={handleAddClick}
              className="btn btn-primary btn-full featured-cta-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Add To Cart — Cash On Delivery
            </button>

            {/* Desktop only claims list */}
            <div className="featured-claims-desktop" style={{ display: 'none', gap: '12px', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>💰 COD Available</span>
              <span>•</span>
              <span>🚚 2-5 Days Shipping</span>
              <span>•</span>
              <span>↩ 7-Day Returns</span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .featured-layout {
          border-radius: 16px;
        }
        .featured-label-font {
          font-size: 11px !important;
        }
        .featured-image-box {
          height: 150px;
        }
        .featured-title-font {
          font-size: 16px !important;
          line-height: 1.25;
        }
        .featured-stars-font {
          font-size: 11px;
        }
        .desktop-only-divider {
          display: none;
        }
        .featured-benefits-font {
          font-size: 12px;
        }
        .featured-price-font {
          font-size: 18px !important;
        }
        .featured-compare-font {
          font-size: 13px !important;
        }
        .featured-ba-img-box {
          width: 100px;
        }
        .featured-ba-img {
          height: 60px;
        }
        .featured-cta-btn {
          height: 48px !important;
          font-size: 14px !important;
          border-radius: 10px !important;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .featured-section-padding {
            padding: 36px 0 !important;
          }
          .featured-container {
            max-width: 1280px !important;
            margin: 0 auto !important;
            padding: 0 16px !important;
          }
          .featured-layout {
            display: grid !important;
            grid-template-columns: 1fr 1.15fr !important;
            gap: 40px !important;
            padding: 32px !important;
            border-radius: 24px !important;
          }
          .featured-left-block {
            justify-content: center !important;
            gap: 12px !important;
          }
          .featured-label-font {
            font-size: 11px !important;
            padding: 6px 12px !important;
            border-radius: 20px !important;
          }
          .featured-image-box {
            height: 240px !important;
            border-radius: 16px !important;
            margin: 0 auto;
            max-width: 280px;
          }
          .featured-right-block {
            justify-content: center !important;
            gap: 12px !important;
          }
          .featured-title-font {
            font-size: 24px !important;
          }
          .featured-stars-font {
            font-size: 13px !important;
            gap: 8px !important;
          }
          .desktop-only-divider {
            display: inline !important;
          }
          .featured-benefits-font {
            font-size: 13px !important;
            gap: 8px !important;
          }
          .featured-price-font {
            font-size: 24px !important;
          }
          .featured-compare-font {
            font-size: 15px !important;
          }
          .featured-ba-block {
            display: none !important; /* Hide before/after sub-images on desktop featured Solution block */
          }
          .featured-cta-btn {
            height: 44px !important;
            font-size: 14px !important;
            max-width: 280px !important;
            border-radius: 12px !important;
          }
          .featured-claims-desktop {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSolution;
