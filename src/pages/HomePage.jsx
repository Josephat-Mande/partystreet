import React from 'react';
import { Heart, Gift, Users, Star } from 'lucide-react';
import './fonts.css';

const HomePage = ({ setCurrentPage }) => (
  <div className="pt-20 font-fancy">
    {/* Hero Section */}
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      data-aos="fade-up"
    >
      {/* Blurred image background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/balloons.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.7)',
          zIndex: 0,
        }}
      ></div>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-yellow-900/30 z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight  text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Make Every
              </span>
              <br />
              <span className="text-yellow-100  drop-shadow-lg">Moment</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-fancy-title">
                Magical
              </span>
            </h1>
            <p className="text-xl text-white leading-relaxed font-fancy-main drop-shadow ">
              Transform your special occasions into unforgettable experiences with our premium event planning and decoration services in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-merienda">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse font-fancy-main"
              >
                Plan Your Event
              </button>
              <button
                onClick={() => setCurrentPage('explore-categories')}
                className="px-8 py-4 border-2 border-pink-500 text-pink-100 rounded-full font-semibold hover:bg-pink-500/20 transition-all duration-300 font-fancy-main"
              >
                Explore Categories
              </button>
            </div>
          </div>
          <div className="relative font-merienda">
            <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Heart className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
                <p className="text-2xl font-bold text-gray-800 font-fancy-title">Your Dream Event</p>
                <p className="text-gray-600 font-fancy-main">Awaits Beautiful Decoration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-white " data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-fancy-title">Our Services</h2>
          <p className="text-xl text-gray-600 font-fancy-main">Everything you need for the perfect celebration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: 'Weddings', color: 'from-pink-500 to-rose-500', desc: 'Romantic & elegant wedding decorations' },
            { icon: Gift, title: 'Birthdays', color: 'from-purple-500 to-indigo-500', desc: 'Fun & colorful birthday celebrations' },
            { icon: Users, title: 'Corporate Events', color: 'from-blue-500 to-cyan-500', desc: 'Professional & sophisticated gatherings' }
          ].map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 font-fancy-main">
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-fancy-title">{service.title}</h3>
                <p className="text-gray-600 font-fancy-main">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 ">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Liz + Carlton', event: 'Wedding', rating: 5, text: 'Thank you soo much hunny!You did he thing ! I loved it and so did everyone! Well done ' },
            { name: 'Diana Bahati', event: 'Birthday Party', rating: 5, text: 'The team was professional and creative. Highly recommended!' },
            { name: 'Phanice', event: 'Baby shower', rating: 5, text: 'Proffesionalism, Quality, Responsiveness, Value ,Amazing Job for my babay shower balloons. The work you did was beautiful and you were extremely easy to work with. Highly recommend.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg font-fancy-main">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 font-poiret">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;