import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact = ({ theme = { 
  primary: "#22c55e", 
  primaryLight: "#4ade80", 
  black: "#111827" 
} }) => {
  const [isVisible, setIsVisible] = useState({
    'contact-header': false,
    'contact-form': false,
    'contact-info': false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  useEffect(() => {
    // Set all sections to visible after component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.animate-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please fill in all fields'
      });
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
  
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: 'Preparing your message...'
    });
  
    try {
      // Format email body
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
  Name: ${formData.name}
  Email: ${formData.email}
  
  Message:
  ${formData.message}
      `;
      
      // Create mailto link with encoded parameters
      const mailtoLink = `mailto:TeamMandeSOBO@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Set success state after a short delay
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: 'Your email client has opened. Please send the email to complete your message.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error opening email client:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Failed to open email client. Please try again or contact us directly.'
    });
}
};
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="animate-section" id="contact-header">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Contact Us</h2>
            <p className="text-lg sm:text-xl text-gray-800 mt-4 max-w-3xl mx-auto">
              Have questions or want to get involved? Reach out to Viongozi wako!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="animate-section" id="contact-form">
            <div className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-1000 ${isVisible['contact-form'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 style={{ color: theme.primary }} className="text-xl sm:text-2xl font-bold mb-6">Send a Message</h3>
              
              {formStatus.message && (
                <div className={`mb-4 p-3 rounded-lg ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-black mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                    placeholder="Your Name"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                    placeholder="your.email@example.com"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-black mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                    placeholder="How would you like to get involved?"
                    disabled={formStatus.isSubmitting}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  style={{ backgroundColor: theme.primary }}
                  className="text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition-opacity flex items-center justify-center"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>Sending... <span className="ml-2 animate-spin">⟳</span></>
                  ) : (
                    <>Send Message <Send className="ml-2 w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-section" id="contact-info">
            <div 
              style={{ backgroundColor: theme.black }}
              className={`text-white p-6 sm:p-8 rounded-xl shadow-lg h-full transition-all duration-1000 delay-300 ${isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail style={{ color: theme.primaryLight }} className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-gray-300">TeamMandeSOBO@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone style={{ color: theme.primaryLight }} className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-gray-300">+254115911220</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin style={{ color: theme.primaryLight }} className="w-5 h-5 sm:w-6 sm:h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Find Us</p>
                    <p className="text-gray-300">Kila Corner Ya LKC<br />Lower Kabete Campus</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="font-semibold text-lg mb-4">Follow Our Campaign</p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      style={{ backgroundColor: theme.primary }}
                      className="p-3 rounded-full hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;