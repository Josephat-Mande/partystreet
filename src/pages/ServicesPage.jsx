import React from 'react';
import { Heart, Gift, Users, Calendar, ChevronRight } from 'lucide-react';
import './fonts.css';

const ServicesPage = () => (
  <div className="pt-32 pb-20" data-aos="fade-up ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 ">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From intimate gatherings to grand celebrations, we bring your vision to life with our comprehensive event planning and decoration services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {[
          {
            title: 'Wedding Planning & Decoration',
            icon: Heart,
            color: 'from-pink-500 to-rose-500',
            services: ['Bridal decoration', 'Ceremony setup', 'Reception styling', 'Floral arrangements', 'Lighting design', 'Photography setup']
          },
          {
            title: 'Birthday Parties',
            icon: Gift,
            color: 'from-purple-500 to-indigo-500',
            services: ['Theme decoration', 'Balloon arrangements', 'Cake table setup', 'Photo booth creation', 'Entertainment area', 'Party favors']
          },
          {
            title: 'Corporate Events',
            icon: Users,
            color: 'from-blue-500 to-cyan-500',
            services: ['Conference setup', 'Branding & signage', 'Networking areas', 'Presentation equipment', 'Catering coordination', 'Professional photography']
          },
          {
            title: 'Special Occasions',
            icon: Calendar,
            color: 'from-green-500 to-emerald-500',
            services: ['Anniversary celebrations', 'Graduation parties', 'Baby showers', 'Holiday events', 'Cultural celebrations', 'Custom themes']
          }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
              <service.icon className="w-16 h-16 text-white" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{service.title}</h3>
              <div className="space-y-3">
                {service.services.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Provide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'Tents & Canopies', image: '/tents-canopies.png' },
            { name: 'Tables & Chairs', image: '/table-chairs.png' },
            { name: 'Linens & Draping', image: '/linens.png' },
            { name: 'Floral Arrangements', image: '/floral.png' },
            { name: 'Balloons', image: '/balloons.png' },
            { name: 'Bouncing Castles', image: '/bouncing.png' },
            { name: 'Photography Props', image: '/photography.png' },
            { name: 'Catering Setup', image: '/catering.png' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-white shadow">
                <img src={item.image} alt={item.name} className="w-18 h-18 object-contain" />
              </div>
              <p className="text-gray-700 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ServicesPage;