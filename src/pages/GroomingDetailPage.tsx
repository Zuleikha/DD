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
                  {groomer.services.map((service, index) => (
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
