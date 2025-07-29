// Main App Component
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import CalendarPage from './pages/CalendarPage';
import ResourcesPage from './pages/ResourcesPage';
 import StudentVoicePage from './pages/StudentVoice';
import AlumniPage from './pages/AlumniPage';
import Shop from './pages/Shop';
import PublicationsPage from './pages/PublicationsPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import AffiliatedOrgsPage from './pages/AffiliatedOrgsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { navigationItems } from './data/navigationData';
import AcademicResources from './pages/AcademicResources';

const SoboWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <HomePage setActiveSection={setActiveSection} />;
      case 'about': return <AboutPage />;
      case 'news': return <NewsPage />;
      case 'calendar': return <CalendarPage />;
      case 'resources': return <ResourcesPage />;
      case 'academics': return <AcademicResources />;
      case 'voice': return <StudentVoicePage />;
      case 'alumni': return <AlumniPage />;
      case 'shop': return <Shop />;
      case 'publications': return <PublicationsPage />;
      case 'gallery': return <GalleryPage />;
      case 'faq': return <FAQPage />;
      case 'contact': return <ContactPage />;
      case 'affiliated': return <AffiliatedOrgsPage />;
      default: return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>

    {/* <Router>
      <Routes>
        <Route path="/" element={<HomePage setActiveSection={setActiveSection} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/academics" element={<AcademicResources />} />
        <Route path="/voice" element={<StudentVoicePage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/affiliated" element={<AffiliatedOrgsPage />} />
      </Routes>
    </Router> */}
  </>
  );
};

export default SoboWebsite;
