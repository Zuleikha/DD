import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import dog minders data and type
import dogMindersData from '../data/dog_minders_data';
import { DogMinder } from '../types/dog_minders_data';

const MindersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredMinders, setFilteredMinders] = useState<DogMinder[]>(dogMindersData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(dogMindersData.map(minder => minder.county))].sort();

  useEffect(() => {
    // Filter minders based on search term and county filter
    const filtered = dogMindersData.filter(minder => {
      const matchesSearch = minder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           minder.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty = countyFilter === '' || minder.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredMinders(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Find Dog Minders in Ireland | DogDays.ie"
        description="Find trusted dog minders across Ireland. Browse profiles, read reviews, and book the perfect dog minder for your furry friend."
        canonicalUrl="https://www.dogdays.ie/minders"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find a Dog Minder</h1>
          <p className="text-xl max-w-3xl">
            Browse trusted dog minders across Ireland. Read reviews, compare services, 
            and find the perfect match for your furry friend.
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
            {filteredMinders.length} {filteredMinders.length === 1 ? 'Minder' : 'Minders'} Found
          </h2>
          
          {filteredMinders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMinders.map((minder) => (
                <ListingCard
                  key={minder.id}
                  id={minder.id}
                  name={minder.name}
                  image={minder.image}
                  rating={minder.rating}
                  reviewCount={minder.reviewCount}
                  description={minder.description}
                  county={minder.county}
                  address={minder.address}
                  category="minders"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No minders found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog minders.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MindersPage;
