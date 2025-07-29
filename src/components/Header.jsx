import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems } from '../data/navigationData';

const Header = ({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <img src="/sobo-logo.jpeg" alt="SOBO Logo" className="h-15" />
          
          
            <div >
              <h1 className="text-xl font-bold text-gray-800">SOBO</h1>
              <p className="text-xs text-gray-500">University of Nairobi</p>
            </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-600">
                More
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navigationItems.slice(6).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-green-50 text-green-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;