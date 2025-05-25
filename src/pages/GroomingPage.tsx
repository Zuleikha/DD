import React from 'react';

import ChatbotWidget from '../components/common/ChatbotWidget';
import ListingCard from '../components/listings/ListingCard';

const GroomingPage: React.FC = () => {
  // Sample data for grooming resources
  const groomingResources = [
    {
      id: 1,
      title: 'Paws & Relax Dog Grooming',
      address: '45 Grafton Street, Dublin 2',
      rating: 4.8,
      reviewCount: 92,
      distance: '0.8 km',
      type: 'grooming' as const,
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Fluffy Friends Grooming Salon',
      address: '78 Dawson Street, Dublin 2',
      rating: 4.6,
      reviewCount: 67,
      distance: '1.2 km',
      type: 'grooming' as const,
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: 3,
      title: 'Pampered Paws Premium Grooming',
      address: '123 Baggot Street, Dublin 4',
      rating: 4.9,
      reviewCount: 104,
      distance: '1.5 km',
      type: 'grooming' as const,
      image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#9B59B6] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Grooming Services</h1>
            <p className="text-xl max-w-3xl">Find professional grooming services to keep your dog looking and feeling their best</p>
          </div>
        </div>
        
        {/* Grooming Information Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Dog Grooming Essentials</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Regular grooming is essential for your dog's health and comfort. Professional grooming services can help maintain your dog's coat, skin, nails, and overall hygiene.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of Professional Grooming</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Maintains healthy skin and coat</li>
                  <li>Prevents matting and reduces shedding</li>
                  <li>Early detection of skin issues or parasites</li>
                  <li>Nail trimming to prevent discomfort and mobility issues</li>
                  <li>Professional cleaning of ears and teeth</li>
                  <li>Reduces allergens in your home</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">How Often Should You Groom Your Dog?</h3>
                <p className="mb-4">
                  Grooming frequency depends on your dog's breed, coat type, and lifestyle:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Long-haired breeds: Every 4-6 weeks</li>
                  <li>Medium-haired breeds: Every 6-8 weeks</li>
                  <li>Short-haired breeds: Every 8-12 weeks</li>
                  <li>Dogs that spend a lot of time outdoors may need more frequent grooming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grooming Resources Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Grooming Services</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {groomingResources.map(resource => (
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
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default GroomingPage;
