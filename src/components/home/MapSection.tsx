import React, { useState } from 'react';
import { MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define location types
type LocationType = 'vet' | 'park' | 'grooming' | 'cafe';

interface Location {
  id: string | number;
  lat: number;
  lng: number;
  title: string;
  type: LocationType;
  address: string;
  rating: number;
  reviews: number;
}

const MapSection: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<LocationType[]>(['vet', 'park', 'grooming', 'cafe']);

  const allLocations: Location[] = [
    {
      id: 1,
      lat: 53.3498,
      lng: -6.2603,
      title: 'Happy Paws Veterinary Clinic',
      type: 'vet',
      address: '123 Main Street, Dublin 2',
      rating: 5,
      reviews: 42,
    },
    {
      id: 2,
      lat: 53.3558,
      lng: -6.3294,
      title: 'Phoenix Park Dog Walking Area',
      type: 'park',
      address: 'Phoenix Park, Dublin 8',
      rating: 5,
      reviews: 87,
    },
    {
      id: 3,
      lat: 53.3429,
      lng: -6.2674,
      title: 'Paws & Relax Dog Grooming',
      type: 'grooming',
      address: '45 Grafton Street, Dublin 2',
      rating: 4,
      reviews: 29,
    },
    {
      id: 4,
      lat: 53.3472,
      lng: -6.2592,
      title: 'Bark & Brew Dog Café',
      type: 'cafe',
      address: '78 Camden Street, Dublin 2',
      rating: 4,
      reviews: 56,
    },
  ];

  const filteredLocations = allLocations.filter((location) => selectedTypes.includes(location.type));
  const nearbyLocations = filteredLocations.slice(0, 3);

  const toggleLocationType = (type: LocationType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Discover Places Near You
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg relative">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '500px' }}
                center={{ lat: 53.3498, lng: -6.2603 }}
                zoom={12}
              >
                {filteredLocations.map((loc) => (
                  <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }} title={loc.title} />
                ))}
              </GoogleMap>
            </LoadScript>

            {/* Map Filters */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 z-10">
              <div className="flex items-center mb-2">
                <Filter className="w-4 h-4 text-[#4A90E2] mr-2" />
                <span className="text-sm font-medium text-gray-700">Filter</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(['vet', 'park', 'cafe', 'grooming'] as LocationType[]).map((type) => (
                  <button
                    key={type}
                    className={`px-3 py-1 text-xs rounded-full ${
                      selectedTypes.includes(type)
                        ? 'bg-[#4A90E2] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white'
                    }`}
                    onClick={() => toggleLocationType(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1) + (type === 'cafe' ? 's' : '')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Nearby Listings */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Nearby Dog-Friendly Places
              </h3>
              <div className="space-y-4">
                {nearbyLocations.length > 0 ? (
                  nearbyLocations.map((location) => (
                    <div key={location.id} className="border-b border-gray-200 pb-4">
                      <div className="flex items-start">
                        <div className="bg-[#F8F4E3] rounded-lg p-2 mr-4">
                          <MapPin
                            className={`w-6 h-6 ${
                              location.type === 'vet'
                                ? 'text-[#F5A623]'
                                : location.type === 'park'
                                ? 'text-[#7ED321]'
                                : location.type === 'grooming'
                                ? 'text-[#4A90E2]'
                                : 'text-[#BD10E0]'
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{location.title}</h4>
                          <p className="text-sm text-gray-600">{location.address}</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= location.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">
                              ({location.reviews} reviews)
                            </span>
                          </div>
                          <p className="text-xs text-[#4A90E2] mt-1">
                            {Math.round((Math.random() * 2 + 0.5) * 10) / 10} km away •{' '}
                            {location.type.charAt(0).toUpperCase() + location.type.slice(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No places found with the selected filters.
                  </div>
                )}
                <div className="pt-2">
                  <Link
                    to="/places"
                    className="block w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md text-center"
                  >
                    View More Places
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
