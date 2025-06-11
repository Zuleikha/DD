import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
const DogChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: "🐕 Hello! I'm Buddy's AI assistant. I'm here to help with all your dog-related questions about Ireland! Ask me about dog parks, vet advice, training tips, nutrition, or anything else dog-related.",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
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
        if (!inputText.trim() || isLoading)
            return;
        const userMessage = {
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
            const nutritionResponse = {
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
                }
                else if (lowerInput.includes('vet') || lowerInput.includes('health')) {
                    botResponseText = "🐕 For health concerns, please contact a local Irish vet immediately!\n\n🏥 **Emergency Signs:**\n• Difficulty breathing\n• Severe vomiting/diarrhea\n• Loss of consciousness\n• Suspected poisoning\n\n📞 **24/7 Emergency Vets:**\n• UCD Veterinary Hospital, Dublin\n• Cork University Veterinary Hospital\n• Emergency Vets Ireland (nationwide)\n\n📍 **Find trusted vets on DogDays.ie!**";
                }
                else if (lowerInput.includes('training') || lowerInput.includes('behavior')) {
                    botResponseText = "🐕 Dog training tips for Irish conditions:\n\n🎯 **Basic Training:**\n• Start with 'sit', 'stay', 'come'\n• Use positive reinforcement\n• Keep sessions short (5-10 minutes)\n• Practice in different weather conditions\n\n🌧️ **Irish Weather Training:**\n• Indoor training for rainy days\n• Waterproof gear for outdoor sessions\n• Socialization in various conditions\n\n📍 **Find professional trainers on DogDays.ie!**";
                }
                else {
                    botResponseText = `🐕 I'm having trouble connecting right now, but I'm here to help with dog-related questions about Ireland! Try asking about:\n\n• Dog parks and walks\n• Veterinary services\n• Training and behavior\n• Nutrition and feeding\n• Dog-friendly places\n\n📍 Visit DogDays.ie for comprehensive resources!`;
                }
            }
            else {
                const data = await response.json();
                botResponseText = data.response || "🐕 I received your message but couldn't generate a proper response. Please try rephrasing your question!";
            }
            const botMessage = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            // FIXED: Only scroll the chat container
            setTimeout(() => scrollChatToBottom(), 200);
        }
        catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                text: "🐕 I'm having connection issues, but I'm still here to help! Try asking about dog parks, nutrition, vets, or training in Ireland. Visit DogDays.ie for more resources!",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
            setTimeout(() => scrollChatToBottom(), 200);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const formatTime = (date) => {
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
    const handleSuggestionClick = (suggestion) => {
        setInputText(suggestion);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed bottom-6 right-6 z-50", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "bg-irish-purple hover:bg-irish-purple/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110", "aria-label": "Open dog chatbot", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(MessageCircle, { size: 24 }) }) }), isOpen && (_jsxs("div", { className: "fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-40 flex flex-col", children: [_jsxs("div", { className: "bg-irish-purple text-white p-4 rounded-t-lg flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center", children: _jsx(Bot, { size: 18 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Buddy's AI Assistant" }), _jsx("p", { className: "text-xs text-white/80", children: "Dog expert for Ireland" })] })] }), _jsxs("div", { ref: chatContainerRef, className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.map((message) => (_jsx("div", { className: `flex ${message.isUser ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`, children: [_jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs ${message.isUser
                                                ? 'bg-irish-stone text-irish-navy'
                                                : 'bg-irish-purple text-white'}`, children: message.isUser ? _jsx(User, { size: 14 }) : _jsx(Bot, { size: 14 }) }), _jsxs("div", { className: `p-3 rounded-lg ${message.isUser
                                                ? 'bg-irish-stone text-irish-navy'
                                                : 'bg-gray-100 text-gray-800'}`, children: [_jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.text }), _jsx("p", { className: "text-xs opacity-70 mt-1", children: formatTime(message.timestamp) })] })] }) }, message.id))), isLoading && (_jsx("div", { className: "flex justify-start", children: _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-6 h-6 bg-irish-purple text-white rounded-full flex items-center justify-center text-xs", children: _jsx(Bot, { size: 14 }) }), _jsx("div", { className: "bg-gray-100 p-3 rounded-lg", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce" }), _jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce", style: { animationDelay: '0.1s' } }), _jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce", style: { animationDelay: '0.2s' } })] }) })] }) })), _jsx("div", { ref: messagesEndRef })] }), messages.length === 1 && (_jsxs("div", { className: "px-4 py-2 border-t border-gray-100", children: [_jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Quick questions:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: quickSuggestions.map((suggestion, index) => (_jsx("button", { onClick: () => handleSuggestionClick(suggestion), className: "text-xs bg-irish-purple/10 text-irish-purple px-2 py-1 rounded-full hover:bg-irish-purple/20 transition-colors", children: suggestion }, index))) })] })), _jsxs("div", { className: "p-4 border-t border-gray-200", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("textarea", { value: inputText, onChange: (e) => setInputText(e.target.value), onKeyPress: handleKeyPress, placeholder: "Ask me about dogs in Ireland...", className: "flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-irish-purple focus:border-transparent", rows: 2, disabled: isLoading }), _jsx("button", { onClick: sendMessage, disabled: !inputText.trim() || isLoading, className: "bg-irish-purple hover:bg-irish-purple/90 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors", children: _jsx(Send, { size: 18 }) })] }), _jsx("p", { className: "text-xs text-gray-500 mt-2", children: "\uD83D\uDC15 Ask about dog parks, vets, training, nutrition, or anything dog-related in Ireland!" })] })] }))] }));
};
export default DogChatbot;
