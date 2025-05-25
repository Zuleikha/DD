import React from 'react';

import ChatbotWidget from '../components/common/ChatbotWidget';

const TrainingPage: React.FC = () => {
  // Sample data for training resources
  const trainingResources = [
    {
      id: 1,
      title: 'Pawsitive Training Academy',
      description: 'Professional dog training for all ages and breeds',
      address: '123 Training Lane, Dublin 2',
      phone: '01-555-1234',
      website: 'www.pawsitivetraining.ie',
      services: ['Basic Obedience', 'Puppy Classes', 'Behavior Modification', 'Advanced Training']
    },
    {
      id: 2,
      title: 'Canine Excellence Training Center',
      description: 'Specialized training programs using positive reinforcement techniques',
      address: '45 Bark Avenue, Dublin 4',
      phone: '01-555-5678',
      website: 'www.canineexcellence.ie',
      services: ['Group Classes', 'Private Sessions', 'Agility Training', 'Therapy Dog Training']
    },
    {
      id: 3,
      title: 'Good Dog Training School',
      description: 'Family-friendly training for dogs of all abilities',
      address: '78 Woof Street, Dublin 6',
      phone: '01-555-9012',
      website: 'www.gooddogtraining.ie',
      services: ['Puppy Socialization', 'Basic Commands', 'Leash Training', 'Problem Solving']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#4A90E2] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dog Training Resources</h1>
            <p className="text-xl max-w-3xl">Find professional training services and tips to help your dog become a well-behaved companion</p>
          </div>
        </div>
        
        {/* Training Information Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">The Importance of Dog Training</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Proper training is essential for a happy, well-adjusted dog and a harmonious relationship with your pet. Training provides mental stimulation, builds confidence, and ensures your dog's safety in various situations.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Basic Training Every Dog Should Have</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Sit, stay, and come commands</li>
                  <li>Walking politely on a leash</li>
                  <li>Appropriate greeting behavior</li>
                  <li>Leaving items when told</li>
                  <li>Settling down on command</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Training Methods</h3>
                <p className="mb-4">
                  Modern dog training emphasizes positive reinforcement techniques:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Reward-based training using treats, praise, and play</li>
                  <li>Clicker training for precise timing of rewards</li>
                  <li>Consistency in commands and expectations</li>
                  <li>Short, frequent training sessions</li>
                  <li>Patience and understanding of your dog's learning style</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Training Resources Listings */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Top Training Resources</h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {trainingResources.map(resource => (
                <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-gray-700"><strong>Address:</strong> {resource.address}</p>
                      <p className="text-gray-700"><strong>Phone:</strong> {resource.phone}</p>
                      <p className="text-gray-700"><strong>Website:</strong> {resource.website}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Services Offered:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {resource.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm">
                        Get Directions
                      </button>
                    </div>
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

export default TrainingPage;
