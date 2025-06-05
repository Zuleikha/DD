import React from 'react';
import { Link } from 'react-router-dom';

interface ListingCardProps {
  id: number;
  name: string;
  image?: string; // Made optional
  rating: number;
  reviewCount: number;
  description: string;
  county: string;
  category: string;
  specialties?: string[];
  address?: string;
  trainingTypes?: string[];
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
  specialties,
}) => {
  // Determine the correct route based on the category
  const getDetailRoute = () => {
    const categoryLower = category.toLowerCase();

    console.log('Debug - Category:', categoryLower, 'ID:', id); // Add this line
    
    switch (categoryLower) {
      case 'vet':
      case 'find a vet':  // Handle "find a vet"
        return `/vets/${id}`;
      case 'park':
      case 'parks':  // Handle "parks"
      case 'parks and walks':  // Handle "parks and walks"
        return `/parks/${id}`;
      case 'place':
      case 'dog friendly places':  // Handle "dog friendly places"
        return `/places/${id}`;
      case 'nutrition':
        return `/nutrition/${id}`;
      case 'training':
        return `/training/${id}`;
      case 'grooming':
        return `/grooming/${id}`;
      case 'petshop':
        return `/petshops/${id}`;
      case 'minder':
        return `/minders/${id}`;
      default:
        const cleanCategory = categoryLower.replace(/\s+/g, '');
        return `/${cleanCategory}s/${id}`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Conditionally render image only if image is provided and not empty */}
      {image && image.trim() !== '' && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}
      
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{county}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <p className="text-sm text-yellow-600 mt-2">⭐ {rating} ({reviewCount} reviews)</p>

        {specialties && specialties.length > 0 && (
          <div className="mt-3">
            <h4 className="font-medium text-sm text-gray-800">Specialties:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {specialties.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* View Details Button */}
        <div className="mt-4">
          <Link 
            to={getDetailRoute()} 
            className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

