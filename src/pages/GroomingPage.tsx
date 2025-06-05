import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import groomingData from '../data/grooming_data.js';
import ListingCard from '../components/listings/ListingCard';
import heroImage from '../assets/images/grooming/h.png';

// Import generic grooming images
import groomingImage1 from '../assets/images/grooming/grooming_generic_1.png';
import groomingImage2 from '../assets/images/grooming/grooming_generic_2.png';
import groomingImage3 from '../assets/images/grooming/grooming_generic_3_new.png';

const GroomingPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredGroomers, setFilteredGroomers] = useState(groomingData);
  const [showAll, setShowAll] = useState<boolean>(false);
  
  // Generic images array
  const genericImages = [groomingImage1, groomingImage2, groomingImage3];
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(groomingData.map(groomer => groomer.county))).sort();

  // Filter groomers when search term or county changes
  useEffect(() => {
    let results = groomingData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(groomer => 
        groomer.name.toLowerCase().includes(term) || 
        groomer.description.toLowerCase().includes(term) ||
        groomer.services.some(service => service.toLowerCase().includes(term)) ||
        // Use optional chaining for specialties
        groomer.specialties?.some(specialty => specialty.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(groomer => groomer.county === selectedCounty);
    }
    
    setFilteredGroomers(results);
    setShowAll(false); // Reset to show only 6 when filters change
  }, [searchTerm, selectedCounty]);

  // Function to get generic image for each groomer
  const getGenericImage = (index: number) => {
    return genericImages[index % genericImages.length];
  };

  // Determine how many groomers to display
  const groomersToShow = showAll ? filteredGroomers : filteredGroomers.slice(0, 6);
  const hasMoreGroomers = filteredGroomers.length > 6;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optimized Hero Section */}
      <div className="relative w-full h-[600px] mb-8 overflow-hidden">
        <img
          src={heroImage}
          alt="Professional dog grooming services"
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            objectPosition: 'center top'
          }}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Professional Dog Grooming
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Expert care for your furry friend's grooming needs across Ireland
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, service, or specialty..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* County Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Information Section */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8 border border-purple-100">
          <h2 className="text-xl font-semibold mb-3 text-purple-800">About Professional Dog Grooming</h2>
          <p className="text-gray-700 mb-4">
            Professional dog grooming services help keep your dog clean, healthy, and looking their best.
            Regular grooming is essential for maintaining your dog's coat, skin health, and overall wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-purple-700">Expert Coat Care</h3>
              <p className="text-gray-600">Professional brushing, bathing, and trimming to maintain a healthy, beautiful coat</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-purple-700">Health & Wellness</h3>
              <p className="text-gray-600">Grooming helps detect skin issues, parasites, and other health concerns early</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-purple-700">Breed-Specific Services</h3>
              <p className="text-gray-600">Specialized care tailored to your dog's breed and coat type requirements</p>
            </div>
          </div>
        </div>
        
        {/* Results Count - Added at top of cards */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {filteredGroomers.length} Grooming {filteredGroomers.length === 1 ? 'Service' : 'Services'} Found
          </h2>
          <p className="text-gray-600">
            {selectedCounty ? `in ${selectedCounty}` : 'across Ireland'}
            {searchTerm ? ` matching "${searchTerm}"` : ''}
            {!showAll && hasMoreGroomers ? ` (showing first 6)` : ''}
          </p>
        </div>
        
        {/* Groomers Grid */}
        {groomersToShow.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {groomersToShow.map((groomer, index) => (
                <ListingCard
                  key={groomer.id}
                  id={groomer.id}
                  name={groomer.name}
                  image={getGenericImage(index)}
                  rating={groomer.rating}
                  reviewCount={groomer.reviewCount}
                  description={groomer.description}
                  county={groomer.county}
                  category="grooming"
                />
              ))}
            </div>
            
            {/* Show More/Show Less Button */}
            {hasMoreGroomers && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium"
                >
                  {showAll ? 'Show Less' : `Show More (${filteredGroomers.length - 6} more)`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No grooming services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or selecting a different county.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCounty('');
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroomingPage;

