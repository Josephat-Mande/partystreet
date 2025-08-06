import React, { useState } from 'react';
import { 
  ChevronRight, 
  Star, 
  Users, 
  Check, 
  X, 
  ArrowLeft,
  Search,
  Filter,
  Heart,
  ShoppingCart,
  Zap,
  Sparkles,
  Eye,
  Calendar,
  Shield,
  Award
} from 'lucide-react';
import './fonts.css';

const ExploreCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    {
      id: 'tents',
      name: 'Tents & Canopies',
      icon: '⛺',
      color: 'from-blue-500 to-cyan-500',
      description: 'Premium weather protection and elegant outdoor solutions',
      itemCount: 12
    },
    {
      id: 'chairs',
      name: 'Chairs & Seating',
      icon: '🪑',
      color: 'from-purple-500 to-pink-500',
      description: 'Comfortable and stylish seating for every occasion',
      itemCount: 18
    },
    {
      id: 'tables',
      name: 'Tables & Surfaces',
      icon: '🪑',
      color: 'from-green-500 to-emerald-500',
      description: 'Elegant dining and display solutions',
      itemCount: 15
    },
    {
      id: 'balloon backdrops',
      name: 'Backdrops & Walls',
      icon: '🎭',
      color: 'from-orange-500 to-red-500',
      description: 'Stunning photo backgrounds and decorative walls',
      itemCount: 20
    },
    {
      id: 'balloons',
      name: 'Balloons & Inflatables',
      icon: '🎈',
      color: 'from-pink-500 to-rose-500',
      description: 'Colorful and creative balloon arrangements',
      itemCount: 25
    },
    {
      id: 'lighting',
      name: 'Lighting & Effects',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500',
      description: 'Atmospheric lighting and special effects',
      itemCount: 14
    },
    {
      id: 'linens',
      name: 'Linens & Draping',
      icon: '🎀',
      color: 'from-indigo-500 to-purple-500',
      description: 'Luxurious fabrics and elegant draping solutions',
      itemCount: 22
    },
    {
      id: 'flowers',
      name: 'Flowers & Arrangements',
      icon: '🌸',
      color: 'from-rose-500 to-pink-500',
      description: 'Fresh and artificial floral decorations',
      itemCount: 30
    },
    {
      id: 'cutlery',
      name: 'Cutlery & Tableware',
      icon: '🍽️',
      color: 'from-gray-500 to-slate-500',
      description: 'Elegant cutlery and tableware for your events',
      itemCount: 10
    },
    {
      id: 'candle stands',
      name: 'Candle Stands & Holders',
      icon: '🕯️',
      color: 'from-amber-500 to-yellow-500',
      description: 'Elegant candle stands and holders for your events',
      itemCount: 12
    },
    {
      id: 'flower centrepieces',
      name: 'Flower Centrepieces',
      icon: '�',
      color: 'from-pink-500 to-rose-500',
      description: 'Beautiful floral arrangements for your tables',
      itemCount: 15
    },
  {
      id: 'kids-activities',
      name: 'Kids Activities',
      icon: '🎈',
      color: 'from-pink-500 to-rose-500',
      description: 'Fun and engaging activities for children',
      itemCount: 10
    }
  
  ];

  const items = {
    tents: [
      {
        id: 't1',
        name: 'Luxury Wedding Marquee',
        price: 15000,
        capacity: '150-200 guests',
        image: 'from-blue-400 to-blue-600',
        rating: 4.9,
        popular: true,
        pros: ['Weather resistant', 'Elegant design', 'Easy setup', 'LED lighting ready'],
        cons: ['Requires large space', 'Higher cost'],
        features: ['12m x 20m', 'White canvas', 'Clear windows', 'Flooring included']
      },
      {
        id: 't2',
        name: 'Garden Party Gazebo',
        price: 8000,
        capacity: '50-80 guests',
        image: 'from-green-400 to-green-600',
        rating: 4.7,
        pros: ['Compact size', 'Quick setup', 'Affordable', 'Versatile'],
        cons: ['Limited capacity', 'Basic design'],
        features: ['6m x 8m', 'Waterproof', 'UV protection', 'Side panels optional']
      },
      {
        id: 't3',
        name: 'Corporate Event Canopy',
        price: 12000,
        capacity: '100-150 guests',
        image: 'from-gray-400 to-gray-600',
        rating: 4.8,
        pros: ['Professional look', 'Modular design', 'Brand customization', 'Durable'],
        cons: ['Setup time', 'Transport requirements'],
        features: ['10m x 15m', 'Branded options', 'Sound system ready', 'Climate control']
      }
    ],
    chairs: [
      {
        id: 'c1',
        name: 'Crossback',
        price: 350,
        capacity: 'Per chair',
        image: '/crossback.png',
        rating: 4.9,
        popular: true,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Gold finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c2',
        name: 'Paris',
        price: 450,
        capacity: 'Per chair',
        image: '/paris.png',
        rating: 4.8,
        pros: ['Modern design', 'Space illusion', 'Easy cleaning', 'Weather resistant'],
        cons: ['Show fingerprints', 'Limited comfort'],
        features: ['Clear acrylic', 'Contemporary style', 'Stackable', 'Indoor/outdoor']
      },
      {
        id: 'c3',
        name: 'Aria Purple',
        price: 280,
        capacity: 'Per chair',
        image: '/aria-purple.png',
        rating: 4.6,
        pros: ['Rustic charm', 'Comfortable', 'Affordable', 'Photo-friendly'],
        cons: ['Weather sensitive', 'Heavier weight'],
        features: ['Solid wood', 'Natural finish', 'Cushion compatible', 'Vintage style']
      },
    
      {
        id: 'c4',
        name: 'Chiavari White',
        price: 400,
        capacity: 'Per chair',
        image: '/chiavari-white.png',
        rating: 4.9,
        pros: ['Classic elegance', 'Lightweight', 'Stackable', 'Versatile'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Wood or resin', 'Multiple colors', 'Event standard', 'Durable']
      },
      {
        id: 'c5',
        name: 'Clear Ghost',
        price: 500,
        capacity: 'Per chair',
        image: '/clear-ghost.png',
        rating: 4.7,
        pros: ['Modern look', 'Space-saving', 'Easy to clean', 'Weather resistant'],
        cons: ['Show fingerprints', 'Limited comfort'],
        features: ['Clear acrylic', 'Contemporary design', 'Stackable', 'Indoor/outdoor']
      },
      {
        id: 'c6',
        name: 'White Ghost',
        price: 200,
        capacity: 'Per chair',
        image: '/white-ghost.png',
        rating: 4.5,
        pros: ['Compact', 'Easy storage', 'Affordable', 'Lightweight'],
        cons: ['Basic design', 'Limited comfort'],
        features: ['Metal frame', 'Wooden seat', 'Folding mechanism', 'Indoor/outdoor']
      },
      {
        id: 'c7',
        name: 'Black Ghost',
        price: 150,
        capacity: 'Per chair',
        image: '/black-ghost.png',
        rating: 4.6,
        pros: ['Rustic charm', 'Comfortable', 'Affordable', 'Photo-friendly'],
        cons: ['Weather sensitive', 'Heavier weight'],
        features: ['Solid wood', 'Natural finish', 'Cushion compatible', 'Vintage style']
      },
      {
        id: 'c8',
        name: 'Chiavari Gold',
        price: 600,
        capacity: 'Per chair',
        image: '/chiavari-gold.png',
        rating: 4.8,
        pros: ['Luxury look', 'Lightweight', 'Stackable', 'Versatile'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Wood or resin', 'Gold finish', 'Event standard', 'Durable']
      },
      {
        id: 'c9',
        name: 'Black Vogue',
        price: 300,
        capacity: 'Per chair',
        image: '/black-vogue.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Blue finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c10',
        name: 'White Jade',
        price: 300,
        capacity: 'Per chair',
        image: '/white-jade.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'White finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c11',
        name: 'Clear Jade',
        price: 300,
        capacity: 'Per chair',
        image: '/clear-jade.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Gold finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c12',
        name: 'O Back',
        price: 300,
        capacity: 'Per chair',
        image: '/o-back-gold.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Gold finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c13',
        name: 'O Back Black',
        price: 300,
        capacity: 'Per chair',
        image: '/o-back-black.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Gold finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c14',
        name: 'Infinity',
        price: 300,
        capacity: 'Per chair',
        image: '/infinity.png',
        rating: 4.7,
        pros: ['Elegant design', 'Comfortable', 'Stackable', 'Durable'],
        cons: ['Higher cost', 'Requires cushions'],
        features: ['Resin material', 'Gold finish', 'Lightweight', 'Event standard']
      },
      {
        id: 'c15',
        name: 'Aria',
        price: 450,
        capacity: 'Per chair',
        image: '/aria.png',
        rating: 4.8,
        pros: ['Modern design', 'Space illusion', 'Easy cleaning', 'Weather resistant'],
        cons: ['Show fingerprints', 'Limited comfort'],
        features: ['Clear acrylic', 'Contemporary style', 'Stackable', 'Indoor/outdoor']
      },
      {
        id: 'c16',
        name: 'Aria Pink',
        price: 280,
        capacity: 'Per chair',
        image: '/aria-pink.png',
        rating: 4.6,
        pros: ['Rustic charm', 'Comfortable', 'Affordable', 'Photo-friendly'],
        cons: ['Weather sensitive', 'Heavier weight'],
        features: ['Solid wood', 'Natural finish', 'Cushion compatible', 'Vintage style']
      }

    ],
    balloons: [
      {
        id: 'b1',
        name: 'Aria Pink',
        price: 5500,
        capacity: '4m wide arch',
        image: '/aria-pink.png',
        rating: 4.9,
        popular: true,
        pros: ['Eye-catching', 'Customizable colors', 'Photo backdrop', 'Long-lasting'],
        cons: ['Setup time', 'Weather sensitive'],
        features: ['Organic design', 'Mixed sizes', 'Color coordination', 'Professional setup']
      },
      {
        id: 'b2',
        name: 'Number & Letter Balloons',
        price: 800,
        capacity: 'Per balloon',
        image: 'from-red-400 to-pink-600',
        rating: 4.7,
        pros: ['Personalized', 'Large size', 'Metallic finish', 'Reusable'],
        cons: ['Single use design', 'Limited colors'],
        features: ['34-inch size', 'Foil material', 'Self-sealing', 'Helium compatible']
      },
      {
        id: 'b3',
        name: 'Balloon Bouquet Sets',
        price: 1200,
        capacity: '10 balloon set',
        image: 'from-cyan-400 to-blue-600',
        rating: 4.8,
        pros: ['Ready-made', 'Coordinated colors', 'Table decoration', 'Affordable'],
        cons: ['Fixed design', 'Short float time'],
        features: ['Mixed materials', 'Ribbon included', 'Weight included', 'Theme options']
      }
    ],
    backdrops: [
      {
        id: 'bd1',
        name: 'LED Pixel Wall',
        price: 25000,
        capacity: '4m x 3m display',
        image: 'from-purple-400 to-indigo-600',
        rating: 5.0,
        popular: true,
        pros: ['Digital content', 'Customizable', 'High impact', 'Modern tech'],
        cons: ['High cost', 'Power requirements'],
        features: ['4K resolution', 'Custom graphics', 'Video playback', 'Remote control']
      },
      {
        id: 'bd2',
        name: 'Floral Wall Backdrop',
        price: 12000,
        capacity: '3m x 2.5m wall',
        image: 'from-rose-400 to-pink-600',
        rating: 4.8,
        pros: ['Natural beauty', 'Photo-perfect', 'Customizable', 'Romantic feel'],
        cons: ['Fragile flowers', 'Setup time'],
        features: ['Fresh flowers', 'Greenery mix', 'Custom arrangement', 'Backdrop stand']
      },
      {
        id: 'bd3',
        name: 'Geometric Panel Wall',
        price: 8000,
        capacity: '4m x 2.5m wall',
        image: 'from-gray-400 to-slate-600',
        rating: 4.7,
        pros: ['Modern design', 'Reusable', 'Modular', 'Easy setup'],
        cons: ['Limited customization', 'Transport size'],
        features: ['3D panels', 'White finish', 'Modular system', 'Professional look']
      }
    ]
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredItems = selectedCategory ? 
    (items[selectedCategory.id] || []).filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = priceFilter === 'all' || 
        (priceFilter === 'low' && item.price < 5000) ||
        (priceFilter === 'medium' && item.price >= 5000 && item.price < 15000) ||
        (priceFilter === 'high' && item.price >= 15000);
      return matchesSearch && matchesPrice;
    }) : [];

  if (selectedItem) {
    return (
      <div className="min-h-screen mt-6 bg-black to-slate-900 text-white">
        {/* Item Detail View */}
        <div className="relative">
          <button
            onClick={() => setSelectedItem(null)}
            className="fixed top-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <div className="pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="space-y-6">
                  <div className={`h-96 bg-gradient-to-br ${selectedItem.image} rounded-3xl shadow-2xl relative overflow-hidden`}>
                    <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover object-cover object-center " style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Eye className="w-16 h-16 mx-auto mb-4 opacity-60" />
                        {/* <p className="text-lg font-medium">Product Preview</p> */}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`h-24 bg-gradient-to-br ${selectedItem.image} rounded-xl opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}></div>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-4xl font-bold font-merienda">{selectedItem.name}</h1>
                      <button
                        onClick={() => toggleFavorite(selectedItem.id)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          favorites.includes(selectedItem.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        <Heart className={`w-6 h-6 ${favorites.includes(selectedItem.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedItem.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                        <span className="ml-2 text-sm text-gray-300">{selectedItem.rating}/5</span>
                      </div>
                      {selectedItem.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-semibold rounded-full">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold text-green-400 font-merienda">KSh {selectedItem.price.toLocaleString()}</p>
                          <p className="text-gray-300">{selectedItem.capacity}</p>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          <ShoppingCart className="w-5 h-5 inline mr-2" />
                          Add to Quote
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center font-merienda">
                      <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                      Features
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedItem.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-merienda">
                    <div className="bg-green-500/10 backdrop-blur-lg rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-4 text-green-400">Pros</h3>
                      <div className="space-y-2">
                        {selectedItem.pros.map((pro, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-300">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-500/10 backdrop-blur-lg rounded-2xl p-6">
                      <h3 className="text-lg font-bold mb-4 text-red-400">Considerations</h3>
                      <div className="space-y-2">
                        {selectedItem.cons.map((con, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <X className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-gray-300">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      <Calendar className="w-5 h-5 inline mr-2" />
                      Check Availability
                    </button>
                    <button className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                      <Shield className="w-5 h-5 inline mr-2" />
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    return (
      <div className="min-h-screen mt-6 bg-black to-slate-900 text-white font-merienda">
        {/* Category Items View */}
        <div className="relative">
          <button
            onClick={() => setSelectedCategory(null)}
            className="fixed top-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{selectedCategory.icon}</div>
                <h1 className="text-5xl font-bold mb-4">{selectedCategory.name}</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{selectedCategory.description}</p>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 focus:border-purple-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 focus:border-purple-400 focus:outline-none transition-all duration-300"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under KSh 5,000</option>
                  <option value="medium">KSh 5,000 - 15,000</option>
                  <option value="high">Above KSh 15,000</option>
                </select>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className={`h-48 bg-gradient-to-br ${item.image} relative overflow-hidden`}>
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover absolute inset-0" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            favorites.includes(item.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      {item.popular && (
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{item.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">{item.capacity}</p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-green-400">KSh {item.price.toLocaleString()}</p>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">No items found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Categories Overview */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl mt-2 font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-merienda">
              Explore Categories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poiret">
              Discover our comprehensive collection of premium event equipment and decorations. 
              Each category features detailed specifications, pricing, and professional insights.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer border border-white/10 hover:border-white/20"
                onClick={() => setSelectedCategory(category)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300 font-merienda">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed font-poiret">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.itemCount} items</span>
                    <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Instant Quotes</h3>
              <p className="text-gray-400">Get pricing and availability in real-time</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-400">Premium equipment with damage protection</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-400">Professional guidance and setup assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;