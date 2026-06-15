import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutModal = ({ onNavigate }) => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartSubtotal, 
    remainingForFreeShipping, 
    clearCart,
    cartSavings
  } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    paymentMethod: 'cod' // default to high converting COD
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingCost = remainingForFreeShipping === 0 ? 0 : 49;
  const paymentDiscount = formData.paymentMethod === 'online' ? Math.round(cartSubtotal * 0.10) : 0;
  const finalTotal = cartSubtotal + shippingCost - paymentDiscount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.name || !formData.phone || !formData.pincode || !formData.address) {
      alert('Please fill in all details to place your order.');
      return;
    }

    if (formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      setOrderId('HK-' + Math.floor(100000 + Math.random() * 900000));
    }, 1200);
  };

  const handleSuccessClose = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setOrderPlaced(false);
    onNavigate('home');
    setFormData({ name: '', phone: '', pincode: '', address: '', city: '', paymentMethod: 'cod' });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 1100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      
      <div style={{
        background: 'white',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        border: '1px solid var(--border)'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          background: 'white',
          zIndex: 10
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>
            {orderPlaced ? 'Order Confirmed! 🎉' : 'Delivery Details'}
          </h2>
          {!orderPlaced && (
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Body content */}
        <div style={{ padding: '24px' }}>
          
          {orderPlaced ? (
            /* Success State */
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                color: 'var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                ✓
              </div>
              
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>
                Thank you, {formData.name}!
              </h3>
              
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                Your order has been placed successfully and is ready to ship.
              </p>

              <div style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '16px',
                width: '100%',
                textAlign: 'left',
                margin: '12px 0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Order ID:</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: '800' }}>{orderId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Phone:</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: '700' }}>{formData.phone}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Shipping Address:</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: '700', textAlign: 'right', maxWidth: '200px' }}>{formData.address}, Pin - {formData.pincode}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '8px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-dark)', fontWeight: '800' }}>Total Amount:</span>
                  <span style={{ color: 'var(--accent)', fontWeight: '800' }}>₹{finalTotal}</span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(37, 99, 235, 0.05)',
                padding: '12px 16px',
                borderRadius: '12px',
                width: '100%',
                textAlign: 'left'
              }}>
                <span style={{ fontSize: '20px' }}>💬</span>
                <span style={{ fontSize: '12px', color: 'var(--text-main)', fontWeight: '600' }}>
                  We have sent order updates and a tracking link to your WhatsApp number.
                </span>
              </div>

              <button 
                onClick={handleSuccessClose}
                className="btn btn-primary btn-full"
                style={{ padding: '14px 20px', marginTop: '16px' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Checkout Form State */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Order summary summary box */}
              <div style={{
                background: 'var(--bg)',
                borderRadius: '16px',
                padding: '14px 16px',
                border: '1px solid var(--border)',
                marginBottom: '4px'
              }}>
                <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Order Summary
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-main)' }}>
                      <span style={{ fontWeight: '600' }}>{item.title} (x{item.quantity})</span>
                      <span style={{ fontWeight: '700' }}>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div style={{ height: '1px', background: 'var(--border)', margin: '6px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>Shipping Charges</span>
                    <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                  </div>
                  {paymentDiscount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--success)', fontWeight: '600' }}>
                      <span>Online UPI Discount (10% OFF)</span>
                      <span>-₹{paymentDiscount}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)' }}>
                    <span>Total Amount Payable</span>
                    <span style={{ color: 'var(--accent)' }}>₹{finalTotal}</span>
                  </div>
                </div>
              </div>

              {/* Input Form Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Full name */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your first and last name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-family)'
                    }}
                  />
                </div>

                {/* Mobile phone number */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Mobile Number (For WhatsApp Updates) *
                  </label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{
                      position: 'absolute',
                      left: '12px',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: 'var(--text-muted)'
                    }}>+91</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10 digit mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 48px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '14px',
                        outline: 'none',
                        fontFamily: 'var(--font-family)',
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}
                    />
                  </div>
                </div>

                {/* Dual fields: Pincode and City */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      maxLength="6"
                      placeholder="6-digit Pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '14px',
                        outline: 'none',
                        fontFamily: 'var(--font-family)',
                        fontWeight: '600'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                      City / State *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Mumbai, Maharashtra"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '14px',
                        outline: 'none',
                        fontFamily: 'var(--font-family)'
                      }}
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Full Delivery Address (House/Flat, Street) *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    placeholder="Enter house details, street name, landmarks"
                    value={formData.address}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-family)',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Payment Option - conversion focused COD layout */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Payment Method
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: formData.paymentMethod === 'cod' ? '2px solid var(--success)' : '1px solid var(--border)',
                      backgroundColor: formData.paymentMethod === 'cod' ? 'rgba(22, 163, 74, 0.03)' : 'white',
                      cursor: 'pointer'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleInputChange}
                          style={{ accentColor: 'var(--success)', width: '16px', height: '16px' }}
                        />
                        <div>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>💰 Cash on Delivery (COD)</span>
                          <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Pay cash when your order reaches your home</p>
                        </div>
                      </div>
                      <span style={{ fontSize: '10px', backgroundColor: 'var(--success)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontWeight: '800' }}>POPULAR</span>
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: formData.paymentMethod === 'online' ? '2px solid var(--accent)' : '1px solid var(--border)',
                      backgroundColor: formData.paymentMethod === 'online' ? 'rgba(37, 99, 235, 0.03)' : 'white',
                      cursor: 'pointer'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleInputChange}
                          style={{ accentColor: 'var(--accent)', width: '16px', height: '16px' }}
                        />
                        <div>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>💳 UPI / Debit / Credit Cards</span>
                          <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Pay safely online via UPI or Cards</p>
                        </div>
                      </div>
                    </label>

                  </div>
                </div>

              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-success btn-full"
                style={{
                  fontSize: '16px',
                  padding: '14px 20px',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
                  marginTop: '8px',
                  backgroundColor: isSubmitting ? 'var(--text-light)' : 'var(--success)'
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle>
                      <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Processing order...
                  </span>
                ) : (
                  `Place Order (Pay ₹${finalTotal})`
                )}
              </button>

              {/* Footer text */}
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                🔒 Your details are protected by 256-bit secure SSL encryption.
              </p>

            </form>
          )}

        </div>

      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CheckoutModal;
