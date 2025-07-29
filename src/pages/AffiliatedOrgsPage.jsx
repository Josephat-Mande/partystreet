import React from 'react';

const AffiliatedOrgsPage = () => {
  const affiliatedOrgs = [
    {
      name: "Marketing Students Association (MSA)",
      focus: "Marketing trends, brand strategy, and digital outreach.",
      activities: "Workshops, guest speaker events, inter-university competitions.",
      contact: "msa@gmail.com"
    },
    {
      name: "Finance Students Association (FISA)",
      focus: "Financial literacy, stock market education, and investment strategy.",
      activities: " finance bootcamps,industry visits guest lectures.",
      contact: "fisa@gmail.com"
    },
    {
      name: "Insurance Students Association (UNISA)",
      focus: "Insurance principles, risk management, and policy development.",
      activities: "Workshops, industry visits, guest lectures.",
      contact: "unisa@gmail.com"
    },
    {
      name: "Human Resource Students Association (HRSA)",
      focus: "Talent development, workplace ethics, and leadership.",
      activities: "Panel discussions, field visits, resume clinics.",
      contact: "hrsa@gmail.com"
    }
    // Add more if desired
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Affiliated Student Organisations</h1>
        <p className="text-gray-600 mb-8">
           Within our Campus, we have diverse yet essential departmental and professional student organisations. 
          Explore opportunities to get involved, Be part of your dream association and expand your network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliatedOrgs.map((org, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">{org.name}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Focus Area:</p>
                  <p className="text-sm text-gray-600">{org.focus}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Key Activities:</p>
                  <p className="text-sm text-gray-600">{org.activities}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Contact:</p>
                  <p className="text-sm text-green-600">{org.contact}</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliatedOrgsPage;
