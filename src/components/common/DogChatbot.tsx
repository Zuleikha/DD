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

  // Only scroll to bottom when user sends a message or when chat is first opened
  const scrollToBottom = (smooth: boolean = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: smooth ? 'smooth' : 'auto',
        block: 'end'
      });
    }
  };

  // Scroll to bottom only when chat is opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      // Small delay to ensure the chat window is rendered
      setTimeout(() => scrollToBottom(false), 100);
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

    // Scroll to bottom when user sends a message
    setTimeout(() => scrollToBottom(), 100);

    try {
      // Enhanced API call with better error handling
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
        // Handle different error types
        if (response.status === 404) {
          botResponseText = "🐕 I'm still learning! It looks like my backend isn't set up yet. For now, here's some general advice about dog nutrition:\n\n🥘 **Dog Nutrition Basics:**\n• Feed high-quality dog food appropriate for your dog's age and size\n• Fresh water should always be available\n• Avoid chocolate, grapes, onions, and garlic\n• Consult your local Irish vet for specific dietary needs\n• Consider the Irish climate when choosing food portions\n\n📍 For professional nutrition advice, check out the nutrition services on DogDays.ie!";
        } else if (response.status === 429) {
          botResponseText = "🐕 Woof! I'm getting lots of questions right now. Please wait a moment and try again!";
        } else {
          botResponseText = `🐕 I'm having trouble connecting (Error ${response.status}). Let me give you some quick advice anyway!\n\nIf you asked about nutrition: Feed your dog high-quality food, avoid toxic foods like chocolate, and consult your Irish vet for specific needs!`;
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
      
      // Scroll to show the new bot response
      setTimeout(() => scrollToBottom(), 200);

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Provide helpful fallback responses based on the input
      let fallbackResponse = "🐕 Woof! I'm having trouble connecting right now.";
      
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes('nutrition') || lowerInput.includes('food') || lowerInput.includes('feed')) {
        fallbackResponse = "🐕 I can't connect right now, but here's quick nutrition advice:\n\n🥘 **Dog Nutrition Tips:**\n• Feed age-appropriate, high-quality dog food\n• Fresh water always available\n• Avoid chocolate, grapes, onions, garlic\n• 2-3 meals per day for adult dogs\n• Consult your Irish vet for specific dietary needs\n\n📍 Check the nutrition section on DogDays.ie for local suppliers!";
      } else if (lowerInput.includes('park') || lowerInput.includes('walk')) {
        fallbackResponse = "🐕 I can't connect right now, but Ireland has amazing dog parks! Check the parks section on DogDays.ie for dog-friendly locations near you!";
      } else if (lowerInput.includes('vet') || lowerInput.includes('health')) {
        fallbackResponse = "🐕 I can't connect right now, but for health concerns, please contact a local Irish vet immediately. Check the vets section on DogDays.ie for trusted professionals!";
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      // Scroll to show the error message
      setTimeout(() => scrollToBottom(), 200);
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
    "Dog parks in Dublin",
    "Dog nutrition advice", 
    "Emergency vet services",
    "Dog training tips"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-irish-purple hover:bg-irish-purple/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open dog chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-40 flex flex-col">
          {/* Header */}
          <div className="bg-irish-purple text-white p-4 rounded-t-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold">Buddy's AI Assistant</h3>
              <p className="text-xs text-white/80">Dog expert for Ireland</p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    message.isUser 
                      ? 'bg-irish-stone text-irish-navy' 
                      : 'bg-irish-purple text-white'
                  }`}>
                    {message.isUser ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-irish-stone text-irish-navy'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-irish-purple text-white rounded-full flex items-center justify-center text-xs">
                    <Bot size={14} />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-irish-purple rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-irish-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-irish-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs bg-irish-purple/10 text-irish-purple px-2 py-1 rounded-full hover:bg-irish-purple/20 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about dogs in Ireland..."
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-irish-purple focus:border-transparent"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-irish-purple hover:bg-irish-purple/90 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              🐕 Ask about dog parks, vets, training, nutrition, or anything dog-related in Ireland!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DogChatbot;

