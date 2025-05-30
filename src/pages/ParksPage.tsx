import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import parksData from './parks_data.js';

// Define interface for park objects
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
  image: string;
  amenities: string[];
  leashRules: string;
  size: string;
  hours: string;
}

const ParksPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredParks, setFilteredParks] = useState<Park[]>(parksData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(parksData.map(park => park.county))).sort();

  // Filter parks when search term or county changes
  useEffect(() => {
    let results = parksData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(park => 
        park.name.toLowerCase().includes(term) || 
        park.description.toLowerCase().includes(term) ||
        park.amenities.some(amenity => amenity.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(park => park.county === selectedCounty);
    }
    
    setFilteredParks(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog-Friendly Parks & Walks in Ireland</h1>
        <p className="text-gray-600">Discover the best parks and walking trails for you and your dog</p>
      </div>
      
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
              placeholder="Search by name, amenity, or description..."
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
      <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog-Friendly Parks & Walks</h2>
        <p className="text-gray-700 mb-4">
          Dog-friendly parks and walking trails provide the perfect opportunity for exercise and socialization for your canine companion. 
          From off-leash areas to scenic walking routes, Ireland offers a variety of outdoor spaces where dogs are welcome.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Leash Rules</h3>
            <p className="text-gray-600">Always check the park's leash requirements before visiting, as they vary by location</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Amenities</h3>
            <p className="text-gray-600">Many parks offer water stations, waste bins, and dedicated dog play areas</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Etiquette</h3>
            <p className="text-gray-600">Always clean up after your dog and respect other park users and wildlife</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredParks.length} parks and walks
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Parks Grid */}
      {filteredParks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParks.map((park) => (
            <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <img 
                src={park.image} 
                alt={park.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{park.name}</h2>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{park.address}</span>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{park.rating.toFixed(1)}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-gray-600">{park.reviewCount} reviews</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{park.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {park.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                  {park.amenities.length > 3 && (
                    <span className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-full">
                      +{park.amenities.length - 3} more
                    </span>
                  )}
                </div>
                <Link 
                  to={`/park-detail/${park.id}`} 
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No parks or walks found</h3>
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
  );
};

export default ParksPage;
