import React from 'react';
import { Star, Plus } from 'lucide-react';

const Menu = () => {
  const idliVarieties = [
    { 
      id: 1, 
      name: 'Stuffed Idli', 
      description: 'Soft, fluffy steamed rice cakes with delicious stuffing, served with sambar and chutney', 
      rating: 4.9, 
      image: '/images/0A1A8501.jpg' 
    },
    { 
      id: 2, 
      name: 'Crispy Fried Idli', 
      description: 'Golden-brown crispy idli balls with a perfect crunch, served with traditional accompaniments', 
      rating: 4.8, 
      image: '/images/0A1A8714.jpg' 
    },
    { 
      id: 3, 
      name: 'Traditional Idli', 
      description: 'Classic steamed idli with authentic taste and texture, served with sambar and coconut chutney', 
      rating: 4.9, 
      image: '/images/0A1A8802.jpg' 
    },
    { 
      id: 4, 
      name: 'Chocolate Idli Dessert', 
      description: 'A sweet twist on traditional idli - chocolate flavored dessert idli with rich chocolate sauce', 
      rating: 4.7, 
      image: '/images/0A1A8916.jpg' 
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature <span className="text-orange-500">Idli Varieties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our authentic South Indian idli varieties, each crafted with traditional recipes 
            and served with love. From classic to innovative, every bite tells a story.
          </p>
        </div>

        {/* Idli Varieties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {idliVarieties.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                  <Star size={16} className="text-yellow-400" fill="currentColor" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  {item.description}
                </p>
                
                <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2 group">
                  <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience Authentic South Indian Flavors</h3>
            <p className="mb-6 text-orange-100 text-lg">
              Each idli is handcrafted using traditional techniques passed down through generations. 
              Made fresh daily with the finest ingredients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors font-semibold">
                Visit Our Outlet
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-500 transition-colors font-semibold">
                Call for Takeaway
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;