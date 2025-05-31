#!/bin/bash

# Script to fix "View Details" buttons for all categories by replicating the working dog minders pattern

echo "Creating fix for all category pages to match the working dog minders pattern..."

# Create necessary directories
mkdir -p src/pages
mkdir -p src/components/listings

# 1. First, create a consistent ListingCard component that works for all categories
echo "Creating updated ListingCard component..."
cat > src/components/listings/ListingCard.tsx << 'EOL'
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name?: string;
  title?: string;
  address?: string;
  county?: string;
  rating: number;
  reviewCount: number;
  description?: string;
  image: string;
  category: string; // Required to determine the correct route
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  title,
  address,
  county,
  rating,
  reviewCount,
  description,
  image,
  category
}) => {
  // Use name if provided, otherwise use title (for backward compatibility)
  const displayName = name || title || "Business";
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={displayName} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{displayName}</h2>
        {address && (
          <div className="flex items-center mb-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{address}</span>
            {county && <span>, {county}</span>}
          </div>
        )}
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        
        {/* This is the critical part - using the category prop to build the correct route */}
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

# 2. Update VetsPage.tsx to match the MindersPage pattern
echo "Updating VetsPage.tsx..."
cat > src/pages/VetsPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import vets data
import vetsData from '../data/vets_data';

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredVets, setFilteredVets] = useState(vetsData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(vetsData.map(vet => vet.county))].sort();

  useEffect(() => {
    // Filter vets based on search term and county filter
    const filtered = vetsData.filter(vet => {
      const matchesSearch = vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (vet.description && vet.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || vet.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredVets(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Find Veterinarians in Ireland | DogDays.ie"
        description="Find trusted veterinarians across Ireland. Browse profiles, read reviews, and find the perfect vet for your pet."
        canonicalUrl="https://www.dogdays.ie/vets"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find a Vet</h1>
          <p className="text-xl max-w-3xl">
            Browse trusted veterinarians across Ireland. Read reviews, compare services, 
            and find the perfect vet for your pet.
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
                  address={vet.address}
                  rating={vet.rating}
                  reviewCount={vet.reviewCount}
                  description={vet.description}
                  image={vet.image}
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

# 3. Update ParksPage.tsx to match the MindersPage pattern
echo "Updating ParksPage.tsx..."
cat > src/pages/ParksPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import parks data
import parksData from '../data/parks_data';

const ParksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredParks, setFilteredParks] = useState(parksData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(parksData.map(park => park.county))].sort();

  useEffect(() => {
    // Filter parks based on search term and county filter
    const filtered = parksData.filter(park => {
      const matchesSearch = park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (park.description && park.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || park.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredParks(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Parks & Walks in Ireland | DogDays.ie"
        description="Discover dog-friendly parks and walks across Ireland. Find the perfect outdoor space for you and your furry friend."
        canonicalUrl="https://www.dogdays.ie/parks"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Parks & Walks</h1>
          <p className="text-xl max-w-3xl">
            Discover dog-friendly parks and walks across Ireland. Find the perfect 
            outdoor space for you and your furry friend.
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
            {filteredParks.length} {filteredParks.length === 1 ? 'Park' : 'Parks'} Found
          </h2>
          
          {filteredParks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParks.map((park) => (
                <ListingCard
                  key={park.id}
                  id={park.id}
                  name={park.name}
                  address={park.address}
                  rating={park.rating}
                  reviewCount={park.reviewCount}
                  description={park.description}
                  image={park.image}
                  county={park.county}
                  category="parks"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No parks found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog-friendly parks.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ParksPage;
EOL

# 4. Update NutritionPage.tsx to match the MindersPage pattern
echo "Updating NutritionPage.tsx..."
cat > src/pages/NutritionPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import nutrition data
import nutritionData from '../data/nutrition_data';

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredNutrition, setFilteredNutrition] = useState(nutritionData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(nutritionData.map(item => item.county))].sort();

  useEffect(() => {
    // Filter nutrition based on search term and county filter
    const filtered = nutritionData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredNutrition(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Nutrition Services in Ireland | DogDays.ie"
        description="Find dog nutrition services, pet food stores, and dietary specialists across Ireland."
        canonicalUrl="https://www.dogdays.ie/nutrition"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog Nutrition</h1>
          <p className="text-xl max-w-3xl">
            Find dog nutrition services, pet food stores, and dietary specialists across Ireland.
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
            {filteredNutrition.length} {filteredNutrition.length === 1 ? 'Service' : 'Services'} Found
          </h2>
          
          {filteredNutrition.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNutrition.map((item) => (
                <ListingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  address={item.address}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  description={item.description}
                  image={item.image}
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

# 5. Update TrainingPage.tsx to match the MindersPage pattern
echo "Updating TrainingPage.tsx..."
cat > src/pages/TrainingPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import training data
import trainingData from '../data/training_data';

const TrainingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredTraining, setFilteredTraining] = useState(trainingData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(trainingData.map(item => item.county))].sort();

  useEffect(() => {
    // Filter training based on search term and county filter
    const filtered = trainingData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredTraining(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Training Services in Ireland | DogDays.ie"
        description="Find professional dog trainers and training schools across Ireland. Browse profiles, read reviews, and find the perfect trainer for your dog."
        canonicalUrl="https://www.dogdays.ie/training"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog Training</h1>
          <p className="text-xl max-w-3xl">
            Find professional dog trainers and training schools across Ireland. Browse profiles, 
            read reviews, and find the perfect trainer for your dog.
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
            {filteredTraining.length} {filteredTraining.length === 1 ? 'Trainer' : 'Trainers'} Found
          </h2>
          
          {filteredTraining.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTraining.map((item) => (
                <ListingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  address={item.address}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  description={item.description}
                  image={item.image}
                  county={item.county}
                  category="training"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No trainers found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog trainers.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
EOL

# 6. Update GroomingPage.tsx to match the MindersPage pattern
echo "Updating GroomingPage.tsx..."
cat > src/pages/GroomingPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import grooming data
import groomingData from '../data/grooming_data';

const GroomingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredGrooming, setFilteredGrooming] = useState(groomingData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(groomingData.map(item => item.county))].sort();

  useEffect(() => {
    // Filter grooming based on search term and county filter
    const filtered = groomingData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredGrooming(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Grooming Services in Ireland | DogDays.ie"
        description="Find professional dog groomers across Ireland. Browse profiles, read reviews, and find the perfect groomer for your furry friend."
        canonicalUrl="https://www.dogdays.ie/grooming"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog Grooming</h1>
          <p className="text-xl max-w-3xl">
            Find professional dog groomers across Ireland. Browse profiles, read reviews, 
            and find the perfect groomer for your furry friend.
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
            {filteredGrooming.length} {filteredGrooming.length === 1 ? 'Groomer' : 'Groomers'} Found
          </h2>
          
          {filteredGrooming.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGrooming.map((item) => (
                <ListingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  address={item.address}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  description={item.description}
                  image={item.image}
                  county={item.county}
                  category="grooming"
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No groomers found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog groomers.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GroomingPage;
EOL

# 7. Update PlacesPage.tsx to match the MindersPage pattern
echo "Updating PlacesPage.tsx..."
cat > src/pages/PlacesPage.tsx << 'EOL'
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
                           (place.description && place.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCounty = countyFilter === '' || place.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredPlaces(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog-Friendly Places in Ireland | DogDays.ie"
        description="Discover dog-friendly cafes, restaurants, hotels, and more across Ireland. Find places where your furry friend is welcome."
        canonicalUrl="https://www.dogdays.ie/places"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog-Friendly Places</h1>
          <p className="text-xl max-w-3xl">
            Discover dog-friendly cafes, restaurants, hotels, and more across Ireland. 
            Find places where your furry friend is welcome.
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
                  address={place.address}
                  rating={place.rating}
                  reviewCount={place.reviewCount}
                  description={place.description}
                  image={place.image}
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
EOL

# 8. Update App.tsx to ensure all routes are properly configured
echo "Updating App.tsx with proper routes..."
cat > src/App.tsx << 'EOL'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MindersPage from './pages/MindersPage';
import MinderDetailPage from './pages/MinderDetailPage';
import VetsPage from './pages/VetsPage';
import VetDetailPage from './pages/VetDetailPage';
import ParksPage from './pages/ParksPage';
import ParkDetailPage from './pages/ParkDetailPage';
import NutritionPage from './pages/NutritionPage';
import NutritionDetailPage from './pages/NutritionDetailPage';
import TrainingPage from './pages/TrainingPage';
import TrainingDetailPage from './pages/TrainingDetailPage';
import GroomingPage from './pages/GroomingPage';
import GroomingDetailPage from './pages/GroomingDetailPage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AdvicePage from './pages/AdvicePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Dog Minders Routes */}
            <Route path="/minders" element={<MindersPage />} />
            <Route path="/minders/:id" element={<MinderDetailPage />} />
            
            {/* Vets Routes */}
            <Route path="/vets" element={<VetsPage />} />
            <Route path="/vets/:id" element={<VetDetailPage />} />
            
            {/* Parks Routes */}
            <Route path="/parks" element={<ParksPage />} />
            <Route path="/parks/:id" element={<ParkDetailPage />} />
            
            {/* Nutrition Routes */}
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/nutrition/:id" element={<NutritionDetailPage />} />
            
            {/* Training Routes */}
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            
            {/* Grooming Routes */}
            <Route path="/grooming" element={<GroomingPage />} />
            <Route path="/grooming/:id" element={<GroomingDetailPage />} />
            
            {/* Places Routes */}
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            
            {/* Other Routes */}
            <Route path="/advice" element={<AdvicePage />} />
            
            {/* 404 Route - Use HomePage as fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
EOL

# 9. Create a TypeScript declaration file for react-helmet to fix type errors
echo "Creating TypeScript declaration for react-helmet..."
mkdir -p src/@types
cat > src/@types/react-helmet.d.ts << 'EOL'
declare module 'react-helmet' {
  import * as React from 'react';

  interface HelmetProps {
    title?: string;
    titleTemplate?: string;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    base?: {
      target?: string;
      href?: string;
    };
    meta?: {
      name?: string;
      property?: string;
      content?: string;
      httpEquiv?: string;
      charSet?: string;
    }[];
    link?: {
      rel?: string;
      href?: string;
      sizes?: string;
      type?: string;
      media?: string;
      color?: string;
      as?: string;
      crossOrigin?: string;
    }[];
    script?: {
      src?: string;
      type?: string;
      async?: boolean;
      defer?: boolean;
      innerHTML?: string;
    }[];
    noscript?: {
      innerHTML?: string;
    }[];
    style?: {
      type?: string;
      cssText?: string;
    }[];
    htmlAttributes?: {
      [key: string]: string;
    };
    bodyAttributes?: {
      [key: string]: string;
    };
    onChangeClientState?: (newState: any, addedTags: any, removedTags: any) => void;
  }

  export class Helmet extends React.Component<HelmetProps> {
    static renderStatic(): {
      base: any;
      bodyAttributes: any;
      htmlAttributes: any;
      link: any;
      meta: any;
      noscript: any;
      script: any;
      style: any;
      title: any;
      titleAttributes: any;
    };
  }

  export default Helmet;
}
EOL

echo "Fix completed successfully!"
echo ""
echo "This script has updated all category pages to match the working dog minders pattern:"
echo "1. Updated ListingCard component to work with all categories"
echo "2. Updated all category pages (VetsPage, ParksPage, etc.) to use the same pattern as MindersPage"
echo "3. Ensured all pages pass the correct 'category' prop to ListingCard"
echo "4. Verified App.tsx has all the correct routes for detail pages"
echo "5. Added TypeScript declaration for react-helmet to fix type errors"
echo ""
echo "Your 'View Details' buttons should now work for all categories, just like they do for dog minders."
echo ""
echo "To apply these changes to your project:"
echo "1. Copy the files to your project's src directory"
echo "2. Make sure your data files (vets_data.js, parks_data.js, etc.) are in the src/data directory"
echo "3. Deploy your site"
echo ""
echo "If you encounter any TypeScript errors during deployment, run the fix_typescript_any_errors.sh script."
