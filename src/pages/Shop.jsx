import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Heart,
  Star,
  Truck,
  Shield,
  ArrowRight,
  Tag,
  Zap,
  Gift,
  Eye,
  Check,
  X
} from 'lucide-react';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showQuickView, setShowQuickView] = useState(null);
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      description: 'Premium comfort meets style in our signature black tee',
      cost: 700,
      originalCost: 900,
      image: './mande.jpg',
      category: 'Apparel',
      rating: 4.8,
      reviews: 24,
      badge: 'BESTSELLER',
      colors: ['Black', 'White', 'Gray'],
      features: ['100% Cotton', 'Pre-shrunk', 'Machine Washable']
    },
    {
      id: 2,
      name: 'Premium Hoodie',
      description: 'Ultimate warmth and comfort for the modern lifestyle',
      cost: 1500,
      originalCost: 1800,
      image: './',
      category: 'Apparel',
      rating: 4.9,
      reviews: 19,
      badge: 'LIMITED',
      colors: ['Black', 'Green', 'Navy'],
      features: ['Fleece Lined', 'Kangaroo Pocket', 'Adjustable Hood']
    },
    {
      id: 3,
      name: 'Signature Wrist Band',
      description: 'Stylish accessory that makes a statement',
      cost: 50,
      originalCost: 80,
      image: './mande.jpg',
      category: 'Accessories',
      rating: 4.7,
      reviews: 56,
      badge: 'TRENDING',
      colors: ['Black', 'Green', 'White'],
      features: ['Silicone Material', 'Adjustable', 'Water Resistant']
    },
    {
      id: 4,
      name: 'Forest Green Tee',
      description: 'Nature-inspired design with premium organic cotton',
      cost: 700,
      originalCost: 850,
      image: './mande.jpg',
      category: 'Apparel',
      rating: 4.6,
      reviews: 26,
      badge: 'ECO-FRIENDLY',
      colors: ['Forest Green', 'Olive', 'Sage'],
      features: ['Organic Cotton', 'Eco-Friendly Dyes', 'Sustainable']
    },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const addToCart = (item) => {
    const selectedSize = selectedSizes[item.id] || sizes[2]; // Default to M
    const cartItem = { ...item, size: selectedSize, cartId: Date.now() };
    
    setCart([...cart, cartItem]);
    const newTotalItems = totalItems + 1;
    const newTotalCost = totalCost + item.cost;
    setTotalItems(newTotalItems);
    setTotalCost(newTotalCost);
    
    // Success notification
    console.log(`✅ Added ${item.name} to cart! Total: Ksh. ${newTotalCost}`);
    toast.success(`✅ Added ${item.name} to cart! Total: Ksh. ${newTotalCost}`, { autoClose: 2000 });
  };

  const toggleWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
      console.log('❤️ Removed from wishlist');
      toast.success(`❤️ Removed ${items.find(item => item.id === itemId).name} from wishlist`, { autoClose: 2000 });
    } else {
      setWishlist([...wishlist, itemId]);
      console.log('❤️ Added to wishlist');
      toast.success(`❤️ Added ${items.find(item => item.id === itemId).name} to wishlist`, { autoClose: 2000 });
    }
  };

  const handleSizeSelect = (itemId, size) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: size });
  };

  const handleCheckout = () => {
    if (totalItems === 0) {
      console.log('❌ Your cart is empty! Add some items first.');
      toast.error('Your cart is empty! Add some items first.', { autoClose: 2000 });
    } else {
      
      console.log('🛒 Proceeding to checkout with:', { cart, totalItems, totalCost });
      toast.success(`Proceeding to checkout! Total: Ksh. ${totalCost.toLocaleString()}`, { autoClose: 2000 });

    }
    navigate ('/order-review', {
        state: { cart, totalItems, totalCost }
      });
  };

  const getBadgeStyle = (badge) => {
    const styles = {
      'BESTSELLER': 'bg-gradient-to-r from-yellow-500 to-orange-500',
      'LIMITED': 'bg-gradient-to-r from-red-500 to-pink-500',
      'TRENDING': 'bg-gradient-to-r from-purple-500 to-indigo-500',
      'ECO-FRIENDLY': 'bg-gradient-to-r from-green-500 to-emerald-500'
    };
    return styles[badge] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-black py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-[#124f0d] to-green-600 p-4 rounded-full animate-pulse">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Sobo <span className="text-[#124f0d]">Store</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover premium merchandise that represents your values. Every purchase supports our mission.
          </p>
          
          {/* Features Banner */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Truck className="w-5 h-5 text-[#124f0d]" />
              <span className="text-white text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Shield className="w-5 h-5 text-[#124f0d]" />
              <span className="text-white text-sm">Quality Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-5 h-5 text-[#124f0d]" />
              <span className="text-white text-sm">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Shopping Cart Summary */}
        {totalItems > 0 && (
          <div className="bg-gradient-to-r from-[#124f0d]/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-[#124f0d]/30 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-[#124f0d] p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Cart Summary</h3>
                  <p className="text-gray-300">{totalItems} items • Ksh. {totalCost.toLocaleString()}</p>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#124f0d] hover:bg-[#124f0d]/80 cursor-pointer text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 animate-pulse"
              >
                <span>Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const isWishlisted = wishlist.includes(item.id);
            const selectedSize = selectedSizes[item.id] || sizes[2];
            const isHovered = hoveredItem === item.id;
            
            return (
              <div
                key={item.id}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#124f0d]/50 group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${getBadgeStyle(item.badge)} px-3 py-1 rounded-full`}>
                    <span className="text-white text-xs font-bold">{item.badge}</span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      isWishlisted 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-white/20 text-gray-300 hover:bg-white/30 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick Actions */}
                  <div className={`absolute bottom-4 left-4 right-4 flex space-x-2 transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button
                      onClick={() => setShowQuickView(item.id)}
                      className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center mb-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#124f0d] text-sm font-semibold">{item.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-white text-sm">{item.rating}</span>
                      <span className="text-gray-400 text-sm">({item.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-white">Ksh. {item.cost.toLocaleString()}</span>
                    {item.originalCost > item.cost && (
                      <>
                        <span className="text-gray-400 line-through">Ksh. {item.originalCost.toLocaleString()}</span>
                        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                          -{Math.round(((item.originalCost - item.cost) / item.originalCost) * 100)}%
                        </div>
                      </>
                    )}
                  </div>

                  {/* Size Selection */}
                  {item.category === 'Apparel' && (
                    <div className="mb-4">
                      <label className="text-white text-sm font-semibold mb-2 block">Size</label>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(item.id, size)}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                              selectedSize === size
                                ? 'bg-[#124f0d] text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-[#124f0d] to-green-600 hover:from-[#124f0d]/80 hover:to-green-600/80 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#124f0d]/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-8 border border-[#124f0d]/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every purchase supports mental health awareness and helps us reach more people in need.
            </p>
            {totalItems > 0 ? (
              <button
                onClick={handleCheckout}
                className="bg-gradient-to-r from-[#124f0d] to-green-600 hover:from-[#124f0d]/80 cursor-pointer hover:to-green-600/80 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto animate-pulse"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Complete Your Order - Ksh. {totalCost.toLocaleString()}</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            ) : (
              <div className="text-gray-400">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Add items to your cart to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;