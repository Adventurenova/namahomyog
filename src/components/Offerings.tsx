import React from 'react';
import { Sparkles, Wind, Headphones, Utensils, Heart } from 'lucide-react';

const Offerings: React.FC = () => {
  const offerings = [
    {
      icon: <Sparkles className="text-orange-500" size={32} />,
      title: '🌞 Asana & Surya Namaskar',
      description: 'Improve posture, flexibility, and strength through classical yoga postures and sun salutations',
      benefits: ['Enhanced flexibility', 'Better posture', 'Increased strength', 'Energy boost']
    },
    {
      icon: <Wind className="text-blue-500" size={32} />,
      title: '🌬 Pranayama',
      description: 'Energize the body and calm the nervous system through ancient breathing techniques',
      benefits: ['Stress reduction', 'Better focus', 'Improved energy', 'Emotional balance']
    },
    {
      icon: <Heart className="text-purple-500" size={32} />,
      title: '🧘 Vipassana Meditation',
      description: 'Learn to be still, observe, and connect within through mindfulness practice',
      benefits: ['Deep awareness', 'Mental clarity', 'Inner peace', 'Self-understanding']
    },
    {
      icon: <Headphones className="text-green-500" size={32} />,
      title: '🎶 Sound Healing',
      description: 'Chakra bowls and mantra vibrations during Shavasana for deep relaxation',
      benefits: ['Deep relaxation', 'Chakra balancing', 'Stress relief', 'Healing vibrations']
    },
    {
      icon: <Utensils className="text-amber-500" size={32} />,
      title: '🌿 Lifestyle Guidance',
      description: 'Sattvic diet, yogic discipline, and daily balance for complete transformation',
      benefits: ['Healthy habits', 'Better nutrition', 'Life discipline', 'Holistic wellness']
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-gradient-to-b from-orange-50 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Sparkles className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ✨ Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At नमः ॐ योग, each session is more than movement. You will experience a complete transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {offering.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{offering.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {offering.benefits.map((benefit, benefitIndex) => (
                        <span 
                          key={benefitIndex}
                          className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Experience Complete Transformation</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Every element works in harmony to heal the body, stabilize the mind, and awaken the soul. 
              Join us on this sacred journey of self-discovery and inner peace.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://wa.me/918788988859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;