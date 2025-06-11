import React from 'react';
import SEO from '../components/common/SEO';
import BackToHomeButton from '../components/common/BackToHomeButton';

const AdoptionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Adoption | DogDays.ie"
        description="Find your new best friend through our ethical adoption listings. Connect with shelters and rescues across Ireland."
        canonicalUrl="https://www.dogdays.ie/adoption"
      />

      {/* Hero Section */}
      <section className="bg-[#7ED321] text-white py-16">
        <div className="container mx-auto px-4">
          <BackToHomeButton variant="light" />
          <h1 className="text-4xl font-bold mb-4">Adoption</h1>
          <p className="text-xl max-w-3xl">
            Find your new best friend through our ethical adoption listings. Connect with shelters and rescues across Ireland.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our adoption listings are currently under development and will be available soon.
              Check back later to find your new best friend through our ethical adoption listings.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#7ED321] text-white font-medium rounded-md hover:bg-[#6DC310] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionPage;
