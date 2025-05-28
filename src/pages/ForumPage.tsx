import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom installed
//import Header from '../components/layout/Header';
//import Footer from '../components/layout/Footer';
import ChatbotWidget from '../components/common/ChatbotWidget';

const ForumPage: React.FC = () => {
  // State for the "Start a New Discussion" form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  // Handler for posting a new discussion
  const handlePostDiscussion = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send this data to your backend API
    console.log('New Discussion Submitted:', {
      title,
      category,
      message,
    });

    // Reset form fields after submission (or handle success/error from API)
    setTitle('');
    setCategory('');
    setMessage('');

    // You might want to show a success message or redirect the user
    alert('Your discussion has been posted!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      

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
                    { title: 'General Discussion', posts: 324, icon: '💬', slug: 'general-discussion' },
                    { title: 'Training Tips', posts: 187, icon: '🏆', slug: 'training-tips' },
                    { title: 'Health & Wellness', posts: 256, icon: '🩺', slug: 'health-wellness' },
                    { title: 'Breed Specific', posts: 142, icon: '🐕', slug: 'breed-specific' },
                    { title: 'Puppy Corner', posts: 198, icon: '🐶', slug: 'puppy-corner' },
                    { title: 'Nutrition & Diet', posts: 112, icon: '🍖', slug: 'nutrition-diet' },
                  ].map((categoryItem, index) => (
                    // Wrap the category div with Link for navigation
                    <Link
                      key={index}
                      to={`/forum/category/${categoryItem.slug}`} // Example route for category
                      className="block" // Make the entire link block-level for clickability
                    >
                      <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-[#4A90E2] transition-colors duration-300 cursor-pointer">
                        <div className="flex items-start">
                          <span className="text-2xl mr-3">{categoryItem.icon}</span>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-800">{categoryItem.title}</h3>
                            <p className="text-gray-600 text-sm">{categoryItem.posts} posts</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Discussions */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Discussions</h2>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {[
                      { id: 1, title: 'Best food for a German Shepherd puppy?', author: 'DogLover123', replies: 24, views: 156, category: 'Nutrition & Diet', time: '2 hours ago', slug: 'best-food-german-shepherd-puppy' },
                      { id: 2, title: 'How to stop my dog from pulling on leash', author: 'WalkingBuddy', replies: 18, views: 97, category: 'Training Tips', time: '5 hours ago', slug: 'how-to-stop-dog-pulling-leash' },
                      { id: 3, title: 'Recommended vets in Dublin city center?', author: 'NewDogParent', replies: 12, views: 84, category: 'Health & Wellness', time: '8 hours ago', slug: 'recommended-vets-dublin-city-center' },
                      { id: 4, title: 'Introducing a new puppy to my older dog', author: 'TwoDogFamily', replies: 31, views: 203, category: 'General Discussion', time: '1 day ago', slug: 'introducing-new-puppy-older-dog' },
                      { id: 5, title: 'Dog-friendly beaches near Dublin?', author: 'BeachLover', replies: 15, views: 112, category: 'General Discussion', time: '1 day ago', slug: 'dog-friendly-beaches-dublin' },
                    ].map((thread, index) => (
                      // Wrap the discussion div with Link for navigation
                      <Link
                        key={thread.id} // Use unique ID for key if available, otherwise index is fallback
                        to={`/forum/thread/${thread.slug}`} // Example route for discussion thread
                        className="block" // Make the entire link block-level
                      >
                        <div className="p-4 hover:bg-gray-50 cursor-pointer">
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
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  {/* This button would typically trigger loading more data from an API */}
                  <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300">
                    View More Discussions
                  </button>
                </div>
              </div>

              {/* Start New Discussion */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Start a New Discussion</h2>
                {/* Changed div to form and added onSubmit handler */}
                <form onSubmit={handlePostDiscussion} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      id="title" // Added id
                      value={title} // Controlled component
                      onChange={(e) => setTitle(e.target.value)} // Update state on change
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      placeholder="Enter discussion title"
                      required // Make title required
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      id="category" // Added id
                      value={category} // Controlled component
                      onChange={(e) => setCategory(e.target.value)} // Update state on change
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      required // Make category required
                    >
                      <option value="">Select a category</option>
                      {/* Using the same categories as above for consistency */}
                      {[
                        { title: 'General Discussion', value: 'general' },
                        { title: 'Training Tips', value: 'training' },
                        { title: 'Health & Wellness', value: 'health' },
                        { title: 'Breed Specific', value: 'breed' },
                        { title: 'Puppy Corner', value: 'puppy' },
                        { title: 'Nutrition & Diet', value: 'nutrition' },
                      ].map((catOption, idx) => (
                        <option key={idx} value={catOption.value}>{catOption.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message" // Added id
                      rows={5}
                      value={message} // Controlled component
                      onChange={(e) => setMessage(e.target.value)} // Update state on change
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      placeholder="Enter your message"
                      required // Make message required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit" // Changed to type="submit" for form
                      className="px-4 py-2 bg-[#4A90E2] text-white rounded-md hover:bg-[#3A80D2] transition-colors duration-300"
                    >
                      Post Discussion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

     
      <ChatbotWidget />
    </div>
  );
};

export default ForumPage;