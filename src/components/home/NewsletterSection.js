import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Send } from 'lucide-react';
const NewsletterSection = () => {
    return (_jsx("section", { className: "py-16 bg-[#4A90E2] text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Stay Updated" }), _jsx("p", { className: "text-lg mb-8 opacity-90", children: "Subscribe to our newsletter for the latest dog-friendly places and events across Ireland" }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4 max-w-xl mx-auto", children: _jsxs("form", { className: "flex-grow flex sm:flex-row flex-col gap-4", children: [" ", _jsx("label", { htmlFor: "newsletterEmail", className: "sr-only", children: "Enter your email address" }), " ", _jsx("input", { type: "email", id: "newsletterEmail" // Added unique ID
                                    , name: "email" // Added name for form submission
                                    , placeholder: "Your email address", className: "flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F5A623]" }), _jsxs("button", { type: "submit" // IMPORTANT: Add type="submit" to the button within a form
                                    , className: "px-6 py-3 bg-[#F5A623] hover:bg-[#E09612] text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center", children: [_jsx("span", { children: "Subscribe" }), _jsx(Send, { className: "ml-2 h-4 w-4" })] })] }) }), _jsx("p", { className: "mt-4 text-sm opacity-80", children: "We respect your privacy. Unsubscribe at any time." })] }) }) }));
};
export default NewsletterSection;
