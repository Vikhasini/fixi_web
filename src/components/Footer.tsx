import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3E2A56] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="w-8 h-8" />
              <span className="text-2xl font-bold">Fixi</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner for all home service needs. Connecting you with verified professionals in your area.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link to="/book" className="text-gray-300 hover:text-white transition-colors">Book Now</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <span>Electrician</span>
              <span>Plumber</span>
              <span>AC & Appliance Repair</span>
              <span>Cleaning</span>
              <span>Carpenter</span>
              <span>Pest Control</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-gray-300">support@fixi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Fixi. All rights reserved. | Connecting homes with trusted professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;