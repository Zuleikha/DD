#!/bin/bash

# Create directory for the fix
mkdir -p fix

# 1. Fix TypeScript errors in NutritionPage.tsx
cat > fix/NutritionPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';

// Import nutrition data
import nutritionData from '../data/nutrition_data';

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countyFilter, setCountyFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState(nutritionData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(nutritionData.map(item => item.county))].sort();

  useEffect(() => {
    // Filter items based on search term and county filter
    const filtered = nutritionData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Safely check if products exists and contains the search term
      const matchesProducts = item.products ? 
        item.products.some((product: string) => product.toLowerCase().includes(searchTerm.toLowerCase())) : 
        false;
      
      const matchesCounty = countyFilter === '' || item.county === countyFilter;
      return (matchesSearch || matchesProducts) && matchesCounty;
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

# 2. Fix TypeScript errors in TrainingPage.tsx
cat > fix/TrainingPage.tsx << 'EOL'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import trainingData from '../data/training_data';
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
        trainer.specialties.some(specialty => specialty.toLowerCase().includes(term)) ||
        // Safely check trainingTypes with optional chaining
        (trainer.trainingTypes ? 
          trainer.trainingTypes.some((type: string) => type.toLowerCase().includes(term)) : 
          false)
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
EOL

# 3. Fix TypeScript errors in VetsPage.tsx
cat > fix/VetsPage.tsx << 'EOL'
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
EOL

# 4. Create placeholder pages for community links
mkdir -p fix/pages

# Create ForumPage.tsx
cat > fix/pages/ForumPage.tsx << 'EOL'
import React from 'react';
import SEO from '../components/common/SEO';

const ForumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Owner Forum | DogDays.ie"
        description="Connect with other dog owners across Ireland. Share tips, ask questions, and join the conversation."
        canonicalUrl="https://www.dogdays.ie/forum"
      />

      {/* Hero Section */}
      <section className="bg-[#4A90E2] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Discussion Forum</h1>
          <p className="text-xl max-w-3xl">
            Connect with other dog owners across Ireland. Share tips, ask questions, and join the conversation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our discussion forum is currently under development and will be available soon.
              Check back later to connect with other dog owners across Ireland.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;
EOL

# Create MarketplacePage.tsx
cat > fix/pages/MarketplacePage.tsx << 'EOL'
import React from 'react';
import SEO from '../components/common/SEO';

const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Items Marketplace | DogDays.ie"
        description="Buy, sell, or swap dog items with other owners. Find great deals on toys, accessories, and more."
        canonicalUrl="https://www.dogdays.ie/marketplace"
      />

      {/* Hero Section */}
      <section className="bg-[#F5A623] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-xl max-w-3xl">
            Buy, sell, or swap dog items with other owners. Find great deals on toys, accessories, and more.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our marketplace is currently under development and will be available soon.
              Check back later to buy, sell, or swap dog items with other owners.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#F5A623] text-white font-medium rounded-md hover:bg-[#E09612] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
EOL

# Create AdoptionPage.tsx
cat > fix/pages/AdoptionPage.tsx << 'EOL'
import React from 'react';
import SEO from '../components/common/SEO';

const AdoptionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Adoption | DogDays.ie"
        description="Find your new best friend through our ethical adoption listings. Connect with shelters and rescues across Ireland."
        canonicalUrl="https://www.dogdays.ie/adoption"
      />

      {/* Hero Section */}
      <section className="bg-[#7ED321] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Adoption</h1>
          <p className="text-xl max-w-3xl">
            Find your new best friend through our ethical adoption listings. Connect with shelters and rescues across Ireland.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our adoption listings are currently under development and will be available soon.
              Check back later to find your new best friend through our ethical adoption listings.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#7ED321] text-white font-medium rounded-md hover:bg-[#6DC310] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionPage;
EOL

# Create RegisterPage.tsx
cat > fix/pages/RegisterPage.tsx << 'EOL'
import React from 'react';
import SEO from '../components/common/SEO';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Create Account | DogDays.ie"
        description="Join thousands of dog owners across Ireland. Create your free account to access all features."
        canonicalUrl="https://www.dogdays.ie/register"
      />

      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Create Account</h1>
          <p className="text-xl max-w-3xl">
            Join thousands of dog owners across Ireland. Create your free account to access all features.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our registration system is currently under development and will be available soon.
              Check back later to create your free account and join our community.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#2C3E50] text-white font-medium rounded-md hover:bg-[#1A2530] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
EOL

# Create LoginPage.tsx
cat > fix/pages/LoginPage.tsx << 'EOL'
import React from 'react';
import SEO from '../components/common/SEO';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Sign In | DogDays.ie"
        description="Sign in to your DogDays.ie account to access all features."
        canonicalUrl="https://www.dogdays.ie/login"
      />

      {/* Hero Section */}
      <section className="bg-[#4A90E2] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sign In</h1>
          <p className="text-xl max-w-3xl">
            Sign in to your DogDays.ie account to access all features.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-gray-600 mb-4">
              Our login system is currently under development and will be available soon.
              Check back later to sign in to your account.
            </p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
EOL

# 5. Update App.tsx with new routes
cat > fix/App.tsx << 'EOL'
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
import CommunityPage from './pages/CommunityPage';
import ForumPage from './pages/ForumPage';
import MarketplacePage from './pages/MarketplacePage';
import AdoptionPage from './pages/AdoptionPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

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
            
            {/* Community Routes */}
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            
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

# Create a README with instructions
cat > fix/README.md << 'EOL'
# Comprehensive Fix for DogDays.ie

This package contains a comprehensive fix for both TypeScript errors and navigation issues in your DogDays.ie website.

## What's Included

1. **TypeScript Error Fixes**:
   - Fixed NutritionPage.tsx - Added safe check for `products` property
   - Fixed TrainingPage.tsx - Added safe check for `trainingTypes` property
   - Fixed VetsPage.tsx - Added safe check for `specialties` property

2. **Navigation Fixes**:
   - Updated App.tsx with routes for all community links
   - Added placeholder pages for:
     - Forum (/forum)
     - Marketplace (/marketplace)
     - Adoption (/adoption)
     - Register (/register)
     - Login (/login)

## How to Apply the Fix

1. Copy the fixed TypeScript files to your project:
   ```
   cp fix/NutritionPage.tsx src/pages/
   cp fix/TrainingPage.tsx src/pages/
   cp fix/VetsPage.tsx src/pages/
   ```

2. Copy the new placeholder pages to your project:
   ```
   cp fix/pages/*.tsx src/pages/
   ```

3. Update your App.tsx with the new routes:
   ```
   cp fix/App.tsx src/
   ```

## What This Fixes

1. **TypeScript Errors**:
   - Property 'products' does not exist (NutritionPage.tsx)
   - Parameter 'product' implicitly has an 'any' type (NutritionPage.tsx)
   - Property 'trainingTypes' does not exist (TrainingPage.tsx)
   - Parameter 'type' implicitly has an 'any' type (TrainingPage.tsx)
   - Property 'specialties' does not exist (VetsPage.tsx)
   - Parameter 'specialty' implicitly has an 'any' type (VetsPage.tsx)

2. **Navigation Issues**:
   - Missing routes for community links in the CommunitySection component
   - Links to /forum, /marketplace, /adoption, /register, and /login now work

## Next Steps

After applying these fixes, your website should build successfully and all navigation links should work properly. The community pages are currently placeholders that you can customize with actual content as needed.
EOL

echo "Comprehensive fix created successfully!"
echo "To apply the fix, follow the instructions in fix/README.md"
