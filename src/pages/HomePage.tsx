import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, Smile, CupSoda, MapPin, PawPrint } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import dogImage from '../assets/images/dog.jpg';

// --- NEW IMPORTS FOR HOME PAGE SECTIONS ---
import HeroSection from '../components/home/HeroSection'; // New: Importing HeroSection component
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
      
      <Header />
      
      <main className="flex-grow">
        {/* --- REPLACED: Hero Section (now using component) --- */}
        <HeroSection />

        {/* --- NEW SECTION: Featured Categories --- */}
        <FeaturedCategories />
        
        {/* Dog Image Feature Section (existing) */}
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
                <Link to="/about" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 inline-block">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section (existing) */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vet Card */}
              <Link to="/vets" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Find a Vet</h3>
                  <p className="text-gray-600">Locate trusted veterinary services across Ireland for your dog</p>
                </div>
              </Link>
              
              {/* Parks Card */}
              <Link to="/parks" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <PawPrint className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Parks & Walks</h3>
                  <p className="text-gray-600">Discover the best parks and walking trails for you and your dog</p>
                </div>
              </Link>
              
              {/* Nutrition Card */}
              <Link to="/nutrition" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Nutrition</h3>
                  <p className="text-gray-600">Find the best food options and dietary advice for your dog</p>
                </div>
              </Link>
              
              {/* Training Card */}
              <Link to="/training" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dog Training</h3>
                  <p className="text-gray-600">Connect with professional dog trainers and behavior specialists</p>
                </div>
              </Link>
              
              {/* Grooming Card */}
              <Link to="/grooming" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Smile className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Grooming</h3>
                  <p className="text-gray-600">Find top-rated dog groomers and grooming services near you</p>
                </div>
              </Link>
              
              {/* Places Card */}
              <Link to="/places" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <CupSoda className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dog-Friendly Places</h3>
                  <p className="text-gray-600">Discover restaurants, cafes, and hotels that welcome dogs</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: Map Section (assuming a map component from previous discussions) --- */}
        <MapSection />

        {/* --- NEW SECTION: Community Section --- */}
        <CommunitySection />

        {/* --- NEW SECTION: Newsletter Section --- */}
        <NewsletterSection />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;