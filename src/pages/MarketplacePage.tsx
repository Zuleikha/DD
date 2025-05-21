import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';

const MarketplacePage: React.FC = () => {
  // Sample marketplace listings
  const marketplaceListings = [
    {
      id: 1,
      title: 'Premium Dog Bed - Large Size',
      price: '€75',
      location: 'Dublin 4',
      seller: 'DogLover123',
      posted: '2 days ago',
      image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Barely used large dog bed, suitable for medium to large breeds. Memory foam base for extra comfort.'
    },
    {
      id: 2,
      title: 'Dog Training Clicker Set',
      price: '€15',
      location: 'Dublin 2',
      seller: 'TrainerPro',
      posted: '3 days ago',
      image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Professional dog training clicker set with wrist strap. Perfect for positive reinforcement training.'
    },
    {
      id: 3,
      title: 'Adjustable Dog Harness - Medium',
      price: '€25',
      location: 'Dublin 6',
      seller: 'WalkingBuddy',
      posted: '1 week ago',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Adjustable no-pull dog harness, medium size. Used only a few times, in excellent condition.'
    },
    {
      id: 4,
      title: 'Automatic Dog Feeder',
      price: '€90',
      location: 'Dublin 8',
      seller: 'TechDogParent',
      posted: '5 days ago',
      image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80',
      description: 'Programmable automatic dog feeder with timer. Great for portion control and scheduled feeding.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#F5A623] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Marketplace</h1>
            <p className="text-xl max-w-3xl">Buy, sell, and trade dog-related items with other dog owners in your community</p>
          </div>
        </div>
        
        {/* Marketplace Content */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <input
                      type="text"
                      placeholder="Search marketplace..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  
                  <div className="md:w-1/4">
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent"
                      aria-label="Select category"
                    >
                      <option value="">All Categories</option>
                      <option value="beds">Beds & Furniture</option>
                      <option value="toys">Toys & Accessories</option>
                      <option value="training">Training Equipment</option>
                      <option value="food">Food & Treats</option>
                      <option value="clothing">Clothing & Apparel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <button className="px-6 py-3 bg-[#F5A623] text-white rounded-md hover:bg-[#E59613] transition-colors duration-300 flex items-center justify-center">
                    <span>Search</span>
                  </button>
                </div>
              </div>
              
              {/* Post New Item Button */}
              <div className="mb-8 text-center">
                <button className="px-6 py-3 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300 inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Post New Item
                </button>
              </div>
              
              {/* Marketplace Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketplaceListings.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-[#F5A623] text-white px-3 py-1 text-sm font-medium">
                        {item.price}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{item.location}</span>
                        <span>Posted {item.posted}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Seller: {item.seller}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-[#4A90E2] text-white text-sm rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                          View Details
                        </button>
                        <button className="flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors duration-300">
                          Contact Seller
                        </button>
                      </div>
                    </div>
                  </div>
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

export default MarketplacePage;
