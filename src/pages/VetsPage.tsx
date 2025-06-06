import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, Globe, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import vetsData from '../data/vets_data';

// Import images using the same method as training page
import vetHero from '../assets/images/vets/vet_hero.png';
import vetImage1 from '../assets/images/vets/vet_generic_1.png';
import vetImage2 from '../assets/images/vets/vet_generic_3.png';
import vetImage3 from '../assets/images/vets/vet_generic_4.png';
import vetImage4 from '../assets/images/vets/vet_generic_5.png';
import vetImage5 from '../assets/images/vets/vet_generic_6.png';

// Define the Vet interface
interface Vet {
  id: number;
  name: string;
  address?: string;
  county?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  image?: string;
  services?: string[];
  specialties?: string[];
  hours?: string;
}

const VetsPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState('All');

  // Filter vets by county
  const filteredVets = selectedCounty === 'All' 
    ? vetsData 
    : vetsData.filter((vet: Vet) => vet.county === selectedCounty);

  // Get unique counties for filter
  const counties: string[] = ['All', ...new Set(vetsData.map((vet: Vet) => vet.county).filter((county): county is string => Boolean(county)))];

  // Show only 6 vets initially, or all if showAll is true
  const displayedVets = showAll ? filteredVets : filteredVets.slice(0, 6);
  const hasMoreVets = filteredVets.length > 6;

  // Generic vet images from your assets folder - same method as training page
  const getGenericImage = (index: number): string => {
    const images = [
      vetImage1,  // Veterinary clinic reception
      vetImage2,  // Surgery room
      vetImage3,  // Diagnostic equipment
      vetImage4,  // Pharmacy area
      vetImage5   // Examination room
    ];
    
    return images[index % images.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - same style as training page */}
      <div className="relative w-full h-[600px] mb-8 overflow-hidden">
        <img
          src={vetHero}
          alt="Professional veterinary care"
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Find Trusted Veterinarians</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover professional veterinary care for your beloved pets across Ireland
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 inline-block mt-6">
              <p className="text-lg font-semibold">
                {filteredVets.length} Veterinary {filteredVets.length === 1 ? 'Clinic' : 'Clinics'} Found
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
              <h2 className="text-2xl font-bold text-gray-800">Veterinary Clinics</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {filteredVets.length} {filteredVets.length === 1 ? 'clinic' : 'clinics'}
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
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vets Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {filteredVets.length} Veterinary Services Found
          </h2>
          <p className="text-gray-600">
            {selectedCounty !== 'All' ? `Professional veterinary clinics in ${selectedCounty}` : 'Professional veterinary clinics across Ireland'}
            {!showAll && filteredVets.length > 6 ? ` - Showing first 6 results` : ''}
          </p>
        </div>

        {/* Vets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedVets.map((vet: Vet, index: number) => (
            <div key={vet.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Vet Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={getGenericImage(index)} 
                  alt={vet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                  loading="lazy"
                />
              </div>
              
              {/* Vet Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">{vet.name}</h3>
                  {vet.rating && (
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{vet.rating}</span>
                    </div>
                  )}
                </div>

                {vet.address && (
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{vet.address}</p>
                  </div>
                )}

                {vet.county && (
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {vet.county}
                    </span>
                  </div>
                )}

                {vet.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{vet.description}</p>
                )}

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  {vet.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${vet.phone}`} className="text-sm text-blue-600 hover:underline">
                        {vet.phone}
                      </a>
                    </div>
                  )}
                  
                  {vet.email && vet.email.trim() && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href={`mailto:${vet.email}`} className="text-sm text-blue-600 hover:underline">
                        {vet.email}
                      </a>
                    </div>
                  )}
                  
                  {vet.website && vet.website.trim() && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <a 
                        href={vet.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>

                {/* Services Preview */}
                {vet.services && vet.services.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vet.services.slice(0, 3).map((service: string, index: number) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                      {vet.services.length > 3 && (
                        <span className="text-xs text-gray-500">+{vet.services.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* View Details Button */}
                <Link 
                  to={`/vets/${vet.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center block text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreVets && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {showAll ? (
                'Show Less'
              ) : (
                `Show More (${filteredVets.length - 6} more clinic${filteredVets.length - 6 !== 1 ? 's' : ''})`
              )}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredVets.length === 0 && (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No veterinary clinics found</h3>
            <p className="text-gray-600 mb-4">Try selecting a different county.</p>
            <button
              onClick={() => setSelectedCounty('All')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View all clinics
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VetsPage;

