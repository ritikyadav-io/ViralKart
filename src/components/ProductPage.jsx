import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { SHOPIFY_STORE_URL, STORE_NAME } from '../utils/shopify';

const SPEC_KEYS = [
  "Product Name", "Package Contains", "Package Contain", "Material", "Color", "Colour", "Weight", "LBH", 
  "Dimension", "Dimensions", "Size", "Combo", "Pack of", "Pack Of", "Brand", "Ideal For", "Ideal for", 
  "Capacity", "Voltage", "Power", "Suitable For", "Suitable for", "Function", "Contains", "L B H", "L*B*H", "L x B x H"
];

const FEATURE_KEYS = [
  "CONVENIENT WIDELY USED", "Environmental Abs Abs", "SHOWER SOAP DISPENSER", "EASY TO INSTALL & USE", "Large Capacity", "Additional Information"
];

const ALL_KEYS = [...SPEC_KEYS, ...FEATURE_KEYS];

function parseShopifyDescription(html) {
  if (!html) return { specs: [], features: [], paragraphs: [] };
  
  // Normalize spacing and HTML tags
  let text = html
    .replace(/<li[^>]*>/gi, '\n• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Insert newlines before key labels if they are in the middle of a string
  const escapedKeys = ALL_KEYS.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const insertNewlineRegex = new RegExp(`(\\s)(${escapedKeys})\\s*[:\\-]`, 'gi');
  text = text.replace(insertNewlineRegex, '\n$2:');

  // Split by newlines
  const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean);

  const specs = [];
  const features = [];
  const paragraphs = [];

  for (const line of lines) {
    const match = line.match(/^([^:\-\n•\?\!]{2,35})\s*[:\-]\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();

      const keyLower = key.toLowerCase();
      const isSpecKey = SPEC_KEYS.some(k => keyLower.includes(k.toLowerCase()) || k.toLowerCase().includes(keyLower));
      
      if (isSpecKey && value.length < 70) {
        specs.push({ label: key, value });
      } else {
        features.push({ title: key, desc: value });
      }
    } else {
      paragraphs.push(line);
    }
  }

  return { specs, features, paragraphs };
}

function getFeatureIcon(title) {
  const t = title.toLowerCase();
  if (t.includes('install') || t.includes('easy') || t.includes('use') || t.includes('setup')) return '🔧';
  if (t.includes('capacity') || t.includes('size') || t.includes('volume') || t.includes('ml')) return '🧴';
  if (t.includes('material') || t.includes('abs') || t.includes('durable') || t.includes('steel') || t.includes('strong') || t.includes('rust') || t.includes('heat')) return '🛡️';
  if (t.includes('convenient') || t.includes('design') || t.includes('compact') || t.includes('portable')) return '✨';
  if (t.includes('shower') || t.includes('soap') || t.includes('dispenser') || t.includes('liquid') || t.includes('gel')) return '🧼';
  if (t.includes('clean') || t.includes('scrub') || t.includes('wash') || t.includes('groove') || t.includes('dust')) return '🧹';
  if (t.includes('water') || t.includes('drain') || t.includes('leak') || t.includes('wet')) return '💧';
  if (t.includes('cramp') || t.includes('pain') || t.includes('relief') || t.includes('heat') || t.includes('massage') || t.includes('ems')) return '💆';
  if (t.includes('watch') || t.includes('time') || t.includes('date') || t.includes('digital') || t.includes('led')) return '⌚';
  if (t.includes('kid') || t.includes('toy') || t.includes('block') || t.includes('baby') || t.includes('child')) return '👶';
  if (t.includes('pet') || t.includes('dog') || t.includes('cat') || t.includes('hair') || t.includes('leash')) return '🐾';
  return '⚡';
}

const ProductPage = ({ productSlug, onNavigate }) => {
  const { 
    addToCart, 
    setIsCheckoutOpen, 
    addToRecentlyViewed, 
    wishlist, 
    toggleWishlist,
    products,
    categories,
    isLoading
  } = useContext(CartContext);
  
  const product = products.find(p => p.slug === productSlug) || (products.length > 0 ? products[0] : null);

  // ALL hooks MUST be declared before any early return (Rules of Hooks)
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const [shippingOpen, setShippingOpen] = useState(true);
  const [returnOpen, setReturnOpen] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 45, seconds: 12 });
  const bundleIds = product?.frequentlyBoughtTogether?.products || (product ? [product.id] : []);
  const [selectedBundleItems, setSelectedBundleItems] = useState([]);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Reset product states when slug changes
  useEffect(() => {
    if (!product) return;
    setActiveImgIndex(0);
    setIsVideoPlaying(false);
    setQuantity(1);
    setVisibleReviewsCount(3);
    setFaqOpenIndex(-1);
    setShippingOpen(true);
    setReturnOpen(false);
    setSelectedBundleItems(bundleIds);
    addToRecentlyViewed(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSlug]);

  // Urgency Timer Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 45, seconds: 12 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show loading state while Shopify data loads (AFTER all hooks)
  if (isLoading || !product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #E5E7EB', borderTopColor: '#2563EB', animation: 'spin 0.8s linear infinite' }} />
        <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>Loading product...</span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Format Helper: Rupee
  const formatPrice = (price) => {
    return "₹" + price.toLocaleString("en-IN");
  };

  // Math Helper: Discounts
  const discountPct = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
  const savings = product.comparePrice - product.price;

  // Swipeable gesture support for mobile image slider
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 60) {
      // Swipe left -> Next Image
      setActiveImgIndex((prev) => (prev + 1) % product.images.length);
      setIsVideoPlaying(false);
    } else if (diff < -60) {
      // Swipe right -> Prev Image
      setActiveImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      setIsVideoPlaying(false);
    }
  };

  // Cart Add Actions
  const handleAddCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    if (isRedirecting) return;
    const vId = product.variantId || product.id;
    
    if (!vId || !/^\d+$/.test(String(vId))) {
      alert('Checkout is currently unavailable for this item (invalid Shopify variant).');
      return;
    }

    setIsRedirecting(true);
    window.location.href = `https://${SHOPIFY_STORE_URL}/cart/${vId}:${quantity}`;
  };

  // Frequently Bought Together calculations
  const fbtProducts = products.filter(p => bundleIds.includes(p.id));
  const activeFbtItems = fbtProducts.filter(p => selectedBundleItems.includes(p.id));
  const bundleTotal = activeFbtItems.reduce((sum, item) => sum + item.price, 0);
  const bundleCompareTotal = activeFbtItems.reduce((sum, item) => sum + item.comparePrice, 0);
  const bundleSavings = bundleCompareTotal - bundleTotal;

  const handleToggleFbt = (id) => {
    // Cannot toggle off the main item
    if (id === product.id) return;
    
    setSelectedBundleItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleAddBundle = () => {
    activeFbtItems.forEach(item => {
      addToCart(item, 1);
    });
  };

  const isWished = wishlist.includes(product.id);

  // Map related products
  const relatedList = products.filter(p => {
    if (product.relatedProducts) {
      return product.relatedProducts.includes(p.id);
    }
    return p.id !== product.id;
  }).slice(0, 5);

  const formatTimeStr = (num) => String(num).padStart(2, '0');

  const scrollToReviews = (e) => {
    e.preventDefault();
    const element = document.getElementById('reviews-target');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: 'white', paddingBottom: '90px', position: 'relative' }} className="prodpage-section">

      <div className="container">
        <div className="gallery-info-layout">
          
          {/* LEFT COLUMN: VISUAL GALLERY SYSTEM */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="prodpage-left-block">
            
            {/* SECTION 1 — PRODUCT IMAGE GALLERY */}
            <div 
              className="prodpage-large-img-box"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{
                width: '100%',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab'
              }}
            >
              <img 
                src={product.images[activeImgIndex]} 
                alt={product.title} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }} 
              />

              {/* Discount badge top-left */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#EF4444',
                color: 'white',
                fontSize: '11px',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '0 0 10px 0',
                zIndex: 5
              }}>
                {discountPct}% OFF
              </div>

              {/* Image counter top-right */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '54px',
                backgroundColor: 'rgba(0,0,0,0.4)',
                color: 'white',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 8px',
                borderRadius: '20px',
                zIndex: 5
              }}>
                {activeImgIndex + 1}/{product.images.length}
              </div>

              {/* Wishlist Heart button top-right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '10px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: isWished ? '#EF4444' : '#9CA3AF',
                  zIndex: 5
                }}
              >
                {isWished ? '❤️' : '🤍'}
              </button>

              {/* Dot Indicators Bottom Center */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  zIndex: 5
                }}
                className="prodpage-dots-row"
              >
                {product.images.map((_, i) => {
                  const isActive = activeImgIndex === i;
                  return (
                    <div 
                      key={i}
                      onClick={() => { setActiveImgIndex(i); }}
                      style={{
                        width: isActive ? '18px' : '6px',
                        height: '6px',
                        borderRadius: '3px',
                        backgroundColor: isActive ? '#2563EB' : '#9CA3AF',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    />
                  );
                })}
              </div>

            </div>

            {/* Thumbnail strip below slider */}
            <div className="prodpage-thumbnails-row" style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '8px 16px', justifyContent: 'center' }}>
              {product.images.map((img, i) => {
                const isActive = activeImgIndex === i;
                return (
                  <div 
                    key={i}
                    onClick={() => { setActiveImgIndex(i); }}
                    className="prodpage-thumbnail-box"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '8px',
                      border: isActive ? '2px solid #2563EB' : '1px solid var(--border)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      flexShrink: 0,
                      backgroundColor: '#F8FAFC'
                    }}
                  >
                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px' }} />
                  </div>
                );
              })}
            </div>

            {/* Small box for video player */}
            {product.videoUrl && (
              <div 
                className="prodpage-video-box"
                style={{ 
                  padding: '8px 16px', 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border)',
                  marginTop: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  🎬 Product Demo Video
                </span>
                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '140px', backgroundColor: 'black' }}>
                  <video 
                    src={product.videoUrl} 
                    controls 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: DETAIL DESCRIPTIONS BLOCK */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="prodpage-right-block">
            
            {/* SECTION 2 — PRODUCT TITLE BLOCK */}
            <div style={{ padding: '16px 16px 0 16px', backgroundColor: 'white' }}>
              <h1 className="prodpage-title" style={{ fontSize: '17px', fontWeight: '800', color: '#0F172A', lineHeight: 1.4, marginBottom: '8px', margin: 0 }}>
                {product.title}
              </h1>
              
              {/* Rating Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ color: '#FFB800', fontSize: '14px' }}>★ ★ ★ ★ ★</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>{product.rating}</span>
                <span style={{ color: 'var(--text-light)' }}>|</span>
                <a href="#reviews-target" onClick={scrollToReviews} style={{ fontSize: '13px', color: '#2563EB', textDecoration: 'underline', fontWeight: '700' }}>
                  {product.reviewsCount} Reviews
                </a>
                <span style={{ color: 'var(--text-light)' }}>|</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '700' }}>
                  {product.soldCount || '1,000+ Sold'}
                </span>
              </div>
            </div>

            {/* SECTION 3 — PRICE BLOCK */}
            <div style={{ padding: '12px 16px', backgroundColor: 'white', borderBottom: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              
              {/* Pricing Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="prodpage-price-font" style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A' }}>
                  {formatPrice(product.price)}
                </span>
                <span className="prodpage-compare-font" style={{ fontSize: '14px', color: '#9CA3AF', textDecoration: 'line-through' }}>
                  {formatPrice(product.comparePrice)}
                </span>
                <span style={{ fontSize: '12px', backgroundColor: '#EF4444', color: 'white', padding: '2px 8px', borderRadius: '20px', fontWeight: '800' }}>
                  {discountPct}% OFF
                </span>
              </div>

              {/* Instant Savings text */}
              <p style={{ fontSize: '12px', color: '#16A34A', fontWeight: '700', margin: 0 }}>
                🎉 You save {formatPrice(savings)} on this order
              </p>

              {/* Stock Urgency */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                {product.stockCount <= 5 ? (
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="dot-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#DC2626', display: 'inline-block' }} />
                    Only {product.stockCount} Left! Sell-out risk: HIGH
                  </span>
                ) : product.stockCount <= 12 ? (
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#DC2626' }}>
                    ⚠️ Only {product.stockCount} Left In Stock!
                  </span>
                ) : (
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#16A34A' }}>
                    ✅ In Stock
                  </span>
                )}
              </div>

              <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0, marginTop: '2px' }}>
                Inclusive of all taxes
              </p>
            </div>

            {/* SECTION 4 — TRUST BADGES ROW */}
            <div 
              style={{
                padding: '12px 16px',
                backgroundColor: '#F0F9FF',
                borderTop: '1px solid #DBEAFE',
                borderBottom: '1px solid #DBEAFE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center'
              }}
            >
              <div style={{ flex: 1, fontSize: '10px', fontWeight: '800', color: '#1E40AF' }}>
                <span style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>📦</span>
                COD Available
              </div>
              <div style={{ flex: 1, fontSize: '10px', fontWeight: '800', color: '#1E40AF' }}>
                <span style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>🚚</span>
                Free Shipping
              </div>
              <div style={{ flex: 1, fontSize: '10px', fontWeight: '800', color: '#1E40AF' }}>
                <span style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>↩</span>
                Easy Returns
              </div>
              <div style={{ flex: 1, fontSize: '10px', fontWeight: '800', color: '#1E40AF' }}>
                <span style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>🔒</span>
                Secure Pay
              </div>
            </div>

            {/* SECTION 5 — QUANTITY + ADD TO CART */}
            <div style={{ padding: '16px', backgroundColor: 'white' }}>
              
              {/* Flash Sale countdown box */}
              <div style={{
                backgroundColor: '#FEF2F2',
                border: '1px dashed #EF4444',
                borderRadius: '8px',
                padding: '8px 12px',
                marginBottom: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ⚡ FLASH SALE ENDING IN
                </span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0F172A', letterSpacing: '1px' }}>
                  {formatTimeStr(countdown.hours)}h : {formatTimeStr(countdown.minutes)}m : {formatTimeStr(countdown.seconds)}s
                </span>
              </div>

              {/* Quantity Selector */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A' }}>Quantity</span>
                
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                    style={{ width: '32px', height: '32px', border: 'none', background: 'none', fontSize: '16px', fontWeight: '800', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ width: '48px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', borderLeft: '1px solid #E5E7EB', borderRight: '1px solid #E5E7EB', backgroundColor: '#F8FAFC' }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    style={{ width: '32px', height: '32px', border: 'none', background: 'none', fontSize: '16px', fontWeight: '800', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Volume Discount Quantity Breaks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '12px 0' }}>
                <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)' }}>🎯 SELECT BUNDLE DEALS FOR INSTANT SAVINGS:</label>
                
                <div 
                  onClick={() => setQuantity(1)}
                  style={{
                    border: quantity === 1 ? '2px solid #2563EB' : '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: quantity === 1 ? 'rgba(37,99,235,0.02)' : 'white'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A' }}>Buy 1 Unit (Standard Pack)</span>
                  <span style={{ fontSize: '12px', fontWeight: '800' }}>{formatPrice(product.price)}</span>
                </div>

                <div 
                  onClick={() => setQuantity(2)}
                  style={{
                    border: quantity === 2 ? '2px solid #16A34A' : '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: quantity === 2 ? 'rgba(22,163,74,0.02)' : 'white'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A', display: 'block' }}>Buy 2 Units (Save 15% Extra)</span>
                    <span style={{ fontSize: '10px', color: '#16A34A', fontWeight: '700' }}>🔥 Recommended / Most Popular</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '800' }}>{formatPrice(Math.round(product.price * 0.85))} each</span>
                </div>

                <div 
                  onClick={() => setQuantity(3)}
                  style={{
                    border: quantity === 3 ? '2px solid #16A34A' : '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: quantity === 3 ? 'rgba(22,163,74,0.02)' : 'white'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A', display: 'block' }}>Buy 3 Units (Save 25% Extra)</span>
                    <span style={{ fontSize: '10px', color: '#16A34A', fontWeight: '700' }}>💎 Best Value Deal</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '800' }}>{formatPrice(Math.round(product.price * 0.75))} each</span>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                <button 
                  onClick={handleAddCart}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    height: '50px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add To Cart
                </button>
                
                <button 
                  onClick={handleBuyNow}
                  disabled={isRedirecting}
                  className="btn btn-success animate-wiggle"
                  style={{
                    flex: 1,
                    height: '50px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 14px rgba(22, 163, 74, 0.3)',
                    opacity: isRedirecting ? 0.75 : 1,
                    cursor: isRedirecting ? 'not-allowed' : 'pointer'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  {isRedirecting ? 'Redirecting...' : 'Buy Now'}
                </button>
              </div>

              <p style={{ fontSize: '11px', color: '#64748B', textAlign: 'center', marginTop: '8px', margin: '8px 0 0 0', fontWeight: '600' }}>
                🔒 100% Secure Checkout • COD Available
              </p>

            </div>

            {/* SECTION 6 — WHY YOU NEED THIS */}
            {product.whyNeed && product.whyNeed.length > 0 && (
              <div 
                style={{ 
                  padding: '16px', 
                  backgroundColor: '#FFF7ED', 
                  borderTop: '3px solid #F97316', 
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#C2410C', margin: '0 0 4px 0' }}>
                  😩 Still Dealing With These Problems?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {product.whyNeed.map((prob, i) => (
                    <div 
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start',
                        padding: '8px 0',
                        borderBottom: i < product.whyNeed.length - 1 ? '1px dashed #FED7AA' : 'none'
                      }}
                    >
                      <span style={{ flexShrink: 0 }}>❌</span>
                      <span style={{ fontSize: '13px', color: '#0F172A', fontWeight: '600', lineHeight: 1.35 }}>
                        {prob}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 7 — PRODUCT DESCRIPTION (Shopify Dynamic Layout) */}
            {(() => {
              if (product.descriptionHtml) {
                const { specs, features, paragraphs } = parseShopifyDescription(product.descriptionHtml);
                
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Specifications & General Details Box */}
                    <div 
                      style={{ 
                        padding: '16px', 
                        backgroundColor: 'white', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
                      }}
                    >
                      <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '4px', height: '18px', borderRadius: '2px', background: 'linear-gradient(180deg, #2563EB, #7C3AED)', display: 'inline-block', flexShrink: 0 }} />
                        Product Specifications & Details
                      </h3>

                      {/* General narrative text paragraphs */}
                      {paragraphs.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {paragraphs.map((para, i) => (
                            <p key={i} style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Specifications zebra table */}
                      {specs.length > 0 && (
                        <div style={{ marginTop: '4px' }}>
                          <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>📋</span> Technical Specifications
                          </h4>
                          <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                            {specs.map((spec, i) => (
                              <div 
                                key={i} 
                                style={{ 
                                  display: 'flex', 
                                  borderBottom: i < specs.length - 1 ? '1px solid #E5E7EB' : 'none',
                                  backgroundColor: i % 2 === 0 ? '#F8FAFC' : 'white',
                                  padding: '10px 14px',
                                  fontSize: '12px'
                                }}
                              >
                                <div style={{ width: '38%', fontWeight: '700', color: '#475569', paddingRight: '12px', wordBreak: 'break-word' }}>
                                  {spec.label}
                                </div>
                                <div style={{ width: '62%', fontWeight: '600', color: '#0F172A', wordBreak: 'break-word' }}>
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features grid */}
                    {features.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#64748B', margin: '4px 0 2px 4px', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>✨</span> Key Highlights & Features
                        </h4>
                        
                        <div className="description-features-grid">
                          {features.map((feat, i) => (
                            <div 
                              key={i}
                              style={{
                                backgroundColor: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '14px',
                                padding: '16px',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                                borderLeft: '4px solid #2563EB'
                              }}
                            >
                              <span style={{ fontSize: '24px', flexShrink: 0, marginTop: '-2px' }}>
                                {getFeatureIcon(feat.title)}
                              </span>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h5 style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A', margin: 0, textTransform: 'capitalize' }}>
                                  {feat.title.toLowerCase()}
                                </h5>
                                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                                  {feat.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              }

              // Fallback for non-Shopify products (e.g. UV Toothbrush Holder)
              if (product.solution) {
                return (
                  <div 
                    style={{ 
                      padding: '16px', 
                      backgroundColor: '#F0FDF4', 
                      borderTop: '3px solid #16A34A', 
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#15803D', margin: 0 }}>
                      ✅ Introducing The {product.title.split(' ')[0]}
                    </h3>
                    
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6, margin: 0 }}>
                      {product.solution.description}
                    </p>

                    {/* Benefit chips below */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                      {(product.solution.chips || []).map((chip, i) => (
                        <span 
                          key={i}
                          style={{
                            backgroundColor: 'white',
                            border: '1px solid #BBF7D0',
                            borderRadius: '20px',
                            padding: '6px 12px',
                            fontSize: '11px',
                            fontWeight: '800',
                            color: '#15803D',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '2px'
                          }}
                        >
                          ✅ {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })()}

            {/* SECTION 8 — BENEFITS GRID */}
            {product.benefits && product.benefits.length > 0 && (
              <div style={{ padding: '16px', backgroundColor: 'white' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '12px', margin: 0 }}>
                  What You Get
                </h3>
                <div className="benefits-layout-grid" style={{ display: 'grid', gap: '10px' }}>
                  {product.benefits.slice(0, 4).map((benefit, i) => (
                    <div 
                      key={i}
                      style={{
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E5E7EB',
                        borderRadius: '14px',
                        padding: '14px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ fontSize: '28px', display: 'block' }}>{benefit.icon}</span>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A', marginTop: '6px', marginBottom: '2px' }}>
                        {benefit.title}
                      </h4>
                      <p style={{ fontSize: '11px', color: '#64748B', margin: 0, lineHeight: 1.3 }}>
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}



            {/* SECTION 10 — HOW IT WORKS */}
            {product.howItWorks && product.howItWorks.length > 0 && (
              <div style={{ padding: '16px', backgroundColor: 'white' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '14px', margin: 0 }}>
                  How It Works
                </h3>

                <div className="steps-layout-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {product.howItWorks.map((step, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '10px 14px',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #E5E7EB',
                          borderRadius: '10px'
                        }}
                      >
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#2563EB',
                          color: 'white',
                          fontWeight: '800',
                          fontSize: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {i + 1}
                        </div>
                        <div style={{ marginLeft: '12px' }}>
                          <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                            {step.title}
                          </h4>
                          <p style={{ fontSize: '12px', color: '#6B7280', margin: '2px 0 0 0', lineHeight: 1.3 }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Connector Line */}
                      {i < product.howItWorks.length - 1 && (
                        <div style={{
                          width: '2px',
                          height: '18px',
                          backgroundColor: '#DBEAFE',
                          marginLeft: '30px',
                          margin: '2px 0 2px 30px'
                        }} className="step-connector-line" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 11 — FEATURE ICONS */}
            {product.features && product.features.length > 0 && (
              <div style={{ padding: '12px 16px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E5E7EB', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '10px', margin: 0 }}>
                  Product Features
                </h3>
                <div className="feature-icons-grid" style={{ display: 'grid', gap: '10px' }}>
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div 
                      key={i}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 4px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        textAlign: 'center'
                      }}
                    >
                      <span style={{ fontSize: '28px', display: 'block' }}>{feat.icon || '⚙️'}</span>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 12 — CUSTOMER REVIEWS */}
            <div id="reviews-target" style={{ padding: '16px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                  Customer Reviews
                </h3>
                <a href="#reviews-target" onClick={(e) => { e.preventDefault(); setVisibleReviewsCount(product.reviews.length); }} style={{ fontSize: '13px', color: '#2563EB', fontWeight: '700' }}>
                  View All
                </a>
              </div>

              {/* Rating chart summary card */}
              <div 
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '14px',
                  padding: '14px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '14px'
                }}
                className="reviews-chart-layout"
              >
                <div style={{ textAlign: 'center' }} className="reviews-overall-box">
                  <div style={{ fontSize: '32px', fontWeight: '800', color: '#0F172A', lineHeight: 1 }}>
                    {product.rating}
                  </div>
                  <div style={{ color: '#FFB800', fontSize: '14px', margin: '4px 0' }}>★ ★ ★ ★ ★</div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '700' }}>
                    {product.reviewsCount} global ratings
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%' }}>
                  {[
                    { stars: 5, pct: 88 },
                    { stars: 4, pct: 9 },
                    { stars: 3, pct: 2 },
                    { stars: 2, pct: 1 },
                    { stars: 1, pct: 0 }
                  ].map((row) => (
                    <div key={row.stars} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px' }}>
                      <span style={{ width: '38px', fontWeight: '700', color: '#0F172A' }}>{row.stars} Star</span>
                      <div style={{ flex: 1, height: '6px', background: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${row.pct}%`, height: '100%', background: '#FFB800', borderRadius: '3px' }} />
                      </div>
                      <span style={{ width: '30px', color: '#64748B', textAlign: 'right', fontWeight: '700' }}>
                        {row.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Stack - no avatars, no product images */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.reviews.slice(0, visibleReviewsCount).map((rev, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    {/* Top Row: name + verified + date */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                          <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            background: `hsl(${(idx * 67 + 200) % 360}, 70%, 90%)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '13px', fontWeight: '800',
                            color: `hsl(${(idx * 67 + 200) % 360}, 60%, 35%)`,
                            flexShrink: 0
                          }}>
                            {rev.name.charAt(0)}
                          </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '12px', fontWeight: '800', color: '#0F172A' }}>{rev.name}</span>
                            <span style={{ fontSize: '9px', backgroundColor: 'rgba(22,163,74,0.1)', color: '#16A34A', padding: '1px 5px', borderRadius: '4px', fontWeight: '800', whiteSpace: 'nowrap' }}>✅ Verified</span>
                          </div>
                          <div style={{ color: '#FFB800', fontSize: '10px', marginTop: '1px' }}>{'★'.repeat(Math.floor(rev.rating))}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: '10px', color: '#94A3B8', whiteSpace: 'nowrap', flexShrink: 0 }}>{rev.date}</span>
                    </div>

                    <p style={{ fontSize: '12px', color: '#374151', margin: 0, lineHeight: 1.5 }}>
                      "{rev.text}"
                    </p>

                    {/* Review Product Image */}
                    {(() => {
                      const reviewImgs = rev.reviewImages || (product.images && product.images.length > 0 ? [product.images[idx % product.images.length]] : []);
                      if (reviewImgs && reviewImgs.length > 0) {
                        return (
                          <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
                            {reviewImgs.map((imgUrl, i) => (
                              <img 
                                key={i}
                                src={imgUrl} 
                                alt="User review product" 
                                style={{
                                  width: '60px',
                                  height: '60px',
                                  borderRadius: '8px',
                                  objectFit: 'cover',
                                  border: '1px solid #E2E8F0',
                                  backgroundColor: '#F8FAFC'
                                }}
                              />
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </div>
                ))}
              </div>

              {/* Load more review button */}
              {visibleReviewsCount < product.reviews.length && (
                <button 
                  onClick={() => setVisibleReviewsCount(prev => prev + 3)}
                  style={{
                    width: '100%',
                    height: '44px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '10px',
                    fontSize: '13px',
                    color: '#374151',
                    background: 'white',
                    fontWeight: '700',
                    cursor: 'pointer',
                    marginTop: '12px'
                  }}
                >
                  Load More Reviews
                </button>
              )}

            </div>

            {/* SECTION 13 — FREQUENTLY BOUGHT TOGETHER */}
            {fbtProducts.length > 1 && (
              <div style={{ padding: '16px', backgroundColor: '#FFF7ED', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '14px', margin: 0 }}>
                  Frequently Bought Together
                </h3>

                {/* Images Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
                  {fbtProducts.map((item, idx) => (
                    <React.Fragment key={item.id}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '10px',
                        border: '1px solid #E5E7EB',
                        overflow: 'hidden',
                        position: 'relative',
                        opacity: selectedBundleItems.includes(item.id) ? 1 : 0.4,
                        transition: 'opacity 0.2s'
                      }}>
                        <img src={item.images[0]} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      {idx < fbtProducts.length - 1 && (
                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#9CA3AF' }}>+</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Items selection checkboxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {fbtProducts.map((item) => {
                    const isChecked = selectedBundleItems.includes(item.id);
                    const isMain = item.id === product.id;
                    return (
                      <label 
                        key={item.id} 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          cursor: isMain ? 'default' : 'pointer',
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#0F172A'
                        }}
                      >
                        <input 
                          type="checkbox" 
                          checked={isChecked}
                          disabled={isMain}
                          onChange={() => handleToggleFbt(item.id)}
                          style={{
                            width: '16px',
                            height: '16px',
                            accentColor: '#2563EB'
                          }}
                        />
                        <span>
                          {isMain ? '✅ ' : ''}{item.title} (<span style={{ color: '#2563EB' }}>{formatPrice(item.price)}</span>)
                        </span>
                      </label>
                    );
                  })}
                </div>

                {/* Bundle pricing summary */}
                <div style={{ borderTop: '1px solid #FED7AA', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700' }}>
                    <span style={{ color: '#0F172A' }}>Bundle Price:</span>
                    <span style={{ color: '#2563EB' }}>{formatPrice(bundleTotal)}</span>
                  </div>
                  {bundleSavings > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#16A34A', fontWeight: '700' }}>
                      <span>You Save (Bundle Deal):</span>
                      <span>{formatPrice(bundleSavings)}</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={handleAddBundle}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '800',
                    marginTop: '12px',
                    backgroundColor: '#2563EB'
                  }}
                >
                  Add All To Cart
                </button>

              </div>
            )}

            {/* SECTION 14 — FAQ (PRODUCT SPECIFIC) */}
            {product.faqs && product.faqs.length > 0 && (
              <div style={{ padding: '16px', backgroundColor: 'white' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '4px', margin: 0 }}>
                  Frequently Asked Questions
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {product.faqs.map((faq, idx) => {
                    const isOpen = faqOpenIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        style={{ borderBottom: '1px solid #E5E7EB', padding: '12px 0' }}
                      >
                        <button
                          onClick={() => setFaqOpenIndex(isOpen ? -1 : idx)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'none',
                            border: 'none',
                            textAlign: 'left',
                            fontSize: '13px',
                            fontWeight: '800',
                            color: '#0F172A',
                            cursor: 'pointer',
                            padding: '4px 0'
                          }}
                        >
                          <span>{faq.question}</span>
                          <span style={{
                            color: '#2563EB',
                            fontSize: '10px',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                          }}>
                            ▼
                          </span>
                        </button>
                        
                        <div style={{
                          maxHeight: isOpen ? '150px' : '0px',
                          overflow: 'hidden',
                          transition: 'all 0.2s ease',
                          fontSize: '13px',
                          color: '#6B7280',
                          lineHeight: 1.6,
                          paddingTop: isOpen ? '8px' : '0px'
                        }}>
                          {faq.answer}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SECTION 15 — SHIPPING INFO (Expandable) */}
            <div style={{ padding: '16px', backgroundColor: '#F0F9FF', border: '1px solid #DBEAFE', borderRadius: '12px' }}>
              <button
                onClick={() => setShippingOpen(!shippingOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#1E40AF',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🚚</span> Shipping Information
                </span>
                <span>{shippingOpen ? '▲' : '▼'}</span>
              </button>

              <div style={{
                maxHeight: shippingOpen ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                fontSize: '12px',
                color: '#374151',
                lineHeight: 1.7,
                paddingTop: shippingOpen ? '8px' : '0px'
              }}>
                <p style={{ margin: 0 }}>• Standard Delivery: 2-5 business days across India.</p>
                <p style={{ margin: 0 }}>• Free shipping on orders above {formatPrice(999)}.</p>
                <p style={{ margin: 0 }}>• Tracking links sent via WhatsApp and SMS immediately after dispatch.</p>
                <p style={{ margin: 0 }}>• Delivered by BlueDart / DTDC / Delhivery logistics networks.</p>
              </div>
            </div>

            {/* SECTION 16 — RETURN POLICY (Expandable) */}
            <div style={{ padding: '16px', backgroundColor: '#F0F9FF', border: '1px solid #DBEAFE', borderRadius: '12px' }}>
              <button
                onClick={() => setReturnOpen(!returnOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#1E40AF',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>↩</span> Return Policy
                </span>
                <span>{returnOpen ? '▲' : '▼'}</span>
              </button>

              <div style={{
                maxHeight: returnOpen ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                fontSize: '12px',
                color: '#374151',
                lineHeight: 1.7,
                paddingTop: returnOpen ? '8px' : '0px'
              }}>
                <p style={{ margin: 0 }}>• 7-day hassle-free exchange or return policy.</p>
                <p style={{ margin: 0 }}>• Products must be in original, unused condition.</p>
                <p style={{ margin: 0 }}>• Initiate returns easily via our WhatsApp support or viralkartofficial@gmail.com.</p>
                <p style={{ margin: 0 }}>• Instant full refunds for broken/damaged items upon arrival.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 17 — RELATED PRODUCTS */}
      {relatedList.length > 0 && (
        <section style={{ backgroundColor: 'white', borderTop: '1px solid #E5E7EB', padding: '24px 0' }}>
          <div className="container">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '0 16px' }} className="title-bar-padding">
              <h2 className="related-section-title" style={{ color: 'var(--text-dark)', margin: 0, fontSize: '15px', fontWeight: '800' }}>
                You May Also Like
              </h2>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="related-link-font" style={{ fontSize: '11px', fontWeight: '700', color: '#2563EB' }}>
                View All
              </a>
            </div>

            <div className="scroll-row related-layout-row" style={{ padding: '0 16px' }}>
              {relatedList.map((p) => {
                const disc = Math.round(((p.comparePrice - p.price) / p.comparePrice) * 100);
                return (
                  <div 
                    key={p.id}
                    className="card related-product-card"
                    style={{
                      backgroundColor: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexShrink: 0,
                      overflow: 'hidden',
                      width: '150px'
                    }}
                    onClick={() => {
                      onNavigate('product', p.slug);
                      window.scrollTo(0, 0);
                    }}
                  >
                     <div style={{ height: '130px', overflow: 'hidden', backgroundColor: '#F8FAFC', padding: '8px' }}>
                       <img src={p.images[0]} alt={p.title} className="related-card-img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                     </div>
                    
                    <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
                      <h4 className="related-title-font" style={{ fontWeight: '700', color: '#0F172A', margin: 0, fontSize: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.2, height: '28px' }}>
                        {p.title}
                      </h4>
                      <div style={{ color: '#FFB800', fontSize: '11px' }}>★ {p.rating}</div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                        <span className="related-price-font" style={{ fontWeight: '800', color: '#0F172A', fontSize: '13px' }}>{formatPrice(p.price)}</span>
                        <span className="related-compare-font" style={{ color: '#9CA3AF', textDecoration: 'line-through', fontSize: '11px' }}>{formatPrice(p.comparePrice)}</span>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(p, 1);
                        }}
                        style={{
                          width: '100%',
                          height: '32px',
                          backgroundColor: '#2563EB',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: '800',
                          cursor: 'pointer',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        + Add
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* STICKY BOTTOM BUY BAR */}
      <div className="sticky-buy-bar prodpage-mobile-sticky-buy">
        
        {/* Price column stacked left */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>
            {formatPrice(product.price * quantity)}
          </span>
          <span style={{ fontSize: '11px', color: '#9CA3AF', textDecoration: 'line-through' }}>
            {formatPrice(product.comparePrice * quantity)}
          </span>
        </div>

        {/* Buttons right */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={handleAddCart}
            style={{
              height: '44px',
              backgroundColor: '#2563EB',
              color: 'white',
              fontSize: '12px',
              fontWeight: '800',
              padding: '0 16px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add
          </button>
          
          <button 
            onClick={handleBuyNow}
            disabled={isRedirecting}
            className="animate-wiggle"
            style={{
              height: '44px',
              backgroundColor: '#16A34A',
              color: 'white',
              fontSize: '12px',
              fontWeight: '800',
              padding: '0 16px',
              borderRadius: '10px',
              border: 'none',
              cursor: isRedirecting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(22, 163, 74, 0.2)',
              opacity: isRedirecting ? 0.75 : 1
            }}
          >
            {isRedirecting ? 'Redirecting...' : 'Buy Now (COD)'}
          </button>
        </div>

      </div>

      <style>{`
        /* Mobile Defaults (<1024px) */
        .breadcrumbs-align {
          padding: 0 16px;
        }
        .gallery-info-layout {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .prodpage-large-img-box {
          height: 320px !important;
        }
        .prodpage-video-play-btn {
          width: 50px !important;
          height: 50px !important;
        }
        .prodpage-thumbnail-box {
          width: 52px !important;
          height: 52px !important;
        }
        .prodpage-mobile-sticky-buy {
          display: flex !important;
        }
        .benefits-layout-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .ba-cards-row {
          flex-direction: row !important;
        }
        .ba-img-height {
          height: 120px !important;
        }
        .step-connector-line {
          display: block !important;
        }
        .description-features-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 10px !important;
        }
        .feature-icons-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        .reviews-chart-layout {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
        }
        .related-layout-row {
          display: flex !important;
          gap: 10px !important;
          padding: 4px 0 12px 0 !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory !important;
        }
        .related-product-card {
          width: 150px !important;
          scroll-snap-align: start !important;
        }

        /* Wiggle animations */
        @keyframes wigglePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .animate-wiggle {
          animation: wigglePulse 2s infinite ease-in-out;
        }

        /* Pulsing dot for stock */
        @keyframes pulseDot {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        .dot-pulse {
          animation: pulseDot 1.5s infinite ease-in-out;
        }

        /* Desktop Overrides (>=1024px) */
        @media (min-width: 1024px) {
          .prodpage-section {
            padding-bottom: 32px !important;
          }
          .breadcrumbs-align {
            padding: 0 !important;
          }
          .gallery-info-layout {
            display: grid !important;
            grid-template-columns: 1fr 1.05fr !important;
            gap: 40px !important;
          }
          .prodpage-left-block {
            display: flex !important;
            flex-direction: row !important;
            gap: 16px !important;
            position: sticky !important;
            top: 100px !important;
            height: fit-content !important;
          }
          .prodpage-thumbnails-row {
            order: 1 !important;
            flex-direction: column !important;
            overflow-x: visible !important;
            overflow-y: auto !important;
            max-height: 500px !important;
            justify-content: flex-start !important;
            gap: 12px !important;
            width: 70px !important;
            padding: 0 !important;
          }
          .prodpage-thumbnail-box {
            width: 65px !important;
            height: 65px !important;
            border-radius: 12px !important;
          }
          .prodpage-large-img-box {
            order: 2 !important;
            flex: 1 !important;
            height: 500px !important;
            border-radius: 20px !important;
          }
          .prodpage-video-play-btn {
            width: 56px !important;
            height: 56px !important;
          }
          .prodpage-dots-row {
            display: none !important;
          }
          .prodpage-title {
            font-size: 32px !important;
          }
          .prodpage-price-font {
            font-size: 28px !important;
          }
          .prodpage-compare-font {
            font-size: 16px !important;
          }
          .prodpage-mobile-sticky-buy {
            display: none !important;
          }
          .benefits-layout-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .ba-cards-row {
            flex-direction: row !important;
            gap: 20px !important;
          }
          .ba-img-height {
            height: 180px !important;
          }
          .steps-layout-row {
          flex-direction: row !important;
          gap: 20px !important;
        }
        .step-connector-line {
          display: none !important;
        }
        .description-features-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }
        .feature-icons-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
          .reviews-chart-layout {
            display: grid !important;
            grid-template-columns: 0.8fr 1.2fr !important;
            gap: 48px !important;
            padding: 32px !important;
            border-radius: 20px !important;
          }
          .reviews-overall-score {
            font-size: 44px !important;
          }
          .related-layout-row {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            gap: 16px !important;
            padding: 4px 0 12px 0 !important;
            overflow-x: visible !important;
          }
          .related-product-card {
            width: 100% !important;
            border-radius: 20px !important;
          }
          .related-card-img {
            height: 160px !important;
          }
          /* related products container overrides removed */
        }
      `}</style>

    </div>
  );
};

export default ProductPage;
