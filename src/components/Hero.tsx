import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Authentic
              <span className="text-orange-500"> South Indian</span>
              <br />Delicacies
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              Experience the traditional taste of handcrafted idlis, served with love and authentic flavors that transport you to South India.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.8 (1,200+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock size={20} className="text-orange-500" />
              <span>Open Daily 6 AM - 10 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={20} className="text-orange-500" />
              <span>Neeladri Road</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
              Order Online
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all font-semibold text-lg">
              View Menu
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img 
              src="https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Delicious Idli Platter" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">50+</p>
                <p className="text-gray-600 text-sm">Varieties</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">100%</p>
                <p className="text-gray-600 text-sm">Natural</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl transform rotate-3 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;