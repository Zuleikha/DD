import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import parksData from '../data/parks_data.js';
import heroImage from '../assets/images/parks/ph.jpg';
import ListingCard from '../components/listings/ListingCard';

// Define the Park interface to match your data structure
interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image?: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours?: string;
  lat?: number;
  lng?: number;
}

const ParksPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredParks, setFilteredParks] = useState<Park[]>(parksData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(parksData.map((park: Park) => park.county))).sort();

  // Filter parks when search term or county changes
  useEffect(() => {
    let results = parksData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter((park: Park) => 
        park.name.toLowerCase().includes(term) || 
        park.description.toLowerCase().includes(term) ||
        // Use optional chaining for amenities
        park.amenities?.some((amenity: string) => amenity.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter((park: Park) => park.county === selectedCounty);
    }
    
    setFilteredParks(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Made Bigger */}
      <div className="relative w-full h-[500px] mb-8">
        <img
          src={heroImage}
          alt="Beautiful park landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Dog Parks & Walks in Ireland</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Find the best parks and walking trails for you and your furry companion
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
                placeholder="Search by name or amenity..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county: string) => (
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
        <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog Parks & Walks</h2>
          <p className="text-gray-700 mb-4">
            Dog parks and walking trails provide essential exercise and socialization opportunities for your dog. 
            Finding the right outdoor space can make a big difference in your dog's happiness and wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-blue-700">Leash Rules</h3>
              <p className="text-gray-600">Always check if the park has off-leash areas or requires dogs to be leashed</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-blue-700">Amenities</h3>
              <p className="text-gray-600">Look for parks with water stations, waste bins, and secure fencing</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-blue-700">Park Etiquette</h3>
              <p className="text-gray-600">Always clean up after your dog and respect other park users</p>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredParks.length} parks & walks
            {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
            {searchTerm ? ` matching "${searchTerm}"` : ''}
          </p>
        </div>
        
        {/* Parks Grid - Cards without images */}
        {filteredParks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredParks.map((park: Park) => (
              <ListingCard
                key={park.id}
                id={park.id}
                name={park.name}
                image= ""
                rating={park.rating}
                reviewCount={park.reviewCount}
                description={park.description}
                county={park.county}
                category="parks"
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No parks found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or selecting a different county.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCounty('');
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParksPage;

