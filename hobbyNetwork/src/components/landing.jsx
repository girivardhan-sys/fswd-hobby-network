import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Calendar, Award, ShoppingBag } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Connect Through Your Passions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join HobbyNetwork and discover a community of people who share your interests. Learn, collaborate, and grow together.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Get Started
            </Link>
            <Link to="/login" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Join HobbyNetwork?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            title="Connect"
            description="Find and connect with people who share your interests"
          />
          <FeatureCard
            icon={<Target className="h-8 w-8 text-indigo-600" />}
            title="Learn"
            description="Join workshops and learn from community experts"
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-indigo-600" />}
            title="Events"
            description="Participate in virtual events and challenges"
          />
          <FeatureCard
            icon={<ShoppingBag className="h-8 w-8 text-indigo-600" />}
            title="Marketplace"
            description="Buy and sell hobby-related items securely"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of hobby enthusiasts today.</p>
          <Link to="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;