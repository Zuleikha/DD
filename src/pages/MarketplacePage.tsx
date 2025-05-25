import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';
import SEO from '../components/common/SEO'; // Assuming you have this component
import { Search, PlusCircle, MapPin, Tag, User, Clock } from 'lucide-react'; // Import Lucide icons

// Define the shape of a Marketplace Listing item for better type safety
interface MarketplaceListing {
  id: number;
  title: string;
  price: string;
  location: string;
  seller: string;
  posted: string;
  image: string;
  description: string;
  category: 'beds' | 'toys' | 'training' | 'food' | 'clothing' | 'other'; // Added category
}

const MarketplacePage: React.FC = () => {
  // Sample marketplace listings with added category
  const allMarketplaceListings: MarketplaceListing[] = [
    {
      id: 1,
      title: 'Premium Dog Bed - Large Size',
      price: '€75',
      location: 'Dublin 4',
      seller: 'DogLover123',
      posted: '2 days ago',
      image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Barely used large dog bed, suitable for medium to large breeds. Memory foam base for extra comfort.',
      category: 'beds'
    },
    {
      id: 2,
      title: 'Dog Training Clicker Set',
      price: '€15',
      location: 'Dublin 2',
      seller: 'TrainerPro',
      posted: '3 days ago',
      image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Professional dog training clicker set with wrist strap. Perfect for positive reinforcement training.',
      category: 'training'
    },
    {
      id: 3,
      title: 'Adjustable Dog Harness - Medium',
      price: '€25',
      location: 'Dublin 6',
      seller: 'WalkingBuddy',
      posted: '1 week ago',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Adjustable no-pull dog harness, medium size. Used only a few times, in excellent condition.',
      category: 'clothing'
    },
    {
      id: 4,
      title: 'Automatic Dog Feeder',
      price: '€90',
      location: 'Dublin 8',
      seller: 'TechDogParent',
      posted: '5 days ago',
      image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80',
      description: 'Programmable automatic dog feeder with timer. Great for portion control and scheduled feeding.',
      category: 'food'
    },
    {
      id: 5,
      title: 'Durable Chew Toy for Aggressive Chewers',
      price: '€18',
      location: 'Cork',
      seller: 'PlayfulPaws',
      posted: '4 days ago',
      image: 'https://images.unsplash.com/photo-1596706079971-d645e54d5d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Virtually indestructible chew toy, perfect for strong chewers. Keeps dogs entertained for hours.',
      category: 'toys'
    },
    {
      id: 6,
      title: 'Dog Travel Crate - Medium',
      price: '€60',
      location: 'Galway',
      seller: 'WanderlustDog',
      posted: '1 day ago',
      image: 'https://images.unsplash.com/photo-1592394017686-27a3a8d9a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Foldable dog travel crate, medium size. Ideal for car travel or home use. Easy to clean.',
      category: 'beds' // Can also be 'other' or a new 'travel' category
    }
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Default to 'All Categories'

  // Filter marketplace listings dynamically
  const filteredListings = allMarketplaceListings.filter(item => {
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Dog Marketplace Ireland - Buy & Sell Pet Items"
        description="Discover pre-loved and new dog products on our community marketplace in Ireland. Find dog beds, toys, training gear, and more!"
        keywords="dog marketplace, buy dog items, sell dog products, pre-loved dog gear, pet classifieds Ireland"
        canonicalUrl="https://www.dogdays.ie/marketplace"
      />

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
                    <label htmlFor="marketplace-search" className="sr-only">Search marketplace</label>
                    <input
                      type="text"
                      id="marketplace-search"
                      placeholder="Search marketplace..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent"
                      style={{ '--tw-ring-color': '#F5A623' } as React.CSSProperties} // Apply color to ring
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>

                  <div className="md:w-1/4">
                    <label htmlFor="category-select" className="sr-only">Select category</label>
                    <select
                      id="category-select"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent"
                      style={{ '--tw-ring-color': '#F5A623' } as React.CSSProperties} // Apply color to ring
                      aria-label="Select category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
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

                  {/* Removed duplicate search button as search and filter now work onChange */}
                </div>
              </div>

              {/* Post New Item Button */}
              <div className="mb-8 text-center">
                <button className="px-6 py-3 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300 inline-flex items-center">
                  <PlusCircle className="w-5 h-5 mr-2" /> {/* Lucide PlusCircle icon */}
                  Post New Item
                </button>
              </div>

              {/* Marketplace Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.length > 0 ? (
                  filteredListings.map(item => (
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
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" /> {/* Lucide MapPin icon */}
                            {item.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-gray-400" /> {/* Lucide Clock icon */}
                            Posted {item.posted}
                          </span>
                        </div>

                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <User className="w-4 h-4 mr-1 text-gray-500" /> {/* Lucide User icon */}
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
                  ))
                ) : (
                  <div className="lg:col-span-3 text-center py-10 text-gray-600">
                    No listings found matching your criteria.
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-1">
                  {/* These buttons would need logic to handle page changes in a real pagination system */}
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