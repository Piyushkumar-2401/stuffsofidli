import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      url: '/images/0A1A8780.jpg',
      alt: 'Stuffed Idli Varieties',
      title: 'Signature Stuffed Idli Collection'
    },
    {
      url: '/images/0A1A8956.jpg',
      alt: 'Traditional Idli Platter',
      title: 'Traditional Idli with Accompaniments'
    },
    {
      url: '/images/0A1A8501.jpg',
      alt: 'Stuffed Idli',
      title: 'Delicious Stuffed Idli'
    },
    {
      url: '/images/0A1A8714.jpg',
      alt: 'Crispy Fried Idli',
      title: 'Golden Crispy Fried Idli'
    },
    {
      url: '/images/0A1A8802.jpg',
      alt: 'Traditional Idli',
      title: 'Classic Traditional Idli'
    },
    {
      url: '/images/0A1A8916.jpg',
      alt: 'Chocolate Idli Dessert',
      title: 'Special Chocolate Idli Dessert'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Food <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our delicious idli varieties and authentic South Indian flavors.
            Every dish is crafted with love and traditional techniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 1 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index === 0 || index === 1 ? 'h-64 md:h-full' : 'h-48 md:h-64'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6 text-orange-100">
            Tag us on social media and share your delicious moments with #StuffsOfIdli
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;