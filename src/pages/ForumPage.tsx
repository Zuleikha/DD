import React from 'react';
import SEO from '../components/common/SEO';

const ForumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Owner Forum | DogDays.ie"
        description="Connect with other dog owners across Ireland. Share tips, ask questions, and join the conversation."
        canonicalUrl="https://www.dogdays.ie/forum"
      />

      {/* Hero Section */}
      <section className="bg-[#4A90E2] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Discussion Forum</h1>
          <p className="text-xl max-w-3xl">
            Connect with other dog owners across Ireland. Share tips, ask questions, and join the conversation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our discussion forum is currently under development and will be available soon.
              Check back later to connect with other dog owners across Ireland.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;
