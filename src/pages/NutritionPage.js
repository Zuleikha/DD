import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import ListingCard from '../components/listings/ListingCard';
// Import nutrition data
import nutritionData from '../data/nutrition_data';
const NutritionPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [countyFilter, setCountyFilter] = useState('');
    const [filteredItems, setFilteredItems] = useState(nutritionData);
    // Get unique counties for filter dropdown
    const counties = [...new Set(nutritionData.map(item => item.county))].sort();
    useEffect(() => {
        // Filter items based on search term and county filter
        const filtered = nutritionData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase());
            // Safely check if products exists and contains the search term
            const matchesProducts = item.products ?
                item.products.some((product) => product.toLowerCase().includes(searchTerm.toLowerCase())) :
                false;
            const matchesCounty = countyFilter === '' || item.county === countyFilter;
            return (matchesSearch || matchesProducts) && matchesCounty;
        });
        setFilteredItems(filtered);
    }, [searchTerm, countyFilter]);
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(SEO, { title: "Dog Nutrition Services in Ireland | DogDays.ie", description: "Find dog nutrition services, pet food stores, and dietary consultants across Ireland. Get expert advice on your dog's dietary needs.", canonicalUrl: "https://www.dogdays.ie/nutrition" }), _jsx("section", { className: "bg-blue-600 text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "Dog Nutrition Services" }), _jsx("p", { className: "text-xl max-w-3xl", children: "Find specialized pet food stores, canine nutritionists, and dietary consultants across Ireland. Get expert advice on your dog's dietary needs." })] }) }), _jsx("section", { className: "py-8 bg-white shadow", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs("div", { className: "relative flex-grow", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Search, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", className: "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500", placeholder: "Search by name or keyword...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }), _jsx("div", { className: "w-full md:w-64", children: _jsxs("select", { className: "block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500", value: countyFilter, onChange: (e) => setCountyFilter(e.target.value), children: [_jsx("option", { value: "", children: "All Counties" }), counties.map((county) => (_jsx("option", { value: county, children: county }, county)))] }) })] }) }) }), _jsx("section", { className: "py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("h2", { className: "text-2xl font-bold mb-6", children: [filteredItems.length, " ", filteredItems.length === 1 ? 'Service' : 'Services', " Found"] }), filteredItems.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredItems.map((item) => (_jsx(ListingCard, { id: item.id, name: item.name, image: item.image, rating: item.rating, reviewCount: item.reviewCount, description: item.description, county: item.county, category: "nutrition" }, item.id))) })) : (_jsxs("div", { className: "bg-gray-100 p-6 rounded-lg text-center", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: "No nutrition services found" }), _jsx("p", { className: "text-gray-600", children: "Try adjusting your search or filter criteria to find dog nutrition services." })] }))] }) })] }));
};
export default NutritionPage;
