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
