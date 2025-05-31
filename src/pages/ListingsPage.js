import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Filter, MapPin, Phone, Globe, Mail, Clock } from 'lucide-react';
import ChatbotWidget from '../components/common/ChatbotWidget';
import GoogleMap from '../components/maps/GoogleMap'; // Ensure this component is correctly implemented and import CalculateRouteFunction
import SEO from '../components/common/SEO'; // Ensure this component is correctly implemented
// Add your Google Maps API key here.
// IMPORTANT: Replace "YOUR_Maps_API_KEY" with your actual API key
// This key should ideally be loaded from environment variables in a real project (e.g., process.env.REACT_APP_Maps_API_KEY)
const Maps_API_KEY = ""; // Replace with your actual key
const ListingsPage = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1]; // Get the first part of the path (e.g., 'vets', 'parks', etc.)
    // State for search, filter, and sort
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('all-counties'); // Default to 'All Counties'
    const [sortBy, setSortBy] = useState('distance'); // Default sort option
    const [userLocation, setUserLocation] = useState(''); // State for user's location (for directions)
    // State to hold the calculateRoute function received from the GoogleMap component
    const [mapCalculateRoute, setMapCalculateRoute] = useState(null);
    // Define page content based on current path
    const pageContent = {
        vets: {
            title: 'Find a Vet in Ireland',
            description: 'Locate trusted veterinary services across Ireland for your dog',
            color: '#4A90E2',
            searchPlaceholder: 'Search vets by name or service...',
            mapText: 'Showing vets across Ireland',
            // Note: `locations` here are just for the map pins, actual listings have more detail
            locations: [
                { lat: 53.3643, lng: -6.2977, title: 'Village Vets Cabra' },
                { lat: 53.3723, lng: -6.2701, title: 'Botanic Veterinary Hospital' },
                { lat: 53.3344, lng: -6.2183, title: 'Sandymount Pet Hospital' },
                { lat: 53.2787, lng: -6.3349, title: 'MyVet Firhouse' },
                { lat: 53.3558, lng: -6.3708, title: 'Palmerstown Veterinary Hospital' },
                { lat: 53.3782, lng: -6.1791, title: 'Raheny Veterinary Hospital' },
                { lat: 53.3018, lng: -6.1778, title: 'Blackrock Veterinary Clinic' },
                { lat: 53.3642, lng: -6.2091, title: 'Clontarf Veterinary Hospital' }
            ]
        },
        parks: {
            title: 'Find Dog Parks in Ireland',
            description: 'Discover the best parks and walking trails for you and your dog',
            color: '#7ED321',
            searchPlaceholder: 'Search parks by name or location...',
            mapText: 'Showing dog parks across Ireland',
            locations: [
                { lat: 53.3558, lng: -6.3308, title: 'Phoenix Park Dog Walking Area' },
                { lat: 53.3382, lng: -6.2591, title: 'St. Stephen\'s Green Dog Area' },
                { lat: 53.2987, lng: -6.2649, title: 'Marlay Park Dog Trail' }
            ]
        },
        nutrition: {
            title: 'Find Nutrition Resources',
            description: 'Discover the best nutrition options for your dog',
            color: '#F5A623',
            searchPlaceholder: 'Search nutrition resources...',
            mapText: 'Showing nutrition resources across Ireland',
            locations: [
                { lat: 53.3498, lng: -6.2603, title: 'PawsNutrition Premium Dog Food' },
                { lat: 53.3402, lng: -6.2736, title: 'Healthy Paws Nutrition Center' },
                { lat: 53.3344, lng: -6.2483, title: 'Natural Dog Diet Specialists' }
            ]
        },
        training: {
            title: 'Find Dog Training Services',
            description: 'Connect with professional dog trainers and training facilities',
            color: '#4A90E2',
            searchPlaceholder: 'Search training services...',
            mapText: 'Showing training services across Ireland',
            locations: [
                { lat: 53.3498, lng: -6.2603, title: 'Pawsitive Training Academy' },
                { lat: 53.3402, lng: -6.2736, title: 'Canine Excellence Training Center' },
                { lat: 53.3344, lng: -6.2483, title: 'Good Dog Training School' }
            ]
        },
        grooming: {
            title: 'Find Dog Grooming Services',
            description: 'Discover professional grooming services for your dog',
            color: '#9B59B6',
            searchPlaceholder: 'Search grooming services...',
            mapText: 'Showing grooming services across Ireland',
            locations: [
                { lat: 53.3498, lng: -6.2603, title: 'Paws & Relax Dog Grooming' },
                { lat: 53.3402, lng: -6.2736, title: 'Fluffy Friends Grooming Salon' },
                { lat: 53.3344, lng: -6.2483, title: 'Pampered Paws Premium Grooming' }
            ]
        },
        places: {
            title: 'Find Dog-Friendly Places',
            description: 'Discover restaurants, cafés, and venues that welcome dogs',
            color: '#4A90E2',
            searchPlaceholder: 'Search dog-friendly places...',
            mapText: 'Showing dog-friendly places across Ireland',
            locations: [
                { lat: 53.3498, lng: -6.2603, title: 'Bark & Brew Café' },
                { lat: 53.3402, lng: -6.2736, title: 'Paws & Pints Pub' },
                { lat: 53.3344, lng: -6.2483, title: 'Woofs & Waffles Restaurant' }
            ]
        }
    };
    // Default to vets if path is not recognized
    const currentPage = pageContent[path] || pageContent.vets;
    // Function to get directions
    const getDirections = (destinationLat, destinationLng) => {
        if (!Maps_API_KEY) {
            alert('Google Maps API key is not configured. Directions functionality is not available.');
            return;
        }
        if (!userLocation) {
            alert('Please enter your location in the "Enter your location" input field first.');
            return;
        }
        if (mapCalculateRoute) {
            mapCalculateRoute(userLocation, { lat: destinationLat, lng: destinationLng });
        }
        else {
            alert('Map directions service is not yet loaded. Please ensure the Google Map component is fully initialized.');
        }
    };
    // Comprehensive listings data with real information
    // In a real app, this data would likely come from an API
    const allListings = [
        // VET LISTINGS
        {
            id: 1, title: 'Village Vets Cabra', address: '2 Quarry Rd, Cabra East, Dublin 7, D07 FX97', rating: 4.8, reviewCount: 124, distance: '1.2 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
            featured: true, lat: 53.3643, lng: -6.2977, phone: '01 869 2309', website: 'https://villagevets.ie', email: 'cabra@villagevets.ie', hours: 'Mon-Fri: 8am-7pm, Sat: 9am-1pm, Sun: Closed',
            county: 'dublin'
        },
        {
            id: 2, title: 'Botanic Veterinary Hospital', address: '183 Botanic Rd, Glasnevin, Dublin 9, D09 R9R2', rating: 4.7, reviewCount: 98, distance: '1.8 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            featured: false, lat: 53.3723, lng: -6.2701, phone: '01 837 3745', website: 'https://botanicvets.ie', email: 'info@botanicvets.ie', hours: 'Mon-Fri: 8:30am-6:30pm, Sat: 9am-1pm, Sun: Closed',
            county: 'dublin'
        },
        {
            id: 3, title: 'Sandymount Pet Hospital', address: '19 Sandymount Green, Dublin 4, D04 V9Y0', rating: 4.9, reviewCount: 156, distance: '3.5 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1584553391301-23a229a443bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            featured: true, lat: 53.3344, lng: -6.2183, phone: '01 269 7745', website: 'https://sandymountpethospital.ie', email: 'info@sandymountpethospital.ie', hours: 'Mon-Fri: 8am-7pm, Sat: 9am-2pm, Sun: Emergency Only',
            county: 'dublin'
        },
        {
            id: 4, title: 'MyVet Firhouse', address: 'Unit 1, Woodlawn SC, Firhouse Rd, Dublin 24, D24 P7Y2', rating: 4.6, reviewCount: 87, distance: '7.2 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
            featured: false, lat: 53.2787, lng: -6.3349, phone: '01 451 5395', website: 'https://myvet.ie', email: 'firhouse@myvet.ie', hours: 'Mon-Fri: 8:30am-7pm, Sat: 9am-2pm, Sun: Closed',
            county: 'dublin'
        },
        {
            id: 5, title: 'Palmerstown Veterinary Hospital', address: 'Unit 3, Palmerstown SC, Dublin 20, D20 YV61', rating: 4.8, reviewCount: 112, distance: '5.8 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
            featured: true, lat: 53.3558, lng: -6.3708, phone: '01 623 0911', website: 'https://palmerstownvets.ie', email: 'info@palmerstownvets.ie', hours: 'Mon-Fri: 8am-8pm, Sat: 9am-4pm, Sun: 10am-1pm',
            county: 'dublin'
        },
        {
            id: 6, title: 'Raheny Veterinary Hospital', address: '168 Howth Rd, Raheny, Dublin 5, D05 Y9F4', rating: 4.7, reviewCount: 93, distance: '6.3 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            featured: false, lat: 53.3782, lng: -6.1791, phone: '01 831 2230', website: 'https://rahenyvets.ie', email: 'info@rahenyvets.ie', hours: 'Mon-Fri: 8:30am-6:30pm, Sat: 9am-1pm, Sun: Closed',
            county: 'dublin'
        },
        {
            id: 7, title: 'Blackrock Veterinary Clinic', address: '27 Carysfort Ave, Blackrock, Co. Dublin, A94 X8K4', rating: 4.9, reviewCount: 142, distance: '8.1 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1598894000396-bc7e3242c75e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            featured: true, lat: 53.3018, lng: -6.1778, phone: '01 288 8443', website: 'https://blackrockvet.ie', email: 'info@blackrockvet.ie', hours: 'Mon-Fri: 8am-7pm, Sat: 9am-3pm, Sun: Emergency Only',
            county: 'dublin'
        },
        {
            id: 8, title: 'Clontarf Veterinary Hospital', address: '19 Vernon Ave, Clontarf, Dublin 3, D03 E977', rating: 4.8, reviewCount: 118, distance: '4.2 km', type: 'vet',
            image: 'https://images.unsplash.com/photo-1603077492137-9d7b98358022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            featured: false, lat: 53.3642, lng: -6.2091, phone: '01 833 2501', website: 'https://clontarfvets.ie', email: 'info@clontarfvets.ie', hours: 'Mon-Fri: 8:30am-7pm, Sat: 9am-2pm, Sun: Closed',
            county: 'dublin'
        },
        // PARK LISTINGS
        {
            id: 9, title: 'Phoenix Park Dog Walking Area', address: 'Phoenix Park, Dublin 8', rating: 4.9, reviewCount: 87, distance: '2.5 km', type: 'park',
            image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            lat: 53.3558, lng: -6.3308,
            county: 'dublin'
        },
        {
            id: 10, title: 'St. Stephen\'s Green Dog Area', address: 'St. Stephen\'s Green, Dublin 2', rating: 4.5, reviewCount: 62, distance: '1.1 km', type: 'park',
            image: 'https://images.unsplash.com/photo-1551651653-c5dcb914d809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            lat: 53.3382, lng: -6.2591,
            county: 'dublin'
        },
        {
            id: 11, title: 'Marlay Park Dog Trail', address: 'Marlay Park, Rathfarnham, Dublin 16', rating: 4.8, reviewCount: 93, distance: '7.3 km', type: 'park',
            image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            lat: 53.2987, lng: -6.2649,
            county: 'dublin'
        },
        // GROOMING LISTINGS
        {
            id: 12, title: 'Paws & Relax Dog Grooming', address: '45 Grafton Street, Dublin 2', rating: 4.2, reviewCount: 29, distance: '0.8 km', type: 'grooming',
            image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
            lat: 53.3402, lng: -6.2736,
            county: 'dublin'
        }
    ];
    // Counties in Ireland for the dropdown
    const counties = [
        { name: "All Counties", value: "all-counties" },
        { name: "Carlow", value: "carlow" }, { name: "Cavan", value: "cavan" }, { name: "Clare", value: "clare" },
        { name: "Cork", value: "cork" }, { name: "Donegal", value: "donegal" }, { name: "Dublin", value: "dublin" },
        { name: "Galway", value: "galway" }, { name: "Kerry", value: "kerry" }, { name: "Kildare", value: "kildare" },
        { name: "Kilkenny", value: "kilkenny" }, { name: "Laois", value: "laois" }, { name: "Leitrim", value: "leitrim" },
        { name: "Limerick", value: "limerick" }, { name: "Longford", value: "longford" }, { name: "Louth", value: "louth" },
        { name: "Mayo", value: "mayo" }, { name: "Meath", value: "meath" }, { name: "Monaghan", value: "monaghan" },
        { name: "Offaly", value: "offaly" }, { name: "Roscommon", value: "roscommon" }, { name: "Sligo", value: "sligo" },
        { name: "Tipperary", value: "tipperary" }, { name: "Waterford", value: "waterford" }, { name: "Westmeath", value: "westmeath" },
        { name: "Wexford", value: "wexford" }, { name: "Wicklow", value: "wicklow" }
    ];
    // Filter and sort listings dynamically
    const filteredAndSortedListings = [...allListings] // Create a shallow copy to avoid mutating original data
        .filter(listing => {
        // 1. Filter by type based on path
        const matchesType = (path === 'vets' && listing.type === 'vet') ||
            (path === 'parks' && listing.type === 'park') ||
            (path === 'grooming' && listing.type === 'grooming') ||
            (path === 'nutrition' && listing.type === 'nutrition') ||
            (path === 'training' && listing.type === 'training') ||
            (path === 'places' && listing.type === 'place') ||
            (path === '' && true); // Show all if path is empty/root for listings
        // 2. Filter by search term
        const matchesSearchTerm = searchTerm.toLowerCase() === '' ||
            listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            listing.address.toLowerCase().includes(searchTerm.toLowerCase());
        // 3. Filter by selected county
        const matchesCounty = selectedCounty === 'all-counties' ||
            (listing.county && listing.county.toLowerCase() === selectedCounty);
        return matchesType && matchesSearchTerm && matchesCounty;
    })
        .sort((a, b) => {
        // 4. Sort based on sortBy state
        if (sortBy === 'rating') {
            return b.rating - a.rating; // Descending rating
        }
        if (sortBy === 'name') {
            return a.title.localeCompare(b.title); // Alphabetical by name
        }
        // Default to distance (assuming distance is a string like "1.2 km", convert to number for comparison)
        // This is a basic conversion, more robust parsing might be needed
        const distanceA = parseFloat(a.distance);
        const distanceB = parseFloat(b.distance);
        return distanceA - distanceB; // Ascending distance
    });
    // Define SEO content based on current path
    const getSEOContent = () => {
        switch (path) {
            case 'vets':
                return {
                    title: "Find a Vet in Ireland",
                    description: "Locate trusted veterinary services across Ireland for your dog. Browse our comprehensive directory of qualified vets.",
                    keywords: "dog vets ireland, veterinary services, pet doctors, animal healthcare",
                    canonicalUrl: "https://www.dogdays.ie/vets"
                };
            case 'parks':
                return {
                    title: "Dog Parks in Ireland",
                    description: "Discover the best dog parks and walking trails across Ireland. Find perfect spots for your dog to play and exercise.",
                    keywords: "dog parks ireland, dog walking trails, pet friendly parks, dog exercise areas",
                    canonicalUrl: "https://www.dogdays.ie/parks"
                };
            case 'nutrition':
                return {
                    title: "Dog Nutrition Resources in Ireland",
                    description: "Find the best nutrition options and advice for your dog in Ireland. Discover premium food brands and dietary experts.",
                    keywords: "dog nutrition ireland, dog food, pet diet, canine nutrition",
                    canonicalUrl: "https://www.dogdays.ie/nutrition"
                };
            case 'training':
                return {
                    title: "Dog Training Services in Ireland",
                    description: "Connect with professional dog trainers and training facilities across Ireland for your pet.",
                    keywords: "dog training ireland, puppy training, dog behavior, obedience training",
                    canonicalUrl: "https://www.dogdays.ie/training"
                };
            case 'grooming':
                return {
                    title: "Dog Grooming Services in Ireland",
                    description: "Discover professional grooming services for your dog across Ireland. Find groomers, salons and mobile services.",
                    keywords: "dog grooming ireland, pet grooming, dog haircut, dog spa",
                    canonicalUrl: "https://www.dogdays.ie/grooming"
                };
            case 'places':
                return {
                    title: "Dog-Friendly Places in Ireland",
                    description: "Discover restaurants, cafés, and venues that welcome dogs across Ireland. Find pet-friendly establishments.",
                    keywords: "dog friendly ireland, pet friendly restaurants, dog welcome cafes, places to bring dogs",
                    canonicalUrl: "https://www.dogdays.ie/places"
                };
            default:
                return {
                    title: "Find Dog-Friendly Services",
                    description: "Discover dog-friendly services across Ireland including vets, parks, grooming, and more.",
                    keywords: "dog friendly ireland, pet services, dog vets, dog parks, dog grooming, dog nutrition, dog training",
                    canonicalUrl: "https://www.dogdays.ie"
                };
        }
    };
    const seoContent = getSEOContent();
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(SEO, { title: seoContent.title, description: seoContent.description, keywords: seoContent.keywords, canonicalUrl: seoContent.canonicalUrl }), _jsxs("main", { className: "flex-grow", children: [_jsx("div", { className: "text-white py-12", style: { backgroundColor: currentPage.color }, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: currentPage.title }), _jsx("p", { className: "text-xl max-w-3xl", children: currentPage.description })] }) }), _jsx("div", { className: "bg-white shadow-md", children: _jsx("div", { className: "container mx-auto px-4 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs("div", { className: "flex-grow relative", children: [_jsxs("label", { htmlFor: "search-input", className: "sr-only", children: ["Search ", path, " by name or service"] }), _jsx("input", { type: "text", id: "search-input", name: "searchTerm" // Added name attribute
                                                , placeholder: currentPage.searchPlaceholder, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent", style: { '--tw-ring-color': currentPage.color }, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), _jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" })] }), _jsxs("div", { className: "md:w-1/4", children: [_jsx("label", { htmlFor: "county-select", className: "sr-only", children: "Select county" }), _jsx("select", { id: "county-select", name: "selectedCounty" // Added name attribute
                                                , className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent", "aria-label": "Select county", style: { '--tw-ring-color': currentPage.color }, value: selectedCounty, onChange: (e) => setSelectedCounty(e.target.value), children: counties.map((county) => (_jsx("option", { value: county.value, children: county.name }, county.value))) })] }), _jsxs("button", { className: "px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center", children: [_jsx(Filter, { className: "mr-2 h-5 w-5" }), _jsx("span", { children: "Filters" })] })] }) }) }), _jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-1 order-2 lg:order-1", children: _jsxs("div", { className: "sticky top-24 bg-white rounded-lg shadow-lg overflow-hidden", children: [_jsxs("div", { className: "p-4 bg-white border-b", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: "Get Directions" }), _jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx("label", { htmlFor: "user-location-input", className: "sr-only", children: "Enter your location" }), _jsx("input", { type: "text", id: "user-location-input", name: "userLocation" // Added name attribute
                                                                , placeholder: "Enter your location", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent", style: { '--tw-ring-color': currentPage.color }, value: userLocation, onChange: (e) => setUserLocation(e.target.value) })] })] }), Maps_API_KEY ? (_jsx(GoogleMap, { apiKey: Maps_API_KEY, locations: currentPage.locations, center: { lat: 53.3498, lng: -6.2603 }, zoom: 12, onDirectionsServiceReady: setMapCalculateRoute, directionsPanelId: "directions-panel" // Pass the ID of the directions panel
                                             })) : (_jsxs("div", { className: "bg-gray-100 p-6 rounded-lg text-center", style: { height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }, children: [_jsx("p", { className: "text-gray-700 mb-2 font-semibold", children: "Map temporarily unavailable" }), _jsx("p", { className: "text-sm text-gray-500", children: "Google Maps will be available soon" }), _jsx("p", { className: "text-xs text-gray-400 mt-4", children: "Locations shown in list view below" })] })), _jsx("div", { id: "directions-panel", className: "p-4 max-h-[300px] overflow-y-auto" })] }) }), _jsxs("div", { className: "lg:col-span-2 order-1 lg:order-2", children: [_jsxs("div", { className: "mb-6 flex justify-between items-center", children: [_jsxs("h2", { className: "text-xl font-semibold text-gray-800", children: [filteredAndSortedListings.length, " ", path === 'vets' ? 'Vets' : path === 'parks' ? 'Parks' : path === 'grooming' ? 'Grooming Services' : path === 'nutrition' ? 'Nutrition Resources' : path === 'training' ? 'Training Services' : path === 'places' ? 'Dog-Friendly Places' : 'Listings', " Found"] }), _jsxs("div", { className: "flex items-center", children: [_jsx("label", { htmlFor: "sort-by-select", className: "mr-2 text-gray-600", children: "Sort by:" }), _jsxs("select", { id: "sort-by-select", name: "sortBy" // Added name attribute
                                                            , className: "border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent", style: { '--tw-ring-color': currentPage.color }, value: sortBy, onChange: (e) => setSortBy(e.target.value), children: [_jsx("option", { value: "distance", children: "Distance" }), _jsx("option", { value: "rating", children: "Rating" }), _jsx("option", { value: "name", children: "Name (A-Z)" })] })] })] }), _jsx("div", { className: "space-y-6", children: filteredAndSortedListings.length > 0 ? (filteredAndSortedListings.map(listing => (_jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsxs("div", { className: "md:flex", children: [_jsxs("div", { className: "md:w-1/3 h-48 md:h-auto relative", children: [_jsx("img", { src: listing.image, alt: listing.title, className: "w-full h-full object-cover" }), listing.featured && (_jsx("div", { className: "absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded", children: "Featured" }))] }), _jsxs("div", { className: "md:w-2/3 p-6", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-gray-800 mb-1", children: listing.title }), _jsxs("p", { className: "text-gray-600 mb-2 flex items-center", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1 text-gray-400" }), listing.address] })] }), _jsxs("div", { className: "flex items-center bg-blue-50 px-2 py-1 rounded", children: [_jsx("span", { className: "text-blue-600 font-semibold mr-1", children: listing.rating }), _jsx("span", { className: "text-yellow-500", children: "\u2605" }), _jsxs("span", { className: "text-gray-500 text-sm ml-1", children: ["(", listing.reviewCount, ")"] })] })] }), (listing.type === 'vet' || listing.type === 'grooming' || listing.type === 'nutrition' || listing.type === 'training' || listing.type === 'place') && (_jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [" ", listing.phone && (_jsxs("p", { className: "text-gray-700 flex items-center", children: [_jsx(Phone, { className: "h-4 w-4 mr-2 text-gray-500" }), _jsx("a", { href: `tel:${listing.phone}`, className: "hover:text-blue-600", children: listing.phone })] })), listing.website && (_jsxs("p", { className: "text-gray-700 flex items-center", children: [_jsx(Globe, { className: "h-4 w-4 mr-2 text-gray-500" }), _jsxs("a", { href: listing.website, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-600", children: [listing.website.replace(/^(https?:\/\/)?(www\.)?/i, '').split('/')[0], " "] })] })), listing.email && (_jsxs("p", { className: "text-gray-700 flex items-center", children: [_jsx(Mail, { className: "h-4 w-4 mr-2 text-gray-500" }), _jsx("a", { href: `mailto:${listing.email}`, className: "hover:text-blue-600", children: listing.email })] })), listing.hours && (_jsxs("p", { className: "text-gray-700 flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-2 text-gray-500" }), _jsx("span", { children: listing.hours })] }))] })), _jsxs("div", { className: "mt-4 flex justify-between items-center", children: [_jsxs("span", { className: "text-gray-600 text-sm", children: [listing.distance, " from center"] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Link, { to: `/${path}/${listing.id}`, className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm", style: { backgroundColor: currentPage.color }, children: "View Details" }), _jsx("button", { className: `px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm ${!Maps_API_KEY || !mapCalculateRoute ? 'opacity-50 cursor-not-allowed' : ''}`, onClick: () => getDirections(listing.lat, listing.lng), disabled: !Maps_API_KEY || !mapCalculateRoute, children: "Get Directions" })] })] })] })] }) }, listing.id)))) : (_jsx("p", { className: "text-center text-gray-600 text-lg", children: "No listings found matching your criteria." })) })] })] }) })] }), _jsx(ChatbotWidget, {})] }));
};
export default ListingsPage;
