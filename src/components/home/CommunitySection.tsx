import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag, Heart } from 'lucide-react';
import firebaseApp from '../../config/firebase';



const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Join Our Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Forum Feature Card - IMPROVED */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-40 bg-[#4A90E2] flex items-center justify-center">
              <MessageCircle className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Discussion Forum</h3>
              <p className="text-gray-600 mb-4">
                Connect with other dog owners across Ireland. Share tips, ask questions, and join the conversation. 
                <span className="text-blue-600 font-medium"> Free to join!</span>
              </p>
              <Link 
                to="/forum" 
                className="inline-block px-6 py-2 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
              >
                Join Discussions
              </Link>
            </div>
          </div>
          
          {/* Marketplace Feature Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-40 bg-[#F5A623] flex items-center justify-center">
              <ShoppingBag className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Marketplace</h3>
              <p className="text-gray-600 mb-4">Buy, sell, or swap dog items with other owners. Find great deals on toys, accessories, and more.</p>
              <Link 
                to="/marketplace" 
                className="inline-block px-6 py-2 bg-[#F5A623] text-white font-medium rounded-md hover:bg-[#E09612] transition-colors duration-300"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>
          
          {/* Adoption Feature Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-40 bg-[#7ED321] flex items-center justify-center">
              <Heart className="w-20 h-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Adoption</h3>
              <p className="text-gray-600 mb-4">Find your new best friend through our ethical adoption listings. Connect with shelters and rescues.</p>
              <Link 
                to="/adoption" 
                className="inline-block px-6 py-2 bg-[#7ED321] text-white font-medium rounded-md hover:bg-[#6DC310] transition-colors duration-300"
              >
                Find a Dog
              </Link>
            </div>
          </div>
        </div>
        
        {/* IMPROVED: Focused community description without the confusing button */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of dog owners across Ireland who are already part of our growing community. 
            Share experiences, find resources, and connect with fellow dog lovers through our discussion forum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

