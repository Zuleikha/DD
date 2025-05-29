import React from 'react';
import { Compass, Heart, ShoppingBag } from 'lucide-react';

interface CategoryCardProps {
  icon: 'vet' | 'park' | 'food' | 'training' | 'grooming' | 'cafe' | 'minders' | 'advice';
  title: string;
  link?: string;
}

const iconMap = {
  vet: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M12 14v4M10 16h4"/></svg>,
  park: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M17 14h.01M7 7h.01M7 14h.01M12 14h.01M12 7h.01M17 7h.01M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"/></svg>,
  food: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M18 8h1a4 4 0 0 1 0 8h-1M5 8h11v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8ZM12 8V2"/></svg>,
  training: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  grooming: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 11a4 4 0 0 0 8 0"/><path d="m21 5-5 3 5 3M3 5l5 3-5 3"/></svg>,
  cafe: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>,
  minders: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  advice: <svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
     className="w-10 h-10">
  <path d="M9 18h6" />
  <path d="M10 22h4" />
  <path d="M12 2a7 7 0 0 0-4 12.9V17h8v-2.1A7 7 0 0 0 12 2z" />
</svg>
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, link = '#' }) => {
  return (
    <a 
      href={link}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-[#4A90E2]"
    >
      <div className="mb-4 text-[#4A90E2]">
        {iconMap[icon]}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </a>
  );
};

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8F4E3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Dog-Friendly Ireland</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
          <CategoryCard icon="vet" title="Find a Vet" link="/vets" />
          <CategoryCard icon="park" title="Parks & Walks" link="/parks" />
          <CategoryCard icon="food" title="Nutrition" link="/nutrition" />
          <CategoryCard icon="training" title="Dog Training" link="/training" />
          <CategoryCard icon="grooming" title="Grooming" link="/grooming" />
          <CategoryCard icon="cafe" title="Dog-Friendly Places" link="/places" />
          <CategoryCard icon="minders" title="Find Dog Minders" link="/minders" />
          <CategoryCard icon="advice" title="Advice from chat bot" link="/advice" />
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-8">
            <div className="flex items-center">
              <Compass className="w-6 h-6 text-[#4A90E2] mr-2" />
              <span className="text-gray-700">Find Services</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-[#4A90E2] mr-2" />
              <span className="text-gray-700">Save Favorites</span>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="w-6 h-6 text-[#4A90E2] mr-2" />
              <span className="text-gray-700">Community Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
