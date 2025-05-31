import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface ListingCardProps {
  id: number;
  name?: string;
  title?: string;
  image: string;
  rating: number;
  reviewCount: number;
  description?: string;
  county?: string;
  category: string;
  address?: string;
  type?: string;
  products?: string[]; // ✅ This allows passing product info
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  name,
  title,
  image,
  rating,
  reviewCount,
  description = "",
  county = "",
  category,
  address,
  type,
  products, // ✅ FIXED: added comma before this line
}) => {
  const displayName = title || name || "";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={displayName} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{displayName}</h2>
        
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address || (county ? `County ${county}` : "")}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>

        {products?.length > 0 && (
          <ul className="mb-3 text-sm text-gray-700 list-disc list-inside">
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        )}

        {type && (
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {type}
            </span>
          </div>
        )}

        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
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
