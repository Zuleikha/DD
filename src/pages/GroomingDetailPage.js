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
    // Generic images array using direct paths
    const genericImages = [
        '/src/assets/images/grooming/grooming_generic_1.png',
        '/src/assets/images/grooming/grooming_generic_2.png',
        '/src/assets/images/grooming/grooming_generic_3_new.png'
    ];
    // Function to get generic image based on groomer ID
    const getGenericImage = (groomerId) => {
        return genericImages[(groomerId - 1) % genericImages.length];
    };
    useEffect(() => {
        // Find the groomer with the matching ID
        const groomerId = parseInt(id || '0');
        const foundGroomer = groomingData.find((g) => g.id === groomerId); // Changed to any to avoid type conflicts
        if (foundGroomer) {
            setGroomer(foundGroomer);
        }
        else {
            // Redirect to grooming page if groomer not found
            navigate('/grooming');
        }
    }, [id, navigate]);
    if (!groomer) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" }) }));
    }
    // Use generic image if no image provided
    const displayImage = groomer.image || getGenericImage(groomer.id);
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(SEO, { title: `${groomer.name} | Dog Grooming | DogDays.ie`, description: `Visit ${groomer.name} in ${groomer.county || 'Ireland'}. ${groomer.description}`, canonicalUrl: `https://www.dogdays.ie/grooming/${groomer.id}` }), _jsxs("div", { className: "relative h-64 md:h-96 bg-gray-800", children: [_jsx("img", { src: displayImage, alt: groomer.name, className: "w-full h-full object-cover opacity-80", style: {
                            imageRendering: '-webkit-optimize-contrast'
                        } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("button", { onClick: () => navigate('/grooming'), className: "flex items-center text-white mb-4 hover:underline", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }), "Back to Grooming Services"] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: groomer.name }), groomer.address && groomer.county && (_jsxs("div", { className: "flex items-center mt-2", children: [_jsx(MapPin, { className: "h-5 w-5 mr-1" }), _jsxs("span", { children: [groomer.address, ", ", groomer.county] })] }))] }) })] }), _jsx("div", { className: "container mx-auto py-8 px-4", children: _jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-6 w-6 text-yellow-400" }), _jsx("span", { className: "text-xl font-bold ml-1", children: (groomer.rating || 0).toFixed(1) })] }), _jsx("span", { className: "mx-2 text-gray-400", children: "\u2022" }), _jsxs("span", { className: "text-gray-600", children: [groomer.reviewCount || 0, " reviews"] })] }), _jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-xl font-bold mb-4 text-purple-800", children: ["About ", groomer.name] }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: groomer.description })] }), groomer.services && groomer.services.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-purple-800", children: "Services" }), _jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: groomer.services.map((service, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "h-2 w-2 bg-purple-500 rounded-full mr-2" }), _jsx("span", { children: service })] }, index))) })] })), groomer.specialties && groomer.specialties.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-purple-800", children: "Specialties" }), _jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: groomer.specialties.map((specialty, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "h-2 w-2 bg-purple-500 rounded-full mr-2" }), _jsx("span", { children: specialty })] }, index))) })] })), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-purple-800", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [groomer.address && groomer.county && (_jsxs("div", { className: "flex items-center", children: [_jsx(MapPin, { className: "h-5 w-5 text-purple-500 mr-2" }), _jsxs("span", { children: [groomer.address, ", ", groomer.county] })] })), groomer.phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 text-purple-500 mr-2" }), _jsx("a", { href: `tel:${groomer.phone}`, className: "text-purple-600 hover:underline", children: groomer.phone })] })), groomer.email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-purple-500 mr-2" }), _jsx("a", { href: `mailto:${groomer.email}`, className: "text-purple-600 hover:underline", children: groomer.email })] })), groomer.website && (_jsxs("div", { className: "flex items-center", children: [_jsx(Globe, { className: "h-5 w-5 text-purple-500 mr-2" }), _jsx("a", { href: groomer.website, target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline", children: groomer.website.replace(/^https?:\/\//, '').replace(/\/$/, '') })] }))] })] }), groomer.hours && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-purple-800", children: "Opening Hours" }), _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-5 w-5 text-purple-500 mr-2 mt-0.5" }), _jsx("div", { children: _jsx("p", { className: "whitespace-pre-line", children: groomer.hours }) })] })] })), _jsxs("div", { className: "bg-purple-50 rounded-lg p-6 border border-purple-100", children: [_jsx("h3", { className: "text-lg font-semibold text-purple-800 mb-2", children: "Ready to book an appointment?" }), _jsxs("p", { className: "text-gray-700 mb-4", children: ["Contact ", groomer.name, " today to schedule professional grooming for your furry friend."] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [groomer.phone && (_jsx("a", { href: `tel:${groomer.phone}`, className: "bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors text-center", children: "Call Now" })), groomer.email && (_jsx("a", { href: `mailto:${groomer.email}`, className: "bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition-colors text-center", children: "Send Email" }))] })] })] }) }) })] }));
};
export default GroomingDetailPage;
