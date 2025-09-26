import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sessionType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! I will contact you soon.');
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="text-green-500" size={28} />,
      title: 'WhatsApp',
      detail: '+91 87889 88859',
      description: 'Quick responses and easy booking',
      action: () => window.open('https://wa.me/918788988859', '_blank')
    },
    {
      icon: <Mail className="text-blue-500" size={28} />,
      title: 'Email',
      detail: 'Divesh5.1993@gmail.com',
      description: 'Detailed inquiries and information',
      action: () => window.open('mailto:Divesh5.1993@gmail.com', '_blank')
    },
    {
      icon: <Phone className="text-orange-500" size={28} />,
      title: 'Video Sessions',
      detail: 'Zoom Meetings',
      description: 'Links shared before each session',
      action: () => {}
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Phone className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              📞 Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I welcome sincere seekers who wish to walk this path of discipline, awareness, and transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    onClick={method.action}
                    className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{method.title}</h4>
                        <p className="text-lg text-orange-600 font-semibold mb-1">{method.detail}</p>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Session Times */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="text-orange-500 mr-3" size={24} />
                  <h4 className="text-xl font-bold text-gray-800">Session Times</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>🌞 6:00 AM – 7:00 AM</p>
                  <p>🌞 7:30 AM – 8:30 AM</p>
                  <p>🌞 9:00 AM – 10:00 AM</p>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-1" />
                  <span>Online via Zoom | Offline freelance sessions available</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Book Your Session</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Session Type
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                    >
                      <option value="">Select session type</option>
                      <option value="online">Online (Zoom)</option>
                      <option value="offline">Offline (In-person)</option>
                      <option value="consultation">Consultation Call</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                      placeholder="Tell me about your yoga experience and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-amber-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Welcome, Sincere Seekers</h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Whether you're beginning your yoga journey or deepening your practice, I'm here to guide you 
              on this sacred path of discipline, awareness, and transformation. Every sincere seeker is welcomed 
              with open arms and an open heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;