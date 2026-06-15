import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { STORE_NAME } from '../utils/shopify';


const Header = ({ currentPage = 'home', searchQuery, setSearchQuery, onNavigate }) => {
  const { cartCount = 0, setIsCartOpen = () => {}, setIsMobileMenuOpen = () => {}, categories = [], products = [] } = useContext(CartContext) || {};
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  React.useEffect(() => {
    setIsSearchOpen(false);
  }, [currentPage]);

  const handleLogoClick = () => {
    onNavigate('home');
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handleCategoryClick = (e, slug) => {
    e.preventDefault();
    onNavigate('home', slug);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      onNavigate('home');
      e.target.blur();
      setTimeout(() => {
        const el = document.getElementById('best-sellers');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const SearchSuggestions = ({ query, setQuery, onSelect }) => {
    if (!query || query.trim() === '') return null;
    
    const filtered = products.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    if (filtered.length === 0) {
      return (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
          padding: '12px',
          textAlign: 'center',
          color: '#64748B',
          fontSize: '12px',
          zIndex: 2000,
          marginTop: '4px'
        }}>
          No products found for "{query}"
        </div>
      );
    }

    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        zIndex: 2000,
        marginTop: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {filtered.map(p => (
          <div
            key={p.id}
            onClick={() => {
              onSelect(p.slug);
              setQuery('');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 12px',
              borderBottom: '1px solid #F1F5F9',
              cursor: 'pointer',
              transition: 'background-color 0.15s'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F8FAFC'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            <img 
              src={p.images[0]} 
              alt={p.title} 
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                borderRadius: '6px',
                backgroundColor: '#F8FAFC',
                padding: '2px',
                flexShrink: 0
              }}
            />
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
              <div style={{ 
                fontSize: '12px', 
                fontWeight: '700', 
                color: '#0F172A',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {p.title}
              </div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#2563EB', marginTop: '1px' }}>
                ₹{p.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <header className="header-sticky">
        <div className="container" style={{ height: '100%' }}>
          
          {/* MOBILE HEADER (Under 1024px width) */}
          <div className="mobile-header-bar" style={{ display: 'none', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%', position: 'relative' }}>
            {currentPage !== 'home' ? (
              <>
                {/* Back Button (Left) */}
                <button 
                  onClick={() => {
                    if (window.history.length > 1) {
                      window.history.back();
                    } else {
                      onNavigate('home');
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    transition: 'background-color 0.15s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F1F5F9'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  title="Go back"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>

                {/* Amazon-style Search Bar or Brand Name (Middle) */}
                {currentPage === 'info' ? (
                  <div style={{ flex: 1, textAlign: 'center', fontWeight: '800', fontSize: '16px', color: '#0F172A', cursor: 'pointer' }} onClick={handleLogoClick}>
                    {STORE_NAME}
                  </div>
                ) : (
                  <div style={{ flex: 1, position: 'relative', margin: '0 4px', display: 'flex', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder={`Search ${STORE_NAME}...`}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      onKeyDown={handleSearchKeyDown}
                      style={{
                        width: '100%',
                        padding: '8px 12px 8px 32px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '13px',
                        outline: 'none',
                        backgroundColor: 'var(--bg)',
                        fontFamily: 'var(--font-family)',
                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
                      }}
                    />
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}>
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'var(--text-muted)' }}
                      >
                        ✕
                      </button>
                    )}
                    <SearchSuggestions 
                      query={searchQuery}
                      setQuery={setSearchQuery}
                      onSelect={(slug) => onNavigate('product', slug)}
                    />
                  </div>
                )}

                {/* Cart Icon (Right) */}
                <button 
                  onClick={() => setIsCartOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px'
                  }}
                  title="Open Cart"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {cartCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '0px',
                      right: '0px',
                      background: 'var(--accent)',
                      color: 'white',
                      fontSize: '9px',
                      fontWeight: '800',
                      borderRadius: '50%',
                      width: '15px',
                      height: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid white'
                    }}>
                      {cartCount}
                    </span>
                  )}
                </button>
              </>
            ) : isSearchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '8px', padding: '0 4px', position: 'relative' }}>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-dark)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder={`Search ${STORE_NAME}...`}
                  value={searchQuery}
                  autoFocus
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontSize: '13px',
                    outline: 'none',
                    backgroundColor: 'var(--bg)',
                    fontFamily: 'var(--font-family)'
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', color: 'var(--text-muted)' }}
                  >
                    ✕
                  </button>
                )}
                <SearchSuggestions 
                  query={searchQuery}
                  setQuery={setSearchQuery}
                  onSelect={(slug) => {
                    onNavigate('product', slug);
                    setIsSearchOpen(false);
                  }}
                />
              </div>
            ) : (
              <>
                {/* Hamburger icon (24px size) */}
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                </button>

                {/* Logo Center */}
                <div 
                  onClick={handleLogoClick} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <span style={{ fontSize: '17px', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.3px', lineHeight: 1 }}>
                    {STORE_NAME}
                  </span>
                </div>

                {/* Search/Cart Right */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {currentPage !== 'info' && (
                    <button 
                      onClick={() => setIsSearchOpen(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  )}

                  <button 
                    onClick={() => setIsCartOpen(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {cartCount > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-4px',
                        background: 'var(--accent)',
                        color: 'white',
                        fontSize: '9px',
                        fontWeight: '800',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid white'
                      }}>
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>          {/* DESKTOP HEADER (1024px and wider) */}
          <div className="desktop-header-bar" style={{ display: 'none', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%', gap: '24px', position: 'relative' }}>
            
            {currentPage !== 'home' ? (
              <>
                {/* Left side: Back Button + Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  <button 
                    onClick={() => {
                      if (window.history.length > 1) {
                        window.history.back();
                      } else {
                        onNavigate('home');
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0F172A',
                      borderRadius: '50%',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F1F5F9'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    title="Go back"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <span onClick={handleLogoClick} style={{ fontSize: '21px', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.3px', lineHeight: 1, cursor: 'pointer' }}>
                    {STORE_NAME}
                  </span>
                </div>

                {/* Middle: Search bar like Amazon page */}
                {currentPage !== 'info' && (
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '380px',
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 5
                  }}>
                    <input
                      type="text"
                      placeholder={`Search ${STORE_NAME}...`}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      onKeyDown={handleSearchKeyDown}
                      style={{
                        width: '100%',
                        padding: '8px 12px 8px 32px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '13px',
                        outline: 'none',
                        backgroundColor: 'var(--bg)',
                        fontFamily: 'var(--font-family)',
                      }}
                    />
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}>
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'var(--text-muted)' }}
                      >
                        ✕
                      </button>
                    )}
                    <SearchSuggestions 
                      query={searchQuery}
                      setQuery={setSearchQuery}
                      onSelect={(slug) => onNavigate('product', slug)}
                    />
                  </div>
                )}

                {/* Right side: Cart Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, zIndex: 10 }}>
                  <button 
                    onClick={() => setIsCartOpen(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}
                    title="Open Cart"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {cartCount > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-4px',
                        background: 'var(--accent)',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: '800',
                        borderRadius: '50%',
                        width: '18px',
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid white'
                      }}>
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Left: Brand Logo in left corner */}
                <div 
                  onClick={handleLogoClick} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  <span style={{ fontSize: '21px', fontWeight: '800', color: '#0F172A', letterSpacing: '-0.3px', lineHeight: 1 }}>
                    {STORE_NAME}
                  </span>
                </div>

                {/* Center: Sitemap links centered in middle */}
                <nav style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  fontWeight: '700', 
                  fontSize: '14px', 
                  color: 'var(--text-main)',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 5
                }}>
                  <a href="#" onClick={handleLogoClick}>Home</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'viral')}>Viral</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'bathroom-essentials')}>Bathroom</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'cleaning-solutions')}>Cleaning</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'repair-utility')}>Repair</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'best-sellers')}>Bestseller</a>
                </nav>

                {/* Right: Search Toggle & Cart Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, zIndex: 10 }}>
                  {isSearchOpen ? (
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        autoFocus
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                        onKeyDown={handleSearchKeyDown}
                        style={{
                          width: '200px',
                          padding: '8px 12px 8px 32px',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          fontSize: '13px',
                          outline: 'none',
                          backgroundColor: 'var(--bg)',
                          fontFamily: 'var(--font-family)',
                        }}
                      />
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <button 
                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--text-muted)',
                          fontSize: '14px',
                          marginLeft: '6px'
                        }}
                      >
                        ✕
                      </button>
                      <SearchSuggestions 
                        query={searchQuery}
                        setQuery={setSearchQuery}
                        onSelect={(slug) => {
                          onNavigate('product', slug);
                          setIsSearchOpen(false);
                        }}
                      />
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsSearchOpen(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)'
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  )}

                  <button 
                    onClick={() => setIsCartOpen(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {cartCount > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-4px',
                        background: 'var(--accent)',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: '800',
                        borderRadius: '50%',
                        width: '18px',
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid white'
                      }}>
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </header>

      <style>{`
        .mobile-header-bar {
          display: flex !important;
        }
        .desktop-header-bar {
          display: none !important;
        }
        @media (min-width: 1024px) {
          .mobile-header-bar {
            display: none !important;
          }
          .desktop-header-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
