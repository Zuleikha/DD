import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, Smile, CupSoda, MapPin, PawPrint } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

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
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Find Dog-Friendly Services Across Ireland</h1>
              <p className="text-xl text-gray-600 mb-8">Everything you need for your furry friend in one place</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#services" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">Explore Services</a>
                <a href="#community" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">Join Community</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
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
        
        {/* Rest of your HomePage content... */}
      </main>
      
      <Footer />
    </div>
   );
};

export default HomePage;
