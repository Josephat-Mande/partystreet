import React from 'react';
import { Menu, X } from 'lucide-react';
import '../pages/fonts.css';

const Header = ({ navigation, currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-merienda">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-2xl font-bold bg-black bg-clip-text text-transparent">
            Partystreet Kenya
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  </header>
);

export default Header;