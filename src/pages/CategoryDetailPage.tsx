import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';

import SEO from '../components/common/SEO';

// Import all data files
import vetsData from './vets_data.js';
import parksData from './parks_data.js';
import nutritionData from './nutrition_data.js';
import trainingData from './training_data.js';
import groomingData from './grooming_data.js';
import placesData from './places_data.js';

// Define interfaces for each category
interface Vet {
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
  specialties: string[];
  hours: string;
}

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
  amenities: string[];
  leashRules: string;
  size: string;
  hours: string;
}

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
  products: string[];
  services: string[];
  hours: string;
}

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
  specialties: string[];
  hours: string;
}

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
  specialties: string[];
  hours: string;
}

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
  amenities: string[];
  dogPolicy: string;
  hours: string;
}

// Generic type for all business types
type BusinessType = Vet | Park | Nutrition | Training | Grooming | Place;

const CategoryDetailPage: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [business, setBusiness] = useState<BusinessType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [businessType, setBusinessType] = useState<string>('');

  useEffect(() => {
    if (!id) {
      setError('Business ID not found');
      setLoading(false);
      return;
    }

    const businessId = parseInt(id, 10);
    let foundBusiness: BusinessType | null = null;
    let type = '';

    // Find the business based on the category
    switch (category) {
      case 'vet-detail':
        foundBusiness = vetsData.find((vet: Vet) => vet.id === businessId) || null;
        type = 'vet';
        break;
      case 'park-detail':
        foundBusiness = parksData.find((park: Park) => park.id === businessId) || null;
        type = 'park';
        break;
      case 'nutrition-detail':
        foundBusiness = nutritionData.find((store: Nutrition) => store.id === businessId) || null;
        type = 'nutrition';
        break;
      case 'training-detail':
        foundBusiness = trainingData.find((trainer: Training) => trainer.id === businessId) || null;
        type = 'training';
        break;
      case 'grooming-detail':
        foundBusiness = groomingData.find((groomer: Grooming) => groomer.id === businessId) || null;
        type = 'grooming';
        break;
      case 'place-detail':
        foundBusiness = placesData.find((place: Place) => place.id === businessId) || null;
        type = 'place';
        break;
      default:
        setError('Invalid category');
    }

    if (foundBusiness) {
      setBusiness(foundBusiness);
      setBusinessType(type);
      setLoading(false);
    } else {
      setError('Business not found');
      setLoading(false);
    }
  }, [category, id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !business) {
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

  // Get the back link and title based on business type
  const getBackLink = () => {
    switch (businessType) {
      case 'vet': return '/vets';
      case 'park': return '/parks';
      case 'nutrition': return '/nutrition';
      case 'training': return '/training';
      case 'grooming': return '/grooming';
      case 'place': return '/places';
      default: return '/';
    }
  };

  const getBackTitle = () => {
    switch (businessType) {
      case 'vet': return 'Vets';
      case 'park': return 'Parks & Walks';
      case 'nutrition': return 'Nutrition';
      case 'training': return 'Dog Training';
      case 'grooming': return 'Grooming';
      case 'place': return 'Dog-Friendly Places';
      default: return 'Home';
    }
  };

  // Render tags based on business type
  const renderTags = () => {
    if (businessType === 'vet' || businessType === 'training' || businessType === 'grooming') {
      const specialties = (business as Vet | Training | Grooming).specialties;
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (businessType === 'park' || businessType === 'place') {
      const amenities = (business as Park | Place).amenities;
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (businessType === 'nutrition') {
      const products = (business as Nutrition).products;
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{product}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  // Render services section for all business types
  const renderServices = () => {
    if (businessType === 'park') {
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Park Information</h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start bg-blue-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-semibold">Leash Rules:</span>
                <p>{(business as Park).leashRules}</p>
              </div>
            </div>
            <div className="flex items-start bg-blue-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-semibold">Size:</span>
                <p>{(business as Park).size}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (businessType === 'place') {
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Dog Policy</h2>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-gray-700">{(business as Place).dogPolicy}</p>
          </div>
        </div>
      );
    } else {
      const services = (business as Vet | Nutrition | Training | Grooming).services;
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${business.name} | ${getBackTitle()} Details`}
        description={`Learn more about ${business.name}, a ${getBackTitle().toLowerCase()} service in ${business.county}, Ireland.`}
        canonicalUrl={`https://www.dogdays.ie/${category}/${id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{business.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{business.address}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{business.rating.toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{business.reviewCount} reviews</span>
                </div>
              </div>
              <Link to={getBackLink()} className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to {getBackTitle()}
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
                    src={business.image} 
                    alt={business.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About {business.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{business.description}</p>
                </div>

                {/* Services or Amenities Section */}
                {renderServices()}

                {/* Tags Section (Specialties, Amenities, or Products) */}
                {renderTags()}
              </div>

              {/* Right Column - Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-700">{business.address}</p>
                      <p className="text-gray-700">County {business.county}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-700">{business.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href={`mailto:${business.email}`} className="text-blue-600 hover:underline">
                        {business.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Website</h3>
                      <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {business.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">{business.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name + ' ' + business.address)}`}
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

export default CategoryDetailPage;
