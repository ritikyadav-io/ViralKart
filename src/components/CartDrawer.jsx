import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { SHOPIFY_STORE_URL } from '../utils/shopify';

const CartDrawer = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartSavings,
    volumeSavings,
    cartCount,
    freeShippingProgress,
    remainingForFreeShipping,
    addToCart,
    setIsCheckoutOpen,
    products
  } = useContext(CartContext);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckoutClick = () => {
    if (cart.length === 0 || isRedirecting) return;
    
    // Filter out any mock products that don't have numeric Shopify Variant IDs
    const validItems = cart.filter(item => {
      const vId = item.variantId || item.id;
      return vId && /^\d+$/.test(String(vId));
    });

    if (validItems.length === 0) {
      alert('Your cart contains mock items. Please add real products from our collection to checkout.');
      return;
    }

    setIsRedirecting(true);
    const items = validItems.map(item => {
      const vId = item.variantId || item.id;
      return `${vId}:${item.quantity}`;
    }).join(',');
    
    window.location.href = `https://${SHOPIFY_STORE_URL}/cart/${items}`;
  };

  const cartIds = cart.map(item => item.id);
  const upsellCandidates = products.filter(p => !cartIds.includes(p.id)).slice(0, 3);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isCartOpen ? 'open' : ''}`} 
        onClick={handleClose}
      />

      {/* Cart Drawer Panel */}
      <div className={`drawer-right ${isCartOpen ? 'open' : ''}`}>
        
        {/* Header (Height: 52px) */}
        <div className="drawer-header" style={{ height: '52px' }}>
          <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Cart ({cartCount})</span>
          </span>
          <button 
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              padding: '4px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="drawer-content" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '16px' }}>
          
          {/* Free Shipping Progress Bar (8px height) */}
          <div style={{
            background: 'var(--bg)',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px dashed var(--accent)'
          }}>
            {remainingForFreeShipping > 0 ? (
              <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px' }}>
                Add <span style={{ color: 'var(--accent)', fontWeight: '800' }}>₹{remainingForFreeShipping}</span> more for <span style={{ color: 'var(--accent)', fontWeight: '800' }}>FREE shipping!</span>
              </p>
            ) : (
              <p style={{ fontSize: '11px', fontWeight: '800', color: 'var(--success)', marginBottom: '6px' }}>
                🎉 You qualify for FREE shipping!
              </p>
            )}
            <div style={{
              width: '100%',
              height: '8px', /* height: 8px */
              background: 'var(--border)',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${freeShippingProgress}%`,
                height: '100%',
                background: remainingForFreeShipping === 0 ? 'var(--success)' : 'var(--accent)',
                borderRadius: '10px',
                transition: 'width 0.2s ease'
              }} />
            </div>
          </div>

          {/* Cart Items List */}
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '36px' }}>🛒</div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)' }}>Cart is empty</h3>
              <button onClick={handleClose} className="btn btn-primary" style={{ padding: '0 16px', height: '38px', fontSize: '12px' }}>
                Shop Best Sellers
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cart.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    padding: '10px',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                  }}
                >
                  <img 
                    src={item.images ? item.images[0] : item.image} 
                    alt={item.title} 
                    style={{
                      width: '64px',
                      height: '64px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      flexShrink: 0,
                      padding: '4px'
                    }}
                  />

                  {/* Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                    <div>
                      {/* Title: 13px, 2 lines */}
                      <h4 style={{ 
                        fontSize: '13px', /* Title: 13px */
                        fontWeight: '700', 
                        color: 'var(--text-dark)', 
                        margin: 0, 
                        lineHeight: 1.25,
                        display: '-webkit-box',
                        WebkitLineClamp: 2, /* 2 lines */
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {item.title}
                      </h4>
                    </div>

                    {/* Quantity controls & Price */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
                      {/* Quantity controls: small (28px height) */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        height: '28px' /* 28px height */
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            padding: '0 8px',
                            border: 'none',
                            background: 'none',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            height: '100%'
                          }}
                        >-</button>
                        <span style={{ fontSize: '11px', fontWeight: '700', width: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            padding: '0 8px',
                            border: 'none',
                            background: 'none',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            height: '100%'
                          }}
                        >+</button>
                      </div>

                      {/* Price: 14px bold */}
                      <div style={{ textItems: 'right' }}>
                        <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)' }}>
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Remove: trash icon 16px */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      alignSelf: 'flex-start',
                      cursor: 'pointer',
                      color: 'var(--warning)',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Remove"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upsell section (Title: 13px bold, Cards: horizontal scroll 140px) */}
          {upsellCandidates.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Customers Also Bought
              </h3>
              
              {/* Cards: horizontal scroll, 140px each */}
              <div 
                className="scroll-row" 
                style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  padding: '4px 0 10px 0', 
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory'
                }}
              >
                {upsellCandidates.map((p) => {
                  return (
                    <div 
                      key={p.id}
                      style={{
                        width: '140px', /* Cards: horizontal scroll, 140px each */
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '6px',
                        flexShrink: 0,
                        scrollSnapAlign: 'start',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={p.images[0]} 
                        alt={p.title} 
                        style={{ width: '100%', height: '80px', objectFit: 'contain', borderRadius: '6px', backgroundColor: '#F8FAFC', padding: '4px' }} 
                      />
                      <div>
                        <h4 style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-dark)', margin: 0, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {p.title}
                        </h4>
                        <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px', display: 'block' }}>₹{p.price}</span>
                      </div>
                      <button 
                        onClick={() => addToCart(p, 1)}
                        style={{
                          backgroundColor: 'var(--bg)',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent)',
                          padding: '4px 0',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          width: '100%',
                          textAlign: 'center',
                          height: '26px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        + Add
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer-footer" style={{ padding: '12px 16px' }}>
            
            {/* Savings row: 12px green */}
            {cartSavings > 0 && (
              <div style={{
                color: 'var(--success)',
                fontSize: '12px', /* Savings row: 12px green */
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '10px'
              }}>
                🎉 You're saving ₹{cartSavings}!
              </div>
            )}

            {/* Subtotal row: 15px bold */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>Bag Subtotal</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>₹{cartSubtotal + volumeSavings}</span>
              </div>
              {volumeSavings > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--success)' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Quantity Discount</span>
                  <span style={{ fontSize: '13px', fontWeight: '700' }}>-₹{volumeSavings}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>Shipping Charges</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: remainingForFreeShipping === 0 ? 'var(--success)' : 'var(--text-dark)' }}>
                  {remainingForFreeShipping === 0 ? 'FREE' : '₹49'}
                </span>
              </div>
              <div style={{ height: '1px', background: 'var(--border)', margin: '2px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-dark)' }}>Total Pay</span>
                <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--accent)' }}>
                  ₹{cartSubtotal + (remainingForFreeShipping === 0 ? 0 : 49)}
                </span>
              </div>
            </div>

            {/* Checkout button: full width, 52px height, 15px font */}
            <button 
              onClick={handleCheckoutClick}
              disabled={isRedirecting}
              className="btn btn-primary btn-full"
              style={{
                height: '52px', /* height: 52px */
                fontSize: '15px', /* 15px font */
                fontWeight: '800',
                borderRadius: '8px',
                opacity: isRedirecting ? 0.75 : 1,
                cursor: isRedirecting ? 'not-allowed' : 'pointer'
              }}
            >
              {isRedirecting ? 'Redirecting to checkout...' : 'Secure Checkout (COD)'}
            </button>

            {/* Continue shopping: 13px link, center */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleClose(); }}
              style={{
                display: 'block',
                textAlign: 'center',
                fontSize: '13px', /* Continue shopping: 13px link */
                fontWeight: '700',
                color: 'var(--accent)',
                marginTop: '10px'
              }}
            >
              Continue Shopping
            </a>

            {/* Payment icons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '10px',
              fontSize: '11px',
              color: 'var(--text-light)',
              fontWeight: '700'
            }}>
              <span>💳 UPI / COD / Cards Accepted</span>
            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;
