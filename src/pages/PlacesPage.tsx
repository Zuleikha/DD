import React from 'react';

import ChatbotWidget from '../components/common/ChatbotWidget';
import ListingCard from '../components/listings/ListingCard';

const PlacesPage: React.FC = () => {
  // Sample data for dog-friendly places
  const dogFriendlyPlaces = [
    {
      id: 1,
      title: 'Bark & Brew Café',
      address: '123 Canine Street, Dublin 2',
      rating: 4.7,
      reviewCount: 86,
      distance: '1.3 km',
      type: 'cafe' as const,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Paws & Pints Pub',
      address: '45 Dogwood Lane, Dublin 4',
      rating: 4.5,
      reviewCount: 72,
      distance: '2.1 km',
      type: 'cafe' as const,
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: 3,
      title: 'Woofs & Waffles Restaurant',
      address: '78 Tail Wagger Road, Dublin 6',
      rating: 4.8,
      reviewCount: 94,
      distance: '1.7 km',
      type: 'cafe' as const,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
    
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#4A90E2] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog-Friendly Places</h1>
            <p className="text-xl max-w-3xl">Discover restaurants, cafés, pubs, and other venues that welcome you and your furry friend</p>
          </div>
        </div>
        
        {/* Dog-Friendly Places Information */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Enjoying Ireland with Your Dog</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Ireland offers many dog-friendly establishments where you can enjoy quality time with your canine companion. From cafés and restaurants to pubs and hotels, there are plenty of places that welcome well-behaved dogs.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Dog-Friendly Etiquette</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Always call ahead to confirm the venue's pet policy</li>
                  <li>Ensure your dog is well-behaved and comfortable in public settings</li>
                  <li>Bring water, a portable bowl, and perhaps a favorite toy</li>
                  <li>Keep your dog leashed unless in designated off-leash areas</li>
                  <li>Clean up after your dog and be considerate of other patrons</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Types of Dog-Friendly Venues</h3>
                <p className="mb-4">
                  You'll find various types of dog-friendly establishments across Ireland:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Cafés and coffee shops with outdoor seating</li>
                  <li>Pubs with dog-friendly policies</li>
                  <li>Restaurants with designated pet areas</li>
                  <li>Hotels and accommodations that welcome pets</li>
                  <li>Shopping centers and retail stores with pet-friendly policies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dog-Friendly Places Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Dog-Friendly Venues</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {dogFriendlyPlaces.map(place => (
                <ListingCard 
                  key={place.id}
                  id={place.id}
                  title={place.title}
                  address={place.address}
                  rating={place.rating}
                  reviewCount={place.reviewCount}
                  distance={place.distance}
                  type={place.type}
                  image={place.image}
                  featured={place.featured}
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

export default PlacesPage;
