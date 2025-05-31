import React from 'react';
import SEO from '../components/common/SEO';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Create Account | DogDays.ie"
        description="Join thousands of dog owners across Ireland. Create your free account to access all features."
        canonicalUrl="https://www.dogdays.ie/register"
      />

      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Create Account</h1>
          <p className="text-xl max-w-3xl">
            Join thousands of dog owners across Ireland. Create your free account to access all features.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our registration system is currently under development and will be available soon.
              Check back later to create your free account and join our community.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#2C3E50] text-white font-medium rounded-md hover:bg-[#1A2530] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
