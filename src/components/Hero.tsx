import React from 'react';
import { Sunrise, Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Sacred Symbol */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <span className="text-4xl">🕉</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
          नमः ॐ योग
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-orange-100 font-light">
          A Drop of Nectar for Your Soul
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
            Yoga here is not just exercise — it is a journey into balance, awareness, and divinity. 
            Rooted in the ancient teachings of Rishikesh, enriched with the stillness of Vipassana meditation, 
            and uplifted by the vibrations of sound healing.
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-orange-100 mb-8">
            <div className="flex items-center space-x-2">
              <Sunrise size={20} />
              <span>Begin with discipline</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={20} />
              <span>Flow with grace</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles size={20} />
              <span>Live with divinity</span>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://wa.me/918788988859"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📱 Join on WhatsApp
          </a>
          <a
            href="mailto:Divesh5.1993@gmail.com"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            ✉️ Email Me
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📅 Book a Session
          </button>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default Hero;