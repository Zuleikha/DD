import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import trainingData from '../data/training_data.js';
import ListingCard from '../components/listings/ListingCard';

const TrainingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [filteredTrainers, setFilteredTrainers] = useState(trainingData);
  
  const counties = Array.from(new Set(trainingData.map(t => t.county))).sort();

  useEffect(() => {
    const timeout = setTimeout(() => {
      let results = trainingData;

      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        results = results.filter(trainer =>
          trainer.name.toLowerCase().includes(term) ||
          trainer.description.toLowerCase().includes(term) ||
          trainer.services?.some(service => service.toLowerCase().includes(term)) ||
          trainer.specialties?.some(spec => spec.toLowerCase().includes(term)) ||
          trainer.trainingTypes?.some(type => type.toLowerCase().includes(term))
        );
      }

      if (selectedCounty && selectedCounty !== 'All Counties') {
        results = results.filter(trainer => trainer.county === selectedCounty);
      }

      setFilteredTrainers(results);
    }, 300); // Debounce time

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedCounty]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCounty('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog Trainers in Ireland</h1>
        <p className="text-gray-600">Find professional dog trainers across Ireland for your canine companion</p>
      </header>

      {/* Search & Filter */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name, service, or specialty..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* County Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 appearance-none"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
            >
              <option value="">All Counties</option>
              {counties.map(county => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">About Dog Training</h2>
        <p className="text-gray-700 mb-4">
          Professional dog training can help address behavioral issues, teach essential commands, and strengthen the bond between you and your dog.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {[
            { title: 'Training Methods', desc: 'Look for trainers who use positive reinforcement techniques' },
            { title: 'Specializations', desc: 'Some trainers focus on areas like puppy training or behavioral issues' },
            { title: 'Consistency', desc: 'Regular practice and consistent commands are key to success' }
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white p-3 rounded-md shadow-sm">
              <h3 className="font-semibold text-blue-700">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 text-sm">
          Showing {filteredTrainers.length} dog trainer{filteredTrainers.length !== 1 && 's'}
          {selectedCounty && ` in ${selectedCounty}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
        {(searchTerm || selectedCounty) && (
          <button
            onClick={resetFilters}
            className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Trainer Cards */}
      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainers.map(trainer => (
            <ListingCard
              key={trainer.id}
              id={trainer.id}
              name={trainer.name}
              image={trainer.image}
              rating={trainer.rating}
              reviewCount={trainer.reviewCount}
              description={trainer.description}
              county={trainer.county}
              category="training"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No trainers found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or selecting a different county.</p>
          <button
            onClick={resetFilters}
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
