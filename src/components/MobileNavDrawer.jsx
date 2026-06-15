import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MobileNavDrawer = ({ onNavigate, searchQuery, setSearchQuery }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, categories } = useContext(CartContext);

  const handleLinkClick = (slug) => {
    setIsMobileMenuOpen(false);
    onNavigate('home', slug);
  };

  const handleClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={handleClose}
      />

      {/* Drawer */}
      <div className={`drawer-left ${isMobileMenuOpen ? 'open' : ''}`} style={{ backgroundColor: 'white' }}>
        
        {/* Top Header: Close button right + search bar full width */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary)' }}>Menu</span>
            
            {/* Close button right */}
            <button 
              onClick={handleClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-dark)',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '4px'
              }}
            >
              ✕
            </button>
          </div>

          {/* Search bar full width */}
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onNavigate('home');
              }}
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                fontSize: '13px',
                outline: 'none',
                backgroundColor: 'var(--bg)',
                fontFamily: 'var(--font-family)'
              }}
            />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Content (Scrollable links) */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          
          {/* Nav items: Font: 15px bold, Padding: 14px 20px, Border bottom: 1px light, Arrow icon right */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            <button 
              onClick={() => handleLinkClick(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px', /* Padding: 14px 20px */
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9', /* Border bottom: 1px light */
                width: '100%',
                fontSize: '15px', /* Font: 15px bold */
                fontWeight: '700',
                color: 'var(--text-dark)',
                cursor: 'pointer'
              }}
            >
              <span>🏠 All Products / Home</span>
              <span style={{ color: 'var(--text-light)' }}>➔</span>
            </button>

            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => handleLinkClick(cat.slug)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px', /* Padding: 14px 20px */
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #F1F5F9', /* Border bottom: 1px light */
                  width: '100%',
                  fontSize: '15px', /* Font: 15px bold */
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  cursor: 'pointer'
                }}
              >
                <span>{cat.icon} {cat.name}</span>
                <span style={{ color: 'var(--text-light)' }}>➔</span>
              </button>
            ))}
          </div>

        </div>

        {/* Bottom section (Track Order | Contact | Returns, Font: 13px gray) */}
        <div style={{ 
          padding: '20px 16px', 
          borderTop: '1px solid var(--border)', 
          backgroundColor: 'var(--bg)'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            fontSize: '13px', /* Font: 13px */
            color: '#6B7280', /* gray */
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }}>Track Order</a>
            <span>|</span>
            <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }}>Contact</a>
            <span>|</span>
            <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }}>Returns</a>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-light)', textAlign: 'center', marginTop: '6px', fontWeight: '700' }}>
            🇮🇳 Delivering across India
          </div>
        </div>

      </div>
    </>
  );
};

export default MobileNavDrawer;
