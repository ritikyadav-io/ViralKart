import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './context/CartContext';
import { STORE_NAME } from './utils/shopify';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CategoryList from './components/CategoryList';
import BestSellers from './components/BestSellers';
import TrendingList from './components/TrendingList';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedSolution from './components/FeaturedSolution';
import RecentlyViewed from './components/RecentlyViewed';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import InfoPage from './components/InfoPage';
import MobileNavDrawer from './components/MobileNavDrawer';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import VerifiedSalesPopup from './components/VerifiedSalesPopup';

const getInfoPageTitle = (slug) => {
  const titles = {
    'about-us': 'ABOUT US',
    'contact-us': 'CONTACT US',
    'shipping-policy': 'SHIPPING POLICY',
    'return-policy': 'RETURN & REFUND POLICY',
    'track-order': 'TRACK YOUR ORDER',
    'support-center': 'SUPPORT CENTER',
    'blogs': 'OUR BLOGS & GUIDES',
    'why-uv-toothbrush-sanitizer-is-must': 'WHY UV TOOTHBRUSH SANITIZERS ARE A MUST-HAVE',
    '5-cleaning-hacks-using-spin-scrubber': '5 CLEANING HACKS TO SAVE HOURS',
    'how-to-prevent-kitchen-sink-clogging': 'HOW TO PREVENT KITCHEN SINK CLOGGING'
  };
  return titles[slug] || 'INFORMATION';
};

function App() {
  const { products } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeProductSlug, setActiveProductSlug] = useState('');
  const [activeInfoPage, setActiveInfoPage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (currentPage === 'home') {
      document.title = `${STORE_NAME} — Viral Products Store`;
    } else if (currentPage === 'product') {
      const prod = products.find(p => p.slug === activeProductSlug);
      if (prod) {
        document.title = `${prod.title} — Buy at ${STORE_NAME}`;
      } else {
        const formattedTitle = activeProductSlug
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        document.title = `${formattedTitle} — Buy at ${STORE_NAME}`;
      }
    } else if (currentPage === 'info') {
      document.title = `${getInfoPageTitle(activeInfoPage)} — ${STORE_NAME}`;
    }
  }, [currentPage, activeProductSlug, activeInfoPage, products]);

  useEffect(() => {
    const handleLocationChange = () => {
      let cleanPath = window.location.pathname;
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      const hash = window.location.hash;

      if (cleanPath.startsWith('/products/')) {
        const slug = cleanPath.replace('/products/', '');
        setActiveProductSlug(slug);
        setCurrentPage('product');
      } else if (cleanPath.startsWith('/pages/')) {
        const page = cleanPath.replace('/pages/', '');
        setActiveInfoPage(page);
        setCurrentPage('info');
      } else if (cleanPath.startsWith('/policies/')) {
        const page = cleanPath.replace('/policies/', '');
        setActiveInfoPage(page);
        setCurrentPage('info');
      } else if (cleanPath.startsWith('/collections/')) {
        const categorySlug = cleanPath.replace('/collections/', '');
        setActiveCategory(categorySlug);
        setCurrentPage('home');
        window.scrollTo(0, 0);
        setTimeout(() => {
          const el = document.getElementById('best-sellers');
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'auto' });
          }
        }, 100);
      } else if (hash.startsWith('#/product/')) {
        const slug = hash.replace('#/product/', '');
        setActiveProductSlug(slug);
        setCurrentPage('product');
      } else if (hash.startsWith('#/page/')) {
        const page = hash.replace('#/page/', '');
        setActiveInfoPage(page);
        setCurrentPage('info');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    handleLocationChange();
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page, slug = '') => {
    let targetPath = '/';
    const wasNotHome = currentPage !== 'home';

    if (page === 'product') {
      targetPath = `/products/${slug}`;
      setActiveProductSlug(slug);
      setCurrentPage('product');
      window.scrollTo(0, 0);
    } else if (page === 'info') {
      targetPath = `/pages/${slug}`;
      setActiveInfoPage(slug);
      setCurrentPage('info');
      window.scrollTo(0, 0);
    } else {
      if (slug) {
        targetPath = `/collections/${slug}`;
        setActiveCategory(slug);
        
        if (wasNotHome) {
          window.scrollTo(0, 0);
          setTimeout(() => {
            const el = document.getElementById('best-sellers');
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: 'auto' });
            }
          }, 60);
        } else {
          setTimeout(() => {
            const el = document.getElementById('best-sellers');
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 120);
        }
      } else {
        targetPath = '/';
        setActiveCategory(null);
        window.scrollTo(0, 0);
      }
      setCurrentPage('home');
    }
    window.history.pushState({}, '', targetPath);
  };

  const handleSelectCategory = (categorySlug) => {
    setActiveCategory(categorySlug);
    if (categorySlug) {
      setTimeout(() => {
        const el = document.getElementById('best-sellers');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 120);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AnnouncementBar />
      <Header 
        currentPage={currentPage}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onNavigate={handleNavigate} 
      />

      <main style={{ flex: 1 }} key={currentPage} className="page-fade-in">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <TrustBar />
            <CategoryList 
              activeCategory={activeCategory} 
              onSelectCategory={handleSelectCategory} 
            />
            <BestSellers 
              searchQuery={searchQuery} 
              activeCategory={activeCategory} 
              onNavigate={handleNavigate}
            />
            <TrendingList onNavigate={handleNavigate} />
            <WhyChooseUs onNavigate={handleNavigate} />
            <FeaturedSolution onNavigate={handleNavigate} />
            <RecentlyViewed onNavigate={handleNavigate} />
            <FAQAccordion />
            <VerifiedSalesPopup />
          </>
        ) : currentPage === 'product' ? (
          <>
            <ProductPage 
              productSlug={activeProductSlug} 
              onNavigate={handleNavigate} 
            />
          </>
        ) : currentPage === 'info' ? (
          <>
            <InfoPage 
              pageSlug={activeInfoPage}
              onNavigate={handleNavigate}
            />
          </>
        ) : null}
      </main>

      <Footer onNavigate={handleNavigate} />

      <MobileNavDrawer 
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
