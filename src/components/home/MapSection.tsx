import React from 'react';
import { MapPin, Filter } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Discover Places Near You</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for Google Maps */}
            <div className="relative bg-gray-200 h-[500px] flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Google Maps will be integrated here</p>
                <p className="text-sm text-gray-500">Showing dog-friendly locations across Ireland</p>
              </div>
              
              {/* Map Filters */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3">
                <div className="flex items-center mb-2">
                  <Filter className="w-4 h-4 text-[#4A90E2] mr-2" />
                  <span className="text-sm font-medium text-gray-700">Filter</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 text-xs rounded-full bg-[#4A90E2] text-white">Vets</button>
                  <button className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white">Parks</button>
                  <button className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white">Cafés</button>
                  <button className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white">Groomers</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nearby Listings */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Nearby Dog-Friendly Places</h3>
              
              <div className="space-y-4">
                {/* Listing Item 1 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start">
                    <div className="bg-[#F8F4E3] rounded-lg p-2 mr-4">
                      <MapPin className="w-6 h-6 text-[#F5A623]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Happy Paws Veterinary Clinic</h4>
                      <p className="text-sm text-gray-600">123 Main Street, Dublin 2</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">(42 reviews)</span>
                      </div>
                      <p className="text-xs text-[#4A90E2] mt-1">1.2 km away • Vet</p>
                    </div>
                  </div>
                </div>
                
                {/* Listing Item 2 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start">
                    <div className="bg-[#F8F4E3] rounded-lg p-2 mr-4">
                      <MapPin className="w-6 h-6 text-[#7ED321]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phoenix Park Dog Walking Area</h4>
                      <p className="text-sm text-gray-600">Phoenix Park, Dublin 8</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">(87 reviews)</span>
                      </div>
                      <p className="text-xs text-[#4A90E2] mt-1">2.5 km away • Park</p>
                    </div>
                  </div>
                </div>
                
                {/* Listing Item 3 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start">
                    <div className="bg-[#F8F4E3] rounded-lg p-2 mr-4">
                      <MapPin className="w-6 h-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Paws & Relax Dog Grooming</h4>
                      <p className="text-sm text-gray-600">45 Grafton Street, Dublin 2</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">(29 reviews)</span>
                      </div>
                      <p className="text-xs text-[#4A90E2] mt-1">0.8 km away • Grooming</p>
                    </div>
                  </div>
                </div>
                
                {/* View More Button */}
                <div className="pt-2">
                  <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors duration-300">
                    View More Places
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
