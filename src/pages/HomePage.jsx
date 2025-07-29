import React, { useEffect } from 'react';
import { BookOpen, MessageSquare, Calendar, Award, ChevronRight } from 'lucide-react';
import { newsItems } from '../data/SampleData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './fonts.css';

const HomePage = ({ setActiveSection }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="space-y-8 font-fancy">
      {/* Hero Section with Video Background */}
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm rounded-sm"
          src="/video/sobo.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute inset-0 bg-opacity-50 flex items-center p-8 md:p-12">
          <div className="max-w-4xl text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Karibu SOBO</h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Your gateway to academic excellence and professional growth at the University of Nairobi School of Business
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveSection('news')}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Latest News
              </button>
              <button 
                onClick={() => setActiveSection('calendar')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
        {[{
          title: 'Academic Resources', icon: BookOpen, section: 'academics', desc: 'Course materials and study tools'
        }, {
          title: 'Student Voice', icon: MessageSquare, section: 'voice', desc: 'Share feedback and suggestions'
        }, {
          title: 'Event Calendar', icon: Calendar, section: 'calendar', desc: 'Stay updated with events'
        }, {
          title: 'Alumni Network', icon: Award, section: 'alumni', desc: 'Connect with successful graduates'
        }].map((item, index) => (
          <div 
            key={index}
            onClick={() => setActiveSection(item.section)}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <item.icon className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Latest News Preview */}
      <div className="bg-white rounded-lg p-6 border border-gray-200" data-aos="fade-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
          <button 
            onClick={() => setActiveSection('news')}
            className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {newsItems.slice(0, 3).map(item => (
            <div key={item.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {item.urgent && (
                <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                  URGENT
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.content}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
