import React from 'react';

const GalleryPage = ({ setCurrentPage }) => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Gallery</h1>
        <p className="text-xl text-gray-600">Explore our beautiful creations and get inspired for your next event</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { category: 'Wedding', image: '/wedding.png' },
          { category: 'Birthday', image: '/birthday.png' },
          { category: 'Corporate', image: '/corporate.png' },
          { category: 'Wedding', image: '/wedding3.png' },
          { category: 'Birthday', image: '/birthday2.png' },
          { category: 'Corporate', image: '/corporate2.png' },
          { category: 'Wedding', image: '/wedding2.png' },
          { category: 'Birthday', image: '/birthday3.png' },
          { category: 'Corporate', image: '/corporate3.png' },
          { category: 'Wedding', image: '/wedding4.png' },
          { category: 'Birthday', image: '/birthday4.png' },
          { category: 'Corporate', image: '/corporate4.png' }
        ].map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className={`h-64 bg-gradient-to-br ${item.color} relative`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={item.image} alt={`${item.category} Event`} className="text-black opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-black font-semibold text-lg">{item.category} Event</p>
                <p className="text-black/80 text-sm">Beautiful decoration setup</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">Want to see more of our work?</p>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </div>
);

export default GalleryPage;