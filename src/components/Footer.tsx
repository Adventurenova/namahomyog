import React from 'react';
import { Heart, Phone, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Classes', id: 'classes' },
    { label: 'Sessions', id: 'sessions' },
    { label: 'Offerings', id: 'offerings' },
    { label: 'Resources', id: 'resources' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4">
                  नमः ॐ योग
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A sacred journey into balance, awareness, and divinity. Experience the transformative 
                  power of authentic yoga rooted in ancient wisdom and enriched with modern understanding.
                </p>
                <div className="flex items-center space-x-2 text-orange-400">
                  <Heart size={20} />
                  <span className="text-sm">A Drop of Nectar for Your Soul</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Connect</h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/918788988859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <MessageSquare size={20} />
                  <span>+91 87889 88859</span>
                </a>
                <a
                  href="mailto:Divesh5.1993@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>Divesh5.1993@gmail.com</span>
                </a>
              </div>

              {/* Session Times */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Session Times</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>6:00 AM – 7:00 AM</p>
                  <p>7:30 AM – 8:30 AM</p>
                  <p>9:00 AM – 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center">
              <blockquote className="text-xl font-light italic text-orange-300 mb-4">
                "योग is not only a lifestyle but a step into the divinity of this drop of nectar."
              </blockquote>
              <p className="text-gray-400">— Inspired by Lord Shiva, the Adiyogi</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 नमः ॐ योग. Made with love and devotion.
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;