import React from 'react';
import { Circle, ArrowRight } from 'lucide-react';

const SessionFlow: React.FC = () => {
  const sessionSteps = [
    {
      step: 1,
      title: 'Opening Ritual',
      description: 'Sukhasana (cross-legged sitting), chanting Om x3, silent prayer, palm rubbing',
      icon: '🙏',
      color: 'from-orange-400 to-red-400'
    },
    {
      step: 2,
      title: 'Warm-up',
      description: 'Joint movements to gently loosen the body and prepare for practice',
      icon: '🤸',
      color: 'from-amber-400 to-orange-400'
    },
    {
      step: 3,
      title: 'Surya Namaskar',
      description: 'Full 24-count sequence, repeated twice for energy and strength',
      icon: '☀️',
      color: 'from-yellow-400 to-amber-400'
    },
    {
      step: 4,
      title: 'Asana Practice',
      description: 'Cobra (Bhujangasana) for flexibility, Tree (Vrikshasana) for balance',
      icon: '🌳',
      color: 'from-green-400 to-emerald-400'
    },
    {
      step: 5,
      title: 'Pranayama',
      description: 'Yogic breathing, Anulom Vilom, and Bhramari (humming bee)',
      icon: '🌬️',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      step: 6,
      title: 'Vipassana Stillness',
      description: 'Silent observation of breath and body sensations for deep awareness',
      icon: '🧘',
      color: 'from-purple-400 to-violet-400'
    },
    {
      step: 7,
      title: 'Shavasana',
      description: 'Complete relaxation, guided by chakra healing bowls and sound therapy',
      icon: '💆',
      color: 'from-indigo-400 to-blue-400'
    },
    {
      step: 8,
      title: 'Closing',
      description: 'Chant Om and offer gratitude for the practice and inner transformation',
      icon: '🕉️',
      color: 'from-orange-400 to-amber-400'
    }
  ];

  return (
    <section id="sessions" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Circle className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🌿 Session Flow
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every class follows a mindful sequence designed to balance your physical, mental, and spiritual well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 h-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${step.color} rounded-full mb-4`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full mr-2">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector for larger screens */}
                {index < sessionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-orange-400" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Complete Balance</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              This structure ensures that every student leaves balanced — physically, mentally, and spiritually. 
              Each element works in harmony to create a transformative experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionFlow;