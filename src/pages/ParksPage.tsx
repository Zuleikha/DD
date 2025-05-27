import React from 'react';

import ChatbotWidget from '../components/common/ChatbotWidget';
import ListingCard from '../components/listings/ListingCard';
import HeroSection from '../components/common/HeroSection';

const ParksPage: React.FC = () => {
  // Sample data for parks and walks
  const parksAndWalks = [
    {
      id: 1,
      title: 'Phoenix Park Dog Walking Area',
      address: 'Phoenix Park, Dublin 8',
      rating: 4.9,
      reviewCount: 112,
      distance: '2.5 km',
      type: 'park' as const,
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      featured: true
    },
    {
      id: 2,
      title: "St. Stephen's Green Dog Area",
      address: "St. Stephen's Green, Dublin 2",
      rating: 4.6,
      reviewCount: 78,
      distance: '1.2 km',
      type: 'park' as const,
      image: 'https://images.unsplash.com/photo-1551651653-c5dcb914d809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: 3,
      title: 'Marlay Park Dog Trail',
      address: 'Marlay Park, Rathfarnham, Dublin 16',
      rating: 4.8,
      reviewCount: 94,
      distance: '7.5 km',
      type: 'park' as const,
      image: 'https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Updated: Page Header using HeroSection */}
        <HeroSection
          title="Parks & Dog Walks"
          subtitle="Discover the best parks and walking trails for you and your dog across Ireland"
          gradientClass="bg-mesh-gradient-parks"
          pageType="parks"
        />

        {/* Parks Information Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Exploring the Outdoors with Your Dog</h2>

              <div className="prose max-w-none">
                <p className="mb-4">
                  Regular exercise is essential for your dog's physical and mental health. Ireland offers numerous beautiful parks and walking trails where you and your furry friend can enjoy the outdoors together.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of Regular Walks</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Maintains healthy weight and cardiovascular fitness</li>
                  <li>Provides mental stimulation and reduces boredom</li>
                  <li>Helps with socialization and behavior training</li>
                  <li>Strengthens the bond between you and your dog</li>
                  <li>Reduces anxiety and destructive behaviors</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Park Etiquette</h3>
                <p className="mb-4">
                  When visiting parks with your dog, remember these important guidelines:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Always clean up after your dog</li>
                  <li>Keep your dog leashed unless in designated off-leash areas</li>
                  <li>Ensure your dog is well-behaved around other people and animals</li>
                  <li>Bring water and waste bags</li>
                  <li>Respect park hours and rules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Parks Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Parks & Walking Trails</h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {parksAndWalks.map(park => (
                <ListingCard
                  key={park.id}
                  id={park.id}
                  title={park.title}
                  address={park.address}
                  rating={park.rating}
                  reviewCount={park.reviewCount}
                  distance={park.distance}
                  type={park.type}
                  image={park.image}
                  featured={park.featured}
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

export default ParksPage;
