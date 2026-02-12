import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const AboutPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 ">About Partystreet Kenya : (charity version for the unpaid page)lol </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
          We are passionate and about creating unforgettable moments through exceptional event planning and stunning memories plus decorations and .
        </p> 
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story lol</h2>
          <p className="text gray-700 mb-6 leading-relaxed font-poiret">
            Founded with a vision to transform ordinary celebrations into extraordinhary experiences, Partstreet Kenya has been at the forefront of event planning and decoration services across the country. Our journey began with a simple belief: every moment deserves to be celebrated beautifully.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed  font-poiret">
            Over the years lol, we have had the privilege of being part of countless love stories, milestone celebrations, and corporate achievements. Each event we touch becomes a canvas for our creativity and passion.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-600 ">500+</p>
              <p className="text-gray-600 font-merienda">Events Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600 ">4 Years</p>
              <p className="text-gray-600 font-merienda">Experience</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl shadow-2xl"></div>
          <div className="absolute inset-8 bg-white rounded-2xl shadow-lg flex items-center justify-center font-merienda">
            <div className="text-center">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <p className="text-xl font-bold text-gray-800">Crafting Memories</p>
              <p className="text-gray-600">One Event at a Time</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12  ">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: 'Passion', desc: 'We pour our heart into every detail of your special day' },
            { icon: Star, title: 'Excellence', desc: 'Committed to delivering the highest quality in everything we do' },
            { icon: Users, title: 'Partnership', desc: 'We work closely with you to bring your vision to life' }
          ].map((value, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-8 text-center">
              <value.icon className="w-10 h-10 mx-auto mb-4 text-pink-500 animate-pulse" />
              <h3 className="text-xl font-bold mb-2 text-gray-800 font-merienda">{value.title}</h3>
              <p className="text-gray-600 font-poiret">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 ">Meet Our Team</h2>
        <p className="text-gray-600 mb-10 font-poiret">
          Our dedicated team of event planners, designers, and coordinators work tirelessly to ensure every event is a success. We believe in collaboration, creativity, and attention to detail.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example team members, replace with real data */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/team/jane.jpg" alt="Jane Mwangi" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">Maureen Anyango</h4>
            <p className="text-pink-500 font-semibold mb-2"> C E O</p>
            <p className="text-gray-600 text-sm">Expert in event logistics and creative concepts.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/team/paul.jpg" alt="Paul Otieno" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">Paul Otieno</h4>
            <p className="text-purple-500 font-semibold mb-2">Head Decorator</p>
            <p className="text-gray-600 text-sm">Brings every vision to life with stunning decor.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src="/team/susan.jpg" alt="Susan Wanjiru" className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">Susan </h4>
            <p className="text-pink-500 font-semibold mb-2">Client Relations</p>
            <p className="text-gray-600 text-sm">Ensures every client feels valued and heard.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
