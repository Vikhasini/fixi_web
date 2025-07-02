import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-[#3E2A56]" />,
      title: "Trust & Safety",
      description: "All professionals are background-checked and verified for your peace of mind."
    },
    {
      icon: <Users className="w-8 h-8 text-[#3E2A56]" />,
      title: "Community First",
      description: "We believe in supporting local professionals and building stronger communities."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#3E2A56]" />,
      title: "Reliability",
      description: "On-time service delivery with transparent communication throughout the process."
    },
    {
      icon: <Award className="w-8 h-8 text-[#3E2A56]" />,
      title: "Quality Assurance",
      description: "We maintain high standards and ensure customer satisfaction on every job."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2A56] mb-4">
            About Fixi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make home services simple, reliable, and accessible for everyone. 
            Connecting homeowners with trusted professionals has never been easier.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#3E2A56] mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fixi was born from a simple frustration: finding reliable home service professionals 
              shouldn't be a hassle. After experiencing the challenges of locating trustworthy 
              electricians, plumbers, and other service providers, we decided to create a solution.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2023, we've grown from a small local service to a platform trusted by 
              thousands of homeowners and hundreds of verified professionals. Our commitment to 
              quality, safety, and customer satisfaction drives everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to be the bridge between homeowners who need help and skilled 
              professionals who love what they do.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Team working together"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3E2A56] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#3E2A56] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#3E2A56] text-white rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-200">
              Numbers that show our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Verified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-gray-200">Services Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3E2A56] mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To create a world where every homeowner has access to reliable, professional home services 
            at the touch of a button. We're building a community of trust, connecting skilled professionals 
            with people who need their expertise, and making home maintenance stress-free for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;