import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { parksData } from '../data/parks_data';

// Import only the 5 images that exist
import parkHero from '../assets/images/parks/park_hero.png';
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

  // Get unique counties for filter
  const counties: string[] = ['All', ...new Set(parksData.map((park: Park) => park.county).filter((county): county is string => Boolean(county)))];

  // Filter parks by county
  const filteredParks = selectedCounty === 'All' 
    ? parksData 
    : parksData.filter((park: Park) => park.county === selectedCounty);

  // Show only 6 parks initially, or all if showAll is true
  const displayedParks = showAll ? filteredParks : filteredParks.slice(0, 6);

  // Get the appropriate image for each park - only use the 5 images that exist
  const getGenericImage = (index: number): string => {
    const images = [parkImage1, parkImage2, parkImage3, parkImage4, parkImage5];
    return images[index % images.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - No Green Overlay */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={parkHero} 
            alt="Dogs playing in Irish park" 
            className="w-full h-full object-cover"
            style={{
              imageRendering: '-webkit-optimize-contrast'
            }}
            loading="eager"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Dog-Friendly Parks</h1>
            <p className="text-xl mb-6 drop-shadow-md">Discover the best parks in Ireland for you and your furry friend</p>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-6 py-3 inline-block">
              <span className="text-2xl font-semibold text-gray-800">{filteredParks.length} Parks Found</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <label htmlFor="county-filter" className="text-lg font-medium text-gray-700">
              Filter by County:
            </label>
            <select
              id="county-filter"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </div>
          
          <div className="text-lg text-gray-600">
            Showing {displayedParks.length} of {filteredParks.length} parks
          </div>
        </div>

        {/* Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedParks.map((park: Park, index: number) => (
            <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={getGenericImage(index)}
                  alt={park.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{park.name}</h3>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded-full ml-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm font-medium text-green-800">{park.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-2">{park.address}</p>
                <p className="text-sm text-green-600 font-medium mb-3">{park.county}</p>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{park.description}</p>
                
                {/* Amenities */}
                {park.amenities && park.amenities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {park.amenities.slice(0, 3).map((amenity: string, index: number) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                      {park.amenities.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{park.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Contact Info */}
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  {park.phone && (
                    <p><span className="font-medium">Phone:</span> {park.phone}</p>
                  )}
                  {park.size && (
                    <p><span className="font-medium">Size:</span> {park.size}</p>
                  )}
                  {park.leashRules && (
                    <p><span className="font-medium">Leash Rules:</span> {park.leashRules}</p>
                  )}
                </div>
                
                {/* Hours */}
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Hours:</span> {park.hours}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/parks/${park.id}`}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium text-center"
                  >
                    View Details
                  </Link>
                  {park.website && (
                    <a
                      href={park.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-center"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredParks.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-lg"
            >
              {showAll ? 'Show Less' : `Show All ${filteredParks.length} Parks`}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredParks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">No parks found in {selectedCounty}</div>
            <button
              onClick={() => setSelectedCounty('All')}
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Show All Parks
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParksPage;

