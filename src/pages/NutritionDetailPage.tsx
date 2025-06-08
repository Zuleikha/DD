import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Globe, MapPin, Clock, Star, PawPrint, Bone } from 'lucide-react';
import SEO from '../components/common/SEO';

// Import nutrition data
import nutritionData from '../data/nutrition_data';

interface NutritionItem {
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
  brands?: string[];
  products?: string[];
  hours: string;
}

const NutritionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const nutrition = (nutritionData as NutritionItem[]).find(item => item.id === parseInt(id || '0'));

  // SVG Paw Print Component
  const PawPrint = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 7C16.1 7 17 7.9 17 9C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 9C13 7.9 13.9 7 15 7ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM12 14C15.31 14 18 16.69 18 20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20C6 16.69 8.69 14 12 14Z"/>
    </svg>
  );

  // SVG Bone Component
  const Bone = ({ size = 24, className = "", opacity = 0.2 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={{ opacity }}
    >
      <path d="M3.5 6C2.67 6 2 6.67 2 7.5S2.67 9 3.5 9C4.33 9 5 8.33 5 7.5S4.33 6 3.5 6ZM20.5 6C19.67 6 19 6.67 19 7.5S19.67 9 20.5 9C21.33 9 22 8.33 22 7.5S21.33 6 20.5 6ZM3.5 15C2.67 15 2 15.67 2 16.5S2.67 18 3.5 18C4.33 18 5 17.33 5 16.5S4.33 15 3.5 15ZM20.5 15C19.67 15 19 15.67 19 16.5S19.67 18 20.5 18C21.33 18 22 17.33 22 16.5S21.33 15 20.5 15ZM6 7.5C6 8.88 7.12 10 8.5 10H15.5C16.88 10 18 8.88 18 7.5C18 6.12 16.88 5 15.5 5H8.5C7.12 5 6 6.12 6 7.5ZM6 16.5C6 17.88 7.12 19 8.5 19H15.5C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14H8.5C7.12 14 6 15.12 6 16.5Z"/>
    </svg>
  );

  if (!nutrition) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Service Not Found</h1>
          <Link to="/nutrition" className="text-orange-600 hover:text-orange-700">
            ← Back to Nutrition Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${nutrition.name} - Dog Nutrition Services | DogDays.ie`}
        description={nutrition.description}
        canonicalUrl={`https://www.dogdays.ie/nutrition/${nutrition.id}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 animate-pulse">
            <PawPrint size={60} opacity={0.1} className="animate-bounce" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse" style={{animationDelay: '1s'}}>
            <Bone size={40} opacity={0.1} className="animate-bounce" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-pulse" style={{animationDelay: '2s'}}>
            <PawPrint size={80} opacity={0.1} className="animate-bounce" />
          </div>
          <div className="absolute bottom-10 right-10 animate-pulse" style={{animationDelay: '0.5s'}}>
            <Bone size={50} opacity={0.1} className="animate-bounce" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/nutrition" 
            className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Nutrition Services
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <PawPrint size={40} opacity={0.8} className="text-white" />
            <h1 className="text-4xl md:text-5xl font-bold">{nutrition.name}</h1>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(nutrition.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-orange-100">
                {nutrition.rating} ({nutrition.reviewCount} reviews)
              </span>
            </div>
            <span className="text-orange-100">•</span>
            <span className="text-orange-100">{nutrition.county}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none text-gray-200">
          <div className="absolute top-20 left-10">
            <Bone size={40} opacity={0.2} className="text-orange-200" />
          </div>
          <div className="absolute top-40 right-20">
            <PawPrint size={35} opacity={0.2} className="text-orange-200" />
          </div>
          <div className="absolute bottom-40 left-1/4">
            <PawPrint size={45} opacity={0.2} className="text-orange-200" />
          </div>
          <div className="absolute bottom-20 right-10">
            <Bone size={30} opacity={0.2} className="text-orange-200" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="mb-8">
                <img
                  src={nutrition.image}
                  alt={nutrition.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <PawPrint size={25} opacity={0.6} className="text-orange-500" />
                  <h2 className="text-2xl font-bold text-gray-800">About {nutrition.name}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{nutrition.description}</p>
              </div>

              {/* Services */}
              {nutrition.services && nutrition.services.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Bone size={25} opacity={0.6} className="text-orange-500" />
                    <h2 className="text-2xl font-bold text-gray-800">Services</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nutrition.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <PawPrint size={16} opacity={0.6} className="text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products */}
              {nutrition.products && nutrition.products.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <PawPrint size={25} opacity={0.6} className="text-orange-500" />
                    <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nutrition.products.map((product, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Bone size={16} opacity={0.6} className="text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Brands */}
              {nutrition.brands && nutrition.brands.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Bone size={25} opacity={0.6} className="text-orange-500" />
                    <h2 className="text-2xl font-bold text-gray-800">Brands Available</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {nutrition.brands.map((brand, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="text-gray-700 font-medium">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <PawPrint size={25} opacity={0.6} className="text-orange-500" />
                  <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-600">{nutrition.address}</p>
                      <p className="text-gray-600">{nutrition.county}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500 flex-shrink-0" size={20} />
                    <a href={`tel:${nutrition.phone}`} className="text-orange-600 hover:text-orange-700">
                      {nutrition.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-500 flex-shrink-0" size={20} />
                    <a href={`mailto:${nutrition.email}`} className="text-orange-600 hover:text-orange-700">
                      {nutrition.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="text-orange-500 flex-shrink-0" size={20} />
                    <a 
                      href={nutrition.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-orange-500" size={25} />
                  <h2 className="text-xl font-bold text-gray-800">Opening Hours</h2>
                </div>
                <p className="text-gray-600">{nutrition.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionDetailPage;

