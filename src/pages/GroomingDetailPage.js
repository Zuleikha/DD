import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';
// Import grooming data
import groomingData from '../data/grooming_data';
const GroomingDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [groomer, setGroomer] = useState(null);
    useEffect(() => {
        // Find the groomer with the matching ID
        const groomerId = parseInt(id || '0');
        const foundGroomer = groomingData.find(g => g.id === groomerId);
        if (foundGroomer) {
            setGroomer(foundGroomer);
        }
        else {
            // Redirect to grooming page if groomer not found
            navigate('/grooming');
        }
    }, [id, navigate]);
    if (!groomer) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(SEO, { title: `${groomer.name} | Dog Grooming | DogDays.ie`, description: `Visit ${groomer.name} in ${groomer.county}. ${groomer.description}`, canonicalUrl: `https://www.dogdays.ie/grooming/${groomer.id}` }), _jsxs("div", { className: "relative h-64 md:h-96 bg-gray-800", children: [_jsx("img", { src: groomer.image, alt: groomer.name, className: "w-full h-full object-cover opacity-80" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("button", { onClick: () => navigate('/grooming'), className: "flex items-center text-white mb-4 hover:underline", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }), "Back to Grooming Services"] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: groomer.name }), _jsxs("div", { className: "flex items-center mt-2", children: [_jsx(MapPin, { className: "h-5 w-5 mr-1" }), _jsxs("span", { children: [groomer.address, ", ", groomer.county] })] })] }) })] }), _jsx("div", { className: "container mx-auto py-8 px-4", children: _jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-6 w-6 text-yellow-400" }), _jsx("span", { className: "text-xl font-bold ml-1", children: groomer.rating.toFixed(1) })] }), _jsx("span", { className: "mx-2 text-gray-400", children: "\u2022" }), _jsxs("span", { className: "text-gray-600", children: [groomer.reviewCount, " reviews"] })] }), _jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-xl font-bold mb-4", children: ["About ", groomer.name] }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: groomer.description })] }), groomer.services && groomer.services.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Services" }), _jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: groomer.services.map((service, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mr-2" }), _jsx("span", { children: service })] }, index))) })] })), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(MapPin, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsxs("span", { children: [groomer.address, ", ", groomer.county] })] }), groomer.phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: `tel:${groomer.phone}`, className: "text-blue-600 hover:underline", children: groomer.phone })] })), groomer.email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: `mailto:${groomer.email}`, className: "text-blue-600 hover:underline", children: groomer.email })] })), groomer.website && (_jsxs("div", { className: "flex items-center", children: [_jsx(Globe, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: groomer.website, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: groomer.website.replace(/^https?:\/\//, '').replace(/\/$/, '') })] }))] })] }), groomer.hours && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Opening Hours" }), _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-5 w-5 text-gray-500 mr-2 mt-0.5" }), _jsx("div", { children: _jsx("p", { className: "whitespace-pre-line", children: groomer.hours }) })] })] }))] }) }) })] }));
};
export default GroomingDetailPage;
