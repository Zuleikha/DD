import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! I\'m your DogDays.ie assistant. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '')
            return;
        setMessages([...messages, { type: 'user', text: inputValue }]);
        setTimeout(() => {
            let botResponse = "I'm sorry, I don't have that information yet. Our team is working on expanding my knowledge base!";
            if (inputValue.toLowerCase().includes('vet') || inputValue.toLowerCase().includes('veterinarian')) {
                botResponse = "You can find vets near you by visiting our 'Find a Vet' section and searching by county.";
            }
            else if (inputValue.toLowerCase().includes('park') || inputValue.toLowerCase().includes('walk')) {
                botResponse = "Check out our 'Parks & Walks' section for dog-friendly outdoor spaces.";
            }
            else if (inputValue.toLowerCase().includes('grooming')) {
                botResponse = "Our 'Grooming' section lists various dog groomers available in your area.";
            }
            else if (inputValue.toLowerCase().includes('training')) {
                botResponse = "Find dog trainers and training resources in our 'Training' section.";
            }
            else if (inputValue.toLowerCase().includes('nutrition') || inputValue.toLowerCase().includes('food')) {
                botResponse = "Explore our 'Nutrition' section for advice on dog food and dietary needs.";
            }
            else if (inputValue.toLowerCase().includes('places') || inputValue.toLowerCase().includes('friendly')) {
                botResponse = "Visit 'Dog-Friendly Places' to find cafes, pubs, and accommodations that welcome dogs.";
            }
            else if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
                botResponse = "Hello there! How can I assist you with your DogDays.ie queries?";
            }
            setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
        }, 500); // Simulate a short delay for bot response
        setInputValue(''); // Clear input after sending
    };
    return (_jsxs(_Fragment, { children: [isOpen && (_jsxs("div", { className: "fixed bottom-4 right-4 bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col z-50", children: [_jsxs("div", { className: "flex justify-between items-center bg-[#4A90E2] text-white p-3 rounded-t-lg", children: [_jsx("h3", { className: "font-semibold", children: "DogDays.ie Chatbot" }), _jsx("button", { onClick: toggleChat, className: "text-white hover:text-gray-200", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "flex-grow p-4 h-80 overflow-y-auto flex flex-col space-y-3", children: messages.map((message, index) => (_jsx("div", { className: `max-w-[80%] p-3 rounded-lg ${message.type === 'user'
                                ? 'bg-[#4A90E2] text-white self-end rounded-br-none'
                                : 'bg-gray-100 text-gray-800 self-start rounded-bl-none'}`, children: message.text }, index))) }), _jsxs("form", { onSubmit: handleSubmit, className: "border-t border-gray-200 p-3 flex", children: [_jsx("input", { type: "text", id: "questionInput", name: "question", value: inputValue, onChange: handleInputChange, placeholder: "Type your question...", className: "flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent" }), _jsx("button", { type: "submit", className: "px-4 py-2 bg-[#4A90E2] text-white font-medium rounded-r-md hover:bg-[#3A80D2] transition-colors duration-300", children: "Send" })] })] })), !isOpen && (_jsx("button", { onClick: toggleChat, className: "fixed bottom-4 right-4 bg-[#4A90E2] text-white p-4 rounded-full shadow-lg hover:bg-[#3A80D2] transition-colors duration-300 z-50", "aria-label": "Open chat", children: _jsx(MessageCircle, { className: "h-6 w-6" }) }))] }));
};
export default ChatbotWidget;
