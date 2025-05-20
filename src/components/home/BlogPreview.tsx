import React from 'react';
import { Clock } from 'lucide-react';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest From Our Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="Seasonal Dog Care" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>May 15, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Seasonal Dog Care Tips</h3>
              <p className="text-gray-600 mb-4">How to keep your dog happy and healthy through all seasons in Ireland, from rainy winters to warm summers...</p>
              <a 
                href="/blog/seasonal-dog-care" 
                className="text-[#4A90E2] font-medium hover:text-[#3A80D2] transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
          
          {/* Article Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Training Tips for Puppies" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>May 10, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Training Tips for Puppies</h3>
              <p className="text-gray-600 mb-4">Start your puppy's training journey with these essential tips from professional dog trainers across Ireland...</p>
              <a 
                href="/blog/puppy-training-tips" 
                className="text-[#4A90E2] font-medium hover:text-[#3A80D2] transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
          
          {/* Article Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Dog-Friendly Beaches" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>May 5, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Top Dog-Friendly Beaches</h3>
              <p className="text-gray-600 mb-4">Discover Ireland's most beautiful dog-friendly beaches where you and your furry friend can enjoy the coast...</p>
              <a 
                href="/blog/dog-friendly-beaches" 
                className="text-[#4A90E2] font-medium hover:text-[#3A80D2] transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/blog" 
            className="inline-block px-6 py-3 border-2 border-[#4A90E2] text-[#4A90E2] font-medium rounded-md hover:bg-[#4A90E2] hover:text-white transition-colors duration-300"
          >
            Read More Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
