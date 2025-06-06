import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import the updated vets data
import vetsData from '../data/vets_data';

// Import images using the same method as training page
import vetImage1 from '../assets/images/vets/vet_generic_1.png';
import vetImage2 from '../assets/images/vets/vet_generic_3.png';
import vetImage3 from '../assets/images/vets/vet_generic_4.png';
import vetImage4 from '../assets/images/vets/vet_generic_5.png';
import vetImage5 from '../assets/images/vets/vet_generic_6.png';

// Define a type for vet objects
interface Vet {
  id: number;
  name: string;
  address?: string;
  county?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  image?: string;
  services?: string[];
  specialties?: string[];
  hours?: string;
}

const VetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vet, setVet] = useState<Vet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Generic vet images from your assets folder - same method as training page
  const getGenericImage = (index: number): string => {
    const images = [
      vetImage1,  // Veterinary clinic reception
      vetImage2,  // Surgery room
      vetImage3,  // Diagnostic equipment
      vetImage4,  // Pharmacy area
      vetImage5   // Examination room
    ];
    return images[index % images.length];
  };

  // Get the appropriate image for each vet
  const getVetImage = (vet: Vet): string => {
    // Use the existing image if it's a URL
    if (vet.image && vet.image.startsWith('http')) {
      return vet.image;
    }
    
    // Use generic image based on vet ID for consistency
    return vet.image || getGenericImage(vet.id - 1);
  };

  useEffect(() => {
    if (id) {
      const vetId = parseInt(id, 10);
      const foundVet = vetsData.find((v: Vet) => v.id === vetId);
      
      if (foundVet) {
        setVet(foundVet);
        setLoading(false);
      } else {
        setError('Veterinarian not found');
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

  if (error || !vet) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error || 'Veterinarian not found'}</p>
          <Link to="/vets" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Veterinarians
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${vet.name} | Veterinarian Details`}
        description={`Learn more about ${vet.name}, a veterinary service in ${vet.county || 'Ireland'}.`}
        canonicalUrl={`https://www.dogdays.ie/vets/${vet.id}`}
      />

      <main className="flex-grow">
        {/* Hero Section with gradient background */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{vet.name}</h1>
                {vet.address && (
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{vet.address}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-1" />
                  <span className="font-semibold">{(vet.rating || 0).toFixed(1)}</span>
                  <span className="mx-1">•</span>
                  <span>{vet.reviewCount || 0} reviews</span>
                </div>
              </div>
              <Link to="/vets" className="mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Veterinarians
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
                    src={getVetImage(vet)} 
                    alt={vet.name} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    style={{
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                    loading="eager"
                  />
                </div>
                
                {vet.description && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">About {vet.name}</h2>
                    <p className="text-gray-700 leading-relaxed">{vet.description}</p>
                  </div>
                )}

                {vet.services && vet.services.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Services Offered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vet.services.map((service: string, index: number) => (
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

                {vet.specialties && vet.specialties.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vet.specialties.map((specialty: string, index: number) => (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{specialty}</span>
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
                  {vet.address && (
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-700">{vet.address}</p>
                        {vet.county && <p className="text-gray-700">County {vet.county}</p>}
                      </div>
                    </div>
                  )}

                  {vet.phone && (
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href={`tel:${vet.phone}`} className="text-blue-600 hover:underline">
                          {vet.phone}
                        </a>
                        {vet.mobile && vet.mobile !== vet.phone && (
                          <p className="text-gray-700">Mobile: {vet.mobile}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {vet.email && vet.email.trim() && (
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href={`mailto:${vet.email}`} className="text-blue-600 hover:underline">
                          {vet.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {vet.website && vet.website.trim() && (
                    <div className="flex items-start">
                      <Globe className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Website</h3>
                        <a href={vet.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {vet.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    </div>
                  )}

                  {vet.hours && (
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-700">{vet.hours}</p>
                      </div>
                    </div>
                  )}
                </div>

                {vet.address && (
                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.name + ' ' + vet.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View on Map
                    </a>
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

export default VetDetailPage;

