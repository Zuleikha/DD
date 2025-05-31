import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import places data
import placesData from '../data/places_data';

const PlacesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState(placesData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(placesData.map(place => place.county))].sort();

  useEffect(() => {
    // Filter places based on search term and county filter
    const filtered = placesData.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           place.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty = countyFilter === '' || place.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredPlaces(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog-Friendly Places in Ireland | DogDays.ie"
        description="Discover dog-friendly cafes, restaurants, hotels, and more across Ireland. Find the perfect place to enjoy with your furry friend."
        canonicalUrl="https://www.dogdays.ie/places"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog-Friendly Places</h1>
          <p className="text-xl max-w-3xl">
            Discover dog-friendly cafes, restaurants, hotels, and more across Ireland. 
            Find the perfect place to enjoy with your furry friend.
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
            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'Place' : 'Places'} Found
          </h2>
          
          {filteredPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <ListingCard
                  key={place.id}
                  id={place.id}
                  name={place.name}
                  image={place.image}
                  rating={place.rating}
                  reviewCount={place.reviewCount}
                  description={place.description}
                  county={place.county}
                  category="places"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No places found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog-friendly places.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlacesPage;
