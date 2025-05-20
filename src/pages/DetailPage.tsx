import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';

const DetailPage: React.FC = () => {
  // Sample data for demonstration
  const listing = {
    id: 1,
    title: 'Happy Paws Veterinary Clinic',
    address: '123 Main Street, Dublin 2',
    phone: '01 234 5678',
    email: 'info@happypawsvet.ie',
    website: 'www.happypawsvet.ie',
    rating: 4.8,
    reviewCount: 124,
    type: 'vet',
    description: 'Happy Paws Veterinary Clinic has been providing exceptional care for dogs across Dublin since 2010. Our team of experienced veterinarians specializes in preventative care, emergency services, and surgical procedures for all breeds.',
    images: [
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80'
    ],
    services: [
      { name: '24/7 Emergency Care', description: 'Round-the-clock emergency services for urgent situations' },
      { name: 'Surgical Services', description: 'Full range of surgical procedures with modern equipment' },
      { name: 'Dental Care', description: 'Comprehensive dental examinations and treatments' },
      { name: 'Vaccinations', description: 'Complete vaccination programs for puppies and adult dogs' }
    ],
    hours: [
      { day: 'Monday-Friday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
    ],
    reviews: [
      { id: 1, name: 'John D.', rating: 5, date: 'March 15, 2025', content: 'Excellent care for my Golden Retriever. The staff was friendly and professional, and the facilities are clean and modern.' },
      { id: 2, name: 'Sarah M.', rating: 4, date: 'February 28, 2025', content: 'Great service during an emergency situation. The only reason for 4 stars is the wait time, but that\'s understandable for emergency care.' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <a href="/" className="text-gray-600 hover:text-[#4A90E2]">Home</a>
              <span className="mx-2 text-gray-400">/</span>
              <a href="/vets" className="text-gray-600 hover:text-[#4A90E2]">Vets</a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-800 font-medium">{listing.title}</span>
            </div>
          </div>
        </div>
        
        {/* Detail Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={listing.images[0]} 
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{listing.title}</h1>
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= listing.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span>{listing.rating.toFixed(1)} ({listing.reviewCount} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#F5A623] text-white text-sm font-medium rounded-full">
                24/7 Emergency Care
              </span>
              <span className="px-3 py-1 bg-[#4A90E2] text-white text-sm font-medium rounded-full">
                Surgical Services
              </span>
              <span className="px-3 py-1 bg-[#7ED321] text-white text-sm font-medium rounded-full">
                Dental Care
              </span>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Main Information */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">About</h2>
                <p className="text-gray-700 leading-relaxed">{listing.description}</p>
              </section>
              
              {/* Gallery Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {listing.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-48">
                      <img 
                        src={image} 
                        alt={`${listing.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Services Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.services.map((service, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#4A90E2] transition-colors duration-300">
                      <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Reviews Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reviews</h2>
                
                {/* Review Summary */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold text-gray-800 mr-4">{listing.rating.toFixed(1)}</div>
                    <div>
                      <div className="flex mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-5 h-5 ${star <= listing.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">Based on {listing.reviewCount} reviews</div>
                    </div>
                  </div>
                  
                  {/* Rating Bars */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-16 text-sm text-gray-600">5 stars</div>
                      <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="w-10 text-sm text-gray-600">85%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 text-sm text-gray-600">4 stars</div>
                      <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <div className="w-10 text-sm text-gray-600">10%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 text-sm text-gray-600">3 stars</div>
                      <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '3%' }}></div>
                      </div>
                      <div className="w-10 text-sm text-gray-600">3%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 text-sm text-gray-600">2 stars</div>
                      <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
                      </div>
                      <div className="w-10 text-sm text-gray-600">1%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 text-sm text-gray-600">1 star</div>
                      <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
                      </div>
                      <div className="w-10 text-sm text-gray-600">1%</div>
                    </div>
                  </div>
                </div>
                
                {/* Review List */}
                <div className="space-y-6">
                  {listing.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium text-gray-800">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* View More Button */}
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 border-2 border-[#4A90E2] text-[#4A90E2] font-medium rounded-md hover:bg-[#4A90E2] hover:text-white transition-colors duration-300">
                    Read All {listing.reviewCount} Reviews
                  </button>
                </div>
              </section>
            </div>
            
            {/* Right Column: Contact & Map */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                
                {/* Address */}
                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-[#4A90E2] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">{listing.address}</p>
                    <button className="mt-2 text-sm text-[#4A90E2] hover:text-[#3A80D2] font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center mb-4">
                  <Phone className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{listing.phone}</p>
                </div>
                
                {/* Email */}
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{listing.email}</p>
                </div>
                
                {/* Website */}
                <div className="flex items-center mb-6">
                  <Globe className="w-5 h-5 text-[#4A90E2] mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">{listing.website}</p>
                    <a 
                      href={`https://${listing.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 text-sm text-[#4A90E2] hover:text-[#3A80D2] font-medium"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-[#4A90E2] mr-2" />
                    Opening Hours
                  </h4>
                  <div className="space-y-2">
                    {listing.hours.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.day}</span>
                        <span className="text-gray-800 font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-[#F5A623] font-medium">
                    Emergency services available 24/7
                  </p>
                </div>
                
                {/* Map */}
                <div className="mt-6">
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#4A90E2]" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    Located 2.3 km from Dublin City Centre
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button className="w-full py-3 bg-[#4A90E2] text-white font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                    Contact Now
                  </button>
                  <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-300">
                    Save to Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Listings Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Other Vets Nearby</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Simplified Listing Cards */}
              {[1, 2, 3].map(id => (
                <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-gray-200">
                    <img 
                      src={`https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80`} 
                      alt="Vet Clinic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Dublin Pet Hospital {id}</h3>
                    <p className="text-sm text-gray-600 mb-2">456 Oak Street, Dublin {id}</p>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">(42 reviews)</span>
                    </div>
                    <p className="text-xs text-[#4A90E2]">{id + 1}.5 km away</p>
                    <button className="mt-3 w-full py-2 bg-[#4A90E2] text-white text-sm font-medium rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default DetailPage;
