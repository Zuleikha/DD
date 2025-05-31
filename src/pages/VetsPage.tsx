import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../components/listings/ListingCard';
import SEO from '../components/common/SEO';
import vetsData from '../data/vets_data.js';

interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  specialties?: string[];
  hours: string;
}

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  
  // Extract unique counties and specialties
  const counties = Array.from(new Set(vetsData.map((item: Vet) => item.county)));
  
  // Safely handle specialties which might be undefined
  const allSpecialties: string[] = [];
  vetsData.forEach((item: Vet) => {
    if (item.specialties && Array.isArray(item.specialties)) {
      item.specialties.forEach((specialty: string) => {
        if (!allSpecialties.includes(specialty)) {
          allSpecialties.push(specialty);
        }
      });
    }
  });
  
  // Filter vets based on search and filters
  const filteredVets = vetsData.filter((item: Vet) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCounty = selectedCounty ? item.county === selectedCounty : true;
    const matchesSpecialty = selectedSpecialty ? (item.specialties && item.specialties.includes(selectedSpecialty)) : true;
    
    return matchesSearch && matchesCounty && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Veterinarians in Ireland | DogDays.ie"
        description="Find the best veterinarians and animal hospitals across Ireland. Browse by county or specialty to find the right care for your dog."
        keywords="veterinarians, vets, animal hospitals, dog care, Ireland, pet healthcare"
        canonicalUrl="https://www.dogdays.ie/vets"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Veterinarians in Ireland</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or description..."
                className="w-full p-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">Filter by County</label>
              <select
                id="county"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county, index) => (
                  <option key={index} value={county}>{county}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Filter by Specialty</label>
              <select
                id="specialty"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option value="">All Specialties</option>
                {allSpecialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVets.map((vet: Vet) => (
            <ListingCard
              key={vet.id}
              id={vet.id}
              name={vet.name}
              image={vet.image}
              rating={vet.rating}
              reviewCount={vet.reviewCount}
              description={vet.description}
              county={vet.county}
              detailPath={`/vets/${vet.id}`}
            />
          ))}
        </div>
        
        {filteredVets.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No veterinarians found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VetsPage;
