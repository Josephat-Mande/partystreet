import React from 'react';

const AlumniPage = () => {
  const alumni = [
    {
      name: "Jane Muthoni",
      position: "Finance Director at Safaricom",
      year: 2015,
      image: "/api/placeholder/80/80",
      achievement: "Led groundbreaking financial inclusion projects across East Africa."
    },
    {
      name: "Brian Otieno",
      position: "CEO at StartupHub Africa",
      year: 2012,
      image: "/api/placeholder/80/80",
      achievement: "Founded a tech incubator supporting over 100 African startups."
    }
    // Add more alumni as needed
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Alumni Spotlight</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {alumni.map((alum, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                  <img src={alum.image} alt={alum.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{alum.name}</h3>
                  <p className="text-green-600 font-medium">{alum.position}</p>
                  <p className="text-sm text-gray-500">Class of {alum.year}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{alum.achievement}</p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <button className="text-green-600 hover:text-green-700 font-medium">Read Full Story</button>
                <button className="text-green-600 hover:text-green-700 font-medium">Connect</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Join Alumni Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
