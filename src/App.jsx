import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ExploreCategories from './pages/ExploreCategories';

// File-based routes mapping
const routes = {
  '/': HomePage,
  '/explore-categories': ExploreCategories,
  '/services': ServicesPage,
  '/gallery': GalleryPage,
  '/about': AboutPage,
  '/faq': FAQPage,
  '/contact': ContactPage,
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Use file-based routing by matching the path to the routes object
  const CurrentPage = routes[currentPath] || HomePage;

  const navigation = [
    { name: 'Home', id: '/' },
    { name: 'Explore Categories', id: '/explore-categories' },
    { name: 'Services', id: '/services' },
    { name: 'Gallery', id: '/gallery' },
    { name: 'About', id: '/about' },
    { name: 'FAQ', id: '/faq' },
    { name: 'Contact', id: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        navigation={navigation}
        currentPage={currentPath}
        setCurrentPage={navigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <CurrentPage setCurrentPage={navigate} />
      <Footer navigation={navigation} setCurrentPage={navigate} />
    </div>
  );
};

export default App;