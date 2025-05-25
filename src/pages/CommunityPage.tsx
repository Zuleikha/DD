import React from 'react';
import { MessageCircle, ShoppingBag, Heart } from 'lucide-react';

import ChatbotWidget from '../components/common/ChatbotWidget';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#2C3E50] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Community</h1>
            <p className="text-xl max-w-3xl">Connect with other dog owners, find resources, and join the conversation</p>
          </div>
        </div>
        
        {/* Community Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Forum Feature */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-[#4A90E2] flex items-center justify-center">
                  <MessageCircle className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800">Discussion Forum</h2>
                  <p className="text-gray-600 mb-4">
                    Join conversations with other dog owners across Ireland. Share tips, ask questions, and connect with the community.
                  </p>
                  <a 
                    href="/forum" 
                    className="inline-block px-6 py-2 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
                  >
                    Browse Forums
                  </a>
                </div>
              </div>
              
              {/* Marketplace Feature */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-[#F5A623] flex items-center justify-center">
                  <ShoppingBag className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800">Marketplace</h2>
                  <p className="text-gray-600 mb-4">
                    Buy, sell, or swap dog-related items with other owners. Find great deals on toys, accessories, and more.
                  </p>
                  <a 
                    href="/marketplace" 
                    className="inline-block px-6 py-2 bg-[#F5A623] text-white font-medium rounded-md hover:bg-[#E09612] transition-colors duration-300"
                  >
                    Browse Marketplace
                  </a>
                </div>
              </div>
              
              {/* Adoption Feature */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-[#7ED321] flex items-center justify-center">
                  <Heart className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800">Adoption</h2>
                  <p className="text-gray-600 mb-4">
                    Find your new best friend through our ethical adoption listings. Connect with shelters and rescues across Ireland.
                  </p>
                  <a 
                    href="/adoption" 
                    className="inline-block px-6 py-2 bg-[#7ED321] text-white font-medium rounded-md hover:bg-[#6DC310] transition-colors duration-300"
                  >
                    Find a Dog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Forum Preview Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Discussions</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="space-y-6">
                  {/* Forum Topic 1 */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        <a href="/forum/topic/1" className="hover:text-[#4A90E2]">
                          Recommended Vets in Dublin Area
                        </a>
                      </h3>
                      <span className="text-sm text-gray-500">32 replies</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Looking for recommendations for a good vet in the Dublin area who specializes in older dogs...
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">Started by: JaneDoe</span>
                      <span>Last reply: 2 hours ago</span>
                    </div>
                  </div>
                  
                  {/* Forum Topic 2 */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        <a href="/forum/topic/2" className="hover:text-[#4A90E2]">
                          Best Dog-Friendly Beaches in Cork
                        </a>
                      </h3>
                      <span className="text-sm text-gray-500">18 replies</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Planning a trip to Cork with my Labrador and looking for dog-friendly beaches where he can run off-leash...
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">Started by: DogLover123</span>
                      <span>Last reply: Yesterday</span>
                    </div>
                  </div>
                  
                  {/* Forum Topic 3 */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        <a href="/forum/topic/3" className="hover:text-[#4A90E2]">
                          Puppy Training Classes in Galway
                        </a>
                      </h3>
                      <span className="text-sm text-gray-500">24 replies</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Just got a new Border Collie puppy and looking for recommendations for good training classes in Galway...
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">Started by: NewPupParent</span>
                      <span>Last reply: 2 days ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="/forum" 
                    className="inline-block px-6 py-2 border-2 border-[#4A90E2] text-[#4A90E2] font-medium rounded-md hover:bg-[#4A90E2] hover:text-white transition-colors duration-300"
                  >
                    View All Discussions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Marketplace Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Marketplace Listings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Marketplace Item 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Dog Crate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-[#F5A623] text-white text-xs font-medium rounded-full mb-2">
                    For Sale
                  </span>
                  <h3 className="font-semibold text-gray-800 mb-1">Large Dog Crate (Barely Used)</h3>
                  <p className="text-[#4A90E2] font-medium mb-2">€45</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Large dog crate suitable for medium to large breeds. Only used for a few months.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Dublin</span>
                    <span className="text-gray-500">Posted 2 days ago</span>
                  </div>
                </div>
              </div>
              
              {/* Marketplace Item 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Dog Toys"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-[#7ED321] text-white text-xs font-medium rounded-full mb-2">
                    For Swap
                  </span>
                  <h3 className="font-semibold text-gray-800 mb-1">Bundle of Dog Toys</h3>
                  <p className="text-[#4A90E2] font-medium mb-2">Swap for dog bed</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Collection of barely used dog toys. Looking to swap for a medium-sized dog bed.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Cork</span>
                    <span className="text-gray-500">Posted 3 days ago</span>
                  </div>
                </div>
              </div>
              
              {/* Marketplace Item 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Dog Coat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-[#F5A623] text-white text-xs font-medium rounded-full mb-2">
                    For Sale
                  </span>
                  <h3 className="font-semibold text-gray-800 mb-1">Waterproof Dog Coat (Medium)</h3>
                  <p className="text-[#4A90E2] font-medium mb-2">€20</p>
                  <p className="text-sm text-gray-600 mb-3">
                    High-quality waterproof dog coat, medium size. Perfect for Irish weather!
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Galway</span>
                    <span className="text-gray-500">Posted 1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/marketplace" 
                className="inline-block px-6 py-2 border-2 border-[#F5A623] text-[#F5A623] font-medium rounded-md hover:bg-[#F5A623] hover:text-white transition-colors duration-300"
              >
                View All Listings
              </a>
            </div>
          </div>
        </section>
        
        {/* Join Community CTA */}
        <section className="py-16 bg-[#4A90E2] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Dog-Loving Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with thousands of dog owners across Ireland, share experiences, and find resources for your furry friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/register" 
                className="px-8 py-3 bg-white text-[#4A90E2] font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Create Free Account
              </a>
              <a 
                href="/login" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                Sign In
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default CommunityPage;
