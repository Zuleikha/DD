import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';

const ForumPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-[#4A90E2] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discussion Forum</h1>
            <p className="text-xl max-w-3xl">Connect with other dog owners, share experiences, and get advice from the community</p>
          </div>
        </div>
        
        {/* Forum Content */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Forum Categories */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Forum Categories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'General Discussion', posts: 324, icon: '💬' },
                    { title: 'Training Tips', posts: 187, icon: '🏆' },
                    { title: 'Health & Wellness', posts: 256, icon: '🩺' },
                    { title: 'Breed Specific', posts: 142, icon: '🐕' },
                    { title: 'Puppy Corner', posts: 198, icon: '🐶' },
                    { title: 'Nutrition & Diet', posts: 112, icon: '🍖' },
                  ].map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-[#4A90E2] transition-colors duration-300">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">{category.title}</h3>
                          <p className="text-gray-600 text-sm">{category.posts} posts</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent Discussions */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Discussions</h2>
                
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {[
                      { title: 'Best food for a German Shepherd puppy?', author: 'DogLover123', replies: 24, views: 156, category: 'Nutrition & Diet', time: '2 hours ago' },
                      { title: 'How to stop my dog from pulling on leash', author: 'WalkingBuddy', replies: 18, views: 97, category: 'Training Tips', time: '5 hours ago' },
                      { title: 'Recommended vets in Dublin city center?', author: 'NewDogParent', replies: 12, views: 84, category: 'Health & Wellness', time: '8 hours ago' },
                      { title: 'Introducing a new puppy to my older dog', author: 'TwoDogFamily', replies: 31, views: 203, category: 'General Discussion', time: '1 day ago' },
                      { title: 'Dog-friendly beaches near Dublin?', author: 'BeachLover', replies: 15, views: 112, category: 'General Discussion', time: '1 day ago' },
                    ].map((thread, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="mb-2 md:mb-0">
                            <h3 className="font-medium text-[#4A90E2] hover:text-[#3A80D2]">{thread.title}</h3>
                            <p className="text-sm text-gray-600">
                              Started by <span className="font-medium">{thread.author}</span> • {thread.time}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="px-2 py-1 bg-gray-100 rounded-full">{thread.category}</span>
                            <span>{thread.replies} replies</span>
                            <span>{thread.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                    View More Discussions
                  </button>
                </div>
              </div>
              
              {/* Start New Discussion */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Start a New Discussion</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      placeholder="Enter discussion title"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      id="category"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Discussion</option>
                      <option value="training">Training Tips</option>
                      <option value="health">Health & Wellness</option>
                      <option value="breed">Breed Specific</option>
                      <option value="puppy">Puppy Corner</option>
                      <option value="nutrition">Nutrition & Diet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                      Post Discussion
                    </button>
                  </div>
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

export default ForumPage;
