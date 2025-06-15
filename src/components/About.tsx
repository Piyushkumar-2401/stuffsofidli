import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Heart, value: '100%', label: 'Made with Love' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2008 by Chef Lakshmi Narayan, Stuffs of Idli began as a small family kitchen 
                  with a simple mission: to bring authentic South Indian flavors to food lovers everywhere.
                </p>
                <p>
                  What started with grandmother's traditional recipes has grown into a beloved restaurant 
                  chain, but our commitment to quality and authenticity remains unchanged. Every idli is 
                  handcrafted using the finest ingredients and time-honored techniques.
                </p>
                <p>
                  We source our rice from Karnataka's fertile fields and our lentils from Tamil Nadu's 
                  finest farms. Our chutneys are ground fresh daily, and our sambar recipe has been 
                  perfected over three generations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Traditional Cooking" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/12737659/pexels-photo-12737659.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Fresh Ingredients" 
                className="rounded-xl shadow-lg w-full h-32 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Chef Cooking" 
                className="rounded-xl shadow-lg w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Promise</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              "At Stuffs of Idli, we don't just serve food – we serve memories, traditions, and the warmth of home. 
              Every meal is prepared with the same love and care as if we were cooking for our own family."
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Chef Lakshmi" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Chef Lakshmi Narayan</p>
                <p className="text-sm text-gray-600">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;