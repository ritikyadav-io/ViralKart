import React, { createContext, useState, useEffect } from 'react';
import { categories as mockCategories } from '../data/products';
import { fetchShopifyData } from '../utils/shopify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState(mockCategories);
  const [trendingProductsList, setTrendingProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('hk_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('hk_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('hk_recently_viewed');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('hk_cart', JSON.stringify(cart));
  }, [cart]);

  // Load Shopify catalog on mount
  useEffect(() => {
    let active = true;
    async function loadShopify() {
      setIsLoading(true);
      const result = await fetchShopifyData();
      if (active) {
        if (result && result.products && result.products.length > 0) {
          setProductsList(result.products);
          const derivedTrending = result.products.slice(0, 6).map(p => ({
            id: p.id,
            variantId: p.variantId,
            name: p.title,
            image: p.images[0],
            images: p.images,
            price: p.price,
            comparePrice: p.comparePrice,
            slug: p.slug,
            rating: p.rating
          }));
          setTrendingProductsList(derivedTrending);
        }
        if (result && result.collections && result.collections.length > 0) {
          const hasBestSellers = result.collections.some(c => c.slug === 'best-sellers');
          const finalCollections = hasBestSellers 
            ? result.collections 
            : [...result.collections, { id: 'best-sellers', name: 'Best Sellers', icon: '⭐', slug: 'best-sellers', image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=500&auto=format&fit=crop&q=80' }];
          setCategoriesList(finalCollections);
        }
        setIsLoading(false);
      }
    }
    loadShopify();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    localStorage.setItem('hk_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('hk_recently_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    // Rule: "Add to Cart must trigger cart drawer to open"
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      }
      return [...prevWishlist, productId];
    });
  };

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed((prevList) => {
      const filtered = prevList.filter((item) => item.id !== product.id);
      return [product, ...filtered].slice(0, 6); // Keep last 6 items
    });
  };

  // Calculate volume discounts (Buy 2 Save 15%, Buy 3+ Save 25%)
  const volumeSavings = cart.reduce((total, item) => {
    let effectivePrice = item.price;
    if (item.quantity === 2) {
      effectivePrice = Math.round(item.price * 0.85);
    } else if (item.quantity >= 3) {
      effectivePrice = Math.round(item.price * 0.75);
    }
    return total + (item.price - effectivePrice) * item.quantity;
  }, 0);

  const cartSubtotal = cart.reduce((total, item) => {
    let effectivePrice = item.price;
    if (item.quantity === 2) {
      effectivePrice = Math.round(item.price * 0.85);
    } else if (item.quantity >= 3) {
      effectivePrice = Math.round(item.price * 0.75);
    }
    return total + effectivePrice * item.quantity;
  }, 0);

  const cartSavings = cart.reduce((total, item) => {
    let effectivePrice = item.price;
    if (item.quantity === 2) {
      effectivePrice = Math.round(item.price * 0.85);
    } else if (item.quantity >= 3) {
      effectivePrice = Math.round(item.price * 0.75);
    }
    const baseSavings = (item.comparePrice - item.price) * item.quantity;
    const volumeBonus = (item.price - effectivePrice) * item.quantity;
    return total + baseSavings + volumeBonus;
  }, 0);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Free shipping progress bar calculations (Threshold: ₹999)
  const freeShippingThreshold = 999;
  const freeShippingProgress = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - cartSubtotal, 0);

  return (
    <CartContext.Provider
      value={{
        products: productsList,
        categories: categoriesList,
        trendingProducts: trendingProductsList,
        isLoading,
        cart,
        wishlist,
        recentlyViewed,
        isCartOpen,
        isMobileMenuOpen,
        isCheckoutOpen,
        setIsCartOpen,
        setIsMobileMenuOpen,
        setIsCheckoutOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        addToRecentlyViewed,
        cartSubtotal,
        cartSavings,
        volumeSavings,
        cartCount,
        freeShippingThreshold,
        freeShippingProgress,
        remainingForFreeShipping
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
