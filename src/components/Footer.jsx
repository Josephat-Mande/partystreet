import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ navigation, setCurrentPage }) => (
  <footer className="bg-gray-900 text-white py-16 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div> */}
            <span className="text-xl font-bold ">Party street Kenya</span>
          </div>
          <p className="text-gray-400 ">
            Creating magical moments and unforgettable experiences through exceptional event planning and decoration services.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 font-merienda">Services</h3>
          <ul className="space-y-2 text-gray-400 font-poiret">
            <li>Wedding Planning</li>
            <li>Birthday Parties</li>
            <li>Corporate Events</li>
            <li>Event Decoration</li>
            <li>Venue Setup</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 font-merienda">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 font-poiret">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className="hover:text-pink-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 font-merienda">Contact Info</h3>
          <div className="space-y-2 text-gray-400 font-poiret">
            <p>+254 745 707 463</p>
            <p>info@partystreetkenya.com</p>
            <p>Ngummo -Newa, Nairobi, Kenya</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/partystreet_ke" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/partystreetke" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/partystreetke" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Codemon Creatives. All rights reserved. </p>
      </div>
    </div>
  </footer>
);

export default Footer;