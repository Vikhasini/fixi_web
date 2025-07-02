import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Wrench, Snowflake, Sparkles, Hammer, Bug } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-[#3E2A56]" />,
      name: "Electrician",
      description: "Electrical repairs, installations, and maintenance services",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["Wiring & Rewiring", "Outlet Installation", "Electrical Troubleshooting", "Safety Inspections"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-[#3E2A56]" />,
      name: "Plumber",
      description: "Plumbing repairs, installations, and emergency services",
      image: "https://images.pexels.com/photos/8251264/pexels-photo-8251264.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["Pipe Repairs", "Drain Cleaning", "Faucet Installation", "Emergency Services"]
    },
    {
      icon: <Snowflake className="w-12 h-12 text-[#3E2A56]" />,
      name: "AC & Appliance Repair",
      description: "Air conditioning and home appliance repair services",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["AC Maintenance", "Refrigerator Repair", "Washing Machine Fix", "Installation Services"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#3E2A56]" />,
      name: "Cleaning",
      description: "Professional home and office cleaning services",
      image: "https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["Deep Cleaning", "Regular Maintenance", "Move-in/out Cleaning", "Sanitization"]
    },
    {
      icon: <Hammer className="w-12 h-12 text-[#3E2A56]" />,
      name: "Carpenter",
      description: "Furniture assembly, repairs, and custom woodwork",
      image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["Furniture Assembly", "Cabinet Installation", "Door Repairs", "Custom Woodwork"]
    },
    {
      icon: <Bug className="w-12 h-12 text-[#3E2A56]" />,
      name: "Pest Control",
      description: "Safe and effective pest control and prevention services",
      image: "https://images.pexels.com/photos/4828531/pexels-photo-4828531.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      features: ["Inspection Services", "Treatment Plans", "Prevention Methods", "Follow-up Care"]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2A56] mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional home services you can trust. All our service providers are verified, insured, and ready to help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3E2A56] mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[#3E2A56] mb-2">What We Offer:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-[#3E2A56] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/book"
                  className="w-full bg-[#3E2A56] text-white py-3 rounded-full font-semibold hover:bg-[#3E2A56]/90 transition-colors text-center block"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#3E2A56] mb-4">
              Why Choose Fixi?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#3E2A56] mb-2">500+</div>
              <div className="text-gray-600">Verified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#3E2A56] mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#3E2A56] mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#3E2A56] mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#3E2A56] mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-gray-600 mb-6">
            Get started in just a few clicks and connect with trusted professionals near you.
          </p>
          <Link
            to="/book"
            className="bg-[#3E2A56] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3E2A56]/90 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Book Service Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;