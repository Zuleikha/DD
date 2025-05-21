import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';
import ListingCard from '../components/listings/ListingCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';
import GoogleMap from '../components/maps/GoogleMap';

const ListingsPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1]; // Get the first part of the path (e.g., 'vets', 'parks', etc.)
  
  // Define page content based on current path
  const pageContent: Record<string, any> = {
    vets: {
      title: 'Find a Vet in Ireland',
      description: 'Locate trusted veterinary services across Ireland for your dog',
      color: '#4A90E2',
      searchPlaceholder: 'Search vets by name or service...',
      countText: '24 Vets Found',
      mapText: 'Showing vets across Ireland',
      locations: [
        { lat: 53.3498, lng: -6.2603, title: 'Happy Paws Veterinary Clinic' },
        { lat: 53.3402, lng: -6.2736, title: 'Dublin Pet Hospital' },
        { lat: 53.3344, lng: -6.2483, title: 'Southside Veterinary Clinic' }
      ]
    },
    parks: {
      title: 'Find Dog Parks in Ireland',
      description: 'Discover the best parks and walking trails for you and your dog',
      color: '#7ED321',
      searchPlaceholder: 'Search parks by name or location...',
      countText: '18 Parks Found',
      mapText: 'Showing dog parks across Ireland',
      locations: [
        { lat: 53.3558, lng: -6.3308, title: 'Phoenix Park Dog Walking Area' },
        { lat: 53.3382, lng: -6.2591, title: 'St. Stephen\'s Green Dog Area' },
        { lat: 53.2987, lng: -6.2649, title: 'Marlay Park Dog Trail' }
      ]
    },
    nutrition: {
      title: 'Find Nutrition Resources',
      description: 'Discover the best nutrition options for your dog',
      color: '#F5A623',
      searchPlaceholder: 'Search nutrition resources...',
      countText: '15 Nutrition Resources Found',
      mapText: 'Showing nutrition resources across Ireland',
      locations: [
        { lat: 53.3498, lng: -6.2603, title: 'PawsNutrition Premium Dog Food' },
        { lat: 53.3402, lng: -6.2736, title: 'Healthy Paws Nutrition Center' },
        { lat: 53.3344, lng: -6.2483, title: 'Natural Dog Diet Specialists' }
      ]
    },
    training: {
      title: 'Find Dog Training Services',
      description: 'Connect with professional dog trainers and training facilities',
      color: '#4A90E2',
      searchPlaceholder: 'Search training services...',
      countText: '12 Training Services Found',
      mapText: 'Showing training services across Ireland',
      locations: [
        { lat: 53.3498, lng: -6.2603, title: 'Pawsitive Training Academy' },
        { lat: 53.3402, lng: -6.2736, title: 'Canine Excellence Training Center' },
        { lat: 53.3344, lng: -6.2483, title: 'Good Dog Training School' }
      ]
    },
    grooming: {
      title: 'Find Dog Grooming Services',
      description: 'Discover professional grooming services for your dog',
      color: '#9B59B6',
      searchPlaceholder: 'Search grooming services...',
      countText: '20 Grooming Services Found',
      mapText: 'Showing grooming services across Ireland',
      locations: [
        { lat: 53.3498, lng: -6.2603, title: 'Paws & Relax Dog Grooming' },
        { lat: 53.3402, lng: -6.2736, title: 'Fluffy Friends Grooming Salon' },
        { lat: 53.3344, lng: -6.2483, title: 'Pampered Paws Premium Grooming' }
      ]
    },
    places: {
      title: 'Find Dog-Friendly Places',
      description: 'Discover restaurants, cafés, and venues that welcome dogs',
      color: '#4A90E2',
      searchPlaceholder: 'Search dog-friendly places...',
      countText: '32 Dog-Friendly Places Found',
      mapText: 'Showing dog-friendly places across Ireland',
      locations: [
        { lat: 53.3498, lng: -6.2603, title: 'Bark & Brew Café' },
        { lat: 53.3402, lng: -6.2736, title: 'Paws & Pints Pub' },
        { lat: 53.3344, lng: -6.2483, title: 'Woofs & Waffles Restaurant' }
      ]
    }
  };
  
  // Default to vets if path is not recognized
  const currentPage = pageContent[path] || pageContent.vets;
  
  // State for user's location (for directions)
  const [userLocation, setUserLocation] = useState<string>('');
  
  // Function to get directions
  const getDirections = (destinationLat: number, destinationLng: number) => {
    if (userLocation && window.calculateRoute) {
      window.calculateRoute(userLocation, { lat: destinationLat, lng: destinationLng });
    } else {
      alert('Please enter your location first');
    }
  };
  
  // Sample data for demonstration - would be filtered based on path in a real app
  const listings = [
    {
      id: 1,
      title: 'Happy Paws Veterinary Clinic',
      address: '123 Main Street, Dublin 2',
      rating: 4.8,
      reviewCount: 124,
      distance: '1.2 km',
      type: 'vet' as const,
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      featured: true,
      lat: 53.3498,
      lng: -6.2603
    },
    {
      id: 2,
      title: 'Phoenix Park Dog Walking Area',
      address: 'Phoenix Park, Dublin 8',
      rating: 4.9,
      reviewCount: 87,
      distance: '2.5 km',
      type: 'park' as const,
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      lat: 53.3558,
      lng: -6.3308
    },
    {
      id: 3,
      title: 'Paws & Relax Dog Grooming',
      address: '45 Grafton Street, Dublin 2',
      rating: 4.2,
      reviewCount: 29,
      distance: '0.8 km',
      type: 'grooming' as const,
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      lat: 53.3402,
      lng: -6.2736
    }
  ];

  // Counties in Ireland for the dropdown
  const counties = [
    "All Counties", "Carlow", "Cavan", "Clare", "Cork", "Donegal", 
    "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", 
    "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", 
    "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", 
    "Waterford", "Westmeath", "Wexford", "Wicklow"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#4A90E2]" style={{ backgroundColor: currentPage.color }}>
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{currentPage.title}</h1>
            <p className="text-xl max-w-3xl text-white">{currentPage.description}</p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder={currentPage.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  style={{ '--tw-ring-color': currentPage.color } as React.CSSProperties}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              {/* County Selector */}
              <div className="md:w-1/4">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  aria-label="Select county"
                  style={{ '--tw-ring-color': currentPage.color } as React.CSSProperties}
                >
                  {counties.map((county ) => (
                    <option key={county} value={county.toLowerCase().replace(' ', '-')}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Filter Button */}
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                <Filter className="mr-2 h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Google Maps Integration */}
                <div className="p-4 bg-white border-b">
                  <h3 className="text-lg font-semibold mb-2">Get Directions</h3>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': currentPage.color } as React.CSSProperties}
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Google Map Component */}
                <GoogleMap 
                  locations={currentPage.locations}
                  center={{ lat: 53.3498, lng: -6.2603 }} // Dublin center
                  zoom={12}
                />
                
                {/* Directions Panel */}
                <div id="directions-panel" className="p-4 max-h-[300px] overflow-y-auto"></div>
              </div>
            </div>
            
            {/* Listings Container */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{currentPage.countText}</h2>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    style={{ '--tw-ring-color': currentPage.color } as React.CSSProperties}>
                    <option value="distance">Distance</option>
                    <option value="rating">Rating</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {listings.map(listing => (
                  <div key={listing.id} className="relative">
                    <ListingCard 
                      title={listing.title}
                      address={listing.address}
                      rating={listing.rating}
                      reviewCount={listing.reviewCount}
                      distance={listing.distance}
                      type={listing.type}
                      image={listing.image}
                      featured={listing.featured}
                    />
                    {/* Add Get Directions button */}
                    <button 
                      className="absolute bottom-4 right-4 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm"
                      onClick={() => getDirections(listing.lat, listing.lng)}
                    >
                      Get Directions
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-1">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-white rounded-md" 
                    style={{ backgroundColor: currentPage.color }}>1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

// Add calculateRoute to window type
declare global {
  interface Window {
    calculateRoute?: (origin: string, destination: any) => void;
  }
}

export default ListingsPage;
