#!/bin/bash

# Script to fix ListingCard and category prop errors

# Fix ListingCard.tsx
cat > src/components/listings/ListingCard.tsx << 'EOL'
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
  category: string; // Make category required
  detailPath?: string;
  type?: string;
  address?: string;
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
  category = "minders", // Default to minders
  detailPath,
  type,
  address
}) => {
  // Use title if provided, otherwise use name
  const displayName = title || name || "";
  
  // Use the category to construct the path if detailPath is not provided
  const path = detailPath || `/${category}/${id}`;
  
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
          <span>{address || `County ${county}`}</span>
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{reviewCount} reviews</span>
        </div>
        {type && <p className="text-blue-600 text-sm mb-2">{type}</p>}
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={path} 
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
EOL

# Fix MindersPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={minder\.id}\s\+id={minder\.id}\s\+title={minder\.title}/<ListingCard key={minder.id} id={minder.id} title={minder.title} category="minders"/g' src/pages/MindersPage.tsx

# Fix VetsPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={vet\.id}\s\+id={vet\.id}\s\+name={vet\.name}/<ListingCard key={vet.id} id={vet.id} name={vet.name} category="vets"/g' src/pages/VetsPage.tsx

# Fix NutritionPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={item\.id}\s\+id={item\.id}\s\+name={item\.name}/<ListingCard key={item.id} id={item.id} name={item.name} category="nutrition"/g' src/pages/NutritionPage.tsx

# Fix ParksPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={park\.id}\s\+id={park\.id}\s\+name={park\.name}/<ListingCard key={park.id} id={park.id} name={park.name} category="parks"/g' src/pages/ParksPage.tsx

# Fix TrainingPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={training\.id}\s\+id={training\.id}\s\+name={training\.name}/<ListingCard key={training.id} id={training.id} name={training.name} category="training"/g' src/pages/TrainingPage.tsx

# Fix GroomingPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={groomer\.id}\s\+id={groomer\.id}\s\+name={groomer\.name}/<ListingCard key={groomer.id} id={groomer.id} name={groomer.name} category="grooming"/g' src/pages/GroomingPage.tsx

# Fix PlacesPage.tsx to include category prop
sed -i 's/<ListingCard\s\+key={place\.id}\s\+id={place\.id}\s\+name={place\.name}/<ListingCard key={place.id} id={place.id} name={place.name} category="places"/g' src/pages/PlacesPage.tsx

echo "Fixed ListingCard.tsx and added category props to all pages!"
echo "This should resolve the TypeScript errors in your deployment."
