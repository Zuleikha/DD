import React from 'react';

interface ListingCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  county: string;
  category: string;
  specialties?: string[];
  address?: string; // ✅ Add this line
  trainingTypes?: string[];
}

const ListingCard: React.FC<ListingCardProps> = ({
  name,
  image,
  rating,
  reviewCount,
  description,
  county,
  specialties,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
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
      </div>
    </div>
  );
};

export default ListingCard;
