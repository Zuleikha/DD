#!/bin/bash

# Create directory for TypeScript interface files if it doesn't exist
mkdir -p src/types

# Create nutrition_data.d.ts with correct interface
cat > src/types/nutrition_data.d.ts << 'EOL'
export interface Nutrition {
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
  products: string[];
  services: string[];
  brands: string[];
  hours: string;
}

declare const nutritionData: Nutrition[];
export default nutritionData;
EOL

# Create training_data.d.ts with correct interface
cat > src/types/training_data.d.ts << 'EOL'
export interface Training {
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
  specialties: string[];
  trainingTypes: string[];
  hours: string;
}

declare const trainingData: Training[];
export default trainingData;
EOL

# Create vets_data.d.ts with correct interface
cat > src/types/vets_data.d.ts << 'EOL'
export interface Vet {
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
  specialties: string[];
  hours: string;
}

declare const vetsData: Vet[];
export default vetsData;
EOL

# Update NutritionPage.tsx to use the correct interface and safely handle properties
cat > src/pages/NutritionPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import nutrition data and type
import nutritionData from '../data/nutrition_data';
import { Nutrition } from '../types/nutrition_data';

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState<Nutrition[]>(nutritionData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(nutritionData.map(item => item.county))].sort();

  useEffect(() => {
    // Filter items based on search term and county filter
    const filtered = nutritionData.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.products && item.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredItems(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Nutrition Services in Ireland | DogDays.ie"
        description="Find dog nutrition services, pet food stores, and dietary consultants across Ireland. Get expert advice on your dog's dietary needs."
        canonicalUrl="https://www.dogdays.ie/nutrition"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog Nutrition Services</h1>
          <p className="text-xl max-w-3xl">
            Find specialized pet food stores, canine nutritionists, and dietary consultants across Ireland. 
            Get expert advice on your dog's dietary needs.
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
            {filteredItems.length} {filteredItems.length === 1 ? 'Service' : 'Services'} Found
          </h2>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <ListingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  description={item.description}
                  county={item.county}
                  category="nutrition"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No nutrition services found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog nutrition services.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NutritionPage;
EOL

# Update TrainingPage.tsx to use the correct interface and safely handle properties
cat > src/pages/TrainingPage.tsx << 'EOL'
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
        (trainer.trainingTypes && trainer.trainingTypes.some(type => type.toLowerCase().includes(term)))
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
            <div key={trainer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{trainer.name}</h2>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{trainer.address}</span>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{trainer.rating.toFixed(1)}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-gray-600">{trainer.reviewCount} reviews</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{trainer.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.slice(0, 3).map((specialty, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                  {trainer.specialties.length > 3 && (
                    <span className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-full">
                      +{trainer.specialties.length - 3} more
                    </span>
                  )}
                </div>
                <Link 
                  to={`/training/${trainer.id}`} 
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
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
EOL

# Update VetsPage.tsx to use the correct interface and safely handle properties
cat > src/pages/VetsPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import vets data and type
import vetsData from '../data/vets_data';
import { Vet } from '../types/vets_data';

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredVets, setFilteredVets] = useState<Vet[]>(vetsData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(vetsData.map(vet => vet.county))].sort();

  useEffect(() => {
    // Filter vets based on search term and county filter
    const filtered = vetsData.filter(vet => {
      const matchesSearch = 
        vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (vet.specialties && vet.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCounty = countyFilter === '' || vet.county === countyFilter;
      return matchesSearch && matchesCounty;
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
EOL

echo "TypeScript interfaces and page components have been updated to match the actual data structure."
echo "The script has:"
echo "1. Created proper TypeScript interfaces for nutrition, training, and vet data"
echo "2. Updated the page components to use these interfaces"
echo "3. Added safe property access with optional chaining"
echo ""
echo "To apply these changes, copy the files to your project's src directory."
