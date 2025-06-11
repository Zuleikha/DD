import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const BackToHomeButton = ({ className = "", variant = "light" }) => {
    const baseClasses = "inline-flex items-center transition-colors mb-8 group";
    const variantClasses = variant === 'light'
        ? "text-white hover:text-purple-200"
        : "text-gray-600 hover:text-purple-600";
    return (_jsxs(Link, { to: "/", className: `${baseClasses} ${variantClasses} ${className}`, children: [_jsx(ArrowLeft, { className: "h-5 w-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" }), "Back to Home"] }));
};
export default BackToHomeButton;
