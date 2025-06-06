import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import trainingData, { heroImage } from '../data/training_data';
import ListingCard from '../components/listings/ListingCard';

interface Training {
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
  services: string[];
  specialties?: string[];
  hours: string;
  trainingTypes?: string[];
}

const TrainingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredTrainers, setFilteredTrainers] = useState<Training[]>(trainingData as Training[]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const counties = Array.from(new Set(trainingData.map(trainer => trainer.county))).sort();

  // Generic training images with your renamed files
  const getGenericImage = (index: number): string => {
    const images = [
      '/src/assets/images/training/tg1.png',
      '/src/assets/images/training/tg2.png',
      '/src/assets/images/training/tg3.png',
      '/src/assets/images/training/tg4.png',
      '/src/assets/images/training/tg5.png'
     
    ];
    return images[index % images.length];
  };

  useEffect(() => {
    let results = trainingData as Training[];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(trainer =>
        trainer.name.toLowerCase().includes(term) ||
        trainer.description.toLowerCase().includes(term) ||
        trainer.services.some(service => service.toLowerCase().includes(term)) ||
        trainer.specialties?.some(specialty => specialty.toLowerCase().includes(term)) ||
        trainer.trainingTypes?.some(type => type.toLowerCase().includes(term))
      );
    }

    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(trainer => trainer.county === selectedCounty);
    }

    setFilteredTrainers(results);
    setShowAll(false); // Reset to show only 6 when filters change
  }, [searchTerm, selectedCounty]);

  const displayedTrainers = showAll ? filteredTrainers : filteredTrainers.slice(0, 6);
  const remainingCount = filteredTrainers.length - 6;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] mb-8 overflow-hidden">
        <img
          src={heroImage}
          alt="Professional dog training services"
          className="w-full h-full object-cover"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Professional Dog Training</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Connect with certified dog trainers and behavior specialists across Ireland
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                {counties.map((county: string) => (
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

        {/* Trainers Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {filteredTrainers.length} Dog Training Services Found
          </h2>
          <p className="text-gray-600">
            {selectedCounty ? `Professional dog trainers in ${selectedCounty}` : 'Professional dog trainers across Ireland'}
            {searchTerm ? ` matching "${searchTerm}"` : ''}
            {!showAll && filteredTrainers.length > 6 ? ` - Showing first 6 results` : ''}
          </p>
        </div>

        {/* Info Section */}
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

        {/* Listing Grid */}
        {filteredTrainers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedTrainers.map((trainer: Training, index: number) => (
                <ListingCard
                  key={trainer.id}
                  id={trainer.id}
                  name={trainer.name}
                  image={trainer.image || getGenericImage(index)}
                  rating={trainer.rating}
                  reviewCount={trainer.reviewCount}
                  description={trainer.description}
                  county={trainer.county}
                  category="training"
                  address={trainer.address}
                  specialties={trainer.specialties}
                  trainingTypes={trainer.trainingTypes}
                />
              ))}
            </div>

            {/* Show More/Less Button */}
            {filteredTrainers.length > 6 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {showAll 
                    ? 'Show Less' 
                    : `Show More (${remainingCount} more trainer${remainingCount !== 1 ? 's' : ''})`
                  }
                </button>
              </div>
            )}
          </>
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
    </div>
  );
};

export default TrainingPage;

