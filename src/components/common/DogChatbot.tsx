import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const DogChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🐕 Hello! I'm Buddy's AI assistant. I'm here to help with all your dog-related questions about Ireland! Ask me about dog parks, vet advice, training tips, nutrition, or anything else dog-related.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // FIXED: Only scroll within the chat container, never the page
  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Only scroll when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      setTimeout(() => scrollChatToBottom(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText.trim();
    setInputText('');
    setIsLoading(true);

    // FIXED: Only scroll the chat container, not the page
    setTimeout(() => scrollChatToBottom(), 100);

    // FIXED: Provide immediate nutrition response for nutrition questions
    const lowerInput = currentInput.toLowerCase();
    if (lowerInput.includes('nutrition') || lowerInput.includes('food') || lowerInput.includes('feed') || lowerInput.includes('diet')) {
      // Provide comprehensive nutrition advice immediately
      const nutritionResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "🐕 Here's comprehensive dog nutrition advice for Ireland:\n\n🥘 **Daily Feeding Guidelines:**\n• Puppies (2-6 months): 3-4 meals daily\n• Adult dogs: 2 meals daily (morning & evening)\n• Senior dogs (7+ years): 2 smaller, easily digestible meals\n\n🚫 **Foods to AVOID (Toxic!):**\n• Chocolate, grapes, raisins\n• Onions, garlic, chives\n• Avocado, macadamia nuts\n• Xylitol (artificial sweetener)\n• Cooked bones (can splinter)\n\n✅ **Recommended Foods:**\n• High-quality commercial dog food (age-appropriate)\n• Lean meats: chicken, turkey, fish\n• Safe vegetables: carrots, green beans, sweet potato\n• Fresh water always available\n\n🇮🇪 **Irish Climate Considerations:**\n• Adjust portions for activity level in wet weather\n• Consider joint supplements for older dogs in damp conditions\n• Local Irish brands: Connolly's Red Mills, Gain Pet Nutrition\n• Consult Irish vets for breed-specific needs\n\n📍 **Find nutrition specialists on DogDays.ie or consult your local Irish vet for personalized dietary plans!**",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, nutritionResponse]);
      setIsLoading(false);
      setTimeout(() => scrollChatToBottom(), 200);
      return;
    }

    try {
      // Try API call for other questions
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          context: 'dog-related questions in Ireland'
        }),
      });

      let botResponseText = '';

      if (!response.ok) {
        // Provide helpful fallback responses
        if (lowerInput.includes('park') || lowerInput.includes('walk')) {
          botResponseText = "🐕 Ireland has amazing dog parks! Here are some great options:\n\n🌳 **Popular Dog Parks:**\n• Phoenix Park, Dublin - Huge open spaces\n• Marlay Park, Dublin - Designated dog areas\n• Fitzgerald Park, Cork - Beautiful riverside walks\n• People's Park, Limerick - Central location\n\n🏖️ **Dog-Friendly Beaches:**\n• Dollymount Strand, Dublin\n• Inch Beach, Kerry\n• Rosses Point, Sligo\n\n📍 **Find more locations on DogDays.ie parks section!**";
        } else if (lowerInput.includes('vet') || lowerInput.includes('health')) {
          botResponseText = "🐕 For health concerns, please contact a local Irish vet immediately!\n\n🏥 **Emergency Signs:**\n• Difficulty breathing\n• Severe vomiting/diarrhea\n• Loss of consciousness\n• Suspected poisoning\n\n📞 **24/7 Emergency Vets:**\n• UCD Veterinary Hospital, Dublin\n• Cork University Veterinary Hospital\n• Emergency Vets Ireland (nationwide)\n\n📍 **Find trusted vets on DogDays.ie!**";
        } else if (lowerInput.includes('training') || lowerInput.includes('behavior')) {
          botResponseText = "🐕 Dog training tips for Irish conditions:\n\n🎯 **Basic Training:**\n• Start with 'sit', 'stay', 'come'\n• Use positive reinforcement\n• Keep sessions short (5-10 minutes)\n• Practice in different weather conditions\n\n🌧️ **Irish Weather Training:**\n• Indoor training for rainy days\n• Waterproof gear for outdoor sessions\n• Socialization in various conditions\n\n📍 **Find professional trainers on DogDays.ie!**";
        } else {
          botResponseText = `🐕 I'm having trouble connecting right now, but I'm here to help with dog-related questions about Ireland! Try asking about:\n\n• Dog parks and walks\n• Veterinary services\n• Training and behavior\n• Nutrition and feeding\n• Dog-friendly places\n\n📍 Visit DogDays.ie for comprehensive resources!`;
        }
      } else {
        const data = await response.json();
        botResponseText = data.response || "🐕 I received your message but couldn't generate a proper response. Please try rephrasing your question!";
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      
      // FIXED: Only scroll the chat container
      setTimeout(() => scrollChatToBottom(), 200);

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "🐕 I'm having connection issues, but I'm still here to help! Try asking about dog parks, nutrition, vets, or training in Ireland. Visit DogDays.ie for more resources!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      setTimeout(() => scrollChatToBottom(), 200);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Quick suggestion buttons
  const quickSuggestions = [
    "Dog nutrition advice",
    "Dog parks in Dublin", 
    "Emergency vet services",
    "Dog training tips"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot size={20} />
          <span className="font-semibold">Buddy's AI Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-purple-700 p-1 rounded"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-start space-x-2">
                {!message.isUser && <Bot size={16} className="mt-1 flex-shrink-0" />}
                {message.isUser && <User size={16} className="mt-1 flex-shrink-0" />}
                <div className="flex-1">
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-purple-200' : 'text-gray-500'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
              <div className="flex items-center space-x-2">
                <Bot size={16} />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions (only show when no messages yet) */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-200 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about dog parks, nutrition, vets..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputText.trim() || isLoading}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DogChatbot;

