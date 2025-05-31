import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import parksData from '../data/parks_data.js';
import ListingCard from '../components/listings/ListingCard';
const ParksPage = () => {
    // State for search and filtering
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('');
    const [filteredParks, setFilteredParks] = useState(parksData);
    // Get unique counties for the filter dropdown
    const counties = Array.from(new Set(parksData.map(park => park.county))).sort();
    // Filter parks when search term or county changes
    useEffect(() => {
        let results = parksData;
        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(park => park.name.toLowerCase().includes(term) ||
                park.description.toLowerCase().includes(term) ||
                // Use optional chaining for amenities
                park.amenities?.some(amenity => amenity.toLowerCase().includes(term)));
        }
        // Filter by county
        if (selectedCounty && selectedCounty !== 'All Counties') {
            results = results.filter(park => park.county === selectedCounty);
        }
        setFilteredParks(results);
    }, [searchTerm, selectedCounty]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-2", children: "Dog Parks & Walks in Ireland" }), _jsx("p", { className: "text-gray-600", children: "Find the best parks and walking trails for you and your dog" })] }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6 mb-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Search, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", placeholder: "Search by name or amenity...", className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Filter, { className: "h-5 w-5 text-gray-400" }) }), _jsxs("select", { className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none", value: selectedCounty, onChange: (e) => setSelectedCounty(e.target.value), children: [_jsx("option", { value: "", children: "All Counties" }), counties.map((county) => (_jsx("option", { value: county, children: county }, county)))] }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: _jsx("svg", { className: "h-5 w-5 text-gray-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })] })] }) }), _jsxs("div", { className: "bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100", children: [_jsx("h2", { className: "text-xl font-semibold mb-3 text-blue-800", children: "About Dog Parks & Walks" }), _jsx("p", { className: "text-gray-700 mb-4", children: "Dog parks and walking trails provide essential exercise and socialization opportunities for your dog. Finding the right outdoor space can make a big difference in your dog's happiness and wellbeing." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Leash Rules" }), _jsx("p", { className: "text-gray-600", children: "Always check if the park has off-leash areas or requires dogs to be leashed" })] }), _jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Amenities" }), _jsx("p", { className: "text-gray-600", children: "Look for parks with water stations, waste bins, and secure fencing" })] }), _jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Park Etiquette" }), _jsx("p", { className: "text-gray-600", children: "Always clean up after your dog and respect other park users" })] })] })] }), _jsx("div", { className: "mb-6", children: _jsxs("p", { className: "text-gray-600", children: ["Showing ", filteredParks.length, " parks & walks", selectedCounty ? ` in ${selectedCounty}` : ' across Ireland', searchTerm ? ` matching "${searchTerm}"` : ''] }) }), filteredParks.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredParks.map((park) => (_jsx(ListingCard, { id: park.id, name: park.name, image: park.image, rating: park.rating, reviewCount: park.reviewCount, description: park.description, county: park.county, category: "parks" }, park.id))) })) : (_jsxs("div", { className: "bg-gray-50 p-8 rounded-lg text-center", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No parks found" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your search criteria or selecting a different county." }), _jsx("button", { onClick: () => {
                            setSearchTerm('');
                            setSelectedCounty('');
                        }, className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors", children: "Reset Filters" })] }))] }));
};
export default ParksPage;
