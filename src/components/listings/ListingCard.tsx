import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  county: string;
  category: string;
  products?: string[]; // Optional
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  image,
  rating,
  reviewCount,
  description,
  county,
  category,
  products
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{county}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Only render products section if products exist and have items */}
        {products && products.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {products.slice(0, 3).map((product, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {product}
                </span>
              ))}
              {products.length > 3 && (
                <span className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-full">
                  +{products.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <Link
          to={`/${category}/${id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
