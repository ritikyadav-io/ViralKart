import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BestSellers = ({ searchQuery, activeCategory, onNavigate }) => {
  const { addToCart, wishlist, toggleWishlist, addToRecentlyViewed, products, isLoading } = useContext(CartContext);

  // Filter products based on search query & active category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (activeCategory === 'viral') {
      matchesCategory = product.price >= 199 && product.price <= 399;
    } else if (activeCategory) {
      matchesCategory = product.category === activeCategory;
    }
    
    return matchesSearch && matchesCategory;
  });

  // Dynamic rotation: bestseller order shifts every 5 days, viral order shifts every 10 days
  const getRotatedProducts = (list) => {
    if (!list || list.length === 0) return [];
    const now = new Date();
    const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    const cycleDays = activeCategory === 'viral' ? 10 : 5;
    const offset = Math.floor(daysSinceEpoch / cycleDays) % list.length;
    return [
      ...list.slice(offset),
      ...list.slice(0, offset)
    ];
  };

  const rotatedProducts = getRotatedProducts(filteredProducts);

  const getCategoryDisplayName = () => {
    if (!activeCategory) return 'Best Sellers';
    const categoryNames = {
      'viral': 'Viral Deals',
      'home-organization': 'Home Essentials',
      'bathroom-essentials': 'Bathroom Essentials',
      'cleaning-solutions': 'Cleaning Solutions',
      'repair-utility': 'Repair & Utility',
      'best-sellers': 'Bestseller Deals'
    };
    return categoryNames[activeCategory] || activeCategory.replace('-', ' ').toUpperCase();
  };

  const handleProductClick = (product) => {
    addToRecentlyViewed(product);
    onNavigate('product', product.slug);
  };

  if (isLoading) {
    return (
      <section style={{ padding: '16px 0', backgroundColor: 'var(--bg)' }} className="bestsellers-section-padding">
        <div className="container bestsellers-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
            <h2 className="bestsellers-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
              {getCategoryDisplayName()}
            </h2>
          </div>
          <div className="scroll-row bestsellers-layout-row">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="card bestsellers-product-card" style={{ background: 'white', border: '1px solid var(--border)', overflow: 'hidden', pointerEvents: 'none' }}>
                <div className="bestsellers-image-box" style={{ background: 'linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="bestsellers-card-body">
                  <div style={{ height: '12px', borderRadius: '4px', background: 'linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} />
                  <div style={{ height: '12px', width: '70%', borderRadius: '4px', background: 'linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} />
                  <div style={{ borderRadius: '8px', background: 'linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} className="bestsellers-btn-height" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
      </section>
    );
  }

  return (
    <section id="best-sellers" style={{ padding: '16px 0', backgroundColor: 'var(--bg)' }} className="bestsellers-section-padding">
      <div className="container bestsellers-container">
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
          <h2 className="bestsellers-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
            {getCategoryDisplayName()}
          </h2>
          {searchQuery && (
            <span style={{ color: 'var(--text-muted)' }} className="search-count-font">
              Showing {filteredProducts.length} items
            </span>
          )}
        </div>

        {/* Scroll Container / Desktop Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 16px', background: 'white', margin: '0 16px', borderRadius: '12px' }} className="no-products-margin">
            <span style={{ fontSize: '24px' }}>🔍</span>
            <h3 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>No matches found</h3>
          </div>
        ) : (
          <div className="scroll-row bestsellers-layout-row">
            {rotatedProducts.map((p) => {
              const discountPct = Math.round(((p.comparePrice - p.price) / p.comparePrice) * 100);
              const isWished = wishlist.includes(p.id);

              return (
                <div 
                  key={p.id}
                  className="card bestsellers-product-card"
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
                  {/* Heart Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(p.id);
                    }}
                    className="bestsellers-heart-btn"
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: isWished ? 'var(--warning)' : 'var(--text-light)',
                      transition: 'transform 0.1s ease'
                    }}
                  >
                    {isWished ? '❤️' : '🤍'}
                  </button>

                  {/* Product image wrapper */}
                  <div className="bestsellers-image-box" style={{
                    backgroundColor: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0,
                    padding: '8px'
                  }}>
                    <img 
                      src={p.images[0]} 
                      alt={p.title} 
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                      className="bestsellers-card-img"
                    />
                  </div>

                  {/* Body Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }} className="bestsellers-card-body">
                    
                    {/* Stars */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <span style={{ color: '#FFB800' }} className="bestsellers-stars-font">★ {p.rating}</span>
                      <span style={{ color: 'var(--text-muted)' }} className="bestsellers-reviews-font">
                        ({p.reviewsCount})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="bestsellers-title-font" style={{
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                      <span className="bestsellers-price-font" style={{ fontWeight: '800', color: 'var(--text-dark)' }}>
                        ₹{p.price}
                      </span>
                      <span className="bestsellers-compare-font" style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                        ₹{p.comparePrice}
                      </span>
                      <span className="badge-red bestsellers-badge-font" style={{ padding: '1px 3px' }}>
                        {discountPct}% OFF
                      </span>
                    </div>

                    {/* Add to Cart CTA */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p, 1);
                      }}
                      className="btn btn-primary bestsellers-btn-height"
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
        )}

      </div>

      <style>{`
        /* Mobile defaults */
        #best-sellers {
          min-height: 480px;
        }
        .bestsellers-container {
          padding: 0;
        }
        .bestsellers-section-title {
          font-size: 15px !important;
        }
        .search-count-font {
          font-size: 10px !important;
        }
        .no-products-margin {
          margin: 0 16px !important;
        }
        .bestsellers-layout-row {
          display: flex; 
          gap: 10px; 
          padding: 4px 16px 12px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .bestsellers-product-card {
          width: 155px;
          border-radius: 12px;
          border: 1px solid var(--border);
          flex-shrink: 0;
          scroll-snap-align: start;
          animation: cardFadeIn 0.25s ease-out forwards;
        }
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bestsellers-heart-btn {
          top: 6px;
          right: 6px;
          width: 24px;
          height: 24px;
          font-size: 12px;
        }
        .bestsellers-image-box {
          width: 155px;
          height: 140px;
        }
        .bestsellers-card-body {
          padding: 10px;
        }
        .bestsellers-stars-font {
          font-size: 11px !important;
        }
        .bestsellers-reviews-font {
          font-size: 10px !important;
        }
        .bestsellers-title-font {
          font-size: 12px !important;
          -webkit-line-clamp: 2;
          height: 28px;
        }
        .bestsellers-price-font {
          font-size: 14px !important;
        }
        .bestsellers-compare-font {
          font-size: 11px !important;
        }
        .bestsellers-badge-font {
          font-size: 9px !important;
        }
        .bestsellers-btn-height {
          height: 34px !important;
          font-size: 12px !important;
          border-radius: 8px !important;
          margin-top: 4px !important;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          #best-sellers {
            min-height: 700px !important;
          }
          .bestsellers-section-padding {
            padding: 36px 0 !important;
          }
          .bestsellers-container {
            padding: 0 16px !important;
          }
          .bestsellers-section-title {
            font-size: 24px !important;
          }
          .search-count-font {
            font-size: 14px !important;
          }
          .bestsellers-layout-row {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .bestsellers-product-card {
            width: 100% !important;
            border-radius: 20px !important;
          }
          .bestsellers-product-card:hover .bestsellers-card-img {
            transform: scale(1.04);
          }
          .bestsellers-card-img {
            transition: transform 0.2s ease;
          }
          .bestsellers-heart-btn {
            top: 10px !important;
            right: 10px !important;
            width: 32px !important;
            height: 32px !important;
            font-size: 16px !important;
          }
          .bestsellers-image-box {
            width: 100% !important;
            height: 200px !important;
          }
          .bestsellers-card-body {
            padding: 16px !important;
            gap: 8px !important;
          }
          .bestsellers-stars-font {
            font-size: 13px !important;
          }
          .bestsellers-reviews-font {
            font-size: 11px !important;
          }
          .bestsellers-title-font {
            font-size: 14px !important;
            -webkit-line-clamp: 2 !important;
            height: 36px !important;
          }
          .bestsellers-price-font {
            font-size: 18px !important;
          }
          .bestsellers-compare-font {
            font-size: 13px !important;
          }
          .bestsellers-badge-font {
            font-size: 10px !important;
          }
          .bestsellers-btn-height {
            height: 44px !important;
            font-size: 13px !important;
            border-radius: 12px !important;
            margin-top: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BestSellers;
