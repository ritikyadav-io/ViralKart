import React from 'react';

const TrustBar = () => {
  const cards = [
    { icon: '📦', title: 'COD Available', sub: 'Pay when you receive' },
    { icon: '🚚', title: 'Fast Shipping', sub: '2-5 Days Delivery' },
    { icon: '🔒', title: 'Secure Checkout', sub: '100% Safe Payments' },
    { icon: '↩', title: 'Easy Returns', sub: '7-Day Easy Returns' }
  ];

  return (
    <section style={{ padding: '16px 0', backgroundColor: 'var(--bg)' }}>
      <div className="container trust-container">
        <div className="grid-cols-4" style={{ padding: 0 }}>
          
          {cards.map((card, i) => (
            <div 
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{
                fontSize: '20px',
                background: 'var(--bg)',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {card.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-dark)', margin: 0, lineHeight: 1.2 }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '10px', color: 'var(--text-muted)', margin: '1px 0 0 0', lineHeight: 1.2 }}>
                  {card.sub}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        .trust-container {
          padding: 0;
        }
        @media (min-width: 1024px) {
          .trust-container {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
