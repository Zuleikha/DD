#!/bin/bash

# Script to create all detail pages and update routes for dogdays.ie website

# Create directory structure if it doesn't exist
mkdir -p src/pages
mkdir -p src/components/common
mkdir -p src/components/listings
mkdir -p src/data

# Copy all detail page components to the pages directory
echo "Creating detail page components..."

# VetDetailPage
cat > src/pages/VetDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the vets data
import vetsData from '../data/vets_data.js';

// Define a type for vet objects
interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  specialties?: string[];
  hours: string;
}

const VetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vet, setVet] = useState<Vet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const vetId = parseInt(id, 10);
      const foundVet = vetsData.find((v: Vet) => v.id === vetId);
      
      if (foundVet) {
        setVet(foundVet);
        setLoading(false);
      } else {
        setError('Veterinarian not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !vet) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Veterinarian not found'}</p>
          <Link to="/vets" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Veterinarians
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${vet.name} | Veterinarian Details`}
        description={`Learn more about ${vet.name}, a veterinary service in ${vet.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/vets/${vet.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{vet.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{vet.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{vet.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{vet.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/vets" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Veterinarians
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={vet.image} 
                    alt={vet.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {vet.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{vet.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vet.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {vet.specialties && vet.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vet.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{vet.address}</p>
                      <p className="text-gray-700">County {vet.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{vet.phone}</p>
                      {vet.mobile && vet.mobile !== vet.phone && (
                        <p className="text-gray-700">Mobile: {vet.mobile}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${vet.email}`} className="text-blue-600 hover:underline">
                        {vet.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={vet.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {vet.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{vet.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.name + ' ' + vet.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VetDetailPage;
EOL

# ParkDetailPage
cat > src/pages/ParkDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the parks data
import parksData from '../data/parks_data.js';

// Define a type for park objects
interface Park {
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
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}

const ParkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [park, setPark] = useState<Park | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const parkId = parseInt(id, 10);
      const foundPark = parksData.find((p: Park) => p.id === parkId);
      
      if (foundPark) {
        setPark(foundPark);
        setLoading(false);
      } else {
        setError('Park not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !park) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Park not found'}</p>
          <Link to="/parks" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Parks & Walks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${park.name} | Dog Park Details`}
        description={`Learn more about ${park.name}, a dog park in ${park.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/parks/${park.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{park.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{park.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{park.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{park.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/parks" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Parks & Walks
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={park.image} 
                    alt={park.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {park.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{park.description}</p>
                </div>

                {park.amenities && park.amenities.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {park.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Park Information</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {park.leashRules && (
                      <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">Leash Rules:</span>
                          <p>{park.leashRules}</p>
                        </div>
                      </div>
                    )}
                    {park.size && (
                      <div className="flex items-start bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">Size:</span>
                          <p>{park.size}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{park.address}</p>
                      <p className="text-gray-700">County {park.county}</p>
                    </div>
                  </div>

                  {park.phone && (
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-700">{park.phone}</p>
                      </div>
                    </div>
                  )}

                  {park.email && (
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href={`mailto:${park.email}`} className="text-blue-600 hover:underline">
                          {park.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {park.website && (
                    <div className="flex items-start">
                      <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Website</h3>
                        <a href={park.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {park.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="text-gray-700">{park.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.name + ' ' + park.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ParkDetailPage;
EOL

# NutritionDetailPage
cat > src/pages/NutritionDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the nutrition data
import nutritionData from '../data/nutrition_data.js';

// Define a type for nutrition objects
interface Nutrition {
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
  products?: string[];
  services: string[];
  brands?: string[];
  hours: string;
}

const NutritionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Nutrition | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const storeId = parseInt(id, 10);
      const foundStore = nutritionData.find((s: Nutrition) => s.id === storeId);
      
      if (foundStore) {
        setStore(foundStore);
        setLoading(false);
      } else {
        setError('Nutrition store not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !store) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Nutrition store not found'}</p>
          <Link to="/nutrition" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Nutrition Stores
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${store.name} | Dog Nutrition Details`}
        description={`Learn more about ${store.name}, a dog nutrition store in ${store.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/nutrition/${store.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{store.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{store.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{store.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/nutrition" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Nutrition Stores
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {store.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{store.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {store.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {store.products && store.products.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {store.products.map((product, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {store.brands && store.brands.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Brands</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {store.brands.map((brand, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{store.address}</p>
                      <p className="text-gray-700">County {store.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{store.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${store.email}`} className="text-blue-600 hover:underline">
                        {store.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={store.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {store.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{store.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + ' ' + store.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NutritionDetailPage;
EOL

# TrainingDetailPage
cat > src/pages/TrainingDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the training data
import trainingData from '../data/training_data.js';

// Define a type for training objects
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
  trainingTypes?: string[];
  hours: string;
}

const TrainingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [trainer, setTrainer] = useState<Training | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const trainerId = parseInt(id, 10);
      const foundTrainer = trainingData.find((t: Training) => t.id === trainerId);
      
      if (foundTrainer) {
        setTrainer(foundTrainer);
        setLoading(false);
      } else {
        setError('Dog trainer not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !trainer) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Dog trainer not found'}</p>
          <Link to="/training" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Dog Trainers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${trainer.name} | Dog Training Details`}
        description={`Learn more about ${trainer.name}, a dog training service in ${trainer.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/training/${trainer.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{trainer.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{trainer.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{trainer.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{trainer.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/training" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dog Trainers
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {trainer.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{trainer.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {trainer.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {trainer.specialties && trainer.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {trainer.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {trainer.trainingTypes && trainer.trainingTypes.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Training Methods</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {trainer.trainingTypes.map((type, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{trainer.address}</p>
                      <p className="text-gray-700">County {trainer.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{trainer.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${trainer.email}`} className="text-blue-600 hover:underline">
                        {trainer.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={trainer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {trainer.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{trainer.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trainer.name + ' ' + trainer.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TrainingDetailPage;
EOL

# GroomingDetailPage
cat > src/pages/GroomingDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the grooming data
import groomingData from '../data/grooming_data.js';

// Define a type for grooming objects
interface Grooming {
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
}

const GroomingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [groomer, setGroomer] = useState<Grooming | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const groomerId = parseInt(id, 10);
      const foundGroomer = groomingData.find((g: Grooming) => g.id === groomerId);
      
      if (foundGroomer) {
        setGroomer(foundGroomer);
        setLoading(false);
      } else {
        setError('Grooming service not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !groomer) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Grooming service not found'}</p>
          <Link to="/grooming" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Grooming Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${groomer.name} | Dog Grooming Details`}
        description={`Learn more about ${groomer.name}, a dog grooming service in ${groomer.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/grooming/${groomer.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{groomer.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{groomer.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{groomer.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{groomer.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/grooming" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Grooming Services
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={groomer.image} 
                    alt={groomer.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {groomer.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{groomer.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {groomer.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {groomer.specialties && groomer.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {groomer.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{groomer.address}</p>
                      <p className="text-gray-700">County {groomer.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{groomer.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${groomer.email}`} className="text-blue-600 hover:underline">
                        {groomer.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={groomer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {groomer.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{groomer.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(groomer.name + ' ' + groomer.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GroomingDetailPage;
EOL

# PlaceDetailPage
cat > src/pages/PlaceDetailPage.tsx << 'EOL'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the places data
import placesData from '../data/places_data.js';

// Define a type for place objects
interface Place {
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
  amenities?: string[];
  dogPolicy?: string;
  hours: string;
}

const PlaceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const placeId = parseInt(id, 10);
      const foundPlace = placesData.find((p: Place) => p.id === placeId);
      
      if (foundPlace) {
        setPlace(foundPlace);
        setLoading(false);
      } else {
        setError('Dog-friendly place not found');
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !place) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Dog-friendly place not found'}</p>
          <Link to="/places" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Dog-Friendly Places
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${place.name} | Dog-Friendly Place Details`}
        description={`Learn more about ${place.name}, a dog-friendly place in ${place.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/places/${place.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{place.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{place.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{place.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{place.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/places" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dog-Friendly Places
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image and Description */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {place.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{place.description}</p>
                </div>

                {place.dogPolicy && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Dog Policy</h2>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700">{place.dogPolicy}</p>
                    </div>
                  </div>
                )}

                {place.amenities && place.amenities.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {place.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{place.address}</p>
                      <p className="text-gray-700">County {place.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{place.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${place.email}`} className="text-blue-600 hover:underline">
                        {place.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {place.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{place.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlaceDetailPage;
EOL

# Create App.tsx with updated routes
cat > src/App.tsx << 'EOL'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
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
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
EOL

# Create TypeScript interface files
cat > src/data/vets_data.d.ts << 'EOL'
export interface Vet {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile?: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  specialties?: string[];
  hours: string;
}
EOL

cat > src/data/parks_data.d.ts << 'EOL'
export interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}
EOL

cat > src/data/nutrition_data.d.ts << 'EOL'
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
  products?: string[];
  services: string[];
  brands?: string[];
  hours: string;
}
EOL

cat > src/data/training_data.d.ts << 'EOL'
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
  specialties?: string[];
  trainingTypes?: string[];
  hours: string;
}
EOL

cat > src/data/grooming_data.d.ts << 'EOL'
export interface Grooming {
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
}
EOL

cat > src/data/places_data.d.ts << 'EOL'
export interface Place {
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
  amenities?: string[];
  dogPolicy?: string;
  hours: string;
}
EOL

# Create a simple SEO component
cat > src/components/common/SEO.tsx << 'EOL'
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
EOL

# Create a simple ListingCard component
cat > src/components/listings/ListingCard.tsx << 'EOL'
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  county: string;
  detailPath: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  description,
  county,
  detailPath
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>County {county}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={detailPath} 
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

echo "All detail pages and supporting files have been created successfully!"
echo "To use these files in your project, run this script in your project root directory."
echo "Make sure to install required dependencies:"
echo "npm install react-router-dom lucide-react react-helmet"
