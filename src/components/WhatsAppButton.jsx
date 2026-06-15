import React, { useState, useEffect } from 'react';
import { STORE_NAME } from '../utils/shopify';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const whatsappUrl = `https://wa.me/918824318839?text=Hi%20${encodeURIComponent(STORE_NAME)},%20I%27m%20interested%20in%20your%20products.`;

  useEffect(() => {
    // Show popup message after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '16px', zIndex: 800, display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }} className="whatsapp-container-wrapper">
      {showPopup && (
        <div 
          style={{
            backgroundColor: 'white',
            color: '#1E293B',
            padding: '8px 12px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontSize: '12px',
            fontWeight: '700',
            border: '1px solid #E2E8F0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            animation: 'fadeInLeft 0.3s ease',
            whiteSpace: 'nowrap'
          }}
        >
          <span>💬 Need Help? Chat with us!</span>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowPopup(false); }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#94A3B8',
              fontSize: '10px',
              padding: '0 2px'
            }}
          >
            ✕
          </button>
          {/* Small tail arrow pointing to the whatsapp icon */}
          <div style={{
            position: 'absolute',
            right: '-6px',
            top: '50%',
            transform: 'translateY(-50%) rotate(45deg)',
            width: '10px',
            height: '10px',
            backgroundColor: 'white',
            borderRight: '1px solid #E2E8F0',
            borderTop: '1px solid #E2E8F0'
          }} />
        </div>
      )}
      
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn"
        title="Chat with us on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          backgroundColor: '#25D366',
          color: 'white',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s ease',
          outline: 'none',
          border: 'none'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white' }}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.63 1.977 14.153.951 11.53.951c-5.445 0-9.87 4.373-9.874 9.802-.001 1.737.478 3.426 1.388 4.908l-.971 3.547 3.639-.955zM17.15 13.9c-.31-.156-1.838-.907-2.122-1.01-.284-.103-.49-.156-.697.156-.206.31-.798 1.01-.978 1.216-.18.206-.36.232-.67.078-.31-.156-1.31-.484-2.498-1.543-.922-.823-1.545-1.84-1.725-2.15-.18-.31-.018-.478.137-.633.14-.139.31-.36.465-.54.155-.18.206-.31.31-.515.103-.206.052-.387-.026-.54-.077-.156-.697-1.678-.954-2.3-.25-.6-.524-.52-.72-.53-.18-.01-.387-.01-.593-.01-.206 0-.542.077-.825.387-.284.31-1.084 1.06-1.084 2.583 0 1.522 1.107 2.99 1.262 3.196.155.206 2.178 3.325 5.276 4.66.737.318 1.31.507 1.758.65.74.235 1.414.201 1.947.12.593-.09 1.838-.75 2.096-1.47.258-.72.258-1.34.18-1.47-.077-.13-.283-.206-.592-.36z"/>
        </svg>
      </a>
      
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        /* Mobile adjust when buy bar is present */
        body:has(.prodpage-mobile-sticky-buy) .whatsapp-container-wrapper {
          bottom: 96px !important;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
