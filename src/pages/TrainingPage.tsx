import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import trainingData from '../data/training_data';
import { Training } from '../types/training_data';
import ListingCard from '../components/listings/ListingCard';

const TrainingPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredTrainers, setFilteredTrainers] = useState<Training[]>(trainingData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(trainingData.map(trainer => trainer.county))).sort();

  // Filter trainers when search term or county changes
  useEffect(() => {
    let results = trainingData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(trainer => 
        trainer.name.toLowerCase().includes(term) || 
        trainer.description.toLowerCase().includes(term) ||
        trainer.services.some(service => service.toLowerCase().includes(term)) ||
        trainer.specialties.some(specialty => specialty.toLowerCase().includes(term)) ||
        // Safely check trainingTypes with optional chaining
        (trainer.trainingTypes?.some(type => 
          type.toLowerCase().includes(term)
        ) ?? false)
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(trainer => trainer.county === selectedCounty);
    }
    
    setFilteredTrainers(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog Training in Ireland</h1>
        <p className="text-gray-600">Connect with professional dog trainers and behavior specialists</p>
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
              placeholder="Search by name, service, or specialty..."
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog Training</h2>
        <p className="text-gray-700 mb-4">
          Professional dog training helps build a strong relationship between you and your dog through positive reinforcement techniques. 
          From basic obedience to specialized behavior modification, trainers can help with a wide range of needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Training Methods</h3>
            <p className="text-gray-600">Look for trainers who use positive, reward-based methods rather than punishment</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Class Types</h3>
            <p className="text-gray-600">Options include group classes, private sessions, and specialized behavior consultations</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Consistency</h3>
            <p className="text-gray-600">Regular practice between sessions is key to successful training outcomes</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredTrainers.length} dog trainers
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Dog Trainers Grid */}
      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainers.map((trainer) => (
            <ListingCard
              key={trainer.id}
              id={trainer.id}
              name={trainer.name}
              image={trainer.image}
              rating={trainer.rating}
              reviewCount={trainer.reviewCount}
              description={trainer.description}
              county={trainer.county}
              address={trainer.address}
              specialties={trainer.specialties}
              trainingTypes={trainer.trainingTypes}
              category="training"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No dog trainers found</h3>
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

export default TrainingPage;
