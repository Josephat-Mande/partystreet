import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './fonts.css';

const FAQPage = ({ setCurrentPage }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'How far in advance should I book your services?',
      answer: 'We recommend booking at least a weeks in advance with a 75% deposit. For weddings 2 months in advance with payment of 80% deposit and large events, and 2-3 weeks for smaller celebrations. However, we do accommodate last-minute requests when possible.'
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
      answer: 'No, we do not offer  wedding planning services . However we can do event planning for small events upon consultation.'
    },
    {
      question: 'What areas in Kenya do you serve?',
      answer: 'We serve all parts of the country and travel to other parts of Kenya for destination events. Travel costs may apply for events outside our primary service area.'
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
      answer: 'Yes, we offer flexible payment plans. Typically, we require a 75% deposit for any event and 80%  for weddings deposit to secure your date, with the balance due before or on the day of the event. We can discuss payment schedules during our consultation.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
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
                <h3 className="text-lg font-semibold text-gray-800 pr-4 ">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-pink-500 transition-transform duration-200 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed font-poiret">{faq.answer}</p>
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

export default FAQPage;