import React from 'react';

const AboutPage = () => {
  const leadership = [
    { name: "Mande", position: "President", image: "/mande.jpg" },
    { name: "Margaret Njenga", position: "Vice President", image: "/maggie.jpg" },
    { name: "Lein Caleb", position: "Secretary General", image: "/caleb.jpeg" },
    { name: "Mary Njeri", position: "Treasurer", image: "/mary.jpeg" },
    { name: "Geoffrey Mutuku", position: "Sports and Welfare", image: "/jeff.jpeg" },
    { name: "Gabriel Mwakio", position: "Organizing Secretary", image: "/gabriel.jpeg" },
    { name: "Karen June", position: "Gender and Academics", image: "/karen.jpeg" },
    { name: "Tabbie Malek", position: "ICT, Research & Insights", image: "/tabbie.jpeg" },
    { name: "Shirline", position: "Public Relations Officer", image: "/aburiri.jpeg" },
    { name: "Stephen", position: "Corporate & External Affairs", image: "/stephen.jpg" },
    { name: "Denzel", position: "Innovation & Business Relations", image: "/denzel.jpeg" },
    { name: "Glen Abuom", position: "Internal Affairs & Events Coordinator", image: "/glen.jpeg" }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About SOBO</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              “To foster academic excellence, professional growth, and
holistic student development within the Faculty of Business and Management
Sciences at the University of Nairobi, through advocacy, collaboration, and
leadership.&quot;
            </p>
            
            <h2 className="text-xl font-semibold text-green-600 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              &quot;To be the foremost advocate and facilitator of student success,
innovation, and ethical leadership in business education across the Globe.&quot;
            </p>


            <h2 className="text-xl font-semibold text-green-600 mb-4">Our Mantra</h2>
            <p className="text-gray-700 mb-6">
              &quot;Empowering Futures, Uniting Strengths&quot;
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Organizational Structure</h2>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">Executive Council</h3>
                <p className="text-sm text-gray-600">Leadership team overseeing all SOBO activities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">Committees</h3>
                <p className="text-sm text-gray-600">Specialized groups handling specific functions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">SOBO Congress</h3>
                <p className="text-sm text-gray-600">Representatives for all the professional, Religious and Cultural associations or bodies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-green-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;