import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/SOI-logo_Revisedsoi.JPG" 
                alt="Stuffs of Idli Logo" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-2"
              />
              <div>
                <h3 className="text-2xl font-bold">Stuffs of Idli</h3>
                <p className="text-gray-400 text-sm">Stuffed Spiced Surprising</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing you the authentic taste of South India with traditional recipes, 
              fresh ingredients, and the warmth of home-cooked meals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-orange-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Dine In</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Takeaway</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Party Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Neeladri Road, Electronic City</p>
                  <p className="text-gray-400 text-sm">Bangalore, Karnataka 560100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <p className="text-gray-400">+91 9606063438</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <p className="text-gray-400">info@stuffsofidli.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Opening Hours</h5>
              <p className="text-gray-400 text-sm">Mon - Sun: 6:00 AM - 10:00 PM</p>
              <p className="text-gray-400 text-sm">No Lunch Break</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to our newsletter for exclusive offers and updates on new menu items.
            </p>
            <div className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-white"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Stuffs of Idli. All rights reserved. Made with ❤️ in Bangalore.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;