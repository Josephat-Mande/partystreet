import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" placeholder="Your full name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="your.email@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="What is this about?" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Your message..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@sobo.uonbi.ac.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    School of Business<br />
                    University of Nairobi<br />
                    P.O. Box 30197<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Office Hours</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {['in', 'IG', 'X'].map((abbr, i) => (
                  <button key={i} className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                    <span className="text-sm font-bold">{abbr}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
