import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import trainingData from '../data/training_data';
import ListingCard from '../components/listings/ListingCard';
const TrainingPage = () => {
    // State for search and filtering
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('');
    const [filteredTrainers, setFilteredTrainers] = useState(trainingData);
    // Get unique counties for the filter dropdown
    const counties = Array.from(new Set(trainingData.map(trainer => trainer.county))).sort();
    // Filter trainers when search term or county changes
    useEffect(() => {
        let results = trainingData;
        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(trainer => trainer.name.toLowerCase().includes(term) ||
                trainer.description.toLowerCase().includes(term) ||
                trainer.services.some(service => service.toLowerCase().includes(term)) ||
                trainer.specialties.some(specialty => specialty.toLowerCase().includes(term)) ||
                // Safely check trainingTypes with optional chaining
                (trainer.trainingTypes ?
                    trainer.trainingTypes.some((type) => type.toLowerCase().includes(term)) :
                    false));
        }
        // Filter by county
        if (selectedCounty && selectedCounty !== 'All Counties') {
            results = results.filter(trainer => trainer.county === selectedCounty);
        }
        setFilteredTrainers(results);
    }, [searchTerm, selectedCounty]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-2", children: "Dog Training in Ireland" }), _jsx("p", { className: "text-gray-600", children: "Connect with professional dog trainers and behavior specialists" })] }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6 mb-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Search, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", placeholder: "Search by name, service, or specialty...", className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Filter, { className: "h-5 w-5 text-gray-400" }) }), _jsxs("select", { className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none", value: selectedCounty, onChange: (e) => setSelectedCounty(e.target.value), children: [_jsx("option", { value: "", children: "All Counties" }), counties.map((county) => (_jsx("option", { value: county, children: county }, county)))] }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: _jsx("svg", { className: "h-5 w-5 text-gray-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })] })] }) }), _jsxs("div", { className: "bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100", children: [_jsx("h2", { className: "text-xl font-semibold mb-3 text-blue-800", children: "About Dog Training" }), _jsx("p", { className: "text-gray-700 mb-4", children: "Professional dog training helps build a strong relationship between you and your dog through positive reinforcement techniques. From basic obedience to specialized behavior modification, trainers can help with a wide range of needs." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Training Methods" }), _jsx("p", { className: "text-gray-600", children: "Look for trainers who use positive, reward-based methods rather than punishment" })] }), _jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Class Types" }), _jsx("p", { className: "text-gray-600", children: "Options include group classes, private sessions, and specialized behavior consultations" })] }), _jsxs("div", { className: "bg-white p-3 rounded-md shadow-sm", children: [_jsx("h3", { className: "font-semibold text-blue-700", children: "Consistency" }), _jsx("p", { className: "text-gray-600", children: "Regular practice between sessions is key to successful training outcomes" })] })] })] }), _jsx("div", { className: "mb-6", children: _jsxs("p", { className: "text-gray-600", children: ["Showing ", filteredTrainers.length, " dog trainers", selectedCounty ? ` in ${selectedCounty}` : ' across Ireland', searchTerm ? ` matching "${searchTerm}"` : ''] }) }), filteredTrainers.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredTrainers.map((trainer) => (_jsx(ListingCard, { id: trainer.id, name: trainer.name, image: trainer.image, rating: trainer.rating, reviewCount: trainer.reviewCount, description: trainer.description, county: trainer.county, category: "training" }, trainer.id))) })) : (_jsxs("div", { className: "bg-gray-50 p-8 rounded-lg text-center", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-2", children: "No dog trainers found" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your search criteria or selecting a different county." }), _jsx("button", { onClick: () => {
                            setSearchTerm('');
                            setSelectedCounty('');
                        }, className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors", children: "Reset Filters" })] }))] }));
};
export default TrainingPage;
