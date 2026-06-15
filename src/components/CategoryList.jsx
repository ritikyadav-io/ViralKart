import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CategoryList = ({ activeCategory, onSelectCategory }) => {
  const { categories } = useContext(CartContext);
  return (
    <section id="shop-categories" style={{ padding: '16px 0', backgroundColor: 'white' }}>
      <div className="container category-container">
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }} className="title-bar-padding">
          <h2 className="category-section-title" style={{ color: 'var(--text-dark)', margin: 0 }}>
            Shop By Category
          </h2>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onSelectCategory(null); }}
            style={{ fontWeight: '700', color: 'var(--accent)' }}
            className="clear-link-font"
          >
            Clear Filter
          </a>
        </div>

        {/* Scroll Container / Desktop Grid */}
        <div className="scroll-row category-layout-row">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.slug;
            return (
              <div 
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? null : cat.slug)}
                className="category-card-item"
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  borderRadius: '12px',
                  border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                  backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.02)' : 'white',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* 65px circle icon (grows on desktop) */}
                <div className="category-circle-icon" style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg)',
                  flexShrink: 0
                }}>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                
                {/* Text (11px mobile, 14px desktop) */}
                <div className="category-text-label" style={{ 
                  fontWeight: '700', 
                  color: isSelected ? 'var(--accent)' : 'var(--text-dark)',
                  lineHeight: 1.2,
                  textAlign: 'center',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  width: '100%'
                }}>
                  {cat.name}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Mobile defaults */
        .category-container {
          padding: 0;
        }
        .title-bar-padding {
          padding: 0 16px;
        }
        .category-section-title {
          font-size: 15px !important;
        }
        .clear-link-font {
          font-size: 11px !important;
        }
        .category-layout-row {
          display: flex; 
          gap: 10px; 
          padding: 4px 16px 12px 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
        }
        .category-card-item {
          width: 92px;
          height: auto;
          min-height: 112px;
          padding: 10px 6px;
          flex-shrink: 0;
          scroll-snap-align: start;
        }
        .category-circle-icon {
          width: 48px;
          height: 48px;
          font-size: 22px;
          margin-bottom: 8px;
        }
        .category-text-label {
          font-size: 11px;
          word-break: break-word;
        }

        /* Desktop overrides */
        @media (min-width: 1024px) {
          .category-container {
            padding: 0 16px !important;
          }
          .title-bar-padding {
            padding: 0 !important;
            margin-bottom: 20px !important;
          }
          .category-section-title {
            font-size: 24px !important;
          }
          .clear-link-font {
            font-size: 14px !important;
          }
          .category-layout-row {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .category-card-item {
            width: 100% !important;
            height: 140px !important;
            padding: 16px 12px !important;
            border-radius: 20px !important;
          }
          .category-circle-icon {
            width: 70px !important;
            height: 70px !important;
            font-size: 32px !important;
            margin-bottom: 10px !important;
          }
          .category-text-label {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryList;
