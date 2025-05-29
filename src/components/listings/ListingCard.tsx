import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ListingCardProps {
  title: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance?: string;
  type: 'vet' | 'park' | 'cafe' | 'grooming' | 'minders' | 'advice' ;
  image?: string;
  featured?: boolean;
  id?: number;
}

const ListingCard: React.FC<ListingCardProps> = ({
  title,
  address,
  rating,
  reviewCount,
  distance,
  type,
  image,
  featured = false,
  id = 1
}) => {
  const navigate = useNavigate();
  
  // Map type to color
  const typeColors = {
    vet: '#F5A623',
    park: '#7ED321',
    cafe: '#4A90E2',
	grooming: '#9B59B6',
	minders: '#FF6B6B' // Add a color for minders
	advice: '#FF6B6B' // Add a color for minders
  };
  
  // Map type to label
  const typeLabels = {
    vet: 'Veterinarian',
    park: 'Dog Park',
    cafe: 'Dog-Friendly Place',
    grooming: 'Grooming Service',
	minders: 'Dog Minder' // Add label for minders
	advice: 'Dog Advice' // Add label for minders
  };

  // Handle view details click
  const handleViewDetails = () => {
    navigate(`/${type}s/${id}`);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg ${featured ? 'ring-2 ring-[#F5A623]' : ''}`}>
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        {image && (
          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`p-6 ${image ? 'md:w-2/3' : 'w-full'}`}>
          {featured && (
            <div className="inline-block px-3 py-1 mb-3 bg-[#F5A623] text-white text-xs font-medium rounded-full">
              Featured
            </div>
          )}
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="p-2 rounded-full" style={{ backgroundColor: `${typeColors[type]}20` }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: typeColors[type] }} className="w-6 h-6">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600 mb-2">{address}</p>
              
              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{rating.toFixed(1)} ({reviewCount} reviews)</span>
              </div>
              
              <div className="flex flex-wrap items-center text-sm">
                {distance && (
                  <span className="mr-3 text-[#4A90E2]">{distance} away</span>
                )}
                <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                  {typeLabels[type]}
                </span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300 text-sm"
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
