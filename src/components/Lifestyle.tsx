import React from 'react';
import { Sunrise, Apple, Target, Pause, Smile, Heart } from 'lucide-react';

const Lifestyle: React.FC = () => {
  const principles = [
    {
      icon: <Sunrise className="text-yellow-500" size={28} />,
      title: 'Rise with the sun',
      description: 'Begin each day with the natural rhythm of the universe, welcoming divine energy'
    },
    {
      icon: <Apple className="text-green-500" size={28} />,
      title: 'Eat with awareness',
      description: 'Nourish your body with sattvic foods that promote clarity and spiritual growth'
    },
    {
      icon: <Target className="text-blue-500" size={28} />,
      title: 'Live with discipline',
      description: 'Cultivate self-control and dedication as pathways to inner mastery'
    },
    {
      icon: <Pause className="text-purple-500" size={28} />,
      title: 'Sit in silence',
      description: 'Find moments of stillness to connect with your inner wisdom and peace'
    },
    {
      icon: <Smile className="text-orange-500" size={28} />,
      title: 'Move with gratitude',
      description: 'Approach every action with appreciation and mindful awareness'
    },
    {
      icon: <Heart className="text-red-500" size={28} />,
      title: 'Connect with divinity',
      description: 'Recognize the sacred in every moment and every breath you take'
    }
  ];

  return (
    <section id="lifestyle" className="py-20 bg-gradient-to-b from-cream-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Heart className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🌸 Lifestyle Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Yoga is not limited to the mat. It is a complete lifestyle that transforms every aspect of your being.
            </p>
          </div>

          {/* Lifestyle Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Transformation Journey */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">The Journey of Transformation</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4">
                  <span className="text-3xl text-white">🧘‍♀️</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Body Heals</h4>
                <p className="text-gray-600">Through consistent practice, physical ailments diminish and vitality returns</p>
              </div>
              
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-4">
                  <span className="text-3xl text-white">🧠</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Mind Stabilizes</h4>
                <p className="text-gray-600">Mental fluctuations settle, bringing clarity, focus, and emotional balance</p>
              </div>
              
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4">
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Soul Awakens</h4>
                <p className="text-gray-600">The divine consciousness within begins to shine, revealing your true nature</p>
              </div>
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <span className="text-6xl opacity-50 mb-4 block">"</span>
              <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
                योग is not only a lifestyle but a step into the divinity of this drop of nectar.
              </blockquote>
              <div className="w-20 h-1 bg-white/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;