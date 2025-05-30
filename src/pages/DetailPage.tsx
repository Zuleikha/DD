import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';

import GoogleMap from '../components/maps/GoogleMap';
import SEO from '../components/common/SEO';

// Import the enriched dog minders data
import dogMinders from './dog_minders_data.js';

// Define a type for your listing objects for better type safety
interface Listing {
  id: number;
  title: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance: string;
  type: 'vet' | 'park' | 'grooming' | 'nutrition' | 'training' | 'place'; // More specific types
  image: string;
  featured?: boolean; // Optional property
  lat: number;
  lng: number;
  phone?: string;
  website?: string;
  email?: string;
  hours?: string;
  description: string;
  services?: string[]; // Specific to vets/grooming
  team?: { name: string; role: string; bio: string; }[]; // Specific to vets/grooming
  facilities?: string[]; // Specific to parks
  rules?: string[]; // Specific to parks
  bestTimes?: string; // Specific to parks
}

// Define a type for dog minder objects
interface DogMinder {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  hours: string;
}

// Add Google Maps API key variable - leave empty until you have a valid key
// In a real application, you might load this from environment variables (e.g., process.env.REACT_APP_Maps_API_KEY)
const Maps_API_KEY = ""; // Replace with your actual API key when ready

// Mock database of all listings (typed)
const allListings: Listing[] = [
  // VET LISTINGS
  {
    id: 1,
    title: 'Village Vets Cabra',
    address: '2 Quarry Rd, Cabra East, Dublin 7, D07 FX97',
    rating: 4.8,
    reviewCount: 124,
    distance: '1.2 km',
    type: 'vet',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    featured: true,
    lat: 53.3643,
    lng: -6.2977,
    phone: '01 869 2309',
    website: 'https://villagevets.ie',
    email: 'cabra@villagevets.ie',
    hours: 'Mon-Fri: 8am-7pm, Sat: 9am-1pm, Sun: Closed',
    description: 'Village Vets Cabra is a modern, fully-equipped veterinary clinic providing comprehensive healthcare services for dogs, cats, and small pets. Our team of experienced veterinarians offers preventative care, surgical procedures, dental treatments, and emergency services.',
    services: ['Vaccinations', 'Microchipping', 'Surgery', 'Dental Care', 'X-Ray & Ultrasound', 'Laboratory Testing', 'Nutritional Counseling'],
    team: [
      { name: 'Dr. Sarah Murphy', role: 'Lead Veterinarian', bio: 'Dr. Murphy has over 15 years of experience in small animal medicine and surgery.' },
      { name: 'Dr. James O\'Connor', role: 'Veterinary Surgeon', bio: 'Dr. O\'Connor specializes in orthopedic procedures and emergency medicine.' }
    ]
  },
  // ... other listings (truncated for brevity)
];

const DetailPage: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const [listing, setListing] = useState<Listing | null>(null);
  const [minder, setMinder] = useState<DogMinder | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if we're looking for a dog minder or a regular listing
    if (type === 'minders' && id) {
      const minderId = parseInt(id, 10);
      const foundMinder = dogMinders.find((m: DogMinder) => m.id === minderId);
      
      if (foundMinder) {
        setMinder(foundMinder);
        setListing(null);
        setLoading(false);
      } else {
        setError('Dog minder not found');
        setLoading(false);
      }
    } else if (id) {
      // Original listing lookup logic
      const listingId = parseInt(id, 10);
      const foundListing = allListings.find(l => l.id === listingId);
      
      if (foundListing) {
        setListing(foundListing);
        setMinder(null);
        setLoading(false);
      } else {
        setError('Listing not found');
        setLoading(false);
      }
    }
  }, [id, type]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || (!listing && !minder)) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Something went wrong'}</p>
          <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Render dog minder details
  if (minder) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO
          title={`${minder.name} | Dog Minder Details`}
          description={`Learn more about ${minder.name}, a professional dog minder in ${minder.county}, Ireland.`}
          canonicalUrl={`https://www.dogdays.ie/minders/${minder.id}`}
        />

        <main className="flex-grow">
          {/* Hero Section with gradient background */}
          <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{minder.name}</h1>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{minder.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-1" />
                    <span className="font-semibold">{minder.rating.toFixed(1)}</span>
                    <span className="mx-1">•</span>
                    <span>{minder.reviewCount} reviews</span>
                  </div>
                </div>
                <Link to="/minders" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                  <ArrowLeft className="h-5 w-5 mr-1" />
                  Back to Dog Minders
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
                      src={minder.image} 
                      alt={minder.name} 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">About {minder.name}</h2>
                    <p className="text-gray-700 leading-relaxed">{minder.description}</p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {minder.services.map((service, index) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{service}</span>
                        </div>
                      ))}
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
                        <p className="text-gray-700">{minder.address}</p>
                        <p className="text-gray-700">County {minder.county}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-700">{minder.phone}</p>
                        {minder.mobile !== minder.phone && (
                          <p className="text-gray-700">Mobile: {minder.mobile}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href={`mailto:${minder.email}`} className="text-blue-600 hover:underline">
                          {minder.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Website</h3>
                        <a href={minder.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {minder.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-700">{minder.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(minder.name + ' ' + minder.address)}`}
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
  }

  // Original listing detail rendering (for vets, parks, etc.)
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${listing?.title} | Details`}
        description={`Learn more about ${listing?.title}, a ${listing?.type} in Dublin, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/${listing?.type}/${listing?.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{listing?.title}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{listing?.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{listing?.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{listing?.reviewCount} reviews</span>
                </div>
              </div>
              <Link to={`/${listing?.type}s`} className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to {listing?.type === 'vet' ? 'Vets' : 
                         listing?.type === 'park' ? 'Parks' : 
                         listing?.type === 'grooming' ? 'Grooming' : 
                         'Listings'}
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
                    src={listing?.image} 
                    alt={listing?.title} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {listing?.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{listing?.description}</p>
                </div>

                {/* Conditional rendering based on listing type */}
                {listing?.type === 'vet' || listing?.type === 'grooming' ? (
                  <>
                    {/* Services Section */}
                    {listing.services && listing.services.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {listing.services.map((service, index) => (
                            <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Team Section */}
                    {listing.team && listing.team.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
                        <div className="space-y-4">
                          {listing.team.map((member, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <h3 className="font-bold text-lg">{member.name}</h3>
                              <p className="text-blue-600 mb-2">{member.role}</p>
                              <p className="text-gray-700">{member.bio}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : listing?.type === 'park' ? (
                  <>
                    {/* Facilities Section */}
                    {listing.facilities && listing.facilities.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Facilities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {listing.facilities.map((facility, index) => (
                            <div key={index} className="flex items-center bg-green-50 p-3 rounded-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Rules Section */}
                    {listing.rules && listing.rules.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Park Rules</h2>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <ul className="list-disc pl-5 space-y-2">
                            {listing.rules.map((rule, index) => (
                              <li key={index} className="text-gray-700">{rule}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Best Times Section */}
                    {listing.bestTimes && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Best Times to Visit</h2>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700">{listing.bestTimes}</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : null}
              </div>

              {/* Right Column - Contact Information and Map */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-700">{listing?.address}</p>
                      </div>
                    </div>

                    {listing?.phone && (
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p className="text-gray-700">{listing.phone}</p>
                        </div>
                      </div>
                    )}

                    {listing?.email && (
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <a href={`mailto:${listing.email}`} className="text-blue-600 hover:underline">
                            {listing.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing?.website && (
                      <div className="flex items-start">
                        <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold">Website</h3>
                          <a href={listing.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {listing.website.replace(/^https?:\/\//, '')}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing?.hours && (
                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold">Hours</h3>
                          <p className="text-gray-700">{listing.hours}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing?.title + ' ' + listing?.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View on Map
                    </a>
                  </div>
                </div>

                {/* Map Section */}
                {listing?.lat && listing?.lng && (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64">
                      {Maps_API_KEY ? (
                        <div className="h-full flex items-center justify-center bg-gray-100">
                          <p className="text-gray-500">Map will be displayed here when API key is provided</p>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center bg-gray-100">
                          <p className="text-gray-500">Map preview unavailable</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailPage;
