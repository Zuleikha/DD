import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleMap from '../maps/GoogleMap';
const MapSection = () => {
    // State for selected location types (filters)
    const [selectedTypes, setSelectedTypes] = useState(['vet', 'park', 'grooming', 'cafe']);
    // Sample location data - replace with your actual data from API or database
    const allLocations = [
        {
            id: 1,
            lat: 53.3498,
            lng: -6.2603,
            title: 'Happy Paws Veterinary Clinic',
            type: 'vet',
            address: '123 Main Street, Dublin 2',
            rating: 5,
            reviews: 42
        },
        {
            id: 2,
            lat: 53.3558,
            lng: -6.3294,
            title: 'Phoenix Park Dog Walking Area',
            type: 'park',
            address: 'Phoenix Park, Dublin 8',
            rating: 5,
            reviews: 87
        },
        {
            id: 3,
            lat: 53.3429,
            lng: -6.2674,
            title: 'Paws & Relax Dog Grooming',
            type: 'grooming',
            address: '45 Grafton Street, Dublin 2',
            rating: 4,
            reviews: 29
        },
        {
            id: 4,
            lat: 53.3472,
            lng: -6.2592,
            title: 'Bark & Brew Dog Café',
            type: 'cafe',
            address: '78 Camden Street, Dublin 2',
            rating: 4,
            reviews: 56
        }
    ];
    // Filter locations based on selected types
    const filteredLocations = allLocations.filter(location => selectedTypes.includes(location.type));
    // Toggle a location type in the filter
    const toggleLocationType = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter(t => t !== type));
        }
        else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };
    // Get the nearby locations for the sidebar (limit to 3)
    const nearbyLocations = filteredLocations.slice(0, 3);
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-gray-800", children: "Discover Places Near You" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2 rounded-lg overflow-hidden shadow-lg", children: _jsxs("div", { className: "relative", children: [_jsx(GoogleMap, { apiKey: "AIzaSyA9nmAemVv4-rkPRHhs52i0-7sVCb5GEC4" // Replace with your actual API key
                                        , locations: filteredLocations.map(loc => ({
                                            lat: loc.lat,
                                            lng: loc.lng,
                                            title: loc.title
                                        })), center: { lat: 53.3498, lng: -6.2603 }, zoom: 12, mapType: "roadmap" }), _jsxs("div", { className: "absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 z-10", children: [_jsxs("div", { className: "flex items-center mb-2", children: [_jsx(Filter, { className: "w-4 h-4 text-[#4A90E2] mr-2" }), _jsx("span", { className: "text-sm font-medium text-gray-700", children: "Filter" })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx("button", { className: `px-3 py-1 text-xs rounded-full ${selectedTypes.includes('vet') ? 'bg-[#4A90E2] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white'}`, onClick: () => toggleLocationType('vet'), children: "Vets" }), _jsx("button", { className: `px-3 py-1 text-xs rounded-full ${selectedTypes.includes('park') ? 'bg-[#4A90E2] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white'}`, onClick: () => toggleLocationType('park'), children: "Parks" }), _jsx("button", { className: `px-3 py-1 text-xs rounded-full ${selectedTypes.includes('cafe') ? 'bg-[#4A90E2] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white'}`, onClick: () => toggleLocationType('cafe'), children: "Caf\u00E9s" }), _jsx("button", { className: `px-3 py-1 text-xs rounded-full ${selectedTypes.includes('grooming') ? 'bg-[#4A90E2] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#4A90E2] hover:text-white'}`, onClick: () => toggleLocationType('grooming'), children: "Groomers" })] })] })] }) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Nearby Dog-Friendly Places" }), _jsxs("div", { className: "space-y-4", children: [nearbyLocations.length > 0 ? (nearbyLocations.map((location) => (_jsx("div", { className: "border-b border-gray-200 pb-4", children: _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: `bg-[#F8F4E3] rounded-lg p-2 mr-4`, children: _jsx(MapPin, { className: `w-6 h-6 ${location.type === 'vet' ? 'text-[#F5A623]' :
                                                                    location.type === 'park' ? 'text-[#7ED321]' :
                                                                        location.type === 'grooming' ? 'text-[#4A90E2]' :
                                                                            'text-[#BD10E0]'}` }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-800", children: location.title }), _jsx("p", { className: "text-sm text-gray-600", children: location.address }), _jsxs("div", { className: "flex items-center mt-1", children: [_jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((star) => (_jsx("svg", { className: `w-4 h-4 ${star <= location.rating ? 'text-yellow-400' : 'text-gray-300'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, star))) }), _jsxs("span", { className: "text-xs text-gray-500 ml-2", children: ["(", location.reviews, " reviews)"] })] }), _jsxs("p", { className: "text-xs text-[#4A90E2] mt-1", children: [Math.round((Math.random() * 2 + 0.5) * 10) / 10, " km away \u2022 ", location.type === 'vet' ? 'Vet' :
                                                                            location.type === 'park' ? 'Park' :
                                                                                location.type === 'grooming' ? 'Grooming' :
                                                                                    'Café'] })] })] }) }, location.id)))) : (_jsx("div", { className: "text-center py-4 text-gray-500", children: "No places found with the selected filters." })), _jsx("div", { className: "pt-2", children: _jsx(Link, { to: "/places", className: "block w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors duration-300 text-center", children: "View More Places" }) })] })] }) })] })] }) }));
};
export default MapSection;
