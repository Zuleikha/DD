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
  // Enhanced White Paw Print Component for Hero Section
  const HeroPawPrint = ({ size = 24, className = "", opacity = 0.5 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="white" 
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="0.5"
      className={className}
      style={{ 
        opacity,
        filter: 'brightness(2) contrast(1.5) drop-shadow(0 2px 8px rgba(255,255,255,0.4))'
      }}
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 7C16.1 7 17 7.9 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 7.9 13.9 7 15 7ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM12 14C15.31 14 18 16.69 18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20C6 16.69 8.69 14 12 14Z"/>
    </svg>
  );

  // Enhanced White Bone Component for Hero Section
  const HeroBone = ({ size = 24, className = "", opacity = 0.5 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="white" 
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="0.5"
      className={className}
      style={{ 
        opacity,
        filter: 'brightness(2) contrast(1.5) drop-shadow(0 2px 8px rgba(255,255,255,0.4))'
      }}
    >
      <path d="M3.5 6C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9C4.33 9 5 8.33 5 7.5S4.33 6 3.5 6ZM20.5 6C19.67 6 19 6.67 19 7.5S19.67 9 20.5 9C21.33 9 22 8.33 22 7.5S21.33 6 20.5 6ZM3.5 15C2.67 15 2 15.67 2 16.5S2.67 18 3.5 18C4.33 18 5 17.33 5 16.5S4.33 15 3.5 15ZM20.5 15C19.67 15 19 15.67 19 16.5S19.67 18 20.5 18C21.33 18 22 17.33 22 16.5S21.33 15 20.5 15ZM6 7.5C6 8.88 7.12 10 8.5 10H15.5C16.88 10 18 8.88 18 7.5C18 6.12 16.88 5 15.5 5H8.5C7.12 5 6 6.12 6 7.5ZM6 16.5C6 17.88 7.12 19 8.5 19H15.5C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14H8.5C7.12 14 6 15.12 6 16.5Z"/>
    </svg>
  );

  // Regular Paw Print Component for other sections
  const PawPrint = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 7C16.1 7 17 7.9 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 7.9 13.9 7 15 7ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM12 14C15.31 14 18 16.69 18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20C6 16.69 8.69 14 12 14Z"/>
    </svg>
  );

  // Regular Bone Component for other sections
  const Bone = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M3.5 6C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9C4.33 9 5 8.33 5 7.5S4.33 6 3.5 6ZM20.5 6C19.67 6 19 6.67 19 7.5S19.67 9 20.5 9C21.33 9 22 8.33 22 7.5S21.33 6 20.5 6ZM3.5 15C2.67 15 2 15.67 2 16.5S2.67 18 3.5 18C4.33 18 5 17.33 5 16.5S4.33 15 3.5 15ZM20.5 15C19.67 15 19 15.67 19 16.5S19.67 18 20.5 18C21.33 18 22 17.33 22 16.5S21.33 15 20.5 15ZM6 7.5C6 8.88 7.12 10 8.5 10H15.5C16.88 10 18 8.88 18 7.5C18 6.12 16.88 5 15.5 5H8.5C7.12 5 6 6.12 6 7.5ZM6 16.5C6 17.88 7.12 19 8.5 19H15.5C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14H8.5C7.12 14 6 15.12 6 16.5Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Dog-Friendly Services Across Ireland"
        description="Find dog-friendly services across Ireland including vets, parks, grooming, nutrition, and training resources."
        canonicalUrl="https://www.dogdays.ie"
      />

      <main className="flex-grow">
        {/* Enhanced Hero Section with MUCH WHITER Paw Decorations */}
        <div className="relative">
          {/* Floating Paw Prints and Bones - Background Layer with Enhanced White */}
          <div className="absolute inset-0 pointer-events-none z-10">
            
            {/* Large Floating Paws - Much Whiter and More Visible */}
            <div className="absolute top-20 left-10 animate-pulse">
              <HeroPawPrint size={80} opacity={0.6} className="animate-bounce" />
            </div>
            <div className="absolute top-40 right-20 animate-pulse" style={{animationDelay: '1s'}}>
              <HeroPawPrint size={60} opacity={0.5} className="animate-bounce" />
            </div>
            <div className="absolute bottom-32 left-20 animate-pulse" style={{animationDelay: '2s'}}>
              <HeroPawPrint size={90} opacity={0.6} className="animate-bounce" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '0.5s'}}>
              <HeroPawPrint size={50} opacity={0.5} className="animate-bounce" />
            </div>
            
            {/* Floating Bones - Much Whiter and More Visible */}
            <div className="absolute top-60 left-1/4 animate-pulse" style={{animationDelay: '1.5s'}}>
              <HeroBone size={40} opacity={0.6} className="animate-bounce" />
            </div>
            <div className="absolute top-80 right-1/3 animate-pulse" style={{animationDelay: '2.5s'}}>
              <HeroBone size={50} opacity={0.5} className="animate-bounce" />
            </div>
            <div className="absolute bottom-60 left-1/3 animate-pulse" style={{animationDelay: '3s'}}>
              <HeroBone size={35} opacity={0.6} className="animate-bounce" />
            </div>
            <div className="absolute top-32 right-1/4 animate-pulse" style={{animationDelay: '0.8s'}}>
              <HeroBone size={30} opacity={0.5} className="animate-bounce" />
            </div>
            
            {/* Small Scattered Elements - Enhanced White */}
            <div className="absolute top-1/4 left-1/2 animate-pulse" style={{animationDelay: '4s'}}>
              <HeroPawPrint size={30} opacity={0.5} className="animate-bounce" />
            </div>
            <div className="absolute top-3/4 right-1/2 animate-pulse" style={{animationDelay: '1.2s'}}>
              <HeroPawPrint size={40} opacity={0.6} className="animate-bounce" />
            </div>
            <div className="absolute top-1/2 left-10 animate-pulse" style={{animationDelay: '2.8s'}}>
              <HeroPawPrint size={25} opacity={0.5} className="animate-bounce" />
            </div>
            <div className="absolute top-1/3 right-16 animate-pulse" style={{animationDelay: '3.5s'}}>
              <HeroPawPrint size={35} opacity={0.6} className="animate-bounce" />
            </div>
            
            {/* Additional Corner Elements for Better Coverage */}
            <div className="absolute top-10 left-1/3 animate-pulse" style={{animationDelay: '5s'}}>
              <HeroBone size={25} opacity={0.5} className="animate-bounce" />
            </div>
            <div className="absolute bottom-10 right-1/3 animate-pulse" style={{animationDelay: '6s'}}>
              <HeroPawPrint size={45} opacity={0.6} className="animate-bounce" />
            </div>
          </div>

          {/* Original Hero Section */}
          <HeroSection pageType="listings" gradientClass="bg-mesh-gradient-home" />
        </div>

        {/* Enhanced Dog Image Feature Section */}
        <section className="py-12 bg-amber-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none text-gray-300">
            <div className="absolute top-10 right-10">
              <PawPrint size={60} opacity={0.05} />
            </div>
            <div className="absolute bottom-10 left-10">
              <Bone size={50} opacity={0.05} />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg relative">
                  <img
                    src={dogImage}
                    alt="Adorable dog with yellow flower"
                    className="w-full h-auto"
                  />
                  {/* Cute paw overlay on image */}
                  <div className="absolute top-4 right-4">
                    <PawPrint size={30} opacity={0.8} className="text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <PawPrint size={25} opacity={0.4} className="text-purple-500 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Meet Our Mascot</h2>
                  <PawPrint size={25} opacity={0.4} className="text-purple-500 ml-3" />
                </div>
                <div className="flex justify-start space-x-2 mb-4">
                  <Bone size={18} opacity={0.3} className="text-purple-400" />
                  <Bone size={18} opacity={0.3} className="text-purple-400" />
                  <Bone size={18} opacity={0.3} className="text-purple-400" />
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  This adorable pup represents all the happy, healthy dogs across Ireland who benefit from our comprehensive directory of dog-friendly services. From veterinary care to fun outings, we're here to help you and your furry friend live your best life together.
                </p>
                <Link 
                  to="/about-mascot" 
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors group"
                >
                  <Bone size={18} className="mr-2 group-hover:animate-bounce" />
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section with Paw Accents */}
        <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
          {/* Subtle background decorations */}
          <div className="absolute inset-0 pointer-events-none text-gray-200">
            <div className="absolute top-10 left-10">
              <PawPrint size={40} opacity={0.05} />
            </div>
            <div className="absolute top-20 right-20">
              <Bone size={35} opacity={0.05} />
            </div>
            <div className="absolute bottom-20 left-1/4">
              <PawPrint size={45} opacity={0.05} />
            </div>
            <div className="absolute bottom-10 right-10">
              <Bone size={30} opacity={0.05} />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <PawPrint size={30} opacity={0.3} className="text-purple-500" />
                <h2 className="text-3xl font-bold text-gray-800">Explore Dog-Friendly Ireland</h2>
                <PawPrint size={30} opacity={0.3} className="text-purple-500" />
              </div>
              <div className="flex justify-center space-x-3">
                <Bone size={20} opacity={0.4} className="text-purple-400" />
                <Bone size={20} opacity={0.4} className="text-purple-400" />
                <Bone size={20} opacity={0.4} className="text-purple-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Find a Vet */}
              <Link to="/vets" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Find a Vet
                    <PawPrint size={16} opacity={0.3} className="ml-2 text-blue-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Locate trusted veterinary services across Ireland for your dog</p>
                </div>
              </Link>

              {/* Parks & Walks */}
              <Link to="/parks" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <PawPrint className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Parks & Walks
                    <Bone size={16} opacity={0.3} className="ml-2 text-green-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Discover the best parks and walking trails for you and your dog</p>
                </div>
              </Link>

              {/* Nutrition */}
              <Link to="/nutrition" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                    <Coffee className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Nutrition
                    <PawPrint size={16} opacity={0.3} className="ml-2 text-yellow-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Find the best food options and dietary advice for your dog</p>
                </div>
              </Link>

              {/* Dog Training */}
              <Link to="/training" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Dog Training
                    <Bone size={16} opacity={0.3} className="ml-2 text-purple-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Connect with professional dog trainers and behavior specialists</p>
                </div>
              </Link>

              {/* Grooming */}
              <Link to="/grooming" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                    <Smile className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Grooming
                    <PawPrint size={16} opacity={0.3} className="ml-2 text-pink-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Find top-rated dog groomers and grooming services near you</p>
                </div>
              </Link>

              {/* Dog-Friendly Places */}
              <Link to="/places" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                    <CupSoda className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Dog-Friendly Places
                    <Bone size={16} opacity={0.3} className="ml-2 text-red-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Discover restaurants, cafes, and hotels that welcome dogs</p>
                </div>
              </Link>

              {/* Find Dog Minders */}
              <Link to="/minders" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                    <Users className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Find Dog Minders
                    <PawPrint size={16} opacity={0.3} className="ml-2 text-indigo-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Connect with trusted dog minders and sitters across Ireland</p>
                </div>
              </Link>

              {/* Advice from Chat Bot */}
              <Link to="/advice" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                    <MessageCircleQuestion className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    Advice from Chat Bot
                    <Bone size={16} opacity={0.3} className="ml-2 text-teal-500 group-hover:animate-bounce" />
                  </h3>
                  <p className="text-gray-600 text-sm">Get instant answers to your dog care questions from our AI assistant</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <MapSection />
        <CommunitySection />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default HomePage;

