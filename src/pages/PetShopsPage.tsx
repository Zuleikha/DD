import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, PawPrint, Bone, ArrowLeft, ChevronDown, ChevronUp, MapPin, Star, Phone, Globe, Truck } from 'lucide-react';
import SEO from '../components/common/SEO';
import petShopsData, { PetShop } from '../data/petshops_data';

// Import pet shop images
import petshopHero from '../assets/images/petshops/petshop_hero.png';
import petshopGeneric1 from '../assets/images/petshops/petshop_generic_1.png';
import petshopGeneric2 from '../assets/images/petshops/petshop_generic_2.png';
import petshopGeneric3 from '../assets/images/petshops/petshop_generic_3.png';
import petshopGeneric4 from '../assets/images/petshops/petshop_generic_4.png';
import petshopGeneric5 from '../assets/images/petshops/petshop_generic_5.png';
import petshopGeneric6 from '../assets/images/petshops/petshop_generic_6.png';

const PetShopsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredShops, setFilteredShops] = useState<PetShop[]>(petShopsData);
  const [visibleShops, setVisibleShops] = useState(6);
  const [showAll, setShowAll] = useState(false);

  // Get unique counties for filter dropdown
  const counties = [...new Set(petShopsData.map(shop => shop.county))].sort();

  // Generic pet shop images array
  const getGenericImage = (index: number): string => {
    const images = [
      petshopGeneric1,
      petshopGeneric2,
      petshopGeneric3,
      petshopGeneric4,
      petshopGeneric5,
      petshopGeneric6
    ];
    return images[index % images.length];
  };

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

  useEffect(() => {
    // Filter shops based on search term and county filter
    const filtered = petShopsData.filter(shop => {
      const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           shop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           shop.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCounty = countyFilter === '' || shop.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredShops(filtered);
    setVisibleShops(6); // Reset to show 6 shops when filter changes
    setShowAll(false);
  }, [searchTerm, countyFilter]);

  const handleShowMore = () => {
    setVisibleShops(filteredShops.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleShops(6);
    setShowAll(false);
  };

  const displayedShops = showAll ? filteredShops : filteredShops.slice(0, visibleShops);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Trusted Pet Shops in Ireland | DogDays.ie"
        description="Discover trusted pet shops across Ireland. Find pet food, supplies, accessories and expert advice for your furry friends."
        canonicalUrl="https://www.dogdays.ie/petshops"
      />

      {/* Responsive Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${petshopHero})`
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
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-purple-200 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Explore Trusted Pet Shops in Ireland
              </h1>
              <PawPrint size={30} opacity={0.8} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <Bone size={20} opacity={0.6} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 max-w-2xl md:max-w-4xl mx-auto leading-relaxed text-white">
              Find quality pet supplies, food, and accessories from trusted retailers across Ireland. 
              Everything your furry friends need, from local stores to nationwide delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white shadow relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none text-gray-100">
          <div className="absolute top-2 sm:top-4 right-4 sm:right-8">
            <PawPrint size={25} opacity={0.3} className="text-indigo-200 sm:w-7 sm:h-7" />
          </div>
          <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8">
            <Bone size={20} opacity={0.3} className="text-indigo-200 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                placeholder="Search by name, service, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <select
                className="block w-full py-2 sm:py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                value={countyFilter}
                onChange={(e) => setCountyFilter(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Pet Shops Section */}
      <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none text-gray-200">
          <div className="absolute top-8 sm:top-12 md:top-16 left-8 sm:left-12 md:left-16">
            <Bone size={35} opacity={0.2} className="text-indigo-200 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          <div className="absolute top-20 sm:top-32 md:top-40 right-12 sm:right-16 md:right-20">
            <PawPrint size={30} opacity={0.2} className="text-indigo-200 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-1/4">
            <PawPrint size={40} opacity={0.2} className="text-indigo-200 sm:w-11 sm:h-11 md:w-14 md:h-14" />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16">
            <Bone size={25} opacity={0.2} className="text-indigo-200 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
            <PawPrint size={20} opacity={0.4} className="text-indigo-500 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              We've found {filteredShops.length} trusted {filteredShops.length === 1 ? 'Pet Shop' : 'Pet Shops'} across Ireland
            </h2>
            <PawPrint size={20} opacity={0.4} className="text-indigo-500 sm:w-6 sm:h-6" />
          </div>
          
          {filteredShops.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {displayedShops.map((shop, index) => (
                  <div key={shop.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="relative">
                      <img
                        src={getGenericImage(index)}
                        alt={shop.name}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white rounded-full p-1 sm:p-2 shadow-md">
                        <PawPrint size={16} opacity={0.8} className="text-indigo-500 sm:w-5 sm:h-5" />
                      </div>
                      {shop.delivers && (
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Truck size={12} className="mr-1" />
                          Delivers
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                          {shop.name}
                        </h3>
                        <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          <span className="text-xs sm:text-sm font-medium text-yellow-700">{shop.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2 mb-2 sm:mb-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-600">{shop.address}</p>
                      </div>
                      
                      <div className="inline-block bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        {shop.county}
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                        {shop.description}
                      </p>
                      
                      <div className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        <strong>Hours:</strong> {shop.hours}
                      </div>
                      
                      {shop.services && shop.services.length > 0 && (
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                          {shop.services.slice(0, 3).map((service, idx) => (
                            <span key={idx} className="inline-flex items-center bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                              <Bone size={12} className="mr-1" />
                              {service}
                            </span>
                          ))}
                          {shop.services.length > 3 && (
                            <span className="text-xs text-gray-500">+{shop.services.length - 3} more</span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <a
                          href={shop.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-indigo-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm sm:text-base font-medium flex items-center justify-center"
                        >
                          <Globe size={16} className="mr-2" />
                          Visit Website
                        </a>
                        <a
                          href={`tel:${shop.phone}`}
                          className="flex items-center justify-center bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                        >
                          <Phone size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Responsive Show More/Less Buttons */}
              {!showAll && filteredShops.length > 6 && (
                <div className="text-center mt-8 sm:mt-12">
                  <button
                    onClick={handleShowMore}
                    className="inline-flex items-center bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-700 transition-colors group text-base sm:text-lg font-semibold"
                  >
                    <PawPrint size={18} className="mr-2 sm:mr-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                    Show More Pet Shops ({filteredShops.length - 6} more)
                    <ChevronDown size={18} className="ml-2 sm:ml-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}

              {showAll && filteredShops.length > 6 && (
                <div className="text-center mt-8 sm:mt-12">
                  <button
                    onClick={handleShowLess}
                    className="inline-flex items-center bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-700 transition-colors group text-base sm:text-lg font-semibold"
                  >
                    <PawPrint size={18} className="mr-2 sm:mr-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                    Show Less
                    <ChevronUp size={18} className="ml-2 sm:ml-3 group-hover:animate-bounce sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-gray-100 p-6 sm:p-8 rounded-lg text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No pet shops found</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Try adjusting your search or filter criteria to find pet shops.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PetShopsPage;

