import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, Smile, CupSoda, MapPin, PawPrint, Users, MessageCircleQuestion, ShoppingBag } from 'lucide-react';
import SEO from '../components/common/SEO';

import dogImage from '../assets/images/dog.jpg';
import dp2Image from '../assets/images/dp2.jpg'; // Import the new hero image

import HeroSection from '../components/home/HeroSection';
import MapSection from '../components/home/MapSection';
import CommunitySection from '../components/home/CommunitySection';
import NewsletterSection from '../components/home/NewsletterSection';

// Enhanced Paw Print Component with Animation
const HeroPawPrint: React.FC<{ size: number; opacity: number; className?: string }> = ({ size, opacity, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="white" 
    stroke="rgba(255,255,255,0.9)"
    strokeWidth="1"
    className={`animate-pulse ${className}`}
    style={{ 
      opacity, 
      filter: 'brightness(2) contrast(1.5) drop-shadow(0 2px 8px rgba(255,255,255,0.4))'
    }}
  >
    <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7z"/>
    <path d="M8 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
    <path d="M16 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
    <path d="M12 18c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
    <path d="M6 14c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
    <path d="M18 14c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
  </svg>
);

// Enhanced Bone Component with Animation
const HeroBone: React.FC<{ size: number; opacity: number; className?: string }> = ({ size, opacity, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="white" 
    stroke="rgba(255,255,255,0.9)"
    strokeWidth="1"
    className={`animate-bounce ${className}`}
    style={{ 
      opacity, 
      filter: 'brightness(2) contrast(1.5) drop-shadow(0 2px 8px rgba(255,255,255,0.4))'
    }}
  >
    <path d="M17 4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z"/>
    <circle cx="7" cy="7" r="2"/>
    <circle cx="17" cy="7" r="2"/>
    <circle cx="7" cy="17" r="2"/>
    <circle cx="17" cy="17" r="2"/>
    <path d="M7 12h10"/>
  </svg>
);

// Regular Paw Print Component
const Bone: React.FC<{ size: number; opacity: number; className?: string }> = ({ size, opacity, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ opacity }}>
    <path d="M17 4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z"/>
    <circle cx="7" cy="7" r="2"/>
    <circle cx="17" cy="7" r="2"/>
    <circle cx="7" cy="17" r="2"/>
    <circle cx="17" cy="17" r="2"/>
    <path d="M7 12h10"/>
  </svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dog Days Ireland - Your Complete Guide to Dog-Friendly Ireland"
        description="Discover the best dog-friendly places, services, and activities across Ireland. Find vets, parks, restaurants, grooming, training, and more for you and your furry friend."
        keywords="dog friendly Ireland, pet services Ireland, dog parks, veterinarians, dog grooming, pet training"
      />
      
      {/* Updated Hero Section with dp2.jpg Background Image */}
      <section 
        className="relative text-white py-20 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{
          //backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1), rgba(219, 39, 119, 0.1)), url(${dp2Image})`,
          //backgroundImage: `linear-gradient(rgba(120, 53, 15, 0.4), rgba(245, 158, 11, 0.3)), url(${dp2Image})`,
          backgroundImage: `linear-gradient(rgba(88, 28, 135, 0.4), rgba(67, 56, 202, 0.3)), url(${dp2Image})`,
          //backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.5), rgba(30, 64, 175, 0.3)), url(${dp2Image})`,



          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced floating paw prints and bones with whiter appearance */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hero-specific enhanced paw prints */}
          <div className="absolute top-10 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <HeroPawPrint size={40} opacity={0.6} />
          </div>
          <div className="absolute top-20 right-20 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <HeroBone size={35} opacity={0.5} />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <HeroPawPrint size={45} opacity={0.6} />
          </div>
          <div className="absolute bottom-10 right-10 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
            <HeroBone size={30} opacity={0.5} />
          </div>
          <div className="absolute top-1/2 left-5 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
            <HeroPawPrint size={35} opacity={0.5} />
          </div>
          <div className="absolute top-1/3 right-5 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '4s' }}>
            <HeroBone size={25} opacity={0.5} />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Dog Days Ireland
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Your ultimate guide to dog-friendly places, services, and adventures across the Country
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/parks" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              <PawPrint className="mr-2 h-5 w-5" />
              Explore Parks
            </Link>
            <Link 
              to="/vets" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Services
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Meet Our Mascot Section with Smaller Image */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Section - Now takes more space */}
            <div className="lg:w-3/5">
              <div className="flex items-center space-x-4 mb-6">
                <PawPrint size={30} opacity={0.3} className="text-purple-500" />
                <h2 className="text-3xl font-bold text-gray-800">Meet Our Mascot</h2>
                <PawPrint size={30} opacity={0.3} className="text-purple-500" />
              </div>
              <div className="flex justify-start space-x-3 mb-6">
                <Bone size={20} opacity={0.4} className="text-purple-400" />
                <Bone size={20} opacity={0.4} className="text-purple-400" />
                <Bone size={20} opacity={0.4} className="text-purple-400" />
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Meet Buddy, our adorable mascot who represents the joy and companionship that dogs bring to our lives. 
                Buddy loves exploring Ireland's beautiful landscapes and discovering new dog-friendly places.
              </p>
              <p className="text-gray-600 mb-8">
                Join Buddy on his adventures as we help you and your furry friend discover the best that Ireland has to offer. 
                From scenic walks to cozy cafes, we're here to make every day a perfect dog day!
              </p>
              <Link 
                to="/about-mascot"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <PawPrint className="mr-2 h-5 w-5" />
                Learn More About Us
              </Link>
            </div>
            
            {/* Image Section - Now smaller and more balanced */}
            <div className="lg:w-2/5">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={dogImage} 
                  alt="Friendly dog representing Dog Days Ireland" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -top-4 -right-4">
                  <PawPrint size={50} opacity={0.2} className="text-purple-500 animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Bone size={40} opacity={0.2} className="text-purple-400 animate-bounce" />
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-gray-600 text-sm">Find professional grooming services to keep your dog looking great</p>
              </div>
            </Link>

            {/* Dog-Friendly Places */}
            <Link to="/places" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <CupSoda className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  Dog-Friendly Places
                  <Bone size={16} opacity={0.3} className="ml-2 text-indigo-500 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-600 text-sm">Discover restaurants, cafes, and venues that welcome dogs</p>
              </div>
            </Link>

            {/* Pet Shops */}
            <Link to="/petshops" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <ShoppingBag className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  Pet Shops
                  <PawPrint size={16} opacity={0.3} className="ml-2 text-orange-500 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-600 text-sm">Find pet stores for all your dog's needs and supplies</p>
              </div>
            </Link>

            {/* Dog Minders */}
            <Link to="/minders" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <Users className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  Dog Minders
                  <Bone size={16} opacity={0.3} className="ml-2 text-teal-500 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-600 text-sm">Connect with trusted dog minders and pet sitters</p>
              </div>
            </Link>

            {/* Community & Advice */}
            <Link to="/advice" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <MessageCircleQuestion className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  Community & Advice
                  <PawPrint size={16} opacity={0.3} className="ml-2 text-red-500 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-600 text-sm">Get expert advice and connect with other dog owners</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;

