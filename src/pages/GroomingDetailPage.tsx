import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import grooming data
import groomingData from '../data/grooming_data';

// Define a type for groomer objects - made properties optional to fix deploy errors
interface Groomer {
  id: number;
  name: string;
  address?: string; // Made optional
  county?: string; // Made optional
  phone?: string; // Made optional
  email?: string; // Made optional
  website?: string; // Made optional
  rating?: number; // Made optional
  reviewCount?: number; // Made optional
  description: string;
  image?: string; // Made optional
  services?: string[]; // Made optional
  specialties?: string[];
  hours?: string; // Made optional
}

const GroomingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [groomer, setGroomer] = useState<Groomer | null>(null);

  // Generic images array using direct paths
  const genericImages = [
    '/src/assets/images/grooming/grooming_generic_1.png',
    '/src/assets/images/grooming/grooming_generic_2.png',
    '/src/assets/images/grooming/grooming_generic_3_new.png'
  ];

  // Function to get generic image based on groomer ID
  const getGenericImage = (groomerId: number) => {
    return genericImages[(groomerId - 1) % genericImages.length];
  };

  useEffect(() => {
    // Find the groomer with the matching ID
    const groomerId = parseInt(id || '0');
    const foundGroomer = groomingData.find((g: any) => g.id === groomerId); // Changed to any to avoid type conflicts
    
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Use generic image if no image provided
  const displayImage = groomer.image || getGenericImage(groomer.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${groomer.name} | Dog Grooming | DogDays.ie`}
        description={`Visit ${groomer.name} in ${groomer.county || 'Ireland'}. ${groomer.description}`}
        canonicalUrl={`https://www.dogdays.ie/grooming/${groomer.id}`}
      />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-800">
        <img
          src={displayImage}
          alt={groomer.name}
          className="w-full h-full object-cover opacity-80"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
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
            {groomer.address && groomer.county && (
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{groomer.address}, {groomer.county}</span>
              </div>
            )}
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
                <span className="text-xl font-bold ml-1">{(groomer.rating || 0).toFixed(1)}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{groomer.reviewCount || 0} reviews</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-purple-800">About {groomer.name}</h2>
              <p className="text-gray-700 leading-relaxed">{groomer.description}</p>
            </div>

            {/* Services */}
            {groomer.services && groomer.services.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-purple-800">Services</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {groomer.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specialties */}
            {groomer.specialties && groomer.specialties.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-purple-800">Specialties</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {groomer.specialties.map((specialty: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-purple-800">Contact Information</h2>
              <div className="space-y-3">
                {groomer.address && groomer.county && (
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-500 mr-2" />
                    <span>{groomer.address}, {groomer.county}</span>
                  </div>
                )}
                {groomer.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-500 mr-2" />
                    <a href={`tel:${groomer.phone}`} className="text-purple-600 hover:underline">{groomer.phone}</a>
                  </div>
                )}
                {groomer.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-500 mr-2" />
                    <a href={`mailto:${groomer.email}`} className="text-purple-600 hover:underline">{groomer.email}</a>
                  </div>
                )}
                {groomer.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-purple-500 mr-2" />
                    <a href={groomer.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      {groomer.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {groomer.hours && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-purple-800">Opening Hours</h2>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <div>
                    <p className="whitespace-pre-line">{groomer.hours}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Ready to book an appointment?</h3>
              <p className="text-gray-700 mb-4">Contact {groomer.name} today to schedule professional grooming for your furry friend.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {groomer.phone && (
                  <a
                    href={`tel:${groomer.phone}`}
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors text-center"
                  >
                    Call Now
                  </a>
                )}
                {groomer.email && (
                  <a
                    href={`mailto:${groomer.email}`}
                    className="bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition-colors text-center"
                  >
                    Send Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomingDetailPage;

