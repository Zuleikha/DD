import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, Smile, CupSoda, MapPin, PawPrint, Users, MessageCircleQuestion } from 'lucide-react';
import SEO from '../components/common/SEO';

import dogImage from '../assets/images/dog.jpg';

import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import MapSection from '../components/home/MapSection';
import CommunitySection from '../components/home/CommunitySection';
import NewsletterSection from '../components/home/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Dog-Friendly Services Across Ireland"
        description="Find dog-friendly services across Ireland including vets, parks, grooming, nutrition, and training resources."
        canonicalUrl="https://www.dogdays.ie"
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection pageType="listings" gradientClass="bg-mesh-gradient-home" />

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Find a Vet */}
              <Link to="/vets" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Find a Vet</h3>
                  <p className="text-gray-600 text-sm">Locate trusted veterinary services across Ireland for your dog</p>
                </div>
              </Link>

              {/* Parks & Walks */}
              <Link to="/parks" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <PawPrint className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Parks & Walks</h3>
                  <p className="text-gray-600 text-sm">Discover the best parks and walking trails for you and your dog</p>
                </div>
              </Link>

              {/* Nutrition */}
              <Link to="/nutrition" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrition</h3>
                  <p className="text-gray-600 text-sm">Find the best food options and dietary advice for your dog</p>
                </div>
              </Link>

              {/* Dog Training */}
              <Link to="/training" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dog Training</h3>
                  <p className="text-gray-600 text-sm">Connect with professional dog trainers and behavior specialists</p>
                </div>
              </Link>

              {/* Grooming */}
              <Link to="/grooming" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Smile className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Grooming</h3>
                  <p className="text-gray-600 text-sm">Find top-rated dog groomers and grooming services near you</p>
                </div>
              </Link>

              {/* Dog-Friendly Places */}
              <Link to="/places" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <CupSoda className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dog-Friendly Places</h3>
                  <p className="text-gray-600 text-sm">Discover restaurants, cafes, and hotels that welcome dogs</p>
                </div>
              </Link>

              {/* Find Dog Minders - NEW */}
              <Link to="/minders" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Find Dog Minders</h3>
                  <p className="text-gray-600 text-sm">Connect with trusted dog minders and sitters across Ireland</p>
                </div>
              </Link>

              {/* Advice from Chat Bot - NEW */}
              <Link to="/advice" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircleQuestion className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Advice from Chat Bot</h3>
                  <p className="text-gray-600 text-sm">Get instant answers to your dog care questions from our AI assistant</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Dog Image Feature Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={dogImage}
                    alt="Adorable dog with yellow flower"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Mascot</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our furry friend reminds us why we're passionate about connecting dog owners
                  with the best services across Ireland. From veterinary care to dog-friendly
                  cafés, we've got everything covered for you and your canine companion.
                </p>
                <Link to="/our-mascot" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 inline-block">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <MapSection />

        {/* Community Section */}
        <CommunitySection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
    </div>
  );
};

export default HomePage;
