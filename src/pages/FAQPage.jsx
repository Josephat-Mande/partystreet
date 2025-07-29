import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I register for courses?",
      answer: "Course registration is done through the university's online portal..."
    },
    {
      question: "What are the payment deadlines for school fees?",
      answer: "School fees are typically due at the beginning of each semester..."
    },
    {
      question: "How can I access past examination papers?",
      answer: "Available in the Resources section of the website and at the library."
    },
    {
      question: "Who should I contact for academic advising?",
      answer: "Contact your department's student affairs officer."
    },
    {
      question: "How do I join student organizations?",
      answer: "Check the Affiliated Organizations section or attend their events."
    },
    {
      question: "What support services are available for students?",
      answer: "Counseling, financial aid, academic help, career guidance, and more."
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>

        <div className="mb-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                <span className="font-semibold text-gray-800">{item.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-4 pb-4 text-gray-600">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
