#!/bin/bash

# Script to fix View Details functionality for Parks, Grooming, and Places

# Create necessary directories
mkdir -p src/pages
mkdir -p src/components/listings

# Copy the detail page components
echo "Creating detail page components..."

# ParkDetailPage.tsx
cat > src/pages/ParkDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import parks data
import parksData from '../data/parks_data';

const ParkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [park, setPark] = useState<any | null>(null);

  useEffect(() => {
    // Find the park with the matching ID
    const parkId = parseInt(id || '0');
    const foundPark = parksData.find(p => p.id === parkId);
    
    if (foundPark) {
      setPark(foundPark);
    } else {
      // Redirect to parks page if park not found
      navigate('/parks');
    }
  }, [id, navigate]);

  if (!park) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${park.name} | Parks & Walks | DogDays.ie`}
        description={`Visit ${park.name} in ${park.county}. ${park.description}`}
        canonicalUrl={`https://www.dogdays.ie/parks/${park.id}`}
      />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-800">
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/parks')}
              className="flex items-center text-white mb-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Parks & Walks
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">{park.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{park.address}, {park.county}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {/* Rating Section */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold ml-1">{park.rating.toFixed(1)}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{park.reviewCount} reviews</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About {park.name}</h2>
              <p className="text-gray-700 leading-relaxed">{park.description}</p>
            </div>

            {/* Amenities */}
            {park.amenities && park.amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {park.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{park.address}, {park.county}</span>
                </div>
                {park.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`tel:${park.phone}`} className="text-blue-600 hover:underline">{park.phone}</a>
                  </div>
                )}
                {park.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`mailto:${park.email}`} className="text-blue-600 hover:underline">{park.email}</a>
                  </div>
                )}
                {park.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={park.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {park.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {park.hours && (
              <div>
                <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="whitespace-pre-line">{park.hours}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetailPage;
EOL

# GroomingDetailPage.tsx
cat > src/pages/GroomingDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import grooming data
import groomingData from '../data/grooming_data';

const GroomingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [groomer, setGroomer] = useState<any | null>(null);

  useEffect(() => {
    // Find the groomer with the matching ID
    const groomerId = parseInt(id || '0');
    const foundGroomer = groomingData.find(g => g.id === groomerId);
    
    if (foundGroomer) {
      setGroomer(foundGroomer);
    } else {
      // Redirect to grooming page if groomer not found
      navigate('/grooming');
    }
  }, [id, navigate]);

  if (!groomer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${groomer.name} | Dog Grooming | DogDays.ie`}
        description={`Visit ${groomer.name} in ${groomer.county}. ${groomer.description}`}
        canonicalUrl={`https://www.dogdays.ie/grooming/${groomer.id}`}
      />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-800">
        <img
          src={groomer.image}
          alt={groomer.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/grooming')}
              className="flex items-center text-white mb-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Grooming Services
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">{groomer.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{groomer.address}, {groomer.county}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {/* Rating Section */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold ml-1">{groomer.rating.toFixed(1)}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{groomer.reviewCount} reviews</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About {groomer.name}</h2>
              <p className="text-gray-700 leading-relaxed">{groomer.description}</p>
            </div>

            {/* Services */}
            {groomer.services && groomer.services.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {groomer.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{groomer.address}, {groomer.county}</span>
                </div>
                {groomer.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`tel:${groomer.phone}`} className="text-blue-600 hover:underline">{groomer.phone}</a>
                  </div>
                )}
                {groomer.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`mailto:${groomer.email}`} className="text-blue-600 hover:underline">{groomer.email}</a>
                  </div>
                )}
                {groomer.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={groomer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {groomer.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {groomer.hours && (
              <div>
                <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="whitespace-pre-line">{groomer.hours}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomingDetailPage;
EOL

# PlaceDetailPage.tsx
cat > src/pages/PlaceDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import places data
import placesData from '../data/places_data';

const PlaceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [place, setPlace] = useState<any | null>(null);

  useEffect(() => {
    // Find the place with the matching ID
    const placeId = parseInt(id || '0');
    const foundPlace = placesData.find(p => p.id === placeId);
    
    if (foundPlace) {
      setPlace(foundPlace);
    } else {
      // Redirect to places page if place not found
      navigate('/places');
    }
  }, [id, navigate]);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${place.name} | Dog-Friendly Places | DogDays.ie`}
        description={`Visit ${place.name} in ${place.county}. ${place.description}`}
        canonicalUrl={`https://www.dogdays.ie/places/${place.id}`}
      />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-800">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/places')}
              className="flex items-center text-white mb-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dog-Friendly Places
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">{place.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{place.address}, {place.county}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {/* Rating Section */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold ml-1">{place.rating.toFixed(1)}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{place.reviewCount} reviews</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About {place.name}</h2>
              <p className="text-gray-700 leading-relaxed">{place.description}</p>
            </div>

            {/* Amenities */}
            {place.amenities && place.amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dog-Friendly Amenities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {place.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{place.address}, {place.county}</span>
                </div>
                {place.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`tel:${place.phone}`} className="text-blue-600 hover:underline">{place.phone}</a>
                  </div>
                )}
                {place.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`mailto:${place.email}`} className="text-blue-600 hover:underline">{place.email}</a>
                  </div>
                )}
                {place.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {place.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {place.hours && (
              <div>
                <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="whitespace-pre-line">{place.hours}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailPage;
EOL

# Update App.tsx to include all routes
echo "Updating App.tsx with all routes..."

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

# Update ParksPage.tsx to include category prop
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
                           park.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty = countyFilter === '' || park.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredParks(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Parks & Walks in Ireland | DogDays.ie"
        description="Find dog-friendly parks and walks across Ireland. Discover the perfect outdoor space for you and your furry friend."
        canonicalUrl="https://www.dogdays.ie/parks"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Parks & Walks</h1>
          <p className="text-xl max-w-3xl">
            Discover dog-friendly parks and walking trails across Ireland. 
            Find the perfect outdoor space for you and your furry friend.
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
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">No parks found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find dog-friendly parks and walks.
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

# Update GroomingPage.tsx to include category prop
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
  const [filteredGroomers, setFilteredGroomers] = useState(groomingData);

  // Get unique counties for filter dropdown
  const counties = [...new Set(groomingData.map(groomer => groomer.county))].sort();

  useEffect(() => {
    // Filter groomers based on search term and county filter
    const filtered = groomingData.filter(groomer => {
      const matchesSearch = groomer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           groomer.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty = countyFilter === '' || groomer.county === countyFilter;
      return matchesSearch && matchesCounty;
    });
    
    setFilteredGroomers(filtered);
  }, [searchTerm, countyFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Dog Grooming Services in Ireland | DogDays.ie"
        description="Find professional dog grooming services across Ireland. From basic baths to full styling, find the perfect groomer for your dog."
        canonicalUrl="https://www.dogdays.ie/grooming"
      />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dog Grooming Services</h1>
          <p className="text-xl max-w-3xl">
            Find professional dog groomers across Ireland. From basic baths to full styling, 
            discover the perfect grooming solution for your furry friend.
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
            {filteredGroomers.length} {filteredGroomers.length === 1 ? 'Groomer' : 'Groomers'} Found
          </h2>
          
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

# Update PlacesPage.tsx to include category prop
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
EOL

echo "Fix completed successfully!"
echo ""
echo "This script has:"
echo "1. Created detail page components for Parks, Grooming, and Places"
echo "2. Updated App.tsx with all the necessary routes"
echo "3. Updated category pages to include the correct 'category' prop in ListingCard"
echo ""
echo "The 'View Details' buttons should now work correctly for all categories."
echo ""
echo "IMPORTANT: Make sure to deploy these changes to fix the routing issues."
