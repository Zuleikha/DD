import React, { useState } from 'react';
import ListingCard from '../components/listings/ListingCard';
import ChatbotWidget from '../components/common/ChatbotWidget';
import HeroSection from '../components/home/HeroSection';

// Update the import path to match where you placed the file
// If it's in the src/pages directory:
import dogMinders from '../data/dog_minders_data';
// If it's in a data directory, use:
// import dogMinders from '../data/dog_minders_data';

interface DogMinder {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
}

const MindersPage: React.FC = () => {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  // Filter dog minders based on search term and location
  const filteredMinders = dogMinders.filter((minder: DogMinder) => {
    const matchesSearch = minder.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         minder.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || 
                           minder.address.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  // Common locations in Ireland for filtering
  const locations = [
    'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Belfast', 'Kilkenny'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Minders in Ireland</h1>
      
      {/* Search and filter section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Find the Perfect Dog Minder</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search by name or keywords
            </label>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. puppy, overnight, training"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by location
            </label>
            <select
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredMinders.length} of {dogMinders.length} dog minders
        </div>
      </div>
      
      {/* List of dog minders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredMinders.map((minder: DogMinder) => (
          <ListingCard 
            key={minder.id}
            title={minder.name}
            address={minder.address}
            rating={minder.rating}
            reviewCount={minder.reviewCount}
            type="minders"
            image={minder.image}
            id={minder.id}
          />
        ))}
        
        {filteredMinders.length === 0 && (
          <div className="col-span-3 text-center py-12">
            <p className="text-lg text-gray-600">No dog minders found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
      
      {/* Information section */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Why Choose a Professional Dog Minder?</h2>
        <p className="mb-4">
          Professional dog minders provide personalized care for your pet in a home environment, 
          often offering more attention and comfort than traditional kennels. Many dog minders in 
          Ireland are experienced pet owners themselves and understand the unique needs of different breeds.
        </p>
        <p>
          When selecting a dog minder, we recommend arranging a meet and greet first to ensure 
          your dog feels comfortable. Most minders will send regular updates and photos during your 
          dog's stay to give you peace of mind while you're away.
        </p>
      </div>
    </div>
  );
};

export default MindersPage;
