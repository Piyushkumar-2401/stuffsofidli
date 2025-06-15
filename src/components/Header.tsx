import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/SOI-logo_Revisedsoi.JPG" 
              alt="Stuffs of Idli Logo" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Stuffs of Idli</h1>
              <p className="text-sm text-gray-600">Stuffed Spiced Surprising</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone size={16} />
              <span>+91 9606063438</span>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
              Order Now
            </button>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
              <div className="flex items-center space-x-1 text-sm text-gray-600 pt-2">
                <Phone size={16} />
                <span>+91 9606063438</span>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium w-fit">
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;