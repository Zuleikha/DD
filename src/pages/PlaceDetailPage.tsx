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
