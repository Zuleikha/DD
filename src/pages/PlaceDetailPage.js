import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import SEO from '../components/common/SEO';
// Import places data
import placesData from '../data/places_data';
const PlaceDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [place, setPlace] = useState(null);
    useEffect(() => {
        // Find the place with the matching ID
        const placeId = parseInt(id || '0');
        const foundPlace = placesData.find(p => p.id === placeId);
        if (foundPlace) {
            setPlace(foundPlace);
        }
        else {
            // Redirect to places page if place not found
            navigate('/places');
        }
    }, [id, navigate]);
    if (!place) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(SEO, { title: `${place.name} | Dog-Friendly Places | DogDays.ie`, description: `Visit ${place.name} in ${place.county}. ${place.description}`, canonicalUrl: `https://www.dogdays.ie/places/${place.id}` }), _jsxs("div", { className: "relative h-64 md:h-96 bg-gray-800", children: [_jsx("img", { src: place.image, alt: place.name, className: "w-full h-full object-cover opacity-80" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("button", { onClick: () => navigate('/places'), className: "flex items-center text-white mb-4 hover:underline", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }), "Back to Dog-Friendly Places"] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: place.name }), _jsxs("div", { className: "flex items-center mt-2", children: [_jsx(MapPin, { className: "h-5 w-5 mr-1" }), _jsxs("span", { children: [place.address, ", ", place.county] })] })] }) })] }), _jsx("div", { className: "container mx-auto py-8 px-4", children: _jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-6 w-6 text-yellow-400" }), _jsx("span", { className: "text-xl font-bold ml-1", children: place.rating.toFixed(1) })] }), _jsx("span", { className: "mx-2 text-gray-400", children: "\u2022" }), _jsxs("span", { className: "text-gray-600", children: [place.reviewCount, " reviews"] })] }), _jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-xl font-bold mb-4", children: ["About ", place.name] }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: place.description })] }), place.amenities && place.amenities.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Dog-Friendly Amenities" }), _jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: place.amenities.map((amenity, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mr-2" }), _jsx("span", { children: amenity })] }, index))) })] })), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(MapPin, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsxs("span", { children: [place.address, ", ", place.county] })] }), place.phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: `tel:${place.phone}`, className: "text-blue-600 hover:underline", children: place.phone })] })), place.email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: `mailto:${place.email}`, className: "text-blue-600 hover:underline", children: place.email })] })), place.website && (_jsxs("div", { className: "flex items-center", children: [_jsx(Globe, { className: "h-5 w-5 text-gray-500 mr-2" }), _jsx("a", { href: place.website, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: place.website.replace(/^https?:\/\//, '').replace(/\/$/, '') })] }))] })] }), place.hours && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Opening Hours" }), _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-5 w-5 text-gray-500 mr-2 mt-0.5" }), _jsx("div", { children: _jsx("p", { className: "whitespace-pre-line", children: place.hours }) })] })] }))] }) }) })] }));
};
export default PlaceDetailPage;
