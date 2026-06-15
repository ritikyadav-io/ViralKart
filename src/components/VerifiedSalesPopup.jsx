import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const indianBuyers = [
  { name: 'Rahul S.', city: 'Pune', time: '2 mins ago' },
  { name: 'Neha K.', city: 'Delhi NCR', time: '5 mins ago' },
  { name: 'Vikram A.', city: 'Bangalore', time: '1 min ago' },
  { name: 'Anjali P.', city: 'Mumbai', time: '8 mins ago' },
  { name: 'Rohan D.', city: 'Hyderabad', time: '3 mins ago' },
  { name: 'Karan J.', city: 'Ahmedabad', time: '12 mins ago' },
  { name: 'Kriti L.', city: 'Chennai', time: '7 mins ago' }
];

const VerifiedSalesPopup = () => {
  const { products } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const triggerPopup = () => {
      if (!products || products.length === 0) return;
      // Pick a random buyer and random product
      const buyer = indianBuyers[Math.floor(Math.random() * indianBuyers.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      
      setCurrentBuyer(buyer);
      setCurrentProduct(product);
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // Initial trigger after 6 seconds
    const initialTimer = setTimeout(triggerPopup, 6000);

    // Repeat every 20 seconds
    const interval = setInterval(triggerPopup, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible || !currentBuyer || !currentProduct) return null;

  return (
    <div 
      className="sales-popup-card animate-sales-popup"
      style={{
        position: 'fixed',
        zIndex: 900,
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.12)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 12px',
        maxWidth: '300px',
        pointerEvents: 'none',
        left: '16px',
        bottom: '80px', // sit above the bottom sticky buy bar on mobile
      }}
    >
      <img 
        src={currentProduct.images[0]} 
        alt={currentProduct.title}
        style={{
          width: '44px',
          height: '44px',
          objectFit: 'cover',
          borderRadius: '6px',
          backgroundColor: 'var(--bg)',
          flexShrink: 0
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <p style={{ fontSize: '11px', color: 'var(--text-dark)', fontWeight: '700', margin: 0, lineHeight: 1.25 }}>
          {currentBuyer.name} ({currentBuyer.city})
        </p>
        <p style={{ fontSize: '10px', color: 'var(--text-main)', margin: 0, lineHeight: 1.25 }}>
          Purchased <span style={{ fontWeight: '600', color: 'var(--accent)' }}>{currentProduct.title.split(' ').slice(0, 3).join(' ')}</span>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1px' }}>
          <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>{currentBuyer.time}</span>
          <span style={{ fontSize: '9px', color: 'var(--success)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '1px' }}>
            <span style={{ fontSize: '8px' }}>✅</span> Verified Buyer
          </span>
        </div>
      </div>

      <style>{`
        .sales-popup-card {
          bottom: 80px;
        }
        @media (min-width: 1024px) {
          .sales-popup-card {
            left: 24px !important;
            bottom: 24px !important;
            max-width: 320px !important;
          }
        }
        @keyframes slideUpPopup {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-sales-popup {
          animation: slideUpPopup 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default VerifiedSalesPopup;
