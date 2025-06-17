import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Clock, Smile, CupSoda, MapPin, PawPrint, Users, MessageCircleQuestion, ShoppingBag, Heart } from 'lucide-react';
import SEO from '../components/common/SEO';
import AdvertiseForm from "../components/home/AdvertiseForm";

import dogImage from '../assets/images/dog.jpg';
import dp2Image from '../assets/images/dp2.jpg'; // Import the new hero image

import HeroSection from '../components/home/HeroSection';
import MapSection from '../components/home/MapSection';
import CommunitySection from '../components/home/CommunitySection';
import NewsletterSection from '../components/home/NewsletterSection';

// Regular Paw Print Component (keeping this for services section)
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
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Dog Days Ireland - Your Complete Guide to Dog-Friendly Ireland"
        description="Discover the best dog-friendly places, services, and activities across Ireland. Find vets, parks, restaurants, grooming, training, and more for you and your furry friend."
        keywords="dog friendly Ireland, pet services Ireland, dog parks, veterinarians, dog grooming, pet training"
      />
      
      {/* HeroSection Component with Working Buttons */}
      <HeroSection />
	  <div className="text-center text-sm text-gray-500 mt-4">
  🚧 	We are still working on this site, Please report any issues email: {'dogdays.ie@gmail.com'}
		<a href="mailto:dogdays.ie@gmail.com" className="underline">
		</a>.
	</div>

      {/* Enhanced Services Section with Paw Accents */}
      <section id="services" className="py-16 bg-cream-200 relative overflow-hidden">
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
            <Link to="/vets" className="group bg-blue-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/parks" className="group bg-green-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/nutrition" className="group bg-yellow-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/training" className="group bg-purple-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/grooming" className="group bg-pink-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/places" className="group bg-indigo-100  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/petshops" className="group bg-orange-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/minders" className="group bg-teal-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <Link to="/advice" className="group bg-red-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <MessageCircleQuestion className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  Community & Advice
                  <PawPrint size={16} opacity={0.3} className="ml-2 text-red-500 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-600 text-sm">Get expert advice and connect with the dog-loving community</p>
              </div>
            </Link>
          </div>

          {/* Form appears below the grid when advertise button is clicked */}
          {showForm && (
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-lg">
                <AdvertiseForm onClose={() => setShowForm(false)} />
              </div>
            </div>
          )}

          {/* Meet Our Mascot & Advertise Section - Side by Side */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
              
              {/* Meet Our Mascot Card */}
              <Link to="/mascot" className="group relative bg-gradient-to-r from-indigo-600 via-teal-400 to-amber-300 text-white py-16 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative p-8 text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 transition-colors">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-center">
                    Meet Our Mascot
                    <PawPrint size={20} className="ml-2 group-hover:animate-bounce" />
                  </h3>
                  
                  <p className="text-white/90 text-sm mb-4">
                    Get to know our adorable furry friend who represents the spirit of Dog Days Ireland!
                  </p>
                  
                  <div className="inline-flex items-center text-white font-semibold">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Advertise Here Card - Same size and styling as Mascot */}
              <div
                onClick={() => setShowForm(true)}
                className="group relative bg-gradient-to-r from-blue-400 via-orange-300 to-yellow-400 text-white py-16 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative p-8 text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 transition-colors">
                    {/* Dog SVG Icon */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="12" cy="12" r="10" fill="#fff" stroke="#333" strokeWidth="2" />
                      <ellipse cx="8.5" cy="10.5" rx="1.5" ry="2" fill="#333" />
                      <ellipse cx="15.5" cy="10.5" rx="1.5" ry="2" fill="#333" />
                      <ellipse cx="12" cy="15" rx="2" ry="1.2" fill="#333" />
                      <ellipse cx="6.5" cy="7.5" rx="2.5" ry="1.5" fill="#f4a460" />
                      <ellipse cx="17.5" cy="7.5" rx="2.5" ry="1.5" fill="#f4a460" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-center">
                    Advertise Here
                    <PawPrint size={20} className="ml-2 group-hover:animate-bounce" />
                  </h3>
                  
                  <p className="text-white/90 text-sm mb-4">
                    Promote your dog service for FREE and reach more customers across Ireland!
                  </p>
                  
                  <div className="inline-flex items-center text-white font-semibold">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* All Other Sections */}
      <MapSection />
      <CommunitySection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;

