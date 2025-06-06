import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';
import placesData from '../data/places_data';

// Import images using the same method as training page
import placeHero from '../assets/images/places/place_hero.png';
import placeImage1 from '../assets/images/places/place_generic_1.png';
import placeImage2 from '../assets/images/places/place_generic_2.png';
import placeImage3 from '../assets/images/places/place_generic_3.png';
import placeImage4 from '../assets/images/places/place_generic_4.png';
import placeImage5 from '../assets/images/places/place_generic_5.png';
import placeImage6 from '../assets/images/places/place_generic_6.png';

// Define the Place interface
interface Place {
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
  dogPolicy?: string;
  dogMenu: string[];
  dogAmenities: string[];
  hours: string;
}

const PlacesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState('All');

  // Filter places by county
  const filteredPlaces = selectedCounty === 'All' 
    ? placesData 
    : placesData.filter((place: Place) => place.county === selectedCounty);

  // Get unique counties for filter
  const counties: string[] = ['All', ...new Set(placesData.map((place: Place) => place.county).filter((county): county is string => Boolean(county)))];

  // Show only 6 places initially, or all if showAll is true
  const displayedPlaces = showAll ? filteredPlaces : filteredPlaces.slice(0, 6);
  const hasMorePlaces = filteredPlaces.length > 6;

  // Generic place images from your assets folder - same method as training page
  const getGenericImage = (index: number): string => {
    const images = [
      placeImage1,  // Irish pub interior
      placeImage2,  // Modern coffee shop
      placeImage3,  // Restaurant outdoor patio
      placeImage4,  // Brewery taproom
      placeImage5,  // Seaside restaurant
      placeImage6   // Rustic country pub
    ];
    
    return images[index % images.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - same style as training page */}
      <div className="relative w-full h-[600px] mb-8 overflow-hidden">
        <img
          src={placeHero}
          alt="Dog-friendly places in Ireland"
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Dog-Friendly Places</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover amazing cafes, restaurants, and pubs across Ireland where your dog is always welcome
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 inline-block mt-6">
              <p className="text-lg font-semibold">
                {filteredPlaces.length} Dog-Friendly {filteredPlaces.length === 1 ? 'Place' : 'Places'} Found
                {selectedCounty !== 'All' && ` in ${selectedCounty}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Dog-Friendly Places</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="county-filter" className="text-sm font-medium text-gray-700">
                Filter by County:
              </label>
              <select
                id="county-filter"
                value={selectedCounty}
                onChange={(e) => {
                  setSelectedCounty(e.target.value);
                  setShowAll(false); // Reset to show first 6 when filtering
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Places Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {filteredPlaces.length} Dog-Friendly Places Found
          </h2>
          <p className="text-gray-600">
            {selectedCounty !== 'All' ? `Amazing dog-friendly venues in ${selectedCounty}` : 'Amazing dog-friendly venues across Ireland'}
            {!showAll && filteredPlaces.length > 6 ? ` - Showing first 6 results` : ''}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedPlaces.map((place: Place, index: number) => (
            <div key={place.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Place Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={getGenericImage(index)} 
                  alt={place.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                  loading="lazy"
                />
              </div>
              
              {/* Place Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">{place.name}</h3>
                  {place.rating && (
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                    </div>
                  )}
                </div>

                {place.address && (
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{place.address}</p>
                  </div>
                )}

                {place.county && (
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {place.county}
                    </span>
                  </div>
                )}

                {place.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{place.description}</p>
                )}

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  {place.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${place.phone}`} className="text-sm text-green-600 hover:underline">
                        {place.phone}
                      </a>
                    </div>
                  )}
                  
                  {place.email && place.email.trim() && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href={`mailto:${place.email}`} className="text-sm text-green-600 hover:underline">
                        {place.email}
                      </a>
                    </div>
                  )}
                  
                  {place.website && place.website.trim() && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <a 
                        href={place.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-green-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                {/* Dog Amenities Preview */}
                {place.dogAmenities && place.dogAmenities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Dog Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {place.dogAmenities.slice(0, 3).map((amenity: string, index: number) => (
                        <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {place.dogAmenities.length > 3 && (
                        <span className="text-xs text-gray-500">+{place.dogAmenities.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Dog Menu Preview */}
                {place.dogMenu && place.dogMenu.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Dog Menu:</h4>
                    <div className="flex flex-wrap gap-1">
                      {place.dogMenu.slice(0, 2).map((item: string, index: number) => (
                        <span key={index} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {place.dogMenu.length > 2 && (
                        <span className="text-xs text-gray-500">+{place.dogMenu.length - 2} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Hours */}
                {place.hours && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-600">{place.hours.split(',')[0]}</span>
                    </div>
                  </div>
                )}

                {/* View Details Button */}
                <Link 
                  to={`/places/${place.id}`}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-center block text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMorePlaces && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {showAll ? (
                'Show Less'
              ) : (
                `Show More (${filteredPlaces.length - 6} more place${filteredPlaces.length - 6 !== 1 ? 's' : ''})`
              )}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredPlaces.length === 0 && (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No dog-friendly places found</h3>
            <p className="text-gray-600 mb-4">Try selecting a different county.</p>
            <button
              onClick={() => setSelectedCounty('All')}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              View all places
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesPage;

