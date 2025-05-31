import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import vets data
import vetsData from '../data/vets_data';

// Add specialties property to the type
interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  hours: string;
  specialties?: string[]; // Make specialties optional
}

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredVets, setFilteredVets] = useState<Vet[]>(vetsData as Vet[]);

  // Get unique counties for filter dropdown
  const counties = [...new Set(vetsData.map(vet => vet.county))].sort();

  useEffect(() => {
    // Filter vets based on search term and county filter
    const filtered = (vetsData as Vet[]).filter(vet => {
      const matchesSearch = vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vet.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Safely check if specialties exists and contains the search term
      const matchesSpecialties = vet.specialties ? 
        vet.specialties.some((specialty: string) => specialty.toLowerCase().includes(searchTerm.toLowerCase())) : 
        false;
      
      const matchesCounty = countyFilter === '' || vet.county === countyFilter;
      return (matchesSearch || matchesSpecialties) && matchesCounty;
    });
    
    setFilteredVets(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Find Veterinarians in Ireland | DogDays.ie"
        description="Find trusted veterinarians across Ireland. Browse profiles, read reviews, and find the perfect vet for your dog's healthcare needs."
        canonicalUrl="https://www.dogdays.ie/vets"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find a Veterinarian</h1>
          <p className="text-xl max-w-3xl">
            Browse trusted veterinarians across Ireland. Read reviews, compare services, 
            and find the perfect vet for your dog's healthcare needs.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

      {/* Listings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            {filteredVets.length} {filteredVets.length === 1 ? 'Vet' : 'Vets'} Found
          </h2>
          
          {filteredVets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVets.map((vet) => (
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
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No vets found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find veterinarians.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VetsPage;
