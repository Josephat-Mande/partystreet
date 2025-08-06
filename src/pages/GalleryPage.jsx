import React, { useState, useEffect } from 'react';
import "./fonts.css";

const galleryItems = [
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
];

const GalleryPage = ({ setCurrentPage }) => {
  const [focusImage, setFocusImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    if (!focusImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setFocusImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusImage]);

  // Close modal on background click
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('gallery-modal-bg')) {
      setFocusImage(null);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-merienda">Our Gallery</h1>
          <p className="text-xl text-gray-600 font-poiret">Explore our beautiful creations and get inspired for your next event</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setFocusImage(item)}
            >
              <div className="h-64 bg-gray-100 relative flex items-center justify-center">
                <img
                  src={item.image}
                  alt={`${item.category} Event`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              <div className="py-4 px-4 bg-white/80 absolute bottom-0 left-0 right-0 rounded-b-2xl text-center">
                <p className="text-gray-800 font-semibold text-lg font-merienda">{item.category} Event</p>
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

      {/* Focused Image Modal */}
      {focusImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 gallery-modal-bg"
          onClick={handleBackgroundClick}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setFocusImage(null)}
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow hover:bg-white"
              aria-label="Close"
            >
              <span className="text-xl font-bold text-gray-800">&times;</span>
            </button>
            <img
              src={focusImage.image}
              alt={`${focusImage.category} Event`}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-white font-merienda">{focusImage.category} Event</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;