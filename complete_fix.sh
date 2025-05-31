#!/bin/bash

# Script to create dedicated detail pages and fix data exports for all categories

# Create directory structure if it doesn't exist
mkdir -p src/pages
mkdir -p src/data

# Update type declarations to use the correct export default pattern

# Update vets_data.d.ts
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

declare const vetsData: Vet[];
export default vetsData;
EOL

# Update parks_data.d.ts
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

declare const parksData: Park[];
export default parksData;
EOL

# Update nutrition_data.d.ts
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

declare const nutritionData: Nutrition[];
export default nutritionData;
EOL

# Update training_data.d.ts
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

declare const trainingData: Training[];
export default trainingData;
EOL

# Update grooming_data.d.ts
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

declare const groomingData: Grooming[];
export default groomingData;
EOL

# Update places_data.d.ts
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

declare const placesData: Place[];
export default placesData;
EOL

# Create TrainingDetailPage.tsx
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
  const [training, setTraining] = useState<Training | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const trainingId = parseInt(id, 10);
      const foundTraining = trainingData.find((t: Training) => t.id === trainingId);
      
      if (foundTraining) {
        setTraining(foundTraining);
        setLoading(false);
      } else {
        setError('Training service not found');
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

  if (error || !training) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Training service not found'}</p>
          <Link to="/training" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Dog Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${training.name} | Dog Training Details`}
        description={`Learn more about ${training.name}, a dog training service in ${training.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/training/${training.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{training.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{training.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{training.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{training.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/training" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dog Training
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
                    src={training.image} 
                    alt={training.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {training.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{training.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {training.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {training.specialties && training.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {training.specialties.map((specialty, index) => (
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

                {training.trainingTypes && training.trainingTypes.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Training Methods</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {training.trainingTypes.map((type, index) => (
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
                      <p className="text-gray-700">{training.address}</p>
                      <p className="text-gray-700">County {training.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{training.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${training.email}`} className="text-blue-600 hover:underline">
                        {training.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={training.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {training.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{training.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(training.name + ' ' + training.address)}`}
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

# Create GroomingDetailPage.tsx
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
  const [grooming, setGrooming] = useState<Grooming | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const groomingId = parseInt(id, 10);
      const foundGrooming = groomingData.find((g: Grooming) => g.id === groomingId);
      
      if (foundGrooming) {
        setGrooming(foundGrooming);
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

  if (error || !grooming) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Grooming service not found'}</p>
          <Link to="/grooming" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Dog Grooming
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${grooming.name} | Dog Grooming Details`}
        description={`Learn more about ${grooming.name}, a dog grooming service in ${grooming.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/grooming/${grooming.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{grooming.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{grooming.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{grooming.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{grooming.reviewCount} reviews</span>
                </div>
              </div>
              <Link to="/grooming" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Dog Grooming
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
                    src={grooming.image} 
                    alt={grooming.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {grooming.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{grooming.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {grooming.services.map((service, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {grooming.specialties && grooming.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {grooming.specialties.map((specialty, index) => (
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
                      <p className="text-gray-700">{grooming.address}</p>
                      <p className="text-gray-700">County {grooming.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{grooming.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${grooming.email}`} className="text-blue-600 hover:underline">
                        {grooming.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={grooming.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {grooming.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{grooming.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(grooming.name + ' ' + grooming.address)}`}
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

# Create PlaceDetailPage.tsx
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

# Update App.tsx to use the dedicated detail pages
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

echo "Detail pages for Dog Training, Grooming, and Dog-Friendly Places have been created!"
echo ""
echo "This script has updated the following files:"
echo "1. Updated all data type declarations (.d.ts files) to use the correct export default pattern"
echo "2. Created dedicated detail pages for each category"
echo "3. Updated App.tsx to use these dedicated detail pages"
echo ""
echo "The 'View Details' buttons should now work correctly for all categories."
echo ""
echo "IMPORTANT: Make sure to deploy these changes to fix the routing issues."
