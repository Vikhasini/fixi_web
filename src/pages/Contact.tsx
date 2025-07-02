import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#3E2A56]" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Sat, 8AM-8PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#3E2A56]" />,
      title: "Email",
      details: "support@fixi.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#3E2A56]" />,
      title: "Office",
      details: "123 Service Street, City, State 12345",
      description: "Visit us during business hours"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#3E2A56]" />,
      title: "Business Hours",
      details: "Monday - Saturday: 8AM - 8PM",
      description: "Sunday: 10AM - 6PM"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Service Request",
    "Technical Support",
    "Billing Question",
    "Feedback",
    "Partnership Opportunity"
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2A56] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? We're here to assist you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#3E2A56] mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E2A56] mb-1">{info.title}</h3>
                    <p className="text-gray-800 mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-[#3E2A56] text-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">How quickly can I get service?</p>
                  <p className="text-sm text-gray-200">Most services can be scheduled within 24 hours, with emergency services available same-day.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Are your professionals insured?</p>
                  <p className="text-sm text-gray-200">Yes, all professionals on our platform are fully insured and background-checked.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">What if I'm not satisfied?</p>
                  <p className="text-sm text-gray-200">We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#3E2A56] mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3E2A56] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E2A56] focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E2A56] focus:border-transparent transition-colors"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E2A56] focus:border-transparent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E2A56] focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E2A56] focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3E2A56] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3E2A56]/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-red-800 mb-2">Emergency Services</h3>
          <p className="text-red-600 mb-4">
            For urgent home service emergencies (water leaks, electrical hazards, etc.)
          </p>
          <a
            href="tel:+15551234567"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-block"
          >
            Call Emergency Line: +1 (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;