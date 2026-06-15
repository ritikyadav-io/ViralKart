import React from 'react';

const AnnouncementBar = () => {
  const text = "🚚 Free Shipping Above ₹999  •  💰 Cash On Delivery Available  •  🇮🇳 Delivery Across India  •  🔒 Secure Checkout  •  ⭐ Trusted By 10,000+ Customers  •  ↩ Easy 7-Day Returns";
  
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {/* Repeat content twice for seamless infinite scrolling loop */}
        <span className="marquee-item">{text}</span>
        <span className="marquee-item">{text}</span>
        <span className="marquee-item">{text}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
