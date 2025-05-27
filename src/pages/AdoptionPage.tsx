import React from 'react';
import Layout from '../components/Layout';
import ChatbotWidget from '../components/common/ChatbotWidget';

const AdoptionPage: React.FC = () => {
  // Sample adoption listings
  const adoptionListings = [
    {
      id: 1,
      name: 'Max',
      age: '3 years',
      breed: 'Labrador Retriever',
      gender: 'Male',
      location: 'Dublin SPCA',
      description: 'Max is a friendly and energetic Labrador who loves to play fetch and go for long walks. He gets along well with children and other dogs.',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 2,
      name: 'Bella',
      age: '2 years',
      breed: 'Border Collie Mix',
      gender: 'Female',
      location: 'Dogs Trust Ireland',
      description: 'Bella is an intelligent and active Border Collie mix who would thrive in a home where she can get plenty of exercise and mental stimulation.',
      image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    },
    {
      id: 3,
      name: 'Charlie',
      age: '5 years',
      breed: 'Beagle',
      gender: 'Male',
      location: 'ISPCA',
      description: 'Charlie is a sweet and gentle Beagle who loves to snuggle. He\'s house-trained and gets along well with cats and other dogs.',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      name: 'Luna',
      age: '1 year',
      breed: 'Terrier Mix',
      gender: 'Female',
      location: 'Galway SPCA',
      description: 'Luna is a playful and curious young Terrier mix who is looking for an active family. She\'s quick to learn and eager to please.',
      image: 'https://images.unsplash.com/photo-1583511655826-05700442982d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#7ED321] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Adoption</h1>
            <p className="text-xl max-w-3xl">Find your perfect canine companion and give a dog a loving forever home</p>
          </div>
        </div>
        
        {/* Adoption Information */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Adopt?</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Adopting a dog from a shelter or rescue organization is a rewarding way to add a four-legged friend to your family. When you adopt, you're giving a deserving dog a second chance at a happy life.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of Adoption</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>You're saving a life and creating space for another animal in need</li>
                  <li>Most shelter dogs are already vaccinated, microchipped, and spayed/neutered</li>
                  <li>Adult dogs often already have basic training and established personalities</li>
                  <li>Adoption fees are much lower than purchasing from a breeder</li>
                  <li>Many rescue organizations provide post-adoption support and resources</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Adoption Process</h3>
                <p className="mb-4">
                  The adoption process typically involves these steps:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Browse available dogs online or visit a shelter in person</li>
                  <li>Complete an adoption application</li>
                  <li>Meet the dog and interact with them</li>
                  <li>Home check (for some organizations)</li>
                  <li>Pay adoption fee and complete paperwork</li>
                  <li>Welcome your new family member home!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Adoption Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Dogs Available for Adoption</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {adoptionListings.map(dog => (
                <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto">
                      <img 
                        src={dog.image} 
                        alt={dog.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:w-3/5">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{dog.name}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{dog.breed}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{dog.age}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{dog.gender}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{dog.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{dog.location}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-[#7ED321] text-white text-sm rounded-md hover:bg-[#6DC20E] transition-colors duration-300">
                          Meet {dog.name}
                        </button>
                        <button className="flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors duration-300">
                          More Info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                View More Dogs
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default AdoptionPage;
