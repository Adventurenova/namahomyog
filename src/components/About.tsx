import React from 'react';
import { Mountain, Bot as Lotus, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <User className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🙏 About
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p className="text-xl text-gray-800 font-medium">
                My name is <span className="text-orange-600 font-semibold">Divyesh</span>, 
                and I welcome you to <span className="font-bold text-amber-600">नमः ॐ योग</span>.
              </p>
              
              <p>
                My journey began in <strong>Rishikesh</strong>, where I trained in the classical practices of 
                asana, pranayama, mudra, and bandha. Later, <strong>Vipassana meditation</strong> deepened 
                my practice, teaching me the art of stillness and awareness.
              </p>
              
              <p>
                Yoga has transformed my life — not only my body, but also my mind and spirit. 
                Inspired by <strong>Lord Shiva, the Adiyogi</strong>, I believe yoga is more than a lifestyle; 
                it is a step into divinity, a drop of nectar that purifies and uplifts.
              </p>
              
              <p className="text-xl text-orange-600 font-medium text-center italic border-l-4 border-orange-400 pl-6 py-4 bg-orange-50 rounded-r-lg">
                "Here, I offer that same journey to you."
              </p>
            </div>
          </div>

          {/* Journey Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Mountain className="text-orange-500 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Rishikesh Training</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Classical practices of asana, pranayama, mudra, and bandha learned in the 
                spiritual capital of the world, where ancient wisdom flows like the sacred Ganges.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Lotus className="text-amber-500 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Vipassana Meditation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The profound practice of insight meditation that teaches the art of stillness, 
                awareness, and deep observation of mind and body phenomena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;