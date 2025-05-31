#!/bin/bash

# Create directory structure if it doesn't exist
mkdir -p src/components/common
mkdir -p src/components/listings

# Fix SEO component TypeScript error
cat > src/components/common/SEO.tsx << 'EOL'
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
EOL

# Create updated ListingCard component with category-based routing
cat > src/components/listings/ListingCard.tsx << 'EOL'
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name?: string;
  title?: string;
  image: string;
  rating: number;
  reviewCount: number;
  description?: string;
  county?: string;
  category: string;
  address?: string;
  type?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  title,
  image,
  rating,
  reviewCount,
  description = "",
  county = "",
  category,
  address,
  type
}) => {
  // Use title if provided (for minders), otherwise use name (for other categories)
  const displayName = title || name || "";
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={displayName} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{displayName}</h2>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address || (county ? `County ${county}` : "")}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        {type && (
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {type}
            </span>
          </div>
        )}
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        <Link 
          to={`/${category}/${id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
EOL

# Update ParksPage.tsx to use the correct category
cat > src/pages/ParksPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import parksData from '../data/parks_data.js';
import ListingCard from '../components/listings/ListingCard';

const ParksPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredParks, setFilteredParks] = useState(parksData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(parksData.map(park => park.county))).sort();

  // Filter parks when search term or county changes
  useEffect(() => {
    let results = parksData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(park => 
        park.name.toLowerCase().includes(term) || 
        park.description.toLowerCase().includes(term) ||
        // Use optional chaining for amenities
        park.amenities?.some(amenity => amenity.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(park => park.county === selectedCounty);
    }
    
    setFilteredParks(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog Parks & Walks in Ireland</h1>
        <p className="text-gray-600">Find the best parks and walking trails for you and your dog</p>
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
              placeholder="Search by name or amenity..."
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog Parks & Walks</h2>
        <p className="text-gray-700 mb-4">
          Dog parks and walking trails provide essential exercise and socialization opportunities for your dog. 
          Finding the right outdoor space can make a big difference in your dog's happiness and wellbeing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Leash Rules</h3>
            <p className="text-gray-600">Always check if the park has off-leash areas or requires dogs to be leashed</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Amenities</h3>
            <p className="text-gray-600">Look for parks with water stations, waste bins, and secure fencing</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Park Etiquette</h3>
            <p className="text-gray-600">Always clean up after your dog and respect other park users</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredParks.length} parks & walks
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Parks Grid */}
      {filteredParks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParks.map((park) => (
            <ListingCard
              key={park.id}
              id={park.id}
              name={park.name}
              image={park.image}
              rating={park.rating}
              reviewCount={park.reviewCount}
              description={park.description}
              county={park.county}
              category="parks"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No parks found</h3>
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

export default ParksPage;
EOL

# Update NutritionPage.tsx to use the correct category
cat > src/pages/NutritionPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import nutritionData from '../data/nutrition_data.js';
import ListingCard from '../components/listings/ListingCard';

const NutritionPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredNutrition, setFilteredNutrition] = useState(nutritionData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(nutritionData.map(store => store.county))).sort();

  // Filter nutrition stores when search term or county changes
  useEffect(() => {
    let results = nutritionData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(store => 
        store.name.toLowerCase().includes(term) || 
        store.description.toLowerCase().includes(term) ||
        // Use optional chaining for products
        store.products?.some(product => product.toLowerCase().includes(term)) ||
        store.services.some(service => service.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(store => store.county === selectedCounty);
    }
    
    setFilteredNutrition(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog Nutrition in Ireland</h1>
        <p className="text-gray-600">Find the best food options and dietary advice for your dog</p>
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
              placeholder="Search by name, product, or service..."
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog Nutrition</h2>
        <p className="text-gray-700 mb-4">
          Proper nutrition is essential for your dog's health and wellbeing. From premium kibble to raw food diets, 
          finding the right nutritional balance for your dog's specific needs is important for their long-term health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Quality Ingredients</h3>
            <p className="text-gray-600">Look for foods with high-quality protein sources and minimal fillers</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Dietary Needs</h3>
            <p className="text-gray-600">Consider your dog's age, size, breed, and any specific health requirements</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Expert Advice</h3>
            <p className="text-gray-600">Consult with nutrition specialists for personalized feeding recommendations</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredNutrition.length} nutrition stores
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Nutrition Stores Grid */}
      {filteredNutrition.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNutrition.map((store) => (
            <ListingCard
              key={store.id}
              id={store.id}
              name={store.name}
              image={store.image}
              rating={store.rating}
              reviewCount={store.reviewCount}
              description={store.description}
              county={store.county}
              category="nutrition"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No nutrition stores found</h3>
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

export default NutritionPage;
EOL

# Update TrainingPage.tsx to use the correct category
cat > src/pages/TrainingPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import trainingData from '../data/training_data.js';
import ListingCard from '../components/listings/ListingCard';

const TrainingPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredTrainers, setFilteredTrainers] = useState(trainingData);
  
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
        // Use optional chaining for specialties and trainingTypes
        trainer.specialties?.some(specialty => specialty.toLowerCase().includes(term)) ||
        trainer.trainingTypes?.some(type => type.toLowerCase().includes(term))
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
        <h1 className="text-3xl font-bold mb-2">Dog Trainers in Ireland</h1>
        <p className="text-gray-600">Find professional dog trainers across Ireland for your canine companion</p>
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
          Professional dog training can help address behavioral issues, teach essential commands, and strengthen the bond between you and your dog.
          Finding the right trainer with the appropriate expertise is crucial for successful training outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Training Methods</h3>
            <p className="text-gray-600">Look for trainers who use positive reinforcement techniques</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Specializations</h3>
            <p className="text-gray-600">Some trainers focus on specific areas like puppy training or behavioral issues</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Consistency</h3>
            <p className="text-gray-600">Regular practice and consistent commands are key to successful training</p>
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
      
      {/* Trainers Grid */}
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
              category="training"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No trainers found</h3>
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

# Update GroomingPage.tsx to use the correct category
cat > src/pages/GroomingPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import groomingData from '../data/grooming_data.js';
import ListingCard from '../components/listings/ListingCard';

const GroomingPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredGroomers, setFilteredGroomers] = useState(groomingData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(groomingData.map(groomer => groomer.county))).sort();

  // Filter groomers when search term or county changes
  useEffect(() => {
    let results = groomingData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(groomer => 
        groomer.name.toLowerCase().includes(term) || 
        groomer.description.toLowerCase().includes(term) ||
        groomer.services.some(service => service.toLowerCase().includes(term)) ||
        // Use optional chaining for specialties
        groomer.specialties?.some(specialty => specialty.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(groomer => groomer.county === selectedCounty);
    }
    
    setFilteredGroomers(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog Grooming Services in Ireland</h1>
        <p className="text-gray-600">Find professional dog groomers across Ireland for your canine companion</p>
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog Grooming</h2>
        <p className="text-gray-700 mb-4">
          Professional dog grooming services help keep your dog clean, healthy, and looking their best.
          Regular grooming is essential for maintaining your dog's coat, skin health, and overall wellbeing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Coat Care</h3>
            <p className="text-gray-600">Regular brushing, bathing, and trimming to maintain a healthy coat</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Health Benefits</h3>
            <p className="text-gray-600">Grooming helps detect skin issues, parasites, and other health concerns early</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Breed-Specific Care</h3>
            <p className="text-gray-600">Different breeds have different grooming needs based on their coat type</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredGroomers.length} grooming services
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Groomers Grid */}
      {filteredGroomers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroomers.map((groomer) => (
            <ListingCard
              key={groomer.id}
              id={groomer.id}
              name={groomer.name}
              image={groomer.image}
              rating={groomer.rating}
              reviewCount={groomer.reviewCount}
              description={groomer.description}
              county={groomer.county}
              category="grooming"
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No grooming services found</h3>
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

export default GroomingPage;
EOL

# Update PlacesPage.tsx to use the correct category
cat > src/pages/PlacesPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import placesData from '../data/places_data.js';
import ListingCard from '../components/listings/ListingCard';

const PlacesPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredPlaces, setFilteredPlaces] = useState(placesData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(placesData.map(place => place.county))).sort();

  // Filter places when search term or county changes
  useEffect(() => {
    let results = placesData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(place => 
        place.name.toLowerCase().includes(term) || 
        place.description.toLowerCase().includes(term) ||
        // Use optional chaining for amenities
        place.amenities?.some(amenity => amenity.toLowerCase().includes(term))
      );
    }
    
    // Filter by county
    if (selectedCounty && selectedCounty !== 'All Counties') {
      results = results.filter(place => place.county === selectedCounty);
    }
    
    setFilteredPlaces(results);
  }, [searchTerm, selectedCounty]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dog-Friendly Places in Ireland</h1>
        <p className="text-gray-600">Find cafes, restaurants, hotels, and other places that welcome dogs</p>
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
              placeholder="Search by name or amenity..."
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Dog-Friendly Places</h2>
        <p className="text-gray-700 mb-4">
          Finding places that welcome dogs allows you to include your furry friend in more of your daily activities and travels.
          From cafes and restaurants to hotels and shops, more businesses are becoming dog-friendly across Ireland.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Etiquette</h3>
            <p className="text-gray-600">Always ensure your dog is well-behaved and on a leash unless specified otherwise</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Amenities</h3>
            <p className="text-gray-600">Look for places that provide water bowls, treats, or dedicated dog areas</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Policies</h3>
            <p className="text-gray-600">Check each establishment's specific dog policies before visiting</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredPlaces.length} dog-friendly places
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Places Grid */}
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
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No dog-friendly places found</h3>
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

export default PlacesPage;
EOL

# Update MindersPage.tsx to use the category prop
cat > src/pages/MindersPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Phone, Mail, Filter } from 'lucide-react';
import dogMinders from '../data/dog_minders_data.js';
import ListingCard from '../components/listings/ListingCard';

interface DogMinder {
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
}

const MindersPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredMinders, setFilteredMinders] = useState<DogMinder[]>(dogMinders);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(dogMinders.map(minder => minder.county))).sort();
  
  // Check for county parameter in URL
  useEffect(() => {
    const countyParam = searchParams.get('county');
    if (countyParam) {
      setSelectedCounty(countyParam);
    }
  }, [searchParams]);
  
  // Filter minders based on search term and selected county
  useEffect(() => {
    let filtered = dogMinders;
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(minder => 
        minder.name.toLowerCase().includes(lowerSearchTerm) || 
        minder.description.toLowerCase().includes(lowerSearchTerm) ||
        minder.address.toLowerCase().includes(lowerSearchTerm) ||
        minder.county.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    if (selectedCounty && selectedCounty !== 'All Counties') {
      filtered = filtered.filter(minder => minder.county === selectedCounty);
    }
    
    setFilteredMinders(filtered);
  }, [searchTerm, selectedCounty]);
  
  // Handle county change
  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const county = e.target.value;
    setSelectedCounty(county);
    
    // Update URL with county parameter
    if (county && county !== 'All Counties') {
      navigate(`/minders?county=${county}`);
    } else {
      navigate('/minders');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Minders in Ireland</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Find the Perfect Dog Minder</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, description, or location..."
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
              onChange={handleCountyChange}
            >
              <option value="">All Counties</option>
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Found {filteredMinders.length} dog minders
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
        </p>
      </div>
      
      {/* Dog Minders List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredMinders.length > 0 ? (
          filteredMinders.map((minder) => (
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
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500 text-lg">No dog minders found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCounty('');
                navigate('/minders');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindersPage;
EOL

# Update VetsPage.tsx to use the category prop
cat > src/pages/VetsPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import vetsData from '../data/vets_data.js';
import ListingCard from '../components/listings/ListingCard';

const VetsPage: React.FC = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredVets, setFilteredVets] = useState(vetsData);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(vetsData.map(vet => vet.county))).sort();

  // Filter vets when search term or county changes
  useEffect(() => {
    let results = vetsData;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(vet => 
        vet.name.toLowerCase().includes(term) || 
        vet.description.toLowerCase().includes(term) ||
        vet.services.some(service => service.toLowerCase().includes(term)) ||
        // Use optional chaining for specialties
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Veterinarians in Ireland</h1>
        <p className="text-gray-600">Find trusted veterinary services across Ireland for your dog</p>
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
        <h2 className="text-xl font-semibold mb-3 text-blue-800">About Veterinary Services</h2>
        <p className="text-gray-700 mb-4">
          Veterinarians provide essential healthcare services for your dog, from routine check-ups to emergency care. 
          Finding the right vet is crucial for maintaining your pet's health and wellbeing throughout their life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Preventative Care</h3>
            <p className="text-gray-600">Regular check-ups, vaccinations, and parasite prevention to keep your dog healthy</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Emergency Services</h3>
            <p className="text-gray-600">Many clinics offer emergency care or can refer you to 24-hour emergency facilities</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <h3 className="font-semibold text-blue-700">Specialized Care</h3>
            <p className="text-gray-600">From dental care to surgery, vets offer a range of specialized services for your dog</p>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredVets.length} veterinarians
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      </div>
      
      {/* Vets Grid */}
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
EOL

# Make the script executable
chmod +x fix_view_details_buttons.sh

echo "Script created successfully. Run it to fix the 'View Details' buttons for all categories."
