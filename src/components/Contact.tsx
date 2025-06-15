import React from 'react';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const Contact = () => {
  const location = {
    name: 'Stuffs of Idli - Neeladri Road',
    address: '123 Neeladri Road, Electronic City, Bangalore, Karnataka 560100',
    phone: '+91 9606063438',
    hours: '6:00 AM - 10:00 PM',
    rating: 4.8
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit <span className="text-orange-500">Our Outlet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us at our convenient location on Neeladri Road. 
            We're here to serve you fresh, authentic South Indian cuisine.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{location.name}</h3>
              <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                <Star size={14} className="text-yellow-500" fill="currentColor" />
                <span className="text-sm font-semibold text-yellow-700">{location.rating}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{location.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <p className="text-gray-600">{location.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-orange-500" />
                <p className="text-gray-600">{location.hours}</p>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Get Directions
              </button>
              <button className="flex-1 border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Call Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">Restaurant Details</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-orange-500" />
                    <span>Neeladri Road, Electronic City, Bangalore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-orange-500" />
                    <span>info@stuffsofidli.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-orange-500" />
                    <span>+91 9606063438</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">Franchise Opportunities</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Interested in opening a Stuffs of Idli franchise? We'd love to hear from you!
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">Catering Services</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Planning an event? Let us cater your special occasions with authentic flavors.
                </p>
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors font-medium">
                  Book Catering
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;