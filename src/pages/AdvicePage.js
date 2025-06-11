import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
const AdvicePage = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm DogBuddy, your virtual dog advice assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    // Common dog advice topics
    const commonTopics = [
        "Puppy training tips",
        "Dog nutrition advice",
        "Behavioral issues",
        "Health concerns",
        "Breed-specific questions",
        "Exercise needs"
    ];
    // Sample responses for demonstration
    const sampleResponses = {
        "puppy": "Puppies require patience and consistent training. Start with basic commands like sit, stay, and come. Keep training sessions short (5-10 minutes) and always end on a positive note. Make sure to socialize your puppy with different people, environments, and other dogs once they've had their vaccinations.",
        "training": "Positive reinforcement is the most effective training method. Reward good behavior with treats, praise, or play. Be consistent with commands and rules. If you're struggling with specific behaviors, consider working with a professional dog trainer.",
        "food": "A balanced diet is crucial for your dog's health. High-quality commercial dog foods labeled as 'complete and balanced' meet basic nutritional needs. The amount to feed depends on your dog's age, size, and activity level. Always provide fresh water and consult your vet about specific dietary needs.",
        "behavior": "Dogs often display unwanted behaviors due to boredom, anxiety, or lack of training. Ensure your dog gets enough physical exercise and mental stimulation. Establish clear boundaries and be consistent. For persistent issues, consult with a professional dog behaviorist.",
        "health": "Regular vet check-ups are essential for your dog's health. Keep vaccinations up to date, maintain parasite prevention, and watch for changes in behavior, appetite, or energy levels that might indicate health issues. Dental care, weight management, and regular exercise are also important aspects of preventive care.",
        "breed": "Different breeds have different needs in terms of exercise, grooming, and training. Research your specific breed to understand their characteristics and potential health issues. Mixed-breed dogs often benefit from hybrid vigor but may inherit traits from multiple breeds.",
        "exercise": "Most dogs need at least 30 minutes to 2 hours of exercise daily, depending on breed, age, and health. This can include walks, play sessions, or training activities. Mental stimulation through puzzle toys and training is also important for your dog's wellbeing."
    };
    // Auto-scroll to bottom of chat when new messages appear
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    // Handle sending a message
    const handleSendMessage = () => {
        if (inputText.trim() === '')
            return;
        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsTyping(true);
        // Simulate bot thinking and responding
        setTimeout(() => {
            // Generate response based on keywords in user message
            let botResponse = "I'm not sure about that. Could you try asking about puppy training, dog food, behavior issues, or health concerns?";
            const userText = inputText.toLowerCase();
            for (const [keyword, response] of Object.entries(sampleResponses)) {
                if (userText.includes(keyword)) {
                    botResponse = response;
                    break;
                }
            }
            const botMessage = {
                id: messages.length + 2,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };
    // Handle pressing Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
    // Handle clicking on a suggested topic
    const handleTopicClick = (topic) => {
        setInputText(topic);
        // Focus the input after setting the text
        document.getElementById('chat-input')?.focus();
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "Dog Advice Center" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [_jsxs("div", { className: "bg-[#4A90E2] p-4", children: [_jsx("h2", { className: "text-white text-xl font-semibold", children: "Chat with DogBuddy" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Ask any questions about dog care, training, or behavior" })] }), _jsxs("div", { className: "h-[500px] overflow-y-auto p-4 bg-gray-50", children: [messages.map(message => (_jsx("div", { className: `mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `max-w-[80%] rounded-lg p-3 ${message.sender === 'user'
                                                    ? 'bg-blue-500 text-white rounded-br-none'
                                                    : 'bg-white border border-gray-200 rounded-bl-none'}`, children: [_jsx("p", { children: message.text }), _jsx("p", { className: `text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`, children: message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) })] }) }, message.id))), isTyping && (_jsx("div", { className: "flex justify-start mb-4", children: _jsx("div", { className: "bg-white border border-gray-200 rounded-lg rounded-bl-none p-3", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }), _jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: '0.2s' } }), _jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: '0.4s' } })] }) }) })), _jsx("div", { ref: messagesEndRef })] }), _jsx("div", { className: "p-4 border-t border-gray-200", children: _jsxs("div", { className: "flex", children: [_jsx("input", { id: "chat-input", type: "text", className: "flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500", placeholder: "Type your question here...", value: inputText, onChange: (e) => setInputText(e.target.value), onKeyPress: handleKeyPress }), _jsx("button", { className: "bg-[#4A90E2] text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors", onClick: handleSendMessage, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" }) }) })] }) })] }) }), _jsxs("div", { className: "lg:col-span-1", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-6", children: [_jsx("h3", { className: "text-lg font-semibold mb-3", children: "About DogBuddy" }), _jsx("p", { className: "text-gray-600 mb-4", children: "DogBuddy is your virtual assistant for all dog-related questions. While I can provide general advice, please consult with a veterinarian for specific health concerns." }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2 text-[#4A90E2]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }), _jsx("span", { children: "Responses are generated for demonstration purposes" })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("h3", { className: "text-lg font-semibold mb-3", children: "Suggested Topics" }), _jsx("div", { className: "space-y-2", children: commonTopics.map((topic, index) => (_jsx("button", { className: "w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-gray-700", onClick: () => handleTopicClick(topic), children: topic }, index))) })] }), _jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4 mt-6", children: [_jsxs("h3", { className: "text-red-700 font-semibold flex items-center", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }), "Emergency Information"] }), _jsx("p", { className: "text-red-600 text-sm mt-2", children: "For emergencies, please contact your local veterinarian immediately or call the 24/7 Pet Emergency Helpline at 1800-PET-HELP." })] })] })] })] }));
};
export default AdvicePage;
