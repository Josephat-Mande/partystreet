import React from 'react';
import { FaPhoneAlt, FaInstagram, FaWhatsapp, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <img src="/sobo-logo.jpeg" alt="SOBO Logo" className="h-15 rounded-full" />

              </div>
              <div>
                <h3 className="text-xl font-bold">SOBO</h3>
                <p className="text-sm text-white">University of Nairobi</p>
              </div>
            </div>
            <p className="text-white text-sm">
              Lower Kabete Campus
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveSection('about')} className="text-black hover:text-white">About SOBO</button></li>
              <li><button onClick={() => setActiveSection('news')} className="text-black hover:text-white">News & Updates</button></li>
              <li><button onClick={() => setActiveSection('calendar')} className="text-black hover:text-white">Event Calendar</button></li>
              <li><button onClick={() => setActiveSection('resources')} className="text-black hover:text-white">Resources</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Student Services</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveSection('voice')} className="text-black hover:text-white">Student Voice</button></li>
              <li><button onClick={() => setActiveSection('alumni')} className="text-black hover:text-white">Alumni Network</button></li>
              <li><button onClick={() => setActiveSection('affiliated')} className="text-black hover:text-white">Student Organizations</button></li>
              <li><button onClick={() => setActiveSection('faq')} className="text-black hover:text-white">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-black">
              <p>School of Business</p>
              <p>University of Nairobi</p>
              <p>P.O. Box 30197</p>
              <p>Nairobi, Kenya</p>
              
            </div>
          </div>
        </div>

        {/* Social/Contact Icons Row */}
              <div className="flex justify-center space-x-6 mt-10 text-[#e7ffd9]/80 text-xl">
                <a href="tel:+254115911220" className="hover:text-white" aria-label="Phone"><FaPhoneAlt /></a>
                <a href="https://wa.me/254115911220" className="hover:text-white" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="mailto:sobo@students.ac.ke" className="hover:text-white" aria-label="Email"><FaEnvelope /></a>
                <a href="https://www.instagram.com/sobo_uon" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.x.com/sobo_uon" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/nuzihi-organization" className="hover:text-white" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-[#e7ffd9]/80">
          <p>&copy; 2025 School of Business  Organisation (SOBO), University of Nairobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;