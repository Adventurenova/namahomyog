import React from 'react';
import { Clock, Video, MapPin, Calendar } from 'lucide-react';

const Classes: React.FC = () => {
  const timeSlots = [
    { time: '6:00 AM – 7:00 AM', period: 'Early Morning' },
    { time: '7:30 AM – 8:30 AM', period: 'Morning' },
    { time: '9:00 AM – 10:00 AM', period: 'Late Morning' },
  ];

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Calendar className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🧘 Classes & Schedule
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All classes are designed to bring clarity, strength, and inner balance.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{slot.period}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-4">{slot.time}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Class Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Video className="text-blue-500 mr-4" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Online Sessions</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Conducted via Zoom with HD video quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Interactive sessions with personalized guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Recorded sessions available for practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Small group sizes for individual attention</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="text-green-500 mr-4" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Offline Sessions</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Freelance sessions at your preferred location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Personalized one-on-one instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Customized practice based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Flexible scheduling options available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Options */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Flexible Booking Options</h3>
              <p className="text-xl mb-6 opacity-90">
                ⏳ Per-session booking available for maximum flexibility
              </p>
              <p className="text-lg opacity-80">
                Each session is 1 hour of transformative practice designed to balance body, mind, and spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;