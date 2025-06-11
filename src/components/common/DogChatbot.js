import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
const DogChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: "🐕 Hello! I'm Buddy's AI assistant. I'm here to help with all your dog-related questions about Ireland! Ask me about dog parks, vet advice, training tips, or anything else dog-related.",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const sendMessage = async () => {
        if (!inputText.trim() || isLoading)
            return;
        const userMessage = {
            id: Date.now().toString(),
            text: inputText,
            isUser: true,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);
        try {
            // Call OpenAI API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputText,
                    context: 'dog-related questions in Ireland'
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to get response');
            }
            const data = await response.json();
            const botMessage = {
                id: (Date.now() + 1).toString(),
                text: data.response,
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }
        catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                text: "🐕 Woof! Sorry, I'm having trouble connecting right now. Please try again in a moment, or contact our team directly for help!",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
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
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed bottom-6 right-6 z-50", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "bg-irish-purple hover:bg-irish-purple/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110", "aria-label": "Open dog chatbot", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(MessageCircle, { size: 24 }) }) }), isOpen && (_jsxs("div", { className: "fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-40 flex flex-col", children: [_jsxs("div", { className: "bg-irish-purple text-white p-4 rounded-t-lg flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center", children: _jsx(Bot, { size: 18 }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Buddy's AI Assistant" }), _jsx("p", { className: "text-xs text-white/80", children: "Dog expert for Ireland" })] })] }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.map((message) => (_jsx("div", { className: `flex ${message.isUser ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`, children: [_jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs ${message.isUser
                                                ? 'bg-irish-stone text-irish-navy'
                                                : 'bg-irish-purple text-white'}`, children: message.isUser ? _jsx(User, { size: 14 }) : _jsx(Bot, { size: 14 }) }), _jsxs("div", { className: `p-3 rounded-lg ${message.isUser
                                                ? 'bg-irish-stone text-irish-navy'
                                                : 'bg-gray-100 text-gray-800'}`, children: [_jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.text }), _jsx("p", { className: "text-xs opacity-70 mt-1", children: formatTime(message.timestamp) })] })] }) }, message.id))), isLoading && (_jsx("div", { className: "flex justify-start", children: _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-6 h-6 bg-irish-purple text-white rounded-full flex items-center justify-center text-xs", children: _jsx(Bot, { size: 14 }) }), _jsx("div", { className: "bg-gray-100 p-3 rounded-lg", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce" }), _jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce", style: { animationDelay: '0.1s' } }), _jsx("div", { className: "w-2 h-2 bg-irish-purple rounded-full animate-bounce", style: { animationDelay: '0.2s' } })] }) })] }) })), _jsx("div", { ref: messagesEndRef })] }), _jsxs("div", { className: "p-4 border-t border-gray-200", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("textarea", { value: inputText, onChange: (e) => setInputText(e.target.value), onKeyPress: handleKeyPress, placeholder: "Ask me about dogs in Ireland...", className: "flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-irish-purple focus:border-transparent", rows: 2, disabled: isLoading }), _jsx("button", { onClick: sendMessage, disabled: !inputText.trim() || isLoading, className: "bg-irish-purple hover:bg-irish-purple/90 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors", children: _jsx(Send, { size: 18 }) })] }), _jsx("p", { className: "text-xs text-gray-500 mt-2", children: "\uD83D\uDC15 Ask about dog parks, vets, training, nutrition, or anything dog-related in Ireland!" })] })] }))] }));
};
export default DogChatbot;
