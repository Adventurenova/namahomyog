import React from 'react';
import { BookOpen, Download, FileText, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const freeGuides = [
    {
      icon: <Download className="text-orange-500" size={24} />,
      title: 'Surya Namaskar Flow',
      description: 'Complete step-by-step guide to the 24-count Sun Salutation sequence',
      type: 'PDF Guide',
      color: 'from-orange-100 to-red-100'
    },
    {
      icon: <FileText className="text-blue-500" size={24} />,
      title: 'Pranayama Basics',
      description: 'Essential breathing techniques for energy and nervous system balance',
      type: 'Practice Guide',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      icon: <BookOpen className="text-green-500" size={24} />,
      title: 'Yogic Lifestyle Guide',
      description: 'Comprehensive introduction to living with yogic principles and discipline',
      type: 'Lifestyle Manual',
      color: 'from-green-100 to-emerald-100'
    }
  ];

  const blogTopics = [
    {
      title: 'Yoga Beyond Fitness',
      description: 'Understanding yoga as a complete system for spiritual growth',
      readTime: '5 min read'
    },
    {
      title: 'Vipassana and Daily Stillness',
      description: 'Integrating mindfulness meditation into your everyday life',
      readTime: '7 min read'
    },
    {
      title: 'Discipline as Devotion',
      description: 'How yogic discipline becomes a path to divine connection',
      readTime: '6 min read'
    },
    {
      title: 'The Science of Pranayama',
      description: 'Understanding how breathing techniques affect mind and body',
      readTime: '8 min read'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              📚 Resources
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To support your practice, I provide free guides and materials for your yogic journey.
            </p>
          </div>

          {/* Free Guides Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Free Practice Guides</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {freeGuides.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`bg-gradient-to-br ${guide.color} rounded-xl p-4 mb-4`}>
                    <div className="flex items-center justify-center">
                      {guide.icon}
                    </div>
                  </div>
                  <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {guide.type}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{guide.description}</p>
                  <button className="w-full bg-gradient-to-r from-orange-400 to-amber-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Download Free
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Insights & Wisdom</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Regular blog posts sharing insights on yoga, meditation, and spiritual living</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="border-l-4 border-orange-400 pl-6 py-4 hover:bg-orange-50 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{topic.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                      <span className="text-orange-600 text-xs font-medium">{topic.readTime}</span>
                    </div>
                    <ExternalLink className="text-orange-400 ml-4 flex-shrink-0" size={20} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Read All Articles
              </button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-xl mb-6 opacity-90">
              Receive weekly insights, practice tips, and spiritual guidance directly in your inbox
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-full text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="w-full md:w-auto bg-white text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;