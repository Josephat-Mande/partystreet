import React from 'react';

const GalleryPage = () => {
  const mediaItems = [
    {
      title: "Guest Lectures 2025",
      type: "Event",
      date: "June 2025",
      thumbnail: "/lectures.png"
    },
    {
      title: "Alumni Networking Session",
      type: "Event",
      date: "May 2025",
      thumbnail: "/alumni.png"
    },
    {
      title: "Student Life at School of Business",
      type: "Student Life",
      date: "April 2025",
      thumbnail: "/student-life.png"
    },
    {
      title: "Sports Tournament Highlights",
      type: "Projects",
      date: "March 2025",
      thumbnail: "/tournament.png"
    },
    {
      title: "Entrepreneurship Workshop",
      type: "Event",
      date: "February 2025",
      thumbnail: "/Business.png"
    },
    {
      title: "Campus Tour for New Students",
      type: "Student Life",
      date: "January 2025",
      thumbnail: "/campus.png"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Multimedia Gallery</h1>

        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">All</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Events</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Student Life</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
