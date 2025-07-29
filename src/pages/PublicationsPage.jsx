import React from 'react';
import { Download, Eye } from 'lucide-react';

const PublicationsPage = () => {
  const publications = [
    {
      title: "SOBO Monthly Bulletin - July 2025",
      type: "Monthly Bulletin",
      date: "July 2025",
      description: "Updates on student activities, academic announcements, and upcoming events",
      size: "2.3 MB"
    },
    {
      title: "Business Insights Digest #15",
      type: "Fortnightly Digest",
      date: "July 2025",
      description: "Industry trends, market analysis, and student research highlights",
      size: "1.8 MB"
    },
    {
      title: "Annual Report 2024",
      type: "Annual Report",
      date: "December 2024",
      description: "Comprehensive overview of SOBO activities and achievements for 2024",
      size: "5.2 MB"
    },
    {
      title: "Student Success Stories",
      type: "Special Edition",
      date: "June 2025",
      description: "Inspiring stories of student achievements and career milestones",
      size: "3.1 MB"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Publications Library</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg text-gray-800">{pub.title}</h3>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                  {pub.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{pub.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{pub.date}</span>
                <span>{pub.size}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm">
                  <Download className="w-4 h-4 inline mr-1" />
                  Download PDF
                </button>
                <button className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 text-sm">
                  <Eye className="w-4 h-4 inline mr-1" />
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
