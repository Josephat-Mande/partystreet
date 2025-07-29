import React from 'react';
import { Heart } from 'lucide-react';

const StudentVoice = () => {
  const suggestions = [
    {
      title: "Extend Library Hours",
      votes: 45,
      status: "In Progress",
      description: "Request to extend library operating hours during exam periods"
    },
    {
      title: "More Study Spaces",
      votes: 32,
      status: "Under Review",
      description: "Need for additional quiet study areas in the business building"
    },
    {
      title: "Digital Assignment Submission",
      votes: 28,
      status: "Implemented",
      description: "Online platform for assignment submissions"
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Implemented':
        return 'bg-green-100 text-green-600';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Voice</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Submit Feedback</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Academic</option>
                  <option>Facilities</option>
                  <option>Events</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="Brief description of your feedback" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                <textarea rows={4} placeholder="Share your thoughts, suggestions, or concerns..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="anonymous" className="rounded" />
                <label htmlFor="anonymous" className="text-sm text-gray-700">Submit anonymously</label>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Suggestions */}
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Recent Suggestions</h2>
            <div className="space-y-4">
              {suggestions.map((sug, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{sug.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusClass(sug.status)}`}>
                      {sug.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{sug.description}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                      <Heart className="w-4 h-4" />
                      {sug.votes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentVoice;
