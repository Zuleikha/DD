import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, ChevronDown, ChevronUp,Search, PawPrint, Bone, ArrowLeft, Heart } from 'lucide-react';
import SEO from '../components/common/SEO';
import BackToHomeButton from '../components/common/BackToHomeButton';
import ListingCard from '../components/listings/ListingCard';

import { parksData } from '../data/parks_data';

// Import only the 5 images that exist
import parkHero from '../assets/images/parks/phero.png';
import parkImage1 from '../assets/images/parks/park_generic_1.png';
import parkImage2 from '../assets/images/parks/park_generic_2.png';
import parkImage3 from '../assets/images/parks/park_generic_3.png';
import parkImage4 from '../assets/images/parks/park_generic_4.png';
import parkImage5 from '../assets/images/parks/park_generic_5.png';
interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}

const ParksPage: React.FC = () => {
  const [selectedCounty, setSelectedCounty] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  // SVG Paw Print Component
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

  // SVG Bone Component
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

  // Get unique counties for filter
  const counties: string[] = ['All', ...new Set(parksData.map((park: Park) => park.county).filter((county): county is string => Boolean(county)))];

  // Filter parks by county
  const filteredParks = selectedCounty === 'All' 
    ? parksData 
    : parksData.filter((park: Park) => park.county === selectedCounty);

  // Show only 6 parks initially, or all if showAll is true
  const displayedParks = showAll ? filteredParks : filteredParks.slice(0, 6);
  const hasMoreParks = filteredParks.length > 6;

  // Get the appropriate image for each park - only use the 5 images that exist
  const getGenericImage = (index: number): string => {
    const images = [parkImage1, parkImage2, parkImage3, parkImage4, parkImage5];
    return images[index % images.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog-Friendly Parks in Ireland | DogDays.ie"
        description="Discover beautiful dog-friendly parks and walking trails across Ireland. Find the perfect outdoor spaces for you and your furry friend."
        canonicalUrl="https://www.dogdays.ie/parks"
      />

      {/* Responsive Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${parkHero})`
          }}
        ></div>

        {/* Background decorative elements with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 sm:top-8 md:top-10 left-4 sm:left-8 md:left-10 animate-pulse">
            <PawPrint size={40} opacity={0.3} className="animate-bounce text-white sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div className="absolute top-8 sm:top-12 md:top-20 right-8 sm:right-12 md:right-20 animate-pulse" style={{animationDelay: '1s'}}>
            <Bone size={30} opacity={0.3} className="animate-bounce text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/4 animate-pulse" style={{animationDelay: '2s'}}>
            <PawPrint size={60} opacity={0.2} className="animate-bounce text-white sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-10 animate-pulse" style={{animationDelay: '0.5s'}}>
            <Bone size={40} opacity={0.3} className="animate-bounce text-white sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BackToHomeButton variant="light" />
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Dog-Friendly Parks
              </h1>
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
              Discover beautiful outdoor spaces and walking trails perfect for you and your furry friend
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Filter Section */}
      <section className="py-6 sm:py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <PawPrint size={20} opacity={0.6} className="text-green-500 sm:w-6 sm:h-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                {filteredParks.length} {filteredParks.length === 1 ? 'Park' : 'Parks'} Found
              </h2>
            </div>
            
            <div className="w-full sm:w-auto">
              <select
                value={selectedCounty}
                onChange={(e) => {
                  setSelectedCounty(e.target.value);
                  setShowAll(false);
                }}
                className="w-full sm:w-64 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
              >
                {counties.map((county) => (
                  <option key={county} value={county}>
                    {county === 'All' ? 'All Counties' : county}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Parks Grid */}
      <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none text-gray-200">
          <div className="absolute top-8 sm:top-12 md:top-16 left-8 sm:left-12 md:left-16">
            <Bone size={35} opacity={0.2} className="text-green-200 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          <div className="absolute top-20 sm:top-32 md:top-40 right-12 sm:right-16 md:right-20">
            <PawPrint size={30} opacity={0.2} className="text-green-200 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-1/4">
            <PawPrint size={40} opacity={0.2} className="text-green-200 sm:w-11 sm:h-11 md:w-14 md:h-14" />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16">
            <Bone size={25} opacity={0.2} className="text-green-200 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayedParks.map((park: Park, index: number) => (
              <div key={park.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <img
                    src={getGenericImage(index)}
                    alt={park.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white rounded-full p-1 sm:p-2 shadow-md">
                    <PawPrint size={16} opacity={0.8} className="text-green-500 sm:w-5 sm:h-5" />
                  </div>
                  {park.size && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {park.size}
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                      {park.name}
                    </h3>
                    <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-medium text-yellow-700">{park.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 mb-2 sm:mb-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-600">{park.address}</p>
                  </div>
                  
                  <div className="inline-block bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {park.county}
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                    {park.description}
                  </p>
                  
                  {park.leashRules && (
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <Bone size={16} opacity={0.6} className="text-green-500 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm text-gray-600">{park.leashRules}</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link
                      to={`/parks/${park.id}`}
                      className="flex-1 bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-center text-sm sm:text-base font-medium"
                    >
                      View Details
                    </Link>
                    {park.hours && (
                      <div className="flex items-center justify-center bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm">Open</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive Show More Button */}
          {hasMoreParks && !showAll && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors group text-base sm:text-lg font-semibold"
              >
                <PawPrint size={18} className="mr-2 sm:mr-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                Show More Parks ({filteredParks.length - 6} more)
                <ChevronDown size={18} className="ml-2 sm:ml-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
              </button>
            </div>
          )}

          {showAll && hasMoreParks && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-700 transition-colors group text-base sm:text-lg font-semibold"
              >
                <PawPrint size={18} className="mr-2 sm:mr-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                Show Less
                <ChevronUp size={18} className="ml-2 sm:ml-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ParksPage;

