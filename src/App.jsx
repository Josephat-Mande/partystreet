import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Heart, 
  Gift, 
  Users, 
  Camera, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  MessageCircle, 
  Twitter
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About', id: 'about' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  const Header = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-2xl font-bold bg-black bg-clip-text text-transparent">
              Partystreet Kenya
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black/20 via-purple-50 to-yellow-100 overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Make Every
                </span>
                <br />
                <span className="text-gray-800">Moment</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Magical
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Transform your special occasions into unforgettable experiences with our premium event planning and decoration services in Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                >
                  Plan Your Event
                </button>
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="px-8 py-4 border-2 border-pink-500 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
                >
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
                  <p className="text-2xl font-bold text-gray-800">Your Dream Event</p>
                  <p className="text-gray-600">Awaits Beautiful Decoration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect celebration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Weddings', color: 'from-pink-500 to-rose-500',  desc: 'Romantic & elegant wedding decorations' },
              { icon: Gift, title: 'Birthdays', color: 'from-purple-500 to-indigo-500',  desc: 'Fun & colorful birthday celebrations' },
              { icon: Users, title: 'Corporate Events', color: 'from-blue-500 to-cyan-500', desc: 'Professional & sophisticated gatherings' }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br  rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}>  </div>
                <div className="relative p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Liz + Carlton', event: 'Wedding', rating: 5, text: 'Thank you soo much hunny!You did he thing ! I loved it and so did everyone! Well done ' },
              { name: 'Diana Bahati', event: 'Birthday Party', rating: 5, text: 'The team was professional and creative. Highly recommended!' },
              { name: 'Phanice', event: 'Baby shower', rating: 5, text: 'Proffesionalism, Quality, Responsiveness, Value ,Amazing Job for my babay shower balloons. The work you did was beautiful and you were extremely easy to work with. Highly recommend.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
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

  const ServicesPage = () => (
    <div className="pt-32 pb-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
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

  const GalleryPage = () => (
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
                  <img src={item.image} alt={`${item.category} Event`} className=" text-black opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
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

  const AboutPage = () => (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Partstreet Kenya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating unforgettable moments through exceptional event planning and stunning decorations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to transform ordinary celebrations into extraordinary experiences, Partstreet Kenya has been at the forefront of event planning and decoration services across the country. Our journey began with a simple belief: every moment deserves to be celebrated beautifully.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Over the years, we have had the privilege of being part of countless love stories, milestone celebrations, and corporate achievements. Each event we touch becomes a canvas for our creativity and passion.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-pink-600">500+</p>
                <p className="text-gray-600">Events Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">4 Years</p>
                <p className="text-gray-600">Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl shadow-2xl"></div>
            <div className="absolute inset-8 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <p className="text-xl font-bold text-gray-800">Crafting Memories</p>
                <p className="text-gray-600">One Event at a Time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Passion', desc: 'We pour our heart into every detail of your special day' },
              { icon: Star, title: 'Excellence', desc: 'Committed to delivering the highest quality in everything we do' },
              { icon: Users, title: 'Partnership', desc: 'We work closely with you to bring your vision to life' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FAQPage = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
      {
        question: 'How far in advance should I book your services?',
        answer: 'We recommend booking at least 4-6 weeks in advance for weddings and large events, and 2-3 weeks for smaller celebrations. However, we do accommodate last-minute requests when possible.'
      },
      {
        question: 'Do you provide all the decoration items?',
        answer: 'Yes, we provide all necessary decoration items including tents, tables, chairs, linens, flowers, lighting, and any themed decorations. We have a comprehensive inventory to meet all your needs.'
      },
      {
        question: 'Can you work within my budget?',
        answer: 'Absolutely! We offer flexible packages and can customize our services to fit various budgets. During our consultation, we\'ll discuss your requirements and create a plan that works for you.'
      },
      {
        question: 'Do you offer wedding planning services?',
        answer: 'Yes, we offer comprehensive wedding planning services including venue selection, vendor coordination, timeline management, and day-of coordination along with our decoration services.'
      },
      {
        question: 'What areas in Kenya do you serve?',
        answer: 'We primarily serve Nairobi and surrounding areas, but we also travel to other parts of Kenya for destination events. Travel costs may apply for events outside our primary service area.'
      },
      {
        question: 'Can I see examples of your previous work?',
        answer: 'Of course! We have an extensive portfolio of our previous events. You can view our gallery on this website or schedule a consultation where we\'ll show you more detailed examples relevant to your event type.'
      },
      {
        question: 'What happens if it rains during an outdoor event?',
        answer: 'We always have contingency plans for outdoor events. This includes having tents and covered areas ready, and we monitor weather forecasts closely to make necessary adjustments to ensure your event proceeds smoothly.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans. Typically, we require a 50% deposit to secure your date, with the balance due before or on the day of the event. We can discuss payment schedules during our consultation.'
      }
    ];

    return (
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-pink-500 transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">We're here to help! Get in touch with our team for personalized assistance.</p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your inquiry! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    };

    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Ready to plan your dream event? Let's bring your vision to life!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Free Quotes</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="graduation">Graduation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your event</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe your vision, guest count, venue, budget range, or any special requirements..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+254 745 707 463</p>
                      <p className="text-gray-600">+254 743 837 929</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@partstreetkenya.com</p>
                      <p className="text-gray-600">events@partstreetkenya.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">Ngummo Newa, Nairobi</p>
                      <p className="text-gray-600">Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/partystreet_ke" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                    </a>

                    <a href="https://wa.me/254745707463" className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </a>
                  
                  <a href="https://www.facebook.com/partystreetke" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://x.com/partystreetke" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Party street Kenya</span>
            </div>
            <p className="text-gray-400">
              Creating magical moments and unforgettable experiences through exceptional event planning and decoration services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wedding Planning</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Event Decoration</li>
              <li>Venue Setup</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
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
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+254 745 707 463</p>
              <p>info@partstreetkenya.com</p>
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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
};

export default App;