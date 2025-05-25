import React from 'react';

import ChatbotWidget from '../components/common/ChatbotWidget';
import ListingCard from '../components/listings/ListingCard';

const NutritionPage: React.FC = () => {
  // Sample data for nutrition resources
  const nutritionResources = [
    {
      id: 1,
      title: 'PawsNutrition Premium Dog Food',
      address: '123 Nutrition Way, Dublin 2',
      rating: 4.9,
      reviewCount: 87,
      distance: '2.1 km',
      type: 'vet' as const, // Using vet type for now, can be expanded
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Healthy Paws Nutrition Center',
      address: '45 Canine Street, Dublin 4',
      rating: 4.7,
      reviewCount: 62,
      distance: '3.5 km',
      type: 'vet' as const,
      image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Natural Dog Diet Specialists',
      address: '78 Bark Avenue, Dublin 6',
      rating: 4.5,
      reviewCount: 45,
      distance: '1.8 km',
      type: 'vet' as const,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#4A90E2] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Nutrition Resources</h1>
            <p className="text-xl max-w-3xl">Find the best nutrition options and advice for your dog's health and wellbeing</p>
          </div>
        </div>
        
        {/* Nutrition Information Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Understanding Dog Nutrition</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Proper nutrition is essential for your dog's overall health and wellbeing. A balanced diet ensures they receive all the necessary nutrients, vitamins, and minerals needed for optimal health.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Nutrition Tips</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Feed high-quality dog food appropriate for your dog's age, size, and activity level</li>
                  <li>Maintain consistent feeding schedules and portion sizes</li>
                  <li>Ensure fresh water is always available</li>
                  <li>Consult with a veterinarian before making significant changes to your dog's diet</li>
                  <li>Be cautious with treats and human food - many can be harmful to dogs</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Common Nutrition Mistakes</h3>
                <p className="mb-4">
                  Avoid these common mistakes to keep your dog healthy:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Overfeeding - obesity can lead to numerous health problems</li>
                  <li>Feeding inappropriate human food - some can be toxic to dogs</li>
                  <li>Inconsistent feeding schedules</li>
                  <li>Ignoring specific dietary needs based on age, breed, or health conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nutrition Resources Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Nutrition Resources</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {nutritionResources.map(resource => (
                <ListingCard 
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  address={resource.address}
                  rating={resource.rating}
                  reviewCount={resource.reviewCount}
                  distance={resource.distance}
                  type={resource.type}
                  image={resource.image}
                  featured={resource.featured}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
     
      <ChatbotWidget />
    </div>
  );
};

export default NutritionPage;
