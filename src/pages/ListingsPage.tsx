import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import ListingCard from '../components/listings/ListingCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';

const ListingsPage: React.FC = () => {
  // Sample data for demonstration
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
      featured: true
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
        <div className="bg-[#4A90E2] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find a Vet in Ireland</h1>
            <p className="text-xl max-w-3xl">Locate trusted veterinary services across Ireland for your dog</p>
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
                  placeholder="Search vets by name or service..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              {/* County Selector */}
              <div className="md:w-1/4">
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  aria-label="Select county"
                >
                  {counties.map((county) => (
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
                {/* Placeholder for Google Maps */}
                <div className="relative bg-gray-200 h-[500px] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Google Maps will be integrated here</p>
                    <p className="text-sm text-gray-500">Showing vets across Ireland</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Listings Container */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">24 Vets Found</h2>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent">
                    <option value="distance">Distance</option>
                    <option value="rating">Rating</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {listings.map(listing => (
                  <ListingCard 
                    key={listing.id}
                    title={listing.title}
                    address={listing.address}
                    rating={listing.rating}
                    reviewCount={listing.reviewCount}
                    distance={listing.distance}
                    type={listing.type}
                    image={listing.image}
                    featured={listing.featured}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-1">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md">1</button>
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

export default ListingsPage;
