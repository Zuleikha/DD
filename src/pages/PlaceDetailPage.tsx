import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import places data
import placesData from '../data/places_data';

// Import images using the same method as training page
import placeImage1 from '../assets/images/places/place_generic_1.png';
import placeImage2 from '../assets/images/places/place_generic_2.png';
import placeImage3 from '../assets/images/places/place_generic_3.png';
import placeImage4 from '../assets/images/places/place_generic_4.png';
import placeImage5 from '../assets/images/places/place_generic_5.png';
import placeImage6 from '../assets/images/places/place_generic_6.png';

// Define the Place interface
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
  dogPolicy?: string;
  dogMenu: string[];
  dogAmenities: string[];
  hours: string;
}

const PlaceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [place, setPlace] = useState<Place | null>(null);

  // Generic place images from your assets folder - same method as training page
  const getGenericImage = (index: number): string => {
    const images = [
      placeImage1,  // Irish pub interior
      placeImage2,  // Modern coffee shop
      placeImage3,  // Restaurant outdoor patio
      placeImage4,  // Brewery taproom
      placeImage5,  // Seaside restaurant
      placeImage6   // Rustic country pub
    ];
    
    return images[index % images.length];
  };

  // Get the appropriate image for each place
  const getPlaceImage = (place: Place): string => {
    // Use the existing image if it's a URL
    if (place.image && place.image.startsWith('http')) {
      return place.image;
    }
    
    // Use generic image based on place ID for consistency
    return place.image || getGenericImage(place.id - 1);
  };

  useEffect(() => {
    // Find the place with the matching ID
    const placeId = parseInt(id || '0');
    const foundPlace = placesData.find((p: Place) => p.id === placeId);
    
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
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
          src={getPlaceImage(place)}
          alt={place.name}
          className="w-full h-full object-cover opacity-80"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
          loading="eager"
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

            {/* Dog Menu */}
            {place.dogMenu && place.dogMenu.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dog Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.dogMenu.map((item: string, index: number) => (
                    <div key={index} className="flex items-center bg-orange-50 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dog Amenities */}
            {place.dogAmenities && place.dogAmenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dog-Friendly Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.dogAmenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center bg-green-50 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
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
                    <a href={`tel:${place.phone}`} className="text-green-600 hover:underline">{place.phone}</a>
                  </div>
                )}
                {place.email && place.email.trim() && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`mailto:${place.email}`} className="text-green-600 hover:underline">{place.email}</a>
                  </div>
                )}
                {place.website && place.website.trim() && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      {place.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {place.hours && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="whitespace-pre-line">{place.hours}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Map Link */}
            {place.address && (
              <div className="mt-6">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View on Map
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailPage;

