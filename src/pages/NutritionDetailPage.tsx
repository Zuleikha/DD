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
