#!/bin/bash

# Script to fix TypeScript 'any' type errors in detail pages

# Create necessary directories
mkdir -p src/pages

# Fix ParkDetailPage.tsx
echo "Fixing ParkDetailPage.tsx..."
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
                  {park.amenities.map((amenity: string, index: number) => (
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

# Fix GroomingDetailPage.tsx
echo "Fixing GroomingDetailPage.tsx..."
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
                  {groomer.services.map((service: string, index: number) => (
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

# Fix PlaceDetailPage.tsx
echo "Fixing PlaceDetailPage.tsx..."
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
                  {place.amenities.map((amenity: string, index: number) => (
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

echo "Fix completed successfully!"
echo ""
echo "This script has fixed the TypeScript 'any' type errors in all detail pages by:"
echo "1. Adding explicit type annotations to map function parameters"
echo "2. Using (amenity: string, index: number) instead of just (amenity, index)"
echo "3. Using (service: string, index: number) instead of just (service, index)"
echo ""
echo "Your project should now deploy without TypeScript errors."
