import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Clock, Star, Users, Award } from 'lucide-react';
import trainingData from '../data/training_data';

interface Training {
  id: number;
  name: string;
  address?: string;
  county?: string;
  phone?: string;
  email?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  description: string;
  image?: string;
  services?: string[];
  methods?: string;
  classTypes?: string[];
  hours?: string;
  specialties?: string[];
}

// Generic training images
const getGenericImage = (id: number): string => {
  const images = [
    '/placeholder-training-1.jpg',
    '/placeholder-training-2.jpg', 
    '/placeholder-training-3.jpg',
    '/placeholder-training-4.jpg',
    '/placeholder-training-5.jpg',
    '/placeholder-training-6.jpg'
  ];
  return images[(id - 1) % images.length];
};

const TrainingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [trainer, setTrainer] = useState<Training | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundTrainer = trainingData.find(t => t.id === parseInt(id)) as Training;
      if (foundTrainer) {
        setTrainer(foundTrainer);
        document.title = `${foundTrainer.name} - Dog Training | Your Site Name`;
        
        // SEO meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 
            `${foundTrainer.name} - Professional dog training in ${foundTrainer.county || 'Ireland'}. ${foundTrainer.description.substring(0, 150)}...`
          );
        }
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Dog Trainer Not Found</h1>
          <p className="text-gray-600">The trainer you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={trainer.image || getGenericImage(trainer.id)}
                alt={trainer.name}
                className="w-full h-64 md:h-full object-cover"
                style={{
                  imageRendering: '-webkit-optimize-contrast'
                }}
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{trainer.name}</h1>
              
              {trainer.address && trainer.county && (
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>{trainer.address}, {trainer.county}</span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-lg font-semibold">{(trainer.rating || 0).toFixed(1)}</span>
                <span className="text-gray-600 ml-2">({trainer.reviewCount || 0} reviews)</span>
              </div>

              <p className="text-gray-700 mb-6">{trainer.description}</p>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainer.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-500" />
                    <a href={`tel:${trainer.phone}`} className="text-blue-600 hover:underline">
                      {trainer.phone}
                    </a>
                  </div>
                )}

                {trainer.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-500" />
                    <a href={`mailto:${trainer.email}`} className="text-blue-600 hover:underline">
                      {trainer.email}
                    </a>
                  </div>
                )}

                {trainer.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-500" />
                    <a href={trainer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                )}

                {trainer.hours && (
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="text-gray-700">{trainer.hours}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            {trainer.services && trainer.services.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-500" />
                  Training Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {trainer.services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-md">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Training Methods */}
            {trainer.methods && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-500" />
                  Training Methods
                </h2>
                <p className="text-gray-700 leading-relaxed">{trainer.methods}</p>
              </div>
            )}

            {/* Class Types */}
            {trainer.classTypes && trainer.classTypes.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Types Available</h2>
                <div className="space-y-3">
                  {trainer.classTypes.map((classType, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{classType}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specialties */}
            {trainer.specialties && trainer.specialties.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Specialties</h3>
                <div className="space-y-2">
                  {trainer.specialties.map((specialty, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact */}
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Start Training?</h3>
              <p className="mb-4 text-blue-100">
                Contact {trainer.name} today to discuss your dog's training needs and schedule a consultation.
              </p>
              <div className="space-y-3">
                {trainer.phone && (
                  <a
                    href={`tel:${trainer.phone}`}
                    className="block w-full bg-white text-blue-600 text-center py-2 px-4 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  >
                    Call Now
                  </a>
                )}
                {trainer.email && (
                  <a
                    href={`mailto:${trainer.email}`}
                    className="block w-full bg-blue-700 text-white text-center py-2 px-4 rounded-md font-medium hover:bg-blue-800 transition-colors"
                  >
                    Send Email
                  </a>
                )}
              </div>
            </div>

            {/* Hours */}
            {trainer.hours && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Hours
                </h3>
                <p className="text-gray-700">{trainer.hours}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailPage;

