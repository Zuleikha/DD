import React from 'react';
import SEO from '../components/common/SEO';

const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Items Marketplace | DogDays.ie"
        description="Buy, sell, or swap dog items with other owners. Find great deals on toys, accessories, and more."
        canonicalUrl="https://www.dogdays.ie/marketplace"
      />

      {/* Hero Section */}
      <section className="bg-[#F5A623] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-xl max-w-3xl">
            Buy, sell, or swap dog items with other owners. Find great deals on toys, accessories, and more.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our marketplace is currently under development and will be available soon.
              Check back later to buy, sell, or swap dog items with other owners.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#F5A623] text-white font-medium rounded-md hover:bg-[#E09612] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
