import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'bot', text: string}[]>([
    {type: 'bot', text: 'Hello! I\'m your DogDays.ie assistant. How can I help you today?'}
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages([...messages, {type: 'user', text: inputValue}]);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't have that information yet. Our team is working on expanding my knowledge base!";
      
      // Simple keyword matching for demo purposes
      if (inputValue.toLowerCase().includes('vet') || inputValue.toLowerCase().includes('veterinarian')) {
        botResponse = "You can find vets near you by visiting our 'Find a Vet' section and searching by county.";
      } else if (inputValue.toLowerCase().includes('park') || inputValue.toLowerCase().includes('walk')) {
        botResponse = "Check out our 'Parks & Walks' section for dog-friendly parks across Ireland!";
      } else if (inputValue.toLowerCase().includes('food') || inputValue.toLowerCase().includes('nutrition')) {
        botResponse = "Our Nutrition section has guides on feeding your dog, including breed-specific advice.";
      } else if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
        botResponse = "Hello there! How can I help you with your dog-related questions today?";
      }
      
      setMessages(prev => [...prev, {type: 'bot', text: botResponse}]);
    }, 1000);
    
    // Clear input
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
          isOpen ? 'bg-[#E74C3C] text-white' : 'bg-[#4A90E2] text-white hover:bg-[#3A80D2]'
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
      
      {/* Chat Dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-[#4A90E2] text-white p-4">
            <h3 className="font-semibold">DogDays.ie Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about dog services in Ireland</p>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-grow p-4 h-80 overflow-y-auto flex flex-col space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-[#4A90E2] text-white self-end rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 self-start rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              id="questionInput" // Added id attribute
              name="question"    // Added name attribute
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question..."
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-[#4A90E2] text-white font-medium rounded-r-md hover:bg-[#3A80D2] transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;