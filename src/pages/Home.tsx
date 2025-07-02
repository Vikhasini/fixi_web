import { Link } from "react-router-dom";
import {
  Search,
  CheckCircle,
  Users,
  Star,
  Calendar,
  Shield,
} from "lucide-react";

const Home = () => {
  const howItWorksSteps = [
    {
      icon: <Search className="w-12 h-12 text-[#3E2A56]" />,
      title: "Book a Service lalallalalalallalaal",
      description:
        "Choose from our wide range of home services and book online in just a few clicks.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#3E2A56]" />,
      title: "We Assign a Professional",
      description:
        "We connect you with verified, skilled professionals in your area within minutes.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#3E2A56]" />,
      title: "Job Done & Reviewed",
      description:
        "Get quality service completed on time, then rate your experience to help others.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Amazing service! The electrician arrived on time and fixed my wiring issue quickly. Highly recommend Fixi!",
    },
    {
      name: "Michael Chen",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Found a great plumber through Fixi. Professional, affordable, and reliable. Will definitely use again!",
    },
    {
      name: "Emily Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "The cleaning service was exceptional. My house has never looked better. Fixi makes it so easy to find quality help!",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#3E2A56]" />,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#3E2A56]" />,
      title: "Flexible Scheduling",
      description: "Book services at your convenience, 7 days a week",
    },
    {
      icon: <Star className="w-8 h-8 text-[#3E2A56]" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3E2A56] to-[#5A4476] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Need help at home?
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Fixi connects you to trusted professionals near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-white text-[#3E2A56] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  Book Service Now
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#3E2A56] transition-all duration-300 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1476913/pexels-photo-1476913.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Happy customer with professional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#3E2A56] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2A56] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the help you need in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-[#3E2A56] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#3E2A56] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2A56] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#3E2A56]">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3E2A56] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Book your service today and experience the Fixi difference
          </p>
          <Link
            to="/book"
            className="bg-white text-[#3E2A56] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Book Your Service Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
