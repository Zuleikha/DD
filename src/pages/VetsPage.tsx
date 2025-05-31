import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import vetsData from '../data/vets_data.js';
import ListingCard from '../components/listings/ListingCard';

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [filteredVets, setFilteredVets] = useState(vetsData);

  const counties = Array.from(new Set(vetsData.map(vet => vet.county))).sort();

  useEffect(() => {
    let results = vetsData;

    // Filter by search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      results = results.filter(vet =>
        vet.name.toLowerCase().includes(term) ||
        vet.description.toLowerCase().includes(term) ||
        vet.services?.some(service => service.toLowerCase().includes(term)) ||
        vet.specialties?.some(specialty => specialty.toLowerCase().includes(term))
      );
    }

    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(vet => vet.county === selectedCounty);
    }

    setFilteredVets(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Veterinarians in Ireland</h1>
        <p className="text-gray-600">Find trusted veterinary services across Ireland for your dog</p>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, service, or specialty..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <Filter className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400 pointer-events-none" />
            <select
              className="pl-10 pr-8 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
            >
              <option value="">All Counties</option>
              {counties.map(county => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Veterinary Services</h2>
        <p className="text-gray-700 mb-4">
          Veterinarians provide essential healthcare services for your dog, from routine check-ups to emergency care. 
          Finding the right vet is crucial for maintaining your pet's health and wellbeing throughout their life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Preventative Care</h3>
            <p className="text-gray-600">Vaccinations, check-ups, and parasite prevention help avoid health issues.</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Emergency Services</h3>
            <p className="text-gray-600">Some clinics offer 24/7 emergency care or referrals to specialized centers.</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Specialized Care</h3>
            <p className="text-gray-600">Dental care, surgeries, and chronic disease management tailored for pets.</p>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredVets.length} veterinarians
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>

      {/* Listings */}
      {filteredVets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVets.map(vet => (
            <ListingCard
              key={vet.id}
              id={vet.id}
              name={vet.name}
              image={vet.image}
              rating={vet.rating}
              reviewCount={vet.reviewCount}
              description={vet.description}
              county={vet.county}
              category="vets"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No veterinarians found</h3>
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

export default VetsPage;
