import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const TrendingList = ({ onNavigate }) => {
  const { addToCart, trendingProducts } = useContext(CartContext);

  // Don't render if no trending products yet
  if (!trendingProducts || trendingProducts.length === 0) return null;

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    const productMock = {
      id: item.id,
      variantId: item.variantId,
      title: item.name,
      price: item.price,
      comparePrice: item.comparePrice,
      rating: item.rating,
      image: item.image,
      images: item.images || [item.image],
      slug: item.slug
    };
    addToCart(productMock, 1);
  };

  const handleItemClick = (slug) => {
    if (slug) {
      onNavigate('product', slug);
      window.scrollTo(0, 0);
    }
  };



  return (
    <section id="trending-products" style={{ padding: '16px 0', backgroundColor: 'var(--bg)' }} className="trending-section-padding">
      <div className="container trending-container">
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
          <h2 className="trending-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
            Trending This Week
          </h2>
          <a href="#best-sellers" className="trending-link-font">View All</a>
        </div>

        {/* Scroll Container / Desktop Grid */}
        <div className="scroll-row trending-layout-row">
          {trendingProducts.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleItemClick(item.slug)}
              className="trending-item-box"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              
              {/* Circular image wrapper */}
              <div className="trending-circle-img-box" style={{
                position: 'relative',
                borderRadius: '50%',
                border: '1.5px solid var(--border)',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '6px'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />

                {/* Overlaid '+' quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(e, item)}
                  className="trending-add-btn"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    border: '1.5px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 1px 4px rgba(37, 99, 235, 0.3)',
                    padding: 0
                  }}
                  title="Quick Add"
                >
                  +
                </button>
              </div>

              {/* Product name */}
              <span className="trending-name-font" style={{
                fontWeight: '700',
                color: 'var(--text-dark)',
                lineHeight: '1.2',
                textAlign: 'center',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                width: '100%'
              }}>
                {item.name}
              </span>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .trending-container {
          padding: 0;
        }
        .title-bar-padding {
          padding: 0 16px;
        }
        .trending-section-title {
          font-size: 15px !important;
        }
        .trending-link-font {
          font-size: 11px !important;
        }
        .trending-layout-row {
          display: flex; 
          gap: 12px; 
          padding: 4px 16px 12px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .trending-item-box {
          width: 80px;
          scroll-snap-align: start;
        }
        .trending-circle-img-box {
          width: 68px;
          height: 68px;
          margin-bottom: 6px;
        }
        .trending-add-btn {
          bottom: -2px;
          right: -2px;
          width: 20px;
          height: 20px;
          fontSize: 12px;
        }
        .trending-name-font {
          font-size: 10px;
          -webkit-line-clamp: 2;
          height: 24px;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .trending-section-padding {
            padding: 36px 0 !important;
          }
          .trending-container {
            padding: 0 16px !important;
          }
          .trending-section-title {
            font-size: 24px !important;
          }
          .trending-link-font {
            font-size: 14px !important;
          }
          .trending-layout-row {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
            justify-items: center !important;
          }
          .trending-item-box {
            width: 120px !important;
          }
          .trending-circle-img-box {
            width: 90px !important;
            height: 90px !important;
            margin-bottom: 10px !important;
          }
          .trending-add-btn {
            bottom: -2px !important;
            right: -2px !important;
            width: 26px !important;
            height: 26px !important;
            font-size: 16px !important;
            box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4) !important;
          }
          .trending-name-font {
            font-size: 13px !important;
            -webkit-line-clamp: 2 !important;
            height: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrendingList;
