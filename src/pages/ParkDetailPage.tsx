import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Clock, Phone, Globe, ArrowLeft } from 'lucide-react';
import { parksData } from '../data/parks_data';

// Import images using the same method as ParksPage
import parkImage1 from '../assets/images/parks/park_generic_1.png';
import parkImage2 from '../assets/images/parks/park_generic_2.png';
import parkImage3 from '../assets/images/parks/park_generic_3.png';
import parkImage4 from '../assets/images/parks/park_generic_4.png';
import parkImage5 from '../assets/images/parks/park_generic_5.png';

interface Park {
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

const ParkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [park, setPark] = useState<Park | null>(null);

  // Get the appropriate image for the park
  const getGenericImage = (parkId: number): string => {
    const images = [parkImage1, parkImage2, parkImage3, parkImage4, parkImage5];
    return images[(parkId - 1) % images.length];
  };

  useEffect(() => {
    if (id) {
      const foundPark = parksData.find((p: Park) => p.id === parseInt(id));
      setPark(foundPark || null);
    }
  }, [id]);

  if (!park) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Park not found</h2>
          <Link 
            to="/parks" 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Parks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/parks" 
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Parks
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={getGenericImage(park.id)}
                alt={park.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                style={{
                  imageRendering: '-webkit-optimize-contrast'
                }}
                loading="eager"
              />
            </div>

            {/* Park Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{park.name}</h1>
                <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-semibold text-green-800">{park.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({park.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{park.address}, {park.county}</span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{park.description}</p>

              {/* Amenities */}
              {park.amenities && park.amenities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {park.amenities.map((amenity: string, index: number) => (
                      <span 
                        key={index} 
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Leash Rules */}
              {park.leashRules && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Leash Rules</h3>
                  <p className="text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    {park.leashRules}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Park Information</h3>
              
              {/* Hours */}
              <div className="mb-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-medium">Opening Hours</span>
                </div>
                <p className="text-gray-600 ml-7">{park.hours}</p>
              </div>

              {/* Phone */}
              {park.phone && (
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-medium">Phone</span>
                  </div>
                  <a 
                    href={`tel:${park.phone}`}
                    className="text-green-600 hover:text-green-700 ml-7"
                  >
                    {park.phone}
                  </a>
                </div>
              )}

              {/* Website */}
              {park.website && (
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Globe className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-medium">Website</span>
                  </div>
                  <a 
                    href={park.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 ml-7 break-words"
                  >
                    Visit Website
                  </a>
                </div>
              )}

              {/* Size */}
              {park.size && (
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-medium">Size</span>
                  </div>
                  <p className="text-gray-600 ml-7">{park.size}</p>
                </div>
              )}

              {/* County */}
              <div className="mb-6">
                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-medium">County</span>
                </div>
                <p className="text-gray-600 ml-7">{park.county}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {park.website && (
                  <a
                    href={park.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Visit Official Website
                  </a>
                )}
                
                <Link
                  to="/parks"
                  className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Back to All Parks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetailPage;

